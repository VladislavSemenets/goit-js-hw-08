// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery');
const makup = creatImgMakup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', makup);

function creatImgMakup(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>`
    }). join('');
};

galleryRef.addEventListener('click', onClick);

galleryRef.style.listStyle = 'none';

function onClick(event) {
    event.preventDefault();

    if (event.target.tagName !== "IMG") {
        return;
    }

     new SimpleLightbox('.gallery a',{
        
        captionPosition: 'bottom',
        captionDelay: 250,
        captionsData: 'alt',
        
    });
    
   
    }


//console.log(galleryItems);