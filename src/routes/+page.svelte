<script>
	import { onMount } from 'svelte';
	import Planet from './Planet.svelte';

	const CYCLE_TIME = 10_000;

	let timeInput = 0;
	let playing = true;
	let buttonText = '⏸';

	onMount(async () =>	start());

	function handleClick() {
		playing = !playing;
		buttonText = playing ? '⏸' : '▸';
		start();
	}

	function start() {
		if (playing) {
			requestAnimationFrame(elapse);
		}
	}

	function elapse(currentTime, lastTime) {
		if (lastTime != null) {
			timeInput += (currentTime - lastTime) / 10;
			if (timeInput > CYCLE_TIME) {
				timeInput = timeInput % CYCLE_TIME;
			}
		}
		if (playing) {
			requestAnimationFrame(newTime => elapse(newTime, currentTime));
		}
	}
</script>
<main>
	<svg  viewBox="0 0 1000 1000"  xmlns="http://www.w3.org/2000/svg">
		<circle id="HD 110067" cx="500" cy="500" r="50" fill="#fdb813" />
		<Planet name="bat" color="blue" radius="22" orbits="54" distance="124" time="{timeInput}" />
		<Planet name="cap" color="cyan" radius="24" orbits="36" distance="194" time="{timeInput}" />
		<Planet name="drum" color="darkgreen" radius="29" orbits="24" distance="264" time="{timeInput}" />
		<Planet name="each" color="teal" radius="19" orbits="16" distance="334" time="{timeInput}" />
		<Planet name="fine" color="firebrick" radius="26" orbits="12" distance="404" time="{timeInput}" />
		<Planet name="gust" color="grey" radius="26" orbits="9" distance="474" time="{timeInput}" />
	</svg>
</main>
<footer>
	<button class="control" on:click={handleClick}>{buttonText}</button>
	<input class="slider" type="range" id="time" min="0" max="10000" bind:value="{timeInput}" />
</footer>

<style>
		main {
				width: calc(100vmin - 50px);
				height: calc(100vmin - 50px);
		}

		svg {
				width: 100%;
				height: 100%;
		}

		footer {
				height: 50px;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
		}

		.slider {
				width: 100%;
				margin: 10px;
		}

		.control {
				margin: 10px;
		}
</style>
