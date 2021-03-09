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
        },
    )
        .then((response) => response.json())
        .then((data) => {
            console.warn("Problem occurred:", data.responseDescription);

            const element = document.getElementById('captchaErrorContainer');

            if (data.failed) {
                const tag = document.createElement("p");
                const text = document.createTextNode(data.responseDescription);

                tag.appendChild(text);
                tag.className = 'required';
                element.appendChild(tag);
            } else {
                element.innerHTML = '';
                console.log('Yeah! Data sent and response loaded.')
            }
        })
        .catch((e) => console.error(e));
}
