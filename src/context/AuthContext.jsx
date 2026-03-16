import { createContext, useContext, useState } from 'react'

const STORAGE_KEY = 'guoguo-university-auth'

const STUDENTS = {
  Jenny: {
    username: 'Jenny',
    password: '20060901',
    displayName: '欧阳欣怡',
    nickname: 'Jenny',
    college: '清岚书院',
    academy: '人文与艺术学院',
    major: '音乐学',
    welcome:
      '愿你在清岚书院的琴房、长廊与晚风里，把敏感、热爱与节奏都养成从容而明亮的力量。',
  },
  Mark: {
    username: 'Mark',
    password: '20050520',
    displayName: '李梓闻',
    nickname: 'Mark',
    college: '知遥书院',
    academy: '信息科学学院',
    major: '计算机科学与技术',
    welcome:
      '愿你在知遥书院的清晨与深夜里，把理性、耐心与想象力写进代码，也写进更长久的未来。',
  },
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    try {
      const parsed = JSON.parse(raw)
      if (parsed?.username && STUDENTS[parsed.username]) {
        return STUDENTS[parsed.username]
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY)
    }
    return null
  })

  const login = (username, password) => {
    const student = STUDENTS[username]
    if (!student || student.password !== password) {
      return {
        success: false,
        message: '身份信息未匹配，请核对后重新输入。',
      }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ username }))
    setUser(student)

    return { success: true, user: student }
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, students: STUDENTS }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
