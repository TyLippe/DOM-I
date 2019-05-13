const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Nav bar
const navItems = document.querySelectorAll('header nav a')
navItems[0].textContent = siteContent['nav']['nav-item-1']
navItems[1].textContent = siteContent['nav']['nav-item-2']
navItems[2].textContent = siteContent['nav']['nav-item-3']
navItems[3].textContent = siteContent['nav']['nav-item-4']
navItems[4].textContent = siteContent['nav']['nav-item-5']
navItems[5].textContent = siteContent['nav']['nav-item-6']
navItems.forEach(x => x.style.color = 'green')

// CTA
const awesome = document.querySelector('.cta div h1')
awesome.textContent = siteContent['cta']['h1']

const button = document.querySelector('.cta div button')
button.textContent = siteContent['cta']['button']

// Main Content
const mainHeader = document.querySelectorAll('.main-content h4')
mainHeader[0].textContent = siteContent['main-content']['features-h4']
mainHeader[1].textContent = siteContent['main-content']['about-h4']
mainHeader[2].textContent = siteContent['main-content']['services-h4']
mainHeader[3].textContent = siteContent['main-content']['product-h4']
mainHeader[4].textContent = siteContent['main-content']['vision-h4']

const mainPara = document.querySelectorAll('.main-content p')
mainPara[0].textContent = siteContent['main-content']['features-content']
mainPara[1].textContent = siteContent['main-content']['about-content']
mainPara[2].textContent = siteContent['main-content']['services-content']
mainPara[3].textContent = siteContent['main-content']['product-content']
mainPara[4].textContent = siteContent['main-content']['vision-content']
// Contact 
const contactHead = document.querySelector('.contact h4')
contactHead.textContent = siteContent['contact']['contact-h4']

const contactItems = document.querySelectorAll('.contact p')
contactItems[0].textContent = siteContent['contact']['address']
contactItems[1].textContent = siteContent['contact']['phone']
contactItems[2].textContent = siteContent['contact']['email']

// Footer
const footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']

// Two added Elements
const newNav = document.querySelector('nav');

const newElement1 = document.createElement('a')
newElement1.textContent = 'Social'
newElement1.href = '#'
newElement1.style.color = 'green'

newNav.appendChild(newElement1)

const newElement2 = document.createElement('a')
newElement2.textContent = 'Classified'
newElement2.href = '#'
newElement2.style.color = 'green'

newNav.prepend(newElement2)