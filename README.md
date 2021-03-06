SitoVoto
========

Blank slate for html/css/js tinkering.

Useful to test new css/js snippets, frameworks, technologies. 

It can be used in a **__dev-and-browser-refresh__** cycle together with **entr** (or another watch-like tool) and a browser auto refresh tool like the **reload-browser** script provided here.

Put your **CSS** into the style.css and your **JS** into scripts.js (both are provided and linked to index.html by default).

Getting Started
-------------
On a Mac:

    git clone git@github.com:microspino/sitovoto.git "tinker-`gshuf -i 1-1000 -n 1`"

On Linux:

    git clone git@github.com:microspino/sitovoto.git "tinker-`shuf -i 1-1000 -n 1`"

This will create a `tinker-<3-numbers>` folder in your current dir.


Example Usage
-------------

    chmod u+x reload-browser
    ls *.css *.js *.html *.js | entr ./reload-browser Firefox


or:


    ls *.css *.js *.html | entr ./reload-browser "Google Crome"


Tested also with Safari.

This will open the provided `index.html` with Chrome, start listening for css, js and html changes and reload the browser when needed.

You can also copy the **reload-browser** script on your PATH for ex. at `/usr/local/bin` and use `make watch`. This will work by using a Makefile with a simple **watch** recipe (provided).

Cool Snippets folder
--------------------

I put there all the useful CSS/JS snippets found googling a la **cool-shit-file**.

Say, for example, you want to test grid-layouts (which are totally cool).

Include the **basic-grid-layout.css** inside **index.html** and create a div with the `grrrid` css class to have a three column layout.

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

[**reload-browser**](http://entrproject.org/scripts/reload-browser) from Eric Radman which also authored [**entr**](http://entrproject.org/).