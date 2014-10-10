function TablaGame() {
    
    this.initialize = function() {
        this.insert();
    }

}
var TGP = TablaGame.prototype;

TGP.insert = function() {
    document.getElementsByTagName('body')[0].innerHTML = '<div id="js_table"></div>';
};





-function main() {

    document.addEventListener('DOMContentLoaded', function()
    {   var TG = new TablaGame();
        TG.initialize();
    }, false);
}();

