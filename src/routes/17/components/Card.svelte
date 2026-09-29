<script lang="ts">
	import { isRevealed, type ZackObject } from "../api/index.svelte";
	import LockIcon from "./icons/LockIcon.svelte";

	let { object, revealObject, canReveal }: { object: ZackObject; revealObject(object: ZackObject): void; canReveal: boolean } =
		$props();

	let element: HTMLElement | null = $state(null);

	function onmousedown() {
		if (canReveal) {
			revealObject(object);
		} else if (element) {
			element.classList.remove("shake");
			setTimeout(() => element!.classList.add("shake"), 1);
		}
	}

	let end = $derived(["intro", "conclusion"].includes(object.name));
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="container">
	<div
		bind:this={element}
		class={{ card: true, revealed: isRevealed(object), locked: !isRevealed(object) && !canReveal }}
		{onmousedown}
	>
		<div class={{ "card-inner": true, "revealed": isRevealed(object), end }}>
			<div class={{ "card-front": true, "revealed": isRevealed(object), end }}>
				{#if canReveal}
					?
				{:else}
					<LockIcon stroke="white" width="60%" />
				{/if}
			</div>
			<div class={{ "card-back": true, "revealed": isRevealed(object), end }}>
				<div class="card-inner-inner">
					<!-- svelte-ignore a11y_missing_attribute -->
					<img src={object.image} />
				</div>
			</div>
		</div>
	</div>
	<span class={{ title: true, revealed: isRevealed(object), locked: !isRevealed(object) && !canReveal, end }}>
		{end ? object.name : isRevealed(object) ? `${object.name}'s ${object.object}` : "???"}
	</span>
</div>

<style class="card">
	@import url("https://fonts.googleapis.com/css2?family=Cause:wght@100..900&display=swap");

	.container {
		width: 100%;
		transition: scale 0.2s;
		display: flex;
		flex-direction: column;
	}

	@media (orientation: landscape) {
		.container {
			gap: 2vw;
		}

		.card,
		.card-front,
		.card-back {
			border-radius: 1vw;
		}
	}

	@media (orientation: portrait) {
		.container {
			gap: 3vw;
		}

		.card,
		.card-front,
		.card-back {
			border-radius: 2vw;
		}
	}

	.card {
		perspective: 1000px;
		width: 100%;
		aspect-ratio: 1;
		transition: scale 0.2s;
		display: flex;
		font-family: "Cause";
		align-items: center;
		justify-content: center;
		color: white;
		font-weight: 800;
		cursor: pointer;

		&:global(.shake) {
			animation: shake 0.3s ease-in-out;
		}

		&.locked {
			cursor: not-allowed;
			filter: brightness(80%);
		}

		&:not(.locked):hover {
			scale: 103%;
		}
	}

	.card {
		font-size: 6.5vw;
	}

	.card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.6s;
		transform-style: preserve-3d;

		&.revealed {
			transform: rotateY(180deg);
		}
	}

	.card-inner-inner {
		background-color: white;
		width: 100%;
		height: 100%;
		box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 20%);
		padding: 10%;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.card-front,
	.card-back {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		width: 100%;
		font-weight: 800;
		color: white;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.card-front {
		background-color: rgb(230, 225, 255);

		&.end {
			background-color: rgb(225, 242, 255);
		}

		&:not(.revealed) {
			box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 20%);
		}
	}

	.card-back {
		transform: rotateY(180deg);
		background-color: rgb(255, 225, 240);
		padding: 15%;

		&.end {
			background-color: rgb(255, 252, 225);
		}

		&.revealed {
			box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 20%);
		}
	}

	.title {
		font-family: "Cause";
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		transition: background-color 0.6s;

		&.locked {
			background-color: rgb(184, 180, 204);

			&.end {
				background-color: rgb(180, 194, 204);
			}
		}

		&.revealed {
			background-color: rgb(255, 225, 240);

			&.end {
				background-color: rgb(255, 252, 225);
			}
		}

		&:not(.revealed):not(.locked) {
			background-color: rgb(230, 225, 255);

			&.end {
				background-color: rgb(225, 242, 255);
			}
		}

		&::before {
			display: block;
			content: "";
			position: absolute;
			width: 0px;
			height: 0px;
			top: 0px;
			left: 0px;
		}

		&::after {
			display: block;
			content: "";
			position: absolute;
			width: 0px;
			height: 0px;
			top: 0px;
			right: 0px;
		}
	}

	@media (orientation: landscape) {
		.title {
			height: 2.5vw;
			font-size: 0.8vw;
			margin-bottom: 2vw;
			padding-left: 1.5vw;
			padding-right: 1.5vw;
			text-align: center;

			&::before {
				border-left: 1.25vw solid white;
				border-top: 1.25vw solid transparent;
				border-right: 1.25vw solid transparent;
				border-bottom: 1.25vw solid transparent;
			}

			&::after {
				border-right: 1.25vw solid white;
				border-top: 1.25vw solid transparent;
				border-left: 1.25vw solid transparent;
				border-bottom: 1.25vw solid transparent;
			}
		}
	}

	@media (orientation: portrait) {
		.title {
			height: 8vw;
			font-size: 2vw;
			margin-bottom: 1vw;
			padding-left: 1.75vw;
			padding-right: 1.75vw;
			text-align: center;

			&::before {
				border-left: 4vw solid white;
				border-top: 4vw solid transparent;
				border-right: 4vw solid transparent;
				border-bottom: 4vw solid transparent;
			}

			&::after {
				border-right: 4vw solid white;
				border-top: 4vw solid transparent;
				border-left: 4vw solid transparent;
				border-bottom: 4vw solid transparent;
			}
		}
	}

	@keyframes shake {
		0%,
		100% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-5px);
		}
		50% {
			transform: translateX(5px);
		}
		75% {
			transform: translateX(-3px);
		}
	}
</style>
