
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

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

interface MaterialModalProps {
  material: WordPressMaterial | null;
  isOpen: boolean;
  onClose: () => void;
}

const MaterialModal = ({ material, isOpen, onClose }: MaterialModalProps) => {
  if (!material) return null;

  const cleanExcerpt = (excerpt: string) => {
    return excerpt.replace(/<[^>]*>/g, '').replace(/\[&hellip;\]/, '...').trim();
  };

  const cleanTitle = (title: string) => {
    return title.replace(/<[^>]*>/g, '').trim();
  };

  const handleDownload = () => {
    window.open(material.link, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-security-blue text-xl mb-4">
            {cleanTitle(material.title.rendered)}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-base leading-relaxed">
            {cleanExcerpt(material.excerpt.rendered)}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-6">
          <Button 
            onClick={handleDownload}
            className="bg-security-red hover:bg-security-red/90 text-white flex items-center gap-2"
          >
            <Download size={18} />
            Download Material
            <ExternalLink size={16} />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MaterialModal;
