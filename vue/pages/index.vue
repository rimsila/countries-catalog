<script setup lang="ts">
const { data } = await useRequest("/all");
console.log("data", data.value);
</script>

<template>
  <main>
    <div>
      <h1 class="text-red-900">Welcome Countries Catalog</h1>
    </div>
  </main>
</template>
