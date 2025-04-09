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