
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WordPressMaterial {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  slug: string;
}

const fetchMaterialBySlug = async (slug: string): Promise<WordPressMaterial> => {
  const response = await fetch(`https://materiais.securityfirst.com.br/wp-json/wp/v2/posts?slug=${slug}`);
  
  if (!response.ok) {
    throw new Error('Falha ao carregar material');
  }
  
  const data = await response.json();
  if (data.length === 0) {
    throw new Error('Material não encontrado');
  }
  
  return data[0];
};

const MaterialDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: material, isLoading, error } = useQuery({
    queryKey: ['material', slug],
    queryFn: () => fetchMaterialBySlug(slug!),
    enabled: !!slug,
  });

  const cleanHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '').replace(/\[&hellip;\]/, '...').trim();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen font-inter">
        <Header />
        <div className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <Skeleton className="h-8 w-48 mb-8" />
            <Skeleton className="h-12 w-3/4 mb-6" />
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-2/3 mb-8" />
            <Skeleton className="h-12 w-48" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !material) {
    return (
      <div className="min-h-screen font-inter">
        <Header />
        <div className="pt-20">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="section-title mb-6">Material não encontrado</h1>
            <p className="text-gray-600 mb-8">O material que você está procurando não existe ou foi removido.</p>
            <Link to="/materiais">
              <Button className="bg-security-red hover:bg-security-red/90 text-white flex items-center gap-2">
                <ArrowLeft size={16} />
                Voltar aos Materiais
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    window.open(material.link, '_blank');
  };

  return (
    <div className="min-h-screen font-inter">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <Link 
            to="/materiais" 
            className="inline-flex items-center gap-2 text-security-blue hover:text-security-red transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Voltar aos Materiais
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title mb-6">
              {cleanHtml(material.title.rendered)}
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                {material.content.rendered ? (
                  <div dangerouslySetInnerHTML={{ __html: material.content.rendered }} />
                ) : (
                  <p>{cleanHtml(material.excerpt.rendered)}</p>
                )}
              </div>
              
              <div className="flex justify-center">
                <Button 
                  onClick={handleDownload}
                  className="bg-security-red hover:bg-security-red/90 text-white flex items-center gap-2 px-8 py-3 text-lg"
                >
                  <Download size={20} />
                  Download Material
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialDetail;
