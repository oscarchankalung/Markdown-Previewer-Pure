function Container (view) {
  this.view = view;
  this.header = this.view.querySelector('.header');
  this.name = this.header.querySelector('.name').innerText.toLowerCase();
  this.button = this.header.querySelector('.button');
};

Container.prototype.toggleMaximized = function () {
  this.view.classList.toggle('maximized');
};

Container.prototype.toggleMinimized = function () {
  this.view.classList.toggle('minimized');
};

Container.prototype.changeZoom = function () {
  this.button.classList.toggle('fa-expand-arrows-alt');
  this.button.classList.toggle('fa-compress-alt');
};

Container.prototype.setWideMode = function () {
  this.button.className = 'button fas fa-expand-arrows-alt';
  this.button.title = 'zoom';
  this.view.className = 'container';
};

Container.prototype.setNarrowMode = function () {
  this.button.className = 'button fas fa-eye';
  this.button.title = 'switch';
  if (this.view.className === 'container' && this.name === 'editor') {
    this.toggleMaximized();
  };
  if (this.view.className === 'container' && this.name !== 'editor') {
    this.toggleMinimized();
  };
};

export default Container;
