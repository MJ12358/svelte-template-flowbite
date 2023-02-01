<script lang="ts">
  import {
    Footer,
    FooterCopyright,
    FooterLink,
    FooterLinkGroup,
    Navbar,
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl,
  } from 'flowbite-svelte';
  export let name: string;
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    >
      Flowbite
    </span>
  </NavBrand>
  <NavHamburger on:click="{toggle}" />
  <NavUl hidden="{hidden}">
    <NavLi href="/" active="{true}">Home</NavLi>
    <NavLi href="/">About</NavLi>
    <NavLi href="/">Services</NavLi>
    <NavLi href="/">Pricing</NavLi>
    <NavLi href="/">Contact</NavLi>
  </NavUl>
</Navbar>

<main class="flex flex-wrap items-stretch content-center">
  <div>
    <div class="p-4">Hello {name}!</div>
    <p class="p-4">
      Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
      how to build Svelte apps.
    </p>
  </div>
</main>

<Footer class="absolute bottom-0 left-0 z-20 w-full">
  <FooterCopyright href="/" by="Flowbite™" year="{new Date().getFullYear()}" />
  <FooterLinkGroup
    ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
  >
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Privacy Policy</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
    <FooterLink href="/">Contact</FooterLink>
  </FooterLinkGroup>
</Footer>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
