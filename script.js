const letter = document.getElementById('letter');
const flap = document.querySelector('.envelope-flap');
const content = document.querySelector('.letter-content');
let isOpen = false;

letter.addEventListener('click', function() {
    if (!isOpen) {
        flap.style.transform = 'rotateX(-180deg)';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
        isOpen = true;
    } else {
        flap.style.transform = 'rotateX(0deg)';
        content.style.opacity = '0';
        content.style.transform = 'translateY(-100%)';
        isOpen = false;
    }
});

// Fish Movement Logic
const fishContainer = document.getElementById('fishContainer');
for (let i = 0; i < 30; i++) { 
    let smallFish = document.createElement('img');
    smallFish.src = 'fish.png'; 
    smallFish.className = 'small-fish';
    smallFish.style.top = `${Math.random() * window.innerHeight}px`;
    smallFish.style.left = `${Math.random() * window.innerWidth}px`;
    fishContainer.appendChild(smallFish);
}

// Make fish follow and react to cursor
document.addEventListener('mousemove', (e) => {
    const fishes = document.querySelectorAll('.small-fish');
    fishes.forEach(fish => {
        let x = e.clientX - fish.offsetLeft - 40;
        let y = e.clientY - fish.offsetTop - 40;
        let distance = Math.sqrt(x*x + y*y);

        // Fish follow cursor but also avoid when too close
        if (distance < 100) {
            fish.style.transform = `translate(${x / -10}px, ${y / -10}px) rotate(${Math.atan2(y, x) * 180 / Math.PI}deg)`;
        } else {
            fish.style.transform = `translate(${x / 20}px, ${y / 20}px) rotate(${Math.atan2(y, x) * 180 / Math.PI}deg)`;
        }
    });
});

// Fish random idle movement
setInterval(() => {
    document.querySelectorAll('.small-fish').forEach(fish => {
        let randomX = Math.random() * 100 - 50;
        let randomY = Math.random() * 100 - 50;
        fish.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}, 3000);
