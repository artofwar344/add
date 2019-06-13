export default {
  init: function () {

    return new Promise((resolve, reject) => {
      // 如果已加载直接返回
      if (typeof BMap !== 'undefined') {
        resolve(BMap)
        return true
      } else {
        // 插入script脚本
        const AK = 'c7ruxFm1K1o12l137SFDgP2krfR3HCRZ'
        const bdMapUrl = 'https://api.map.baidu.com/api?v=2.0&ak=' + AK + '&s=1&callback=onBMapCallback'
        let scriptNode = document.createElement('script')
        scriptNode.setAttribute('type', 'text/javascript')
        scriptNode.setAttribute('src', bdMapUrl)
        document.body.appendChild(scriptNode)
      }
      // 百度地图异步加载回调处理
      window.onBMapCallback = function () {
        resolve(BMap)
        console.log('地图加载成功')
      }

    })

  }
}
