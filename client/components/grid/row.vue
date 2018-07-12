<template>
  <div :class="_class">
    <slot></slot>
  </div>
</template>

<script>
  const prefix = 'fq-row'
  
  export default {
    name: 'Row',
    props: {
      className: String,
      type: {
        validator (val) {
          return [val, 'flex'].indexOf(val) !== -1
        }
      },
      align: {
        validator (val) {
          return [val, 'top', 'middle', 'bottom'].indexOf(val) !== -1
        }
      },
      justify: {
        validator (val) {
          return [val, 'start', 'end', 'center', 'space-around', 'space-between'].indexOf(val) !== -1
        }
      }
    },
    computed: {
      _class () {
        return {
          [`${prefix}`]: !this.type,
          [`${prefix}-${this.type}`]: !!this.type,
          [`${prefix}-${this.type}-${this.align}`]: !!this.align,
          [`${prefix}-${this.type}-${this.justify}`]: !!this.justify,
          [`${this.className}`]: !!this.className
        }
      }
    }
  }
</script>