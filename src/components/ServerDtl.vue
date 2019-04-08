<template>
  <div >  
   <slot :server="Server"></slot>   
   <button @click="Done">Done</button>
   <button @click="DocallbackFuc">callbackFuc</button>
  </div>
</template>

<script>
import {service} from '../service'
export default {
  name: 'Server',
 props: {
    Server:{type:Object,required:true},
    callbackFuc:Function
  },
  methods:{
    Done(){
      this.$emit('done',this.Server);
    },
    DocallbackFuc(){
      this.callbackFuc('my Data');
    },
     test2(){
      console.log('test2');
      }
  },
   created:function(){
     console.log('Server created()');
     console.log(service.global1);     
     this.Server.ServerName='AD2';
     service.$emit('event1','event1Data');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>