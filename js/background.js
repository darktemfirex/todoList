const images= [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.querySelector("body");
let imgUrl = "";
//태그 생성 처리
//const bgImage = document.createElement("img");
//속성 설정
//bgImage.src = `img/${chosenImage}`;
imgUrl = "url('"+`img/${chosenImage}` + "')";
console.log(imgUrl);

//전체 태그에 생성된 태그 추가 작업 진행
body.style.backgroundImage = imgUrl;
 