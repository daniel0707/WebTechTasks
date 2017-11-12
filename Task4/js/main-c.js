
const showImages = () => {
    const ul = document.querySelector('#photoList');
    fetch('images.json')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            json.forEach((image) => {
                let li = document.createElement("li");
                let figure = document.createElement("figure");
                let a = document.createElement("a");
                let img = document.createElement("img");
                let figcaption = document.createElement("figcaption");
                let h3 = document.createElement("h3");
                let ul = document.getElementById("photoList");

                let h3Text = document.createTextNode(image.mediaTitle);
                h3.appendChild(h3Text);
                figcaption.appendChild(h3);
                img.setAttribute('src',`img/thumbs/${image.mediaThumb}`);
                a.setAttribute('href',`img/original/${image.mediaUrl}`);
                a.appendChild(img);
                figure.appendChild(a);
                figure.appendChild(figcaption);
                li.appendChild(figure);
                ul.appendChild(li);
            });
        });
};
showImages();