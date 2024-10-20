function TravelToNextPage(i) {
    document.body.style.opacity = 0

    let item;

    if(i == 1) {
        item = 'Home'
    } else if(i == 2) {
        item = 'Socials'
    } else if(i == 3) {
        item = 'Platforms'
    } else if(i == 4) {
        item = 'BuckshotRouletteHelper'
    }

    setTimeout(() => {
        window.location.href = `/${item}/`
    }, 100);
}