function Container (view) {
  this.view = view;
  this.header = this.view.querySelector('.header');
  this.name = this.header.innerText;
  this.resize = this.header.querySelector('.resize');
};

Container.prototype.toggleMaximized = function () {
  this.view.classList.toggle('maximized');
  this.resize.classList.toggle('fa-expand-arrows-alt');
  this.resize.classList.toggle('fa-compress-alt');
};

Container.prototype.toggleMinimized = function () {
  this.view.classList.toggle('minimized');
};

export default Container;
