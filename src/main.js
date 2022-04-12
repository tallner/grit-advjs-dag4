const img = document.querySelector('img');

console.log(import.meta );
const manUrl = new URL('./img/man.jpg', import.meta.url);
console.log(manUrl);

img.src = manUrl.href;