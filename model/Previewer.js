import HttpError from './HttpError.js';

function Previewer () {
  this.view = document.querySelector('#preview');
}

Previewer.prototype.getHTML = async function (markdown) {
  const href = 'https://api.github.com/markdown';
  const body = JSON.stringify({ text: markdown });

  const response = await fetch(href, {
    method: 'POST',
    body: body,
    headers: { Accept: 'application/vnd.github.v3+json' }
  });

  if (!response.ok) {
    const body = await response.json();
    throw new HttpError(response, body.message);
  } else {
    return await response.text();
  };
};

Previewer.prototype.render = async function (markwdown) {
  try {
    const text = await this.getHTML(markwdown);
    this.view.innerHTML = text;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

export default Previewer;
