$(document).ready(function() {
  let redCircle = "#redCircle"
  let redCircle2 = "#redCircle2"


  const moveRightAndUpsideDown = function () {
    TweenLite.to(redCircle, 2, {x: 610, y: -10})
    TweenLite.to(redCircle2, 2, {x: 500, y: 100})
  }

  const movetoRightDown = function () {
    TweenLite.to(redCircle, 2, {x: 100, y: 100})
    TweenLite.to(redCircle2, 2, {x: 100, y: 100,
      onComplete: moveRightAndUpsideDown
    })
  }

function reduceWidth() {
  TweenLite.to(redCircle, 2, {width: 100})
  TweenLite.to(redCircle2, 2, {width:100,
    onComplete: movetoRightDown
  })
}

reduceWidth()

});
