<script>
  /**
   * Planet ==> name, color, radius, orbital period, distance
   *  54:36:24:16:12:9
   */
  import Planet from './Planet.svelte';

  const CYCLE_TIME = 10_000;

  let timeInput = 0;
  let playing = false;

  function handleClick() {
    playing = !playing;
    start();
  }

  function start() {
    if (playing) {
      requestAnimationFrame(elapse);
    }
  }

  function elapse(currentTime, lastTime) {
    if(lastTime != null) {
        timeInput += (currentTime - lastTime) / 10;
        if(timeInput > CYCLE_TIME) {
          timeInput = timeInput % CYCLE_TIME;
        }
    }
    if(playing) {
      requestAnimationFrame(newTime => elapse(newTime, currentTime));
    }
  }
</script>
<!--54:36:24:16:12:9-->
<h1>Welcome to Berenice</h1>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" on:click={handleClick}>
  <circle cx="150" cy="100" r="30" fill="black"/>
  <Planet name="bat" color="blue" radius="10" orbits="54" distance="40" time="{timeInput}"/>
  <Planet name="cap" color="cyan" radius="13" orbits="36" distance="50" time="{timeInput}"/>
  <Planet name="drum" color="darkgreen" radius="15" orbits="24" distance="60" time="{timeInput}"/>
  <Planet name="each" color="teal" radius="8" orbits="16" distance="70" time="{timeInput}"/>
  <Planet name="fine" color="firebrick" radius="16" orbits="12" distance="90" time="{timeInput}"/>
  <Planet name="gust" color="goldenrod" radius="20" orbits="9" distance="100" time="{timeInput}"/>
</svg>
<label for="time">Enter time</label>
<input type="range" id="time" min="0" max="10000" bind:value="{timeInput}"/>
<label for="angle">Enter angle</label>
