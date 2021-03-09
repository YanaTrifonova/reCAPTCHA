window.onload = load;

function load() {
    const form = document.getElementById("comment-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let data = {};

        for (let i = 0; i < event.target.length; i++) {
            data[event.target[i].name] = event.target[i].value;
        }

        sendData(data);
    });
}


function sendData(data) {
    console.log("HELLO THERE!");
    console.log(data);

    const XHR = new XMLHttpRequest();

    XHR.open('POST', 'http://localhost:3000/submit');
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    XHR.send(JSON.stringify(data));
    XHR.addEventListener('error', function (event) {
        console.error('Oops! Something went wrong.', event);
    });
    XHR.addEventListener('load', function (_) {
        console.log('Yeah! Data sent and response loaded.');
    });
}
