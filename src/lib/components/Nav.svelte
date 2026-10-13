<script lang="ts">
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import logo from '$lib/assets/witcc_logo.png';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/events', label: 'Events' },
		{ href: '/contact', label: 'Contact' }
	];

	let menuOpen = $state(false);

	// Close the mobile menu whenever the route changes.
	afterNavigate(() => {
		menuOpen = false;
	});

	function isActive(href: string) {
		const path = page.url.pathname;
		return href === '/' ? path === '/' : path === href || path.startsWith(`${href}/`);
	}
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (menuOpen = false)} />

<header class="bar">
	<div class="container">
		<a class="brand" href="/">
			<img src={logo} alt="WIT Coding Club logo" width="64" height="64" />
			<span>Wentworth Coding Club</span>
		</a>

		<button
			class="menu-toggle"
			aria-expanded={menuOpen}
			aria-controls="main-nav"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
				{#if menuOpen}
					<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				{:else}
					<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				{/if}
			</svg>
		</button>

		<nav id="main-nav" aria-label="Main" class:open={menuOpen}>
			<ul>
				{#each links as link (link.href)}
					<li>
						<a
							href={link.href}
							class:active={isActive(link.href)}
							aria-current={isActive(link.href) ? 'page' : undefined}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	.bar {
		background: var(--bar-bg);
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem var(--gutter);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		font-size: 1.5rem;
		color: inherit;
		text-decoration: none;
	}

	.brand img {
		display: block;
	}

	ul {
		display: flex;
		gap: 1rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	nav a {
		font-size: 1.5rem;
		color: inherit;
		text-decoration: none;
		text-underline-offset: 0.3em;
		text-decoration-thickness: 2px;
	}

	nav a:hover {
		text-decoration-line: underline;
	}

	nav a.active {
		font-weight: 700;
		text-decoration-line: underline;
	}

	.menu-toggle {
		display: none;
		place-items: center;
		width: 2.75rem;
		height: 2.75rem;
		padding: 0;
		border: none;
		border-radius: 0.75rem;
		background: none;
		color: inherit;
		cursor: pointer;
	}

	.menu-toggle:hover,
	.menu-toggle:focus-visible {
		background: rgb(0 0 0 / 0.1);
	}

	@media (max-width: 760px) {
		.brand {
			gap: 0.75rem;
			font-size: 1.1rem;
		}

		.brand img {
			width: 48px;
			height: 48px;
		}

		.menu-toggle {
			display: grid;
		}

		nav {
			display: none;
			flex-basis: 100%;
		}

		nav.open {
			display: block;
		}

		ul {
			flex-direction: column;
			gap: 0;
			border-top: 1px solid rgb(0 0 0 / 0.15);
		}

		nav a {
			display: block;
			padding: 0.75rem 0;
			font-size: 1.25rem;
		}
	}
</style>
