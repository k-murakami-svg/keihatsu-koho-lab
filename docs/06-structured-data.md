# 06. 構造化データ（JSON-LD）

実装する構造化データは**7種類**です。各ページに適切に配置してください。

---

## 配置場所の概要

| 構造化データ | 配置場所 |
|---|---|
| Organization | 全ページの`<head>` |
| WebSite | 全ページの`<head>` |
| Service | サービスページのみ |
| Article | ナレッジ・インタビュー記事 |
| CaseStudy（Article型で実装） | 事例詳細ページ |
| FAQPage | FAQページ（会社概要に統合可） |
| BreadcrumbList | 全ページ（自動生成） |

---

## 1. Organization（全ページ）

### 配置
`<head>` 内、すべてのページに含める。

### JSON-LDコード

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "株式会社アトムストーリー",
  "alternateName": "啓発広報ラボ",
  "url": "https://keihatsu-koho-lab.jp/",
  "logo": "https://keihatsu-koho-lab.jp/images/logo.png",
  "description": "業界団体・公益法人・一般社団法人の啓発広報を支援する専門チーム。「啓発広報ラボ」を運営。",
  "foundingDate": "2013-06",
  "founder": {
    "@type": "Person",
    "name": "村上 賢太",
    "jobTitle": "代表取締役"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "南青山3丁目1番36号 青山丸竹ビル6F",
    "addressLocality": "港区",
    "addressRegion": "東京都",
    "postalCode": "107-0062",
    "addressCountry": "JP"
  },
  "telephone": "+81-3-6822-2676",
  "sameAs": [
    "https://atom-story.com/",
    "https://parapara-manga.com/"
  ],
  "knowsAbout": [
    "啓発広報",
    "業界団体の広報支援",
    "公益法人の広報支援",
    "パラパラ漫画",
    "ストーリーマーケティング",
    "SNS運用",
    "啓発動画制作"
  ]
}
</script>
```

---

## 2. WebSite（全ページ）

### 配置
`<head>` 内、すべてのページに含める。

### JSON-LDコード

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "啓発広報ラボ",
  "alternateName": "啓発広報ラボ - 業界団体・公益法人の啓発広報の専門メディア",
  "url": "https://keihatsu-koho-lab.jp/",
  "description": "業界団体・公益法人・一般社団法人の啓発広報を支援する専門メディア。「啓発広報の手応えがない」という課題を、企画から制作・運用・効果検証まで一貫して伴走支援します。",
  "publisher": {
    "@type": "Organization",
    "name": "株式会社アトムストーリー",
    "url": "https://atom-story.com/"
  },
  "inLanguage": "ja-JP",
  "audience": {
    "@type": "Audience",
    "audienceType": "業界団体・公益法人・一般社団法人の広報担当者"
  }
}
</script>
```

---

## 3. Service（サービスページのみ）

### 配置
`/service/` ページの `<head>` 内のみ。

### JSON-LDコード

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "啓発広報支援サービス",
  "alternateName": "業界団体・公益法人の啓発広報支援",
  "description": "業界団体・公益法人・一般社団法人の啓発広報を、伴走支援・企画設計・制作運用の3つの支援で一貫してサポートします。パラパラ漫画動画を独自手法とし、SNS広告運用・効果測定まで提供します。",
  "provider": {
    "@type": "Organization",
    "name": "株式会社アトムストーリー",
    "url": "https://keihatsu-koho-lab.jp/"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Japan"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "業界団体・公益法人・一般社団法人・NPO・行政"
  },
  "serviceType": "啓発広報",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "啓発広報の3つの支援",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "伴走支援",
          "description": "成果定義・KPI設計・効果検証の段階から、一緒に考えます。啓発広報の根っこから整理する支援です。"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "企画・設計",
          "description": "ターゲット分析・アンケート調査・表現戦略・コンテンツ設計を行います。届くための戦略を組み立てます。"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "制作・運用",
          "description": "啓発動画（パラパラ漫画ほか）・印刷物・キャラクター制作・SNS広告運用・効果測定レポートまで一貫提供。"
        }
      }
    ]
  }
}
</script>
```

---

## 4. Article（ナレッジ・インタビュー記事）

### 配置
`/knowledge/[slug]/` および `/interview/[slug]/` の `<head>` 内。

### JSON-LDコード（テンプレート）

microCMSから取得したデータを動的に埋め込みます。

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{記事タイトル}}",
  "description": "{{記事の説明（最初の100文字 or 専用メタ説明）}}",
  "image": "{{アイキャッチ画像URL}}",
  "datePublished": "{{公開日 ISO 8601形式}}",
  "dateModified": "{{更新日 ISO 8601形式}}",
  "author": {
    "@type": "Organization",
    "name": "啓発広報ラボ編集部",
    "url": "https://keihatsu-koho-lab.jp/about/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "株式会社アトムストーリー",
    "logo": {
      "@type": "ImageObject",
      "url": "https://keihatsu-koho-lab.jp/images/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://keihatsu-koho-lab.jp/knowledge/{{slug}}/"
  },
  "articleSection": "{{カテゴリ}}",
  "keywords": "{{タグをカンマ区切り}}"
}
</script>
```

