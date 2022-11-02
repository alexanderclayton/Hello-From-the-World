var goEnglish = document.getElementById("english")
var goSpanish = document.getElementById("spanish");
var goFrench = document.getElementById("french");
var goItalian = document.getElementById("italian");
var goRussian = document.getElementById("russian");
var goGerman = document.getElementById("german");
var goChinese = document.getElementById("chinese");
var goHindi = document.getElementById("hindi");
var goArabic = document.getElementById("arabic");
var goJapanese = document.getElementById("japanese");

/* calling this .onclick function on a page renders all proceeding .onclick functions invalid...
//as currently coded, this still requires an indiviaul javascript page for each HTML page...
goEnglish.onclick = function(event) {
    location.assign('./other-pages/index1.html')
};
*/

goSpanish.onclick = function(event) {
    location.assign('./other-pages/index2.html')
};

goFrench.onclick = function(event) {
    location.assign('./other-pages/index3.html')
};

goItalian.onclick = function(event) {
    location.assign('./other-pages/index4.html')
};

goRussian.onclick = function(event) {
    location.assign('./other-pages/index5.html')
};

goGerman.onclick = function(event) {
    location.assign('./other-pages/index6.html')
};

goChinese.onclick = function(event) {
    location.assign('./other-pages/index7.html')
};

goHindi.onclick = function(event) {
    location.assign('./other-pages/index8.html')
};

goArabic.onclick = function(event) {
    location.assign('./other-pages/index9.html')
};

goJapanese.onclick = function(event) {
    location.assign('./other-pages/index10.html')
};