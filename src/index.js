const main = document.querySelector('#game');
const carousel = document.querySelector('.carousel');

carousel.addEventListener("click", async event => {
    const user = event.target.closest(".user").id;
    const button = event.target.closest(".user-description__btn");

    if (button) {
        let module;
        switch (user) {
            case "gabriel":
                module = await import('./templates/game-1.js');
                break;
        
            default:
                module = "No se que paso";
                break;
        }
        main.innerHTML = module.Game1();
    }
})