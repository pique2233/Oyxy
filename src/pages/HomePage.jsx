import { motion } from 'framer-motion'
import { Apple, BookOpen, Leaf, ShieldCheck, Trees } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import SectionCard from '../components/SectionCard'
import { notices, values } from '../data/siteData'

const campusHighlights = [
  { title: '苹果园', subtitle: '四季风景', icon: Apple },
  { title: '小羊草坪', subtitle: '治愈角落', icon: Leaf },
  { title: '中央图书馆', subtitle: '秩序与安静', icon: BookOpen },
  { title: '林荫小路', subtitle: '青春纪念', icon: Trees },
]

function HomePage() {
  return (
    <PageShell>
      <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex rounded-full border border-gold/50 bg-white/75 px-4 py-2 text-xs uppercase tracking-[0.32em] text-ink/55"
          >
            Admission Season 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-serif-display text-5xl leading-[1.05] text-ink md:text-7xl"
          >
            果果大学
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 max-w-2xl text-xl leading-9 text-ink/68"
          >
            在正式校园的秩序里，收藏青春、陪伴与温柔成长。这里有苹果园的四季，也有小羊草坪的安静晚风。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/campus"
              className="rounded-full bg-ink px-7 py-4 text-sm tracking-[0.18em] text-white transition duration-300 hover:scale-[1.02] hover:bg-ink/90"
            >
              探索校园
            </Link>
            <Link
              to="/login"
              className="rounded-full border border-apple-red/25 bg-white/70 px-7 py-4 text-sm tracking-[0.18em] text-apple-red transition duration-300 hover:scale-[1.02] hover:bg-apple-red hover:text-white"
            >
              学生登录
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="relative"
        >
          <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-sage/35 blur-2xl" />
          <div className="absolute -right-4 top-0 h-36 w-36 rounded-full bg-apple-red/10 blur-2xl" />
          <div className="absolute bottom-10 left-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/60 bg-white/75 shadow-soft">
            <Leaf className="h-9 w-9 text-sage" />
          </div>
          <div className="absolute right-8 top-8 flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-white/75 shadow-soft">
            <Apple className="h-8 w-8 text-apple-red" />
          </div>
          <div className="relative overflow-hidden rounded-[38px] border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(242,236,225,0.76))] p-8 shadow-panel">
            <div className="rounded-[30px] border border-gold/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.65),rgba(232,241,231,0.8))] p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-ink/40">Campus Portrait</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {campusHighlights.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-[24px] border border-white/70 bg-white/70 p-5">
                      <Icon className="h-5 w-5 text-apple-red/80" />
                      <p className="text-lg text-ink">{item.title}</p>
                      <p className="mt-2 text-sm text-ink/55">{item.subtitle}</p>
                    </div>
                  )
                })}
              </div>
              <p className="mt-8 text-sm leading-7 text-ink/58">
                这里既像一所真正的大学官网，也像一份被认真制作的青春纪念册。
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <SectionCard>
          <p className="text-sm uppercase tracking-[0.34em] text-apple-red/80">Campus Principle</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {values.map((item) => (
              <div key={item.label} className="rounded-[24px] bg-oat px-5 py-6">
                <p className="text-sm text-ink/45">{item.label}</p>
                <p className="mt-3 text-lg leading-8 text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </SectionCard>
        <SectionCard>
          <p className="text-sm uppercase tracking-[0.34em] text-apple-red/80">校园公告栏</p>
          <div className="mt-5 space-y-4">
            {notices.map((notice) => (
              <div key={notice.title} className="rounded-[24px] border border-gold/25 bg-white px-5 py-5">
                <p className="text-xs uppercase tracking-[0.24em] text-ink/40">{notice.date}</p>
                <p className="mt-2 text-lg text-ink">{notice.title}</p>
                <p className="mt-2 text-sm leading-7 text-ink/58">{notice.content}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: '吉祥物档案',
            detail: '绵绵是学校常驻的小羊伙伴，象征温柔、陪伴与治愈。',
            icon: Leaf,
          },
          {
            title: '今日天气',
            detail: '晴，22°C，南风轻拂。适合散步、读书，也适合慢慢喜欢今天。',
            icon: ShieldCheck,
          },
          {
            title: '入学寄语',
            detail: '愿你在这里被认真欢迎，也愿你把每一步成长都走得从容。',
            icon: BookOpen,
          },
        ].map((item) => {
          const Icon = item.icon
          return (
            <SectionCard key={item.title}>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/20 text-2xl">
                  <Icon className="h-6 w-6 text-ink" />
                </div>
                <div>
                  <p className="text-xl text-ink">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-ink/58">{item.detail}</p>
                </div>
              </div>
            </SectionCard>
          )
        })}
      </section>
    </PageShell>
  )
}

export default HomePage
