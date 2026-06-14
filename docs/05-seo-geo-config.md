# 05. SEO/GEO設計

## 戦略の前提

```
■ メイン軸：「啓発広報」中心で貫く
　・「啓発動画」は補助以下
　・「啓発広報」という独自カテゴリを定義する側に立つ

■ 3サイト構成での役割分担
　・atom-story.com：会社の本体（コーポレートサイト）
　・parapara-manga.com：手法特化（パラパラ漫画 制作で上位）
　・keihatsu-koho-lab.jp：用途特化（啓発広報・業界団体）
```

---

## コアキーワード10個（3層構造）

### 第1層：メインキーワード（独自カテゴリ）

```
1. 啓発広報
2. 啓発広報 業界団体
3. 啓発広報 公益法人
4. 義務系広報
```

**狙い**：競合がほぼいない独自カテゴリ。「啓発広報」というカテゴリを定義する側に立つ。

### 第2層：周辺キーワード（流入支援）

```
5. 公益法人 広報支援
6. 業界団体 広報
7. 啓発キャンペーン 業界団体
8. 啓発活動 効果 測定
```

**狙い**：周辺領域でも認知獲得。検索流入の幅を広げる。

### 第3層：手法・トリガー

```
9. パラパラ漫画 啓発
10. 法改正 周知広報
```

**狙い**：手法×用途の組み合わせで独自ポジション。法改正トリガーで駆け込み需要を捕捉。

---

## キーワード割り当てマップ

各キーワードを、サイトのどのページで主に取りに行くか：

| キーワード | 主担当ページ | 補助ページ |
|---|---|---|
| 啓発広報 業界団体 | トップページ | サービスページ |
| 啓発動画 業界団体 | サービスページ | 事例ページ |
| 公益法人 広報支援 | 会社概要 | トップページ |
| 啓発キャンペーン 業界団体 | 事例ページ | サービスページ |
| 啓発 広報 若年層 届かない | ナレッジ記事A | 事例ページ |
| 啓発活動 効果 測定 | ナレッジ記事D | サービスページ |
| 義務 広報 自分事化 | ナレッジ記事B | 代表メッセージ |
| パラパラ漫画 啓発 | サービスページ | ナレッジ記事A |
| SNS 啓発キャンペーン 事例 | 事例ページ | ナレッジ記事C |
| 法改正 周知広報 | ナレッジ記事C | サービスページ |

---

## メタ情報設計（全ページ）

### トップページ（/）

```html
<title>啓発広報ラボ | 業界団体の啓発広報を、伝わる形に変える</title>
<meta name="description" content="「啓発広報の手応えがない」を解く専門チーム。業界団体・公益法人・一般社団法人の啓発活動を、企画から制作・運用・効果検証まで一貫して伴走支援します。パラパラ漫画を独自手法に。">
```

### サービスページ（/service/）

```html
<title>サービス内容 | 伴走支援・企画・制作運用 - 啓発広報ラボ</title>
<meta name="description" content="業界団体・公益法人の啓発広報を、3つの支援でサポート。成果定義から伴走する企画支援、ターゲット分析と戦略設計、パラパラ漫画動画やSNS運用まで、全工程を一貫してご提供します。">
```

### 事例詳細ページ（/case/kaden-seihin-kyokai/）

```html
<title>事例：家電製品協会様 視聴完了率3倍 | 啓発広報ラボ</title>
<meta name="description" content="一般財団法人 家電製品協会様の啓発広報の取り組み事例。家電リサイクル法を若年層に届けるため、パラパラ漫画動画とSNS広告を組み合わせ、視聴完了率3倍を実現しました。">
```

### 代表メッセージページ（/message/）

```html
<title>「伝わった実感」を届けるために | 代表メッセージ - 啓発広報ラボ</title>
<meta name="description" content="啓発広報ラボ運営の株式会社アトムストーリー代表 村上賢太より。500社以上のパラパラ漫画制作実績から見えた、業界団体・公益法人の啓発広報の構造的課題と、私たちが向き合う理由をお伝えします。">
```

### 会社概要ページ（/about/）

```html
<title>啓発広報ラボについて | 会社概要・株式会社アトムストーリー</title>
<meta name="description" content="啓発広報ラボは株式会社アトムストーリーが運営する、業界団体・公益法人の啓発広報の専門メディアです。運営方針・会社概要・取材依頼の窓口をご案内します。">
```

### お問い合わせ（/contact/）

```html
<title>お問い合わせ | 啓発広報ラボ</title>
<meta name="description" content="啓発広報ラボへのご相談・取材依頼はこちらから。業界団体・公益法人の広報担当者の方からのお問い合わせをお待ちしています。担当者より追ってご返信いたします。">
```

### ナレッジ記事一覧（/knowledge/）

```html
<title>啓発広報ナレッジ | 業界団体・公益法人の広報担当者向け - 啓発広報ラボ</title>
<meta name="description" content="啓発広報の課題・手法・事例を発信する専門メディア。業界団体・公益法人・一般社団法人の広報担当者の方々と、啓発広報の「伝わる」を一緒に考えます。">
```

---

## OGP（SNS共有時の見え方）

### 全ページ共通設定

```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="啓発広報ラボ">
<meta property="og:locale" content="ja_JP">
<meta property="og:image" content="https://keihatsu-koho-lab.jp/images/ogp.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@啓発広報ラボのXアカウント">
```

### og:image の仕様

