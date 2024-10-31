let stuff = ''

setTimeout(() => {
    document.getElementById('loadinggui').style.transform = "scale(0.7)rotate(-360deg)"
}, 700);

setTimeout(() => {
    document.getElementById('loadinggui').style.transform = "scale(0.4)rotate(-360deg)translateY(-850px)"
    // document.getElementById('loadinggui').style.opacity = 0

    setTimeout(() => {
        document.getElementById('loadinggui').style.transform = "scale(0.35)rotate(-360deg)translateY(-850px)"
    }, 3000);
    // setTimeout(() => {
    //     document.getElementById('loadinggui').style.display = 'none'
    // }, 3700);

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

        document.getElementById('LoadingText').textContent = `Loading${stuff} Sites`
    }, 130);

    document.getElementById('container-grid').style = 'opacity:1'

    setTimeout(() => {
        clearInterval(loading)
        document.getElementById('LoadingText').textContent = `Loading Sites`

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
                let PagesLOL2 = [
                    'cg5',
                    'kapi-v2',
                    'momi',
                    'sky',
                    'Minecraft',
                    'Virtual Machine',
                    'Proxy using Interstellar'
                ]
                for (let i = 0; i < PagesLOL2.length; i++) {
                    setTimeout(() => {
                        let PageHa2 = document.createElement('a');
                        PageHa2.className = 'page2stuff'
                        PageHa2.id = 'Page2ID' + i
                        PageHa2.href = '/' + PagesLOL2[i]
                        PageHa2.textContent = PagesLOL2[i]
                        if(PagesLOL2[i] == 'Proxy using Interstellar') {
                            PageHa2.href = 'https://thebrettytprx.lain.ch/'
                            PageHa2.target = "_blank"
                        } else if(PagesLOL2[i] == 'Virtual Machine') {
                            PageHa2.href = 'https://thebrettytvm.lain.ch/#/cast/free'
                            PageHa2.target = "_blank"
                        } else {
                            PageHa2.href = '/' + PagesLOL2[i] + '/'
                        }
                        
                        // console.log(PagesLOL2[i])

                        document.getElementById('ButtonContainer').appendChild(PageHa2)

                        // Call the height adjustment function initially
                        adjustHeightToFit();
                    }, 200 * i);
                    setTimeout(() => {
                        document.getElementById('Page2ID' + i).style.opacity = 1
                    }, 300 * i);
                }
            }, 600);
        }, 700);
    }, 3100);
}, 1700);