# 07. microCMSスキーマ設計

microCMSを使うために、事前に必要な「APIスキーマ（記事のフィールド構造）」を定義します。
このドキュメントを見て、microCMS管理画面でAPI/フィールドを作成してください。

---

## microCMS とは

ヘッドレスCMS。記事の管理画面（コンテンツ管理用UI）を提供し、APIを通じてデータをNext.jsから取得します。

```
■ 公式サイト：https://microcms.io/
■ 料金：Hobbyプラン（無料）から開始可能
■ 制限：無料プランは月20APIコール、3つのAPIまで
　→ 啓発広報ラボの規模なら Hobby または Team プラン推奨
```

---

## 必要なAPI（3つ）

```
1. ナレッジ記事（knowledge）
2. インタビュー記事（interview）
3. 事例（case-study）※将来用、Phase 2以降
```

---

## API 1：ナレッジ記事（knowledge）

### API設定

```
■ API名：ナレッジ記事
■ エンドポイント：knowledge
■ APIの型：リスト形式
```

### フィールド設計

| フィールドID | フィールド名 | 種類 | 必須 | 説明 |
|---|---|---|---|---|
| `title` | タイトル | テキストフィールド | ✅ | 記事タイトル（30〜60文字推奨） |
| `slug` | スラッグ | テキストフィールド | ✅ | URL用（英数字・ハイフンのみ） |
| `description` | 記事の説明 | テキストエリア | ✅ | メタディスクリプション用（80〜120文字） |
| `content` | 本文 | リッチエディタ | ✅ | 記事本文（HTMLで保存） |
| `thumbnail` | アイキャッチ画像 | 画像 | ✅ | 1200×675px推奨 |
| `category` | カテゴリ | セレクトフィールド | ✅ | 後述の選択肢から1つ |
| `tags` | タグ | 複数選択フィールド | - | 後述の選択肢から複数 |
| `author` | 著者 | テキストフィールド | - | デフォルト：「啓発広報ラボ編集部」 |
| `publishedAt` | 公開日 | 日時 | ✅ | （microCMS自動取得） |
| `updatedAt` | 更新日 | 日時 | ✅ | （microCMS自動取得） |

### カテゴリの選択肢

```
- 啓発広報の基礎
- 業界団体向け
- 公益法人向け
- 表現手法（パラパラ漫画など）
- SNS運用
- 効果測定
- 法律・制度
```

### タグの選択肢

```
- 啓発広報
- 業界団体
- 公益法人
- 一般社団法人
- パラパラ漫画
- 啓発動画
- SNS
- 効果測定
- 法改正
- 若年層
- 自分事化
- 義務系広報
```

---

## API 2：インタビュー記事（interview）

### API設定

```
■ API名：インタビュー記事
■ エンドポイント：interview
■ APIの型：リスト形式
```

### フィールド設計

| フィールドID | フィールド名 | 種類 | 必須 | 説明 |
|---|---|---|---|---|
| `title` | タイトル | テキストフィールド | ✅ | 記事タイトル |
| `slug` | スラッグ | テキストフィールド | ✅ | URL用 |
| `description` | 記事の説明 | テキストエリア | ✅ | メタディスクリプション用 |
| `content` | 本文 | リッチエディタ | ✅ | インタビュー本文 |
| `thumbnail` | アイキャッチ画像 | 画像 | ✅ | 1200×675px推奨 |
| `interviewee` | 取材先団体名 | テキストフィールド | ✅ | 例：一般財団法人 家電製品協会 |
| `intervieweeRole` | 取材対象者の所属・役職 | テキストフィールド | - | 例：三善徹様 |
| `intervieweePhoto` | 取材対象者の写真 | 画像 | - | 顔写真 |
| `interviewDate` | 取材日 | 日付 | - | |
| `tags` | タグ | 複数選択フィールド | - | ナレッジ記事と同じタグ群 |
| `publishedAt` | 公開日 | 日時 | ✅ | |
| `updatedAt` | 更新日 | 日時 | ✅ | |

---

## API 3：事例（case-study）※Phase 2以降

### API設定

```
■ API名：事例
■ エンドポイント：case-study
■ APIの型：リスト形式
```

### フィールド設計

| フィールドID | フィールド名 | 種類 | 必須 | 説明 |
|---|---|---|---|---|
| `title` | タイトル | テキストフィールド | ✅ | 事例タイトル |
| `slug` | スラッグ | テキストフィールド | ✅ | URL用 |
| `description` | 概要 | テキストエリア | ✅ | メタディスクリプション用 |
| `clientName` | クライアント名 | テキストフィールド | ✅ | 例：一般財団法人 家電製品協会 |
| `clientType` | クライアント種別 | セレクトフィールド | ✅ | 業界団体/公益法人/一般財団法人/一般社団法人/NPO/行政 |
| `industry` | 業界 | テキストフィールド | - | 例：家電業界 |
| `legalContext` | 法律的背景 | テキストフィールド | - | 例：家電リサイクル法 |
| `period` | 取り組み期間 | テキストフィールド | - | 例：2022年〜継続中 |
| `targetAudience` | 主な対象 | テキストフィールド | - | 例：若年層（10代〜20代） |
| `videoUrl` | 動画URL | テキストフィールド | - | YouTube or Vimeo埋め込みURL |
| `thumbnail` | アイキャッチ画像 | 画像 | ✅ | サムネイル |
| `background` | 背景・課題 | リッチエディタ | ✅ | 物語型の本文 |
| `approach` | 取り組み内容 | リッチエディタ | ✅ | 4ブロック構成の本文 |
| `result` | 成果 | リッチエディタ | ✅ | 数値とストーリー |
| `keyMetric` | 成果ハイライト | テキストフィールド | - | 例：視聴完了率3倍 |
| `clientComments` | クライアントの声 | 繰り返しフィールド | - | コメント文 + 発言者名 |
| `interviewSlug` | 紐づくインタビュー記事のスラッグ | テキストフィールド | - | /interview/[slug]/ への遷移用 |
| `publishedAt` | 公開日 | 日時 | ✅ | |
| `updatedAt` | 更新日 | 日時 | ✅ | |

