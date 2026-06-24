export const siteUrl = "https://123-cheolgeo.vercel.app";

export const targetKeywords = ['123철거', '철거 전문', '건물 철거', '인테리어 철거', '부분 철거', '해체 공사', '철거 비용'] as const;

export const siteTitle = "123철거 | 안전하고 완벽한 철거 전문, 지금 바로 상담하세요";

export const siteDescription =
  "123철거는 모든 종류의 철거를 전문으로 합니다. 주택, 상가, 인테리어, 부분 철거까지, 안전하고 효율적인 작업으로 고객 만족을 최우선으로 합니다.";

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "123철거",
        description: siteDescription,
        inLanguage: "ko-KR",
        telephone: "1555-7321",
        knowsAbout: [...targetKeywords],
      },
    ],
  };
}
