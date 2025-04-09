
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ContabiLima</h3>
            <p className="text-gray-400 mb-6">
              Compromisso com nossos clientes. Estabelecemos com nossos clientes um relacionamento de parceria e cumplicidade, onde o cliente sabe que pode contar conosco.
            </p>
            <div className="flex space-x-4">
              <a href="https://taggo.one/contabilima" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-contabilima-blue transition-colors" aria-label="Redes sociais da ContabiLima">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://taggo.one/contabilima" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-contabilima-blue transition-colors" aria-label="Redes sociais da ContabiLima">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://taggo.one/contabilima" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-contabilima-blue transition-colors" aria-label="Redes sociais da ContabiLima">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#serviços" className="hover:text-white transition-colors">Abertura de Empresa</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Imposto de Renda</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">BPO Financeiro</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Folha de Pagamento</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Consultoria Contábil</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Declaração de ITR</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Sistema de Gestão Empresarial</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Economia de Energia</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Certificado Digital</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navegação</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#início" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3" />
                </div>
                <div>
                  <a href="https://wa.me/5562991548978" className="hover:text-white transition-colors">(62) 99154-8978</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3" />
                </div>
                <div>
                  <a href="mailto:igorsebastiao@gmail.com" className="hover:text-white transition-colors">igorsebastiao@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3 w-3" />
                </div>
                <div>
                  <p>Rua dos expedicionários Qd03E1 Lt22</p>
                  <p>Bairro Santa Maria de Nazaré</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm text-center">
          <p>&copy; {currentYear} ContabiLima Serviços Contábeis. Todos os direitos reservados.</p>
          <p className="mt-2">O contador com quem você pode contar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
