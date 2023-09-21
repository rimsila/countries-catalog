<script setup>
const props = defineProps({
  label: {
    type: [String, Number],
    required: true,
  },
  value: {
    type: [String, Number],
    default: "",
  },
});
</script>

<template>
  <el-text tag="p">
    <el-text tag="b">{{ label }}:</el-text> {{ value }}
  </el-text>
</template>
