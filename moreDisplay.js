// this is the root url for the REST API
const baseUrl = "https://hacker-news.firebaseio.com/v0";
// This url makes sure the result is retruned in JSON
const newStoriesUrl = `${baseUrl}/topstories.json`;
const itemUrl = `${basUrl}/item/`;


const options = {
      method: "GET",
      headers: {
            Accept:"application/json",
      },
};

fetch(newStoriesUrl, options)
      .then((reponse) => Response.json())
      .then((idResult) => {
            // Iterate through the first 75; top news
            for (let index = 0; index <75; index++) {
                  // create an id from the current iterated value
                  const id = idResult[index];
                  // passsing the id to fectch API
                  fetch(itemUrl + id + ".json", options)
                  .then((response) => response.json())
                  .then((newsResult) => {
                        // creating a place holder variable 
                        
                  })
            }
      })
