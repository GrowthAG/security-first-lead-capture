
import React from 'react';
import Header from '@/components/Header';
import MaterialsGrid from '@/components/MaterialsGrid';

const Materials = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="section-title text-center mb-12">Materiais de Segurança</h1>
          <MaterialsGrid />
        </div>
      </div>
    </div>
  );
};

export default Materials;
