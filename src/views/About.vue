<template>
  <div class="about">
    <a-button type="primary">Primary</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>
  </div>
</template>
<script>
export default {
  name: "About",
  props: {
    msg: String,
  },
  created() {
    console.log(this.$router);
  },
};
</script>
