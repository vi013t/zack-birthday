<script>
	import balloons from "../assets/images/balloons.png";
	import violetsFlowerImage from "../routes/17/assets/images/objects/violets_flower.jpg";
	import bear from "./17/assets/images/decorations/bear.png";
	import cat from "./17/assets/images/decorations/cat.png";
	import catButt from "./17/assets/images/decorations/cat_butt.png";
	import catHead from "./17/assets/images/decorations/cat_head.png";
	import LockIcon from "./17/components/icons/LockIcon.svelte";
</script>

<main>
	<img class="balloons" src={balloons} alt="balloons" />
	<img class="balloons-2" src={balloons} alt="balloons" />
	<img class="balloons-right" src={balloons} alt="balloons" />
	<img class="balloons-right-2" src={balloons} alt="balloons" />

	<span class="title">🎉 &nbsp; Zack Birthdays &nbsp; 🎉</span>

	<div class="wrapper-17">
		<a class="birthday-17" href="/17">
			<div class="circle-17"></div>
			<span class="number-17">17</span>
			<div class="cards-17">
				<div class="card-17 unlocked">
					<div class="image-wrapper-17">
						<img src={violetsFlowerImage} alt="violets flower" />
					</div>
				</div>
				<div class="card-17 unlocked">
					<div class="image-wrapper-17">
						<img src={violetsFlowerImage} alt="violets flower" />
					</div>
				</div>
				<div class="card-17">?</div>
				<div class="card-17">?</div>
				<div class="card-17">?</div>
				<div class="card-17">?</div>
				<div class="card-17 locked">
					<LockIcon stroke="white" style="width: 50%;" />
				</div>
				<div class="card-17 locked">
					<LockIcon stroke="white" style="width: 50%;" />
				</div>
				<div class="card-17 locked">
					<LockIcon stroke="white" style="width: 50%;" />
				</div>
			</div>
		</a>

		<img class="bear-17" src={bear} alt="bear" />
		<img class="cat" src={cat} alt="cat" />
		<img class="cat-head-17" src={catHead} alt="cat head" />
		<img class="cat-butt-17" src={catButt} alt="cat butt" />
	</div>

	<footer>made with luv by miss violet cherry valentine &lt;3&lt;3</footer>
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Cause:wght@100..900&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Contrail+One&display=swap");

	main {
		padding-top: 2rem;
		background-image: linear-gradient(to bottom right, #1e1e2e, #181825);
		min-height: 100%;
		text-shadow: 0px 0px 0.5rem black;
		display: flex;
		flex-direction: column;
		gap: 4vw;
		align-items: center;
	}

	@media (orientation: landscape) {
		.title {
			font-size: 5vw;
		}
	}

	@media (orientation: portrait) {
		.title {
			font-size: 10vw;
			z-index: 99;
			text-shadow: 0px 0px 0.25rem black;
		}
	}

	.title {
		font-family: "Contrail One";
		color: #cdd6f4;
		text-transform: uppercase;
	}

	.cards-17 {
		display: flex;
		margin-left: 10%;
		width: 200%;
		padding: 1%;
		gap: 1.25%;
	}

	.card-17 {
		background-color: lavender;
		border-radius: 10%;
		height: 100%;
		aspect-ratio: 1;
		color: white;
		font-weight: 900;
		font-family: "Cause";
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 3vw;
		box-shadow: 0.1vw 0.1vw 0.1vw rgba(0, 0, 0, 20%);

		&.locked {
			filter: brightness(80%);
		}

		&.unlocked {
			background-color: rgb(255, 225, 240);
		}

		.image-wrapper-17 {
			width: 70%;
			height: 70%;
			background-color: white;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 10%;
			box-shadow: 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 20%);

			img {
				width: 100%;
				height: 100%;
			}
		}
	}

	.cat-butt-17 {
		position: absolute;
		width: 3%;
		bottom: 0px;
		left: 80%;
		transform: translateY(85%);
	}

	.bear-17 {
		position: absolute;
		width: 3%;
		left: 0px;
		transform: translateX(-81.01%);
		top: 20%;
	}

	.cat-head-17 {
		position: absolute;
		width: 3%;
		top: 0px;
		left: 20%;
		transform: translateY(-92%);
	}

	.cat {
		position: absolute;
		width: 3%;
		top: 0px;
		left: 60%;
		transform: translateY(-92%);
	}

	.circle-17 {
		border-radius: 50%;
		width: 22%;
		aspect-ratio: 1;
		box-shadow: 0.2vw 0vw 0.2vw rgba(0, 0, 0, 30%);
		position: absolute;
		top: 50%;
		left: 0px;
		transform: translate(-25%, -50%);
		background-color: lavender;
	}

	.number-17 {
		font-family: "Cause";
		font-size: 3vw;
		font-weight: 900;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		aspect-ratio: 1;
		background-color: white;
		box-shadow: 0.25vw 0.25vw 0.25vw rgba(0, 0, 0, 20%);

		&,
		&:hover,
		&:active {
			color: rgb(167, 158, 184);
		}
	}

	@media (orientation: landscape) {
		.wrapper-17 {
			height: 8vw;
		}
	}

	@media (orientation: portrait) {
		.wrapper-17 {
			width: 90%;
		}
	}

	.wrapper-17 {
		aspect-ratio: 8.2 / 1;
		position: relative;
		transition: height 0.15s;

		&:hover {
			height: 8.1vw;
		}
	}

	.birthday-17 {
		height: inherit;
		aspect-ratio: inherit;
		scale: inherit;
		display: flex;
		overflow: hidden;
		position: relative;
		padding: 2%;
		box-shadow: 0.25rem 0.25rem 0.5rem black;
		border-radius: 0.8vw;
		transition: scale 0.1s;
		background-color: white;
	}

	.balloons {
		position: fixed;
		height: 70%;
		left: 0px;
		transform: translateX(-50%);
		top: -5%;
	}

	.balloons-2 {
		position: fixed;
		height: 70%;
		left: 0px;
		transform: translateX(-50%);
		top: 50%;
	}

	.balloons-right {
		position: fixed;
		height: 70%;
		right: 0px;
		transform: translateX(60%);
		top: 0%;
	}

	.balloons-right-2 {
		position: fixed;
		height: 70%;
		right: 0px;
		transform: translateX(60%);
		top: 50%;
	}

	footer {
		margin-top: auto;
		color: white;
		padding: 1em;
		font-family: sans-serif;
		color: #313244;
		font-size: 0.8rem;
	}
</style>
