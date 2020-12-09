function Editor () {
  this.view = document.querySelector('#editor');
}

Editor.prototype.getMarkdown = function () {
  return this.view.value;
};

export default Editor;
