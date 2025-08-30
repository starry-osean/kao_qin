<template>
    <div class="box">
        <Nav/>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
import Nav from './components/nav.vue';


</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
}
 .box{
        height: 900px;
        width: 1700px;
        background-color:white;
        display: flex;
    }
</style>
