<script>
  export let title;
</script>

<section class="mb-6">
    <h2 class="item"><a href="#" class="text-blue-600 hover:text-blue-800 hover:underline font-medium">{title}</a></h2>
    <p class="text-gray-500">
      <slot />
    </p>
  </section>

  <style lang="postcss">
  .item {
    @apply text-2xl mb-1;
  }

  .item a {
    @apply text-blue-600 hover:text-blue-800 hover:underline font-medium;
  }
</style>