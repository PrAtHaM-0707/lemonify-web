import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start gap-6 rounded-2xl bg-white/10 backdrop-blur-sm p-8 shadow-lg ring-1 ring-white/20 transition-all duration-200 hover:shadow-xl hover:bg-white/20 group hover:-translate-y-1">
      <div className="rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 p-3 group-hover:scale-110 transition-all duration-200">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-semibold leading-8 text-white">{title}</h3>
        <p className="mt-2 text-base leading-7 text-white/80">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;