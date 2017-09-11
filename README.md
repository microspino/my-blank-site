File html/css/js vuoto di prova
-------------------------------

Da usare tutte le volte che devo fare qualche tipo di prova.

E' possibile usarlo insieme a entr e allo script per fare autoreload del browser

Ad. es.:


    ls *.css *.html *.js | entr reload-browser Firefox


oppure:

    ls *.css *.html | entr reload-browser "Google Crome"

si può usare anche con Safari.

E' necessario installare lo script di shell presente in questo repository in un path raggiungibile come, ad esempio `/usr/local/bin` .