setTimeout(() => {
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
}, 100);