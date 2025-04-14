import { NextRequest, NextResponse } from 'next/server';

// PostHog EU endpoints
const POSTHOG_API_HOST = 'https://eu.i.posthog.com';
const POSTHOG_ASSETS_HOST = 'https://eu-assets.i.posthog.com';

/**
 * Helper function to determine the correct host for the given path
 */
function getTargetHost(path: string): string {
  if (path.includes('array') && (path.includes('config.js') || path.includes('config?'))) {
    return POSTHOG_ASSETS_HOST;
  }
  return POSTHOG_API_HOST;
}

/**
 * Catch-all route handler for proxying PostHog requests
 * This handles all paths including /decide/, /e/, and /array/
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return proxyRequest(request, params.path, 'GET');
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return proxyRequest(request, params.path, 'POST');
}

export async function OPTIONS(
  request: NextRequest
) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Max-Age': '86400',
    },
  });
}

/**
 * Proxy the request to the appropriate PostHog endpoint
 */
async function proxyRequest(request: NextRequest, pathSegments: string[], method: string): Promise<NextResponse> {
  try {
    // Reconstruct the path from segments
    const path = pathSegments.join('/');

    // Get the target host based on the path
    const targetHost = getTargetHost(path);

    // Create the full target URL including query parameters
    const url = new URL(request.url);
    const targetUrl = new URL(`${path}${url.search ? url.search : ''}`, targetHost);

    console.log(`Proxying ${method} request to PostHog:`, {
      originalUrl: request.url,
      targetUrl: targetUrl.toString(),
      path: path
    });

    // Handle request headers
    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      if (!['host', 'connection', 'content-length', 'content-encoding', 'transfer-encoding'].includes(key.toLowerCase())) {
        headers[key] = value;
      }
    });
    headers.host = new URL(targetHost).host;

    // For fetch requests, set accept header
    if (!headers['accept']) {
      headers['accept'] = '*/*';
    }

    try {
      // Get request body for POST requests
      let body: ArrayBuffer | undefined = undefined;
      if (method === 'POST') {
        body = await request.arrayBuffer();
      }

      // Send the request to PostHog
      const response = await fetch(targetUrl.toString(), {
        method,
        headers,
        body,
        redirect: 'follow',
      });

      // Create a response with proper streaming handling
      const responseHeaders = new Headers();
      response.headers.forEach((value, key) => {
        // Skip problematic headers that could cause chunked encoding issues
        if (!['content-encoding', 'content-length', 'transfer-encoding'].includes(key.toLowerCase())) {
          responseHeaders.set(key, value);
        }
      });

      // Add CORS headers
      responseHeaders.set('Access-Control-Allow-Origin', '*');

      // For text or binary content, get as array buffer
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json') ||
          contentType.includes('text/') ||
          contentType.includes('application/javascript')) {
        // Handle text-based responses as text
        const text = await response.text();
        return new NextResponse(text, {
          status: response.status,
          statusText: response.statusText,
          headers: responseHeaders,
        });
      } else {
        // Handle binary responses as array buffer
        const blob = await response.blob();
        return new NextResponse(blob, {
          status: response.status,
          statusText: response.statusText,
          headers: responseHeaders,
        });
      }
    } catch (fetchError) {
      console.error('Error during fetch operation:', fetchError);
      // Create a nice error message for debugging
      return NextResponse.json({
        error: 'Error during fetch operation',
        message: fetchError instanceof Error ? fetchError.message : String(fetchError),
        url: targetUrl.toString(),
        method: method
      }, { status: 500 });
    }
  } catch (error) {
    console.error(`Error proxying ${method} request to PostHog:`, error);
    return NextResponse.json({
      error: 'Failed to proxy request to PostHog',
      message: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
