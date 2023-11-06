<template>
  <uni-card @click="click()" ref="card" v-for="item in list">{{item}}</uni-card>     
</template>

<script setup>
import { reactive, ref } from 'vue';
const list=reactive([1,2,3,4,5,6,7,8,9])
const card=ref(null)
const click=()=>{
	// card[0].value

     console.log(
	 card.value[0]);
}
</script>

<style>
</style>