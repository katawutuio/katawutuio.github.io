const list = document.querySelector('.web-resource-list');


const addWebResource = (webResource) => {
    let html = `
        <div class="resouce">
            <p><strong>Title:</strong> ${webResource.title}</p>
        </div>
    `;

    list.innerHTML += html;
};


db.collection('web_resource').get()
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            addWebResource(doc.data());
        });
    })
    .catch((err) => {
        console.log(err);
    })