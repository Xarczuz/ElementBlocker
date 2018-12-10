
$('body')[0].addEventListener('click', removeElement, true);

function removeElement(event) {
  event.preventDefault();
  console.log(event.target);
  event.target.style.display = 'none';
  let parents = $(event.target).parents();
  let path = '';
  for (let index = parents.length - 1; index >= 0; index--) {
    path += parents[index].tagName + ' ';
  }
  path += event.target.tagName + ',' + $(event.target).index();
}

//   let t1 = 'HTML BODY P1 P2 P3,0';
//   let t2 = 'HTML BODY P1 P2 P3,1';
//   let t3 = 'HTML BODY P1 P2 P3,2';
//   hide(t1);
//   hide(t2);
//   hide(t3);
// });

function hide(path) {
  let paths = path.split(',');
  let tags = paths[0];
  let index = paths[1];
  console.log($(tags).get(index));
  $(tags).get(index).style.display = 'none';
}
