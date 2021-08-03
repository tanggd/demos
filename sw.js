self.addEventListener('message', (e) => {
  console.log('转消息 sw')
  console.log(e)
  e.waitUntil(
    self.clients.matchAll().then((clients) => {
      if (!clients || clients.length === 0) {
        return
      }
      clients.forEach(function (client) {
        client.postMessage(e.data)
      })
    })
  )
})