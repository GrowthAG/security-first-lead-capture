
import React, { lazy, Suspense } from 'react';

const LazySection: React.FC<{ 
  children: React.ReactNode; 
  fallback?: React.ReactNode 
}> = ({ children, fallback }) => {
  const defaultFallback = (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
    </div>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  );
};

export default LazySection;
