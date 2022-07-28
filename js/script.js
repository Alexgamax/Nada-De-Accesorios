const menus = Array.from(document.querySelectorAll(".productos__menu"));

for(const menu of menus) {
    menu.addEventListener("click", () => {
        menu.nextElementSibling.classList.toggle("hide");
        let elements = Array.from(menu.nextElementSibling.children);
        setTimeout(() => {
            for(const element of elements) {
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
            }
        },100)
    })
}