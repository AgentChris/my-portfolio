import axios from 'axios';

const API_URL = "https://api.rss2json.com/v1/api.json";
const PROFILE_RSS_FEED_ENDPOINT = "https://medium.com/feed/@poputeacristi";

export class Api {
  constructor({ url, headers } = { url: '', headers: {} }) {
    this.request = axios.create({
      baseURL: url,
      headers,
      responseType: 'json',
    });
  }

  getProfileInfo() {
    const params = { rss_url: PROFILE_RSS_FEED_ENDPOINT };
    return this.request.get('', { params });
  }
}

export default new Api({ url: API_URL });
