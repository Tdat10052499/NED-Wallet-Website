/**
 * Centralized Site Configuration
 * All product boundaries, contact emails, asset paths, and links are configured here.
 */

export const siteConfig = {
  productName: 'N.E.D Wallet',
  contactEmail: 'tdat.100524@gmail.com',
  network: 'Solana Devnet',
  platform: 'Expo (iOS & Android)',

  // Asset paths
  logoAsset: '/assets/ned-logo.jpg',
  homeScreenshotAsset: '/assets/app-screenshot.png',
  sendScreenshotAsset: '', // Prepared for future direct send flow screenshot; when empty, uses labeled illustration

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

  // Product capabilities
  stablecoinToken: 'USDC (Solana Devnet)',
  supportedIdentities: ['Số điện thoại / Phone number', 'Mã QR / QR Code', 'Địa chỉ ví / Wallet address'],
};
