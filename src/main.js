const birdImg = document.querySelector('#bird');
const dogImg = document.querySelector('#dog');

const changeImg = document.querySelector('#change');
changeImg.addEventListener("click", changePic);

//console.log(import.meta);

const birdUrl = new URL('./img/bird.jpg', import.meta.url);
//console.log(birdUrl);

const dogUrl = new URL('./img/dog.jpg', import.meta.url);
//console.log(dogImg);

const imgURLs = [new URL('./img/bird.jpg', import.meta.url),
                new URL('./img/dog.jpg', import.meta.url)];

//birdImg.src = birdUrl.href;
//dogImg.src = dogUrl.href;
changeImg.src = birdUrl.href;

let bytaBild = false;
let currentSource = "";
let i = 0;


function changePic() {
    /* if (bytaBild){
        changeImg.src = birdUrl.href;

    }else changeImg.src = dogUrl.href; */

   /*  if (changeImg.src === birdUrl.href){
        changeImg.src = dogUrl.href;

    }else changeImg.src = birdUrl.href; */

   /*  if (currentSource.localeCompare(birdUrl.href) === 0){
        currentSource = dogUrl.href;

    }else currentSource = birdUrl.href;

    changeImg.src = currentSource; */

   /*  if (changeImg.src.localeCompare(birdUrl.href) === 0){
        changeImg.src = dogUrl.href;

    }else changeImg.src = birdUrl.href; */

    //changeImg.src = currentSource;

    changeImg.src = imgURLs[i];
    i++;
    if (i>=imgURLs.length) i=0;



  
    
    //bytaBild = !bytaBild;

    console.log(changeImg.src)
    console.log(birdUrl.href)
    console.log(dogUrl.href)

  }