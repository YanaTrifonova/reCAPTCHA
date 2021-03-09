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
    fetch(
        'http://localhost:3000/submit',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => createHint(data.failed, data.responseDescription))
        .catch((e) => console.error(e));
}

function createHint(failed, responseDescription) {
    const element = document.getElementById('captchaHintContainer');
    element.innerHTML = '';

    const tag = document.createElement("p");
    const text = document.createTextNode(responseDescription);

    tag.appendChild(text);
    element.appendChild(tag);

    if (failed) {
        tag.className = 'required';
        console.warn("Problem occurred:", responseDescription);
    } else {
        tag.className = 'success';
        console.log('Yeah! Data sent and response loaded.', responseDescription)
    }
}
