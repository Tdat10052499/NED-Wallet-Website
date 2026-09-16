import React, { useState } from 'react';
import { ArrowDownLeft, ArrowUpRight, History, QrCode, Phone, Wallet, ShieldCheck, Check } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { AppMockupScreens } from '../assets/AppMockupScreens';
import { PhoneTiltWrapper } from './PhoneTiltWrapper';

export const ExperienceShowcase: React.FC = () => {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<'send' | 'receive' | 'track'>('send');

  return (
    <section id="experience" className="relative w-full bg-brand-warmCream text-brand-inkBlack py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lavender border-2 border-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs">
            <span>{t.experience.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight mb-5">
            {t.experience.headline}
          </h2>
          <p className="text-base sm:text-lg text-stone-700 font-medium leading-relaxed">
            {t.experience.subtitle}
          </p>
        </div>

        {/* 3 Callout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border-3 border-brand-inkBlack rounded-2xl p-6 shadow-brutal card-brutal-interactive">
            <div className="w-12 h-12 rounded-xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center font-black text-xl mb-4 shadow-brutal-xs">
              <Wallet className="w-6 h-6 text-brand-inkBlack" />
            </div>
            <h3 className="text-xl font-black text-brand-inkBlack mb-2">
              {t.callouts.balance}
            </h3>
            <p className="text-sm font-medium text-stone-600 leading-relaxed">
              {t.callouts.balanceDesc}
            </p>
          </div>

          <div className="bg-white border-3 border-brand-inkBlack rounded-2xl p-6 shadow-brutal card-brutal-interactive">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan border-2 border-brand-inkBlack flex items-center justify-center font-black text-xl mb-4 shadow-brutal-xs">
              <Phone className="w-6 h-6 text-brand-inkBlack" />
            </div>
            <h3 className="text-xl font-black text-brand-inkBlack mb-2">
              {t.callouts.receive}
            </h3>
            <p className="text-sm font-medium text-stone-600 leading-relaxed">
              {t.callouts.receiveDesc}
            </p>
          </div>

          <div className="bg-white border-3 border-brand-inkBlack rounded-2xl p-6 shadow-brutal card-brutal-interactive">
            <div className="w-12 h-12 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center font-black text-xl mb-4 shadow-brutal-xs">
              <ShieldCheck className="w-6 h-6 text-brand-inkBlack" />
            </div>
            <h3 className="text-xl font-black text-brand-inkBlack mb-2">
              {t.callouts.transfer}
            </h3>
            <p className="text-sm font-medium text-stone-600 leading-relaxed">
              {t.callouts.transferDesc}
            </p>
          </div>
        </div>

        {/* Interactive Feature Tabs Showcase */}
        <div className="bg-white border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-10 shadow-brutal-xl">
          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 pb-6 border-b-2 border-brand-inkBlack">
            <button
              type="button"
              onClick={() => setActiveTab('send')}
              className={`px-5 py-2.5 rounded-xl font-black text-sm border-2 border-brand-inkBlack transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'send'
                  ? 'bg-brand-lavender text-brand-inkBlack shadow-brutal-sm -translate-y-0.5'
                  : 'bg-brand-warmCream text-stone-700 hover:bg-stone-100'
              }`}
              aria-pressed={activeTab === 'send'}
            >
              <ArrowUpRight className="w-4 h-4" />
              <span>{t.experience.tabSend}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('receive')}
              className={`px-5 py-2.5 rounded-xl font-black text-sm border-2 border-brand-inkBlack transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'receive'
                  ? 'bg-brand-cyan text-brand-inkBlack shadow-brutal-sm -translate-y-0.5'
                  : 'bg-brand-warmCream text-stone-700 hover:bg-stone-100'
              }`}
              aria-pressed={activeTab === 'receive'}
            >
              <ArrowDownLeft className="w-4 h-4" />
              <span>{t.experience.tabReceive}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('track')}
              className={`px-5 py-2.5 rounded-xl font-black text-sm border-2 border-brand-inkBlack transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'track'
                  ? 'bg-brand-lime text-brand-inkBlack shadow-brutal-sm -translate-y-0.5'
                  : 'bg-brand-warmCream text-stone-700 hover:bg-stone-100'
              }`}
              aria-pressed={activeTab === 'track'}
            >
              <History className="w-4 h-4" />
              <span>{t.experience.tabTrack}</span>
            </button>
          </div>

          {/* Interactive Split View: Explanation Left, Mockup Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {activeTab === 'send' && (
                <div className="animate-fadeIn">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lavender/30 border border-brand-inkBlack rounded-lg text-xs font-black uppercase mb-3">
                    Luồng chuyển stablecoin
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-inkBlack mb-4">
                    {t.experience.sendTitle}
                  </h3>
                  <p className="text-base text-stone-600 leading-relaxed mb-6 font-medium">
                    {t.experience.sendDesc}
                  </p>

                  <div className="flex flex-col gap-3 w-full max-w-lg mb-6">
                    <div className="flex items-start gap-3 p-3 bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl">
                      <div className="p-1.5 bg-brand-lime rounded-lg border border-brand-inkBlack">
                        <Check className="w-4 h-4 text-brand-inkBlack" />
                      </div>
                      <div>
                        <div className="text-sm font-black">Nhận diện qua số điện thoại</div>
                        <div className="text-xs text-stone-600 font-medium">Gửi tiền nhanh tới người thân bạn bè mà không cần nhớ chuỗi ký tự dài.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl">
                      <div className="p-1.5 bg-brand-cyan rounded-lg border border-brand-inkBlack">
                        <QrCode className="w-4 h-4 text-brand-inkBlack" />
                      </div>
                      <div>
                        <div className="text-sm font-black">Quét mã QR tiện lợi</div>
                        <div className="text-xs text-stone-600 font-medium">Quét tức thì mã QR nhận thanh toán chỉ với một chạm camera.</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'receive' && (
                <div className="animate-fadeIn">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-cyan/30 border border-brand-inkBlack rounded-lg text-xs font-black uppercase mb-3">
                    Luồng nhận stablecoin
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-inkBlack mb-4">
                    {t.experience.receiveTitle}
                  </h3>
                  <p className="text-base text-stone-600 leading-relaxed mb-6 font-medium">
                    {t.experience.receiveDesc}
                  </p>

                  <div className="p-4 bg-brand-paleYellow border-2 border-brand-inkBlack rounded-2xl mb-6 shadow-brutal-xs">
                    <div className="text-sm font-black mb-1">Mã QR cá nhân luôn sẵn sàng</div>
                    <div className="text-xs text-stone-700 leading-relaxed font-medium">
                      Mỗi ví được cấp mã QR chuẩn hóa và liên kết định danh người nhận an toàn trên môi trường thử nghiệm Solana Devnet.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'track' && (
                <div className="animate-fadeIn">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lime/30 border border-brand-inkBlack rounded-lg text-xs font-black uppercase mb-3">
                    Quản lý số dư & Lịch sử
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-inkBlack mb-4">
                    {t.experience.trackTitle}
                  </h3>
                  <p className="text-base text-stone-600 leading-relaxed mb-6 font-medium">
                    {t.experience.trackDesc}
                  </p>

                  <div className="p-4 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl mb-6 shadow-brutal-xs">
                    <div className="text-sm font-black mb-1">Tốc độ tức thời của Solana</div>
                    <div className="text-xs text-stone-700 leading-relaxed font-medium">
                      Các giao dịch Devnet được xác nhận trong vòng 1-2 giây, đảm bảo trải nghiệm liền mạch không độ trễ.
                    </div>
                  </div>
                </div>
              )}

              {/* Interaction Hint */}
              <div className="text-xs font-extrabold text-stone-700 bg-brand-paleYellow px-3 py-1.5 rounded-lg border border-brand-inkBlack mb-3">
                💡 Mẹo: Bạn có thể bấm trực tiếp các nút trên màn hình điện thoại bên phải để trải nghiệm luồng thao tác.
              </div>

              {/* Disclaimer */}
              <div className="text-xs font-bold text-stone-500 italic">
                * {t.experience.illustrationNotice}
              </div>
            </div>

            {/* Right Interactive Mockup Screen with 3D cursor tracking (Two-way synced with outer tabs) */}
            <div className="lg:col-span-5 flex justify-center">
              <PhoneTiltWrapper className="w-full max-w-[330px] aspect-[9/18]">
                <div className="w-full h-full rounded-[40px] bg-brand-inkBlack border-4 border-brand-inkBlack p-2.5 [transform-style:preserve-3d]">
                  <div className="w-full h-full rounded-[32px] overflow-hidden border-2 border-brand-inkBlack bg-brand-warmCream [transform:translateZ(10px)]">
                    <AppMockupScreens
                      activeTab={activeTab}
                      onTabChange={setActiveTab}
                    />
                  </div>
                </div>
              </PhoneTiltWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
