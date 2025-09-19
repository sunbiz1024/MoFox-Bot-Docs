import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Giscus from './Giscus.vue'
import { h } from 'vue'

// 动态加载外部脚本的函数
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
}

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Giscus)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Giscus', Giscus)
    // 只在浏览器环境中执行
    if (typeof window !== 'undefined') {
      // 鼠标点击特效
      loadScript('https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js').then(() => {
        loadScript('https://cdn.jsdelivr.net/npm/fireworks-js@2.10.2/dist/fireworks.js').then(() => {
          const fireworks = new Fireworks(document.body, {
            maxRockets: 3,
            rocketSpawnInterval: 150,
            numParticles: 100,
            explosionMinHeight: 0.2,
            explosionMaxHeight: 0.9,
            explosionChance: 0.08
          })
          document.addEventListener('click', (e) => {
            fireworks.run()
          })
        })
      })
      }
    }
  }