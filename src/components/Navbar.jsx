import { AnimatePresence, motion } from 'framer-motion'
import { Apple, Menu, ShieldCheck, Sprout, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const baseNav = [
  { to: '/', label: '首页' },
  { to: '/about', label: '学校介绍' },
  { to: '/campus', label: '校园生活' },
  { to: '/academics', label: '书院与专业' },
]

function linkClass({ isActive }) {
  return `transition-colors duration-300 ${
    isActive ? 'text-apple-red' : 'text-ink/75 hover:text-ink'
  }`
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const authNav = user
    ? [
        ...baseNav,
        { to: '/album', label: '共享相册' },
        { to: '/admission', label: '录取通知书' },
      ]
    : [...baseNav, { to: '/login', label: '学生登录' }]

  const handleLogout = () => {
    logout()
    setOpen(false)
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/65 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-white shadow-soft">
            <div className="relative">
              <Apple className="h-5 w-5 text-apple-red" strokeWidth={1.8} />
              <Sprout className="absolute -bottom-1 -right-2 h-3.5 w-3.5 text-sage" strokeWidth={1.8} />
            </div>
          </div>
          <div>
            <p className="font-serif-display text-2xl tracking-[0.18em] text-ink">果果大学</p>
            <p className="text-[11px] uppercase tracking-[0.32em] text-ink/45">Guoguo University</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {authNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          {user && (
            <>
              <span className="rounded-full border border-sage/40 bg-sage/10 px-4 py-2 text-sm text-ink">
                当前学生：{user.displayName}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-apple-red/20 px-4 py-2 text-sm text-apple-red transition hover:bg-apple-red hover:text-white"
              >
                退出登录
              </button>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-white/80 lg:hidden"
          aria-label="切换菜单"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/50 bg-white/92 px-6 py-5 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {authNav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              {user && (
                <>
                  <div className="rounded-2xl border border-sage/40 bg-sage/10 px-4 py-3 text-sm text-ink">
                    <span className="inline-flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-sage" />
                      当前学生：{user.displayName}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-2xl border border-apple-red/20 px-4 py-3 text-left text-sm text-apple-red"
                  >
                    退出登录
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
