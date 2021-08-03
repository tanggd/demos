
self.addEventListener('message', (e) => {
  console.log('eee', e)
  e.waitUntil(
    // 通过self.clients.matchAll()获取注册了该 Service Worker 的所有同源页面
    self.clients.matchAll().then((clients) => {
      if (!clients || clients.length === 0) {
        return
      }
      clients.forEach(function (client) {
        console.log('client', client)
        client.postMessage(e.data)
      })
    })
  )
})