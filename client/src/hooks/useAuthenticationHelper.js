import { useEffect } from 'react'
import axios from 'axios'

export function useAuthenticationHelper(code) {
  const userLogged = JSON.parse(localStorage.getItem('userLogged'))

  useEffect(() => {
    if (code) {
      axios.post("/login", { code }).then(res => {
        const userLogginData = { "accessToken": res.data.accessToken, "refreshToken": res.data.refreshToken, "expiresIn": res.data.expiresIn }
        localStorage.setItem('userLogged', JSON.stringify(userLogginData))
        window.history.pushState({}, null, "/")
      }).catch((err) => {
        console.log(err)
        window.location = "/"
      })
    } else return
  }, [code])

  useEffect(() => {
    if (!userLogged) return
    const interval = setInterval(() => {
      const refreshToken = userLogged.refreshToken
      axios.post("/refresh", { refreshToken }).then(res => {
        const userLogged = JSON.parse(localStorage.getItem('userLogged'))
        const userLogginData = { "accessToken": res.data.accessToken, "refreshToken": userLogged.refreshToken, "expiresIn": res.data.expiresIn }
        localStorage.setItem('userLogged', JSON.stringify(userLogginData))
      }).catch(() => { window.location = "/" })
    }, (userLogged.expiresIn - 60) * 1000)
    return () => clearInterval(interval)
  }, [userLogged && userLogged.refreshToken, userLogged && userLogged.expiresIn])

}

export default useAuthenticationHelper