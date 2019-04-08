<template>
  <div  class="w3-container ">
      <div class="w3-auto w3-border "> 
        <div class="w3-row" >
            <div class="w3-col m1 ">No</div>
            <div class="w3-col m3 ">Server Name</div>
            <div class="w3-col m1 "></div>
        </div>
        <div class="w3-row w3-green w3-border" style="width:50%" v-for="(server,index) of servers">
            <div class="w3-col m1 ">{{index}}</div>
            <div class="w3-col m3 ">{{server.ServerName}}</div>
            <div class="w3-col m1 "><button class="w3-button w3-blue" @click="ShowServerDtl(server)">Show</button></div>
        </div>  
        <div  class="w3-container" v-if="Server != undefined">
            <Server :Server="Server" @done="Done($event)" :callbackFuc="callbackFuc" ref="myServer">
              <div slot-scope="props">
                {{props.server.ServerName}}-{{props.server.CPU}}-{{props.server.RAM}}
                <button class="w3-button w3-red" @click='$refs.myServer.test2()'>test</button>
              </div>
            </Server>
            <button @click="ShowRef">Show Refs</button>
        </div>
       </div>
  </div>
</template>

<script>
import {service} from '../service'
import Server from './ServerDtl.vue'
export default {
  name: 'Servers',
  components:{Server},
 props: {
    
  },
  data:function(){
      return{
          servers:[
              {ServerName:'AD1',CPU:'CoreI7',RAM:'32'},
              {ServerName:'Web Server',CPU:'CoreI7',RAM:'16'},
              {ServerName:'SQL Server',CPU:'CoreI7',RAM:'16'}
          ],
          Server:undefined,
      }
  },
  created(){
        console.log('Servers created');
        console.log(service.global1);
        service.global1='global Data updated';
        service.$on('event1',function(e){
          console.log('event1 done:' + e);
        });
        
  }
  ,
  methods:{
        ShowServerDtl(server){
            this.Server=server;      
            console.log(server);
      },
      Done(e){
        console.log(e);
      },
      callbackFuc(e){
        console.log(e);
      },
      ShowRef(){
          console.log(this.$refs['myServer']);
          this.$refs['myServer'].Done();
      },
      test(){
      console.log('test');
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>