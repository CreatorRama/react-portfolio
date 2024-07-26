import React, { useState, useEffect } from 'react';
import '../typewriter.css'

const Typewriter = ({ text, typeSpeed = 50, backSpeed = 25, loop = true }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const currentText = text[index];
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % text.length);
        }
      } else {
        setDisplayText(currentText?.substring(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(handleType, isDeleting ? backSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, text, typeSpeed, backSpeed]);

  return <div >
    <span className='typewriter'>{displayText}</span>
  </div>;
};

export default Typewriter;
