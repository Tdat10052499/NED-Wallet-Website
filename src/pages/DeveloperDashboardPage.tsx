import React, { useState } from 'react';
import { ArrowLeft, LayoutDashboard, UploadCloud, CheckCircle2, Clock, Globe, Code, Terminal, Layers, ShieldCheck } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';
import { RevealOnScroll } from '../components/RevealOnScroll';

interface DeveloperDashboardPageProps {
  onNavigate: (path: string) => void;
}

interface DAppSubmission {
  id: string;
  name: string;
  url: string;
  logo: string;
  category: string;
  description: string;
  status: 'approved' | 'reviewing' | 'draft';
  submittedAt: string;
}

export const DeveloperDashboardPage: React.FC<DeveloperDashboardPageProps> = ({ onNavigate }) => {
  const { lang } = useI18n();
  const [activeTab, setActiveTab] = useState<'submit' | 'projects' | 'docs'>('submit');

  // Form states
  const [appName, setAppName] = useState('');
  const [appUrl, setAppUrl] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [category, setCategory] = useState('Payment & POS');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Initial projects list
  const [projects, setProjects] = useState<DAppSubmission[]>([
    {
      id: 'app-1',
      name: 'Solana Pay Merchant',
      url: 'https://pay.nedwallet.io',
      logo: siteConfig.screenshots.miniappsHub,
      category: 'Thanh toán / POS',
      description: 'Quét mã QR chấp nhận thanh toán USDC/SOL tại điểm bán, tự động đối soát giao dịch.',
      status: 'approved',
      submittedAt: '12/09/2026',
    },
    {
      id: 'app-2',
      name: 'Lucky Coin Flip Room',
      url: 'https://coin.nedwallet.io',
      logo: siteConfig.screenshots.luckyCoin,
      category: 'Gaming & Lì Xì',
      description: 'Phòng tung đồng xu may mắn chia lì xì và quà tặng on-chain trên Solana Devnet.',
      status: 'approved',
      submittedAt: '14/09/2026',
    },
    {
      id: 'app-3',
      name: 'Web3 Gift Cards Hub',
      url: 'https://giftcards.nedwallet.io',
      logo: siteConfig.screenshots.miniappsHub,
      category: 'Đời sống & Tiện ích',
      description: 'Mua voucher ăn uống, di chuyển và nạp thẻ cào điện thoại bằng stablecoin không cần KYC.',
      status: 'approved',
      submittedAt: '16/09/2026',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appName || !appUrl) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newApp: DAppSubmission = {
        id: `app-${Date.now()}`,
        name: appName,
        url: appUrl.startsWith('http') ? appUrl : `https://${appUrl}`,
        logo: logoUrl || siteConfig.screenshots.miniappsHub,
        category,
        description: description || 'DApp độc lập tích hợp qua N.E.D Developer Portal.',
        status: 'reviewing',
        submittedAt: 'Vừa xong',
      };

      setProjects([newApp, ...projects]);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setAppName('');
      setAppUrl('');
      setLogoUrl('');
      setDescription('');

      // Auto switch to projects tab after 1.5s
      setTimeout(() => {
        setSubmitSuccess(false);
        setActiveTab('projects');
      }, 1800);
    }, 800);
  };

  return (
    <div className="w-full bg-brand-deepPurple text-brand-offWhite min-h-screen selection:bg-brand-lime selection:text-brand-inkBlack select-none pb-24">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onNavigate('/builders');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-darkSurface text-brand-offWhite border-2 border-brand-inkBlack rounded-xl font-bold text-xs shadow-brutal-xs hover:text-brand-lime transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'vi' ? 'Trang Builder' : 'Builder Home'}</span>
          </button>

          <button
            onClick={() => {
              onNavigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 bg-brand-darkSurface/60 text-stone-400 border border-brand-inkBlack rounded-xl font-bold text-xs hover:text-white transition-colors cursor-pointer"
          >
            <span>{lang === 'vi' ? 'Về trang chủ ví' : 'Home'}</span>
          </button>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-lime text-brand-inkBlack border-2 border-brand-inkBlack rounded-full font-black text-xs shadow-brutal-xs">
          <span className="w-2 h-2 rounded-full bg-brand-inkBlack animate-pulse" />
          <span>Developer Portal • Solana Devnet</span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <RevealOnScroll animation="fade-up">
          <div className="bg-brand-darkSurface border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-10 shadow-brutal-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-lavender text-brand-inkBlack font-black text-xs uppercase mb-3 border border-brand-inkBlack">
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>N.E.D Developer Dashboard</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-2">
                {lang === 'vi' ? 'Quản lý & Submit Mini-DApp' : 'Submit & Manage Mini-DApps'}
              </h1>
              <p className="text-sm sm:text-base text-stone-300 font-medium max-w-2xl">
                {lang === 'vi'
                  ? 'Phát triển DApp độc lập, tự lưu trữ và khai báo thông tin trực tiếp để tự động tích hợp lên hệ sinh thái N.E.D Wallet.'
                  : 'Build independent self-hosted DApps, declare metadata, and distribute automatically on N.E.D Wallet.'}
              </p>
            </div>

            {/* Mascot Companion */}
            <div className="flex items-center gap-3 bg-brand-deepPurple/80 border-2 border-brand-lavender/40 px-4 py-3 rounded-2xl shadow-brutal-xs flex-shrink-0">
              <img
                src={siteConfig.mascots.proud}
                alt="NED Teddy Proud"
                className="w-12 h-12 object-contain drop-shadow flex-shrink-0"
              />
              <div className="text-left">
                <div className="text-[11px] font-black uppercase text-brand-lime">NED Teddy</div>
                <div className="text-xs font-bold text-stone-200">
                  {lang === 'vi' ? 'Duyệt tự động trong vài phút!' : 'Automated approval in minutes!'}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Main Tabs Controller */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center gap-3 border-b-2 border-brand-lavender/20 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab('submit')}
            className={`px-5 py-2.5 rounded-2xl font-black text-sm flex items-center gap-2 border-2 border-brand-inkBlack transition-all cursor-pointer ${
              activeTab === 'submit'
                ? 'bg-brand-lime text-brand-inkBlack shadow-brutal-xs scale-105'
                : 'bg-brand-darkSurface text-stone-300 hover:text-white hover:bg-stone-800'
            }`}
          >
            <UploadCloud className="w-4 h-4" />
            <span>{lang === 'vi' ? '1. Submit Mini-DApp Mới' : '1. Submit New DApp'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('projects')}
            className={`px-5 py-2.5 rounded-2xl font-black text-sm flex items-center gap-2 border-2 border-brand-inkBlack transition-all cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-brand-cyan text-brand-inkBlack shadow-brutal-xs scale-105'
                : 'bg-brand-darkSurface text-stone-300 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{lang === 'vi' ? '2. Dự Án Đã Lên Sóng' : '2. Live Projects'}</span>
            <span className="bg-brand-deepPurple text-brand-offWhite px-2 py-0.5 rounded-full text-xs font-black">
              {projects.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('docs')}
            className={`px-5 py-2.5 rounded-2xl font-black text-sm flex items-center gap-2 border-2 border-brand-inkBlack transition-all cursor-pointer ${
              activeTab === 'docs'
                ? 'bg-brand-lavender text-brand-inkBlack shadow-brutal-xs scale-105'
                : 'bg-brand-darkSurface text-stone-300 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>{lang === 'vi' ? '3. Tài Liệu Tích Hợp API' : '3. API & Sandbox Docs'}</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Submit Form */}
      {activeTab === 'submit' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Left (7 cols) */}
            <div className="lg:col-span-7 bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-lavender/20">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-brand-offWhite">
                    {lang === 'vi' ? 'Khai báo thông tin Mini-DApp' : 'Submit DApp Metadata'}
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-400 font-medium mt-1">
                    {lang === 'vi'
                      ? 'Bước 02 trong quy trình: Khai báo URL, Logo và Mô tả thông qua Dashboard của N.E.D.'
                      : 'Step 02: Declare URL, Logo and Description through N.E.D Dashboard.'}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black border-2 border-brand-inkBlack shadow-brutal-xs">
                  02
                </div>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-emerald-950/80 border-2 border-emerald-500 text-emerald-200 rounded-2xl font-bold text-sm flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>
                    {lang === 'vi'
                      ? 'Submit thành công! Dự án của bạn đang được hệ thống Sandbox tự động kiểm duyệt.'
                      : 'Submission received! Your project is now running through automated Sandbox review.'}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-black uppercase text-brand-lavender mb-2">
                    {lang === 'vi' ? 'Tên Ứng Dụng (App Name) *' : 'App Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Jupiter Swap Lite, Coffee Pay, v.v."
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    className="w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-brand-lavender mb-2">
                      {lang === 'vi' ? 'URL DApp (HTTPS) *' : 'DApp Web URL (HTTPS) *'}
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://my-dapp.com"
                      value={appUrl}
                      onChange={(e) => setAppUrl(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs"
                    />
                    <span className="text-[11px] text-stone-400 mt-1 block">
                      {lang === 'vi' ? 'Bước 01: Mã nguồn do bạn tự host độc lập.' : 'Step 01: Self-hosted independently.'}
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-brand-lavender mb-2">
                      {lang === 'vi' ? 'Logo URL (Icon PNG/SVG)' : 'Icon/Logo URL (PNG/SVG)'}
                    </label>
                    <input
                      type="url"
                      placeholder="https://my-dapp.com/logo.png"
                      value={logoUrl}
                      onChange={(e) => setLogoUrl(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-brand-lavender mb-2">
                    {lang === 'vi' ? 'Danh mục Ứng Dụng' : 'Category'}
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs"
                  >
                    <option value="Payment & POS">Thanh toán tại quầy (POS) & Mã QR</option>
                    <option value="DeFi & Swap">Hoán đổi Token & DeFi (Jupiter/Raydium)</option>
                    <option value="Micro Savings">Tiết kiệm vi mô & Sinh lời theo block</option>
                    <option value="Gaming & Lì Xì">Minigame, Lì xì & Cộng đồng</option>
                    <option value="Lifestyle">Thẻ quà tặng, Tiện ích sống & Voucher</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-brand-lavender mb-2">
                    {lang === 'vi' ? 'Mô tả ngắn trải nghiệm' : 'Short Description'}
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mô tả chức năng chính người dùng sẽ trải nghiệm bên trong N.E.D Wallet..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs"
                  />
                </div>

                <div className="p-4 bg-brand-deepPurple/70 border-2 border-brand-inkBlack rounded-2xl flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-lime flex-shrink-0 mt-0.5" />
                  <div className="text-xs font-bold text-stone-300 leading-relaxed">
                    {lang === 'vi'
                      ? 'DApp của bạn sẽ chạy trong Sandbox biệt lập. Người dùng tương tác ký giao dịch Solana qua Native Bridge an toàn không để lộ Private Key.'
                      : 'Your DApp runs inside an isolated Sandbox. User transactions are securely signed via Native Bridge without seedphrase exposure.'}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-brutal-primary py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-brutal cursor-pointer disabled:opacity-50"
                >
                  <UploadCloud className="w-5 h-5" />
                  <span>
                    {isSubmitting
                      ? (lang === 'vi' ? 'Đang gửi thông tin...' : 'Submitting...')
                      : (lang === 'vi' ? 'Bắt đầu Submit Dự án lên N.E.D' : 'Submit DApp for Review')}
                  </span>
                </button>
              </form>
            </div>

            {/* Guide Right (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Step Recap Card */}
              <div className="bg-brand-lavender text-brand-inkBlack border-3 border-brand-inkBlack rounded-3xl p-6 shadow-brutal">
                <div className="text-xs font-black uppercase text-stone-700 mb-1">
                  {lang === 'vi' ? 'Quy trình kiểm duyệt' : 'Review Lifecycle'}
                </div>
                <h3 className="text-xl font-black mb-3">
                  {lang === 'vi' ? 'Sau khi Submit sẽ diễn ra điều gì?' : 'What happens after submit?'}
                </h3>
                <div className="space-y-3 text-xs sm:text-sm font-bold text-stone-800">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-inkBlack text-white flex items-center justify-center text-[10px] flex-shrink-0">1</span>
                    <span>Hệ thống tự động ping kiểm tra chứng chỉ SSL và giao thức Sandbox của URL bạn gửi.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-inkBlack text-white flex items-center justify-center text-[10px] flex-shrink-0">2</span>
                    <span>Tạo bản xem trước tức thì trên môi trường N.E.D Wallet Solana Devnet.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-lime text-brand-inkBlack flex items-center justify-center text-[10px] flex-shrink-0">3</span>
                    <span>Khi được Approve, Mini-DApp tự động xuất hiện trong Hub của hàng ngàn người dùng ví!</span>
                  </div>
                </div>
              </div>

              {/* Sample MiniApp Preview */}
              <div className="bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-6 shadow-brutal">
                <div className="text-xs font-black uppercase text-brand-cyan mb-2">
                  {lang === 'vi' ? 'Mẫu hiển thị trong ví' : 'In-Wallet Preview'}
                </div>
                <div className="p-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-2xl flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-lime text-brand-inkBlack font-black flex items-center justify-center flex-shrink-0 border border-brand-inkBlack">
                    {appName ? appName.slice(0, 2).toUpperCase() : 'NED'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-black text-brand-offWhite truncate">
                      {appName || 'Tên DApp của bạn'}
                    </div>
                    <div className="text-[11px] font-bold text-brand-lavender">
                      {category}
                    </div>
                    <div className="text-[10px] text-stone-400 truncate">
                      {appUrl || 'https://my-dapp.com'}
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-brand-lime/20 border border-brand-lime text-brand-lime text-[10px] font-black">
                    Preview
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Projects List */}
      {activeTab === 'projects' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-lavender/20">
              <div>
                <h2 className="text-2xl font-black text-brand-offWhite">
                  {lang === 'vi' ? 'Danh Sách Dự Án Đã Khai Báo' : 'Submitted Mini-DApps'}
                </h2>
                <p className="text-xs sm:text-sm text-stone-400 font-medium">
                  {lang === 'vi'
                    ? 'Theo dõi trạng thái kiểm duyệt realtime và phân phối trên N.E.D Hub.'
                    : 'Real-time review and distribution status on N.E.D Hub.'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveTab('submit')}
                className="btn-brutal-primary px-4 py-2.5 rounded-xl font-black text-xs flex items-center gap-1.5 shadow-brutal-xs"
              >
                <UploadCloud className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Submit thêm DApp' : 'Submit Another'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((item) => (
                <div
                  key={item.id}
                  className="bg-brand-deepPurple border-3 border-brand-inkBlack rounded-2xl p-5 shadow-brutal flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-brand-darkSurface border-2 border-brand-inkBlack overflow-hidden flex items-center justify-center p-1">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      {item.status === 'approved' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-400 text-emerald-300 font-black text-[10px]">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Approved • Live</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-950 border border-amber-400 text-amber-300 font-black text-[10px]">
                          <Clock className="w-3 h-3 animate-spin" />
                          <span>Reviewing • Sandbox</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-black text-brand-offWhite mb-1">
                      {item.name}
                    </h3>
                    <div className="text-[11px] font-bold text-brand-cyan mb-2">
                      {item.category}
                    </div>
                    <p className="text-xs font-medium text-stone-300 leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brand-lavender/15 flex items-center justify-between text-[11px] font-bold text-stone-400">
                    <span className="flex items-center gap-1 truncate max-w-[160px]">
                      <Globe className="w-3 h-3 text-brand-lime flex-shrink-0" />
                      <span className="truncate">{item.url}</span>
                    </span>
                    <span>{item.submittedAt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: API Docs */}
      {activeTab === 'docs' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-cyan text-brand-inkBlack rounded-lg font-black text-xs uppercase mb-2 border border-brand-inkBlack">
                <Terminal className="w-3.5 h-3.5" />
                <span>N.E.D Sandbox API Specification</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-offWhite">
                {lang === 'vi' ? 'Tài Liệu Tích Hợp Sandbox & PostMessage Bridge' : 'Sandbox Integration & Bridge Protocol'}
              </h2>
              <p className="text-sm font-medium text-stone-300 mt-1">
                {lang === 'vi'
                  ? 'Hướng dẫn nhúng DApp của bạn vào N.E.D Wallet mà không cần chỉnh sửa sâu kiến trúc Web3 hiện có.'
                  : 'Guide to integrating your DApp into N.E.D Wallet with zero-friction Solana standard hooks.'}
              </p>
            </div>

            {/* Code Block 1 */}
            <div className="bg-black/80 border-2 border-brand-inkBlack rounded-2xl p-5 font-mono text-xs text-stone-200 overflow-x-auto shadow-brutal-xs">
              <div className="text-brand-lime font-black mb-2">// 1. Lắng nghe kết nối từ N.E.D Wallet Bridge</div>
              <pre className="text-stone-300">
{`window.addEventListener('message', (event) => {
  if (event.data?.type === 'NED_WALLET_READY') {
    console.log('Connected to N.E.D Host UI on Solana Devnet');
    console.log('Active User Handle:', event.data.handle); // e.g. @alex.sol
    console.log('Public Key:', event.data.publicKey);
  }
});`}
              </pre>
            </div>

            {/* Code Block 2 */}
            <div className="bg-black/80 border-2 border-brand-inkBlack rounded-2xl p-5 font-mono text-xs text-stone-200 overflow-x-auto shadow-brutal-xs">
              <div className="text-brand-cyan font-black mb-2">// 2. Yêu cầu thanh toán tức thì qua USDC Devnet</div>
              <pre className="text-stone-300">
{`window.parent.postMessage({
  type: 'NED_REQUEST_PAYMENT',
  payload: {
    amount: 5.0, // 5.00 USDC
    memo: 'Order #1042 - Coffee POS',
    recipient: '7xWp9bM2...', // Builder Solana Address
  }
}, '*');`}
              </pre>
            </div>

            <div className="p-4 bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-between gap-4">
              <div>
                <div className="font-black">Cần hỗ trợ kỹ thuật chuyên sâu?</div>
                <div>Đội ngũ kỹ thuật N.E.D luôn sẵn sàng hỗ trợ trực tiếp qua Devnet Support Group.</div>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('submit')}
                className="btn-brutal-dark px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1 flex-shrink-0 cursor-pointer"
              >
                <span>{lang === 'vi' ? 'Submit DApp ngay' : 'Submit DApp'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
