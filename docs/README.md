# 啓発広報ラボ Webサイト 実装パッケージ

このパッケージは、啓発広報ラボWebサイトをClaude Codeで実装するための、すべての仕様書を統合したものです。

---

## 📋 ファイル構成

```
01-project-overview.md       プロジェクト概要・目的・技術スタック
02-design-system.md          デザインシステム（配色・タイポ・UIパーツの数値仕様）
03-page-copy-top.md          トップページ文言（9セクション分）
04-page-copy-other.md        他ページ文言（サービス・事例・代表メッセージ等）
05-seo-geo-config.md         SEO/GEO設計（キーワード・メタ情報・OGP）
06-structured-data.md        構造化データ（JSON-LD 7種類のコード）
07-microcms-schema.md        microCMSのスキーマ設計
08-faq-content.md            FAQ全9問の質問と回答
09-implementation-steps.md   実装手順（Phase 1〜3）
10-claude-code-prompt.md     Claude Codeへの実装依頼プロンプト本体
```

---

## 🚀 Claude Codeでの使い方

### Step 1：プロジェクトディレクトリの準備

```bash
# 任意の場所でプロジェクトディレクトリを作成
mkdir keihatsu-koho-lab
cd keihatsu-koho-lab

# このMDパッケージをコピー
mkdir docs
cp /path/to/md-package/*.md docs/
```

### Step 2：Claude Codeで実装依頼

```bash
# Claude Codeを起動
claude

# 以下のように依頼
「docs/フォルダにある仕様書を読んでから、
啓発広報ラボWebサイトをNext.js + microCMSで実装してください。
docs/10-claude-code-prompt.md を最初に読んで、
全体を把握してください」
```

### Step 3：段階的な実装

Claude Codeは以下のフェーズで実装します：

```
Phase 1：基本ページ
　・トップページ
　・サービスページ
　・事例詳細ページ
　・お問い合わせフォーム

Phase 2：追加ページ
　・会社概要
　・代表メッセージ
　・ナレッジ・インタビュー記事

Phase 3：SEO/GEO対策
　・構造化データ全7種類
　・メタ情報の個別設定
　・サイトマップ・robots.txt
　・GA4・Search Console連携
```

---

## ⚙️ 事前準備

Claude Codeに依頼する前に、以下のアカウント・契約を準備してください：

```
■ 必須
　・microCMSアカウント（無料プランで開始可）
　　https://microcms.io/
　
　・Vercelアカウント（無料プランで開始可）
　　https://vercel.com/
　
　・ドメイン取得（keihatsu-koho-lab.jp）
　　お名前.com、ムームードメイン等で取得

■ 推奨
　・Google アナリティクス4（GA4）
　・Google Search Console
　・Resend（お問い合わせフォーム送信用、Vercel連携が簡単）
```

---

## 📁 別途必要な素材

仕様書だけでは作れない、別途用意が必要な素材：

```
■ 画像素材
　・ロゴ画像（logo.png / SVG）
　・OGP画像（1200×630px）
　・ヒーロー背景イラスト
　・3つの支援セクションのアイコン
　・手描き風イラスト（あしらい用）
　・家電製品協会様のパラパラ漫画動画埋め込みURL（YouTube等）
　・三善様のインタビュー写真

■ ChatGPTで生成中
　・デザインモックアップ画像
　　→ Claude Codeに渡す参考素材として
```

---

## 🔧 技術スタック

```
■ フロントエンド
　・Next.js（App Router、最新の安定版 14.x）
　・React 18
　・Tailwind CSS

■ コンテンツ管理
　・microCMS（ヘッドレスCMS）

■ ホスティング
　・Vercel

■ ドメイン
　・keihatsu-koho-lab.jp

■ 連携サービス
　・Googleアナリティクス（GA4）
　・Google Search Console
　・Resend または Formspree（フォーム送信）
```

---

## 📚 関連資料（参考用）

このパッケージ以外に、人が見るための資料が別途あります：

```
■ pptx/PDF形式の資料（人間が見る用）
　・keihatsu-koho-lab-top-copy.pdf
　・keihatsu-koho-lab-other-pages-copy.pdf
　・keihatsu-koho-lab-design-guide.pdf
　・keihatsu-koho-lab-color-samples.pdf
　・keihatsu-koho-lab-typo-samples.pdf
　・keihatsu-koho-lab-seo-geo-guide.pdf
```

これらはClaude Codeに渡す必要はありません。MDファイルの方が実装時の精度が高いためです。

---

## 🎯 サイトの最終ゴール

```
■ 短期目標（〜2026年9月）
　・サイトオープン
　・月50件の啓蒙系団体への能動アプローチ開始

■ 中期目標（〜2026年10月末）
　・半年で啓蒙領域の新規受注3件

■ 長期目標（〜2029年）
　・3年で新規20社契約
　・年間売上約6,500万円（継続収益積み上げベース）
```

---

## 📝 運営

```
運営：株式会社アトムストーリー
代表：村上 賢太
所在地：東京都港区南青山3丁目1番36号 青山丸竹ビル6F
姉妹サイト：atom-story.com / parapara-manga.com
```

---

## 🆘 トラブル時

Claude Codeの実装中に問題が起きた場合：

1. まず該当する仕様書（01〜10のMDファイル）を読み返す
2. それでも解決しない場合、新しいClaude Code セッションで質問
3. または、Claude（Chat）で「啓発広報ラボの実装で〇〇に困っています」と相談

---

最終更新：2026年6月