### Next.js での実装例

```typescript
// app/knowledge/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const article = await getArticle(params.slug)
  
  return {
    title: `${article.title} | 啓発広報ラボ`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.thumbnail.url],
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  }
}

// JSON-LD は別途 <Script> タグで挿入
```

---

## 5. CaseStudy（事例詳細ページ）

### 配置
`/case/kaden-seihin-kyokai/` の `<head>` 内。

### JSON-LDコード（家電製品協会様の事例）

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "視聴完了率3倍を実現した、若年層向け啓発広報の取り組み",
  "alternativeHeadline": "一般財団法人 家電製品協会様の事例",
  "description": "家電リサイクル法を若年層に届けるため、パラパラ漫画動画とSNS広告・Xプレゼントキャンペーンを組み合わせた啓発施策を実施。視聴完了率3倍を実現し、効果測定・レポーティングまで一貫して伴走支援。",
  "image": "https://keihatsu-koho-lab.jp/images/case/kaden-seihin-kyokai-thumbnail.jpg",
  "datePublished": "2026-XX-XX",
  "author": {
    "@type": "Organization",
    "name": "株式会社アトムストーリー"
  },
  "publisher": {
    "@type": "Organization",
    "name": "株式会社アトムストーリー",
    "logo": {
      "@type": "ImageObject",
      "url": "https://keihatsu-koho-lab.jp/images/logo.png"
    }
  },
  "mainEntityOfPage": "https://keihatsu-koho-lab.jp/case/kaden-seihin-kyokai/",
  "about": {
    "@type": "Organization",
    "name": "一般財団法人 家電製品協会",
    "description": "家電製品の普及・リサイクルに関わる業界団体"
  },
  "keywords": "啓発広報, 業界団体, 一般財団法人, 家電リサイクル法, パラパラ漫画, SNS広告, 若年層向け啓発"
}
</script>
```

---

## 6. FAQPage（FAQページ または 会社概要に統合）

### 配置
専用のFAQページ、または会社概要ページのFAQセクション。

### JSON-LDコード（全9問）

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "啓発広報ラボはどんなサービスを提供していますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "業界団体・公益法人・一般社団法人の啓発広報を、伴走支援・企画設計・制作運用の3つでサポートします。成果定義から効果検証まで一貫してご提供します。"
      }
    },
    {
      "@type": "Question",
      "name": "どのような団体が対象ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "業界団体・公益法人・一般財団法人・一般社団法人・NPO・行政の啓発広報担当者の方々を主な対象としています。法律・自主規制に紐づく啓発活動を行う団体に強みがあります。"
      }
    },
    {
      "@type": "Question",
      "name": "制作以外の支援もしてもらえますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。制作物の納品で終わらず、SNS広告の運用・キャンペーンの設計・効果測定レポートまで、伴走で継続的に支援します。「作って終わり」ではなく、「届くまで」を一緒に考えます。"
      }
    },
    {
      "@type": "Question",
      "name": "相談だけでも可能ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。「何から相談すればいいか分からない」段階からお受けします。まずは現状をお聞かせください。お問い合わせフォームからお気軽にご連絡ください。"
      }
    },
    {
      "@type": "Question",
      "name": "費用はどのくらいかかりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ご相談内容によって変わるため、お見積もりはお問い合わせいただいた後にご提案いたします。スポット制作から年間契約まで、ご予算に合わせた提案が可能です。"
      }
    },
    {
      "@type": "Question",
      "name": "どのくらいの期間で制作できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "パラパラ漫画動画の場合、企画から納品まで3ヶ月が目安です。SNS運用は継続契約となります。スケジュールに合わせた進行が可能ですので、お気軽にご相談ください。"
      }
    },
    {
      "@type": "Question",
      "name": "業界団体の啓発広報で、よくある課題は何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "「やっているのに伝わってる手応えがない」「成果をどう測ればいいか分からない」といった課題を、担当者の方からよく伺います。"
      }
    },
    {
      "@type": "Question",
      "name": "アトムストーリーと啓発広報ラボの関係は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "啓発広報ラボは、株式会社アトムストーリーが運営しています。アトムストーリーは2013年創業、ストーリーマーケティングを軸に企業ブランディングを支援するマーケティング会社です。500社以上のパラパラ漫画ムービー制作実績を持ちます。"
      }
    },
    {
      "@type": "Question",
      "name": "取材を受けてもらうことはできますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、業界団体・公益法人などで啓発広報に取り組まれている団体への取材を行っています。取材内容を伺った上で、啓発広報ラボの掲載方針と合うかを確認させていただき、個別に詳細をご相談いたします。お問い合わせフォームよりお気軽にご連絡ください。"
      }
    }
  ]
}
</script>
```

