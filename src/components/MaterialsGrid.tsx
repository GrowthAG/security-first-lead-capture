
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Download } from 'lucide-react';
import MaterialModal from './MaterialModal';

interface WordPressMaterial {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
}

const fetchMaterials = async (): Promise<WordPressMaterial[]> => {
  const response = await fetch('https://materiais.securityfirst.com.br/wp-json/wp/v2/posts');
  
  if (!response.ok) {
    throw new Error('Falha ao carregar materiais');
  }
  
  return response.json();
};

const MaterialsGrid = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<WordPressMaterial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: materials, isLoading, error } = useQuery({
    queryKey: ['materials'],
    queryFn: fetchMaterials,
  });

  const handleMaterialClick = (material: WordPressMaterial) => {
    setSelectedMaterial(material);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMaterial(null);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="security-card">
            <CardHeader>
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full mb-4" />
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Erro ao carregar materiais</p>
        <p className="text-gray-600">Por favor, tente novamente mais tarde.</p>
      </div>
    );
  }

  const cleanExcerpt = (excerpt: string) => {
    return excerpt.replace(/<[^>]*>/g, '').replace(/\[&hellip;\]/, '...').trim();
  };

  const cleanTitle = (title: string) => {
    return title.replace(/<[^>]*>/g, '').trim();
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials?.map((material) => (
          <Card 
            key={material.id} 
            className="security-card group flex flex-col"
          >
            <CardHeader className="flex-grow">
              <CardTitle className="text-security-blue group-hover:text-security-red transition-colors duration-300">
                <span className="line-clamp-2">
                  {cleanTitle(material.title.rendered)}
                </span>
              </CardTitle>
              <CardDescription className="text-gray-600 line-clamp-3 flex-grow">
                {cleanExcerpt(material.excerpt.rendered)}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button 
                onClick={() => handleMaterialClick(material)}
                className="w-full bg-security-red hover:bg-security-red/90 text-white flex items-center justify-center gap-2"
              >
                <Download size={16} />
                Download Material
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <MaterialModal 
        material={selectedMaterial}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default MaterialsGrid;
