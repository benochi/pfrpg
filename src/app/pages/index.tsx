import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl lg:text-6xl font-bold">Welcome to PolarFoundry RPG</h1>
        <p className="text-xl lg:text-2xl mt-4">Embark on an epic adventure!</p>
      </main>
    </Layout>
  );
};

export default Home;
