<template>
    <div>
        <h2>Hi Info1</h2>
        <div>
            Info1:<input type="text" placeholder="enter info1" :value="info">
        </div>
    </div>
</template>
<script>
export default {
    name:'Info1',
    props:{
        info:String
    },
    data:function(){
        return {
            
        }
    },
    activated(){
        console.log('activated');
    },
    deactivated(){
        console.log('deactivated');
    }
}
</script>
<style>

</style>