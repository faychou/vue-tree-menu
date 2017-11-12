import Vue from 'vue'
import TreeMenu from './TreeMenu.vue'

//定义树形菜单数据
let tree = {
  label: 'root',
  nodes: [
    {
      label: 'item1',
      nodes: [
        {
          label: 'item1.1'
        },
        {
          label: 'item1.2',
          nodes: [
            {
              label: 'item1.2.1'
            }
          ]
        }
      ]
    }, 
    {
      label: 'item2'  
    }
  ]
}

new Vue({
  el: '#app',
  // render: h => h(App)
  data: {
    tree
  },
  components: {
    TreeMenu
  }
})
