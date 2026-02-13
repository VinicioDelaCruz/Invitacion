document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.querySelector(".hearts");

    function createHeart() {
        const heart = document.createElement("span");
        heart.classList.add("heart");
        
        let size = Math.random() * 40 + 20; // Tamaño entre 20px y 60px
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        
        heart.style.left = `${Math.random() * 100}%`; // Posición aleatoria en el ancho
        heart.style.animationDuration = `${Math.random() * 5 + 2}s`; // Duración entre 2 y 5 segundos

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }

    setInterval(createHeart, 500);
});
