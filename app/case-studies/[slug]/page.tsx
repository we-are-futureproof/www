"use client"

import { useState, use } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft, X, Maximize2 } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { notFound } from "next/navigation"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import CTASection from "../../../components/CTASection"
import { getCaseStudy } from "@/lib/data/case-studies"
import { usePostHog } from "posthog-js/react"

interface CaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const posthog = usePostHog();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    type: 'image' | 'video' | 'gif';
    description?: string;
  } | null>(null);

  // Unwrap params using React.use()
  const resolvedParams = use(params)
  const slug = resolvedParams.slug

  // Get the case study from our centralized data store
  const caseStudy = getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  // Handler for closing the modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // Handler for tracking image expansion
  const handleImageExpand = (image: {
    src: string;
    alt: string;
    type: 'image' | 'video' | 'gif';
    description?: string;
  }) => {
    // Track image expansion with PostHog
    posthog.capture("case_study_image_expanded", {
      image_name: image.description || 'Unnamed Image',
      image_alt: image.alt,
      image_type: image.type,
      case_study: slug
    });

    // Set the selected image
    setSelectedImage(image);
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-black bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:underline">
              Case Studies
            </Link>
            <span>/</span>
            <span className="font-bold">{caseStudy.title}</span>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <section>
        <div className="container mx-auto px-4 py-12">
          <Link href="/case-studies" className="inline-flex items-center mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> BACK TO CASE STUDIES
          </Link>

          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{caseStudy.title}</h1>
              <h2 className="text-2xl">{caseStudy.subtitle}</h2>
            </div>
            {caseStudy.logo && (
              <div className="flex items-center justify-end h-full">
                <div className="relative w-full h-24 md:h-32">
                  <Image
                    src={caseStudy.logo.src}
                    alt={caseStudy.logo.alt}
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'right center' }}
                    priority
                  />
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2">

              {caseStudy.image ? (
                <>
                  <img
                    src={caseStudy.image.src}
                    alt={caseStudy.image.alt}
                    className="w-full h-64 md:h-96 object-cover mb-8 border border-black"
                    style={caseStudy.image.detailPosition ? { objectPosition: caseStudy.image.detailPosition.default } : undefined}
                  />
                  <style jsx>{`
                    @media (min-width: 640px) {
                      img {
                        object-position: ${caseStudy.image.detailPosition?.sm || caseStudy.image.detailPosition?.default};
                      }
                    }
                    @media (min-width: 768px) {
                      img {
                        object-position: ${caseStudy.image.detailPosition?.md || caseStudy.image.detailPosition?.default};
                      }
                    }
                  `}</style>
                </>
              ) : (
                <div className="w-full h-64 md:h-96 bg-gray-200 mb-8 border border-black"></div>
              )}

              {caseStudy.testimonial && (
                <div className="border-l-4 border-black pl-6 py-4 mb-8 bg-gray-100">
                  <div className="text-xl italic mb-4 prose prose-xl prose-neutral max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        p: ({node, ...props}) => <p className="mb-2">"{props.children}"</p>
                      }}
                    >
                      {caseStudy.testimonial.quote}
                    </ReactMarkdown>
                  </div>
                  <p className="font-bold">— {caseStudy.testimonial.author}</p>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4">THE CHALLENGE</h3>
              <div className="mb-8 font-sans prose prose-lg prose-neutral max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {caseStudy.challenge}
                </ReactMarkdown>
              </div>

              <h3 className="text-2xl font-bold mb-4">OUR SOLUTION</h3>
              <div className="mb-8 font-sans prose prose-lg prose-neutral max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {caseStudy.solution}
                </ReactMarkdown>
              </div>

            </div>

            <div>

              <div className="bg-gray-100 p-8 mb-8 border border-black">
                <h3 className="text-xl font-bold mb-4">SUMMARY</h3>
                <div className="font-sans prose prose-neutral max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {caseStudy.description}
                  </ReactMarkdown>
                </div>
              </div>

              <div className="bg-gray-100 p-8 mb-8 border border-black">
                <h3 className="text-xl font-bold mb-4">RESULTS</h3>
                <ul className="space-y-4 mb-8">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <span className="font-bold mr-4">•</span>
                      <p className="font-sans">{result}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-100 p-8 mb-8 border border-black">
                <h3 className="text-xl font-bold mb-4">TECHNOLOGIES</h3>
                <ul className="space-y-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <span className="font-bold mr-4">•</span>
                      <p className="font-sans">{tech}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-100 p-8 mb-8 border border-black">
                <h3 className="text-xl font-bold mb-4">SERVICES</h3>
                <ul className="space-y-2">
                  {caseStudy.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <span className="font-bold mr-4">•</span>
                      <p className="font-sans">{service}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      {caseStudy.additionalImages && caseStudy.additionalImages.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 border-b-2 border-black pb-4">GALLERY</h2>

            <div className="space-y-16">
              {[...caseStudy.additionalImages]
                .sort((a, b) => {
                  // If both have sort values, sort by those
                  if (a.sort !== undefined && b.sort !== undefined) {
                    return a.sort - b.sort;
                  }
                  // If only a has sort, a comes first
                  if (a.sort !== undefined) return -1;
                  // If only b has sort, b comes first
                  if (b.sort !== undefined) return 1;
                  // If neither has sort, keep original order
                  return 0;
                })
                .map((image, index) => (
                <div key={index} className="border border-black">
                  <div className="p-6 bg-gray-100 border-b border-black flex justify-between items-center">
                    <p className="font-mono text-lg">{image.description || 'Image ' + (index + 1)}</p>
                    <button
                      className="p-2 hover:bg-gray-200 rounded-sm transition-colors"
                      onClick={() => handleImageExpand(image)}
                      aria-label="Expand image"
                    >
                      <Maximize2 size={20} />
                    </button>
                  </div>
                  <div
                    className="relative cursor-pointer"
                    onClick={() => handleImageExpand(image)}
                  >
                    {image.type === 'gif' ? (
                      <div className="relative h-[500px] w-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          style={{ objectFit: 'contain' }}
                          className="bg-white p-4"
                        />
                      </div>
                    ) : image.type === 'video' ? (
                      <video
                        controls
                        className="w-full bg-white p-4"
                        src={image.src}
                      />
                    ) : (
                      <div className="relative h-[500px] w-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          style={{ objectFit: 'contain' }}
                          className="bg-white p-4"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div className="absolute top-4 right-4">
            <button
              className="bg-white p-2 rounded-full"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          <div
            className="max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedImage.type === 'gif' ? (
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ) : selectedImage.type === 'video' ? (
              <video
                controls
                className="w-full h-auto max-h-[80vh] mx-auto"
                src={selectedImage.src}
                autoPlay
              />
            ) : (
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            )}

            <div className="bg-white p-4 mt-2">
              <p className="font-mono">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

