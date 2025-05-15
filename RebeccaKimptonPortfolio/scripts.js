
// document.addEventListener("DOMContentLoaded", () => {
//     const canvas = document.getElementById("tutorial");
//     if (canvas.getContext) {
//         const ctx = canvas.getContext("2d");
//         // drawing code here
//         ctx.fillStyle = "green";
//         ctx.fillRect(10, 10, 150, 100);
//     } else {
//         // canvas-unsupported code here
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("squares");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        function draw() {
            ctx.fillStyle = "rgb(200 0 0)";
            ctx.fillRect(10, 10, 50, 50);

            ctx.fillStyle = "rgb(0 0 200 / 50%)";
            ctx.fillRect(30, 30, 50, 50);
            }

        draw();
        }
    });

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("tutorial");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        // drawing code here
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    } else {
        // canvas-unsupported code here
    }
});
