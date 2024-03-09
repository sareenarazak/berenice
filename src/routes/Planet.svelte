<script>
	export let name;
	export let color;
	export let radius;
	export let orbits;
	export let distance;
	export let time;

	const TAU = 2 * Math.PI;
	const CYCLE_TIME = 10_000;

 	$:cx = calculateX(time);
 	$:cy = calculateY(time);

 function calculateX(time) {
	 return  Math.cos((time * TAU * orbits) / CYCLE_TIME) * distance + 500 ;
 }

 function calculateY(time) {
	 return  Math.sin((time * TAU * orbits) / CYCLE_TIME) * distance + 500 ;

 }
</script>

<circle id="{name}" cx="{cx}" cy="{cy}" r="{radius}" fill="{color}" />
<circle cx="500" cy="500" r="{distance}" stroke="black" fill="none" />
