<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('Hello world!');

</script>

<template>
  <div class="example">{{ msg }}</div>
</template>


<style lang="scss">
.example {
  color: red;
}
</style>