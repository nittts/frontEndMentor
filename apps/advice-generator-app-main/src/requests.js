class quoteAPI {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetchQuote() {
    const request = await fetch(this.baseURL, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
    });
    return request.json();
  }
}

export default quoteAPI;
