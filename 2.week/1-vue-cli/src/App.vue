<template>
  <div class="app">
    <app-header />
    <div class="container">
      <h3>Hi</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minima
        beatae amet harum. Voluptatum, aut. Iure molestiae ab veritatis dolorem
        ex culpa necessitatibus veniam laborum amet. Odio molestiae quam
        voluptas.
      </p>
    </div>
    <CounterItem />
    <counter-item />
  </div>
</template>

<script>
import CounterItem from "@/components/CounterItem";

export default {
  components: {
    CounterItem,
  },
};
</script>
