// //accesskey from unsplash
// const accessKey = "ePbTBJggKhufWV1GCpp8SiKvQoa79fxyuGnkjEickQU";

// //store inp
// const formElm  = document.querySelector("form");
// const searchInputElm = document.querySelector('#search-input');
// // const imgTemplate = document.querySelector(".img-template")
// const searchResultImg = document.querySelectorAll(".img-template")
// const showMore = document.querySelector("#show-more")

// let inputData = ""; //hold the query input
// let page = 1;

// //asyc
//  async function searchImage(){
//     inputData = searchInputElm.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

//     //for to use response and fetch- aync
//     const response = await fetch(url)
//     const data = await response.json()



//     if(page === 1){
//         searchResultImg.innerHTML = "";
//     }
//         const results = data.results

//     results.map((result)=>{
//         const imageKepper = document.createElement('div')
//         imageKepper.classList.add('result-img')

//         const img = document.createElement('img')
//         img.src = result.urls.small
//         img.alt = response.alt_description

//         const imgLink = document.createElement('a')
//         imgLink.href = result.links.html
//         imgLink.target = "_blank"
//         imgLink.textContent = result.alt_description


//         //append these el
//         imageKepper.appendChild(img)
//         imageKepper.appendChild(imgLink)
//         imageKepper.appendChild(imageKepper)
//     });

//     page++;
//     if(page>1){
//         showMore.style.display = "block"
//     }
// }


// formElm.addEventListener("submit",(event)=>{
//      event.preventDefault()
//     page = 1
//     searchImage()
    
// })



// showMore.addEventListener("click",()=>{
//     preventDefault();
//     searchImage();
// });
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = searchInputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResultsEl.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultsEl.appendChild(imageWrapper);
  });

  page++;

  if (page > 1) {
    showMoreButtonEl.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMoreButtonEl.addEventListener("click", () => {
  searchImages();
});