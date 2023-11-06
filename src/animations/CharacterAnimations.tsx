
import React from 'react';


type CharacterAnimationsProps = {
  className: string;
};

const BerserkerBackground: React.FC = () => {
  const rippleCount = 10; 
  const ripples = Array.from({ length: rippleCount }, (_, index) => {
    const size = Math.random() * 100 + 50; 
    const positionX = Math.random() * 100;
    const positionY = Math.random() * 100;
    const delay = Math.random() * -5;

    return (
      <div
        key={index}
        className="ripple"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `calc(${positionY}% - ${size / 2}px)`, 
          left: `calc(${positionX}% - ${size / 2}px)`, 
          animationDelay: `${delay}s`
        }}
      />
    );
  });

  return (
    <div className="ripple-container">
      {ripples}
    </div>
  );
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
  const noteCount = 40; 
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
  const orbCount = 60;
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

const MagicianBackground: React.FC = () => {
  type SizeRange = { min: number; max: number };
  type DurationRange = { min: number; max: number };
  
  const getRandomStyles = (sizeRange: SizeRange, durationRange: DurationRange) => {
    const size = Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min;
    const duration = Math.random() * (durationRange.max - durationRange.min) + durationRange.min;
    return {
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${duration}s`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * -10}s`, 
    };
  };

  const earthElements = Array.from({ length: 10 }, (_, index) => (
    <div key={`earth-${index}`} className="element element-earth" style={getRandomStyles({ min: 5, max: 50 }, { min: 10, max: 20 })} />
  ));

  const windElements = Array.from({ length: 10 }, (_, index) => (
    <div key={`wind-${index}`} className="element element-wind" style={getRandomStyles({ min: 5, max: 50 }, { min: 10, max: 20 })} />
  ));

  const waterElements = Array.from({ length: 10 }, (_, index) => (
    <div key={`water-${index}`} className="element element-water" style={getRandomStyles({ min: 5, max: 50 }, { min: 10, max: 20 })} />
  ));

  const fireElements = Array.from({ length: 10 }, (_, index) => (
    <div key={`fire-${index}`} className="element element-fire" style={getRandomStyles({ min: 5, max: 50 }, { min: 10, max: 20 })} />
  ));

  return (
    <div className="magician-elements">
      {earthElements}
      {windElements}
      {waterElements}
      {fireElements}
    </div>
  );
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
    case 'magician':
      return <MagicianBackground />;
    default:
      return null; 
  }
};

export default CharacterAnimations;
