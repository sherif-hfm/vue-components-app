<template>
  <div >  
    <h2>{{ msg }}</h2>    
  </div>
</template>

<script>
export default {
  name: 'myHeader',
 props: {
    msg: String
  },
  data:function()
  {
  return{
    headerData:'headerData',
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>