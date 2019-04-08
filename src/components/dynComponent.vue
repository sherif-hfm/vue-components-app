<template>
    <div>
        <button @click="selectedComp='Info1'" class="w3-button w3-red">Info1</button>
        <button @click="selectedComp='Info2'" class="w3-button w3-red">Info2</button>
        <br>
        <keep-alive>
                <component :is="selectedComp" :info='selectedComp'></component>
        </keep-alive>
    </div>
</template>
<script>
import Info1 from './Info1.vue'
import Info2 from './Info2.vue'
export default {
    name:'dynComponent',
    data:function(){
        return{
            selectedComp:'Info1'
        }
    },
    components:{
        Info1,Info2
    }
}
</script>
<style>

</style>

