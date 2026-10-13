<script lang="ts">
	import logo from '$lib/assets/witcc_logo.png';

	const email = 'rso_witcc@wit.edu';
	const instagram = 'https://instagram.com/wit_coding_club';
</script>

<footer class="bar">
	<div class="container">
		<div class="contact">
			<img src={logo} alt="WIT Coding Club logo" width="64" height="64" />
			<div>
				<p>Contact</p>
				<a href="mailto:{email}">{email}</a>
			</div>
		</div>

		<div class="social">
			<p>Follow us</p>
			<a
				class="icon-button"
				href={instagram}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Instagram (@wit_coding_club)"
			>
				<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
					<rect x="2" y="2" width="20" height="20" rx="5.5" fill="none" stroke="currentColor" stroke-width="2" />
					<circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2" />
					<circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
				</svg>
			</a>
		</div>
	</div>
</footer>

<style>
	.bar {
		background: var(--bar-bg);
		font-size: 1.5rem;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		max-width: var(--content-width);
		margin: 0 auto;
		padding: 2rem var(--gutter);
	}

	p {
		margin: 0;
	}

	.contact {
		display: flex;
		align-items: center;
		gap: 2.25rem;
	}

	.contact img {
		display: block;
	}

	.contact a {
		color: inherit;
		text-decoration: none;
		overflow-wrap: anywhere;
	}

	.contact a:hover {
		text-decoration: underline;
	}

	.social {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.icon-button {
		display: grid;
		place-items: center;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 0.75rem;
		color: inherit;
		transition: background-color 0.15s;
	}

	.icon-button:hover,
	.icon-button:focus-visible {
		background: rgb(0 0 0 / 0.1);
	}

	@media (max-width: 760px) {
		.bar {
			font-size: 1.1rem;
		}

		.container {
			flex-direction: column;
			align-items: flex-start;
		}

		.contact {
			gap: 1rem;
		}

		.contact img {
			width: 48px;
			height: 48px;
		}

		.social {
			flex-direction: row;
			gap: 0.75rem;
		}
	}
</style>
