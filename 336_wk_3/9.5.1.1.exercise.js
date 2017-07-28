function doIt() {
    var url = prompt("URL please");
    var windowOptions = "menubar,location,scrollbars,status";
    window.open("https://www." + url, "My URL Window", windowOptions);
}