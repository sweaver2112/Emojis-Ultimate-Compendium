# Emojis-Ultimate-Compendium

## [DEMO](https://codepen.io/sweaver2112/full/QWKNRbG)  

![image showing modal dialog of the Ultimate Emoji Compendium](https://github.com/sweaver2112/Emojis-Ultimate-Compendium/blob/main/demo2.png?raw=true)![image showing modal dialog of the Ultimate Emoji Compendium](https://github.com/sweaver2112/Emojis-Ultimate-Compendium/blob/main/demo3.png?raw=true)
![image showing fullscreen mode of the Ultimate Emoji Compendium](https://github.com/sweaver2112/Emojis-Ultimate-Compendium/blob/main/demo1.png?raw=true)


### An Emoji picker and comprehensive desktop reference

* **Tested on Windows desktop and Android mobile.  Not tested on Apple IOS/Safari. GChrome on Android freezes/hangs (reasons unknown) while Firefox on Android is ok. 
* The Power Tool for webmasters, developers, digital artists, and anyone who loves Emojis. 
* Web scraped from https://unicode.org/emoji/charts/full-emoji-list.html and https://unicode.org/emoji/charts-13.1/full-emoji-modifiers.html for all the hottest Emojis (build script included)
* On-the-fly Emoji metrics means you can Sort By Color, Saturation, Size, Brightness, and more
* Summary view available via double-click gives you ALL the juicy deets: name, average color, escape strings, character block, etc.
* Search by name, category, and sub-category
* Fullscreen and Mini modes

_Usage_

HTML: should include the css and js files, plus an element to attach the picker to. The input element is optional, omit for a stand-alone compendium.
```html
<head><link rel="stylesheet" href="styles.css" /></head>

<input type="text" id="example"><span id="compendium">📙</span>

<script src='https://gitcdn.link/repo/sweaver2112/Enhanced-Unicode-Character-Blocks/master/blocks.js'></script>
<script src='emojiCompendium.js'></script>
```
JS:
```javascript
/*
new EmojiCompendium(clickTarget, [inputTarget], [options])
let defaults = { 
 width: "300px", 
 height: "400px", 
 fontSize: "1em", 
 mode: "default", //default or mini
 category: "Smileys & emotion",
 banner: "<span>📗&nbsp;Emojis: Ultimate Compendium&nbsp;📗</span>" 
}
*/
var pickr = new EmojiCompendium(document.querySelector("#compendium"), document.querySelector("#example"));
```

Specify your own colors by adding CSS custom properties:
```html
<!--Warhol Picker -->
:root {
  --compendium-outer-bg: yellow;
  --compendium-outer-text: blue;
  --compendium-inner-bg: #3dfaff;
  --compendium-inner-text: red;
  --compendium-active-bg:#fc03fd;
  --compendium-active-text: #70fc03;
}
```




