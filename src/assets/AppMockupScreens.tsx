import React from 'react';
import { ArrowUpRight, ArrowDownLeft, QrCode, Phone, ShieldCheck, Wallet, CheckCircle2 } from 'lucide-react';

interface MockupScreenProps {
  activeTab?: 'receive' | 'send' | 'track';
  customImage?: string;
}

export const AppMockupScreens: React.FC<MockupScreenProps> = ({ activeTab = 'send', customImage }) => {
  if (customImage) {
    return (
      <img
        src={customImage}
        alt="N.E.D Wallet App Interface"
        className="w-full h-full object-cover rounded-[36px]"
      />
    );
  }

  return (
    <div className="w-full h-full bg-brand-warmCream text-brand-inkBlack flex flex-col p-4 sm:p-5 select-none font-sans overflow-hidden">
      {/* Phone Status Bar */}
      <div className="flex items-center justify-between text-xs font-bold text-stone-700 pb-2 border-b-2 border-brand-inkBlack/10 mb-3">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-lime border border-brand-inkBlack animate-pulse" />
          <span className="text-[10px] tracking-wider uppercase font-extrabold bg-brand-deepPurple text-brand-offWhite px-1.5 py-0.5 rounded border border-brand-inkBlack">
            Devnet
          </span>
        </div>
      </div>

      {/* App Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center font-black text-xs shadow-brutal-xs">
            N
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider font-extrabold text-stone-600">Ví Devnet</div>
            <div className="text-xs font-black">ned_user.sol</div>
          </div>
        </div>
        <div className="px-2 py-0.5 bg-brand-paleYellow border-2 border-brand-inkBlack rounded-md text-[10px] font-black uppercase shadow-brutal-xs">
          Solana
        </div>
      </div>

      {/* Dynamic Content based on Active Tab */}
      {activeTab === 'send' && (
        <div className="flex-1 flex flex-col justify-between">
          {/* Main Card: Send Flow */}
          <div className="bg-white border-2 border-brand-inkBlack rounded-2xl p-3.5 shadow-brutal-sm mb-3">
            <div className="text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1">
              Chuyển Stablecoin
            </div>
            
            {/* Recipient Selection Bar */}
            <div className="grid grid-cols-3 gap-1.5 mb-3 bg-brand-warmCream p-1 rounded-xl border border-brand-inkBlack">
              <button type="button" className="bg-brand-lavender border border-brand-inkBlack text-[10px] font-bold py-1 rounded-lg flex items-center justify-center gap-1">
                <Phone className="w-3 h-3" /> SĐT
              </button>
              <button type="button" className="bg-white border border-brand-inkBlack text-[10px] font-bold py-1 rounded-lg flex items-center justify-center gap-1">
                <QrCode className="w-3 h-3" /> QR
              </button>
              <button type="button" className="bg-white border border-brand-inkBlack text-[10px] font-bold py-1 rounded-lg flex items-center justify-center gap-1">
                <Wallet className="w-3 h-3" /> Ví
              </button>
            </div>

            {/* Recipient Field */}
            <div className="bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-2.5 mb-2.5">
              <div className="text-[9px] font-extrabold uppercase text-stone-500">Người nhận (SĐT liên kết)</div>
              <div className="text-xs font-black text-brand-inkBlack mt-0.5">0987 ••• 321</div>
              <div className="text-[9px] font-semibold text-emerald-700 flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-2.5 h-2.5 inline" /> Đã kết nối ví Devnet
              </div>
            </div>

            {/* Amount Field */}
            <div className="bg-brand-offWhite border-2 border-brand-inkBlack rounded-xl p-2.5 text-center">
              <div className="text-[9px] font-bold uppercase text-stone-500">Số lượng gửi</div>
              <div className="text-xl font-black text-brand-inkBlack my-0.5">
                25.00 <span className="text-xs font-extrabold text-brand-lavender">USDC</span>
              </div>
              <div className="text-[9px] font-bold text-stone-500">Phí mạng ước tính: ~0.000005 SOL</div>
            </div>
          </div>

          {/* Verification Callout */}
          <div className="bg-brand-lime border-2 border-brand-inkBlack rounded-xl p-2.5 shadow-brutal-xs flex items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 flex-shrink-0" />
            <div className="text-[10px] font-bold leading-tight">
              Kiểm tra thông tin người nhận trước khi xác thực giao dịch
            </div>
          </div>

          {/* Confirm Button */}
          <div className="w-full py-2.5 bg-brand-inkBlack text-brand-offWhite font-black text-xs rounded-xl text-center border-2 border-brand-inkBlack shadow-brutal-xs">
            Xác nhận gửi Devnet USDC
          </div>
        </div>
      )}

      {activeTab === 'receive' && (
        <div className="flex-1 flex flex-col items-center justify-between">
          <div className="w-full bg-white border-2 border-brand-inkBlack rounded-2xl p-4 shadow-brutal-sm text-center flex flex-col items-center">
            <div className="text-[10px] font-black uppercase tracking-wider text-stone-500 mb-2">
              Mã QR Nhận Stablecoin
            </div>

            {/* Mock QR Canvas */}
            <div className="w-36 h-36 bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-2.5 flex flex-col items-center justify-center relative shadow-brutal-xs my-1">
              <div className="grid grid-cols-5 gap-1 w-full h-full p-1 bg-white rounded border border-brand-inkBlack">
                <div className="bg-brand-inkBlack col-span-2 row-span-2 rounded-sm" />
                <div className="bg-brand-lavender" />
                <div className="bg-brand-inkBlack col-span-2 row-span-2 rounded-sm" />
                <div className="bg-brand-cyan" />
                <div className="bg-brand-inkBlack col-span-3 rounded-sm" />
                <div className="bg-brand-lime" />
                <div className="bg-brand-inkBlack col-span-2 row-span-2 rounded-sm" />
                <div className="bg-brand-inkBlack" />
                <div className="bg-brand-lavender" />
              </div>
              <div className="absolute w-6 h-6 rounded-md bg-brand-deepPurple text-white flex items-center justify-center text-[8px] font-black border border-brand-inkBlack">
                N
              </div>
            </div>

            <div className="text-xs font-black mt-2">ned_user.sol</div>
            <div className="text-[10px] font-bold text-stone-600">SĐT: 0987 ••• 321</div>
          </div>

          <div className="w-full bg-brand-paleYellow border-2 border-brand-inkBlack rounded-xl p-2.5 text-center text-[10px] font-bold mt-2 shadow-brutal-xs">
            Hỗ trợ nhận USDC trên mạng thử nghiệm Solana Devnet
          </div>

          <div className="w-full py-2.5 bg-brand-cyan text-brand-inkBlack font-black text-xs rounded-xl text-center border-2 border-brand-inkBlack shadow-brutal-xs mt-2">
            Sao chép mã nhận tiền
          </div>
        </div>
      )}

      {activeTab === 'track' && (
        <div className="flex-1 flex flex-col justify-between">
          {/* Main Balance Banner */}
          <div className="bg-white border-2 border-brand-inkBlack rounded-2xl p-3.5 shadow-brutal-sm mb-3">
            <div className="text-[10px] font-black uppercase text-stone-500">Tổng số dư thử nghiệm</div>
            <div className="text-2xl font-black text-brand-inkBlack tracking-tight my-1">
              1,250.00 <span className="text-sm font-extrabold text-brand-lavender">USDC</span>
            </div>
            <div className="text-[10px] font-bold text-stone-600 bg-brand-warmCream px-2 py-0.5 rounded border border-brand-inkBlack inline-block">
              ≈ 1,250.00 USD (Devnet)
            </div>
          </div>

          {/* Recent Activity List */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="text-[10px] font-black uppercase tracking-wider text-stone-500">
              Giao dịch gần đây
            </div>

            <div className="bg-brand-offWhite border-2 border-brand-inkBlack rounded-xl p-2 flex items-center justify-between shadow-brutal-xs">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-lime border border-brand-inkBlack flex items-center justify-center">
                  <ArrowDownLeft className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-black">Nhận qua SĐT</div>
                  <div className="text-[9px] text-stone-500 font-bold">2 phút trước • Devnet</div>
                </div>
              </div>
              <div className="text-xs font-black text-emerald-700">+50.00 USDC</div>
            </div>

            <div className="bg-brand-offWhite border-2 border-brand-inkBlack rounded-xl p-2 flex items-center justify-between shadow-brutal-xs">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-lavender border border-brand-inkBlack flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-black">Chuyển qua QR</div>
                  <div className="text-[9px] text-stone-500 font-bold">Hôm nay • Devnet</div>
                </div>
              </div>
              <div className="text-xs font-black text-brand-inkBlack">-15.00 USDC</div>
            </div>
          </div>

          <div className="text-center text-[9px] font-extrabold text-stone-500 pt-2 border-t border-brand-inkBlack/20">
            Dữ liệu mô phỏng từ bản thử nghiệm Devnet
          </div>
        </div>
      )}
    </div>
  );
};
