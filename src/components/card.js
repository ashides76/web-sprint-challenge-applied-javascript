import axios from "axios"
// import {articles} from "../mocks/data";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  // article.forEach(val => console.log('article:', val))
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorPhoto = document.createElement('img');
  const authorName = document.createElement('span');

  card.classList.add('card');
  headline.classList.add('headline')
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorPhoto);
  author.appendChild(authorName);

  headline.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  // authorPhoto.setAttribute = ('src', article.authorPhoto)
  authorName.textContent = `By ${article.authorName}`

  card.addEventListener('click', () => {
    console.log(headline);
  })

  return card;
}
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5001/api/articles`)
    .then(res => {
      console.log('article:', res);
      
      const bootstrap = res.data.articles.bootstrap;
      bootstrap.forEach(val => {
        // console.log('fire bootstrap')
        document.querySelector(selector).appendChild(Card(val));
      })

      const javascript = res.data.articles.javascript;
      javascript.forEach(val => {
        document.querySelector(selector).appendChild(Card(val));
      })

      const jquery = res.data.articles.jquery
      jquery.forEach(val => {
        document.querySelector(selector).appendChild(Card(val));
      })

      const node = res.data.articles.node
      node.forEach(val => {
        document.querySelector(selector).appendChild(Card(val));
      })

      const technology = res.data.articles.technology
      technology.forEach(val => {
        document.querySelector(selector).appendChild(Card(val));
      })
    })
    .catch(err => console.log(err));     

}

export { Card, cardAppender }
