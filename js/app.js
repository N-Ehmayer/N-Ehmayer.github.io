
// Arrow-scroll-to-bottom button
const arrow = document.querySelector('.arrow');

function autoScroll() {
  window.scrollTo(0,document.body.scrollHeight);
};

arrow.addEventListener('click', autoScroll);


// Fired after page is loaded.
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.collapsible');
  const instances = M.Collapsible.init(elems);

  // Position intro card dynamically on page load based on screen height.
  const introContainer = document.querySelector('.bio-container');
  introContainer.style.marginTop = `${screen.height - 350}px`;
});
