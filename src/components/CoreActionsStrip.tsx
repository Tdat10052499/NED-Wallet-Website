import React from 'react';
import { ArrowDownLeft, ArrowUpRight, History, Sparkles } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';
import { RevealOnScroll } from './RevealOnScroll';

export const CoreActionsStrip: React.FC = () => {
  const { t, lang } = useI18n();

  const actions = [
    {
      id: 'receive',
      title: t.coreActions.receiveTitle,
      subtitle: lang === 'vi' ? 'SĐT, QR Code & Lì Xì' : 'Phone, QR Code & Lucky Coin',
      desc:
        lang === 'vi'
          ? 'Nhận USDC/SOL tức thì qua số điện thoại cá nhân, mã QR tĩnh hoặc tham gia phòng nhận Lì Xì may mắn on-chain.'
          : 'Instantly receive USDC/SOL via your phone number, static QR code, or join on-chain lucky coin giveaway rooms.',
      icon: ArrowDownLeft,
      colorBg: 'bg-brand-lavender',
      iconColor: 'text-brand-inkBlack',
      mascot: siteConfig.mascots.happy,
      mascotAlt: 'Teddy Happy',
      stepNum: '01',
      tag: lang === 'vi' ? 'Nhận tức thì' : 'Instant Receive',
    },
    {
      id: 'send',
      title: t.coreActions.sendTitle,
      subtitle: lang === 'vi' ? 'Gasless & Shake to Split' : 'Gasless & Shake to Split',
      desc:
        lang === 'vi'
          ? 'Chuyển tiền miễn phí Gas qua N.E.D Relayer. Trải nghiệm tính năng Shake & Split: Lắc máy chia đều hóa đơn nhóm trong 3 giây.'
          : 'Gas-free transfers powered by N.E.D Relayer. Experience Shake & Split: Shake devices to split bills in 3 seconds.',
      icon: ArrowUpRight,
      colorBg: 'bg-brand-lime',
      iconColor: 'text-brand-inkBlack',
      mascot: siteConfig.mascots.exciting,
      mascotAlt: 'Teddy Exciting',
      stepNum: '02',
      tag: lang === 'vi' ? 'Miễn phí Gas' : 'Zero Gas',
    },
    {
      id: 'track',
      title: t.coreActions.trackTitle,
      subtitle: lang === 'vi' ? 'Quản lý dòng tiền' : 'Cashflow Analytics',
      desc:
        lang === 'vi'
          ? 'Theo dõi số dư USDC thời gian thực, trực quan hóa biểu đồ thu vào / chi tiêu và thiết lập hạn mức ngân sách tháng thông minh.'
          : 'Real-time USDC balance tracking, visual monthly cashflow charts, and intelligent spending budget limits.',
      icon: History,
      colorBg: 'bg-brand-cyan',
      iconColor: 'text-brand-inkBlack',
      mascot: siteConfig.mascots.proud,
      mascotAlt: 'Teddy Proud',
      stepNum: '03',
      tag: lang === 'vi' ? 'Minh bạch 100%' : '100% Transparent',
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none"
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
                  className="bg-white border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between relative overflow-hidden group"
                >
                  <div>
                    {/* Top Row: Icon, Tag & Mascot Avatar */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-2xl ${action.colorBg} border-2 border-brand-inkBlack flex items-center justify-center shadow-brutal-xs flex-shrink-0`}
                        >
                          <IconComponent className={`w-6 h-6 ${action.iconColor} stroke-[2.5]`} />
                        </div>
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-stone-100 border border-brand-inkBlack text-[10px] font-black uppercase text-stone-700">
                          <Sparkles className="w-3 h-3 text-brand-deepPurple" />
                          <span>{action.tag}</span>
                        </div>
                      </div>

                      {/* Micro Mascot Avatar badge */}
                      <div className="w-12 h-12 rounded-full bg-brand-warmCream border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform">
                        <img
                          src={action.mascot}
                          alt={action.mascotAlt}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    </div>

                    {/* Action Title & Subtitle */}
                    <div className="mb-2">
                      <h3 className="text-2xl sm:text-3xl font-black text-brand-inkBlack tracking-tight">
                        {action.title}
                      </h3>
                      <div className="text-xs font-extrabold uppercase text-brand-deepPurple tracking-wider mt-0.5">
                        {action.subtitle}
                      </div>
                    </div>

                    {/* Action Description */}
                    <p className="text-sm sm:text-base font-medium text-stone-700 leading-relaxed mt-3">
                      {action.desc}
                    </p>
                  </div>

                  {/* Step pill indicator */}
                  <div className="mt-6 pt-4 border-t border-brand-inkBlack/10 flex items-center justify-between text-xs font-black text-stone-500">
                    <span className="uppercase tracking-wider">Bước {action.stepNum}</span>
                    <span className="text-[11px] text-brand-inkBlack font-bold">N.E.D Ecosystem</span>
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
