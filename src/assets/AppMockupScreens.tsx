import React, { useState } from 'react';
import {
  ArrowUpRight,
  ArrowDownLeft,
  QrCode,
  Phone,
  ShieldCheck,
  Wallet,
  CheckCircle2,
  Copy,
  Check,
  RotateCcw,
  Loader2,
  ChevronRight,
  X
} from 'lucide-react';

interface MockupScreenProps {
  activeTab?: 'receive' | 'send' | 'track';
  onTabChange?: (tab: 'receive' | 'send' | 'track') => void;
  customImage?: string;
}

interface TransactionItem {
  id: string;
  type: 'send' | 'receive';
  title: string;
  subtitle: string;
  amount: string;
  time: string;
  signature: string;
  fee: string;
  status: 'Finalized' | 'Confirmed';
}

export const AppMockupScreens: React.FC<MockupScreenProps> = ({
  activeTab: externalTab,
  onTabChange,
  customImage
}) => {
  // Support both internal tab state and external control
  const [internalTab, setInternalTab] = useState<'send' | 'receive' | 'track'>('send');
  const activeTab = externalTab ?? internalTab;

  const handleTabSelect = (tab: 'send' | 'receive' | 'track') => {
    setInternalTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  // Send flow state
  const [recipientMode, setRecipientMode] = useState<'phone' | 'qr' | 'wallet'>('phone');
  const [sendAmount, setSendAmount] = useState('25.00');
  const [txState, setTxState] = useState<'idle' | 'processing' | 'confirmed'>('idle');
  const [balance, setBalance] = useState(1250.0);

  // Receive flow state
  const [copiedReceive, setCopiedReceive] = useState(false);

  // Track flow state & transaction history
  const [selectedTx, setSelectedTx] = useState<TransactionItem | null>(null);
  const [transactions, setTransactions] = useState<TransactionItem[]>([
    {
      id: 'tx-1',
      type: 'receive',
      title: 'Nhận qua SĐT',
      subtitle: 'Từ 0912 ••• 888',
      amount: '+50.00 USDC',
      time: '2 phút trước',
      signature: '5xK8...7mPq',
      fee: '~0.000005 SOL',
      status: 'Finalized'
    },
    {
      id: 'tx-2',
      type: 'send',
      title: 'Chuyển qua QR',
      subtitle: 'Tới dev_merchant.sol',
      amount: '-15.00 USDC',
      time: '15 phút trước',
      signature: '3wP9...2jLk',
      fee: '~0.000005 SOL',
      status: 'Finalized'
    },
    {
      id: 'tx-3',
      type: 'receive',
      title: 'Faucet Devnet',
      subtitle: 'Solana Devnet Airdrop',
      amount: '+1,000.00 USDC',
      time: 'Hôm qua',
      signature: '4tNm...8vQq',
      fee: '0 SOL',
      status: 'Finalized'
    }
  ]);

  // Execute Send Transaction animation
  const handleExecuteSend = () => {
    if (txState !== 'idle') return;
    setTxState('processing');

    setTimeout(() => {
      const amountNum = parseFloat(sendAmount) || 25.0;
      setBalance((prev) => Math.max(0, prev - amountNum));
      setTxState('confirmed');

      // Add to transaction history
      const newTx: TransactionItem = {
        id: `tx-${Date.now()}`,
        type: 'send',
        title: recipientMode === 'phone' ? 'Chuyển qua SĐT' : recipientMode === 'qr' ? 'Chuyển qua QR' : 'Chuyển tới Ví',
        subtitle: recipientMode === 'phone' ? 'Tới 0987 ••• 321' : 'Tới ned_friend.sol',
        amount: `-${amountNum.toFixed(2)} USDC`,
        time: 'Vừa xong',
        signature: `5tNx...${Math.random().toString(36).substring(2, 6)}`,
        fee: '~0.000005 SOL',
        status: 'Confirmed'
      };
      setTransactions((prev) => [newTx, ...prev]);
    }, 1400);
  };

  const handleResetSend = () => {
    setTxState('idle');
  };

  const handleCopyAddress = () => {
    setCopiedReceive(true);
    setTimeout(() => setCopiedReceive(false), 2000);
  };

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
    <div className="w-full h-full bg-brand-warmCream text-brand-inkBlack flex flex-col p-4 sm:p-5 select-none font-sans overflow-hidden relative">
      {/* Phone Top Status Bar */}
      <div className="flex items-center justify-between text-[11px] font-extrabold text-stone-700 pb-2 border-b-2 border-brand-inkBlack/15 mb-3">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-lime border border-brand-inkBlack animate-ping" />
          <span className="text-[9px] tracking-wider uppercase font-black bg-brand-deepPurple text-brand-offWhite px-1.5 py-0.5 rounded border border-brand-inkBlack shadow-brutal-xs">
            Solana Devnet
          </span>
        </div>
      </div>

      {/* App Top User Profile */}
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center font-black text-xs shadow-brutal-xs">
            N
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-wider font-extrabold text-stone-600">
              Ví Devnet
            </div>
            <div className="text-xs font-black text-brand-inkBlack">ned_user.sol</div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-[9px] uppercase tracking-wider font-bold text-stone-500">Số dư</div>
          <div className="text-xs font-black text-brand-inkBlack">
            {balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
            <span className="text-[10px] text-brand-lavender font-extrabold">USDC</span>
          </div>
        </div>
      </div>

      {/* Internal Interactive App Navigation Pills */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-white border-2 border-brand-inkBlack rounded-xl mb-3 shadow-brutal-xs">
        <button
          type="button"
          onClick={() => handleTabSelect('send')}
          className={`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${
            activeTab === 'send'
              ? 'bg-brand-lavender text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <ArrowUpRight className="w-3 h-3" />
          <span>Chuyển</span>
        </button>

        <button
          type="button"
          onClick={() => handleTabSelect('receive')}
          className={`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${
            activeTab === 'receive'
              ? 'bg-brand-cyan text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <ArrowDownLeft className="w-3 h-3" />
          <span>Nhận</span>
        </button>

        <button
          type="button"
          onClick={() => handleTabSelect('track')}
          className={`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${
            activeTab === 'track'
              ? 'bg-brand-lime text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <Wallet className="w-3 h-3" />
          <span>Lịch sử</span>
        </button>
      </div>

      {/* Dynamic Content View */}
      <div className="flex-1 flex flex-col justify-between overflow-hidden">
        {/* ===================== TAB 1: SEND ===================== */}
        {activeTab === 'send' && (
          <div className="flex-1 flex flex-col justify-between animate-fadeIn">
            {txState === 'idle' && (
              <>
                <div className="bg-white border-2 border-brand-inkBlack rounded-2xl p-3 shadow-brutal-sm mb-2.5">
                  <div className="text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5">
                    Phương thức nhận diện
                  </div>

                  {/* Recipient Mode Tabs */}
                  <div className="grid grid-cols-3 gap-1 bg-brand-warmCream p-1 rounded-xl border border-brand-inkBlack mb-2.5">
                    <button
                      type="button"
                      onClick={() => setRecipientMode('phone')}
                      className={`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${
                        recipientMode === 'phone'
                          ? 'bg-brand-lavender border-brand-inkBlack shadow-brutal-xs font-black'
                          : 'bg-white border-transparent text-stone-600'
                      }`}
                    >
                      <Phone className="w-3 h-3" /> SĐT
                    </button>
                    <button
                      type="button"
                      onClick={() => setRecipientMode('qr')}
                      className={`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${
                        recipientMode === 'qr'
                          ? 'bg-brand-cyan border-brand-inkBlack shadow-brutal-xs font-black'
                          : 'bg-white border-transparent text-stone-600'
                      }`}
                    >
                      <QrCode className="w-3 h-3" /> QR
                    </button>
                    <button
                      type="button"
                      onClick={() => setRecipientMode('wallet')}
                      className={`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${
                        recipientMode === 'wallet'
                          ? 'bg-brand-lime border-brand-inkBlack shadow-brutal-xs font-black'
                          : 'bg-white border-transparent text-stone-600'
                      }`}
                    >
                      <Wallet className="w-3 h-3" /> Ví
                    </button>
                  </div>

                  {/* Recipient Display Field */}
                  <div className="bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-2 mb-2">
                    <div className="text-[9px] font-extrabold uppercase text-stone-500">
                      {recipientMode === 'phone'
                        ? 'Người nhận (Số điện thoại)'
                        : recipientMode === 'qr'
                        ? 'Người nhận (Quét QR)'
                        : 'Người nhận (Địa chỉ Solana)'}
                    </div>
                    <div className="text-xs font-black text-brand-inkBlack mt-0.5">
                      {recipientMode === 'phone'
                        ? '0987 ••• 321'
                        : recipientMode === 'qr'
                        ? 'QR_SCAN_882.sol'
                        : '7xWp...9bM2'}
                    </div>
                    <div className="text-[9px] font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Đã kết nối trên Devnet
                    </div>
                  </div>

                  {/* Amount Selection & Quick Presets */}
                  <div className="bg-brand-offWhite border-2 border-brand-inkBlack rounded-xl p-2 text-center">
                    <div className="text-[9px] font-bold uppercase text-stone-500">Số lượng chuyển</div>
                    <div className="text-xl font-black text-brand-inkBlack my-0.5">
                      {sendAmount} <span className="text-xs font-extrabold text-brand-lavender">USDC</span>
                    </div>

                    {/* Quick Amount Chips */}
                    <div className="flex items-center justify-center gap-1.5 mt-1">
                      {['10.00', '25.00', '50.00'].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setSendAmount(amt)}
                          className={`px-2 py-0.5 text-[9px] font-black rounded border border-brand-inkBlack transition-all ${
                            sendAmount === amt
                              ? 'bg-brand-lime shadow-brutal-xs -translate-y-0.5'
                              : 'bg-white text-stone-600'
                          }`}
                        >
                          {amt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pre-confirmation Verification Note */}
                <div className="bg-brand-lime border-2 border-brand-inkBlack rounded-xl p-2 shadow-brutal-xs flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0 text-brand-inkBlack" />
                  <div className="text-[9px] font-black leading-tight text-brand-inkBlack">
                    Kiểm tra đúng thông tin người nhận trước khi xác thực
                  </div>
                </div>

                {/* Main Action Button */}
                <button
                  type="button"
                  onClick={handleExecuteSend}
                  className="w-full py-2.5 bg-brand-inkBlack text-brand-offWhite font-black text-xs rounded-xl text-center border-2 border-brand-inkBlack shadow-brutal-sm hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-lime" />
                  <span>Xác nhận gửi Devnet USDC</span>
                </button>
              </>
            )}

            {/* PROCESSING STATE ANIMATION */}
            {txState === 'processing' && (
              <div className="bg-white border-2 border-brand-inkBlack rounded-2xl p-5 shadow-brutal-sm flex-1 flex flex-col items-center justify-center text-center animate-fadeIn">
                <div className="w-12 h-12 rounded-2xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center mb-3 shadow-brutal-xs">
                  <Loader2 className="w-6 h-6 text-brand-inkBlack animate-spin" />
                </div>
                <div className="text-xs font-black text-brand-inkBlack mb-1">
                  Đang phát sóng lên Solana Devnet...
                </div>
                <div className="text-[10px] text-stone-500 font-bold mb-4">
                  Xác thực chữ ký mã hóa & cập nhật số dư
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full bg-brand-warmCream border-2 border-brand-inkBlack rounded-full h-3 overflow-hidden p-0.5">
                  <div className="bg-brand-lime h-full rounded-full animate-progress" />
                </div>
              </div>
            )}

            {/* CONFIRMED SUCCESS STATE */}
            {txState === 'confirmed' && (
              <div className="bg-white border-2 border-brand-inkBlack rounded-2xl p-4 shadow-brutal-sm flex-1 flex flex-col items-center justify-between text-center animate-slideUp">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center mx-auto mb-2 shadow-brutal-xs animate-pulseGlow">
                    <Check className="w-7 h-7 text-emerald-900 stroke-[3]" />
                  </div>
                  <div className="text-sm font-black text-brand-inkBlack mb-0.5">
                    Giao dịch thành công!
                  </div>
                  <div className="text-[10px] font-extrabold text-stone-600 mb-3">
                    Đã chuyển {sendAmount} USDC trên Solana Devnet
                  </div>

                  <div className="bg-brand-warmCream border border-brand-inkBlack rounded-xl p-2 text-left text-[9px] font-bold space-y-1 mb-3">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Mã giao dịch:</span>
                      <span className="font-mono font-bold">5tNx...9aDev</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Thời gian xác thực:</span>
                      <span className="text-emerald-700 font-extrabold">0.6 giây</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Phí mạng:</span>
                      <span>~0.000005 SOL</span>
                    </div>
                  </div>
                </div>

                <div className="w-full flex gap-2">
                  <button
                    type="button"
                    onClick={handleResetSend}
                    className="flex-1 py-2 bg-brand-lavender text-brand-inkBlack font-black text-[11px] rounded-xl border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Thử gửi lại</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTabSelect('track')}
                    className="flex-1 py-2 bg-brand-lime text-brand-inkBlack font-black text-[11px] rounded-xl border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center gap-1"
                  >
                    <Wallet className="w-3 h-3" />
                    <span>Xem lịch sử</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===================== TAB 2: RECEIVE ===================== */}
        {activeTab === 'receive' && (
          <div className="flex-1 flex flex-col justify-between animate-fadeIn">
            <div className="w-full bg-white border-2 border-brand-inkBlack rounded-2xl p-3.5 shadow-brutal-sm text-center flex flex-col items-center">
              <div className="text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5">
                Mã QR Nhận Stablecoin
              </div>

              {/* Neo-brutalist QR Frame with Scanning Laser */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl p-2.5 flex flex-col items-center justify-center relative shadow-brutal-xs my-1 overflow-hidden">
                {/* Scan Laser beam */}
                <div className="absolute left-0 right-0 h-1 bg-brand-cyan border-y border-brand-inkBlack shadow-[0_0_8px_#08CEE3] animate-scanLaser z-10 pointer-events-none" />

                {/* QR Pattern */}
                <div className="grid grid-cols-6 gap-1 w-full h-full p-1 bg-white rounded-lg border border-brand-inkBlack">
                  <div className="bg-brand-inkBlack col-span-2 row-span-2 rounded" />
                  <div className="bg-brand-lavender rounded" />
                  <div className="bg-brand-cyan rounded" />
                  <div className="bg-brand-inkBlack col-span-2 row-span-2 rounded" />
                  <div className="bg-brand-lime rounded" />
                  <div className="bg-brand-inkBlack col-span-4 rounded" />
                  <div className="bg-brand-lavender rounded" />
                  <div className="bg-brand-cyan rounded" />
                  <div className="bg-brand-inkBlack col-span-2 row-span-2 rounded" />
                  <div className="bg-brand-lime rounded" />
                  <div className="bg-brand-inkBlack rounded" />
                  <div className="bg-brand-lavender rounded" />
                </div>

                <div className="absolute w-6 h-6 rounded-lg bg-brand-deepPurple text-white flex items-center justify-center text-[9px] font-black border border-brand-inkBlack shadow-brutal-xs">
                  N
                </div>
              </div>

              <div className="text-xs font-black mt-1">ned_user.sol</div>
              <div className="text-[10px] font-bold text-stone-600">SĐT liên kết: 0987 ••• 321</div>
            </div>

            {/* Network Note */}
            <div className="w-full bg-brand-paleYellow border-2 border-brand-inkBlack rounded-xl p-2 text-center text-[9px] font-black shadow-brutal-xs my-2">
              Chấp nhận USDC trên mạng thử nghiệm Solana Devnet
            </div>

            {/* Copy Button with Real Feedback */}
            <button
              type="button"
              onClick={handleCopyAddress}
              className={`w-full py-2.5 rounded-xl font-black text-xs text-center border-2 border-brand-inkBlack shadow-brutal-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                copiedReceive ? 'bg-brand-lime text-brand-inkBlack' : 'bg-brand-cyan text-brand-inkBlack'
              }`}
            >
              {copiedReceive ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Đã sao chép ned_user.sol!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Sao chép mã nhận tiền</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* ===================== TAB 3: TRACK ===================== */}
        {activeTab === 'track' && (
          <div className="flex-1 flex flex-col justify-between animate-fadeIn relative">
            {/* Balance Overview */}
            <div className="bg-white border-2 border-brand-inkBlack rounded-2xl p-2.5 shadow-brutal-xs mb-2">
              <div className="text-[9px] font-black uppercase text-stone-500">Tổng số dư Devnet</div>
              <div className="text-lg font-black text-brand-inkBlack my-0.5">
                {balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
                <span className="text-xs font-extrabold text-brand-lavender">USDC</span>
              </div>
            </div>

            {/* Interactive Transaction List */}
            <div className="flex-1 flex flex-col gap-1.5 overflow-y-auto pr-0.5 mb-2">
              <div className="text-[9px] font-black uppercase tracking-wider text-stone-500">
                Giao dịch gần đây (Bấm để xem chi tiết)
              </div>

              {transactions.map((tx) => (
                <button
                  key={tx.id}
                  type="button"
                  onClick={() => setSelectedTx(tx)}
                  className="w-full text-left bg-brand-offWhite hover:bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-2 flex items-center justify-between shadow-brutal-xs transition-transform active:scale-[0.98] cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-lg border border-brand-inkBlack flex items-center justify-center ${
                        tx.type === 'receive' ? 'bg-brand-lime' : 'bg-brand-lavender'
                      }`}
                    >
                      {tx.type === 'receive' ? (
                        <ArrowDownLeft className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      )}
                    </div>
                    <div>
                      <div className="text-[10px] font-black">{tx.title}</div>
                      <div className="text-[8px] text-stone-500 font-bold">{tx.time}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div
                      className={`text-[11px] font-black ${
                        tx.type === 'receive' ? 'text-emerald-700' : 'text-brand-inkBlack'
                      }`}
                    >
                      {tx.amount}
                    </div>
                    <div className="text-[8px] text-stone-500 font-bold flex items-center justify-end gap-0.5">
                      <span>Devnet</span>
                      <ChevronRight className="w-2.5 h-2.5 text-stone-400" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Receipt Modal Drawer (When a transaction is clicked) */}
            {selectedTx && (
              <div className="absolute inset-0 bg-white border-2 border-brand-inkBlack rounded-2xl p-3.5 flex flex-col justify-between shadow-brutal animate-slideUp z-20">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-brand-inkBlack/20 mb-2">
                    <span className="text-[10px] font-black uppercase text-stone-500">
                      Biên lai Devnet
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedTx(null)}
                      className="p-1 rounded-md bg-stone-100 hover:bg-stone-200 border border-brand-inkBlack"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-center my-2">
                    <div className="text-base font-black">{selectedTx.amount}</div>
                    <div className="text-[10px] font-bold text-stone-600">{selectedTx.title}</div>
                  </div>

                  <div className="space-y-1.5 text-[9px] font-bold bg-brand-warmCream p-2 rounded-xl border border-brand-inkBlack">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Chữ ký (Tx):</span>
                      <span className="font-mono">{selectedTx.signature}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Mạng:</span>
                      <span>Solana Devnet</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Trạng thái:</span>
                      <span className="text-emerald-700 font-extrabold">{selectedTx.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Phí mạng:</span>
                      <span>{selectedTx.fee}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedTx(null)}
                  className="w-full py-1.5 bg-brand-lavender text-brand-inkBlack font-black text-[10px] rounded-lg border border-brand-inkBlack shadow-brutal-xs"
                >
                  Đóng biên lai
                </button>
              </div>
            )}

            <div className="text-center text-[9px] font-bold text-stone-500 pt-1 border-t border-brand-inkBlack/15">
              Giao dịch mô phỏng Devnet thời gian thực
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
