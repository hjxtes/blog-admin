import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
// import { GITHUB_OAUTH } from '@/config'
NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist
router.beforeEach((to, from, next) => {
  // start progress bar
  NProgress.start()
  const hasToken = getToken()
  // console.log('hasToken', hasToken)
  if (hasToken || whiteList.includes(to.path)) {
    next()
  } else {
    /* has no token */
    console.log('未登录')
    router.replace('/login')
    next()
    // window.location.href = GITHUB_OAUTH.url
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
