function Previewer () {
  this.view = document.querySelector('#preview');
}

Previewer.prototype.render = async function (markdown) {
  const href = 'https://api.github.com/markdown';
  const body = JSON.stringify({ text: markdown });

  const response = await fetch(href, {
    method: 'POST',
    body: body,
    headers: { Accept: 'application/vnd.github.v3+json' }
  });

  if (!response.ok) {
    throw new Error(response.message);
  } else {
    const text = await response.text();
    this.view.innerHTML = text;
  };
};

export default Previewer;
