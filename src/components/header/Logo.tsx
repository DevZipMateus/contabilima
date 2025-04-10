
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#" className="flex items-center z-10 relative">
      <div className="h-12 w-12 mr-3">
        <img 
          src="/lovable-uploads/02f5841d-21e5-43e2-8355-505eda8ef967.png" 
          alt="Contabilima Serviços Contábeis" 
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className={cn(
          "font-bold transition-all duration-300",
          scrolled ? "text-contabilima-blue" : "text-contabilima-blue",
        )}
      >
        <div className="text-xl md:text-2xl">
          <span className="text-contabilima-blue">Contabi</span>
          <span className="text-contabilima-leaf">Lima</span>
        </div>
        <div className="text-xs md:text-sm text-gray-600">SERVIÇOS CONTÁBEIS</div>
      </div>
    </a>
  );
};

export default Logo;
