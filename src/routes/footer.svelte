<script lang="ts">
    import Instagram from "../svg/socials/instagram.svelte";
    import Youtube from "../svg/socials/youtube.svelte";
    import Twitter from "../svg/socials/twitter.svelte";
    import Github from "../svg/socials/github.svelte";
    import Linkedin from "../svg/socials/linkedin.svelte";
    var currentYear = new Date().getFullYear();
  </script>
  
  <footer class="flex grow flex-col justify-end p-4">
    <div class="flex flex-col items-center justify-content">
      <div class="flex">
        <a
          class="p-1"
          href="https://linkedin.com/in/noranraskin"
          target="_blank"
          rel="noreferrer"
          title="Connect on LinkedIn"
        >
          <Linkedin />
        </a>
        <a
          class="p-1"
          href="https://github.com/noranraskin"
          target="_blank"
          rel="noreferrer"
          title="Copy my code from GitHub"
        >
          <Github />
        </a>
        <a
          class="p-1"
          href="https://www.youtube.com/@noranraskin"
          target="_blank"
          rel="noreferrer"
          title="Like every of my youtube videos"
        >
          <Youtube />
        </a>
        <a
          class="p-1"
          href="https://www.instagram.com/noranraskin/"
          target="_blank"
          rel="noreferrer"
          title="Follow me on insta"
        >
          <Instagram />
        </a>
        <a
          class="p-1"
          href="https://twitter.com/noranraskin"
          target="_blank"
          rel="noreferrer"
          title="Say Hi on Twitter"
        >
          <Twitter />
        </a>
      </div>
      <div>
        Icons by <a href="https://iconoir.com/">Iconoir</a>.
      </div>
      <div>
        © {currentYear} Noran Raskin. All rights reserved.
      </div>
    </div>
  </footer>
  