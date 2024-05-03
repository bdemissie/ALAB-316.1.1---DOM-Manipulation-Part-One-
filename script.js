// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
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
//Part 2: Getting Started


//Part 3: Creating the Submenu
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.querySelector("#sub-menu")

//Set the height subMenuEl element to be "100%"
subMenuEl.style.height = "100%"

//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

//Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

//Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';// Start hidden

//Part 4: Adding Menu Interaction
let topMenuLinks = document.querySelectorAll("a")

//Attach a delegated 'click' event listener to topMenuEl.
//The first line of code of the event listener function should call the event object's preventDefault() method.
//The second line of code of the function should immediately return if the element clicked was not an < a > element.
//Log the content of the < a > to verify the handler is working.

topMenuEl.addEventListener('click', function (e) {
    // First line: call the event object's preventDefault() method
    e.preventDefault();

    // Second line: return if the element clicked was not an <a> element
    if (e.target.tagName !== "A") return;

    // Log the content of the <a> to verify the handler is working
    console.log('You clicked:', e.target.textContent);


   // The event listener should add the active class to the < a > element that was clicked, unless it was already active, in which case it should remove it.

    // Toggle the 'active' class on the clicked <a> element
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active'); // Remove active if it's already active
    }
    //The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
    //Hint: Removing a non - existent class from an element does not cause an error!

    else {
        // Remove 'active' from all links first
        topMenuLinks.forEach(link => link.classList.remove('active'));
        // Add 'active' to the clicked link
        e.target.classList.add('active');
    }



    function buildSubmenu(subLinks) {
        subMenuEl.innerHTML = ''; // Clear existing submenu content
        if (!subLinks) {
            subMenuEl.style.top = '0'; // Hide submenu if no sublinks
            return;
        }

        // Create and append submenu items
        subLinks.forEach(link => {
            let a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            subMenuEl.appendChild(a);
        });
        subMenuEl.style.top = '100%'; // Position the submenu correctly
    }

    topMenuEl.addEventListener('click', function (e) {
        e.preventDefault();

        if (e.target.tagName !== 'A') return;

        let  currentActive = topMenuEl.querySelector('active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }

        let linkText = e.target.textContent.trim().toLowerCase();
        let subLinks = menuLinks.find(link => link.text.toLowerCase() === linkText)?.subLinks;

        // Toggle active state and build submenu
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
            buildSubmenu(null);
        } else {
            e.target.classList.add('active');
            buildSubmenu(subLinks);
        }
    });
})










