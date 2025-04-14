# PostHog Integration

This document outlines the implementation of PostHog analytics in the Futureproof website.

## Overview

PostHog has been integrated as an analytics solution with EU data hosting. The implementation includes:

1. A server-side PostHog client for backend tracking
2. Request rewrites in next.config.mjs for client-side tracking
3. Configuration for PostHog EU endpoints

## Key Components

### 1. Server-Side Client

Located in `posthog.ts`, this exports a PostHog client configured for server-side usage:

```typescript
import { PostHog } from "posthog-node"

export default function PostHogClient() {
  const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: "https://eu.i.posthog.com",
    flushAt: 1,
    flushInterval: 0,
  })
  return posthogClient
}
```

### 2. URL Rewrites

The project has URL rewrite configurations in both Next.js and Netlify to ensure proper routing of PostHog requests in all environments.

#### Next.js Configuration (next.config.mjs)

```javascript
rewrites: async () => {
  return [
    {
      source: "/ingest/static/:path*",
      destination: "https://eu-assets.i.posthog.com/static/:path*",
    },
    {
      source: "/ingest/:path*",
      destination: "https://eu.i.posthog.com/:path*",
    },
    {
      source: "/ingest/decide",
      destination: "https://eu.i.posthog.com/decide",
    },
  ];
},
```

#### Netlify Configuration (netlify.toml)

```toml
[[redirects]]
  from = "/ingest/static/*"
  to = "https://eu-assets.i.posthog.com/static/:splat"
  host = "eu-assets.i.posthog.com"
  status = 200
  force = true

[[redirects]]
  from = "/ingest/*"
  to = "https://eu.i.posthog.com/:splat"
  host = "eu.i.posthog.com"
  status = 200
  force = true
```

These rewrites help with:
- Avoiding ad blockers that might block direct PostHog requests
- Simplifying the implementation without custom server code
- Improved privacy for users

The rewrites handle all PostHog endpoint types:
- `/decide/` - For feature flags and experiments
- `/e/` - For event tracking
- Other PostHog endpoints

### 3. Configuration

- PostHog is configured to use EU endpoints:
  - API: `https://eu.i.posthog.com`
  - Assets: `https://eu-assets.i.posthog.com`
- The API key is stored in environment variables (`NEXT_PUBLIC_POSTHOG_KEY`)
- `.env.local` has been added to `.gitignore` to ensure API keys aren't committed

## Dependencies Added

- `posthog-js@1.236.0` - Client-side library
- `posthog-node@4.11.4` - Server-side library
- Supporting libraries:
  - `core-js@3.41.0`
  - `fflate@0.4.8`
  - `preact@10.26.5`
  - `web-vitals@4.2.4`

## Usage

To track events from the server side:

```typescript
import PostHogClient from '@/posthog';

// In an API route or server component
const posthog = PostHogClient();
posthog.capture({
  distinctId: 'user-id',
  event: 'event_name',
  properties: {
    property1: 'value1',
  }
});
```

For client-side tracking, the standard PostHog script should be configured to use the rewrites:

```typescript
posthog.init('ph_project_key', {
  api_host: '/ingest'
});
```
