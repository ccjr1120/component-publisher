<template>
  <div class="demo">
    <vue-component />
  </div>
</template>

<script>
import VueComponent from '../components/VueComponent.vue';
export default {
  components: {
    VueComponent,
  },
  data() {
    return {
      message: 'Hello Vue!!',
    };
  },
};
</script>

<style></style>
