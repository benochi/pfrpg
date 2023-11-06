import React, { useEffect, useState, CSSProperties } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

interface CubeProps {
  style: CSSProperties;
}

const Cube: React.FC<CubeProps> = ({ style }) => <div className="cube" style={style} />;

const Home: React.FC = () => {
  const [cubeStyles, setCubeStyles] = useState<CSSProperties[]>([]);
  
  useEffect(() => {
    const newCubeStyles = Array.from({ length: 50 }, (_, index) => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${-0.1 * index}s`, 
      animationDuration: `${5 + Math.random() * 5}s`, 
    }));
    setCubeStyles(newCubeStyles);
  }, []);

  return (
    <Layout>
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {cubeStyles.map((style, index) => (
            <Cube key={index} style={style} />
          ))}
        </div>
        <main className="flex flex-col items-center justify-center h-screen z-10 text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-bold break-words">Welcome to<br className="lg:hidden"/> PolarFoundry RPG</h1>
          <p className="text-xl lg:text-2xl mt-4">Embark on an epic adventure!</p>
          <Link href="/portal" passHref>
            <button className="mt-8 bg-cobalt hover:bg-cobalt-dark text-white font-bold py-6 px-20 rounded-lg border-4 border-white text-2xl lg:text-3xl transition ease-in duration-200 transform hover:-translate-y-1 hover:scale-110">
              Begin
            </button>
          </Link>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
