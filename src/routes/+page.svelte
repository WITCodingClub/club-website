<!-- Homepage -->

<script lang="ts">

	/*
		Import the shared Section component used to structure the homepage content
	*/
	import { Section } from '$lib';

</script>


<!-- HTML -->
<Section>
	<h1 class="display-l m-0">We're the WIT<br>Coding Club</h1>
	<p class='homeParagraph'>
		Our purpose is to bring together a community of students who are interested and motivated in practicing their programming abilities. We're open to all students across the COF.
		<br>
		<!-- TODO: Write script that updates the meeting time -->
		<!-- <br>Our next meeting will be 0/00, 0:00 PM at Beatty 000. -->
	</p>
</Section>


<!-- Page-specific CSS -->
<style>

	h1 {
		font-size: 4em;
	}

	.homeParagraph {
		margin-top: 40px;
		font-size: 1.5em;
	}


	@media (max-width: 768px) {
		
		h1 {
			font-size: 3em;
		}

		.homeParagraph {
			font-size: 1em;
		}

	}
	
</style>