function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var nested = document.getElementById('nested');
  return nested.querySelector('.target');
}

function increaseRankBy(n){
  var ranked = document.querySelectorAll('ul.ranked-list li')
  for(var i = 0; i < ranked.length; i++){
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n
  }
  return
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
