import Editor from './model/Editor.js';
import Previewer from './model/Previewer.js';
import Container from './model/Container.js';
import placeholder from './model/placeholder.js';

function App () {
  this.editor = new Editor();
  this.previewer = new Previewer();
  this.width = window.innerWidth;
  this.containers = [];
  this.markdown = placeholder;

  this.liveUpdate = this.liveUpdate.bind(this);
  this.toggleZoom = this.toggleZoom.bind(this);
  this.toggleSwitch = this.toggleSwitch.bind(this);
  this.windowResize = this.windowResize.bind(this);

  this.initPlaceholder();
  this.initContainers();
  window.addEventListener('resize', this.windowResize);
}

App.prototype.initPlaceholder = async function () {
  this.editor.view.value = this.markdown;
  await this.previewer.render(this.markdown);
  this.editor.view.addEventListener('input', this.liveUpdate);
};

App.prototype.liveUpdate = async function () {
  this.markdown = this.editor.getMarkdown();
  await this.previewer.render(this.markdown);
};

App.prototype.initContainers = function () {
  document.querySelectorAll('.container').forEach(view => {
    const container = new Container(view);
    this.containers.push(container);
    if (this.width > 720) {
      container.setWideMode();
      container.button.addEventListener('click', this.toggleZoom);
    } else {
      container.setNarrowMode();
      container.button.addEventListener('click', this.toggleSwitch);
    }
  });
};

App.prototype.toggleZoom = function (event) {
  this.containers.forEach(container => {
    if (container.button === event.target) {
      container.toggleMaximized();
      container.changeZoom();
    } else {
      container.toggleMinimized();
    }
  });
};

App.prototype.toggleSwitch = function () {
  this.containers.forEach(container => {
    container.toggleMaximized();
    container.toggleMinimized();
  });
};

App.prototype.windowResize = function () {
  const currentWidth = window.innerWidth;
  this.containers.forEach(container => {
    if (this.width <= 720 && currentWidth > 720) {
      container.setWideMode();
      container.button.addEventListener('click', this.toggleZoom);
      container.button.removeEventListener('click', this.toggleSwitch);
      console.log('button', container.button);
    } else if (this.width > 720 && currentWidth <= 720) {
      container.setNarrowMode();
      container.button.addEventListener('click', this.toggleSwitch);
      container.button.removeEventListener('click', this.toggleZoom);
    }
  });
  this.width = currentWidth;
};

const app = new App();
