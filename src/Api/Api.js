
class Api {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
  
      this.card = {
        addNotes: (data) => this.post('/notes', data),
        getNotes: () => this.get('/notes'),
        deleteNotes: (idElement) => this.delete('/notes/' + idElement),
      }
    }
  
    async api(url, settings) {
      const response = await fetch(this.baseUrl + url, settings);
      if (!response.ok) {
        throw new Error(`Api Request Error: ${response.statusText}`);
      }
      if(response.status === 204) return
      const json = await response.json();

      return json;
    }
  
    async post(url, postData) {
      return this.api(url, {
        method: 'post',
        body: JSON.stringify(postData),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
        },
      });
    }

    async get(url) {
      return this.api(url, {
        method: 'get',
        headers: {
          Accept: 'application/json',
        },
      });
    }

    async delete(url) {
        return this.api(url, {
          method: 'delete',
          headers: {
            Accept: 'application/json',
          },
        });
      }
  }
  
  const api = new Api('https://racrud.herokuapp.com');
  
  export default api;