<template>
  <div>
      <myHeader msg='Welcome to Vuejs App'></myHeader>
      <div>
        <dynComp></dynComp>
      </div>
      <Panel>
        <h2 slot='title'>{{PanelTitle}}</h2>        
        <h3 slot='content'>Content</h3>
        <h3 slot='content'>Content2</h3>
        <myHeader slot='content' msg='Welcome to Vuejs App'></myHeader>
      </Panel>
   <p class="w3-center">Home</p> 
   <Servers></Servers>
  </div>
</template>

<script>
import Panel from './shared/Panel.vue'
import Servers from './Servers.vue'
import dynComponent from './dynComponent.vue'
export default {
  name: 'Home',
  components:{Servers,Panel,dynComp:dynComponent},
  props: {
    msg: String
  },
  data:function(){
    return {
        PanelTitle:'Test Panel Title'    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
color:red
}
</style>
