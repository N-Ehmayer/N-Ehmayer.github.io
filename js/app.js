
const arrow = document.querySelector('.arrow');

function autoScroll() {
  window.scrollTo(0,document.body.scrollHeight);
};

arrow.addEventListener('click', autoScroll);


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});
