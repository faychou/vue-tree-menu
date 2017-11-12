<template>
  <div class="tree-menu">
    <!-- <div :style="indent" @click="toggleChildren">{{ label }}</div> -->
    <div class="label-wrapper" @click="toggleChildren">
      <div :style="indent" :class="labelClasses">
        <i v-if="nodes" class="fa" :class="iconClasses"></i>
        {{ label }}
      </div>
    </div>
    <tree-menu 
      v-if="showChildren" 
      v-for="node in nodes" 
      :nodes="node.nodes" 
      :label="node.label" 
      :depth="depth + 1"
    >
    </tree-menu>
  </div>
</template>

<script>
  export default { 
    props: [ 'label', 'nodes', 'depth' ],
    name: 'tree-menu',
    data() {
      return { showChildren: false }
    },
    computed: {
      iconClasses: function iconClasses() {
        return {
          'plus': !this.showChildren,
          'minus': this.showChildren
        };
      },
      labelClasses: function labelClasses() {
        return { 'has-children': this.nodes };
      },
      indent() {
        return { transform: `translate(${this.depth * 50}px)` }
      }
    },
    methods: {
      toggleChildren() {
        this.showChildren = !this.showChildren;
      }
    }
  }
</script>