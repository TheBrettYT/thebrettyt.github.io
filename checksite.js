setTimeout(() => {
    if(window.location.hostname == 'thebrettyt.lain.ch') {
        document.getElementById('github').remove()
        document.getElementById('vercel').remove()
    } else if(window.location.hostname == 'thebrettyt.vercel.app') {
        document.getElementById('using').remove()
    } else {
        document.getElementById('using').remove()
    }
}, 100);