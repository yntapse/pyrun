import { Button } from "@/components/ui/button";
import Reveal from "@/components/ux/Reveal";
import ConsultationModal from "@/components/ux/ConsultationModal";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BACKGROUND_IMAGES = [
  { id: 1, url: "/images/new2.jpg", name: "Design 2" },
  { id: 2, url: "/images/new1.jpeg", name: "New Design" },
  { id: 3, url: "/images/programmer-night.jpg", name: "Programmer Night" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex(
      (prev) => (prev - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const currentImage = BACKGROUND_IMAGES[currentImageIndex];
  // Force re-render of Reveal components by using image index as key
  const animationKey = currentImageIndex;

  // Text variations per background image (index-aligned)
  const headings = [
    "Transform Data Into Decisions",
    "Predict the Future. Automate the Present",
    "Build Smart, Scalable Digital Solutions",
  ];

  const paragraphs = [
    "Enterprise-grade BI and analytics solutions built to visualize data, automate reporting and empower smarter business decisions.",
    "AI/ML models engineered to forecast outcomes, eliminate manual work and unlock unstoppable performance.",
    "Create high-performing apps and dynamic websites that deliver seamless experiences, optimize performance and accelerate business growth.",
  ];
  
  
  const badges = [
    "Power BI & Data Analytics",
    "AI/ML Development",
    "App & Web Development",
  ];

  // Preload images for faster transitions
  useEffect(() => {
    let loadedCount = 0;
    const preloadPromises = BACKGROUND_IMAGES.map((img) => {
      return new Promise<void>((resolve) => {
        const image = new Image();
        image.onload = () => {
          loadedCount++;
          if (loadedCount === BACKGROUND_IMAGES.length) {
            setImagesLoaded(true);
          }
          resolve();
        };
        image.onerror = () => resolve();
        image.src = img.url;
      });
    });

    Promise.all(preloadPromises);
  }, []);

  // Auto-slide every 5 seconds (pause on hover)
  useEffect(() => {
    if (isHovering || !imagesLoaded) return; // Wait for images to load

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
      setTimeout(() => setIsTransitioning(false), 600);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering, imagesLoaded]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative overflow-hidden bg-gradient-to-b from-[#1a3a52] via-[#1e3a5f] to-[#0f2438]"
      style={{
        position: "relative",
      }}
    >
      {/* Background images with crossfade */}
      {BACKGROUND_IMAGES.map((img, index) => (
        <div
          key={img.id}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url('${img.url}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: currentImageIndex === index ? 1 : 0,
          }}
        />
      ))}
      
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10" />
      
      {/* Subtle accent shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl z-10" />

      <div className="container py-12 sm:py-16 md:py-32 grid gap-8 sm:gap-12 md:grid-cols-2 items-center relative z-20">
        {/* Left side: Previous button - Hidden on mobile, positioned at edges on desktop */}
        <button
          onClick={goToPrevious}
          className="absolute left-3 sm:left-0 top-1/2 -translate-y-1/2 p-3 text-emerald-300 hover:text-emerald-600 transition-colors z-20"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right side: Next button - Hidden on mobile, positioned at edges on desktop */}
        <button
          onClick={goToNext}
          className="absolute right-3 sm:right-0 top-1/2 -translate-y-1/2 p-3 text-emerald-300 hover:text-emerald-600 transition-colors z-20"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
        {/* Right-side image removed per request */}

        {/* Left column: staggered reveals for badge, heading, copy, buttons, and small text */}
        <div key={animationKey}>
          <Reveal delay={0.25}>
            <div className="inline-block mb-6 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold border border-emerald-400/30">
              {badges[currentImageIndex]}
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-4 sm:mb-6">
              {headings[currentImageIndex]}
            </h1>
          </Reveal>

          <Reveal delay={0.45}>
            <p className="text-base sm:text-lg text-gray-200 max-w-lg leading-relaxed mb-6 sm:mb-8">
              {paragraphs[currentImageIndex]}
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => setIsConsultationModalOpen(true)}
                className="bg-emerald-500 text-white hover:bg-emerald-600 px-8 py-3 h-auto text-base font-semibold rounded-lg transition-colors"
              >
                Schedule Free Consultation
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-emerald-400/50 text-emerald-300 hover:bg-emerald-500/10 px-8 py-3 h-auto text-base font-semibold rounded-lg transition-colors"
              >
                <a href="#solutions">Explore Solutions</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.65}>
            <p className="text-sm text-gray-300">
              Trusted by leading enterprises for data-driven transformation
            </p>
          </Reveal>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
    </motion.section>
  );
}
