function doIt() {
    var url = prompt("URL please");
    window.scrollY(300);
    var windowOptions = "location,scrollbars,status";
    window.innerHeight = 800;
    window.open("https://www." + url, "My URL Window", windowOptions);
}