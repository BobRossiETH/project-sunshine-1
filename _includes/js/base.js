// Enable tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

window.onload = setSun(100);

function setSun(percent) {
  let sunPercent = percent/100;
  // let xBase = -55;
  // let yBase = -45;
  // let xRange = 70;
  // let yRange = 80;
  let xBase = -85;
  let yBase = -85;
  let xRange = 30;
  let yRange = 40;
  let xFinal = xBase + (sunPercent*xRange);
  let yFinal = yBase + (sunPercent*yRange);
  let sun = document.getElementById('sun');
  let translate = "translate(" + xFinal + "%, " + yFinal + "%)";
  sun.style.transform = translate;
  // console.log(translate)

  // mostly hidden base point
  // transform: translate(-85%, -85%);
  // max to show
  // transform: translate(-55%, -45%);

  let cloudPercent = percent/100*2;
  let cloudBase = 0.7;
  let cloudRange = 0.7;
  let cloudFinal = cloudBase - (cloudPercent*cloudRange);
  cloudFinal = (cloudFinal < 0) ? 0 : cloudFinal;
  let clouds = document.getElementById('clouds');
  let color = "rgba(153,153,153," + cloudFinal + ")";
  clouds.style.background = color;
  // console.log(color)

  // base point, really grey
  // rgba(153,153,153,0.7);
  // max to hide
  // rgba(153,153,153,0);
}


// (goal-current)/goal

// -0.2
// -0.214285714
// -0.475
// 0.2
// 0.2
// -0.363636364



// -0.2-0.214285714-0.475+0.2+0.2-0.363636364
// taylorzhangtianran@mask.io
// luminationbyjj@gmail.com
// suratchai-1@hotmail.com
// {{query_validatedPetitions.data}}
// [{columnName: "Email", filterValue:{{input_search.value}}, operator: "equals" }]



