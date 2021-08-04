self.addEventListener('message', (e) => {
  e.waitUntil(
    // 通过self.clients.matchAll()获取注册了该 Service Worker 的所有同源页面
    self.clients.matchAll().then((clients) => {
      clients.forEach(function (client) {
        client.postMessage(e.data)
      })
    })
  )
})