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
const iWantTag = document.querySelector('.i-want')


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

if(iWantTag){
  iWantTag.addEventListener('click', () => {
    openModal()
    injectContent(formWrapper)
    ejectContent(videoWrapper, demoWrapper)
  })
}


closeTag.forEach(tag => {
  tag.addEventListener('click', function() {
    closeModal()
    ejectContent(demoWrapper)
    })
})
                   

//Product catalogue
const productInfo = [
  {
    name: "Aesop",
    image: "assets/product_images/aesop.png"
  },
  {
    name: "Belo Keyring",
    image: "assets/product_images/keyring.png"
  },
  {
    name: "Baby Bibs",
    image: "assets/product_images/baby_bibs.png"
  },
  {
    name: "Beeswax Candle",
    image: "assets/product_images/candle.png"
  },
  {
    name: "Yoga Matt",
    image: "assets/product_images/yoga_mat.png"
  },
  {
    name: "Colouring Book",
    image: "assets/product_images/colouring_book.jpg"
  },
  {
    name: "Pin Pack",
    image: "assets/product_images/pin_pack.jpg"
  },
  {
    name: "Toppling Tower",
    image: "assets/product_images/tower.jpg"
  },
  {
    name: "Water Bottle",
    image: "assets/product_images/water_bottle.jpg"
  },
  {
    name: "Lambswool Blanked",
    image: "assets/product_images/throw.png"
  },
  {
    name: "Tote Bag",
    image: "assets/product_images/bag.png"
  },
  {
    name: "Watering Can",
    image: "assets/product_images/watering_can.jpg"
  }
]

const createProductCards = (container) => {
//create product card element
const productCard = document.createElement('div')
productCard.classList.add('product-card')

//create product image
const productImage = document.createElement('div')
productImage.classList.add('product-image')
const img = document.createElement('IMG')
productImage.append(img)

//Create product title
const title = document.createElement('div')
title.classList.add('product-name')
const h4 = document.createElement('h4')
title.append(h4)
const productTitle = document.createTextNode(productInfo[i])
h4.append(productTitle)
productCard.append(productImage, title)

//Append entire card to containers
container.appendChild(productCard)
}

 const productGridTag = document.getElementById('products-grid')

for (let i = 0; i <= productInfo.length - 1; i++) {
  //Run create card function on product grid container
   createProductCards(productGridTag)
}


const productTitles = productGridTag.querySelectorAll('.product-card h4')
const productImages = productGridTag.querySelectorAll('.product-card img')

productTitles.forEach((title, index) => {
  title.innerHTML = productInfo[index].name
})

productImages.forEach((photo, index) => {
  photo.src = productInfo[index].image
})



//campaign catalogue
const campaignInfo = [
  {
    name: "Open Homes",
    image: "assets/product_images/open_homes.png"
  },
  {
    name: "Sakura",
    image: "assets/product_images/sakura.png"
  },
  {
    name: "St Patricks Day",
    image: "assets/product_images/st_patricks_day.png"
  },
  {
    name: "Winter Olympics",
    image: "assets/product_images/winter_olympics.png"
  }
]


const campaignGridTag = document.getElementById('campaigns-grid')
for (let i = 0; i <= campaignInfo.length - 1; i++) {
  //Run create card function on campaigns grid container
  createProductCards(campaignGridTag)
}


const campaignTitles = campaignGridTag.querySelectorAll('.product-card h4')
const campaignImages = campaignGridTag.querySelectorAll('.product-card img')

campaignTitles.forEach((title, index) => {
  title.innerHTML = campaignInfo[index].name
})

campaignImages.forEach((photo, index) => {
  photo.src = campaignInfo[index].image
})


const productCards = document.querySelectorAll('.product-card')
productCards.forEach((card, index) => {
  card.addEventListener('click', ()=> {
    window.location.href='/non-cs-page/product.html'
  });
  card.addEventListener('mouseover', ()=> {
    card.style.cursor = 'pointer'
  })
})