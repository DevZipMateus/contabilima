
import { ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
const HeroSection = () => {
  return <section id="início" className="relative min-h-screen flex items-start pt-24 md:pt-16 md:items-center bg-gradient-to-r from-blue-50 to-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-contabilima-blue/5 skew-x-12 transform origin-bottom"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-contabilima-blue/10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 md:w-40 md:h-40 rounded-full bg-contabilima-leaf/20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold px-3 bg-contabilima-blue/10 text-contabilima-blue rounded-full py-[5px] my-[20px]">
              Serviços Contábeis de Excelência
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              O contador <br />
              <span className="text-contabilima-blue">com quem você pode contar</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Oferecemos soluções contábeis completas, focadas em eficiência e tecnologia, 
              para que você possa se concentrar no crescimento da sua empresa.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://wa.me/5562991548978" className="btn-primary flex items-center gap-2">
                Fale pelo WhatsApp
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#serviços" className="btn-secondary">
                Conheça Nossos Serviços
              </a>
            </div>

            <div className="pt-4 flex items-center justify-start">
              <a 
                href="https://taggo.one/contabilima" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-contabilima-blue text-white rounded-md hover:bg-blue-800 transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm.53 12.97c-.23.09-.49.14-.76.14-.37 0-.72-.09-1.03-.25a2.99 2.99 0 0 1-.94-.67 3.188 3.188 0 0 1-.63-2.55c.1-1.07.53-1.85 1.3-2.35.77-.5 1.44-.61 2.02-.36.58.24.99.72 1.24 1.43.13.39.18.78.14 1.18-.03.4-.14.78-.32 1.15-.18.37-.44.64-.78.83z" />
                </svg>
                Acessar cartão de visita
              </a>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-contabilima-blue">2018</div>
                <div className="text-sm text-gray-600">Desde</div>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-contabilima-blue">5+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-contabilima-blue">100%</div>
                <div className="text-sm text-gray-600">Comprometimento</div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-12 -left-8 w-64 h-64 bg-contabilima-blue/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-contabilima-leaf/20 rounded-full filter blur-xl"></div>
              <div className="relative z-10 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
                <img src="/lovable-uploads/02f5841d-21e5-43e2-8355-505eda8ef967.png" alt="Contabilima Serviços Contábeis" className="w-full max-w-xs mx-auto" />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-contabilima-blue">
                    Contabilidade que gera resultados
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Consultoria financeira e contábil para o seu negócio
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>;
};
export default HeroSection;
