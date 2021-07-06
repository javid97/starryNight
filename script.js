function stars() {
    let scene = document.querySelector(".scene");
    let i = 0;
    let count = 700;
    while(i<count){
        let star = document.createElement("i");
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight - 400;
        let size = Math.random() * 2;
        let duration = Math.random() * 10;
        star.style.left = x + "px";
        star.style.top = y + "px";
        star.style.width = 1 + size + "px";
        star.style.height = 1 + size + "px";
        star.style.animationDuration = duration + "s";
        star.style.animationDelay = duration + "s";
        scene.appendChild(star);
        i++;
    }
}
stars();