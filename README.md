# Markdown-Previewer-Pure

A website that previews markdown.

## Requirements

1. Element: editor ```<textarea id="editor">```
2. Element: preview ```<div id="preview>```
3. Script function: live update ```oninput```
4. Script function: render markdown into HTML ([marked.js](https://github.com/markedjs/marked?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library))
5. Script function: interpret carriage returns as ```br``` elements
6. Script onload: editor with default markdown
7. Script onload: preview with default markdown rendered
8. Element button: editor enlarge
9. Element button: preview enlarge

## Website Styles

* Ocean dark: ```#1E2B33```
* Ocean medium: ```#666F74```
* Ocean light: ```#EBEDEF```
* Background color: ```ocean medium```
* Header color: ```ocean dark```
* View color: ```ocean light```
* Header font: ```Russo One 15px```
* Editor font: ```Courier New```
* Previewer font: ```--apple-system```

## Stages

- [X] HTML skeleton
- [ ] Script function
- [ ] Script onload
- [ ] CSS basic style
- [ ] CSS markdown style
- [ ] Enlarge button