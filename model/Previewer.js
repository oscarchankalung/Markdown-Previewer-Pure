import HttpError from './HttpError.js';

function Previewer () {
  this.view = document.querySelector('#preview');
}

Previewer.prototype.getHTML = async function (markdown) {
  const href = 'https://api.github.com/markdown';
  const body = { text: markdown };

  const response = await fetch(href, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token 6605244060df94bcd06a04204a2ba4f524c9de3c'
    }
  });

  if (!response.ok) {
    const body = await response.json();
    throw new HttpError(response, 'Fail to get HTML using GitHub Markdown API', body);
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
    console.log(`message: ${error.body.message}`);
    console.log(`documentation_url: ${error.body.documentation_url}`);
  }
};

export default Previewer;
