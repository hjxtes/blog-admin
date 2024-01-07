const keyMap = {
    TOKEN: 'blog-admin-token'
}

export function getToken() {
  return localStorage.getItem(keyMap.TOKEN)
}

export function setToken(token) {
  return localStorage.setItem(keyMap.TOKEN, token)
}

export function removeToken() {
  return Cookies.removeItem(keyMap.TOKEN)
}
