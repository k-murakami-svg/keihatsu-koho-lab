# 09. 実装手順

啓発広報ラボWebサイトの実装手順を、フェーズ別に整理しています。
Claude Codeで作業する際の参考にしてください。

---

## 全体の流れ

```
Phase 0：環境準備
　・各種アカウント作成
　・ドメイン取得
　・microCMSスキーマ設定

Phase 1：基本ページ実装（最優先）
　・トップページ
　・サービスページ
　・事例詳細ページ
　・お問い合わせフォーム

Phase 2：追加ページ
　・会社概要・FAQ
　・代表メッセージ
　・ナレッジ記事一覧・詳細
　・インタビュー記事

Phase 3：SEO/GEO対策・公開
　・構造化データ全実装
　・サイトマップ・robots.txt
　・GA4・Search Console連携
　・ドメイン接続・公開
```

---

## Phase 0：環境準備（コーディング前）

### 0-1. アカウント作成

```
■ microCMS（無料プラン）
　・https://microcms.io/
　・サービスドメイン名を決定（例：keihatsu-koho-lab）

■ Vercel（無料プラン）
　・https://vercel.com/
　・GitHubアカウントで連携

■ GitHub
　・新規リポジトリ作成（例：keihatsu-koho-lab）

■ Google アナリティクス4
　・新規プロパティ作成
　・測定ID（G-XXXXXXXXXX）を取得

■ Google Search Console
　・プロパティ追加（ドメイン or URL接頭辞）
```

### 0-2. ドメイン取得

```
■ ドメイン：keihatsu-koho-lab.jp
　・お名前.com、ムームードメイン、Cloudflare Registrar等で取得
　・年額 約3,000〜5,000円

■ DNS設定：Vercel接続用（Phase 3で実施）
```

### 0-3. microCMS スキーマ作成

`07-microcms-schema.md` を参照し、以下のAPIを作成：

```
■ knowledge（ナレッジ記事）
■ interview（インタビュー記事）
■ case-study（事例）※Phase 2以降でOK
```

### 0-4. お問い合わせフォーム送信用サービス

```
■ Resend（推奨）
　・https://resend.com/
　・Vercel連携が簡単
　・無料プラン：月3,000通

■ または Formspree
　・https://formspree.io/
```

---

## Phase 1：基本ページ実装

### 1-1. Next.js プロジェクト作成

```bash
# Next.js プロジェクト作成（App Router、TypeScript、Tailwind CSS）
npx create-next-app@latest keihatsu-koho-lab \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

cd keihatsu-koho-lab
```

### 1-2. 必要なライブラリのインストール

```bash
# microCMS連携
npm install microcms-js-sdk

# フォーム送信（Resendを使う場合）
npm install resend

# その他（必要に応じて）
npm install clsx tailwind-merge  # クラス名管理
```

### 1-3. 基本設定ファイル

#### `next.config.js`

```javascript
module.exports = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
}
```

#### `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1E3A5F',
          50: '#F0F4F8',
          100: '#D9E2EC',
        },
        mustard: {
          DEFAULT: '#D4A437',
          50: '#FAF6E8',
          100: '#F0E2A8',
        },
        text: '#2B2B2B',
        border: '#E0E0E0',
        cream: '#FAF8F2',
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
        en: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
export default config
```

#### `.env.local`

```
# microCMS
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key

# Resend（フォーム送信）
RESEND_API_KEY=your-resend-key

# Google アナリティクス
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 1-4. 基本コンポーネントの作成

```
src/
  components/
    Header.tsx         グローバルヘッダー
    Footer.tsx         フッター
    Button.tsx         ボタン（メイン・サブ）
    Card.tsx           汎用カード
    Section.tsx        セクションコンテナ
    Container.tsx      最大幅コンテナ
  app/
    layout.tsx         全体レイアウト
    page.tsx           トップページ
    service/
      page.tsx         サービスページ
    case/
      [slug]/
        page.tsx       事例詳細
    contact/
      page.tsx         お問い合わせ
  lib/
    microcms.ts        microCMS設定
    api.ts             データ取得関数
```

### 1-5. レイアウトとフォント読み込み

#### `src/app/layout.tsx`

