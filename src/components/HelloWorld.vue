<template>
  <div >
    <myHeader></myHeader>
    <h2>{{ msg }}</h2>
   <span class="w3-red">{{myName}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data:function(){
    return {
      myName:'Sherif Hamdy'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
