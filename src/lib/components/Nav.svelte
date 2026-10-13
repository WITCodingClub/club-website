<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/assets/witcc_logo.png';
	import { isActivePath, navLinks, type NavLink } from '$lib/site';

	interface Props {
		links?: NavLink[];
	}

	let { links = navLinks }: Props = $props();

	let menuOpen = $state(false);
	let menuButton: HTMLButtonElement | undefined = $state();

	const pathname = $derived(page.url.pathname);

	// Close the mobile menu after each navigation.
	$effect(() => {
		void pathname;
		menuOpen = false;
	});

	function closeMenu(returnFocus = false) {
		menuOpen = false;
		if (returnFocus) menuButton?.focus();
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && menuOpen) closeMenu(true);
	}
</script>

<svelte:window onkeydown={onKeydown} />

<header class="nav">
	<div class="flex h-[var(--nav-height)] w-full items-center justify-between gap-6 px-gutter">
		<a href="/" class="nav__home label-bar">
			<img src={logo} alt="" width="64" height="64" class="size-[var(--logo-size)]" />
			<span>Wentworth Coding Club</span>
		</a>

		<nav aria-label="Main" class="hidden md:block">
			<ul class="flex gap-4">
				{#each links as link (link.href)}
					<li>
						<a
							href={link.href}
							class="nav__link label-bar"
							aria-current={isActivePath(pathname, link.href) ? 'page' : undefined}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<button
			bind:this={menuButton}
			type="button"
			class="nav__toggle"
			aria-expanded={menuOpen}
			aria-controls="nav-menu"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
			<svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" fill="none">
				{#if menuOpen}
					<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				{:else}
					<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				{/if}
			</svg>
		</button>
	</div>

	<div id="nav-menu" class="nav__menu" hidden={!menuOpen}>
		<nav aria-label="Main mobile">
			<ul class="flex flex-col pb-4">
				{#each links as link (link.href)}
					<li>
						<a
							href={link.href}
							class="nav__link nav__link--mobile"
							aria-current={isActivePath(pathname, link.href) ? 'page' : undefined}
							onclick={() => closeMenu()}
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
	.nav {
		position: relative;
		z-index: 50;
		background: var(--bg-bar);
		color: var(--text-ink);
	}

	.nav__home {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		color: inherit;
		text-decoration: none;
	}

	.nav__link {
		color: var(--text-ink);
		text-decoration: none;
		text-decoration-thickness: 2px;
		text-underline-offset: 0.3em;
	}

	.nav__link:hover {
		text-decoration-line: underline;
	}

	.nav__link[aria-current='page'] {
		font-weight: 700;
		text-decoration-line: underline;
	}

	.nav__link--mobile {
		display: block;
		padding: 0.75rem 0;
		font-size: 1.25rem;
	}

	.nav__toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		padding: 0;
		border: none;
		border-radius: var(--radius-button);
		background: transparent;
		color: var(--text-ink);
		cursor: pointer;
	}

	.nav__toggle:hover {
		background: var(--accent-hover);
	}

	.nav__menu {
		margin: 0 var(--space-gutter);
		border-top: 1px solid var(--border-subtle);
	}

	.nav__menu[hidden] {
		display: none;
	}

	@media (min-width: 768px) {
		.nav__home {
			gap: 1.25rem;
		}

		/* Scoped styles beat the md:hidden utility, so hide the mobile parts here. */
		.nav__toggle,
		.nav__menu {
			display: none;
		}
	}
</style>
