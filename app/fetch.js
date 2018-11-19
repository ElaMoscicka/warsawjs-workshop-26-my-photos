//link to documentation: https://www.flickr.com/services/feeds/docs/photos_public/
let fetchCallback = null;

function fetchImages({ tags = ["flowers"], mode = "ALL", callback} = {}) {
fetchCallback = callback;
const url = `https://api.flickr.com/services/feeds/photos_public.gne?tagmode=${mode}&tags=${tags.join(
   ","
 )}&format=json`;
 const s = document.createElement("script");
 s.src = url;
 s.type = "text/javascript";
 document.body.appendChild(s);
}

function jsonFlickrFeed(data) {
    let images = data.items.map(image => {
        return {
            title:image.title,
            url:image.media.m,
            author:image.author,
            published:image.published
        };
    });

    images.map(image => {
        imagesList.addImage(new ImageClass(image));
    });
    imagesList.reRender();
    fetchCallback();
}