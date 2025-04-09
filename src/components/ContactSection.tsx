import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
const ContactSection = () => {
  return <section id="contato" className="py-16 bg-gradient-to-b from-contabilima-blue/5 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender suas necessidades e responder suas dúvidas
          </p>
        </AnimatedSection>

        <div className="mt-8">
          <AnimatedSection animation="slide-in-left">
            <div className="glass-card rounded-xl p-6 sm:p-8 border-contabilima-blue/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-contabilima-blue">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Telefone */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-contabilima-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-contabilima-blue" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Telefone/WhatsApp</h4>
                    <a href="https://wa.me/5562991548978" className="text-sm text-gray-600 hover:text-contabilima-blue transition-colors">(62) 99154-8978</a>
                  </div>
                </div>
                
                {/* E-mail */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-contabilima-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-contabilima-blue" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">E-mail</h4>
                    <a href="mailto:igorsebastiao@gmail.com" className="text-sm text-gray-600 break-words hover:text-contabilima-blue transition-colors">igorsebastiao@gmail.com</a>
                  </div>
                </div>
                
                {/* Endereço */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-contabilima-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-contabilima-blue" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Endereço</h4>
                    <p className="text-sm text-gray-600">Rua dos expedicionários Qd03E1 Lt22</p>
                    <p className="text-sm text-gray-600">Bairro Santa Maria de Nazaré</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                <a href="https://wa.me/5562991548978" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  Falar pelo WhatsApp
                </a>
                <a href="mailto:igorsebastiao@gmail.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-contabilima-blue text-white rounded-md font-medium hover:bg-blue-800 transition-colors">
                  <Mail className="h-5 w-5" />
                  Enviar E-mail
                </a>
              </div>
              
              <div className="mt-8 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <h4 className="text-lg font-medium mb-2 text-center">Cartão de visita</h4>
                <div className="flex justify-center">
                  <a href="https://taggo.one/contabilima" target="_blank" rel="noopener noreferrer" className="bg-contabilima-blue text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors inline-flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm.53 12.97c-.23.09-.49.14-.76.14-.37 0-.72-.09-1.03-.25a2.99 2.99 0 0 1-.94-.67 3.188 3.188 0 0 1-.63-2.55c.1-1.07.53-1.85 1.3-2.35.77-.5 1.44-.61 2.02-.36.58.24.99.72 1.24 1.43.13.39.18.78.14 1.18-.03.4-.14.78-.32 1.15-.18.37-.44.64-.78.83z" />
                    </svg>
                    Acessar Redes Sociais
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default ContactSection;