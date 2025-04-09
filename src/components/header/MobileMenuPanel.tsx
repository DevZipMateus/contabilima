
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MenuItem } from "./types";

interface MobileMenuPanelProps {
  isMenuOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const MobileMenuPanel = ({ isMenuOpen, onClose, menuItems }: MobileMenuPanelProps) => {
  return (
    <div 
      className={cn(
        'fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-white shadow-xl',
        'transform transition-transform duration-300 ease-in-out md:hidden',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      {/* Menu Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/02f5841d-21e5-43e2-8355-505eda8ef967.png" 
            alt="Contabilima" 
            className="h-10 w-10 mr-3"
          />
          <div className="text-2xl font-bold text-contabilima-blue">ContabiLima</div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
          aria-label="Fechar menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="px-6 pt-8 pb-8 overflow-y-auto h-[calc(100%-82px)]">
        <ul className="space-y-5">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-xl font-medium text-gray-800 hover:text-contabilima-blue transition-all duration-200 block py-2 
                           hover:translate-x-1 hover:scale-[1.02] focus:outline-none focus:text-contabilima-blue"
                onClick={onClose}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-md text-gray-500 mb-3">Entre em contato conosco</p>
          <a 
            href="https://wa.me/5562991548978" 
            className="text-xl text-green-600 hover:text-green-700 font-medium block py-2
                       transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6 6.32C16.8426 5.55082 15.9344 4.93783 14.9361 4.51731C13.9378 4.09678 12.8711 3.87696 11.79 3.87001C7.76 3.87001 4.49 7.14001 4.49 11.17C4.49 12.61 4.89 14 5.63 15.19L4.4 19.94L9.23 18.73C10.39 19.41 11.69 19.77 13.02 19.77C17.05 19.77 20.32 16.5 20.32 12.47C20.32 10.23 19.38 8.13 17.6 6.32ZM11.79 18.44C10.61 18.44 9.45 18.1 8.44 17.47L8.17 17.31L5.52 18.06L6.27 15.45L6.09 15.17C5.39866 14.1351 5.03354 12.9367 5.03 11.71C5.03 7.89001 8.08 4.79001 11.9 4.79001C13.76 4.79001 15.48 5.57001 16.79 6.88001C17.445 7.53233 17.9613 8.30435 18.3023 9.15636C18.6433 10.0084 18.8026 10.9225 18.77 11.84C18.67 15.71 15.62 18.44 11.79 18.44ZM15.44 13.21C15.25 13.12 14.37 12.69 14.2 12.63C14.03 12.57 13.9 12.54 13.78 12.73C13.66 12.92 13.33 13.33 13.21 13.46C13.09 13.59 12.97 13.6 12.78 13.51C11.7439 13.016 10.8539 12.2649 10.18 11.33C9.97 11 10.27 11.01 10.55 10.42C10.61 10.3 10.57 10.19 10.52 10.1C10.47 10.01 10.16 9.13001 10.01 8.74001C9.86 8.36001 9.71 8.41001 9.58 8.41001C9.2 8.38001 8.97 8.38001 8.74 8.38001C8.51 8.38001 8.25 8.41001 8.05 8.60001C7.85 8.79001 7.39 9.22001 7.39 10.1C7.39 10.98 8.02 11.83 8.11 11.96C8.2 12.09 10.1 15.06 13.06 16.24C14.35 16.81 14.92 16.88 15.65 16.75C16.11 16.66 16.82 16.27 16.97 15.81C17.12 15.35 17.12 14.96 17.07 14.88C17.02 14.8 16.9 14.74 16.7 14.65L15.44 13.21Z" fill="currentColor"/>
              </svg>
              (62) 99154-8978
            </div>
          </a>
          <a 
            href="mailto:igorsebastiao@gmail.com" 
            className="text-xl text-contabilima-blue hover:text-blue-800 font-medium block py-2
                       transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]"
          >
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              E-mail
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenuPanel;
