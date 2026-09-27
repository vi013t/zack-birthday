<script lang="ts">
	import { allObjects, isRevealed, reset, reveal, type ZackObject } from "./api/index.svelte";
	import bear from "./assets/images/decorations/bear.png";
	import cat from "./assets/images/decorations/cat.png";
	import catButt from "./assets/images/decorations/cat_butt.png";
	import catHead from "./assets/images/decorations/cat_head.png";
	import catLeft from "./assets/images/decorations/cat_left.png";
	import catSide from "./assets/images/decorations/cat_side.png";
	import Card from "./components/Card.svelte";
	import LeftArrowIcon from "./components/icons/LeftArrowIcon.svelte";

	let selectedObject: ZackObject = $state(allObjects[0]);
	let title = $derived.by(() =>
		selectedObject
			? ["intro", "conclusion"].includes(selectedObject.name)
				? selectedObject.name
				: `${selectedObject.name}'s ${selectedObject.object}`
			: "Start here",
	);
	let video: HTMLVideoElement | null = $state(null);

	function revealObject(object: ZackObject) {
		reveal(object);
		selectedObject = object;
		if (video) {
			video.src = object.video!;
			video.load();
		}
		setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 1000);
	}

	function doReset() {
		reset();
		selectedObject = allObjects[0];
		if (video) {
			video.src = allObjects[0].video!;
			video.load();
		}
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
</script>

<main>
	<a class="back" href="/"><LeftArrowIcon stroke="white" style="width: 5rem;" /></a>
	<div class="inner">
		<span class="title">Happy Birthday Zack!! :D</span>

		<!-- svelte-ignore a11y_media_has_caption -->
		<video bind:this={video} class="video" controls src={allObjects[0].video}></video>
		<span class="video-title">{title}</span>

		<div class="cards">
			{#each allObjects as object, index}
				<Card {object} {revealObject} canReveal={index === 0 || isRevealed(allObjects[index - 1])} />
			{/each}
		</div>

		<img class="bear" src={bear} alt="bear" />
		<img class="cat-left" src={catLeft} alt="cat" />
		<img class="cat-side" src={catSide} alt="cat" />
		<img class="cat" src={cat} alt="cat" />
		<img class="cat-butt" src={catButt} alt="cat butt" />
		<img class="cat-head" src={catHead} alt="cat head" />
	</div>

	<button class="reset" onmousedown={doReset}>Reset</button>
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Cause:wght@100..900&display=swap");

	.title {
		text-transform: uppercase;
		font-family: "Cherry Bomb One";
		color: rgb(220, 200, 255);
		font-size: 3vw;
	}

	@media (orientation: landscape) {
		.title {
			font-size: 3vw;
		}
	}

	@media (orientation: portrait) {
		.title {
			font-size: 5vw;
		}
	}

	:global(html, body) {
		background-color: lavender;
	}

	@media (orientation: landscape) {
		.bear,
		.cat-left,
		.cat-side,
		.cat,
		.cat-head {
			width: 2vw;
		}

		.cat-butt {
			width: 2.5vw;
		}
	}

	@media (orientation: portrait) {
		.bear,
		.cat-left,
		.cat-side,
		.cat,
		.cat-head {
			width: 5vw;
		}

		.cat-butt {
			width: 7vw;
		}
	}

	.bear {
		position: absolute;
		left: 0px;
		transform: translateX(-84%);
		top: 20%;
	}

	.cat-left {
		position: absolute;
		left: 0px;
		transform: translateX(-93%);
		top: 80%;
	}

	.cat-side {
		position: absolute;
		right: 0px;
		transform: translateX(82%);
		top: 60%;
	}

	.cat {
		position: absolute;
		top: 0px;
		left: 60%;
		transform: translateY(-92%);
	}

	.cat-head {
		position: absolute;
		top: 0px;
		left: 20%;
		transform: translateY(-92%);
	}

	.cat-butt {
		position: absolute;
		bottom: 0px;
		left: 80%;
		transform: translateY(85%);
	}

	.video {
		aspect-ratio: 16 / 9;
		background-color: lavender;
	}

	@media (orientation: landscape) {
		.video {
			width: 70%;
			border-radius: 0.8vw;
		}
	}

	@media (orientation: portrait) {
		.video {
			width: 95%;
			border-radius: 2vw;
		}
	}

	.video-title {
		font-family: "Cherry Bomb One";
		text-transform: uppercase;
		color: rgb(220, 200, 255);
	}

	@media (orientation: landscape) {
		.video-title {
			font-size: 2.5vw;
		}
	}

	@media (orientation: portrait) {
		.video-title {
			font-size: 5vw;
		}
	}

	main {
		background-color: lavender;
		width: 100%;
		min-height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
		padding-bottom: 2rem;
		padding-top: 5rem;
	}

	@media (orientation: landscape) {
		main {
			padding: 14vw;
			padding-bottom: 2rem;
			padding-top: 5rem;
		}
	}

	@media (orientation: portrait) {
		main {
			padding: 5vw;
			padding-bottom: 1.5rem;
			padding-top: 12vw;
		}
	}

	.inner {
		position: relative;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		width: 100%;
		gap: 1rem;
		box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 30%);
		padding: 4vw;
	}

	@media (orientation: landscape) {
		.cards {
			padding: 1rem;
		}
	}

	.cards {
		width: 100%;
		gap: 2vw;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	.reset {
		background-color: white;
		padding: 1rem;
		font-size: 1rem;
		width: 20rem;
		border-radius: 1rem;
		box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 20%);
		font-family: "Cause";
		color: rgb(10, 0, 20);
		transition: scale 0.2s;

		&:hover {
			scale: 103%;
		}
	}

	@media (orientation: landscape) {
		.back {
			width: 3vw;
			height: 3vw;
		}
	}

	@media (orientation: portrait) {
		.back {
			width: 8vw;
			height: 8vw;
		}
	}

	.back {
		position: fixed;
		top: 0.5rem;
		left: 0.5rem;
		transition: scale 0.2s;

		&:hover {
			scale: 110%;
		}
	}
</style>
