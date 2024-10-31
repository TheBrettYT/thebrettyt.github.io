let livebulletcount = Number();
let blankbulletcount = Number();

function showaction(type, group, number) {
    // Create a new 'a' element
    let newLink = document.createElement('a');

    // Set attributes for the new element
    newLink.className = "numberchange";
    newLink.innerHTML = `${type}${number}`;

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
function showbulletrotate(id, type, action) {
    // Create a new 'a' element
    let newLink = document.createElement('img');

    let thingy;

    if(type == 'live') {
        thingy = livebulletcount
    } else if(type == 'blank') {
        thingy = blankbulletcount
    }

    if(action == 'add') {
        newLink.id = `${thingy}-${type}`
        newLink.width = "64"
        newLink.height = "64"
        newLink.className = "ammo-animate";
        newLink.src = `./Shell-${type}.png`
        newLink.style.transform = `translateX(-32px) rotate(${thingy * 25 -50}deg)`;
        newLink.style.opacity = 0

        newLink.style.position = 'absolute'
    
        document.getElementById(`ammo${id}`).appendChild(newLink);
    
        // Start the animation
        setTimeout(() => {
            newLink.style.transition = "transform 1s, opacity 1s"; // Transition for smooth animation
            newLink.style.transform = `translateX(-32px) rotate(${thingy * 25 -25}deg)`; // Move up
            newLink.style.opacity = 1
            // newLink.style.opacity = "0"; // Fade out
        }, 10);
    } else if(action == 'remove') {
        // console.log(thingy + 1)
        const removeammo = document.getElementById(`${thingy + 1}-${type}`)

        // console.log(removeammo)
        removeammo.style.transform = `translateX(-32px) rotate(${thingy * 25 -25}deg)`;
        removeammo.style.opacity = 0

        // Remove the element from DOM after animation is done (to prevent clutter)
        setTimeout(() => {
            removeammo.remove();
        }, 1000);
    }
}
function poststuff(type, ammo) {
    const url = window.location.search;
    const params = new URLSearchParams(url);
    const roomId = params.get("roomid");

    console.log(`Trying to update room ${type}s ${roomId}`)

    fetch(`https://thebrettytdata.lain.ch/room/${roomId}/send-${type}/${ammo}`, {
        method: 'POST'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON response
    })
    .catch(error => {
        console.error('Error fetching room data:', error);
    });
}


function addlive(i) {
    if(livebulletcount >= 5) {
        return console.log('Max Bullets')
    }

    if(i) {
        if(livebulletcount == 4) {
            livebulletcount++
            showaction("+", 1, 1)
            showbulletrotate('left', 'live', 'add')
            if(window.location.search) {
                poststuff('live', livebulletcount)
            }
            return document.getElementById('live').textContent = livebulletcount
        }

        livebulletcount++
        showaction("+", 1, 1)
        showbulletrotate('left', 'live', 'add')
        document.getElementById('live').textContent = livebulletcount
        setTimeout(() => {
            livebulletcount++
            showaction("+", 1, 1)
            showbulletrotate('left', 'live', 'add')
            document.getElementById('live').textContent = livebulletcount
            if(window.location.search) {
                poststuff('live', livebulletcount)
            }
        }, 290);
    } else {
        livebulletcount++
        showaction("+", 1, 1)
        showbulletrotate('left', 'live', 'add')
        document.getElementById('live').textContent = livebulletcount
    }

    if(window.location.search) {
        poststuff('live', livebulletcount)
    }
}
function removelive() {
    if(livebulletcount == 0) {
        return console.log('No Live Bullets')
    }

    livebulletcount--
    document.getElementById('live').textContent = livebulletcount

    showaction("-", 1, 1)
    showbulletrotate('left', 'live', 'remove')

    if(window.location.search) {
        poststuff('live', livebulletcount)
    }
}

function addblank(i) {
    if(blankbulletcount >= 5) {
        return console.log('Max Bullets')
    }

    if(i) {
        if(blankbulletcount == 4) {
            blankbulletcount++
            showaction("+", 2, 1)
            showbulletrotate('right', 'blank', 'add')
            if(window.location.search) {
                poststuff('blank', blankbulletcount)
            }
            return document.getElementById('blank').textContent = blankbulletcount
        }

        blankbulletcount++
        showaction("+", 2, 1)
        showbulletrotate('right', 'blank', 'add')
        document.getElementById('blank').textContent = blankbulletcount
        setTimeout(() => {
            blankbulletcount++
            showaction("+", 2, 1)
            showbulletrotate('right', 'blank', 'add')
            document.getElementById('blank').textContent = blankbulletcount
            if(window.location.search) {
                poststuff('blank', blankbulletcount)
            }
        }, 290);
    } else {
        blankbulletcount++
        showaction("+", 2, 1)
        showbulletrotate('right', 'blank', 'add')
        document.getElementById('blank').textContent = blankbulletcount
    }

    if(window.location.search) {
        poststuff('blank', blankbulletcount)
    }
}
function removeblank() {
    if(blankbulletcount == 0) {
        return console.log('No Blank Bullets')
    }

    blankbulletcount--
    document.getElementById('blank').textContent = blankbulletcount

    showaction("-", 2, 1)
    showbulletrotate('right', 'blank', 'remove')

    if(window.location.search) {
        poststuff('blank', blankbulletcount)
    }
}

function inverterblank() {
    if(blankbulletcount == 0) {
        return console.log('No Blank Bullets')
    }

    livebulletcount++
    blankbulletcount--

    document.getElementById('live').textContent = livebulletcount
    document.getElementById('blank').textContent = blankbulletcount

    showaction("-", 2, 1)
    showbulletrotate('right', 'blank', 'remove')
    showaction("+", 1, 1)
    showbulletrotate('left', 'live', 'add')

    if(window.location.search) {
        poststuff('live', livebulletcount)
        poststuff('blank', blankbulletcount)
    }
}
function inverterlive() {
    if(livebulletcount == 0) {
        return console.log('No Live Bullets')
    }

    livebulletcount--
    blankbulletcount++

    document.getElementById('live').textContent = livebulletcount
    document.getElementById('blank').textContent = blankbulletcount

    showaction("+", 2, 1)
    showbulletrotate('left', 'live', 'remove')
    showaction("-", 1, 1)
    showbulletrotate('right', 'blank', 'add')
    if(window.location.search) {
        poststuff('live', livebulletcount)
        poststuff('blank', blankbulletcount)
    }
}

function resetcount() {
    for (let i = 0; i < livebulletcount; i++) {
        setTimeout(() => {
            livebulletcount--
            document.getElementById('live').textContent = livebulletcount
            showaction("-", 1, 1)
            showbulletrotate('left', 'live', 'remove')
            if(window.location.search) {
                poststuff('live', livebulletcount)
            }
        }, i * 230);
    }
    for (let i = 0; i < blankbulletcount; i++) {
        setTimeout(() => {
            blankbulletcount--
            document.getElementById('blank').textContent = blankbulletcount
            showaction("-", 2, 1)
            showbulletrotate('right', 'blank', 'remove')
            if(window.location.search) {
                poststuff('blank', blankbulletcount)
            }
        }, i * 230);
    }
}

// Function to update bullet count and UI with delay
function updateBulletCount(type, currentCount, targetCount, direction, elementId, action) {
    const increment = targetCount > currentCount ? 1 : -1;
    const actionSymbol = increment > 0 ? "+" : "-";
    
    for (let i = currentCount; i !== targetCount; i += increment) {
        setTimeout(() => {
            if (type === 'live') {
                livebulletcount += increment;
                document.getElementById('live').textContent = livebulletcount;
            } else {
                blankbulletcount += increment;
                document.getElementById('blank').textContent = blankbulletcount;
            }
            
            showaction(actionSymbol, type === 'live' ? 1 : 2, 1);
            showbulletrotate(direction, elementId, action);
        }, Math.abs(i - currentCount) * 230);
    }
}

setTimeout(() => {
    if(window.location.search) {
        const url = window.location.search;
        const params = new URLSearchParams(url);
        const roomId = params.get("roomid");
        console.log(roomId); // Output: "00001"

        console.log(`Trying to join room ${roomId}`)

        document.getElementsByClassName('helper')[0].remove()
        setInterval(() => {
            fetch(`https://thebrettytdata.lain.ch/room/${roomId}/data`, {
                method: 'GET'
            })
            .then(response => {
                if(response.status == 404) {
                    window.location = "/BuckshotRouletteHelper/"
                }
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // Parse the JSON response
            })
            .then(data => {
                console.log(data); // Log the room data (including ammo count)
                if (data.ammoCount !== undefined) {
                    currentRoomId = roomId; // Set the current room ID
                    console.log(`Current Live: ${data.live}`);
                    console.log(`Current Blank: ${data.blank}`);
                }

                // ADDING AMMO
                if (livebulletcount !== data.live) {
                    updateBulletCount('live', livebulletcount, data.live, 'left', 'live', livebulletcount < data.live ? 'add' : 'remove');
                }
                if (blankbulletcount !== data.blank) {
                    updateBulletCount('blank', blankbulletcount, data.blank, 'right', 'blank', blankbulletcount < data.blank ? 'add' : 'remove');
                }

            })
            .catch(error => {
                console.error('Error fetching room data:', error);
            });
        }, 1000);
    } else {
        document.getElementById('delete-room').remove()
    }

    const aelement = document.getElementById('generated-link')
    console.log(aelement)
    aelement.addEventListener('click', function() {
        navigator.clipboard.writeText(aelement.textContent)

        // specify the action to take when the div is clicked
        document.getElementById('copied-link').style.opacity = 1
        document.getElementById('copied-link').textContent = 'Copied Link'
        setTimeout(() => {
            document.getElementById('copied-link').style.opacity = 0
        }, 1450);
    });
}, 200);

function genlink() {
    let currentRoomId = '';
    console.log('Generating link')
    
    setTimeout(async() => {
        document.getElementsByClassName('helper')[0].style.opacity = 0
        fetch('https://thebrettytdata.lain.ch/create-room', {
            method: 'POST'
        })
        .then(response => response.json()) // Parse the JSON from the response
        .then(data => {
            console.log(data);
            currentRoomId = data.IDNumber; // Access roomId from the parsed data
        })
        .catch(error => console.error('Error:', error)); // Add error handling        

        setTimeout(() => {
            document.getElementsByClassName('helper')[0].remove()
            const link = `${window.location.origin}/BuckshotRouletteHelper/?roomid=${currentRoomId}`;

            document.getElementById('generated-link').textContent = link
        }, 930);
    }, 400);
    setTimeout(() => {
        document.getElementById('generated-link').style.opacity = 1
    }, 1900);
}
function closeroom() {
    console.log('Closing Room')
    
    setTimeout(() => {
        try {
            const url = window.location.search;
            const params = new URLSearchParams(url);
            const roomId = params.get("roomid");

            fetch(`https://thebrettytdata.lain.ch/close-room/${roomId}`, {
                method: 'POST'
            })
            .then(response => {
                console.log(response)
                response.json()
            })
            .then(data => {
                console.log(data.roomId)
                currentRoomId = data.roomId;
            });
        } catch {
            console.log('Brett forgot to start up the data server')
        }

        setTimeout(() => {
            document.getElementsByClassName('helper')[0].remove()
            const link = `${window.location.origin}/BuckshotRouletteHelper/?roomid=${currentRoomId}`;

            document.getElementById('generated-link').textContent = link
        }, 930);
    }, 700);
    setTimeout(() => {
        document.getElementById('generated-link').style.opacity = 1
    }, 1900);
}