import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')

const galleryMarkup = galleryItems.map(galleryItem => {
    return `
    <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
  </a>
`

})

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup.join(""))



// import * as basicLightbox from 'basiclightbox'

// let instance;
   const OnPictureClick = (event=> {
    event.preventDefault();
     if (!event.target.classList.contains('gallery__image')) {
    return;
  }

   const instance = basicLightbox.create(`
    <img src= "${event.target.dataset.source}" >
`)

    instance.show()
})
galleryRef.addEventListener('click', OnPictureClick)
// console.log(galleryItems);