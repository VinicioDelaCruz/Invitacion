document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.querySelector(".hearts");

    function createHeart() {
        const heart = document.createElement("span");
        heart.classList.add("falling-heart");
        
        let size = Math.random() * 40 + 20; // Tamaño aleatorio
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        
        heart.style.left = `${Math.random() * 100}%`; // Posición aleatoria
        heart.style.animationDuration = `${Math.random() * 5 + 2}s`;

        heartsContainer.appendChild(heart);

        setTimeout(() => { heart.remove(); }, 7000);
    }

    setInterval(createHeart, 500);
});

