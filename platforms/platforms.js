let stuff = ''

setTimeout(() => {
    document.getElementById('loadinggui').style.transform = "scale(0.7)rotate(-360deg)"
}, 700);

setTimeout(() => {
    document.getElementById('loadinggui').style.transform = "scale(0.4)rotate(-360deg)"
    document.getElementById('loadinggui').style.opacity = 0

    setTimeout(() => {
        document.getElementById('loadinggui').style.display = 'none'
    }, 1700);

    const loading = setInterval(() => {
        if(stuff == '') {
            stuff = '.'
        } else if(stuff == '.') {
            stuff = '..'
        } else if(stuff == '..') {
            stuff = '...'
        } else if(stuff == '...') {
            stuff = ''
        }

        document.getElementById('LoadingText').textContent = `Loading${stuff} Platforms`
    }, 130);

    document.getElementById('container-grid').style = 'opacity:1'

    setTimeout(() => {
        clearInterval(loading)
        document.getElementById('LoadingText').textContent = `Loading Platforms`

        const container = document.getElementById('ButtonContainer')

        // Check and adjust the height when the content changes (if needed)
        function adjustHeightToFit() {
            if (container.scrollHeight > container.clientHeight) {
                container.style.height = container.scrollHeight + "px";
            }
        }

        setTimeout(() => {
            document.getElementById('LoadingText').style = 'opacity:0'
        }, 100);
        
        setTimeout(() => {
            document.getElementById('LoadingText').remove()

            setTimeout(() => {
                let YouTubeChannels = [
                    'FreeBSD',
                    'Github',
                    'Vercel'
                ]

                for (let i = 0; i < YouTubeChannels.length; i++) {
                    setTimeout(() => {
                        let PageHa2 = document.createElement('a');
                        PageHa2.className = 'youtubelink'
                        PageHa2.id = 'Page2ID' + i
                        
                        if(YouTubeChannels[i] == 'FreeBSD') {
                            PageHa2.href = 'https://thebrettyt.lain.ch/Platforms/'
                        } else if(YouTubeChannels[i] == 'Github') {
                            PageHa2.href = 'https://thebrettyt.github.io/Platforms/'
                        } else if(YouTubeChannels[i] == 'Vercel') {
                            PageHa2.href = 'https://thebrettyt.vercel.app/Platforms/'
                        }

                        PageHa2.textContent = YouTubeChannels[i]
                        
                        document.getElementById('ButtonContainer').appendChild(PageHa2)

                        // Call the height adjustment function initially
                        adjustHeightToFit();
                    }, 100 * i);
                    setTimeout(() => {
                        document.getElementById('Page2ID' + i).style.opacity = 1
                    }, 300 * i);
                }
            }, 400);
        }, 700);
    }, 3100);
}, 1700);

function TravelToNextPage(i) {
    document.body.style.opacity = 0

    let item;

    if(i == 1) {
        item = 'Home'
    } else if(i == 2) {
        item = 'Socials'
    } else if(i == 3) {
        item = 'Platforms'
    }

    setTimeout(() => {
        window.location.href = `/${item}/`
    }, 100);
}