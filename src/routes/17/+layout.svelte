<script lang="ts">
	import globalCss from "../../app.css?url";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href={globalCss} />
	<link rel="icon" href="/favicon.png" />
	<title>happy birthday zack :D</title>
</svelte:head>

{@render children()}
