import PreviewComponent from './preview.vue'
let $vm
export default {
  install (Vue) {
    let Preview = Vue.extend(PreviewComponent)
    if (!$vm) {
      $vm = new Preview({el: document.createElement('div')})
      console.log($vm.$el)
      document.body.appendChild($vm.$el)
    }
    const preview = {
      open (el,index, list, params) {
        $vm.open(el,index, list, params)
      },
      close () {
        $vm.close()
      }
    }
    Vue.$preview = preview
    Vue.mixin({
      created: function () {
        this.$preview = Vue.$preview
      }
    })
  }
}
