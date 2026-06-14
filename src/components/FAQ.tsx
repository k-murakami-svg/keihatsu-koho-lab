'use client'

import { useState } from 'react'

const faqs = [
  {
    question: '啓発広報ラボはどんなサービスを提供していますか？',
    answer:
      '業界団体・公益法人・一般社団法人の啓発広報を、伴走支援・企画設計・制作運用の3つでサポートします。成果定義から効果検証まで一貫してご提供します。',
  },
  {
    question: 'どのような団体が対象ですか？',
    answer:
      '業界団体・公益法人・一般財団法人・一般社団法人・NPO・行政の啓発広報担当者の方々を主な対象としています。法律・自主規制に紐づく啓発活動を行う団体に強みがあります。',
  },
  {
    question: '制作以外の支援もしてもらえますか？',
    answer:
      'はい。制作物の納品で終わらず、SNS広告の運用・キャンペーンの設計・効果測定レポートまで、伴走で継続的に支援します。「作って終わり」ではなく、「届くまで」を一緒に考えます。',
  },
  {
    question: '相談だけでも可能ですか？',
    answer:
      'はい。「何から相談すればいいか分からない」段階からお受けします。まずは現状をお聞かせください。お問い合わせフォームからお気軽にご連絡ください。',
  },
  {
    question: '費用はどのくらいかかりますか？',
    answer:
      'ご相談内容によって変わるため、お見積もりはお問い合わせいただいた後にご提案いたします。スポット制作から年間契約まで、ご予算に合わせた提案が可能です。',
  },
  {
    question: 'どのくらいの期間で制作できますか？',
    answer:
      'パラパラ漫画動画の場合、企画から納品まで3ヶ月が目安です。SNS運用は継続契約となります。スケジュールに合わせた進行が可能ですので、お気軽にご相談ください。',
  },
  {
    question: '業界団体の啓発広報で、よくある課題は何ですか？',
    answer:
      '「やっているのに伝わってる手応えがない」「成果をどう測ればいいか分からない」といった課題を、担当者の方からよく伺います。',
  },
  {
    question: 'アトムストーリーと啓発広報ラボの関係は？',
    answer:
      '啓発広報ラボは、株式会社アトムストーリーが運営しています。アトムストーリーは2013年創業、ストーリーマーケティングを軸に企業ブランディングを支援するマーケティング会社です。500社以上のパラパラ漫画ムービー制作実績を持ちます。',
  },
  {
    question: '取材を受けてもらうことはできますか？',
    answer:
      'はい、業界団体・公益法人などで啓発広報に取り組まれている団体への取材を行っています。取材内容を伺った上で、啓発広報ラボの掲載方針と合うかを確認させていただき、個別に詳細をご相談いたします。お問い合わせフォームよりお気軽にご連絡ください。',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="mx-auto max-w-3xl">
      <dl className="border-t border-border">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="border-b border-border">
            <dt>
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-200 hover:bg-cream"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-bold leading-[1.7] text-navy md:text-lg">
                  <span className="mr-2 text-mustard">Q.</span>
                  {faq.question}
                </span>
                <span className="flex-none text-xl font-bold text-mustard">
                  {openIndex === index ? '×' : '+'}
                </span>
              </button>
            </dt>
            <dd
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}
            >
              <p className="pl-1 text-[15px] leading-body text-text md:pl-6 md:text-base">
                <span className="mr-2 font-bold text-mustard">A.</span>
                {faq.answer}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export { faqs }
