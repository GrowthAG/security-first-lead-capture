
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Trophy, ExternalLink } from 'lucide-react';

interface EventDetail {
  icon: React.ElementType;
  name: string;
  description: string;
  highlight: string;
  category: string;
  impact: string;
  detailedInfo: {
    date: string;
    location: string;
    participants: string;
    achievements: string[];
    technologies: string[];
    outcomes: string[];
    caseStudy: string;
  };
}

interface EventDetailModalProps {
  event: EventDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventDetailModal = ({ event, isOpen, onClose }: EventDetailModalProps) => {
  if (!event) return null;

  const IconComponent = event.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-security-red/10 to-security-blue/10 p-4 rounded-xl">
              <IconComponent className="h-8 w-8 text-security-red" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-security-blue mb-2">
                {event.name}
              </DialogTitle>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="bg-security-red text-white">
                  {event.category}
                </Badge>
                <Badge variant="outline" className="border-security-blue text-security-blue">
                  {event.impact}
                </Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Highlight Section */}
          <div className="bg-gradient-to-r from-security-red to-security-red/90 text-white p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-3">Destaque do Evento</h3>
            <p className="leading-relaxed">{event.highlight}</p>
          </div>

          {/* Event Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 text-security-blue" />
                <div>
                  <p className="font-medium text-security-blue">Data</p>
                  <p className="text-gray-600">{event.detailedInfo.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="h-5 w-5 text-security-blue" />
                <div>
                  <p className="font-medium text-security-blue">Local</p>
                  <p className="text-gray-600">{event.detailedInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Users className="h-5 w-5 text-security-blue" />
                <div>
                  <p className="font-medium text-security-blue">Participantes</p>
                  <p className="text-gray-600">{event.detailedInfo.participants}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Trophy className="h-5 w-5 text-security-blue" />
                <div>
                  <p className="font-medium text-security-blue">Conquistas</p>
                  <p className="text-gray-600">{event.detailedInfo.achievements.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-lg text-security-blue mb-3">Descrição Completa</h3>
            <p className="text-gray-700 leading-relaxed">{event.description}</p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold text-lg text-security-blue mb-3">Tecnologias Abordadas</h3>
            <div className="flex flex-wrap gap-2">
              {event.detailedInfo.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="border-security-blue/30">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div>
            <h3 className="font-semibold text-lg text-security-blue mb-3">Resultados Obtidos</h3>
            <ul className="space-y-2">
              {event.detailedInfo.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-security-red rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-br from-security-blue/5 to-security-red/5 p-6 rounded-xl border border-security-blue/10">
            <h3 className="font-semibold text-lg text-security-blue mb-3">Case de Sucesso</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{event.detailedInfo.caseStudy}</p>
            <Button variant="outline" className="border-security-blue text-security-blue hover:bg-security-blue hover:text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Apresentação Completa
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailModal;
