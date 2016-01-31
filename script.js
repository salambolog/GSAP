TweenMax.from(".logo", 0.7, {x:600, opacity:0, scale:0, ease:Bounce.easeOut});
TweenMax.staggerFrom(".box", 0.5, {opacity:0, y:200, rotation:720, scale:3, delay: 0.5}, 0.2)
// TweenMax.to(".logo, .box", 0.5, {opacity:0, delay:2});


var SplitText = new SplitText("#quote");
