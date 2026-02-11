// Minimale Interaktivität, z. B. für einen "Nach oben"-Button
window.addEventListener("scroll", function() {
    const scrollToTop = document.querySelector(".scroll-to-top");
    if (window.pageYOffset > 300) {
        if (!scrollToTop) {
            const button = document.createElement("button");
            button.className = "scroll-to-top";
            button.innerHTML = "↑";
            button.style.position = "fixed";
            button.style.bottom = "20px";
            button.style.right = "20px";
            button.style.backgroundColor = "var(--primary-color)";
            button.style.color = "white";
            button.style.border = "none";
            button.style.borderRadius = "50%";
            button.style.width = "50px";
            button.style.height = "50px";
            button.style.cursor = "pointer";
            button.style.zIndex = "1000";
            button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
            document.body.appendChild(button);
        }
    } else {
        const button = document.querySelector(".scroll-to-top");
        if (button) button.remove();
    }
});