---

## 7. BreadcrumbList（全ページ）

### 配置
各ページの `<head>` 内に、そのページの階層に応じて生成。

### Next.js での自動生成

URLパスから自動的に生成する関数を実装：

```typescript
// lib/breadcrumb.ts
export function generateBreadcrumb(pathname: string, pageTitle?: string) {
  const baseUrl = 'https://keihatsu-koho-lab.jp'
  const segments = pathname.split('/').filter(Boolean)
  
  const items = [
    { name: 'トップ', url: `${baseUrl}/` }
  ]
  
  let currentPath = ''
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === segments.length - 1
    
    // セグメントごとに日本語名を割り当て
    const name = getSegmentName(segment, isLast ? pageTitle : undefined)
    
    items.push({
      name,
      url: `${baseUrl}${currentPath}/`,
    })
  })
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  }
}

function getSegmentName(segment: string, pageTitle?: string): string {
  const map: Record<string, string> = {
    service: 'サービス',
    case: '事例',
    knowledge: 'ナレッジ',
    interview: 'インタビュー',
    about: '会社概要',
    message: '代表メッセージ',
    contact: 'お問い合わせ',
  }
  return map[segment] || pageTitle || segment
}
```

### 各ページのパンくず構造

```
■ トップページ：表示しない（不要）
■ /service/：トップ > サービス
■ /case/：トップ > 事例
■ /case/kaden-seihin-kyokai/：トップ > 事例 > 家電製品協会様
■ /knowledge/：トップ > ナレッジ
■ /knowledge/[slug]/：トップ > ナレッジ > [記事タイトル]
■ /interview/：トップ > インタビュー
■ /interview/[slug]/：トップ > インタビュー > [記事タイトル]
■ /about/：トップ > 会社概要
■ /message/：トップ > 代表メッセージ
■ /contact/：トップ > お問い合わせ
```

### 表示方法

JSON-LDだけでなく、画面上にも視覚的なパンくずを表示する（記事ページなど）：

```tsx
<nav aria-label="パンくずリスト" className="text-sm">
  <ol className="flex space-x-2">
    <li><a href="/">トップ</a></li>
    <li>></li>
    <li><a href="/knowledge/">ナレッジ</a></li>
    <li>></li>
    <li aria-current="page">{記事タイトル}</li>
  </ol>
</nav>
```

---

## Next.js での JSON-LD 挿入方法

### 静的なJSON-LD（Organization、WebSiteなど）

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    // ... 上記のOrganization JSON-LD
  }
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    // ... 上記のWebSite JSON-LD
  }
  
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 動的なJSON-LD（Article、BreadcrumbListなど）

```tsx
// app/knowledge/[slug]/page.tsx
export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug)
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    // ... 動的に組み立て
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article>
        {/* 記事コンテンツ */}
      </article>
    </>
  )
}
```

---

## 構造化データのテスト

実装後、以下のツールで検証：

```
■ Google Rich Results Test
　https://search.google.com/test/rich-results
　・URLを入力して構造化データを検証
　・エラー・警告があれば修正

■ Schema.org Validator
　https://validator.schema.org/
　・JSON-LDの構文チェック

■ Search Console のリッチリザルト レポート
　・公開後の状況をモニタリング
```
