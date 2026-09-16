import React from 'react';
import { ArrowDownLeft, ArrowUpRight, History } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { RevealOnScroll } from './RevealOnScroll';

export const CoreActionsStrip: React.FC = () => {
  const { t } = useI18n();

  const actions = [
    {
      id: 'receive',
      title: t.coreActions.receiveTitle,
      desc: t.coreActions.receiveDesc,
      icon: ArrowDownLeft,
      colorBg: 'bg-brand-lavender',
      iconColor: 'text-brand-inkBlack',
      borderAccent: 'border-brand-inkBlack',
      stepNum: '01',
    },
    {
      id: 'send',
      title: t.coreActions.sendTitle,
      desc: t.coreActions.sendDesc,
      icon: ArrowUpRight,
      colorBg: 'bg-brand-lime',
      iconColor: 'text-brand-inkBlack',
      borderAccent: 'border-brand-inkBlack',
      stepNum: '02',
    },
    {
      id: 'track',
      title: t.coreActions.trackTitle,
      desc: t.coreActions.trackDesc,
      icon: History,
      colorBg: 'bg-brand-cyan',
      iconColor: 'text-brand-inkBlack',
      borderAccent: 'border-brand-inkBlack',
      stepNum: '03',
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none"
    >
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll animation="fade-up" delay={0}>
          {/* Header ribbon */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-brand-inkBlack/15">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase tracking-wider shadow-brutal-xs">
              <span className="w-2 h-2 rounded-full bg-brand-lime border border-brand-inkBlack" />
              <span>{t.coreActions.badge}</span>
            </div>
            <div className="text-xs font-bold text-stone-600 hidden sm:block">
              {t.coreActions.headline}
            </div>
          </div>

          {/* 3 Core Action Columns with dividers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {actions.map((action) => {
              const IconComponent = action.icon;
              return (
                <div
                  key={action.id}
                  className="bg-white border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon & Step Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl ${action.colorBg} border-2 border-brand-inkBlack flex items-center justify-center shadow-brutal-xs flex-shrink-0`}
                      >
                        <IconComponent className={`w-6 h-6 ${action.iconColor} stroke-[2.5]`} />
                      </div>
                      <span className="text-xs font-black text-stone-500 uppercase tracking-widest px-2.5 py-1 bg-brand-warmCream border border-brand-inkBlack rounded-lg">
                        {action.stepNum}
                      </span>
                    </div>

                    {/* Action Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-brand-inkBlack mb-2 tracking-tight">
                      {action.title}
                    </h3>

                    {/* Action Description */}
                    <p className="text-sm sm:text-base font-medium text-stone-700 leading-relaxed">
                      {action.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
