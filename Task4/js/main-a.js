// Create function 'showImages' which
// adds the loaded HTML content to <ul> element
const showImages = () => {
    const UL = document.querySelector('ul');
    fetch('images.html')
        .then((response)=>{return response.text();})
        .then((text)=>{UL.innerHTML = text;});

};

showImages();