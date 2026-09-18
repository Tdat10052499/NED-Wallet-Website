import React, { useState } from 'react';
import { Phone, QrCode, Wallet, Check, ArrowRight, ShieldCheck, Sparkles, Smartphone, Coins } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';
import { RevealOnScroll } from './RevealOnScroll';

export const SendFeature: React.FC = () => {
  const { t, lang } = useI18n();

  // Mode: 'real' (screenshot showcase) vs 'interactive' (simulated 3 steps)
  const [viewMode, setViewMode] = useState<'real' | 'interactive'>('real');
  const [realTab, setRealTab] = useState<'phone' | 'shake' | 'coin' | 'hub'>('shake');

  // Interactive flow states: 1: recipient, 2: amount, 3: review
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [recipientMode, setRecipientMode] = useState<'phone' | 'qr' | 'wallet'>('phone');
  const [sendAmount, setSendAmount] = useState('25.00');

  const realScreenshots = {
    shake: {
      title: lang === 'vi' ? 'Lắc Điện Thoại Chia Tiền (Shake & Split)' : 'Shake & Split',
      desc: lang === 'vi' ? 'Lắc máy cùng bạn bè xung quanh để tự động nhận diện và chia đều hóa đơn on-chain.' : 'Shake phones together to automatically detect nearby devices and split group bills on-chain.',
      src: siteConfig.screenshots.shakeSplit,
      badge: 'Chỉ có trên N.E.D',
    },
    coin: {
      title: lang === 'vi' ? 'Phòng Lì Xì Tung Đồng Xu' : 'Lucky Coin Room',
      desc: lang === 'vi' ? 'Khởi tạo phòng chơi, vuốt tung đồng xu may mắn để chọn người nhận SOL/USDC trực tiếp on-chain.' : 'Create a room and swipe up to flip a lucky coin on-chain for giveaways and gifts.',
      src: siteConfig.screenshots.luckyCoin,
      badge: 'Độc quyền Solana',
    },
    phone: {
      title: lang === 'vi' ? 'Chuyển Tiền Bằng Số Điện Thoại' : 'Send by Phone Number',
      desc: lang === 'vi' ? 'Chuyển SOL/USDC trực tiếp tới người nhận qua số điện thoại liên kết, không cần nhớ địa chỉ ví dài.' : 'Transfer SOL/USDC directly using linked phone numbers without needing long public keys.',
      src: siteConfig.screenshots.transferPhone,
      badge: 'Nhanh 1-Chạm',
    },
    hub: {
      title: lang === 'vi' ? 'Trung Tâm Chuyển Tiền' : 'Transfer Hub',
      desc: lang === 'vi' ? 'Toàn bộ các phương thức chuyển và tương tác nhóm được sắp xếp gọn gàng trong một màn hình.' : 'All transfer and group interactive methods neatly organized on a single screen.',
      src: siteConfig.screenshots.transferCenter,
      badge: 'Tổng hợp',
    },
  };

  const recipients = {
    phone: { label: '0987 ••• 321', note: 'Số điện thoại trong danh bạ' },
    qr: { label: 'merchant_coffee.sol', note: 'Mã QR quét tại điểm nhận' },
    wallet: { label: '7xWp...9bM2', note: 'Địa chỉ ví Solana Devnet' },
  };

  return (
    <section
      id="send"
      className="scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      {/* Left Column (42%): Text, Headline & Explanation */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <RevealOnScroll animation="fade-up" delay={0}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lavender border-2 border-brand-inkBlack text-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs">
                <span className="w-2 h-2 rounded-full bg-brand-inkBlack" />
                <span>{t.sendFeature.tag}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight leading-[1.1] mb-5">
                {t.sendFeature.headline}
              </h2>

              <p className="text-base sm:text-lg font-medium text-stone-700 leading-relaxed mb-6">
                {t.sendFeature.description}
              </p>

              {/* 4 Feature Cards */}
              <div className="space-y-3 w-full max-w-md mb-6">
                {/* 1. SĐT */}
                <div
                  onClick={() => {
                    setViewMode('real');
                    setRealTab('phone');
                  }}
                  className={`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${
                    viewMode === 'real' && realTab === 'phone' ? 'bg-brand-lavender/30 -translate-y-0.5' : 'hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-brand-inkBlack" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-black text-brand-inkBlack">Chuyển Tiền Bằng Số Điện Thoại</div>
                      <div className="text-xs text-stone-600 font-medium">Chuyển SOL/USDC qua SĐT liên kết</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-brand-lime border border-brand-inkBlack rounded-md">
                    1-Chạm
                  </span>
                </div>

                {/* 2. Shake & Split */}
                <div
                  onClick={() => {
                    setViewMode('real');
                    setRealTab('shake');
                  }}
                  className={`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${
                    viewMode === 'real' && realTab === 'shake' ? 'bg-brand-cyan/30 -translate-y-0.5' : 'hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-cyan border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-4 h-4 text-brand-inkBlack" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-black text-brand-inkBlack">Lắc Điện Thoại Chia Tiền (Shake & Split)</div>
                      <div className="text-xs text-stone-600 font-medium">Lắc máy nhận diện bạn bè trong 20m</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-brand-cyan border border-brand-inkBlack rounded-md">
                    Hot
                  </span>
                </div>

                {/* 3. Lì Xì Tung Đồng Xu */}
                <div
                  onClick={() => {
                    setViewMode('real');
                    setRealTab('coin');
                  }}
                  className={`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${
                    viewMode === 'real' && realTab === 'coin' ? 'bg-brand-lime/30 -translate-y-0.5' : 'hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0">
                      <Coins className="w-4 h-4 text-brand-inkBlack" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-black text-brand-inkBlack">Phòng Lì Xì Tung Đồng Xu</div>
                      <div className="text-xs text-stone-600 font-medium">Tung đồng xu may mắn trực tiếp on-chain</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-brand-paleYellow border border-brand-inkBlack rounded-md">
                    May mắn
                  </span>
                </div>

                {/* 4. Trung Tâm Chuyển Tiền */}
                <div
                  onClick={() => {
                    setViewMode('real');
                    setRealTab('hub');
                  }}
                  className={`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${
                    viewMode === 'real' && realTab === 'hub' ? 'bg-brand-paleYellow/50 -translate-y-0.5' : 'hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-paleYellow border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0">
                      <Wallet className="w-4 h-4 text-brand-inkBlack" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-black text-brand-inkBlack">Trung Tâm Chuyển Tiền Tổng Hợp</div>
                      <div className="text-xs text-stone-600 font-medium">Tổng quan mọi phương thức chuyển</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-brand-lavender border border-brand-inkBlack rounded-md">
                    Hub
                  </span>
                </div>
              </div>

              {/* Mascot Teddy Companion Bubble */}
              <div className="p-3.5 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal flex items-center gap-3.5 max-w-md">
                <img
                  src={siteConfig.mascots.exciting}
                  alt="Teddy Mascot Exciting"
                  className="w-14 h-14 object-contain flex-shrink-0 animate-bounce"
                  style={{ animationDuration: '2.5s' }}
                />
                <div>
                  <div className="text-[11px] font-black uppercase text-brand-deepPurple tracking-wider">
                    Gợi ý từ NED Teddy
                  </div>
                  <p className="text-xs font-bold text-stone-800 leading-snug mt-0.5">
                    {t.sendFeature.mascotBubble}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column (58%): Interactive Showcase with Real App & Simulation */}
          <div className="lg:col-span-7">
            <RevealOnScroll animation="pop" delay={120}>
              <div className="bg-white border-4 border-brand-inkBlack rounded-3xl p-5 sm:p-7 shadow-brutal-xl">
                {/* Header View Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-brand-inkBlack">
                  {/* Mode Toggle: Real App vs Sim */}
                  <div className="inline-flex items-center bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs">
                    <button
                      type="button"
                      onClick={() => setViewMode('real')}
                      className={`px-3 py-1 text-xs font-black rounded-lg transition-all cursor-pointer ${
                        viewMode === 'real'
                          ? 'bg-brand-inkBlack text-brand-offWhite shadow-brutal-xs'
                          : 'text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      Màn hình ứng dụng thực tế
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('interactive')}
                      className={`px-3 py-1 text-xs font-black rounded-lg transition-all cursor-pointer ${
                        viewMode === 'interactive'
                          ? 'bg-brand-inkBlack text-brand-offWhite shadow-brutal-xs'
                          : 'text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      Mô phỏng thao tác
                    </button>
                  </div>

                  {/* Devnet Tag */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lime border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase shadow-brutal-xs">
                    <Sparkles className="w-3.5 h-3.5 text-brand-inkBlack" />
                    <span>Solana Devnet</span>
                  </div>
                </div>

                {/* VIEW 1: Real App Screenshot Showcase */}
                {viewMode === 'real' && (
                  <div className="animate-appearance-smooth">
                    {/* 4 Tabs */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                      {(['shake', 'coin', 'phone', 'hub'] as const).map((tabKey) => (
                        <button
                          key={tabKey}
                          type="button"
                          onClick={() => setRealTab(tabKey)}
                          className={`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack transition-all cursor-pointer text-center truncate ${
                            realTab === tabKey
                              ? 'bg-brand-lavender text-brand-inkBlack shadow-brutal-xs -translate-y-0.5'
                              : 'bg-brand-warmCream text-stone-700 hover:bg-stone-200'
                          }`}
                        >
                          {t.sendFeature.showcaseTabs[tabKey]}
                        </button>
                      ))}
                    </div>

                    {/* Active Screenshot Display in Neo-Brutal Frame */}
                    <div className="bg-brand-warmCream/60 border-3 border-brand-inkBlack rounded-2xl p-4 sm:p-5">
                      <div className="flex flex-col sm:flex-row items-center gap-6">
                        {/* Phone mockup screenshot container */}
                        <div className="w-[200px] xs:w-[220px] sm:w-[240px] flex-shrink-0 bg-brand-inkBlack border-3 border-brand-inkBlack rounded-[32px] p-2 shadow-brutal">
                          <div className="w-full rounded-[24px] overflow-hidden border border-brand-inkBlack bg-white">
                            <img
                              src={realScreenshots[realTab].src}
                              alt={realScreenshots[realTab].title}
                              className="w-full h-auto object-contain max-h-[460px]"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Screenshot Explanations */}
                        <div className="flex-1 flex flex-col justify-between py-2 text-left">
                          <div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-paleYellow border border-brand-inkBlack rounded-lg text-[11px] font-black uppercase text-stone-800 mb-2.5 shadow-brutal-xs">
                              <span>{realScreenshots[realTab].badge}</span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-black text-brand-inkBlack mb-2 leading-tight">
                              {realScreenshots[realTab].title}
                            </h3>

                            <p className="text-sm font-medium text-stone-700 leading-relaxed mb-4">
                              {realScreenshots[realTab].desc}
                            </p>

                            <div className="p-3 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-bold text-stone-700 shadow-brutal-xs">
                              <div className="flex items-center gap-2 mb-1 text-brand-deepPurple font-black">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Bảo mật & Miễn phí phí Gas</span>
                              </div>
                              <p className="text-[11px] text-stone-600">
                                Mọi giao dịch chia tiền và lì xì đều được thực thi bảo mật trên Solana, tài trợ 100% phí Gas qua N.E.D Relayer.
                              </p>
                            </div>
                          </div>

                          <div className="mt-5 pt-3 border-t border-brand-inkBlack/15 flex items-center justify-between text-[11px] font-black text-stone-500">
                            <span>Ảnh ứng dụng gốc từ Expo</span>
                            <span className="text-emerald-700">✓ Đang hoạt động trên Devnet</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 2: Interactive 3-Step Simulation */}
                {viewMode === 'interactive' && (
                  <div className="animate-appearance-smooth">
                    {/* Flow Step Indicators */}
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-brand-inkBlack/15">
                      <span className="text-xs font-black uppercase text-stone-500">
                        Thử nghiệm luồng chuyển
                      </span>
                      <div className="flex items-center gap-1.5">
                        {[1, 2, 3].map((step) => (
                          <button
                            key={step}
                            type="button"
                            onClick={() => setActiveStep(step as 1 | 2 | 3)}
                            className={`px-3 py-1 rounded-lg text-xs font-black border-2 border-brand-inkBlack transition-all cursor-pointer ${
                              activeStep === step
                                ? 'bg-brand-inkBlack text-brand-offWhite shadow-brutal-xs -translate-y-0.5'
                                : 'bg-brand-warmCream text-stone-700 hover:bg-stone-200'
                            }`}
                          >
                            Bước {step}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 1 */}
                    {activeStep === 1 && (
                      <div className="animate-appearance-smooth">
                        <div className="text-xs font-black uppercase text-stone-500 mb-2">
                          {t.sendFeature.step1Name}
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <button
                            type="button"
                            onClick={() => setRecipientMode('phone')}
                            className={`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack flex items-center justify-center gap-1.5 transition-all ${
                              recipientMode === 'phone'
                                ? 'bg-brand-lavender text-brand-inkBlack shadow-brutal-xs'
                                : 'bg-brand-warmCream text-stone-700'
                            }`}
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>SĐT</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setRecipientMode('qr')}
                            className={`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack flex items-center justify-center gap-1.5 transition-all ${
                              recipientMode === 'qr'
                                ? 'bg-brand-cyan text-brand-inkBlack shadow-brutal-xs'
                                : 'bg-brand-warmCream text-stone-700'
                            }`}
                          >
                            <QrCode className="w-3.5 h-3.5" />
                            <span>Mã QR</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setRecipientMode('wallet')}
                            className={`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack flex items-center justify-center gap-1.5 transition-all ${
                              recipientMode === 'wallet'
                                ? 'bg-brand-lime text-brand-inkBlack shadow-brutal-xs'
                                : 'bg-brand-warmCream text-stone-700'
                            }`}
                          >
                            <Wallet className="w-3.5 h-3.5" />
                            <span>Địa chỉ ví</span>
                          </button>
                        </div>

                        <div className="p-4 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl mb-5">
                          <div className="text-xs font-bold text-stone-500 uppercase">{t.sendFeature.recipientLabel}:</div>
                          <div className="text-base sm:text-lg font-black text-brand-inkBlack mt-1">
                            {recipients[recipientMode].label}
                          </div>
                          <div className="text-xs text-stone-600 font-medium mt-0.5">
                            {recipients[recipientMode].note}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setActiveStep(2)}
                          className="btn-brutal-primary w-full py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2"
                        >
                          <span>Tiếp tục sang nhập số tiền</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    {/* Step 2 */}
                    {activeStep === 2 && (
                      <div className="animate-appearance-smooth">
                        <div className="text-xs font-black uppercase text-stone-500 mb-2">
                          {t.sendFeature.step2Name}
                        </div>

                        <div className="p-5 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl text-center mb-4">
                          <div className="text-xs font-bold text-stone-500 uppercase">{t.sendFeature.amountLabel}</div>
                          <div className="text-3xl sm:text-4xl font-black text-brand-inkBlack my-2">
                            {sendAmount} <span className="text-lg font-extrabold text-brand-deepPurple">USDC</span>
                          </div>

                          <div className="flex items-center justify-center gap-2 mt-3">
                            {['10.00', '25.00', '50.00'].map((amt) => (
                              <button
                                key={amt}
                                type="button"
                                onClick={() => setSendAmount(amt)}
                                className={`px-3 py-1.5 rounded-xl border-2 border-brand-inkBlack font-black text-xs transition-all ${
                                  sendAmount === amt
                                    ? 'bg-brand-lime text-brand-inkBlack shadow-brutal-xs -translate-y-0.5'
                                    : 'bg-white text-stone-700 hover:bg-stone-100'
                                }`}
                              >
                                {amt} USDC
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() => setActiveStep(1)}
                            className="py-3 px-4 bg-brand-warmCream text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl font-black text-sm"
                          >
                            Quay lại
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveStep(3)}
                            className="btn-brutal-primary flex-1 py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2"
                          >
                            <span>Tiếp tục sang kiểm tra</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3 */}
                    {activeStep === 3 && (
                      <div className="animate-appearance-smooth">
                        <div className="text-xs font-black uppercase text-stone-500 mb-2">
                          {t.sendFeature.step3Name}
                        </div>

                        <div className="p-4 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl space-y-2 text-xs font-bold mb-4">
                          <div className="flex justify-between pb-2 border-b border-brand-inkBlack/15">
                            <span className="text-stone-500">Người nhận:</span>
                            <span className="font-black text-brand-inkBlack">{recipients[recipientMode].label}</span>
                          </div>
                          <div className="flex justify-between pb-2 border-b border-brand-inkBlack/15">
                            <span className="text-stone-500">Số lượng:</span>
                            <span className="font-black text-brand-inkBlack">{sendAmount} USDC</span>
                          </div>
                          <div className="flex justify-between pb-2 border-b border-brand-inkBlack/15">
                            <span className="text-stone-500">Mạng thử nghiệm:</span>
                            <span className="font-black text-brand-deepPurple">Solana Devnet</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-500">Phí mạng Devnet mẫu:</span>
                            <span className="font-black text-emerald-800">~0.000005 SOL (Được tài trợ)</span>
                          </div>
                        </div>

                        <div className="p-3 bg-brand-lime border-2 border-brand-inkBlack rounded-2xl flex items-center gap-2.5 mb-5 shadow-brutal-xs">
                          <ShieldCheck className="w-5 h-5 text-brand-inkBlack flex-shrink-0" />
                          <div className="text-xs font-black text-brand-inkBlack leading-tight">
                            {t.sendFeature.reviewNotice}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() => setActiveStep(2)}
                            className="py-3 px-4 bg-brand-warmCream text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl font-black text-sm"
                          >
                            Quay lại
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveStep(1)}
                            className="btn-brutal-cyan flex-1 py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2"
                          >
                            <Check className="w-4 h-4 text-brand-inkBlack" />
                            <span>Thử lại từ đầu</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Footer Notice */}
                <div className="mt-5 pt-3 border-t border-brand-inkBlack/10 text-[11px] font-bold text-stone-500 text-center">
                  {t.sendFeature.illustrationNotice}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
