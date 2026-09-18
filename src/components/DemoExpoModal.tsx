import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Camera, Download, ScanLine, Smartphone, X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { siteConfig } from '../config/siteConfig';
import projectQrImage from '../assets/QR.png';

// Fill this with the public Expo/EAS URL when the demo build is ready.
export const PROJECT_EAS_URL = '';
export const PROJECT_QR_IMAGE = projectQrImage;

interface DemoExpoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PlatformGuideProps {
  platform: 'Android' | 'iOS';
  storeLabel: string;
  storeUrl: string;
  scanInstruction: string;
  accentClass: string;
  storeIcon: string;
}

const PlatformGuide: React.FC<PlatformGuideProps> = ({
  platform,
  storeLabel,
  storeUrl,
  scanInstruction,
  accentClass,
  storeIcon,
}) => (
  <article className="rounded-3xl border-3 border-brand-inkBlack bg-white p-4 shadow-brutal sm:p-5">
    <div className="flex items-center justify-between gap-3 border-b-2 border-brand-inkBlack pb-3">
      <div className="flex items-center gap-3">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl border-2 border-brand-inkBlack ${accentClass} shadow-brutal-xs`}>
          <Smartphone className="h-6 w-6" strokeWidth={2.5} />
        </div>
        <h3 className="text-xl font-black">{platform}</h3>
      </div>
      <span className="rounded-lg border-2 border-brand-inkBlack bg-brand-inkBlack px-2 py-1 text-[10px] font-black uppercase tracking-wider text-white">
        Expo Go
      </span>
    </div>

    <div className="flex items-start gap-3 py-5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-brand-inkBlack bg-brand-lime text-sm font-black shadow-brutal-xs">01</span>
      <div className="min-w-0 flex-1">
        <h4 className="mb-1 text-base font-black">Cài đặt Expo Go</h4>
        <p className="mb-3 text-sm font-bold text-stone-700">{storeLabel}</p>
        <a href={storeUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl border-2 border-brand-inkBlack bg-brand-paleYellow p-3 shadow-brutal-xs transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-brand-inkBlack bg-brand-inkBlack text-lg font-black text-white">{storeIcon}</div>
          <QRCodeSVG value={storeUrl} size={74} level="M" bgColor="#FFF3A6" fgColor="#111111" className="h-[74px] w-[74px] shrink-0 rounded-lg border-2 border-brand-inkBlack bg-brand-paleYellow p-1" />
          <span className="min-w-0 text-xs font-black leading-tight">Quét để mở<br />cửa hàng ứng dụng</span>
          <Download className="ml-auto h-5 w-5 shrink-0" strokeWidth={3} />
        </a>
      </div>
    </div>

    <div className="flex justify-center border-y-2 border-dashed border-brand-inkBlack py-2 text-brand-inkBlack">
      <ArrowDown className="h-7 w-7 animate-bounce" strokeWidth={3} />
    </div>

    <div className="flex items-start gap-3 pt-5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-brand-inkBlack bg-brand-cyan text-sm font-black shadow-brutal-xs">02</span>
      <div>
        <h4 className="mb-1 text-base font-black">Quét mã dự án</h4>
        <p className="text-sm font-bold leading-relaxed text-stone-700">{scanInstruction}</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-xl border-2 border-brand-inkBlack bg-brand-warmCream px-3 py-1.5 text-xs font-black shadow-brutal-xs">
          <Camera className="h-4 w-4" strokeWidth={3} /> Sẵn sàng khám phá
        </div>
      </div>
    </div>
  </article>
);

export const DemoExpoModal: React.FC<DemoExpoModalProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [projectQrImageFailed, setProjectQrImageFailed] = useState(false);
  const projectQrValue = PROJECT_EAS_URL || 'https://expo.dev';

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-brand-deepPurple/75 p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="demo-expo-title" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="my-auto w-full max-w-6xl overflow-hidden rounded-3xl border-4 border-brand-inkBlack bg-brand-warmCream shadow-brutal-xl animate-slideUp">
        <div className="flex items-start justify-between gap-4 border-b-4 border-brand-inkBlack bg-brand-lavender p-4 sm:p-6">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border-2 border-brand-inkBlack bg-brand-lime px-2.5 py-1 text-[10px] font-black uppercase tracking-wider shadow-brutal-xs">
              <ScanLine className="h-4 w-4" strokeWidth={3} /> Demo walkthrough
            </div>
            <h2 id="demo-expo-title" className="max-w-3xl text-2xl font-black leading-tight sm:text-4xl">Hướng dẫn trải nghiệm Demo N.E.D Wallet</h2>
            <p className="mt-2 max-w-2xl text-sm font-bold text-stone-800 sm:text-base">Tải Expo Go, mở ứng dụng và quét mã dự án. Chỉ ba thao tác để bắt đầu.</p>
            <div className="mt-4 flex items-center gap-3">
              <img src={siteConfig.mascots.curious} alt="NED Teddy hướng dẫn trải nghiệm demo" className="h-12 w-12 shrink-0 object-contain drop-shadow-md" />
              <div className="rounded-2xl border-2 border-brand-inkBlack bg-white px-3 py-2 text-xs font-black leading-snug shadow-brutal-xs">
                NED Teddy sẽ chỉ bạn từng bước!
              </div>
            </div>
          </div>
          <button ref={closeButtonRef} type="button" onClick={onClose} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-brand-inkBlack bg-white shadow-brutal-xs transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5" aria-label="Đóng hướng dẫn demo">
            <X className="h-6 w-6" strokeWidth={3} />
          </button>
        </div>

        <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)_minmax(0,1fr)] lg:items-center">
          <PlatformGuide platform="Android" storeLabel="Vào CH Play tải Expo Go" storeUrl="https://play.google.com/store/apps/details?id=host.exp.exponent" scanInstruction="Mở ứng dụng Expo Go và chọn 'Scan QR Code' để quét mã dự án N.E.D Wallet" accentClass="bg-brand-lime" storeIcon="▶" />

          <div className="order-first rounded-3xl border-3 border-brand-inkBlack bg-brand-cyan p-4 text-center text-brand-inkBlack shadow-brutal lg:order-none">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-brand-inkBlack bg-white px-3 py-1 text-xs font-black uppercase shadow-brutal-xs">
              <ScanLine className="h-4 w-4" strokeWidth={3} /> Project QR
            </div>
            <div className="mx-auto flex aspect-square max-w-[260px] items-center justify-center rounded-2xl border-3 border-brand-inkBlack bg-white p-3 shadow-brutal-lg">
              {!projectQrImageFailed ? (
                <img src={PROJECT_QR_IMAGE} alt="Mã QR dự án N.E.D Wallet" className="h-full w-full object-contain" onError={() => setProjectQrImageFailed(true)} />
              ) : (
                <QRCodeSVG value={projectQrValue} size={230} level="H" bgColor="#FFFFFF" fgColor="#111111" className="h-full w-full" />
              )}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-left">
              <img src={siteConfig.mascots.waving} alt="NED Teddy mời quét mã dự án" className="h-12 w-12 shrink-0 object-contain" />
              <p className="max-w-[180px] text-sm font-black leading-relaxed">Quét mã này sau khi đã mở Expo Go</p>
            </div>
            {!projectQrImageFailed && <p className="mt-2 rounded-lg border-2 border-brand-inkBlack bg-white px-2 py-1 text-[10px] font-bold">Mã QR chính thức của dự án</p>}
            {projectQrImageFailed && !PROJECT_EAS_URL && <p className="mt-2 rounded-lg border-2 border-brand-inkBlack bg-brand-paleYellow px-2 py-1 text-[10px] font-bold">Không thể tải ảnh QR, vui lòng kiểm tra asset</p>}
          </div>

          <PlatformGuide platform="iOS" storeLabel="Vào App Store tải Expo Go" storeUrl="https://apps.apple.com/app/expo-go/id982107779" scanInstruction="Mở ứng dụng Camera mặc định của iPhone để quét mã dự án N.E.D Wallet" accentClass="bg-brand-lavender" storeIcon="A" />
        </div>
      </div>
    </div>
  );
};