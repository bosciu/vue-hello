/* Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un'immagine, presa anch'essa da un data. */

var app = new Vue({
    el: "#root",
    data: {
        message: "Hello World!",
        linkImage: "https://www.architetturaecosostenibile.it/images/stories/2016/promuoviamo-paesaggio-italiano.jpg",
        classColor: "red"
    },
    methods: {
        saluta: () => alert("Ciao"),
        cambiaColore: function() {
            if (this.classColor == "red") {
                this.classColor = "blue";
            } else {
                this.classColor = "red";
            }
        }
    }
});