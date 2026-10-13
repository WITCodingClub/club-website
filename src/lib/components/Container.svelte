<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
	}

	let { children, class: className = '' }: Props = $props();
</script>

<!-- 1300px content column with the page gutter on each side. -->
<div
	class="mx-auto w-full max-w-[calc(var(--content-max)+2*var(--space-gutter))] px-gutter {className}"
>
	{@render children()}
</div>
