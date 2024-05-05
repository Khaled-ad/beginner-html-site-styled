function loadIframe() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://khaled-ad.github.io/iframe-script/'; // Replace with the URL of the site you want to load
    iframe.width = '100%';
    iframe.height = '100%';
    document.body.appendChild(iframe);
    console.log('Iframe loaded');
}

window.addEventListener('load', loadIframe);

window.addEventListener('message', function(event) {
    // Check the event property of the message
    console.log('Received message: ');
});