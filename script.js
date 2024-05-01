// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' }
];

//Part 1: Getting Started
//Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main")


//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)'

// create h1
let h1Element = document.createElement("h1")

// set maniEL h1 write DOM Manipulation
h1Element.textContent = "DOM Manipulation"
mainEl.appendChild(h1Element)

//Add a class of flex-ctr to mainEl
mainEl.classList.add("flex-ctr")

// //Part 2: Creating a Menu Bar

//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.querySelector("#top-menu")
console.log(topMenuEl)

//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%"

//Set the background color of topMenuEl to the value stored in the--top - menu - bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Add a class of flex - around to topMenuEl.
topMenuEl.classList.add('flex-around');

//Part 3: Adding Menu Buttons
//Iterate over the entire menuLinks array and for each "link" object:

for (let menuLink of menuLinks) {

    // Create an <a> element.
    let menuLinkElement = document.createElement('a');

    //On the new element, add an href attribute with its value set to the href property of the "link" object.
    menuLinkElement.setAttribute('href', menuLink.href);

    // Set the new element's content to the value of the text property of the "link" object.
    menuLinkElement.textContent = menuLink.text;

    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(menuLinkElement);

}

