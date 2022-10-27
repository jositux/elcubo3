import { useState, useEffect } from 'react';

const getOrientation = () => window.screen.orientation.type;

const useScreenOrientation = () => {
  const [screenOrientation, setOrientation] = useState(null);
  const [showAdvice, setShowAdvice] = useState(false);

  const updateOrientation = (event) => {
    setOrientation(getOrientation());
  };

  useEffect(() => {
    setOrientation(getOrientation());
  }, []);

  useEffect(() => {
    if (screenOrientation && screenOrientation.includes('portrait')) {
      setShowAdvice(true);
    } else {
      setShowAdvice(false);
    }
  }, [screenOrientation]);

  useEffect(() => {
    window.addEventListener('orientationchange', updateOrientation);
    return () => {
      window.removeEventListener('orientationchange', updateOrientation);
    };
  }, []);

  return {
    screenOrientation,
    showAdvice,
  };
};

export default useScreenOrientation;
