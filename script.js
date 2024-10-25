// JavaScript to randomly assign animations on page load
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.box');
    
    // Array of animation classes
    const animations = ['scaleUp', 'rotate', 'bounce', 'wiggle', 'fade', 'slide'];
    
    // Randomly assign an animation to each box
    boxes.forEach(box => {
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        box.style.animationName = randomAnimation;
    });
});
