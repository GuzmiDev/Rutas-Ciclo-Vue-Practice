<template>
  <h1>About Page</h1>
  <hr />
  <!-- <h2>{{ name }}</h2> -->
  <button @click="onChangeName">Cambiar nombre</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Erick",
    };
  },
  methods: {
    onChangeName() {
      this.name = "Guzman";
    },
  },
  beforeCreate() {
    // NO RECOMENDABLE PARA PETICIONES HTTP
    console.log("beforeCreate");
  },
  created() {
    // RECOMENDABLE PARA PETICIONES HTTP
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    // RECOMENDABLE PARA HACER UNA LIMPIEZA
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>
