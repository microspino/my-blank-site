SitoVoto
========

Blank slate for html/css/js tinkering.

Useful to test new css/js snippets, frameworks, technologies. 

Use it in a dev-and-browser-refresh cycle with **entr** or other watch like tool and a browser reload tool like the reload-browser script provided here.

Put your **CSS** into the style.css and your **JS** into scripts.js (both are provided and linked to index.html by default).

Example Usage
-------------

    ls *.css *.js *.html *.js | entr reload-browser Firefox


or:


    ls *.css *.js *.html | entr reload-browser "Google Crome"


Tested also with Safari.

Theres a Makefile with a simple **watch** recipe. Run it with `make watch`.
Will open the provided `index.html` with Chrome and will start listening for css, js and html changes.

Copy the script on your PATH ex. `/usr/local/bin` .

Cool Snippets folder
--------------------

WIll contain all the useful CSS/JS snippets i found googling a la **cool-shit-file**.
Say for example you want to test grid-layouts which are totally coooool!
Include the basic-grid-layout.css inside index.html and create a div like this to have a three column layout.

**index.html**


    <head>
      ....
    <link rel="stylesheet" href="cool-snippets/css/basic-grid-layout.css" type="text/css" media="screen">
      ...
    </head>
    <body>
    
      <div class="grrrid">
        <div id="first"> <h1>1st</h1> </div>
        <div id="second"> <h1>2nd</h1> </div>
        <div id="third"> <h1>3rd</h1> </div>
      </div>
    
    </body>

Thanks / Copyrights
-------------------

Inspired by an article from [Chen Hui Jing](https://www.chenhuijing.com/blog/css-grid-flexbox-combo/#🎹)
Lo script reload-browser è di Eric Radman che è anche l'autore di **entr**.