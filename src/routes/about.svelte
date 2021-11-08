<script>
  import AboutItem from "../lib/AboutItem.svelte";
</script>

<main class="p-12">
  <h1 class="text-4xl hover:text-blue-600 transition-colors"><a href="#">@<span class="hover:underline font-medium">misterhoonster</span></a></h1>

  <p class='mt-2 text-xl text-gray-800 max-w-lg'>
    First-year at Harvard University. Studying CS and life sciences. Data analyst at HUDAG.
  </p>

  <div class="flex my-6 space-x-4">
    <button class="h-8 w-8 bg-gray-200"></button>
    <button class="h-8 w-8 bg-gray-200"></button>
  </div>

  <hr />

  <AboutItem title="Personal Blog">
    Sporadic posts on design and front-end development from yours truly.
  </AboutItem>

  <AboutItem title="Bootstrap">
    The most popular, responsive, and mobile-first front-end framework.
  </AboutItem>

  <AboutItem title="Bootstrap Icons">
    Official open source SVG icons library for Bootstrap featuring 500+ icons.
  </AboutItem>

</main>

<style lang="postcss">
  :global(body) {
    @apply bg-gray-50;
  }

  hr {
    @apply w-32 my-12;
  }
</style>