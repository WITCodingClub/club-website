<script lang="ts">
	import '../main.css';
	import '../app.css';
	import favicon from '$lib/assets/witcc_logo.png';
	import { page } from '$app/state';
	import { Footer, Nav } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>WIT Coding Club</title>
	<meta name="description" content="The Wentworth Institute of Technology Coding Club teaches students about computer science and technology.">
	<meta name="keywords" content="WITCC, Wentworth Institute of Technology, Wentworth, Boston, Massachusetts, computer science, technology, club">
	<meta name="author" content="WITCC">
</svelte:head>

<a href="#main" class="skip-link">Skip to content</a>

<div class="flex min-h-dvh flex-col">
	{#if !page.error}
		<Nav />
	{/if}
	<main id="main" tabindex="-1" class="flex-1 focus:outline-none">
		{@render children()}
	</main>
	{#if !page.error}
		<Footer />
	{/if}
</div>

<style>
	.skip-link {
		position: absolute;
		top: 8px;
		left: 8px;
		z-index: 100;
		padding: 12px 16px;
		border-radius: var(--radius-pill);
		background: var(--text-ink);
		color: var(--bg-page);
		font-family: var(--font-mono);
		font-size: 0.875rem;
		transform: translateY(-200%);
	}

	.skip-link:focus {
		transform: none;
	}
</style>
