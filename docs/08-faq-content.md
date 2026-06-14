# 08. FAQ全9問の質問と回答

啓発広報ラボのFAQセクション（または会社概要に統合）に掲載するQ&A。
このFAQは構造化データ（FAQPage）として実装することで、AI検索エンジンに引用されやすくなります。

---

## 配置場所

```
■ 案1：FAQ専用ページ（/faq/）
■ 案2：会社概要ページ内のFAQセクション（推奨）
■ 案3：トップページ下部のFAQセクション
```

Claude Code に判断を任せる場合、最も自然なのは**会社概要ページに統合**することです。
（理由：単独のFAQページを作るほどボリュームがない、他ページからのリンクも自然）

---

## Q1. 啓発広報ラボはどんなサービスを提供していますか？

**回答：**
業界団体・公益法人・一般社団法人の啓発広報を、伴走支援・企画設計・制作運用の3つでサポートします。成果定義から効果検証まで一貫してご提供します。

---

## Q2. どのような団体が対象ですか？

**回答：**
業界団体・公益法人・一般財団法人・一般社団法人・NPO・行政の啓発広報担当者の方々を主な対象としています。法律・自主規制に紐づく啓発活動を行う団体に強みがあります。

---

## Q3. 制作以外の支援もしてもらえますか？

**回答：**
はい。制作物の納品で終わらず、SNS広告の運用・キャンペーンの設計・効果測定レポートまで、伴走で継続的に支援します。「作って終わり」ではなく、「届くまで」を一緒に考えます。

---

## Q4. 相談だけでも可能ですか？

**回答：**
はい。「何から相談すればいいか分からない」段階からお受けします。まずは現状をお聞かせください。お問い合わせフォームからお気軽にご連絡ください。

---

## Q5. 費用はどのくらいかかりますか？

**回答：**
ご相談内容によって変わるため、お見積もりはお問い合わせいただいた後にご提案いたします。スポット制作から年間契約まで、ご予算に合わせた提案が可能です。

---

## Q6. どのくらいの期間で制作できますか？

**回答：**
パラパラ漫画動画の場合、企画から納品まで3ヶ月が目安です。SNS運用は継続契約となります。スケジュールに合わせた進行が可能ですので、お気軽にご相談ください。

---

## Q7. 業界団体の啓発広報で、よくある課題は何ですか？

**回答：**
「やっているのに伝わってる手応えがない」「成果をどう測ればいいか分からない」といった課題を、担当者の方からよく伺います。

---

## Q8. アトムストーリーと啓発広報ラボの関係は？

**回答：**
啓発広報ラボは、株式会社アトムストーリーが運営しています。アトムストーリーは2013年創業、ストーリーマーケティングを軸に企業ブランディングを支援するマーケティング会社です。500社以上のパラパラ漫画ムービー制作実績を持ちます。

---

## Q9. 取材を受けてもらうことはできますか？

**回答：**
はい、業界団体・公益法人などで啓発広報に取り組まれている団体への取材を行っています。取材内容を伺った上で、啓発広報ラボの掲載方針と合うかを確認させていただき、個別に詳細をご相談いたします。お問い合わせフォームよりお気軽にご連絡ください。

---

## デザイン仕様

### 表示方法

```
■ アコーディオン形式（推奨）
　・質問をクリック/タップで回答が展開
　・複数同時に開ける or 1つずつ
　・スマホで省スペース

■ または全展開表示
　・すべての質問と回答を最初から表示
　・縦に並べる
　・スクロールで読む
```

### スタイル

```
■ 質問
　・フォント：Noto Sans JP Bold
　・サイズ：18px（PC）/ 16px（スマホ）
　・色：ネイビー（#1E3A5F）
　・接頭辞：「Q. 」（マスタード色）

■ 回答
　・フォント：Noto Sans JP Regular
　・サイズ：16px（PC）/ 15px（スマホ）
　・色：濃いグレー（#2B2B2B）
　・接頭辞：「A. 」または インデント

■ 区切り
　・各Q&Aの間に1pxのライトグレー罫線
　・パディング：上下24px

■ アコーディオン時
　・展開アイコン：+ → ×
　・トランジション：0.2〜0.3秒
　・ホバー時：背景が薄いベージュ（#FAF8F2）
```

### React コンポーネント例

```tsx
// components/FAQ.tsx
'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: '啓発広報ラボはどんなサービスを提供していますか？',
    answer: '業界団体・公益法人・一般社団法人の啓発広報を、伴走支援・企画設計・制作運用の3つでサポートします。成果定義から効果検証まで一貫してご提供します。',
  },
  // ... 残り8問
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-navy mb-8">
        よくあるご質問
      </h2>
      <dl className="border-t border-border">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-border">
            <dt>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-start text-left hover:bg-cream transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-navy pr-4">
                  <span className="text-mustard mr-2">Q.</span>
                  {faq.question}
                </span>
                <span className="text-mustard text-xl flex-shrink-0">
                  {openIndex === index ? '×' : '+'}
                </span>
              </button>
            </dt>
            <dd
              className={`overflow-hidden transition-all ${
                openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}
            >
              <p className="text-text leading-relaxed pl-6">
                <span className="text-mustard mr-2 font-bold">A.</span>
                {faq.answer}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
```

---

## 構造化データ（FAQPage）

FAQセクションを実装する際は、必ず以下のJSON-LDを同じページに含めること。

詳細は `06-structured-data.md` の「6. FAQPage」を参照。
