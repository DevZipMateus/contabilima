
import { Calculator, FileText, PieChart, Users, BarChart3, Building, Award, Zap, FileCheck } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: 'Abertura de Empresa',
      description: 'Abertura, alteração ou encerramento de empresas com agilidade e segurança jurídica.'
    },
    {
      icon: Calculator,
      title: 'Imposto de Renda',
      description: 'Declaração de imposto de renda para pessoas físicas e jurídicas, otimizando resultados.'
    },
    {
      icon: BarChart3,
      title: 'BPO Financeiro',
      description: 'Gestão financeira completa para sua empresa com relatórios precisos e análises detalhadas.'
    },
    {
      icon: Users,
      title: 'Folha de Pagamento',
      description: 'Gestão completa da folha de pagamento, admissões, demissões e rotinas trabalhistas.'
    },
    {
      icon: PieChart,
      title: 'Consultoria Contábil',
      description: 'Análise financeira, planejamento estratégico e apoio na tomada de decisões para o crescimento.'
    },
    {
      icon: FileCheck,
      title: 'Declaração de ITR',
      description: 'Declaração do Imposto Territorial Rural com segurança e dentro dos prazos legais.'
    },
    {
      icon: Award,
      title: 'Sistema de Gestão',
      description: 'Implementação de sistemas de gestão empresarial para otimizar processos e resultados.'
    },
    {
      icon: Zap,
      title: 'Economia de Energia',
      description: 'Soluções para redução de custos com energia e otimização do consumo.'
    },
    {
      icon: FileText,
      title: 'Certificado Digital',
      description: 'Emissão e renovação de certificados digitais para pessoas físicas e jurídicas.'
    }
  ];

  return (
    <section id="serviços" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos soluções completas para atender todas as necessidades contábeis da sua empresa
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <a href="https://wa.me/5562991548978" className="btn-primary inline-block">
            Solicite um orçamento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
