
import React from 'react';


type CharacterAnimationsProps = {
  className: string;
};

const BerserkerBackground: React.FC = () => {
  const snowflakeCount = 30; 
  const snowflakes = Array.from({ length: snowflakeCount }, (_, index) => {
    const style = {
      left: `${Math.random() * 100}%`,
      animationDelay: '0s',
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
  const sparkCount = 40; 
  const sparks = Array.from({ length: sparkCount }, (_, index) => {
    const style = {
      left: `${Math.random() * 95}%`, // Subtract the size of the spark to keep within bounds
      animationDelay: '0s',
      animationDuration: `${1 + Math.random() * 2}s`, 
    };

    return (
      <div
        key={index}
        className="spark"
        style={style}
      />
    );
  });

  return <>{sparks}</>;
};

const BardBackground: React.FC = () => {
  const noteCount = 20; 
  const notes = Array.from({ length: noteCount }, (_, index) => {
    const style = {
      left: `${Math.random() * 100}%`,
      animationDelay: '0s',
      animationDuration: `${2 + Math.random() * 3}s`, 
      animationName: 'dance', 
      animationTimingFunction: 'ease-in-out',
      animationDirection: 'alternate',
      animationIterationCount: 'infinite',
      backgroundColor: `hsla(${Math.random() * 360}, 100%, 50%, 0.7)` 
    };

    return (
      <div
        key={index}
        className="note orb"
        style={style}
      />
    );
  });

  return <>{notes}</>;
};

const ClericBackground: React.FC = () => {
  const orbCount = 20;
  const orbs = Array.from({ length: orbCount }, (_, index) => {
    const leftPosition = `calc(${Math.random() * 100}% - 20px)`;

    const style = {
      left: leftPosition,
      animation: `moveUpAndAccelerate 5s ${Math.random() * 5}s infinite ease-in-out`
    };

    return <div key={index} className="healing-orb" style={style} />;
  });

  return <>{orbs}</>;
};



const WizardBackground: React.FC = () => {
  const fireballCount = 20; 
  const fireballs = Array.from({ length: fireballCount }, (_, index) => {
    const style = {
      top: `${10 + Math.random() * 80}%`, 
      animationDelay: '0s', 
      animationDuration: `${2 + Math.random() * 3}s`, 
    };

    return (
      <div
        key={index}
        className="fireball"
        style={style}
      />
    );
  });

  return <>{fireballs}</>;
};




const CharacterAnimations: React.FC<CharacterAnimationsProps> = ({ className }) => {
  switch (className.toLowerCase()) {
    case 'berserker':
      return <BerserkerBackground />;
    case 'warrior':
      return <WarriorBackground />;
    case 'bard':
      return <BardBackground />;
    case 'cleric':
      return <ClericBackground />;
    case 'wizard':
      return <WizardBackground />;
    default:
      return null; 
  }
};

export default CharacterAnimations;
