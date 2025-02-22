
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("tutorial");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        // drawing code here
        ctx.fillStyle = "green";
        ctx.fillRect(10, 10, 150, 100);
    } else {
        // canvas-unsupported code here
    }
});
