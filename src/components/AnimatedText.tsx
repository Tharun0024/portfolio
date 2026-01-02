import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
}

export const AnimatedText = ({ text, className = '', delay = 0, highlightWords = [] }: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some(hw => 
          word.toLowerCase().includes(hw.toLowerCase())
        );
        
        return (
          <span
            key={index}
            className={`inline-block overflow-hidden ${index > 0 ? 'ml-[0.25em]' : ''}`}
          >
            <span
              className={`inline-block transition-all duration-700 ease-smooth ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-full opacity-0'
              } ${isHighlighted ? 'text-primary' : ''}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </span>
  );
};
