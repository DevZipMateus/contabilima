
import { Facebook, Instagram, Linkedin, Twitter, Calendar, FileText, Calculator, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ContabiLima</h3>
            <p className="text-gray-400 mb-6">
              Soluções contábeis completas para empresas de todos os portes, com foco em qualidade e resultados.
            </p>
            <div className="flex space-x-4">
              <a href="https://taggo.one/contabilima" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-contabilima-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://taggo.one/contabilima" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-contabilima-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://taggo.one/contabilima" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-contabilima-blue transition-colors">
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
              <li><a href="#serviços" className="hover:text-white transition-colors">Certificado Digital</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agenda Tributária
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Tabelas Práticas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculadoras
                </a>
              </li>
              <li><a href="https://www.gov.br/receitafederal/pt-br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Receita Federal</a></li>
              <li><a href="https://www.gov.br/inss/pt-br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Previdência Social</a></li>
              <li><a href="https://www.fgts.gov.br/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FGTS</a></li>
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
