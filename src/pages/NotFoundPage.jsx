import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'

function NotFoundPage() {
  return (
    <PageShell
      eyebrow="404"
      title="这条校园道路暂未开放"
      description="页面不存在，或许可以回到果果大学首页重新出发。"
    >
      <Link
        to="/"
        className="inline-flex rounded-full bg-ink px-7 py-4 text-sm tracking-[0.18em] text-white transition hover:scale-[1.02]"
      >
        返回首页
      </Link>
    </PageShell>
  )
}

export default NotFoundPage
