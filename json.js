const getApi = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
};
getApi();

const displayPhotos = (data) => {
    // console.log(data);
    const cardBody = document.getElementById('json-pic');
    let running = 0;
    const stop = 20;
    data.forEach(data => {
        if (running >= stop) {
            return
        }
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('card', 'mt-5')
        // console.log(data)
        div.innerHTML = `<div  onclick="showData(${(data.id)})">
        <img src="${data.url}" class="card-img-top" alt="..." height="150px" width="200px">
        <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">${data.id}ome quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    `
        cardBody.appendChild(div);
        running++
    });
    // console.log(JSON.parse(data));

};
const showData = (data) => {
    // console.log(jsondata)
    // const datas = JSON.stringify(data)
    // console.log(datas)
    fetch(`https://jsonplaceholder.typicode.com/photos/${data}`)
        .then(res => res.json())
        .then(id => disPlayDetails(id))
};
const disPlayDetails = detail => {
    const details = document.getElementById('details');
    details.innerHTML = `
      <div class="card" style="width: 18rem;">
              <img src="${detail.url}" class="card-img-top" alt="...">
              <img src="${detail.thumbnailUrl}" class="card-img-top mt-2" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${detail.title}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                      card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>
          `
}