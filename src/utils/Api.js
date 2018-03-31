import axios from 'axios';

const API_URL = "";
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
    return this.request.get('https://api.rss2json.com/v1/api.json', { params });
  }

  sendEmail({ message, email, subject = "Send from chat" }) {
    return this.request.post('https://formspree.io/poputeacristi@gmail.com', {
      message,
      _replyto: email,
      email,
      _subject: subject,
    });
  }
}

export default new Api({ url: API_URL });

