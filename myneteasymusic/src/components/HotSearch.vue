<template>
  <li class="hotsearch">{{item.first}}</li>
</template>

<script>
export default {
  props: {item:Object}
};
</script>

<style>
li.hotsearch {
    
  margin: 5px;
  margin-right: 10px;
  padding: 5px;
  float: left;
  border: 2px solid rgb(212, 60, 51);
  border-radius: 10px;
}
</style>