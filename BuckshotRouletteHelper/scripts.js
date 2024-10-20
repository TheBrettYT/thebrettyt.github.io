setTimeout(() => {
    document.getElementById('loadinggui').style.transform = "scale(0.7)rotate(-360deg)"
}, 700);

setTimeout(() => {
    document.getElementById('loadinggui').style.transform = "scale(0.4)rotate(-360deg)"
    document.getElementById('loadinggui').style.opacity = 0

    setTimeout(() => {
        document.getElementById('loadinggui').style.display = 'none'
    }, 1700);

    document.getElementById('container-grid').style = 'opacity:1'
}, 1700);

let livebulletcount = Number();
let blankbulletcount = Number();

function showaction(type, group) {
    // Create a new 'a' element
    let newLink = document.createElement('a');

    // Set attributes for the new element
    newLink.className = "numberchange";
    newLink.innerHTML = `${type}1`;

    // Apply initial styles for animation (starting position)
    newLink.style.transform = "translateY(-40px)";
    newLink.style.opacity = "1";
    newLink.style.position = "absolute"; // To make it appear and move independently

    // Append the new 'a' element to the 'plus1group' div
    document.getElementById(`plus1group${group}`).appendChild(newLink);

    // Start the animation
    setTimeout(() => {
        newLink.style.transition = "transform 1s, opacity 1s"; // Transition for smooth animation
        newLink.style.transform = "translateY(0px)"; // Move up
        newLink.style.opacity = "0"; // Fade out
    }, 10);

    // Remove the element from DOM after animation is done (to prevent clutter)
    setTimeout(() => {
        newLink.remove();
    }, 2000);
}

function addlive() {
    livebulletcount++
    document.getElementById('live').textContent = livebulletcount

    showaction("+", 1)
}
function addblank() {
    blankbulletcount++
    document.getElementById('blank').textContent = blankbulletcount

    showaction("+", 2)
}
function removelive() {
    if(livebulletcount == 0) {
        return console.log('Non Bullets')
    }

    livebulletcount--
    document.getElementById('live').textContent = livebulletcount

    showaction("-", 1)
}
function removeblank() {
    if(blankbulletcount == 0) {
        return console.log('Non Bullets')
    }

    blankbulletcount--
    document.getElementById('blank').textContent = blankbulletcount

    showaction("-", 2)
}

function reverser() {
    if(blankbulletcount == 0) {
        return console.log('Non Bullets')
    }

    livebulletcount++
    blankbulletcount--

    document.getElementById('live').textContent = livebulletcount
    document.getElementById('blank').textContent = blankbulletcount

    showaction("-", 2)
    showaction("+", 1)
}
function resetcount() {
    for (let i = 0; i < livebulletcount; i++) {
        setTimeout(() => {
            livebulletcount--
            document.getElementById('live').textContent = livebulletcount
            showaction("-", 1)
        }, i * 120);
    }

    for (let i = 0; i < blankbulletcount; i++) {
        setTimeout(() => {
            blankbulletcount--
            document.getElementById('blank').textContent = blankbulletcount
            showaction("-", 2)
        }, i * 120);
    }
}