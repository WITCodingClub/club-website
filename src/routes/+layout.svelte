<script lang="ts">
	import favicon from '$lib/assets/witcc_logo.png';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>WIT Coding Club</title>
	<meta name="description" content="The Wentworth Institute of Technology Coding Club teaches students about computer science and technology.">
	<meta name="keywords" content="WITCC, Wentworth Institute of Technology, Wentworth, Boston, Massachusetts, computer science, technology, club">
	<meta name="author" content="WITCC">
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" />
</svelte:head>

<div class="page">
	<Nav />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	:global(:root) {
		--bar-bg: #a4c4f7;
		--text: #000;
		--page-bg: #fff;
		--content-width: 1300px;
		--gutter: 2.5rem;
	}

	@media (max-width: 760px) {
		:global(:root) {
			--gutter: 1rem;
		}
	}

	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		background: var(--page-bg);
		color: var(--text);
		font-family: 'JetBrains Mono', ui-monospace, monospace;
	}

	.page {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		width: 100%;
		max-width: var(--content-width);
		margin: 0 auto;
		padding: 2rem var(--gutter);
	}
</style>
