<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import Container from './Container.svelte';

	type Tone = 'page' | 'bar';

	interface Props extends Omit<HTMLAttributes<HTMLElement>, 'class' | 'children'> {
		/** Background token. */
		tone?: Tone;
		children: Snippet;
		class?: string;
		/** Classes for the inner Container. */
		containerClass?: string;
	}

	let {
		tone = 'page',
		children,
		class: className = '',
		containerClass = '',
		...rest
	}: Props = $props();

	const toneClass: Record<Tone, string> = {
		page: 'bg-bg-page text-text-ink',
		bar: 'bg-bg-bar text-text-ink'
	};
</script>

<!-- Full-width band with section padding and a centered Container. -->
<section class="py-section {toneClass[tone]} {className}" {...rest}>
	<Container class={containerClass}>
		{@render children()}
	</Container>
</section>
