// src/pages/portal.tsx
import React, { useEffect, useState, CSSProperties } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

interface CubeProps {
  style: CSSProperties;
}

const Cube: React.FC<CubeProps> = ({ style }) => <div className="cube" style={style} />;

const Portal: React.FC = () => {
  const [cubeStyles, setCubeStyles] = useState<CSSProperties[]>([]);
  
  useEffect(() => {
    const newCubeStyles = Array.from({ length: 50 }, (_, index) => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${-0.1 * (index + 1)}s`,
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
        <main className="flex flex-col items-center justify-center h-screen z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-center">Let's get started!</h1>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link href="/auth/register" passHref>
              <button className="bg-cobalt hover:bg-cobalt-dark text-white font-bold py-3 px-6 rounded-md border-2 border-white transition ease-in duration-200 hover:scale-110">
                Register
              </button>
            </Link>
            <Link href="/auth/login" passHref>
              <button className="bg-cobalt hover:bg-cobalt-dark text-white font-bold py-3 px-6 rounded-md border-2 border-white transition ease-in duration-200 hover:scale-110">
                Login
              </button>
            </Link>
            <Link href="/character/create" passHref>
              <button className="bg-cobalt hover:bg-cobalt-dark text-white font-bold py-3 px-6 rounded-md border-2 border-white transition ease-in duration-200 hover:scale-110">
                Free Play
              </button>
            </Link>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Portal;
