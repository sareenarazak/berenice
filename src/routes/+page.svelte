<script>
  const TAU = 2 * Math.PI;
  const CYCLE_TIME = 10_000;
  let timeInput = 0;
  let playing = false;
  let bAngle = 0;
  let rAngle = 0;

  let bx = 150;
  let by = 100;
  let rx = 150;
  let ry = 100;
  function handleClick() {
    playing = !playing;
    start();
  }

  function updateTime() {
    console.log(`timeInput is ${timeInput}`);
    updatePosition(timeInput);
  }

  function start() {
    if (playing) {
      console.log("Playing");
      requestAnimationFrame(elapse);
    } else {
      console.log("Not playing");
    }
  }

  function elapse(currentTime, lastTime) {
    if(lastTime != null) {
        timeInput += (currentTime - lastTime) ;
        if(timeInput > CYCLE_TIME) {
          timeInput = timeInput % CYCLE_TIME;
        }
        updatePosition(timeInput);

    }
    if(playing) {
      requestAnimationFrame(newTime => elapse(newTime, currentTime));
    }
  }

  function updatePosition(time) {
    bAngle = (time * TAU * 2) / CYCLE_TIME;
    rAngle = (time * TAU * 3) / CYCLE_TIME;

    bx = Math.cos(bAngle) * 80 + 150 ;
    by = Math.sin(bAngle) * 80 + 100;
    rx = Math.cos(rAngle) * 50 + 150 ;
    ry = Math.sin(rAngle) * 50 + 100;
  }
</script>

<h1>Welcome to Berenice</h1>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="blue"  on:click={handleClick}/>
  <circle cx="{bx}" cy="{by}" r="10" fill="black"/>
  <circle cx ="{rx}" cy="{ry}" r="13" fill="red"/>

</svg>
<label for="time">Enter time</label>
<input type="range" id="time" min="0" max="10000" bind:value="{timeInput}" on:change={updateTime}/>
<label for="angle">Enter angle</label>
<input type="text" id="angle" value="{bAngle}"/>
