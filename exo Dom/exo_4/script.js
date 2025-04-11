
function filterCountries() {

    const filterText = document.getElementById('filterInput').value.toLowerCase();

    const countries = document.querySelectorAll('#countryList li');

    countries.forEach(function(country) {

      const countryName = country.textContent.toLowerCase();
      if (countryName.includes(filterText)) {
        country.style.display = '';  
      } else {
        country.style.display = 'none';
      }
    });
  }
  document.getElementById('filterInput').addEventListener('input', filterCountries);
  