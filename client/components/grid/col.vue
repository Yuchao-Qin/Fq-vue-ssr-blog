<template>
  <div :class="_class">
    <slot></slot>
  </div>
</template>

<script>
  const prefix = 'fq-col'
  
  export default {
    name: 'Col',
    props: {
      span: [Number, String],
      offset: [Number, String],
      push: [Number, String],
      pull: [Number, String],
      xs: [Number, String],
      sm: [Number, String],
      md: [Number, String],
      lg: [Number, String],
      className: String
    },
    computed: {
      _class () {
        const classList = [
          prefix,
          {
            [`${prefix}-span-${this.span}`]: this.span,
            [`${prefix}-order-${this.order}`]: this.order,
            [`${prefix}-offset-${this.offset}`]: this.offset,
            [`${prefix}-push-${this.push}`]: this.push,
            [`${prefix}-pull-${this.pull}`]: this.pull,
            [`${this.className}`]: !!this.className
          }
        ]
        
        const sizeList = ['xs', 'sm', 'md', 'lg']
        
        sizeList.forEach(size => {
          const s = this[size]
          if (typeof s === 'number') {
            classList.push(`${prefix}-span-${size}-${this.size}`)
          }
          
          if (typeof s === 'object' && !Array.isArray(s)) {
            Object.keys(s).forEach(prop => {
              classList.push(
                prop !== 'span' ? `${prefix}-${size}-${prop}-${s[prop]}` : `${prefix}-span-${size}-${s[prop]}`
              )
            })
          }
        })
        
        return classList
      }
    }
  }
</script>