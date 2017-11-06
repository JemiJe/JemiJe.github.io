var siteSlideELem = document.querySelector("[data-images-srs]");
slideshow(siteSlideELem);

function slideshow(imgElem, speed) {
  if(!imgElem) {
    return false;
  }
  else {
    var slideSpeed = speed || 1000;
    
    var imgList = imgElem.dataset.imagesSrs.split(",");
    imgList.push(imgElem.src);
    
    if(!imgList.length) return false;

    var index = 0;
    setInterval(() => {
      var curImg = imgList[index % imgList.length];
      imgElem.src = curImg;
      index++;
    }, slideSpeed);
  }
}