import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'
const options = {
  // method: 'GET',
  url: 'BASE_URL',  
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
   
    maxResults: '50'  
  },
  headers: {
    'X-RapidAPI-Key': 
    process.env.React_App_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
// /baseUrl
export const fetch = async (url) => {  
  const {data} =  await axios.get(`${BASE_URL}/${url}`, options);
  return  data;



    
 }
