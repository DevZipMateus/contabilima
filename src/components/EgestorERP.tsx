
import React from 'react';
import AnimatedSection from './AnimatedSection';

const EgestorERP = () => {
  // Link for both the title and button
  const egestorLink = "https://www.egestor.com.br/afl/15042";

  return (
    <section id="egestor" className="py-16 bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Two-column layout for desktop, stack on mobile */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12 mb-10">
          {/* Left column - Header Text */}
          <AnimatedSection animation="slide-in-left" className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">Sistema de gestão empresarial</h2>
            </a>
            <p className="text-lg md:text-xl text-gray-600 font-normal">
              Dobre seus lucros otimizando sua gestão
            </p>
          </AnimatedSection>
          
          {/* Right column - Video Container */}
          <AnimatedSection animation="slide-in-right" className="md:w-1/2 rounded-xl overflow-hidden shadow-xl">
            <video 
              className="w-full aspect-video object-cover" 
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="https://egestor.com.br/assets/img/egestor-gestao-simples-para-crescer.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </AnimatedSection>
        </div>
        
        {/* CTA Button - Centered below both columns */}
        <AnimatedSection animation="fade-in-up" className="flex justify-center">
          <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-sm">
            <button className="w-full py-3 bg-[#7CFFA0] hover:bg-[#6DF090] text-black font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
              Teste grátis
            </button>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EgestorERP;
