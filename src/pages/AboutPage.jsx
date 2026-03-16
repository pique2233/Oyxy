import PageShell from '../components/PageShell'
import SectionCard from '../components/SectionCard'

const paragraphs = [
  '果果大学创设于一片宁静开阔的校园想象之中，建筑以奶白石材、暖灰金属与柔和林木共同构成秩序感。学校坚持“正式而温柔”的校园精神，在严谨的学术气质里保留对陪伴、成长与记忆的珍视。',
  '学校相信，真正值得被收藏的大学时光，不只是成绩单与钟楼剪影，也包括一起走过的林荫路、图书馆里的安静夜晚，以及那些被细心命名的日常。',
  '因此，果果大学将苹果园与小羊草坪作为校园象征。苹果代表成熟、清新与四季轮转，小羊则提醒人们，在奔赴未来时，也要允许自己保持柔软。',
]

function AboutPage() {
  return (
    <PageShell
      eyebrow="About Guoguo University"
      title="一所拥有仪式感，也允许温柔发生的大学"
      description="果果大学以正式校园的秩序为骨架，以青春纪念的情感为底色，让每一次相遇都有被郑重书写的资格。"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionCard className="space-y-5">
          {paragraphs.map((text) => (
            <p key={text} className="text-base leading-8 text-ink/68">
              {text}
            </p>
          ))}
        </SectionCard>
        <SectionCard>
          <p className="text-sm uppercase tracking-[0.32em] text-apple-red/80">University Profile</p>
          <div className="mt-6 space-y-5">
            {[
              ['学校性质', '综合性纪念主题大学'],
              ['校园风格', '正式、清新、温柔、克制可爱'],
              ['标志景观', '苹果园、小羊草坪、钟楼广场'],
              ['办学愿景', '让青春与未来都拥有值得珍藏的校名'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-start justify-between gap-6 border-b border-gold/15 pb-4">
                <span className="text-sm text-ink/42">{label}</span>
                <span className="text-right text-base text-ink">{value}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['校训', '澄明、恒心、温柔、共赴远方'],
          ['建校理念', '把喜欢与成长安放进有秩序的校园里。'],
          ['校园精神', '自持、明亮、认真生活，也认真爱人。'],
          ['办学特色', '正式官网视觉与青春纪念叙事结合。'],
        ].map(([title, content]) => (
          <SectionCard key={title}>
            <p className="text-sm uppercase tracking-[0.26em] text-ink/40">{title}</p>
            <p className="mt-4 text-lg leading-8 text-ink">{content}</p>
          </SectionCard>
        ))}
      </div>
    </PageShell>
  )
}

export default AboutPage
