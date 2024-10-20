setTimeout(() => {
    if(window.location.hostname == 'thebrettyt.lain.ch') {
        document.getElementById('nonusing').remove()
    } else {
        document.getElementById('using').remove()
    }
}, 100);