import axios from 'axios';

class ArticleService {
  apiUrl = 'http://hn.algolia.com/api/v1/';

  fetchArticle(id) {
    return axios.get(`${this.apiUrl}items/${id}`)
      
      .then(response => {
        return response.data;
      })
      
      .catch(err => console.log(err));
  }

  fetchHomePage() {
    return axios.get(`${this.apiUrl}search?tags=front_page`)
    
      .then(response => {
        return response.data['hits'];
      })
      
      .catch(err => console.log(err));
  }

  fetchRecentArticles() {
    return axios.get(`${this.apiUrl}search_by_date?tags=story`)
    
      .then(response => {
        return response.data['hits'];
      })
      
      .catch(err => Promise.reject(err.message));
  }
}

export default new ArticleService();