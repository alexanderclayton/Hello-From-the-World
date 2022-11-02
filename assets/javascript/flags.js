var wikiData = document.getElementById("wiki-data");
var countryHeader = document.getElementById("country-name");
var countryFlag = document.getElementById("country-flag");

function flagWikipedia() {
    var fetchURL = ('https://en.wikipedia.org/w/api.php?origin=*&action=parse&format=json&formatversion=2&page=' + window.event.target.title)
    var countryName = window.event.target.alt
    var flagImg = window.event.target.src
    fetch(fetchURL)
    .then(function (response) {
        return response.json();
        
    })
    .then(function (data) {
        console.log(flagImg);
        countryFlag.setAttribute("src", flagImg);
        countryFlag.classList.remove("hidden");
        countryHeader.innerHTML = countryName
        wikiData.innerHTML = data.parse.text;
    })
}
