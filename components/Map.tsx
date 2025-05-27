import React from 'react';

const Map: React.FC = () => {
  return (
    <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.311334954558!2d85.31465897492193!3d27.67677082684034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cb8e082079%3A0xcd85a3db7658e221!2sKopila%20clinic!5e0!3m2!1sne!2snp!4v1748337436640!5m2!1sne!2snp"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
