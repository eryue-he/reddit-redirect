var path = window.location.pathname;
var hostname = window.location.hostname;

if (!hostname.includes("old")){
    window.location.href = "https://old.reddit.com" + path;
}