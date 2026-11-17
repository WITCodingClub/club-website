<script lang="ts">
    import projects from './data/projects.json'
    import { Section } from '$lib';
</script>

{#each projects as project}
    <h1>{project.title}</h1>
    <h2>{project.description}</h2>
    <a href={project.link}>{project.link}</a>
    <a href={project.github}>{project.github}</a>
{/each}

<Section>
    <h1 class="display-l m-0">Projects</h1>
    <p>A collection of projects that are current and completed</p>
</Section>

<Section>
    <h4 class="display-subheader">Our Main Highlights</h4>
    <p>None at the moment! Check back in at a later time</p>
</Section>

<Section>
    <h4 class="display-subheader">Current Projects</h4>

    <div>
        <h6>WIT Calendar</h6>
        <img>
        <p></p>

    </div>
</Section>

<Section>
    <h4 class="display-subheader">Completed Projects</h4>
</Section>

<!-- Template -->
<!--<div>-->
<!--    <img> &lt;!&ndash; Project image &ndash;&gt;-->
<!--    <p></p> &lt;!&ndash; Description &ndash;&gt;-->
<!--    <p></p> &lt;!&ndash; Links &ndash;&gt;-->
<!--</div>-->
