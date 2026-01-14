import React, { useState } from 'react';
import { Sparkles, MessageCircle, RefreshCw } from 'lucide-react';
import { Language } from '../types';
import { ICEBREAKERS } from '../constants';
import Button from './Button';

interface IcebreakerProps {
  language: Language;
  content: {
    title: string;
    description: string;
    buttonText: string;
  };
}

const Icebreaker: React.FC<IcebreakerProps> = ({ content }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % ICEBREAKERS.length);
  };

  const current = ICEBREAKERS[index];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700">
      <div className="p-8 md:p-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-300">
            <Sparkles size={24} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {content.title}
          </h3>
        </div>
        
        <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
          {content.description}
        </p>

        <div className="mb-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="inline-block px-2 py-1 text-xs font-bold tracking-wide text-brand-600 bg-brand-100 rounded uppercase">
                EN
              </span>
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {current.english}
              </p>
            </div>
            <div className="h-px bg-slate-200 dark:bg-slate-700 w-full" />
            <div className="flex gap-4 items-start">
              <span className="inline-block px-2 py-1 text-xs font-bold tracking-wide text-secondary-600 bg-secondary-100 rounded uppercase">
                ES
              </span>
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {current.spanish}
              </p>
            </div>
          </div>
        </div>

        <Button 
          onClick={handleNext} 
          fullWidth
          variant="secondary"
          className="group"
        >
          <span className="flex items-center gap-2">
            <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
            {content.buttonText}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Icebreaker;