```typescript
import type { Metadata } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://keihatsu-koho-lab.jp'),
  title: {
    default: '啓発広報ラボ | 業界団体の啓発広報を、伝わる形に変える',
    template: '%s | 啓発広報ラボ',
  },
  description: '「啓発広報の手応えがない」を解く専門チーム。業界団体・公益法人・一般社団法人の啓発活動を、企画から制作・運用・効果検証まで一貫して伴走支援します。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${notoSansJP.variable} ${inter.variable}`}>
      <body className="font-sans text-text">
        <Header />
        <main>{children}</main>
        <Footer />
        {/* 構造化データの挿入 */}
      </body>
    </html>
  )
}
```

### 1-6. トップページの実装

`03-page-copy-top.md` を参照し、9セクションを順次実装。

```typescript
// src/app/page.tsx
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServiceSection />
      <CaseSection />
      <ParaparaReasonsSection />
      <ContactPatternsSection />
      <KnowledgeSection />
      <AboutSection />
      <ContactCTASection />
    </>
  )
}
```

### 1-7. お問い合わせフォームの実装

#### Resend を使った送信処理

```typescript
// src/app/api/contact/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  
  try {
    await resend.emails.send({
      from: 'お問い合わせフォーム <onboarding@resend.dev>',
      to: 'kenta@example.com', // 賢太さんのメールアドレス
      replyTo: body.email,
      subject: `【啓発広報ラボ】お問い合わせ：${body.purpose}`,
      html: `
        <h2>お問い合わせ内容</h2>
        <p><strong>お名前：</strong>${body.name}</p>
        <p><strong>所属：</strong>${body.organization}</p>
        <p><strong>メール：</strong>${body.email}</p>
        <p><strong>ご用件：</strong>${body.purpose}</p>
        <p><strong>内容：</strong></p>
        <p>${body.message}</p>
        ${body.phone ? `<p><strong>電話：</strong>${body.phone}</p>` : ''}
        ${body.concern ? `<p><strong>お困りごと：</strong>${body.concern}</p>` : ''}
      `,
    })
    
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: 'Failed to send' }, { status: 500 })
  }
}
```

---

## Phase 2：追加ページ実装

### 2-1. 会社概要・代表メッセージ

`04-page-copy-other.md` の A-3、A-4 を参照して実装。

### 2-2. microCMS 連携

`07-microcms-schema.md` の Next.js での連携例を参照。

```typescript
// src/app/knowledge/page.tsx
import { getKnowledgeList } from '@/lib/api'

export default async function KnowledgeListPage() {
  const data = await getKnowledgeList(10)
  
  return (
    <Section>
      <h1>啓発広報ナレッジ</h1>
      <ul>
        {data.contents.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ul>
    </Section>
  )
}
```

### 2-3. 動的ルーティング

```typescript
// src/app/knowledge/[slug]/page.tsx
import { getKnowledgeBySlug } from '@/lib/api'

export async function generateStaticParams() {
  const data = await client.getList({ endpoint: 'knowledge', queries: { limit: 100 } })
  return data.contents.map(article => ({ slug: article.slug }))
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getKnowledgeBySlug(params.slug)
  
  return (
    <article>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  )
}
```

---

## Phase 3：SEO/GEO対策・公開

### 3-1. 構造化データの実装

`06-structured-data.md` の全コードを各ページに実装。

### 3-2. サイトマップ・robots.txt

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 実装は 05-seo-geo-config.md 参照
}

// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://keihatsu-koho-lab.jp/sitemap.xml',
  }
}
```

### 3-3. Google アナリティクス・Search Console連携

`05-seo-geo-config.md` を参照。

### 3-4. Vercel デプロイ

```bash
# GitHub にプッシュ
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/[username]/keihatsu-koho-lab.git
git push -u origin main

# Vercel で連携
# 1. Vercel ダッシュボード > New Project
# 2. GitHub リポジトリを選択
# 3. 環境変数を登録（MICROCMS_*、RESEND_API_KEY、NEXT_PUBLIC_GA_*）
# 4. デプロイ
```

### 3-5. ドメイン接続

```
1. Vercel ダッシュボード > Settings > Domains
2. keihatsu-koho-lab.jp を追加
3. お名前.com 等の DNS で、Vercel指定のレコードを設定
4. SSL証明書が自動発行されるのを待つ（数分〜数時間）
```

### 3-6. microCMS Webhook 設定

```
1. Vercel ダッシュボード > Settings > Git > Deploy Hooks
2. 新規Hook作成（名前：microcms-update）
3. 生成されたURLをコピー
4. microCMS ダッシュボード > API設定 > Webhook
5. URLを登録、トリガーを「公開時」「更新時」に設定
```

### 3-7. Search Console 設定

```
1. Search Console > プロパティ追加（URL接頭辞 https://keihatsu-koho-lab.jp/）
2. 所有権の確認（HTMLタグ method 推奨）
　 ・Vercel 環境変数で対応 or layout.tsx に追加
3. サイトマップ送信（https://keihatsu-koho-lab.jp/sitemap.xml）
4. インデックス登録のリクエスト（主要ページ）
```

---

## オープン後のチェックリスト

```
■ 公開後のチェック
　□ ドメインが正常にアクセスできる
　□ SSL証明書が有効（鍵マーク表示）
　□ レスポンシブ動作（PC・スマホで確認）
　□ お問い合わせフォーム送信テスト
　□ Google Rich Results Test で構造化データを検証
　□ Google アナリティクスでPVカウント確認
　□ Search Console でインデックス登録確認

■ パフォーマンス確認
　□ PageSpeed Insights でスコア確認（80点以上目標）
　□ Lighthouse でアクセシビリティ・SEO項目を確認

■ コンテンツ確認
　□ 誤字脱字
　□ リンク切れ
　□ 画像の表示
　□ メタ情報（titleとdescription）の各ページ別表示
```

---

## トラブルシューティング

### microCMS の記事が反映されない
- Webhook が正しく設定されているか確認
- Vercel の再ビルドが完了しているか確認
- ISR の revalidate 時間を確認

### 構造化データのエラー
- Google Rich Results Test で具体的なエラーを確認
- JSON-LD の構文エラー（カンマ、引用符）を確認

### ドメイン接続できない
- DNS の伝播待ち（最大24時間）
- DNS レコードが Vercel の指示通りか確認
