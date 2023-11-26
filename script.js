const observer = new IntersectionObserver((visibleToUser) => {
    visibleToUser.forEach((isVisible) => {
        console.log(isVisible)
        if (isVisible.isIntersecting) {
            isVisible.target.classList.add('show')
        } else {
            isVisible.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((element) => observer.observe(element))