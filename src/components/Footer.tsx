
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './header/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Logo Column */}
          <div>
            <div className="mb-6">
              <Logo scrolled={true} />
            </div>
            <p className="text-gray-400 mb-4">
              Compromisso com nossos clientes. Estabelecemos um relacionamento de parceria e cumplicidade, onde o cliente sabe que pode contar conosco.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-contabilima-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-contabilima-blue transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-contabilima-blue transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Serviços</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-400">
              <li><a href="#serviços" className="hover:text-contabilima-leaf transition-colors">Abertura de Empresa</a></li>
              <li><a href="#serviços" className="hover:text-contabilima-leaf transition-colors">Imposto de Renda</a></li>
              <li><a href="#serviços" className="hover:text-contabilima-leaf transition-colors">BPO Financeiro</a></li>
              <li><a href="#serviços" className="hover:text-contabilima-leaf transition-colors">Folha de Pagamento</a></li>
              <li><a href="#serviços" className="hover:text-contabilima-leaf transition-colors">Consultoria Contábil</a></li>
              <li><a href="#serviços" className="hover:text-contabilima-leaf transition-colors">Declaração de ITR</a></li>
              <li><a href="#serviços" className="hover:text-contabilima-leaf transition-colors">Sistema de Gestão</a></li>
              <li><a href="#serviços" className="hover:text-contabilima-leaf transition-colors">Economia de Energia</a></li>
              <li><a href="#serviços" className="hover:text-contabilima-leaf transition-colors">Certificado Digital</a></li>
            </ul>
          </div>
          
          {/* Navigation Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Navegação</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#início" className="hover:text-contabilima-leaf transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-contabilima-leaf transition-colors">Sobre Nós</a></li>
              <li><a href="#serviços" className="hover:text-contabilima-leaf transition-colors">Serviços</a></li>
              <li><a href="#egestor" className="hover:text-contabilima-leaf transition-colors">Sistema eGestor</a></li>
              <li><a href="#contato" className="hover:text-contabilima-leaf transition-colors">Contato</a></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <div className="w-8 h-8 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <a href="https://wa.me/5562991548978" className="hover:text-contabilima-leaf transition-colors">(62) 99154-8978</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <a href="mailto:igorsebastiao@gmail.com" className="hover:text-contabilima-leaf transition-colors">igorsebastiao@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p>Rua dos expedicionários Qd03E1 Lt22</p>
                  <p>Bairro Santa Maria de Nazaré</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-gray-400 text-sm flex flex-col md:flex-row md:justify-between items-center">
          <p>&copy; {currentYear} ContabiLima Serviços Contábeis. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">O contador com quem você pode contar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
