import { Award, Bookmark, Printer, Save, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { useAuth } from '../context/AuthContext'

function AdmissionPage() {
  const { user } = useAuth()

  const handlePrint = () => {
    window.print()
  }

  return (
    <PageShell
      eyebrow="Admission Letter"
      title="电子录取通知书"
      description="果果大学以正式、完整的入学礼遇欢迎每一位学生。以下通知书信息根据当前登录身份自动生成。"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="relative mx-auto max-w-5xl"
      >
        <div className="absolute left-10 top-8 hidden h-20 w-20 rounded-full border border-gold/25 bg-white/75 md:block" />
        <div className="absolute bottom-12 right-12 hidden h-24 w-24 rounded-full border border-sage/25 bg-white/75 md:block" />
        <div className="rounded-[38px] border border-[#dbc89d] bg-[linear-gradient(180deg,#fffdf8,rgba(249,243,231,0.98))] p-3 shadow-panel">
          <div className="rounded-[30px] border border-[#d9c38c] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,250,240,0.96))] px-7 py-9 md:px-12 md:py-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d8be7f] bg-white shadow-soft">
                <Award className="h-9 w-9 text-[#8c6b2f]" strokeWidth={1.8} />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.45em] text-[#8f6b30]">Guoguo University</p>
              <h2 className="mt-4 font-serif-display text-4xl text-[#6f4e1d] md:text-5xl">果果大学录取通知书</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#6b5a3d]">
                经果果大学招生委员会审议，并报学校备案，现正式通知你已被录取，将于 2026 年春季学期入读本校。
              </p>
            </div>

            <div className="mt-10 grid gap-5 rounded-[28px] border border-[#e7dbc0] bg-white/80 p-6 md:grid-cols-2 md:p-8">
              <div>
                <p className="text-sm tracking-[0.22em] text-[#927444]">学生姓名</p>
                <p className="mt-2 font-serif-display text-4xl text-[#5e4320]">{user.displayName}</p>
              </div>
              <div>
                <p className="text-sm tracking-[0.22em] text-[#927444]">录取书院</p>
                <p className="mt-2 text-2xl text-[#5e4320]">{user.college}</p>
              </div>
              <div>
                <p className="text-sm tracking-[0.22em] text-[#927444]">录取学院</p>
                <p className="mt-2 text-2xl text-[#5e4320]">{user.academy}</p>
              </div>
              <div>
                <p className="text-sm tracking-[0.22em] text-[#927444]">录取专业</p>
                <p className="mt-2 text-2xl text-[#8e2c2c]">{user.major}</p>
              </div>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-[1.12fr_0.88fr]">
              <div className="rounded-[28px] bg-[#fffaf0] p-6">
                <div className="flex items-center gap-3">
                  <Bookmark className="h-5 w-5 text-[#8f6b30]" />
                  <p className="text-sm uppercase tracking-[0.3em] text-[#927444]">Welcome Note</p>
                </div>
                <p className="mt-4 text-base leading-8 text-[#6b5a3d]">{user.welcome}</p>
                <p className="mt-5 text-base leading-8 text-[#6b5a3d]">
                  愿你在书院长廊、图书馆灯光与校园晚风中，拥有被郑重欢迎的开始，也拥有值得慢慢珍藏的以后。
                </p>
              </div>

              <div className="rounded-[28px] border border-dashed border-[#dabd86] bg-white/78 p-6">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-[#8f6b30]" />
                  <p className="text-sm uppercase tracking-[0.3em] text-[#927444]">Official Record</p>
                </div>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[#6b5a3d]">
                  <p>录取结论：已被果果大学正式录取</p>
                  <p>校训：澄明、恒心、温柔、共赴远方</p>
                  <p>签发日期：2026 年 03 月 16 日</p>
                  <p>学校署名：果果大学招生委员会</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <p className="font-serif-display text-2xl text-[#5e4320]">果果大学</p>
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-double border-[#b83c3c] text-center text-sm leading-5 text-[#b83c3c]">
                    招生
                    <br />
                    专印
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 print:hidden">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded-full bg-[#7a5930] px-6 py-3 text-sm tracking-[0.16em] text-white transition hover:scale-[1.02]"
              >
                <Printer className="h-4 w-4" />
                打印通知书
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-[#d3bb8a] bg-white px-6 py-3 text-sm tracking-[0.16em] text-[#7a5930] transition hover:scale-[1.02]"
              >
                <Save className="h-4 w-4" />
                保存录取页
              </button>
              <Link
                to="/"
                className="rounded-full border border-[#d3bb8a] bg-[#fff7e8] px-6 py-3 text-sm tracking-[0.16em] text-[#7a5930] transition hover:scale-[1.02]"
              >
                返回校园首页
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </PageShell>
  )
}

export default AdmissionPage
