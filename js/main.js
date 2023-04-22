let images = [
  '../images/bg1.jpg',
  '../images/bg2.jpg',
  '../images/bg3.jpg',
  '../images/bg4.jpg',
  '../images/bg5.jpg',
  '../images/bg6.jpg',
];
let myImage = document.querySelector('img');
let nextBtn = document.querySelector('.nextBtn');
let prevBtn = document.querySelector('.prevBtn');
let list = document.querySelector('ul');
let currentIndex = 0;

/* insert li inside ul */
drawLI();

/* change img  */
changeImg();

/* runLi */
runLi();

/* pagination change active li  */
updatePagination();

/* events */ 
nextBtn.addEventListener('click', nextBtnFun);
prevBtn.addEventListener('click', prevBtnFun);

/* functions  */ 
function drawLI() {
  for (let i = 0; i < images.length; i++) {
    list.innerHTML += `<li data-img=${i}>${i + 1}</li>`;
  }
}

function changeImg() {
  myImage.classList.add('flash');
  setTimeout(() => {
    myImage.classList.remove('flash');
  }, 500);
  myImage.src = images[currentIndex];
  updatePagination();
}

function nextBtnFun() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    changeImg();
  } else {
    currentIndex = 0;
    changeImg();
  }
}

function prevBtnFun() {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
    changeImg();
  } else {
    currentIndex--;
    changeImg();
  }
}

function updatePagination() {
  let allLI = document.querySelectorAll('li');
  allLI.forEach((li) => {
    if (Number(li.getAttribute('data-img')) === currentIndex) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  });
}

/* change image when click on pagination(li)  */ 
function runLi() {
  let allLI = document.querySelectorAll('li');
  allLI.forEach((li) => {
    li.addEventListener('click', () => {
      currentIndex = Number(li.getAttribute('data-img'));
      changeImg();
    });
  });
}

/* change image every 2.5 second  */ 
setInterval(nextBtnFun, 2500);
