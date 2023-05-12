const reveal = () => {
  const reveals = document.querySelectorAll('.reveal')

  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight
    const elementTop = reveal.getBoundingClientRect().top
    const elementVisible = 100

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('active')
    } else {
      reveal.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', reveal)