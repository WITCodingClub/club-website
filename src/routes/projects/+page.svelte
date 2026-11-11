<script>
    import projects from './data/projects.json'
</script>

{#each projects as project }
    <h1>{project.title}</h1>
    <h2>{project.description}</h2>
    <a href={project.link}>{project.link}</a>
    <a href={project.github}>{project.github}</a>
{/each}