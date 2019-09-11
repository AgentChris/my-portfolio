import axios from 'axios';
import { send } from 'emailjs-com';

const API_URL = "";
const USER_ID = "user_0dqeMwI0Ek3faqX2uwCty";
const SERVICE_ID = "gmail-portofolio";
const TEMPLATE_ID = "portofolio_template";
const PROFILE_RSS_FEED_ENDPOINT = "https://medium.com/feed/@poputeacristi";

class Api {
  constructor({ url, headers } = { url: '', headers: {} }) {
    this.request = axios.create({
      baseURL: url,
      headers,
      responseType: 'json',
    });
  }

  getProfileInfo() {
    const params = { rss_url: PROFILE_RSS_FEED_ENDPOINT };
    return this.request.get('https://api.rss2json.com/v1/api.json', { params });
  }

  sendEmail(body) {
    return send(SERVICE_ID, TEMPLATE_ID, body, USER_ID);
  }
}

export default new Api({ url: API_URL });

