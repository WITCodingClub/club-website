<script lang="ts">
	import favicon from '$lib/assets/witcc_logo.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>WIT Coding Club</title>
	<meta name="description" content="The Wentworth Institute of Technology Coding Club teaches students about computer science and technology.">
	<meta name="keywords" content="WITCC, Wentworth Institute of Technology, Wentworth, Boston, Massachusetts, computer science, technology, club">
	<meta name="author" content="WITCC">
</svelte:head>

{@render children()}
