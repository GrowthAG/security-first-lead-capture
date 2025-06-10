
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LeadForm from './LeadForm';

interface FormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FormDialog = ({ open, onOpenChange }: FormDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-security-blue">
            Solicite uma Avaliação Gratuita
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <LeadForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
