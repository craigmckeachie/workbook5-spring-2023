# Selecting Elements

## Select One Element

```html
<p id="message-paragraph"></p>
```

```js
const messageParagraph = document.getElementById("message-paragraph");
```

```js
const messageParagraph = document.querySelector("#message-paragraph");
```

### Returns

- `HTMLElement`
  - `HTMLInputElement` = `<input type="text">`
  - `HTMLParagraphElement`= `<p>lorem ipsum...</p>`
  - `HTMLOptionElement` = `<option value="">Select ...</option>`

## Select Many Elements

```html
<p class="fancy"></p>
<p class="fancy"></p>
<p class="fancy"></p>
```

```js
const messageParagraphs = document.getElementsByClassName("fancy");
```

```js
const messageParagraphs = document.querySelectorAll(".fancy");
```

---

```html
<p></p>
<p></p>
<p></p>
```

```js
const messageParagraphs = document.getElementsByTagName("p");
```

```js
const messageParagraphs = document.querySelectorAll("p");
```

### Returns

- `HTMLCollection` of `HTMLElement`s
  - [`HTMLParagraphElement`, `HTMLParagraphElement`, `HTMLParagraphElement`]
    - array like but not quit an array
  - `<p>...</p><p>....</p><p>...</p>`
