import axios from 'axios';

class ArticleService {
  fetchArticle() {
    return axios.get('https://hacker-news.firebaseio.com/v0/item/8863.json')
      
      .then(response => {
        return response.data;
      })
      
      .catch((err) => console.log(err));
  }
}

export default new ArticleService();