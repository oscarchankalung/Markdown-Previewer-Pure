import Editor from './model/Editor.js';
import Previewer from './model/Previewer.js';

const app = new App();

function App () {
  this.editor = new Editor();
  this.previewer = new Previewer();

  this.setDefault();
  this.editor.view.addEventListener('input', () => this.liveUpdate());
}

App.prototype.setDefault = function () {

};

App.prototype.liveUpdate = function () {

};

App.prototype.enlarge = function (event) {

};
