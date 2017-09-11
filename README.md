SitoVoto
========

Blank slate for html/css/js tinkering.

Useful to test new css/js snippets, frameworks, technologies. 

Use it in a dev-and-browser-refresh cycle with **entr** or other watch like tool and a browser reload tool like the reload-browser script provided here.

Example Usage
-------------

    ls *.css *.html *.js | entr reload-browser Firefox


or:

    ls *.css *.html | entr reload-browser "Google Crome"

Tested also with Safari.

Copy the script on your PATH ex. `/usr/local/bin` .

Cool Snippets folder
--------------------

WIll contain all the useful CSS/JS snippets i found googling a la **cool-shit-file**.

Thanks / Copyrights
-------------------

Lo script reload-browser è di Eric Radman che è anche l'autore di **entr**.