import React, { useEffect, useRef, useState } from 'react';

// This is your Layout Component
const Visibale = ({ children,...props }:any) => {
  const ref = useRef<any>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsVisible(entry.isIntersecting);
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // Empty array ensures effect is only run on mount and unmount

  return (
    <div ref={ref} {...props} >
      {isVisible && children}
    </div>
  );
};

export default Visibale;
