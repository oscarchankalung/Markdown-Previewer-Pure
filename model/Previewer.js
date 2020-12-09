function Previewer () {
  this.view = document.querySelector('#preview');
}

Previewer.prototype.setHTML = function (markdown) {
  this.view.innerHTML = marked(markdown);
};

export default Previewer;