```
■ サイズ：1200×630px
■ 形式：PNG または JPG
■ デザイン：
　・背景：ディープネイビー（#1E3A5F）
　・中央上部：「啓発広報ラボ」ロゴ（白文字）
　・中央下部：「啓発に、ちゃんと手応えを。」（明朝・白文字）
　・アクセント：マスタード（#D4A437）の細い区切り線
```

### ページ別 OGP

各ページのog:title / og:descriptionは、上記のtitle / descriptionと同じ。

og:typeは：
- トップ・サービス・会社概要：`website`
- 記事・事例：`article`

---

## URL構造

### ドメイン
```
https://keihatsu-koho-lab.jp/
```

### URL一覧

```
/                                  トップページ
/service/                          サービスページ
/case/                             事例一覧（将来用）
/case/kaden-seihin-kyokai/         事例詳細（家電製品協会様）
/knowledge/                        ナレッジ記事一覧
/knowledge/[slug]/                 ナレッジ記事詳細
/interview/                        インタビュー記事一覧
/interview/[slug]/                 インタビュー記事詳細
/about/                            会社概要・ラボについて
/message/                          代表メッセージ
/contact/                          お問い合わせ
```

### 命名ルール

```
■ すべてのURL末尾にスラッシュ（/）を付ける
■ 英語スラッグはハイフン区切り
　例：kaden-seihin-kyokai
■ 日本語URLは使わない
■ 将来追加するページも同じディレクトリ構造に揃える
```

### Next.js での実装

```
app/
  page.tsx                                    # /
  service/page.tsx                            # /service/
  case/
    page.tsx                                  # /case/
    [slug]/page.tsx                           # /case/[slug]/
  knowledge/
    page.tsx                                  # /knowledge/
    [slug]/page.tsx                           # /knowledge/[slug]/
  interview/
    page.tsx                                  # /interview/
    [slug]/page.tsx                           # /interview/[slug]/
  about/page.tsx                              # /about/
  message/page.tsx                            # /message/
  contact/page.tsx                            # /contact/
```

### Next.js の trailingSlash 設定

```javascript
// next.config.js
module.exports = {
  trailingSlash: true,
}
```

---

## 内部リンク設計

### 重要ハブページ（コンバージョン誘導の中心）

```
1. トップページ：全ページから戻れる中心
2. サービスページ：コンバージョン（問い合わせ）に最も近い
3. 事例詳細ページ：実績の証明、信頼性担保
4. お問い合わせフォーム：最終ゴール
```

### 内部リンクのルール

```
■ 重要なページ（サービス・事例・問い合わせ）に
　複数ページからリンクを集める

■ 関連性の高いページ同士を繋ぐ
　・ナレッジ記事 ↔ 関連事例
　・事例 ↔ 関連ナレッジ記事
　・サービス ↔ 関連事例

■ アンカーテキストにキーワードを含める
　・○ 良い例：「家電製品協会様の事例を見る」
　・× 悪い例：「こちら」「→」だけ
```

### 各ページの内部リンク設計

#### トップページから
```
■ ヒーロー → お問い合わせ・サービスページ（CTA）
■ 3つの支援 → サービスページ（詳細）
■ 事例 → 事例詳細ページ
■ パラパラ漫画セクション → 姉妹サイト（parapara-manga.com）
■ ナレッジ記事 → 各記事
■ 啓発広報ラボについて → 会社概要・代表メッセージ
■ お問い合わせCTA → お問い合わせ
```

#### サービスページから
```
■ 各支援セクション → 関連事例ページ
■ パラパラ漫画セクション → 姉妹サイト
■ ページ末尾 → お問い合わせ
■ サブ：関連ナレッジ記事3〜4本
```

#### 事例詳細ページから
```
■ クライアントの声 → サービスページ（3つの支援へ）
■ ページ末尾 → インタビュー記事
■ ページ末尾 → お問い合わせ
```

#### ナレッジ記事から
```
■ 記事内本文中 → 関連する他のナレッジ記事
■ 記事末尾 → 関連事例
■ 記事末尾 → サービスページ
■ 記事末尾 → お問い合わせ
■ サイドバー → ナレッジ記事一覧
```

---

## サイトマップ生成

### sitemap.xml の自動生成

Next.js の sitemap.ts を使用：

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://keihatsu-koho-lab.jp'
  
  // 静的ページ
  const staticPages = [
    '',
    '/service',
    '/case',
    '/case/kaden-seihin-kyokai',
    '/knowledge',
    '/interview',
    '/about',
    '/message',
    '/contact',
  ].map(path => ({
    url: `${baseUrl}${path}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }))
  
  // microCMSから動的ページを取得
  // （後でClaude Codeが実装）
  
  return [...staticPages]
}
```

---

## robots.txt

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://keihatsu-koho-lab.jp/sitemap.xml
```

---

## Google アナリティクス（GA4）

### 設定

```typescript
// app/layout.tsx
import Script from 'next/script'

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `}
</Script>
```

### 環境変数
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## Google Search Console

サイト公開後、以下を実施：

```
1. Search Console にプロパティ追加
2. 所有権の確認（DNS or HTMLタグ）
3. サイトマップ送信（https://keihatsu-koho-lab.jp/sitemap.xml）
4. インデックス登録のリクエスト
```

---

## GEO（AI検索引用）対策の重点

```
■ 最も重要な3つ
　1. Organization の knowsAbout
　2. Service の hasOfferCatalog
　3. FAQPage の質問・回答

これらが ChatGPT/Claude/Gemini での引用に最も効く。
詳細は 06-structured-data.md を参照。
```
