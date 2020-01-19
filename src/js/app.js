var $ = require('jquery'); // dichiaro che il mio progetto ha una dipendenza al package jquery 3.4.1

require('../../node_modules/bootstrap/dist/js/bootstrap.bundle.js');

// funziona solo per dropdown
// window.Popper = require('popper.js/dist/umd/popper.js');
// require('bootstrap/js/src/dropdown');
// require('bootstrap/js/src/modal');
// require('bootstrap/js/src/popover');
// require('bootstrap/js/src/tooltip');

// window.Popper = require('popper.js');
// require('bootstrap');

//
// abilito tooltip
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
}); //

// abilito Popover
$(function() {
    $('[data-toggle="popover"]').popover();
});

$(document).ready(function() {

    // alert("ciao");

});