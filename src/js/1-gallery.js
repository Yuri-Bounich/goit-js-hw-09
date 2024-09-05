
const images = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
      {
      preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
      },
      {
      preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
      },
      {
      preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
      },
      {
      preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
      },
      {
      preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
      },
      {
      preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
      },
      {
      preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
      },
      {
      preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
      },
      ];
  
  
  const container = document.querySelector(".gallery");
  container.insertAdjacentHTML('beforeend', generatedImgMarkup(images));
  
  function generatedImgMarkup (images) {
  return images.map(image => {
    return `
    <li class="gallery-item">
        <a class="gallery-link" href="${image.original}">     
          <img
          class="gallery-image"
          src="${image.preview}"
          alt="${image.description}"
          />
          </a>
          </li>
    `;
  }).join('');
  };

          //   data-source="${image.original}"
  
  container.style.margin = "auto";
  container.style.paddingLeft = "0px";
  container.style.maxWidth = "1128px";
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.gap = "24px";
  container.style.justifyContent = "center";
  container.style.listStyleType = "none";
  
  const galImages = document.querySelectorAll(".gallery-image");
  galImages.forEach(image => {
    image.style.objectFit = "cover";
    image.style.width = "360px";
    image.style.height = "200px";
    });
  
  const links = document.querySelectorAll('.gallery-link');
  
  // Додаємо обробник подій для кожного посилання
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Скасовуємо стандартну поведінку (завантаження файлу)
      console.log('Download prevented');
    });
  });
  
  container.addEventListener("click", onImgClick);
  
  function onImgClick(event) {
    if (event.target === event.currentTarget) {
      console.log('Click on UL');
      return;
    }
    // console.log(event.target);
    // console.log(event.currentTarget);
    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="1112" height="640"/>
      `)
      
      instance.show()
      
      // console.log(basicLightbox)
  
  }
  
  import SimpleLightbox from "simplelightbox";
  import 'simplelightbox/dist/simple-lightbox.min.css';


  // import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm"

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
  
  
// const lightbox = new SimpleLightbox('.gallery-image', {
//     // Налаштування (опційно)
//     captions: true,
//     captionsData: 'alt',
//     captionDelay: 250,
// });

