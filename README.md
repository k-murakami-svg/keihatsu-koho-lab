# 啓発広報ラボ Webサイト

業界団体・公益法人・一般社団法人の啓発広報を支援する専門メディア兼サービスサイトです。

## 開発

```bash
npm install
npm run dev
```

ローカル確認URL:

```text
http://localhost:3000
```

## 主なページ

- `/`
- `/service/`
- `/case/`
- `/case/kaden-seihin-kyokai/`
- `/knowledge/`
- `/knowledge/[slug]/`
- `/interview/`
- `/interview/[slug]/`
- `/about/`
- `/message/`
- `/contact/`
- `/privacy/`

## 環境変数

`.env.local` はGitに含めません。Vercelでは以下をEnvironment Variablesに設定します。

```env
MICROCMS_SERVICE_DOMAIN=keihatsu-koho-lab
MICROCMS_API_KEY=
RESEND_API_KEY=
CONTACT_TO_EMAIL=info-atom@atom-story.com
CONTACT_FROM_EMAIL=contact@keihatsu-koho-lab.jp
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 外部サービス

- microCMS: `knowledge`, `interview`
- Resend: お問い合わせフォーム送信・自動返信
- Vercel: ホスティング
- Xserver: 独自ドメインDNS管理

## 確認コマンド

```bash
npm run lint
npx tsc --noEmit
```

本番ビルド確認:

```bash
npm run build
```

開発サーバー起動中にビルド確認を行うと `.next` の一時ファイルが競合する場合があります。その場合は `Control + C` で停止し、`rm -rf .next` の後に `npm run dev` で再起動します。
