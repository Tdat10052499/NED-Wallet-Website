import React from 'react';
import { HeroScene } from '../components/HeroScene';
import { CoreActionsStrip } from '../components/CoreActionsStrip';
import { SendFeature } from '../components/SendFeature';
import { AssetOverview } from '../components/AssetOverview';
import { DemoGuide } from '../components/DemoGuide';
import { MiniAppsPreview } from '../components/MiniAppsPreview';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main className="w-full min-h-screen">
      {/* 1. Hero Section (Cinematic 3D phone & value proposition) */}
      <HeroScene onNavigate={onNavigate} />

      {/* 2. Core Actions Strip (#experience - Dải ba thao tác: Nhận / Chuyển / Theo dõi) */}
      <CoreActionsStrip />

      {/* 3. Send Feature (#send - Chọn người nhận qua SĐT, QR, Ví) */}
      <SendFeature />

      {/* 4. Asset Overview (#overview - Tổng quan tài sản & ảnh giao diện ứng dụng) */}
      <AssetOverview />

      {/* 5. Demo Guide (#demo - 3 bước trải nghiệm & liên hệ nhận demo qua email) */}
      <DemoGuide />

      {/* 6. Mini-App Preview (#mini-apps - Kiến trúc module mở rộng & link tới /builders) */}
      <MiniAppsPreview onNavigate={onNavigate} />

      {/* 7. FAQ (#faq - 6 câu hỏi thường gặp & giải đáp chi tiết) */}
      <FAQ />

      {/* 8. Final CTA (Khối lavender kêu gọi hành động cuối trang) */}
      <FinalCTA onNavigate={onNavigate} />
    </main>
  );
};
