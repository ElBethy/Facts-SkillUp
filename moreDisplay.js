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
                        let placeholder = undefined;
                        // Creating the title h1
                        placeholder = document.createElement("h1");
                        // adding the API result for title
                        placeholder.innerText =newsResult.title;
                        // Appending the title to h1
                        document.body.appendChild(placeholder);

                        placeholder = document.createElement("h2");
                        // adding the API result for author
                        placeholder.innerText =newsResult.title;
                        // Appending the author to h2
                        document.body.appendChild(placeholder);

                        placeholder = document.createElement("h3");
                        // adding the API result for type
                        placeholder.innerText =newsResult.by;
                        // Appending the type to h3
                        document.body.appendChild(placeholder);

                        placeholder = document.createElement("a");
                        // adding the API result for a tag innerHTML
                        placeholder.innerText =newsResult.url;
                        // Addingthe API result url to a tag href
                        placeholder.href = newsResult.url;
                        // Appendinf the url to a tag
                        document.body.appendChild(placeholder);
                  })
                  .catch ((err) => console.error(err));
            }
      })
      .catch((err) => console.error(err));
