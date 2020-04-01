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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//nav items
let nav = document.querySelector('nav');
let navItem1 = document.createElement('a');
navItem1.textContent = "Services";
nav.appendChild(navItem1);

let navItem2 = document.createElement('a');
navItem2.textContent = siteContent['nav']['nav-item-2'];
nav.appendChild(navItem2);

let navItem3 = document.createElement('a');
navItem3.textContent = siteContent['nav']['nav-item-3'];
nav.appendChild(navItem3);

let navItem4 = document.createElement('a');
navItem4.textContent = siteContent['nav']['nav-item-4'];
nav.appendChild(navItem4);

let navItem5 = document.createElement('a');
navItem5.textContent = siteContent['nav']['nav-item-5'];
nav.appendChild(navItem5);

let navItem6 = document.createElement('a');
navItem6.textContent = siteContent['nav']['nav-item-6'];
nav.appendChild(navItem6);

let cta = document.querySelector('.cta-text');
let ctaH1 = document.createElement('h1');
ctaH1.textContent = siteContent.cta.h1;
cta.prepend(ctaH1);

let button = document.querySelector('button');
button.textContent = siteContent.cta.button;

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute("src", siteContent['cta']['img-src']);

let features = document.querySelector('.top-content .text-content');
let featuresH4 = document.createElement('h4');
featuresH4.textContent = siteContent["main-content"]['features-h4'];
features.appendChild(featuresH4);

let featuresContent = document.createElement('p');
featuresContent.textContent = siteContent["main-content"]['features-content'];
features.appendChild(featuresContent);

let textContentTop = document.querySelector('.top-content .text-content');
textContentTop.style.display = 'flex';


//////             


let about = document.querySelector('.top-content .text-content');
let aboutH4 = document.createElement('h4');
aboutH4.textContent = siteContent["main-content"]['about-h4'];
about.appendChild(aboutH4);

let aboutContent = document.createElement('p');
aboutContent.textContent = siteContent["main-content"]['about-content'];
about.appendChild(aboutContent);
about.style.width = '45%';


let middleImg = document.getElementById('middle-img');
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//services, product, vision
//services
let services = document.querySelector(".bottom-content .text-content");
let servicesH4 = document.createElement('h4');
servicesH4.textContent = siteContent["main-content"]["services-h4"];
services.appendChild(servicesH4);

let servicesContent = document.createElement('p');
servicesContent.textContent = siteContent['main-content']['services-content'];
services.appendChild(servicesContent);

//product
let product = document.querySelector('.bottom-content .text-content')
let productH4 = document.createElement("h4");
productH4.textContent = siteContent['main-content']['product-h4'];
product.appendChild(productH4);

let productContent = document.createElement('p');
productContent.textContent = siteContent['main-content']['product-content'];
product.appendChild(productContent);


//vision
let vision = document.querySelector(".bottom-content .text-content");
let visionH4 = document.createElement('h4');
visionH4.textContent = siteContent['main-content']['vision-h4'];
vision.appendChild(visionH4);

let visionContent = document.createElement('p');
visionContent.textContent = siteContent['main-content']['vision-content'];
vision.appendChild(visionContent);

//contact
let contact = document.querySelector('.contact');
let contactH4 = document.createElement('h4');
contactH4.textContent = siteContent['contact']['contact-h4'];
contact.appendChild(contactH4);

//address, phone, email
let address = document.createElement('p');
address.textContent = siteContent.contact.address;
contact.appendChild(address);

let phone = document.createElement('p');
phone.textContent = siteContent.contact.phone;
contact.appendChild(phone);

let email = document.createElement('p');
email.textContent = siteContent.contact.email;
contact.append(email);

//footer
let footer = document.querySelector('footer');
let footerContent = document.createElement('p');
footerContent.textContent = siteContent.footer.copyright;
footer.appendChild(footerContent);
footer.style.padding = '20px';




