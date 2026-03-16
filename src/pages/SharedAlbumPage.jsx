import { ImagePlus, Images, Trash2, Upload } from 'lucide-react'
import { useRef, useState } from 'react'
import PageShell from '../components/PageShell'
import SectionCard from '../components/SectionCard'
import { useAlbum } from '../context/AlbumContext'
import { useAuth } from '../context/AuthContext'

function formatDate(dateString) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date(dateString))
}

function SharedAlbumPage() {
  const { user } = useAuth()
  const { photos, addPhoto, removePhoto } = useAlbum()
  const [form, setForm] = useState({ title: '', description: '' })
  const [preview, setPreview] = useState('')
  const [error, setError] = useState('')
  const fileRef = useRef(null)

  const handleTextChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setError('请上传图片文件。')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setPreview(String(reader.result || ''))
      setError('')
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!preview) {
      setError('请先选择一张图片。')
      return
    }

    addPhoto({
      imageUrl: preview,
      title: form.title.trim() || '未命名校园记忆',
      description: form.description.trim(),
      authorUsername: user.username,
      authorName: user.displayName,
    })

    setForm({ title: '', description: '' })
    setPreview('')
    setError('')
    if (fileRef.current) fileRef.current.value = ''
  }

  return (
    <PageShell
      eyebrow="Shared Album"
      title="校园共享相册"
      description="Jenny 与 Mark 登录后都可以上传、查看与共同保存校园记忆。所有内容仅保存在浏览器本地，但两个账号共享同一套前端相册池。"
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionCard className="border-gold/10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-oat">
              <Upload className="h-5 w-5 text-ink" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-apple-red/80">Upload Memory</p>
              <p className="mt-1 text-xl text-ink">上传新的校园记忆</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <label className="block">
              <span className="mb-3 block text-sm text-ink/55">图片标题</span>
              <input
                name="title"
                value={form.title}
                onChange={handleTextChange}
                className="w-full rounded-2xl border border-gold/20 bg-oat/70 px-5 py-4 outline-none transition focus:border-sage focus:bg-white"
                placeholder="例如：晚霞下的图书馆"
              />
            </label>
            <label className="block">
              <span className="mb-3 block text-sm text-ink/55">图片描述</span>
              <textarea
                name="description"
                value={form.description}
                onChange={handleTextChange}
                rows="4"
                className="w-full rounded-2xl border border-gold/20 bg-oat/70 px-5 py-4 outline-none transition focus:border-sage focus:bg-white"
                placeholder="写下一句想被一起记住的话。"
              />
            </label>
            <label className="block">
              <span className="mb-3 block text-sm text-ink/55">选择图片</span>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full rounded-2xl border border-dashed border-gold/30 bg-white px-4 py-4 text-sm text-ink/55 file:mr-4 file:rounded-full file:border-0 file:bg-oat file:px-4 file:py-2 file:text-sm"
              />
            </label>

            {preview && (
              <div className="overflow-hidden rounded-[24px] border border-gold/15 bg-white">
                <img src={preview} alt="上传预览" className="h-64 w-full object-cover" />
              </div>
            )}

            {error && (
              <div className="rounded-2xl border border-apple-red/15 bg-apple-red/8 px-4 py-3 text-sm text-apple-red">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm tracking-[0.16em] text-white transition hover:scale-[1.02]"
            >
              <ImagePlus className="h-4 w-4" />
              上传到共享相册
            </button>
          </form>
        </SectionCard>

        <SectionCard className="border-gold/10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-oat">
              <Images className="h-5 w-5 text-ink" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-apple-red/80">Album Hall</p>
              <p className="mt-1 text-xl text-ink">共享相册说明</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ['共同可见', 'Jenny 与 Mark 登录后都能看到全部图片。'],
              ['本地保存', '图片记录保存在浏览器 localStorage 中，无需后端。'],
              ['身份区分', '每一张图片都会标记上传者姓名与上传时间。'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-[22px] bg-oat px-4 py-5">
                <p className="text-base text-ink">{title}</p>
                <p className="mt-2 text-sm leading-7 text-ink/58">{desc}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {!!photos.length && (
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {photos.map((photo) => (
            <SectionCard key={photo.id} className="overflow-hidden border-gold/10 p-0">
              <img src={photo.imageUrl} alt={photo.title} className="h-60 w-full object-cover" />
              <div className="p-6">
                <p className="text-2xl text-ink">{photo.title}</p>
                <p className="mt-2 text-sm text-apple-red/78">上传者：{photo.authorName}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink/40">
                  {formatDate(photo.createdAt)}
                </p>
                {photo.description && (
                  <p className="mt-4 text-sm leading-7 text-ink/60">{photo.description}</p>
                )}
                {photo.authorUsername === user.username && (
                  <button
                    type="button"
                    onClick={() => removePhoto(photo.id, user.username)}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-apple-red/15 px-4 py-2 text-sm text-apple-red transition hover:bg-apple-red hover:text-white"
                  >
                    <Trash2 className="h-4 w-4" />
                    删除我的图片
                  </button>
                )}
              </div>
            </SectionCard>
          ))}
        </div>
      )}

      {!photos.length && (
        <div className="mt-12 rounded-[28px] border border-dashed border-gold/25 bg-white/65 px-6 py-14 text-center text-ink/55">
          当前还没有上传记录。你可以先上传一张校园照片，作为共享相册的第一张记忆。
        </div>
      )}
    </PageShell>
  )
}

export default SharedAlbumPage
