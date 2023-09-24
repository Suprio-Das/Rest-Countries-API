const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countriesContainer');
    const countriesDiv = document.getElementById('countriesDiv');

    for(const country of countries){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
        <div class="card h-100">
          <img src="${country.flags.png}" class="card-img-top img-fluid" alt="..." style="height: 200px">
          <div class="card-body">
            <p class="card-text">Name: ${country.name.common}</p>
            <p class="card-text">Capital: ${country.capital}</p>
            <p class="card-text">Population: ${country.population}</p>
          </div>
        </div>
      </div>
        `
        countriesContainer.appendChild(div);
    }
}