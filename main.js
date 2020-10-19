const question = document.getElementsByClassName('question-title')
const answer = document.getElementsByClassName('answer')

for (var i = 0; i < question.length; i++) {
  question[i].onclick = function() {
    const setClasses = !this.classList.contains('active')
    setClass(question, 'active', 'remove')
    setClass(answer, 'show-answer', 'remove')

    if (setClasses) {
      this.classList.toggle('active')
      this.nextElementSibling.classList.toggle('show-answer')
    }
  }
}

function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className)
  }
}


//triggers
const watchTag = document.querySelectorAll('.watch')
const closeTag = document.querySelectorAll('.closeTag')
const contactTag = document.querySelectorAll('.contact')
const demoTag =  document.querySelectorAll('.watch-demo')


//outer
const modalTag = document.querySelector('.modal')

//content
const videoWrapper = document.querySelector('.video-wrapper')
const demoWrapper = document.querySelector('.demo-wrapper')
const formWrapper = document.querySelector('.form-wrapper')
const formTag = document.getElementById('form')


//video src
const dora = 'https://player.vimeo.com/video/444942505'
const demo = 'https://player.vimeo.com/video/455552561'

const injectContent = content => {
  content.style.display = 'flex'
}

const ejectContent = content => {
  content.style.display = 'none';
}

function openModal() {
  modalTag.classList.add('open-modal')
  event.preventDefault()
}

function closeModal() {
  modalTag.classList.remove('open-modal')
  video.src = ''
      ejectContent(formWrapper, videoWrapper, demoWrapper)
}

watchTag.forEach(tag => {
  tag.addEventListener('click', function() {
  video.src = dora
    openModal()
    injectContent(videoWrapper)
    ejectContent(formWrapper, demoWrapper)
  })
})

demoTag.forEach(tag => {
  tag.addEventListener('click', function() {
  video.src = demo
    openModal()
    injectContent(demoWrapper)
    ejectContent(videoWrapper, formWrapper)
  })
})


contactTag.forEach(tag => {
  tag.addEventListener('click', () => {
    openModal()
    injectContent(formWrapper)
    ejectContent(videoWrapper, demoWrapper)
  })
})

closeTag.forEach(tag => {
  tag.addEventListener('click', function() {
    closeModal()
    ejectContent(demoWrapper)
    })
})
                   

