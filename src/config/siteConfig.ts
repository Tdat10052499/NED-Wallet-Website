/**
 * Centralized Site Configuration
 * All product boundaries, contact emails, asset paths, and links are configured here.
 */

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const siteConfig = {
  productName: 'N.E.D Wallet',
  contactEmail: 'tdat.100524@gmail.com',
  network: 'Solana Devnet',
  platform: 'Expo (iOS & Android)',

  // Asset paths
  logoAsset: assetPath('assets/ned-logo.jpg'),
  appLogoAsset: assetPath('assets/brand/logo_app.jpg'),
  brandNedLogo: assetPath('assets/brand/logo_ned_wallet.jpg'),
  brandColors: assetPath('assets/brand/brand_colors.jpg'),

  // Mascot Assets (16 biểu cảm của chú gấu N.E.D Teddy)
  mascots: {
    waving: assetPath('assets/brand/mascot/waving.png'),
    happy: assetPath('assets/brand/mascot/happy.png'),
    proud: assetPath('assets/brand/mascot/proud.png'),
    exciting: assetPath('assets/brand/mascot/exciting.png'),
    curious: assetPath('assets/brand/mascot/curious.png'),
    thinking: assetPath('assets/brand/mascot/thinking.png'),
    laughing: assetPath('assets/brand/mascot/laughing.png'),
    surprised: assetPath('assets/brand/mascot/surprised.png'),
    sleepy: assetPath('assets/brand/mascot/sleepy.png'),
    scared: assetPath('assets/brand/mascot/scared.png'),
    sad: assetPath('assets/brand/mascot/sad.png'),
    angry: assetPath('assets/brand/mascot/angry.png'),
    confused: assetPath('assets/brand/mascot/confused.png'),
    crying: assetPath('assets/brand/mascot/crying.png'),
    embarrassed: assetPath('assets/brand/mascot/embarrassed.png'),
    frustrated: assetPath('assets/brand/mascot/frustrated.png'),
  },

  // App Screenshots (14 màn hình ứng dụng thực tế trên Solana Devnet)
  screenshots: {
    // Main Hubs & Features
    dashboardHome: assetPath('assets/screenshots/app_dashboard_home.png'),
    analyticsCashflow: assetPath('assets/screenshots/app_analytics_cashflow.png'),
    transferCenter: assetPath('assets/screenshots/app_transfer_center.png'),
    transferPhone: assetPath('assets/screenshots/app_transfer_phone.png'),
    shakeSplit: assetPath('assets/screenshots/app_shake_split.png'),
    luckyCoin: assetPath('assets/screenshots/app_lucky_coin.png'),
    miniappsHub: assetPath('assets/screenshots/app_miniapps_hub.png'),

    // Onboarding Flow
    login: assetPath('assets/screenshots/app_login.png'),
    register: assetPath('assets/screenshots/app_register.png'),
    emailOtp: assetPath('assets/screenshots/app_email_otp.png'),
    phoneSecurity: assetPath('assets/screenshots/app_phone_security.png'),
    phoneOtp: assetPath('assets/screenshots/app_phone_otp.png'),
    handleClaim: assetPath('assets/screenshots/app_handle_claim.png'),
    welcomeSuccess: assetPath('assets/screenshots/app_welcome_success.png'),
  },

  // Backward-compatible aliases
  homeScreenshotAsset: assetPath('assets/screenshots/app_dashboard_home.png'),
  sendScreenshotAsset: assetPath('assets/screenshots/app_transfer_phone.png'),

  // Demo request mailto
  demoMailSubject: 'N.E.D Wallet — Demo request',
  demoMailBodyVi: 'Chào team N.E.D,\n\nTôi muốn đăng ký nhận hướng dẫn trải nghiệm bản demo N.E.D Wallet qua Expo trên Solana Devnet.\n\nThông tin của tôi:\n- Thiết bị (iOS/Android):\n- Email nhận hướng dẫn Expo:\n\nCảm ơn team!',
  demoMailBodyEn: 'Hello N.E.D team,\n\nI would like to request access and guidance to try the N.E.D Wallet demo via Expo on Solana Devnet.\n\nMy details:\n- Device (iOS/Android):\n- Email for Expo guidance:\n\nThank you!',

  // Builder collaboration mailto
  builderMailSubject: 'N.E.D Wallet — Builder collaboration',
  builderMailBodyVi: 'Chào team N.E.D,\n\nTôi là nhà phát triển / builder quan tâm đến định hướng mini-app trên N.E.D Wallet.\n\nÝ tưởng / Dự án của tôi:\n- Tên dự án / sản phẩm:\n- Mô tả trải nghiệm muốn đưa vào ví:\n- Kênh liên hệ thuận tiện:\n\nRất mong được trao đổi thêm cùng nhóm!',
  builderMailBodyEn: 'Hello N.E.D team,\n\nI am a developer/builder interested in the mini-app platform inside N.E.D Wallet.\n\nMy project / concept:\n- Project name:\n- Description of experience for the wallet:\n- Preferred contact channel:\n\nLooking forward to discussing further with the team!',

  /**
   * demoUrl: When an Expo public link or build URL becomes available,
   * configure it here. When empty, the website prompts direct email contact.
   */
  demoUrl: '',

  // Demo Video Walkthrough
  demoVideo: {
    id: '6t4StC59mrQ',
    url: 'https://youtu.be/6t4StC59mrQ?si=pssML1KZW4lWzu_D',
    embedUrl: 'https://www.youtube.com/embed/6t4StC59mrQ?enablejsapi=1&rel=0&modestbranding=1&playsinline=1&mute=1',
    localVideoAsset: assetPath('assets/ned_wallet_demo.mp4'),
    rawLocalVideoAsset: assetPath('assets/N.E.D%20Wallet%20m%E1%BB%9Bi.mp4'),
    thumbnail: 'https://img.youtube.com/vi/6t4StC59mrQ/maxresdefault.jpg',
  },

  // Product capabilities
  stablecoinToken: 'USDC (Solana Devnet)',
  supportedIdentities: ['Số điện thoại / Phone number', 'Mã QR / QR Code', 'Địa chỉ ví / Wallet address'],
};
