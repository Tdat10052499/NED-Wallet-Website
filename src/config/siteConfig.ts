/**
 * Centralized Site Configuration
 * All product boundaries, contact emails, and external links are configured here.
 */

export const siteConfig = {
  productName: 'N.E.D Wallet',
  contactEmail: 'tdat.100524@gmail.com',
  network: 'Solana Devnet',
  platform: 'Expo (iOS & Android)',
  
  // Demo request mailto
  demoMailSubject: 'N.E.D Wallet — Demo request',
  demoMailBodyVi: 'Chào team N.E.D,\n\nTôi muốn đăng ký nhận hướng dẫn trải nghiệm bản demo N.E.D Wallet qua Expo trên Solana Devnet.\n\nThông tin của tôi:\n- Thiết bị (iOS/Android):\n- Email nhận thư mời Expo:\n\nCảm ơn team!',
  demoMailBodyEn: 'Hello N.E.D team,\n\nI would like to request access and guidance to test the N.E.D Wallet demo via Expo on Solana Devnet.\n\nMy details:\n- Device (iOS/Android):\n- Expo account / email:\n\nThank you!',

  // Builder collaboration mailto
  builderMailSubject: 'N.E.D Wallet — Builder collaboration',
  builderMailBodyVi: 'Chào team N.E.D,\n\nTôi là nhà phát triển / dự án quan tâm đến nền tảng mini-app trên N.E.D Wallet.\n\nÝ tưởng / Dự án của tôi:\n- Tên dự án / sản phẩm:\n- Mô tả trải nghiệm muốn đưa vào ví:\n- Liên hệ (Telegram / Twitter / Email):\n\nRất mong được trao đổi thêm!',
  builderMailBodyEn: 'Hello N.E.D team,\n\nI am a developer/project interested in collaborating on the mini-app platform inside N.E.D Wallet.\n\nMy project / concept:\n- Project name:\n- Description of experience for wallet:\n- Contact handle (Telegram / Twitter / Email):\n\nLooking forward to discussing further!',

  /**
   * demoUrl: When an Expo public link or build becomes available in the future,
   * provide it here. If empty string, the site will automatically guide the user
   * through the email request workflow.
   */
  demoUrl: '',

  // Product capabilities documented
  stablecoinToken: 'USDC (Devnet)',
  supportedIdentities: ['Số điện thoại / Phone number', 'Mã QR / QR Code', 'Địa chỉ ví / Wallet address'],
};
