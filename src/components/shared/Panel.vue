<template>
    <div class="w3-panel w3-blue w3-card-4 w3-center">
        <p>
            <slot name='title'></slot>
        </p>
        <p>
            <slot name='subtitle'>hi subtitle</slot>
        </p>
        <p>
            <slot :name='slotName'></slot>
        </p>
    </div>
</template>
<script>
export default {
    name:'Panel',
    data:function(){
        return {
            slotName:'content'
        };
    },
    created:function()
    {
        console.log('Panel Created');
        console.log(this.$slots) ;
    },
    mounted:function()
    {
        console.log('Panel mounted');        
        console.log(this.$slots['content'][2].componentInstance.headerData) ;        
    }
}
</script>

<style scoped>
h2{
color:blue
}
</style>

