import { motion } from 'framer-motion'
import { Apple, BadgeCheck, Leaf, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { useAuth } from '../context/AuthContext'

function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from || '/admission'

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const result = login(form.username.trim(), form.password.trim())
    if (!result.success) {
      setError(result.message)
      return
    }
    navigate(from, { replace: true })
  }

  return (
    <PageShell eyebrow="Student Access" title="学生登录" description="欢迎回到果果大学，请输入你的学号身份信息开启入学仪式。">
      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="overflow-hidden rounded-[36px] border border-white/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.9),rgba(231,239,229,0.76))] p-8 shadow-panel"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-ink/40">Identity Hall</p>
          <h2 className="mt-4 font-serif-display text-4xl text-ink">欢迎进入果果大学</h2>
          <p className="mt-5 text-base leading-8 text-ink/62">
            登录后将开启专属录取仪式。纸张、印章、校徽与寄语都已经准备好，只等你的名字被郑重写上。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] bg-white/75 p-5">
              <Apple className="h-8 w-8 text-apple-red" />
              <p className="mt-3 text-lg text-ink">苹果徽章</p>
              <p className="mt-2 text-sm leading-7 text-ink/58">象征清新、成熟与被认真迎接的四季。</p>
            </div>
            <div className="rounded-[24px] bg-white/75 p-5">
              <Leaf className="h-8 w-8 text-sage" />
              <p className="mt-3 text-lg text-ink">小羊守望</p>
              <p className="mt-2 text-sm leading-7 text-ink/58">提醒每一位新生，成长也可以是温柔的。</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="rounded-[36px] border border-white/70 bg-white/86 p-8 shadow-soft backdrop-blur-sm"
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-oat text-2xl">
              <ShieldCheck className="h-7 w-7 text-ink" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-ink/38">Student Login</p>
              <p className="mt-2 text-2xl text-ink">身份验证</p>
            </div>
          </div>

          <label className="block">
            <span className="mb-3 block text-sm text-ink/55">用户名</span>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gold/20 bg-oat/70 px-5 py-4 outline-none transition focus:border-sage focus:bg-white"
              placeholder="请输入用户名"
            />
          </label>

          <label className="mt-5 block">
            <span className="mb-3 block text-sm text-ink/55">密码</span>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gold/20 bg-oat/70 px-5 py-4 outline-none transition focus:border-sage focus:bg-white"
              placeholder="请输入密码"
            />
          </label>

          {error && (
            <div className="mt-5 rounded-2xl border border-apple-red/15 bg-apple-red/8 px-4 py-3 text-sm text-apple-red">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-ink px-6 py-4 text-sm tracking-[0.18em] text-white transition duration-300 hover:scale-[1.01] hover:bg-ink/90"
          >
            开启入学仪式
          </button>

          <p className="mt-6 text-center text-sm leading-7 text-ink/48">
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-sage" />
              录取通知书将根据学生身份自动生成专属姓名、书院与专业信息。
            </span>
          </p>
        </motion.form>
      </div>
    </PageShell>
  )
}

export default LoginPage
