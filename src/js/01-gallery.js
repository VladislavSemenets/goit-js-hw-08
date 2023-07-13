// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
const listEl = document.querySelector(".gallery");
// const markup = galleryItems
//   .map((galleryItem) => {
//     const { preview, original, description } = galleryItem;

//     return renderMarkup(preview, original, description);
//   })
//   .join("");

const markup = galleryItems
  .map(({ preview, original, description }) =>
    renderMarkup(preview, original, description)
  )
  .join("");

listEl.insertAdjacentHTML("afterbegin", markup);

listEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const path = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${path}">
 `,
    {
      onShow: registerKeypress,
    }
  );

  instance.show();
});

function renderMarkup(preview, original, description) {
  return `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
}

function onEscapeHandler(event, instance) {
  if (event.key !== "Escape") {
    return;
  }
  instance.close();
}

function registerKeypress(instance) {
  window.addEventListener(
    "keydown",
    (event) => onEscapeHandler(event, instance),
    { once: true }
  );
}                                                                                                                                                                                  