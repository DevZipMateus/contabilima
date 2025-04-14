
import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.3485300903607!2d-48.938847923773376!3d-16.319951488717436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea5398dff6d6f%3A0xe2b2792017d076b1!2sContabilima%20Servi%C3%A7os%20Cont%C3%A1beis!5e0!3m2!1spt-BR!2sbr!4v1713141245810!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Contabilima Serviços Contábeis"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
