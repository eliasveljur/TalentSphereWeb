function circleLines(rays, elem, lineHeight) {
  const numberOfRays = rays;
  const circleContainer = document.querySelector(`.${elem}`);

  for (let i = 0; i < numberOfRays; i++) {
    const ray = document.createElement("div");
    ray.className = "ray";

    // Set styles directly in JavaScript
    ray.style.position = "absolute";
    ray.style.background = "white";
    ray.style.width = "3px"; /* Width of the ray */
    ray.style.height = `${lineHeight}px`; /* Length of the ray */
    ray.style.top = "50%"; /* Center vertically */
    ray.style.left = "50%"; /* Center horizontally */
    ray.style.transformOrigin = "bottom"; /* Rotate from the bottom */
    ray.style.transform =
      "translate(-50%, -100%)"; /* Adjust to center the ray */

    const angle = (i * 360) / numberOfRays;
    ray.style.transform += ` rotate(${angle}deg)`; // Append rotation to existing transform

    circleContainer.appendChild(ray);
  }
}

function linesInDot() {
  const linesContainer = document.getElementById("lines");
  const numberOfLines = 51;
  const lineLength = 80; // Adjusted length of the lines

  for (let i = 0; i < numberOfLines; i++) {
    const angle = (i * 360) / numberOfLines;
    const line = document.createElement("div");
    line.className = "line";
    line.style.width = "6px";
    line.style.height = `${lineLength}px`; // Use the new line length
    line.style.transform = `rotate(${angle}deg)`;
    linesContainer.appendChild(line);
  }
}

function surroundCircle(numCircles, radius, elem, addedCircle) {
  const circleContainer = document.querySelector(`.${elem}`);

  for (let i = 0; i < numCircles; i++) {
    const angle = (i * 2 * Math.PI) / numCircles; // Угол в радианах
    const x = 50 + radius * Math.cos(angle); // X координата
    const y = 50 + radius * Math.sin(angle); // Y координата
    const surroundingCircle = document.createElement("div");
    surroundingCircle.classList.add(addedCircle);
    surroundingCircle.style.top = `${y}%`;
    surroundingCircle.style.left = `${x}%`;
    surroundingCircle.style.transform = "translate(-50%, -50%)"; // Центрируем окружности
    circleContainer.appendChild(surroundingCircle);
  }
}

circleLines(80, "circle_2", 200);
circleLines(130, "sun", 1275);
circleLines(80, "circle_4", 140);
linesInDot();
surroundCircle(8, 135, "center_dot", "surrounding_circle");
surroundCircle(8, 80, "circle_6_inside", "surrounding_circle_50");
surroundCircle(8, 60, "circle_6", "surrounding_circle_20");
window.onload = function () {
  window.scrollTo(0, 0);
};
