<script>
    import Favicon from "../svg/icons/favicon.svelte";
  </script>
  
  <header class="py-1 bg-white dark:bg-zinc-800 fixed top-0 w-full">
    <nav class="flex items-center justify-center">
      <a class="flex-shrink-0 p-1" href="/" style="text-decoration:none;">
        <Favicon/>
      </a>
      <div class="justify-between">
        <a class="p-1" href="/" title="Home"> Home </a>
        <a class="p-1" href="/blog" title="Blog"> Blog </a>
        <a class="p-1" href="/contact" title="Contact"> Contact </a>
        <a
          class="p-1"
          href="https://youtube.com/@noranraskin"
          target="_blank"
          rel="noreferrer"
          title="Youtube"
        >
          Youtube
        </a>
      </div>
    </nav>
  </header>
  <main class="pt-12" />
  