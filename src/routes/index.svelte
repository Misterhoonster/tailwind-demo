<script context="module">
  export const prerender = true;
</script>

<svelte:head>
  <title>Home Page</title>
</svelte:head>

<main class="p-8 mx-auto max-w-screen-lg">
  <h1 class="my-4 text-2xl font-medium">Welcome to Harvard!</h1>

  <h2 class="my-4 border p-4 text-gray-600">
    try editing <span class="font-mono">src/routes/index.svelte</span>
  </h2>

  <ul class="list-disc pl-6">
    <li><a href="/about" class="text-blue-600 hover:underline">about</li>
    <li>i am a list</li>
  </ul>
</main>
