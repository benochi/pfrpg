
import React from 'react';


type CharacterAnimationsProps = {
  className: string;
};

const BerserkerBackground: React.FC = () => {
  const snowflakeCount = 30; 
  const snowflakes = Array.from({ length: snowflakeCount }, (_, index) => {
    const style = {
      left: `${Math.random() * 100}%`,
      animationDelay: `${-0.1 * (index + 1)}s`,
      animationDuration: `${5 + Math.random() * 10}s`, 
    };

    return (
      <div
        key={index}
        className="snowflake"
        style={style}
      />
    );
  });

  return <>{snowflakes}</>;
};

const WarriorBackground: React.FC = () => {
  const snowflakeCount = 30; 
  const snowflakes = Array.from({ length: snowflakeCount }, (_, index) => {
    const style = {
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${5 + Math.random() * 10}s`, 
    };

    return (
      <div
        key={index}
        className="snowflake"
        style={style}
      />
    );
  });

  return <>{snowflakes}</>;
};


const CharacterAnimations: React.FC<CharacterAnimationsProps> = ({ className }) => {
  switch (className.toLowerCase()) {
    case 'berserker':
      return <BerserkerBackground />;
    case 'warrior':
      return <WarriorBackground />;
    
    default:
      return null; 
  }
};

export default CharacterAnimations;
