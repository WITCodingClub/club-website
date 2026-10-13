<script lang="ts">
	import logo from '$lib/assets/witcc_logo.png';
	import { contactEmail, socialLinks, type SocialLink } from '$lib/site';

	interface Props {
		email?: string;
		socials?: SocialLink[];
	}

	let { email = contactEmail, socials = socialLinks }: Props = $props();
</script>

<footer class="footer label-bar">
	<div
		class="flex w-full flex-col items-start gap-6 px-gutter py-8 md:flex-row md:items-center md:justify-between"
	>
		<div class="flex items-center gap-4 md:gap-9">
			<img src={logo} alt="" width="64" height="64" class="size-[var(--logo-size)]" />
			<div>
				<p class="m-0">Contact</p>
				<a class="footer__link" href="mailto:{email}">{email}</a>
			</div>
		</div>

		{#if socials.length > 0}
			<div class="flex items-center gap-3 md:flex-col md:gap-2">
				<p class="m-0">Follow us</p>
				<ul class="flex gap-2">
					{#each socials as social (social.href)}
						<li>
							<a
								class="footer__icon"
								href={social.href}
								target="_blank"
								rel="me noopener noreferrer"
								aria-label={social.label}
							>
								{#if social.icon === 'instagram'}
									<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
										<rect x="2" y="2" width="20" height="20" rx="5.5" fill="none" stroke="currentColor" stroke-width="2" />
										<circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2" />
										<circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
									</svg>
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</footer>

<style>
	.footer {
		background: var(--bg-bar);
		color: var(--text-ink);
	}

	.footer__link {
		color: inherit;
		text-decoration: none;
		text-underline-offset: 0.3em;
		overflow-wrap: anywhere;
	}

	.footer__link:hover {
		text-decoration: underline;
	}

	.footer__icon {
		display: grid;
		place-items: center;
		width: 44px;
		height: 44px;
		border-radius: var(--radius-button);
		color: inherit;
		transition: background-color 0.15s;
	}

	.footer__icon:hover {
		background: var(--accent-hover);
	}
</style>
