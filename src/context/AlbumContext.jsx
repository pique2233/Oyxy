import { createContext, useContext, useState } from 'react'

const STORAGE_KEY = 'guoguo-university-album'
const AlbumContext = createContext(null)

function readInitialAlbums() {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return []
  }
}

export function AlbumProvider({ children }) {
  const [photos, setPhotos] = useState(readInitialAlbums)

  const persist = (next) => {
    setPhotos(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }

  const addPhoto = (photo) => {
    const next = [
      {
        ...photo,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      },
      ...photos,
    ]
    persist(next)
  }

  const removePhoto = (photoId, username) => {
    const next = photos.filter((item) => !(item.id === photoId && item.authorUsername === username))
    persist(next)
  }

  return (
    <AlbumContext.Provider value={{ photos, addPhoto, removePhoto }}>
      {children}
    </AlbumContext.Provider>
  )
}

export function useAlbum() {
  return useContext(AlbumContext)
}