### Phase 1 では、家電製品協会様の事例は静的なページで実装してOK
（Next.jsのページ内に直接コンテンツを記述）。Phase 2以降、複数事例が増えたらmicroCMS化を検討。

---

## microCMS の環境変数

`.env.local` に以下を設定：

```
# microCMS
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

### Vercel 環境変数の設定

Vercel ダッシュボードの Environment Variables で、上記2つを登録：
- `MICROCMS_SERVICE_DOMAIN`
- `MICROCMS_API_KEY`

---

## Next.js での microCMS 連携

### ライブラリのインストール

```bash
npm install microcms-js-sdk
```

### クライアント設定

```typescript
// lib/microcms.ts
import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
})

// 型定義
export type KnowledgeArticle = {
  id: string
  title: string
  slug: string
  description: string
  content: string
  thumbnail: { url: string; width: number; height: number }
  category: { id: string; name: string }
  tags?: { id: string; name: string }[]
  author?: string
  publishedAt: string
  updatedAt: string
}

export type InterviewArticle = {
  id: string
  title: string
  slug: string
  description: string
  content: string
  thumbnail: { url: string; width: number; height: number }
  interviewee: string
  intervieweeRole?: string
  intervieweePhoto?: { url: string; width: number; height: number }
  interviewDate?: string
  tags?: { id: string; name: string }[]
  publishedAt: string
  updatedAt: string
}
```

### データ取得関数の例

```typescript
// lib/api.ts
import { client } from './microcms'

// ナレッジ記事一覧の取得
export async function getKnowledgeList(limit = 10) {
  return await client.getList<KnowledgeArticle>({
    endpoint: 'knowledge',
    queries: { limit, orders: '-publishedAt' },
  })
}

// ナレッジ記事の個別取得
export async function getKnowledgeBySlug(slug: string) {
  const data = await client.getList<KnowledgeArticle>({
    endpoint: 'knowledge',
    queries: { filters: `slug[equals]${slug}`, limit: 1 },
  })
  return data.contents[0]
}

// インタビュー記事一覧
export async function getInterviewList(limit = 10) {
  return await client.getList<InterviewArticle>({
    endpoint: 'interview',
    queries: { limit, orders: '-publishedAt' },
  })
}

// インタビュー記事個別
export async function getInterviewBySlug(slug: string) {
  const data = await client.getList<InterviewArticle>({
    endpoint: 'interview',
    queries: { filters: `slug[equals]${slug}`, limit: 1 },
  })
  return data.contents[0]
}
```

---

## 記事執筆のワークフロー

```
1. microCMS 管理画面にログイン
2. 「ナレッジ記事」または「インタビュー記事」のAPIを開く
3. 「追加」ボタンで新規作成
4. 各フィールドに入力
　 ・タイトル
　 ・スラッグ（URL用、英数字とハイフン）
　 ・記事の説明（メタディスクリプション）
　 ・本文（リッチエディタで書く）
　 ・アイキャッチ画像をアップロード
　 ・カテゴリ・タグを選択
5. 「下書き保存」または「公開」
6. 公開後、自動的にサイトに反映
　 ※ Next.jsの再ビルドが必要な場合あり（後述）
```

---

## Webhook 設定（推奨）

microCMSで記事を公開した時に、Vercelで自動的に再ビルドする設定：

```
1. Vercel ダッシュボード > Settings > Git
2. 「Deploy Hooks」で新規Webhook URLを生成
3. microCMS ダッシュボード > API設定 > Webhook
4. Vercelで生成したURLを登録
5. トリガー：「コンテンツの公開時」「コンテンツの更新時」
```

これで、microCMSで記事を公開・更新すると、自動的にVercelで再ビルドされ、サイトに反映されます。

---

## ISR（Incremental Static Regeneration）の活用

Next.jsの ISR を使うと、Webhookなしでも定期的に記事を再取得できます：

```typescript
// app/knowledge/[slug]/page.tsx
export const revalidate = 3600  // 1時間ごとに再生成
```

---

## オープン時に用意する記事

オープン時に最低限用意する記事：

```
■ ナレッジ記事（3本）
　・記事A：義務系広報が「伝わってる実感がない」3つの理由
　・記事B：「自分事化」を促す啓発広報の構造的アプローチ
　・記事C：法改正タイミングで活用したい啓発広報の組み立て方

■ インタビュー記事（1本）
　・家電製品協会 三善徹様のインタビュー
　　「届けたかった世代に、ちゃんと届いた」
```

各記事の本文は別途執筆します（このパッケージには含まれません）。
オープン後でも段階的に追加可能。
