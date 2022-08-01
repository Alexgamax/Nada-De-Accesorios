const menus = Array.from(document.querySelectorAll(".productos__menu"));

menus.forEach(menu => {
    menu.addEventListener("click", () => {
        menu.nextElementSibling.classList.toggle("hide");
        const elements = Array.from(menu.nextElementSibling.children);
        setTimeout(() => {
            elements.forEach(element => {
                element.classList.toggle("opacity");
                element.addEventListener("mouseenter", () => {
                    element.classList.add("active");
                })

                element.addEventListener("mouseleave", () => {
                    element.classList.remove("active");
                })

                element.addEventListener("click", () => {
                    element.classList.toggle("active");
                })
            });
        },100)
    })
});

const botones = Array.from(document.querySelectorAll(".redireccion"));

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        event.preventDefault();
        const direccion = document.querySelector(event.target.attributes.href.value);
        window.scrollTo({
            top: direccion.offsetTop,
            left: 0,
            behavior: "smooth"
        })
    })
});