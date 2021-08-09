<template>
  <div class="green-content">
    <slot />
  </div>
</template>
<script>
export default {
  mounted() {
    console.log("GREEN mounted");
  },
};
</script>
