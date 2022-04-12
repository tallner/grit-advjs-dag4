const birdImg = document.querySelector('#bird');
const dogImg = document.querySelector('#dog');

const changeImg = document.querySelector('#change');
changeImg.addEventListener("click", changePic);

//console.log(import.meta);

const birdUrl = new URL('./img/bird.jpg', import.meta.url);
//console.log(birdUrl);

const dogUrl = new URL('./img/dog.jpg', import.meta.url);
//console.log(dogImg);

//birdImg.src = birdUrl.href;
//dogImg.src = dogUrl.href;
changeImg.src = birdUrl.href;

let bytaBild = false;

function changePic() {
    if (bytaBild){
        changeImg.src = birdUrl.href;

    }else changeImg.src = dogUrl.href;
    
    bytaBild = !bytaBild;

  }

  console.log(changeImg.src)
  console.log(dogUrl.href)