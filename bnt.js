var bt1Object = document.getElementById("tum");
var bt2Object = document.getElementById("nec");
var bt3Object = document.getElementById("norm");
var bt4Object = document.getElementById("X2p5");
var bt5Object = document.getElementById("X10");
var bt6Object = document.getElementById("X40");

var btaObject = document.getElementById("tum2");
var btbObject = document.getElementById("nec2");
var btcObject = document.getElementById("norm2");
var btdObject = document.getElementById("Reset")

var key = 0;

var im1Object = document.getElementById("im");
var im2Object = document.getElementById("im");
var im3Object = document.getElementById("im");
var imaObject = document.getElementById("im2");
var imbObject = document.getElementById("im2");
var imcObject = document.getElementById("im2");
var im4Object = document.getElementById("zoom");
var im7Object = document.getElementById("reg");
var im8Object = document.getElementById("reg1");
var im9Object = document.getElementById("reg2");


function onBtn1Clicked() {
  if (!im1Object)
    return;
  //im1Object.src = "img/3.png";

  im1Object.width = "360";
  im1Object.height = "240";
  im4Object.src = "img/tumor/1p25x.png";
  im1Object.src = "img/1.png";
  im4Object.width = "250";
  im4Object.height = "250";
  im7Object.style.border = "thick red solid";
  im8Object.style.border = "1px solid black";
  im9Object.style.border = "1px solid black";
  im7Object.style.float = "left";
  bt1Object.style.color = "red";
  bt2Object.style.color = "white"
  bt3Object.style.color = "white"
  bt4Object.style.color = "white"
  bt5Object.style.color = "white"
  bt6Object.style.color = "white"
  
  key = 1;

}
onBtn1Clicked();
if (bt1Object) {
  bt1Object.onclick = onBtn1Clicked;
}

if (bt1Object)
  bt2Object.onclick = function () {
    //im1Object.src = "img/3.png";
    im1Object.width = "360";
    im1Object.height = "240";
    im4Object.src = "img/tumor/1p25x.png";
    im1Object.src = "img/1.png";
    im4Object.width = "250";
    im4Object.height = "250";
    im7Object.style.border = "thick red solid";
    im8Object.style.border = "1px solid black";
    im9Object.style.border = "1px solid black";
    im7Object.style.float = "left";
    bt1Object.style.color = "red";
    bt2Object.style.color = "white";
    bt3Object.style.color = "white";
    key = 1;
  }
if (bt2Object)
  bt2Object.onclick = function () {/*Necrosis*/
    //im2Object.src = "img/2.png";
    im2Object.width = "360";
    im2Object.height = "240";
    im4Object.src = "img/necrosis/1p25x.png";
    im2Object.src = "img/1.png";
    im4Object.width = "250";
    im4Object.height = "250";
    im8Object.style.border = "thick red solid";
    im7Object.style.border = "1px solid black";
    im9Object.style.border = "1px solid black";
    bt2Object.style.color = "red";
    bt1Object.style.color = "white";
    bt3Object.style.color = "white";
    key = 2;
  };
if (bt3Object)
  bt3Object.onclick = function () {/*Normal*/
    im3Object.src = "img/1.png";
    im3Object.width = "360";
    im3Object.height = "240";
    im4Object.src = "img/normal/1p25x.png";
    im3Object.src = "img/1.png";
    im4Object.width = "250";
    im4Object.height = "250";
    im9Object.style.border = "thick red solid";
    im7Object.style.border = "1px solid black";
    im8Object.style.border = "1px solid black";
    bt3Object.style.color = "red";
    bt2Object.style.color = "white";
    bt1Object.style.color = "white";
    key = 3;
  };


//im4Object.src="img/tumor/2p5x.png";
if (bt4Object)
  bt4Object.onclick = function () {
    if (key == 1) {
      im4Object.src = "img/tumor/2p5x.png";
    }
    else if (key == 2) {
      im4Object.src = "img/necrosis/2p5x.png";
    }
    else if (key == 3) {
      im4Object.src = "img/normal/2p5x.png";
    }
  };
