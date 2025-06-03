
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ExternalLink } from 'lucide-react';

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
  const { data: materials, isLoading, error } = useQuery({
    queryKey: ['materials'],
    queryFn: fetchMaterials,
  });

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
              <Skeleton className="h-20 w-full" />
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {materials?.map((material) => (
        <Card 
          key={material.id} 
          className="security-card cursor-pointer group"
          onClick={() => window.open(material.link, '_blank')}
        >
          <CardHeader>
            <CardTitle className="text-security-blue group-hover:text-security-red transition-colors duration-300 flex items-center justify-between">
              <span className="line-clamp-2">
                {cleanTitle(material.title.rendered)}
              </span>
              <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 line-clamp-4">
              {cleanExcerpt(material.excerpt.rendered)}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MaterialsGrid;
