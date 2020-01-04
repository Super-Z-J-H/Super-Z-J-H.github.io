<template>
  <h3 class="title">
    <slot></slot>
  </h3>
</template>

<script>
export default {};
</script>

<style lang="less">
.title {
  line-height: 20px;
  margin: 20px 0;
  padding-left: 10px;
  border-left: 2px solid  rgb(212, 60, 51);
  text-align: left
}
</style>