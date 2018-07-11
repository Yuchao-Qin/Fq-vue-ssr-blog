const getMetaInfo = vm => {
  const metaInfo = vm.$meta()
  
  if (metaInfo) {
    const { title, meta } = metaInfo.inject()
    
    return { title: title.text(), meta: meta.text() }
  }
}

const serverMixin = {
  created () {
    const { title, meta } = getMetaInfo(this)
    
    if (!this.$ssrContext) return

    this.$ssrContext.title = title
    this.$ssrContext.meta = meta
  }
}

const clientMixin = {
  mounted () {
    const { title, meta } = getMetaInfo(this)
    
    // document.head.innerHTML += meta
    document.title = title
  }
}

export default process.env.VUE_ENV === 'server' ? serverMixin : clientMixin