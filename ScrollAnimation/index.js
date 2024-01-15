const sections = document.querySelectorAll("section");
const headerContainer = document.querySelector(".header_container")

function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("start_animation")
        } else {
            entry.target.classList.remove("start_animation")
        }
    })
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.3 })

sections.forEach((sec) => {
    observer.observe(sec);
})
observer.observe(headerContainer)

window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight) {
        headerContainer.classList.add("make_background")
    } else {
        headerContainer.classList.remove("make_background")
    }
})
let blockNav = document.createElement("div")
let normalNavs = document.querySelector(".normal_nav")
let otherNavs = document.querySelector(".other_nav")
function handleScreenSize(width) {

    if (width <= 960) {
        if (!document.querySelector(".block_nav")) {
            blockNav.classList.add("block_nav")
            headerContainer.appendChild(blockNav)
            blockNav.appendChild(normalNavs)
            blockNav.appendChild(otherNavs)

        }
    } else {
        headerContainer.removeChild(blockNav)
        headerContainer.appendChild(normalNavs)
        headerContainer.appendChild(otherNavs)
    }
}
window.addEventListener("resize", () => {
    handleScreenSize(window.innerWidth)
    // console.log("resize")

})

window.addEventListener("load", () => {
    handleScreenSize(window.innerWidth)
    // console.log("loaded")
})


var menuIcon = document.querySelector(".bx-menu")
menuIcon.addEventListener("click", () => {
    if (blockNav.classList.contains("open")) {
        blockNav.classList.remove("open")
    } else {
        blockNav.classList.add("open")
    }
})