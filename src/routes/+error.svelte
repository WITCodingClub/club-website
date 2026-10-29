<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import logo from '$lib/assets/witcc_logo.png';
	import { contactEmail } from '$lib/site';

	interface ErrorCopy {
		title: string;
		heading: string;
		lede: string;
	}

	/** Copy for the status codes a visitor can hit. Other codes use `fallback`. */
	const copyByStatus: Record<number, ErrorCopy> = {
		400: {
			title: 'Bad request',
			heading: 'That request did not make sense.',
			lede: 'The link or form sent something we could not read. Go back and try again.'
		},
		403: {
			title: 'No access',
			heading: 'This page is off limits.',
			lede: 'You do not have access to this page.'
		},
		404: {
			title: 'Page not found',
			heading: 'This page wandered off.',
			lede: 'We could not find the page you asked for. It may have moved, or the link may be wrong.'
		},
		429: {
			title: 'Too many requests',
			heading: 'Slow down a little.',
			lede: 'We got too many requests from you in a short time. Wait a minute, then try again.'
		},
		503: {
			title: 'Down for maintenance',
			heading: 'We will be right back.',
			lede: 'The site is down for a short time. Try again in a few minutes.'
		}
	};

	/** Other 4xx codes: the request was the problem, so do not ask for a bug report. */
	const clientFallback: ErrorCopy = {
		title: 'Request failed',
		heading: 'That request did not work.',
		lede: 'Go back and try again, or start from the home page.'
	};

	/** 5xx codes other than 503. */
	const serverFallback: ErrorCopy = {
		title: 'Something went wrong',
		heading: 'Something broke on our end.',
		lede: 'We hit a problem loading this page. Try again in a moment.'
	};

	const serverError = $derived(page.status >= 500);
	const copy = $derived(
		copyByStatus[page.status] ?? (serverError ? serverFallback : clientFallback)
	);
	// Only server errors are our bug, so only they ask the visitor to report it.
	const showSupport = $derived(serverError);
</script>

<svelte:head>
	<title>{copy.title} | WIT Coding Club</title>
</svelte:head>

<!-- +layout.svelte hides the Nav and Footer on this page, so it fills the screen. -->
<section
	class="flex min-h-dvh items-center bg-bg-error px-gutter py-section font-code text-text-ink"
>
	<div class="mx-auto w-full max-w-xl">
		<a href={resolve('/')} class="inline-block" aria-label="WIT Coding Club home">
			<img src={logo} alt="" width="96" height="96" class="size-20 md:size-24" />
		</a>

		<p class="mt-8 mb-0 text-lg">
			<span class="font-bold">{page.status}</span>
			{copy.title}
		</p>

		<h1 class="mt-6 mb-0 text-2xl leading-tight font-bold md:text-3xl">{copy.heading}</h1>
		<p class="mt-3 mb-0 text-lg">{copy.lede}</p>

		{#if showSupport}
            <p class="mt-3 mb-0 text-lg">
                If the issue persists, email
                <a class="error__link" href="mailto:{contactEmail}">{contactEmail}</a>.
            </p>
		{/if}

		<a class="error__button mt-10" href={resolve('/')}>Back to home</a>
	</div>
</section>

<style>
	.error__link {
		font-weight: 500;
		line-height: normal;
		color: var(--text-ink);
		text-decoration: underline;
		text-underline-offset: 3px;
		overflow-wrap: anywhere;
	}

	.error__link:hover {
		color: var(--text-muted);
	}

	.error__button {
		display: inline-block;
		padding: 0.75rem 1.25rem;
		border: 2px solid var(--text-ink);
		border-radius: var(--radius-button);
		color: inherit;
		font-weight: 700;
		text-decoration: none;
		transition: background-color 0.15s;
	}

	.error__button:hover {
		background: var(--accent-hover);
	}
</style>
