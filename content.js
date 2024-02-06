// Ads filters
function getSkipButton() {
    return document.getElementsByClassName("ytp-ad-skip-button")[0];
}

function getCloseButton() {
    return document.getElementsByClassName("ytp-ad-overlay-close-button")[0];
}

var skipMovieFinderInterval = setInterval(() => {
    var skipButton = getSkipButton();

    if (skipButton) {
        skipButton.click();
    }
}, 100);

var closeBannerFinderInterval = setInterval(() => {
    var closeButton = getCloseButton();

    if (closeButton) {
        closeButton.click();
    }
}, 100);

let adBanner = document.getElementById('ad-banner');
if (adBanner) {
  adBanner.style.backgroundColor = 'white';
}


let adContainers = document.querySelectorAll('.ad-container');
adContainers.forEach(element => {
  element.remove();
});


function detectPictureBanners() {
  const images = document.getElementsByTagName('img');

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    if (image.getBoundingClientRect().top === 0) {
      image.classList.add('my-picture-banner-class');
    }
  }
}
document.addEventListener('DOMContentLoaded', detectPictureBanners);

function replaceBanner(banner) {
  var whiteBox = document.createElement('div'); 
  whiteBox.style.backgroundColor = 'white'; 
  whiteBox.style.width = banner.offsetWidth + 'px';
  whiteBox.style.height = banner.offsetHeight + 'px';

  banner.parentNode.replaceChild(whiteBox, banner);
}



document.addEventListener('click', function(event) {
  var target = event.target;

  if (isAd(target)) {
   
    var newUrl = 'https://example.com/redirect'; 
    target.href = newUrl; 
  }
});


function isAd(element) {
 
  return false; 
}

var links = document.getElementsByTagName('a');


for (var i = 0; i < links.length; i++) {
  var link = links[i];
  var relAttribute = link.getAttribute('rel');
  if (relAttribute === 'sponsored') {
   
    link.href = 'javascript:void(0)'; 
  }
}

var blockedCDNUrls = [
  'https://example-cdn.com/image1.jpg',
  'https://example-cdn.net/script.js',
  'https://cdn.example.com/image2.jpg',
 
];


var images = document.getElementsByTagName('img');
var scripts = document.getElementsByTagName('script');
var elementsToBlock = [...images, ...scripts];

elementsToBlock.forEach(function(element) {
 
  if (blockedCDNUrls.includes(element.src)) {
  
    var whiteBoxDiv = document.createElement('div');
    whiteBoxDiv.style.width = element.width + 'px';
    whiteBoxDiv.style.height = element.height + 'px';
    whiteBoxDiv.style.backgroundColor = 'white';
    element.parentNode.replaceChild(whiteBoxDiv, element);
  }
});


var sponsoredLinks = document.querySelectorAll('a[rel="sponsored"]');
sponsoredLinks.forEach(function(link) {
 
  var whiteBoxDiv = document.createElement('div');
  whiteBoxDiv.style.width = '100px';
  whiteBoxDiv.style.height = '20px';
  whiteBoxDiv.style.backgroundColor = 'white';
  link.parentNode.replaceChild(whiteBoxDiv, link);
});

const divs = document.getElementsByTagName('div');


for (let i = 0; i < divs.length; i++) {
  const div = divs[i];
  const backgroundImage = div.style.backgroundImage;

  if (backgroundImage && backgroundImage.indexOf('url(') !== -1 && backgroundImage.indexOf('cdn.') !== -1) {
    
    div.style.backgroundImage = 'none';
    div.style.backgroundColor = 'white';

  
  }

  const aTag = div.querySelector('a[rel="sponsored"]');
  if (aTag) {
    aTag.removeAttribute('href');
  }
}


var outbrainDivs = document.querySelectorAll('div.OUTBRAIN');
outbrainDivs.forEach(function(div) {
  div.remove();
});

var sponsoredSpans = document.querySelectorAll('span');
sponsoredSpans.forEach(function(span) {
  if (span.textContent.includes("sponsored")) {
    span.parentElement.remove();
  }
});

var outbrainImages = document.querySelectorAll('img[src*="outbrain"]');
outbrainImages.forEach(function(img) {
  img.parentElement.remove();
});


var outbrainLinks = document.querySelectorAll('div a[href*="outbrain"]');

outbrainLinks.forEach(function(link) {
  var div = link.closest('div');
  if (div) {
    div.remove();
  }
});

var allSpans = document.getElementsByTagName('span');
for (var i = 0; i < allSpans.length; i++) {
  var span = allSpans[i];
  if (span.textContent.includes("sponsored")) {
    span.parentElement.remove();
  }
}

var outbrainImages = document.querySelectorAll('img[src*="outbrain"]');

outbrainImages.forEach(function(img) {
  img.parentElement.remove();
});


var Google_ResultAd = document.getElementById("tvcap");
var Google_ResultAdBottom = document.getElementById("bottomads");
var DDG_ResultAd = document.getElementById("ads");

if (Google_ResultAd != undefined && Google_ResultAd.length != 0) {
    console.log("DONE!");
    Google_ResultAd.style.display = "none";
}
if (Google_ResultAdBottom != undefined && Google_ResultAdBottom.length != 0) {
    Google_ResultAdBottom.style.display = "none";
}

if (DDG_ResultAd != undefined && DDG_ResultAd.length != 0) {
    DDG_ResultAd.style.display = "none";
}

window.addEventListener("load", function () {
    var domain = document.location.hostname;
    setInterval(() => {
        var YT_companion = document.getElementById("player-ads");
        var YT_homepgAd = document.getElementsByClassName("style-scope ytd-display-ad-renderer");
        var YT_searchAd = document.getElementsByClassName("style-scope ytd-promoted-sparkles-text-search-renderer");
        var YT_overlayAd = document.getElementsByClassName('video-ads ytp-ad-module')[0];

        if (YT_companion != undefined) {
            YT_companion.style.display = "none";
        }
        if (YT_homepgAd != undefined && YT_homepgAd.length != 0) {
            YT_homepgAd[0].style.display = "none";
        }
        if (YT_searchAd != undefined && YT_searchAd.length != 0) {
            for (let i = 0; i < YT_searchAd.length; i++) {
                YT_searchAd[i].style.display = "none";
            }
        }

        if (YT_overlayAd != undefined && YT_overlayAd.length > 0) {
            console.log("OVERLAY DETECTED!");
            YT_overlayAd.style.display = "none";
        }

        var adUnbreak2 = document.getElementsByClassName("mrec-scrollable-cont");
        var adUnbreak4 = document.getElementsByClassName("clmb_eoa");
        if ((adUnbreak2 != undefined && adUnbreak2.length != 0) || (adUnbreak4 != undefined && adUnbreak4.length != 0)) {
            for (let i = 0; i < adUnbreak2.length; i++) {
                adUnbreak2[i].style.display = "none";
            }
            for (let i = 0; i < adUnbreak4.length; i++) {
                adUnbreak4[i].style.display = "none";
            }
        }
    }, 700);
});
