import React from 'react';
import '../globals.css'; // Adjust the path to your globals.css if necessary

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      {children}
    </div>
  );
}