# A Brief History of Web Development

A small educational website covering the evolution of the web in five chapters. The design takes inspiration from Windows 95: a teal background, gray window frames, a blue title bar, and raised navigation buttons.

Originally created as Michael Pacheco’s first website project in 2023.

## Chapters

1. The early years of the web
2. Dynamic web content: JavaScript and CSS
3. The rise of Web 2.0
4. Mobile and responsive design
5. Modern web development

## Run it

Extract the ZIP and open `index.html` in your browser. There is no installation or build step. The linked web images need an internet connection; original project images act as local fallbacks.

All pages also work as static files on GitHub Pages. Upload the contents of this folder so `index.html` is at the top of your publishing folder.

## Files and code

| File | Purpose |
| --- | --- |
| `index.html` | Welcome page and chapter directory |
| `chapterone.html`–`chapterfive.html` | The five reading pages |
| `style.css` | Shared retro theme and responsive layouts |
| `script.js` | Image fallbacks and a small greeting demo in chapter 2 |
| `images/` | A place for your replacement JPGs |
| Original image files | Preserved local assets and fallbacks |

Built with plain HTML, CSS, and a little JavaScript. Navigation and reading work without JavaScript. Source links are included at the end of each chapter.

## Replace the web images

Each HTML page contains one linked image. Search for the comment `Replace this src` to find it.

1. Save your JPG in `images/`, for example `images/first-web-server.jpg`.
2. Replace the image’s `src` URL with that relative path.
3. Update `alt` to describe your image and update its caption and credit.
4. If needed, change `data-fallback`, `data-fallback-alt`, and `data-fallback-caption` to match the fallback you want to keep. These attributes tell the JavaScript what to show if the main image fails.

Example:

```html
<img src="images/first-web-server.jpg"
  alt="The NeXT computer used as the first web server"
  width="640" height="420">
```

The example omits the optional fallback attributes. You can leave them on your existing image tag if you want the fallback behavior.

## Linked image credits

Linked images are displayed without editing their source files. Their native shapes are preserved using `object-fit: contain`. Credits and license links appear below each image.

| Page | Image and creator | License |
| --- | --- | --- |
| Home | [First Web Server — Coolcaesar](https://commons.wikimedia.org/wiki/File:First_Web_Server.jpg) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) |
| Chapter 1 | [Tim Berners-Lee — Uldis Bojārs](https://commons.wikimedia.org/wiki/File:Tim_Berners-Lee.jpg) | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) |
| Chapter 2 | [Unofficial JavaScript logo — Chris Williams](https://commons.wikimedia.org/wiki/File:JavaScript-logo.png) | Public domain / permissive license; see the source page |
| Chapter 3 | [Wikipedia globe — Wikimedia, Nohat and Paullusmagnus](https://commons.wikimedia.org/wiki/File:Wikipedia-logo-v2.svg) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) |
| Chapter 4 | [Responsive Web Design Demo Template — TheBertag](https://commons.wikimedia.org/wiki/File:Responsive_Web_Design_Demo_Template.svg) | [CC0](https://creativecommons.org/publicdomain/zero/1.0/) |
| Chapter 5 | [Community PWA logo — Diego González](https://commons.wikimedia.org/wiki/File:PWA_logo.svg) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |

Some images are later illustrations or logos, rather than screenshots from the period being discussed. Original supplied images remain in the folder, with their existing provenance; they are not newly licensed by this project. Update credits when replacing any image.

## Author

[Michael Pacheco](https://github.com/michaelpacheco037)
