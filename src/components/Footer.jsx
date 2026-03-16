function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/60 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-3 lg:px-10">
        <div>
          <p className="font-serif-display text-2xl text-ink">果果大学</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-ink/65">
            一所把正式感、陪伴感与成长纪念感认真放在一起的校园。愿每一次抬头，都能看见未来与温柔。
          </p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-ink/40">Campus Motto</p>
          <p className="mt-3 text-lg text-ink">澄明、恒心、温柔、共赴远方</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-ink/40">Closing Note</p>
          <p className="mt-3 text-sm leading-7 text-ink/65">
            Copyright © 2026 Guoguo University. Crafted for a gentle admission season.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
