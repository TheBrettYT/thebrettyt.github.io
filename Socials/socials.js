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

        document.getElementById('LoadingText').textContent = `Loading${stuff} Socials`
    }, 130);

    document.getElementById('container-grid').style = 'opacity:1'

    setTimeout(() => {
        clearInterval(loading)
        document.getElementById('LoadingText').textContent = `Loading Socials`

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
                let SecondLine = document.createElement('div');
                SecondLine.className = 'Title'
                SecondLine.id = 'page1stuff'
                SecondLine.textContent = 'YouTube Channels'
                document.getElementById('ButtonContainer').appendChild(SecondLine)
                
                // Call the height adjustment function initially
                adjustHeightToFit();

                setTimeout(() => {
                    document.getElementById('page1stuff').style.opacity = 1
                }, 700);
            }, 200);

            setTimeout(() => {
                let YouTubeChannels = [
                    'TheBrettYT',
                    'TheBrettYT2',
                    'TheBrettFX'
                ]

                for (let i = 0; i < YouTubeChannels.length; i++) {
                    setTimeout(() => {
                        let PageHa2 = document.createElement('a');
                        PageHa2.className = 'youtubelink'
                        PageHa2.id = 'Page2ID' + i
                        PageHa2.href = 'https://www.youtube.com/@' + YouTubeChannels[i]
                        PageHa2.target = "_blank"
                        PageHa2.textContent = YouTubeChannels[i]
                        
                        document.getElementById('ButtonContainer').appendChild(PageHa2)

                        // Call the height adjustment function initially
                        adjustHeightToFit();
                    }, 100 * i);
                    setTimeout(() => {
                        document.getElementById('Page2ID' + i).style.opacity = 1
                    }, 300 * i);
                }
            }, 1900);
        }, 700);
    }, 3100);
}, 1700);

function TravelToNextPage() {
    document.body.style.opacity = 0

    setTimeout(() => {
        console.log('Set page to /Home')
        window.location.href = "/Home"
    }, 100);
}