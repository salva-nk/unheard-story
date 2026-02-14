// Smooth fade in
document.body.style.opacity = "0";
document.body.style.transition = "opacity 2s ease";

window.onload = function () {
    document.body.style.opacity = "1";
};

// Button click subtle effect
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});
