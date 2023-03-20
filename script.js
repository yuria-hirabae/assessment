'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)

let rainbow = ["red","orange","yellow","green","blue","indigo","purple"];


function changeColor() {
  // console.log('Button clicked!'); // feel free to change/delete this line
  const body = document.getElementsByTagName("body");
  const name = document.getElementById("name");
  const photo = document.getElementById("photo");
  const text = document.getElementById("text");
  const comment = document.getElementById("comment");
  let random = Math.floor(Math.random() * 7);

    rainbow.forEach((elem,index) => {
      if (random === index){
        body[0].style.backgroundColor = elem;
      }
    });

    obj.flowerName.forEach((elem,index) => {
      if (random === index){
        name.textContent = elem;
      }
    });

    obj.flowerPhoto.forEach((elem,index) => {
      if (random === index){
        photo.src = elem;
      }
    });

    obj.flowerText.forEach((elem,index) => {
      if (random === index){
        text.textContent = elem;
      }
    });

    obj.flowerComment.forEach((elem,index) => {
      if (random === index){
        comment.innerHTML = elem.replaceAll("\n", "<br>");
      }
    });

}
  
//HTMLでのViolet(虹で表すところの紫)は少し色が変わってしまうらしいので今回はpurpleにしました
