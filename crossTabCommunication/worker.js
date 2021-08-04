let data = null
self.addEventListener('connect', function (e) {
  const port = e.ports[0]
  port.addEventListener('message', function (event) {
    if (event.data.get) {
      // 是get指令，则返回存储的消息数据
      port.postMessage(data)
    } else {
      // 非get指令，即post指令，那就存储该消息数据
      data = event.data
    }
    // port.postMessage(event.data)
  })
  port.start()
})