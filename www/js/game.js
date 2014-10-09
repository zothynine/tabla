function TablaGame() {
    
    this.initialize = function() {
        this.insert();
    }

}
var TGP = TablaGame.prototype;

TGP.insert = function() {
    document.getElementById('js_game-table').innerHTML = '<h1>TABLA!</h1>';
};





-function main() {

    document.addEventListener('DOMContentLoaded', function()
    {   var TG = new TablaGame();
        TG.initialize();
    }, false);
}();

