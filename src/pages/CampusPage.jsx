import {
  Apple,
  Building2,
  Dumbbell,
  House,
  Lamp,
  Leaf,
  LibraryBig,
  Soup,
  Trees,
} from 'lucide-react'
import PageShell from '../components/PageShell'
import SectionCard from '../components/SectionCard'
import { campusSpots } from '../data/siteData'

const iconMap = {
  library: LibraryBig,
  building: Building2,
  track: Dumbbell,
  residence: House,
  canteen: Soup,
  path: Trees,
  lamp: Lamp,
  orchard: Apple,
  meadow: Leaf,
}

function CampusPage() {
  return (
    <PageShell
      eyebrow="Campus Life"
      title="校园生活与风景切面"
      description="以更接近正式大学官网的方式呈现校园场域。每一处空间都克制而完整，既有学术秩序，也保留了果果大学的温柔辨识度。"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {campusSpots.map((spot) => {
          const Icon = iconMap[spot.icon]
          return (
            <SectionCard key={spot.title} className="group relative overflow-hidden border-gold/10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sage/0 via-sage/60 to-apple-red/40 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-oat text-ink">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <span className="rounded-full border border-gold/15 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-ink/42">
                  {spot.tag}
                </span>
              </div>
              <p className="mt-7 text-2xl text-ink">{spot.title}</p>
              <p className="mt-3 text-sm leading-7 text-ink/60">{spot.desc}</p>
            </SectionCard>
          )
        })}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <SectionCard>
          <p className="text-sm uppercase tracking-[0.3em] text-apple-red/80">Campus Structure</p>
          <div className="mt-6 grid gap-4 rounded-[28px] bg-oat p-5 text-sm text-ink/65 md:grid-cols-2">
            {[
              '北区: 中央图书馆 / 白石教学楼',
              '南区: 晨光操场 / 晚霞路灯',
              '西区: 云朵食堂 / 月白宿舍',
              '东区: 苹果园 / 小羊草坪 / 林荫小路',
            ].map((item) => (
              <div key={item} className="rounded-[20px] bg-white px-4 py-4">
                {item}
              </div>
            ))}
          </div>
        </SectionCard>
        <SectionCard>
          <p className="text-sm uppercase tracking-[0.3em] text-apple-red/80">Campus Notes</p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-ink/62">
            <p>图书馆与教学楼构成学术轴线，苹果园与小羊草坪则负责留住校园温度。</p>
            <p>晚霞路灯是最具纪念感的场景之一，适合散步、合影，也适合把普通傍晚过得郑重一些。</p>
            <p>整个校园生活版块以统一图标呈现，保持官网感与视觉成熟度，不再依赖表情符号完成表达。</p>
          </div>
        </SectionCard>
      </div>
    </PageShell>
  )
}

export default CampusPage
