import Editor from './model/Editor.js';
import Previewer from './model/Previewer.js';
import Container from './model/Container.js';
import placeholder from './model/placeholder.js';

function App () {
  this.editor = new Editor();
  this.previewer = new Previewer();
  this.containers = [];
  this.markdown = placeholder;
}

App.prototype.initPlaceholder = function () {
  this.editor.view.value = this.markdown;
  this.previewer.setHTML(this.markdown);
  this.editor.view.addEventListener('input', () => this.liveUpdate());
};

App.prototype.liveUpdate = function () {
  this.markdown = this.editor.getMarkdown();
  this.previewer.setHTML(this.markdown);
};

App.prototype.initContainers = function () {
  document.querySelectorAll('.container').forEach(view => {
    const container = new Container(view);
    this.containers.push(container);
    container.resize.addEventListener('click', (event) => this.toggleResize(event));
  });
};

App.prototype.toggleResize = function (event) {
  this.containers.forEach(container => {
    container.resize === event.target
      ? container.toggleMaximized()
      : container.toggleMinimized();
  });
};

App.init = function () {
  const app = new App();
  app.initPlaceholder();
  app.initContainers();
  return app;
};

const app = App.init();
