import React, { useState } from 'react';
import { Phone, QrCode, Wallet, Check, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { RevealOnScroll } from './RevealOnScroll';

export const SendFeature: React.FC = () => {
  const { t } = useI18n();

  // Interactive flow states: 1: recipient, 2: amount, 3: review
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [recipientMode, setRecipientMode] = useState<'phone' | 'qr' | 'wallet'>('phone');
  const [sendAmount, setSendAmount] = useState('25.00');

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

              <p className="text-base sm:text-lg font-medium text-stone-700 leading-relaxed mb-8">
                {t.sendFeature.description}
              </p>

              {/* 3 Identity Highlights */}
              <div className="space-y-3 w-full max-w-md">
                <div
                  onClick={() => {
                    setRecipientMode('phone');
                    setActiveStep(1);
                  }}
                  className={`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center gap-3.5 shadow-brutal-xs cursor-pointer transition-all ${
                    recipientMode === 'phone' ? 'bg-brand-lavender/30 -translate-y-0.5' : 'hover:bg-stone-50'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-brand-inkBlack" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-black text-brand-inkBlack">{t.sendFeature.modePhone}</div>
                    <div className="text-xs text-stone-600 font-medium">Gửi trực tiếp bằng danh bạ quen thuộc</div>
                  </div>
                </div>

                <div
                  onClick={() => {
                    setRecipientMode('qr');
                    setActiveStep(1);
                  }}
                  className={`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center gap-3.5 shadow-brutal-xs cursor-pointer transition-all ${
                    recipientMode === 'qr' ? 'bg-brand-cyan/30 -translate-y-0.5' : 'hover:bg-stone-50'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-cyan border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0">
                    <QrCode className="w-4 h-4 text-brand-inkBlack" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-black text-brand-inkBlack">{t.sendFeature.modeQr}</div>
                    <div className="text-xs text-stone-600 font-medium">Quét tức thì mã QR nhận chuyển khoản</div>
                  </div>
                </div>

                <div
                  onClick={() => {
                    setRecipientMode('wallet');
                    setActiveStep(1);
                  }}
                  className={`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center gap-3.5 shadow-brutal-xs cursor-pointer transition-all ${
                    recipientMode === 'wallet' ? 'bg-brand-lime/30 -translate-y-0.5' : 'hover:bg-stone-50'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-4 h-4 text-brand-inkBlack" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-black text-brand-inkBlack">{t.sendFeature.modeWallet}</div>
                    <div className="text-xs text-stone-600 font-medium">Hỗ trợ địa chỉ chuẩn mạng Solana</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column (58%): Labeled Operation Flow Illustration */}
          <div className="lg:col-span-7">
            <RevealOnScroll animation="pop" delay={120}>
              <div className="bg-white border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal-lg">
                {/* Header Tag for Illustration */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-brand-inkBlack">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-paleYellow border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase shadow-brutal-xs">
                    <Info className="w-3.5 h-3.5 text-brand-inkBlack" />
                    <span>{t.sendFeature.illustrationBadge}</span>
                  </div>

                  {/* Flow Step Indicators */}
                  <div className="flex items-center gap-1 sm:gap-2">
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

                {/* State 1: Choose Recipient */}
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

                {/* State 2: Enter Amount */}
                {activeStep === 2 && (
                  <div className="animate-appearance-smooth">
                    <div className="text-xs font-black uppercase text-stone-500 mb-2">
                      {t.sendFeature.step2Name}
                    </div>

                    <div className="p-5 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl text-center mb-4">
                      <div className="text-xs font-bold text-stone-500 uppercase">{t.sendFeature.amountLabel}</div>
                      <div className="text-3xl sm:text-4xl font-black text-brand-inkBlack my-2">
                        {sendAmount} <span className="text-lg font-extrabold text-brand-lavender">USDC</span>
                      </div>

                      {/* Quick Presets */}
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

                {/* State 3: Review Details */}
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
                        <span className="font-black text-emerald-800">~0.000005 SOL</span>
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
