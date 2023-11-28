{
  const observer = new IntersectionObserver(visibleToUser => {
    visibleToUser.forEach(isVisible => {
      console.log(isVisible)
      if (isVisible.isIntersecting) {
        isVisible.target.classList.add('show')
      } else {
        isVisible.target.classList.remove('show')
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach(element => observer.observe(element))

  const icon = document.querySelector('.icon')
  const navItems = document.querySelectorAll('.notVisible')
  icon.onclick = navBarShow
  let zmienna = 0;
  function navBarShow () {
    if (zmienna == 0) {
      icon.style.transform = 'rotate(90deg)'
      zmienna = 1
    } else if (zmienna == 1) {
      icon.style.transform = 'rotate(0deg)'
      zmienna = 0
    }
    navItems.forEach(item => {
      item.classList.toggle('visible')
    })
  }
}
