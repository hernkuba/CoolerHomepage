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
  function navBarShow () {
    navItems.forEach(item => {
        item.classList.toggle('visible')
    })
  }
}
