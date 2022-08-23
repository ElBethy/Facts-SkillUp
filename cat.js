
const iFact = document.createElement("h1");

// This is the root url for te Rest API
const baseUrl =  "https://catfact.ninja";
// This url gets a particular fact
const itemUrl = `${baseUrl}/fact`;


// This is a config object for the fecth function
const options = {
      method: "GET",
      headers: {
            Accept: "application/json"
      },
};

// This request gets random fact from the url

setInterval(() => {
      fetch(itemUrl, options)
      .then((response) => response.json())
      .then((response) => {
         iFact.innerHTML = response.fact
         document.body.appendChild(iFact)
      })
      .catch((err) => console.log(err));  
}, 5000);
