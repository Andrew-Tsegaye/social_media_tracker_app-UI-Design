/*Chart Setup*/
let lineChart;

// Get canvas element from the DOM
const ctx = document.getElementById("lineChart").getContext("2d");

/* Create a function that odds
the chart with a color as the function argument */
function chartSetup(accentColor) {
  // Create the chart using Chart JS
  lineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["11:00am", "12:00am", "1:00pm", "2:00pm", "3:00pm"],
      datasets: [
        {
          label: "Views",
          data: [0, 2500, 1500, 2500, 2000, 1500, 2500, 3000],
          backgroundColor: accentColor,
          borderColor: accentColor,
        },
      ],
    },
    options: {
      maintainAspectRation: false,
    },
  });
}

/*Run the chart function with the default accent color*/
chartSetup("#654ce5");

/*Dark Mode Setup*/
const darkToggleIcon = document.querySelector("#darkToggle");
const panels = document.querySelectorAll(".panel");

darkToggleIcon.addEventListener("click", (e) => {
  /*Toggle Icon*/
  e.target.classList.toggle("fa-sun");
  /*Toggle Dark Mode*/
  document.body.classList.toggle("dark-mode");
});

/*Accent Color Change*/
const r = document.querySelector(":root");
const colors = document.querySelectorAll(".colors li");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    /*Get the clicked element background property value from the CSS*/
    const element = window.getComputedStyle(color);
    let bg = element.getPropertyValue("background-color");

    /*Reset the accent CSS variable to the new color*/
    r.style.setProperty("--accent", bg);

    /*Destroy Previous Chart*/
    lineChart.destroy();
    /*Create new chart with new accent color*/
    chartSetup(bg);
  });
});
