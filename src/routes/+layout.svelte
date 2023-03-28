<script>
    import Header from "./header.svelte";
    import Footer from "./footer.svelte";
</script>

<main class="bg-white dark:bg-zinc-800 dark:text-white min-h-screen flex flex-col">
        <Header/>
    <main class="px-8">
        <slot />
    </main>
    
        <Footer/>
</main>