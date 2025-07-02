import { useState } from 'react';

const Overlay: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white opacity-90 transition-all duration-1000 pointer-events-none
        ${showOverlay ? 'transform skew-y-[-20deg] translate-y-[-100%]' : 'opacity-0 translate-y-[100%]'}
      `}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
      style={{ pointerEvents: 'auto' }}
    ></div>
  );
};

export default Overlay;
