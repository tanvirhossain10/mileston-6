const getFetchew = () => {
    const input = document.getElementById('input').value;
    /*  fetch('www.thecocktaildb.com/api/json/v1/1/search.php?f=a') */
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
        .then(res => res.json())
        .then(data => getFetch(data.drinks))
    document.getElementById('input').value = '';


}
// getFetchew();
const getFetch = data => {
    const result = document.getElementById('results');
    result.textContent = '';
    // console.log(data)
    data.forEach(d => {
        console.log(d);
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src="${d.strDrinkThumb}            " class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${d.strDrink}                </h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        `
        result.appendChild(div)
    })
}