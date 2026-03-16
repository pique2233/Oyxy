import { BookOpenText, BriefcaseBusiness, Cpu, MicVocal, Newspaper, Palette, University } from 'lucide-react'
import PageShell from '../components/PageShell'
import SectionCard from '../components/SectionCard'
import { colleges, programs } from '../data/siteData'

const programIcons = {
  计算机科学与技术: Cpu,
  工商管理: BriefcaseBusiness,
  汉语言文学: BookOpenText,
  音乐学: MicVocal,
  视觉传达设计: Palette,
  金融学: University,
  新闻与传播学: Newspaper,
}

function AcademicsPage() {
  return (
    <PageShell
      eyebrow="Colleges & Programs"
      title="书院制度与专业培养"
      description="果果大学采用书院生活与学院培养并行的结构。书院负责日常陪伴、通识氛围与社群归属，学院负责专业课程、学术训练与成长路径。"
    >
      <div className="grid gap-6 xl:grid-cols-3">
        {colleges.map((college) => (
          <SectionCard key={college.name} className="border-gold/10">
            <p className="text-sm uppercase tracking-[0.28em] text-apple-red/75">{college.english}</p>
            <h2 className="mt-3 font-serif-display text-3xl text-ink">{college.name}</h2>
            <p className="mt-4 text-sm leading-7 text-ink/64">{college.theme}</p>
            <div className="mt-6 rounded-[24px] bg-oat px-5 py-5">
              <p className="text-xs uppercase tracking-[0.24em] text-ink/40">书院生活</p>
              <p className="mt-3 text-sm leading-7 text-ink/62">{college.life}</p>
            </div>
          </SectionCard>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <SectionCard>
          <p className="text-sm uppercase tracking-[0.3em] text-apple-red/80">录取示例</p>
          <div className="mt-6 space-y-5">
            <div className="rounded-[24px] border border-gold/15 bg-white px-5 py-5">
              <p className="text-sm text-ink/40">欧阳欣怡</p>
              <p className="mt-2 text-xl text-ink">清岚书院 · 音乐学</p>
              <p className="mt-2 text-sm leading-7 text-ink/58">录取至人文与艺术学院培养，书院生活侧重审美修养与艺术表达。</p>
            </div>
            <div className="rounded-[24px] border border-gold/15 bg-white px-5 py-5">
              <p className="text-sm text-ink/40">李梓闻</p>
              <p className="mt-2 text-xl text-ink">知遥书院 · 计算机科学与技术</p>
              <p className="mt-2 text-sm leading-7 text-ink/58">录取至信息科学学院培养，书院生活强调理性思辨与长期主义。</p>
            </div>
          </div>
        </SectionCard>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => {
            const Icon = programIcons[program.name]
            return (
              <SectionCard key={program.name} className="border-gold/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-oat">
                  <Icon className="h-6 w-6 text-ink" strokeWidth={1.8} />
                </div>
                <p className="mt-6 text-2xl text-ink">{program.name}</p>
                <p className="mt-2 text-sm text-apple-red/78">{program.school}</p>
                <p className="mt-4 text-sm leading-7 text-ink/60">{program.desc}</p>
              </SectionCard>
            )
          })}
        </div>
      </div>
    </PageShell>
  )
}

export default AcademicsPage
