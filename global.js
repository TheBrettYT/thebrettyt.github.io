window.onload = function() {
    document.getElementsByTagName('header')[0].innerHTML = `
        <div class="profile">
            <img src="../imgs/Profile512x512(favicon).png" alt="Profile Picture" class="profile-pic">
            <h1 class="animationstart">TheBrettYT</h1>
        </div>
        <nav></nav>
    `;

    document.getElementsByTagName('nav')[0].innerHTML = `
        <ul id="otherdirectory">
            <li><a href="/Home" data-target="home">Home</a></li>
            <li><a href="/Socials" data-target="socials">Socials</a></li>
            <li><a href="/Platforms" data-target="platforms">Platforms</a></li>
            <li><a href="/BuckshotRouletteHelper" data-target="buckshot">Buckshot Helper</a></li>
        </ul>
    `;
    
    document.getElementsByTagName('footer')[0].innerHTML = `
        <p>&copy; 2024 TheBrettYT. Just doing cool CSS animations.</p>
        <span>Your current platform is:</span>
        <span id="github">Github</span>
        <span id="vercel">Vercel</span>
        <span id="freedns">FreeDNS</span>
        <span>| Check more at <a href="/Platforms/">/platforms</a>.</span>
    `;
    document.getElementsByTagName('footer')[0].setAttribute('class', 'footer');

    document.getElementsByClassName('profile')[0].addEventListener('click', function() {
        window.location.href = '/Home/';
    });
    
    if(document.getElementById('siteslash')) {
        document.getElementById('siteslash').textContent = window.location.pathname
    }

    if(window.location.hostname == 'thebrettyt.lain.ch') {
        document.getElementById('github').remove()
        document.getElementById('vercel').remove()
    } else if(window.location.hostname == 'thebrettyt.vercel.app') {
        document.getElementById('github').remove()
        document.getElementById('freedns').remove()
    } else if(window.location.hostname == 'thebrettyt.github.io') {
        document.getElementById('vercel').remove()
        document.getElementById('freedns').remove()
    }
}