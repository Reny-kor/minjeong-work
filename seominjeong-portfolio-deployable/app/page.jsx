import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio2025() {
  return (
    <div className="p-6 grid gap-6 max-w-5xl mx-auto w-full sm:p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <h1 className="text-4xl font-bold text-wrap">서민정 콘텐츠 마케터 포트폴리오</h1>
        <p className="text-lg text-gray-600 mt-2">데이터를 바탕으로 브랜드와 소비자를 연결하는 콘텐츠 전략가</p>
      </motion.div>
      <Card><CardContent className="p-4"><h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
          <li>✔ 콘텐츠 캠페인 기획 (SNS / 웹툰 / 커머스 콘텐츠 운영)</li>
          <li>✔ 퍼포먼스 분석 (GA4, Insight 기반 KPI 성과 측정)</li>
          <li>✔ Capcut, Illustrator, PowerPoint 기반 콘텐츠 제작</li>
          <li>✔ 리뷰 / 커뮤니티 기반 확산 전략에 강점 보유</li>
        </ul></CardContent></Card>
      <Card><CardContent className="p-4"><h2 className="text-xl font-bold">📁 주요 프로젝트 요약</h2>
        <ul className="list-disc ml-6 text-sm space-y-1">
          <li>넘버즈인 외 브랜드와의 SNS 후기 캠페인 운영 (총 리뷰 119건 유도)</li>
          <li>웹툰 기반 마이크로사이트 캠페인: 조회수 5,612 / 댓글 324 / 공유 204 달성</li>
          <li>이커머스 플랫폼(다나와 등)에서 CTA 중심 콘텐츠 기획 및 이벤트 유도</li>
          <li>브랜드 기획 프로젝트: 후기 포맷 A/B 실험, 브랜드 전략 프레임 기반 기획안 작성</li>
        </ul></CardContent></Card>
      <Card><CardContent className="p-4"><h2 className="text-xl font-bold">📈 현재 성장 방향</h2>
        <p className="text-sm text-gray-700">브랜드 전략 수업 수강 및 Meta 자격 인증을 통해 실전형 브랜드 마케터로 확장 중입니다.<br />
        사용자 관점에서 콘텐츠 메시지를 설계하고, 실제 브랜드 팬덤을 확산시키는 실험 기반 프로젝트를 지속적으로 수행하고 있습니다.</p>
      </CardContent></Card>
      <Card><CardContent className="p-4 text-center"><h2 className="text-xl font-bold">Contact</h2>
        <p className="text-sm text-gray-600">서민정 | tjalswjd3252@gmail.com | 010-XXXX-XXXX</p>
      </CardContent></Card>
    </div>
  );
}