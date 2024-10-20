setTimeout(() => {
    if(window.location.hostname == 'thebrettyt.lain.ch') {
        document.getElementById('github').remove()
        document.getElementById('vercel').remove()
    } else if(window.location.hostname == 'thebrettyt.vercel.app') {
        document.getElementById('github').remove()
        document.getElementById('freebsd').remove()
    } else if(window.location.hostname == 'thebrettyt.github.io') {
        document.getElementById('vercel').remove()
        document.getElementById('freebsd').remove()
    }
}, 100);