if (bt5Object)
  bt5Object.onclick = function () {
    if (key == 1) {
      im4Object.src = "img/tumor/10x.png";
    }
    else if (key == 2) {
      im4Object.src = "img/necrosis/10x.png";
    }
    else if (key == 3) {
      im4Object.src = "img/normal/10x.png";
    }
  };
if (bt6Object)
  bt6Object.onclick = function () {
    if (key == 1) {
      im4Object.src = "img/tumor/40x.png";
    }
    else if (key == 2) {
      im4Object.src = "img/necrosis/40x.png";
    }
    else if (key == 3) {
      im4Object.src = "img/normal/40x.png";
    }
  };

function pic_DrawCanvas() {
  var pic_count = 0;
  //normall before high
  img_hpool1 = new Image();
  img_hpool1.src = "img/feature/normal/brfore/high/308.png";
  img_hpool1.onload = on_hpool1_loaded;
  function on_hpool1_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool2 = new Image();
  img_hpool2.src = "img/feature/normal/brfore/high/3.png";
  img_hpool2.onload = on_hpool2_loaded;
  function on_hpool2_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool3 = new Image();
  img_hpool3.src = "img/feature/normal/brfore/high/51.png";
  img_hpool3.onload = on_hpool3_loaded;
  function on_hpool3_loaded() {
    Pic_onImageLoaded();
  }
  //normall before low   
  img_hpool4 = new Image();
  img_hpool4.src = "img/feature/normal/brfore/low/259.png";
  img_hpool4.onload = on_hpool4_loaded;
  function on_hpool4_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool5 = new Image();
  img_hpool5.src = "img/feature/normal/brfore/low/301.png";
  img_hpool5.onload = on_hpool5_loaded;
  function on_hpool5_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool6 = new Image();
  img_hpool6.src = "img/feature/normal/brfore/low/489.png";
  img_hpool6.onload = on_hpool6_loaded;
  function on_hpool6_loaded() {
    Pic_onImageLoaded();
  }
  //normall after high
  img_hpool7 = new Image();
  img_hpool7.src = "img/feature/normal/after/high/308.png";
  img_hpool7.onload = on_hpool7_loaded;
  function on_hpool7_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool8 = new Image();
  img_hpool8.src = "img/feature/normal/after/high/3.png";
  img_hpool8.onload = on_hpool8_loaded;
  function on_hpool8_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool9 = new Image();
  img_hpool9.src = "img/feature/normal/after/high/51.png";
  img_hpool9.onload = on_hpool9_loaded;
  function on_hpool9_loaded() {
    Pic_onImageLoaded();
  }
  //normall after low
  img_hpool10 = new Image();
  img_hpool10.src = "img/feature/normal/after/low/259.png";
  img_hpool10.onload = on_hpool10_loaded;
  function on_hpool10_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool11 = new Image();
  img_hpool11.src = "img/feature/normal/after/low/301.png";
  img_hpool11.onload = on_hpool11_loaded;
  function on_hpool11_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool12 = new Image();
  img_hpool12.src = "img/feature/normal/after/low/489.png";
  img_hpool12.onload = on_hpool12_loaded;
  function on_hpool12_loaded() {
    Pic_onImageLoaded();
  }
  //normall attention high
  img_hpool13 = new Image();
  img_hpool13.src = "img/feature/normal/attentionmap/high/308.png";
  img_hpool13.onload = on_hpool13_loaded;
  function on_hpool13_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool14 = new Image();
  img_hpool14.src = "img/feature/normal/attentionmap/high/3.png";
  img_hpool14.onload = on_hpool14_loaded;
  function on_hpool14_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool15 = new Image();
  img_hpool15.src = "img/feature/normal/attentionmap/high/51.png";
  img_hpool15.onload = on_hpool15_loaded;
  function on_hpool15_loaded() {
    Pic_onImageLoaded();
  }
  //normall attention low
  img_hpool16 = new Image();
  img_hpool16.src = "img/feature/normal/attentionmap/low/259.png";
  img_hpool16.onload = on_hpool16_loaded;
  function on_hpool16_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool17 = new Image();
  img_hpool17.src = "img/feature/normal/attentionmap/low/301.png";
  img_hpool17.onload = on_hpool17_loaded;
  function on_hpool17_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool18 = new Image();
  img_hpool18.src = "img/feature/normal/attentionmap/low/489.png";
  img_hpool18.onload = on_hpool18_loaded;
  function on_hpool18_loaded() {
    Pic_onImageLoaded();
  }

  //Tumor before high
  img_hpool19 = new Image();
  img_hpool19.src = "img/feature/tumor/brfore/high/87.png";
  img_hpool19.onload = on_hpool19_loaded;
  function on_hpool19_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool20 = new Image();
  img_hpool20.src = "img/feature/tumor/brfore/high/71.png";
  img_hpool20.onload = on_hpool20_loaded;
  function on_hpool20_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool21 = new Image();
  img_hpool21.src = "img/feature/tumor/brfore/high/6.png";
  img_hpool21.onload = on_hpool21_loaded;
  function on_hpool21_loaded() {
    Pic_onImageLoaded();
  }
  //Tumor before low
  img_hpool22 = new Image();
  img_hpool22.src = "img/feature/tumor/brfore/low/249.png";
  img_hpool22.onload = on_hpool22_loaded;
  function on_hpool22_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool23 = new Image();
  img_hpool23.src = "img/feature/tumor/brfore/low/296.png";
  img_hpool23.onload = on_hpool23_loaded;
  function on_hpool23_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool24 = new Image();
  img_hpool24.src = "img/feature/tumor/brfore/low/37.png";
  img_hpool24.onload = on_hpool24_loaded;
  function on_hpool24_loaded() {
    Pic_onImageLoaded();
  }
  //Tumor after high
  img_hpool25 = new Image();
  img_hpool25.src = "img/feature/tumor/after/high/87.png";
  img_hpool25.onload = on_hpool25_loaded;
  function on_hpool25_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool26 = new Image();
  img_hpool26.src = "img/feature/tumor/after/high/71.png";
  img_hpool26.onload = on_hpool26_loaded;
  function on_hpool26_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool27 = new Image();
  img_hpool27.src = "img/feature/tumor/after/high/6.png";
  img_hpool27.onload = on_hpool27_loaded;
  function on_hpool27_loaded() {
    Pic_onImageLoaded();
  }
  //Tumor after low
  img_hpool28 = new Image();
  img_hpool28.src = "img/feature/tumor/after/low/249.png";
  img_hpool28.onload = on_hpool28_loaded;
  function on_hpool28_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool29 = new Image();
  img_hpool29.src = "img/feature/tumor/after/low/296.png";
  img_hpool29.onload = on_hpool29_loaded;
  function on_hpool29_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool30 = new Image();
  img_hpool30.src = "img/feature/tumor/after/low/37.png";
  img_hpool30.onload = on_hpool30_loaded;
  function on_hpool30_loaded() {
    Pic_onImageLoaded();
  }
  //tumor attention high
  img_hpool31 = new Image();
  img_hpool31.src = "img/feature/tumor/attentionmap/high/87.png";
  img_hpool31.onload = on_hpool31_loaded;
  function on_hpool31_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool32 = new Image();
  img_hpool32.src = "img/feature/tumor/attentionmap/high/71.png";
  img_hpool32.onload = on_hpool32_loaded;
  function on_hpool32_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool33 = new Image();
  img_hpool33.src = "img/feature/tumor/attentionmap/high/6.png";
  img_hpool33.onload = on_hpool33_loaded;
  function on_hpool33_loaded() {
    Pic_onImageLoaded();
  }
  //tumor attention low
  img_hpool34 = new Image();
  img_hpool34.src = "img/feature/tumor/attentionmap/low/249.png";
  img_hpool34.onload = on_hpool34_loaded;
  function on_hpool34_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool35 = new Image();
  img_hpool35.src = "img/feature/tumor/attentionmap/low/296.png";
  img_hpool35.onload = on_hpool35_loaded;
  function on_hpool35_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool36 = new Image();
  img_hpool36.src = "img/feature/tumor/attentionmap/low/37.png";
  img_hpool36.onload = on_hpool36_loaded;
  function on_hpool36_loaded() {
    Pic_onImageLoaded();
  }
  //Necrosis before high
  img_hpool37 = new Image();
  img_hpool37.src = "img/feature/necrosis/brfore/high/17.png";
  img_hpool37.onload = on_hpool37_loaded;
  function on_hpool37_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool38 = new Image();
  img_hpool38.src = "img/feature/necrosis/brfore/high/361.png";
  img_hpool38.onload = on_hpool38_loaded;
  function on_hpool38_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool39 = new Image();
  img_hpool39.src = "img/feature/necrosis/brfore/high/55.png";
  img_hpool39.onload = on_hpool39_loaded;
  function on_hpool39_loaded() {
    Pic_onImageLoaded();
  }
  //Necrosis before low
  img_hpool40 = new Image();
  img_hpool40.src = "img/feature/necrosis/brfore/low/488.png";
  img_hpool40.onload = on_hpool40_loaded;
  function on_hpool40_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool41 = new Image();
  img_hpool41.src = "img/feature/necrosis/brfore/low/223.png";
  img_hpool41.onload = on_hpool41_loaded;
  function on_hpool41_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool42 = new Image();
  img_hpool42.src = "img/feature/necrosis/brfore/low/510.png";
  img_hpool42.onload = on_hpool42_loaded;
  function on_hpool42_loaded() {
    Pic_onImageLoaded();
  }
  //Necrosis after high
  img_hpool43 = new Image();
  img_hpool43.src = "img/feature/necrosis/after/high/17.png";
  img_hpool43.onload = on_hpool43_loaded;
  function on_hpool43_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool44 = new Image();
  img_hpool44.src = "img/feature/necrosis/after/high/361.png";
  img_hpool44.onload = on_hpool44_loaded;
  function on_hpool44_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool45 = new Image();
  img_hpool45.src = "img/feature/necrosis/after/high/55.png";
  img_hpool45.onload = on_hpool45_loaded;
  function on_hpool45_loaded() {
    Pic_onImageLoaded();
  }
  //Necrosis after low
  img_hpool46 = new Image();
  img_hpool46.src = "img/feature/necrosis/after/low/488.png";
  img_hpool46.onload = on_hpool46_loaded;
  function on_hpool46_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool47 = new Image();
  img_hpool47.src = "img/feature/necrosis/after/low/223.png";
  img_hpool47.onload = on_hpool47_loaded;
  function on_hpool47_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool48 = new Image();
  img_hpool48.src = "img/feature/necrosis/after/low/510.png";
  img_hpool48.onload = on_hpool48_loaded;
  function on_hpool48_loaded() {
    Pic_onImageLoaded();
  }
  //Necrosis attentionmap high
  img_hpool49 = new Image();
  img_hpool49.src = "img/feature/necrosis/attentionmap/high/17.png";
  img_hpool49.onload = on_hpool49_loaded;
  function on_hpool49_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool50 = new Image();
  img_hpool50.src = "img/feature/necrosis/attentionmap/high/361.png";
  img_hpool50.onload = on_hpool50_loaded;
  function on_hpool50_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool51 = new Image();
  img_hpool51.src = "img/feature/necrosis/attentionmap/high/55.png";
  img_hpool51.onload = on_hpool51_loaded;
  function on_hpool51_loaded() {
    Pic_onImageLoaded();
  }
  //Necrosis attentionmap low
  img_hpool52 = new Image();
  img_hpool52.src = "img/feature/necrosis/attentionmap/low/488.png";
  img_hpool52.onload = on_hpool52_loaded;
  function on_hpool52_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool53 = new Image();
  img_hpool53.src = "img/feature/necrosis/attentionmap/low/223.png";
  img_hpool53.onload = on_hpool53_loaded;
  function on_hpool53_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool54 = new Image();
  img_hpool54.src = "img/feature/necrosis/attentionmap/low/510.png";
  img_hpool54.onload = on_hpool54_loaded;
  function on_hpool54_loaded() {
    Pic_onImageLoaded();
  }

  //normall unweighted attention high
  img_hpool55 = new Image();
  img_hpool55.src = "img/feature/normal/noweightedattentionmap/high/308.png";
  img_hpool55.onload = on_hpool55_loaded;
  function on_hpool55_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool56 = new Image();
  img_hpool56.src = "img/feature/normal/noweightedattentionmap/high/3.png";
  img_hpool56.onload = on_hpool56_loaded;
  function on_hpool56_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool57 = new Image();
  img_hpool57.src = "img/feature/normal/noweightedattentionmap/high/51.png";
  img_hpool57.onload = on_hpool57_loaded;
  function on_hpool57_loaded() {
    Pic_onImageLoaded();
  }
  //normall unweighted attention low
  img_hpool58 = new Image();
  img_hpool58.src = "img/feature/normal/noweightedattentionmap/low/259.png";
  img_hpool58.onload = on_hpool58_loaded;
  function on_hpool58_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool59 = new Image();
  img_hpool59.src = "img/feature/normal/noweightedattentionmap/low/301.png";
  img_hpool59.onload = on_hpool59_loaded;
  function on_hpool59_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool60 = new Image();
  img_hpool60.src = "img/feature/normal/noweightedattentionmap/low/489.png";
  img_hpool60.onload = on_hpool60_loaded;
  function on_hpool60_loaded() {
    Pic_onImageLoaded();
  }

  //tumor unweighted attention high
  img_hpool61 = new Image();
  img_hpool61.src = "img/feature/tumor/noweightedattentionmap/high/87.png";
  img_hpool61.onload = on_hpool61_loaded;
  function on_hpool61_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool62 = new Image();
  img_hpool62.src = "img/feature/tumor/noweightedattentionmap/high/71.png";
  img_hpool62.onload = on_hpool62_loaded;
  function on_hpool62_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool63 = new Image();
  img_hpool63.src = "img/feature/tumor/noweightedattentionmap/high/6.png";
  img_hpool63.onload = on_hpool63_loaded;
  function on_hpool63_loaded() {
    Pic_onImageLoaded();
  }
  //tumor unweighted attention low
  img_hpool64 = new Image();
  img_hpool64.src = "img/feature/tumor/noweightedattentionmap/low/249.png";
  img_hpool64.onload = on_hpool64_loaded;
  function on_hpool64_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool65 = new Image();
  img_hpool65.src = "img/feature/tumor/noweightedattentionmap/low/296.png";
  img_hpool65.onload = on_hpool65_loaded;
  function on_hpool65_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool66 = new Image();
  img_hpool66.src = "img/feature/tumor/noweightedattentionmap/low/37.png";
  img_hpool66.onload = on_hpool66_loaded;
  function on_hpool66_loaded() {
    Pic_onImageLoaded();
  }

  //Necrosis unweighted attentionmap high
  img_hpool67 = new Image();
  img_hpool67.src = "img/feature/necrosis/noweightedattentionmap/high/17.png";
  img_hpool67.onload = on_hpool67_loaded;
  function on_hpool67_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool68 = new Image();
  img_hpool68.src = "img/feature/necrosis/noweightedattentionmap/high/361.png";
  img_hpool68.onload = on_hpool68_loaded;
  function on_hpool68_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool69 = new Image();
  img_hpool69.src = "img/feature/necrosis/noweightedattentionmap/high/55.png";
  img_hpool69.onload = on_hpool69_loaded;
  function on_hpool68_loaded() {
    Pic_onImageLoaded();
  }
  //Necrosis unweighted attentionmap low
  img_hpool69 = new Image();
  img_hpool69.src = "img/feature/necrosis/noweightedattentionmap/low/488.png";
  img_hpool69.onload = on_hpool69_loaded;
  function on_hpool69_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool70 = new Image();
  img_hpool70.src = "img/feature/necrosis/noweightedattentionmap/low/223.png";
  img_hpool70.onload = on_hpool70_loaded;
  function on_hpool70_loaded() {
    Pic_onImageLoaded();
  }
  img_hpool71 = new Image();
  img_hpool71.src = "img/feature/necrosis/noweightedattentionmap/low/510.png";
  img_hpool71.onload = on_hpool71_loaded;
  function on_hpool71_loaded() {
    Pic_onImageLoaded();
  }


  img_white = new Image();
  img_white.src = "img/featuremap/White.png";
  img_white.onload = on_white_loaded;
  function on_white_loaded() {
    Pic_onImageLoaded();
  }

  img_arrows = new Image();
  img_arrows.src = "img/model/concate2.png";
  img_arrows.onload = on_arrows_loaded;
  function on_arrows_loaded() {
    Pic_onImageLoaded();
  }

  img_122 = new Image();
  img_122.src = "img/model/magblock.png";
  img_122.onload = on_122_loaded;
  function on_122_loaded() {
    Pic_onImageLoaded();
  }
  img_arrow = new Image();
  img_arrow.src = "img/arrow.jpg";
  img_arrow.onload = on_arrow_loaded;
  function on_arrow_loaded() {
    Pic_onImageLoaded();
  }
  img_dot = new Image();
  img_dot.src = "img/model/dot.png";
  img_dot.onload = on_dot_loaded;
  function on_dot_loaded() {
    Pic_onImageLoaded();
  }

  var pic_imagePaths = [
    "img/featuremap/hpool1.png",
    "img/featuremap/hpool2.png",
    "img/featuremap/hpool3.png",
    "img/featuremap/hpool4.png",
    "img/featuremap/White.png",
    "img/model/dot.png"
  ]

  function Pic_onImageLoaded() {
    pic_count += 1;
    if (pic_count >= pic_imagePaths.length) {
      Pic_draw2dImage();
    }
  }

  //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
  function Pic_draw2dImage() {
    Pic_imageLoaded = true;
    pic_2dCtx.drawImage(img_arrows, 40, 200, 200, 110);
    pic_2dCtx.drawImage(img_122, 320, 150, 341, 130);
    // pic_2dCtx.drawImage(img_high, 188, 277, 25, 25);
    // pic_2dCtx.drawImage(img_low, 215, 277, 26, 23);
    pic_2dCtx.drawImage(img_dot, 200, 250, 8, 8);
    pic_2dCtx.drawImage(img_dot, 210, 250, 8, 8);
    pic_2dCtx.drawImage(img_dot, 220, 250, 8, 8);

    pic_2dCtx.drawImage(img_dot, 270, 250, 8, 8);
    pic_2dCtx.drawImage(img_dot, 280, 250, 8, 8);
    pic_2dCtx.drawImage(img_dot, 290, 250, 8, 8);

    pic_2dCtx.drawImage(img_dot, 695, 250, 8, 8);
    pic_2dCtx.drawImage(img_dot, 705, 250, 8, 8);
    pic_2dCtx.drawImage(img_dot, 715, 250, 8, 8);

    pic_2dCtx.drawImage(img_dot, 759, 250, 8, 8);
    pic_2dCtx.drawImage(img_dot, 769, 250, 8, 8);
    pic_2dCtx.drawImage(img_dot, 779, 250, 8, 8);

  }
}