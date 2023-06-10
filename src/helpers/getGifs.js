import axios from 'axios';



export const getGifs = async (category) =>{
  
    const resp = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=F8SkZExXtnY7Gotpvv6VsoRFVkjLaCTj&q=${category}&limit=10`);
    const resp2 = resp.data;
     const resp3 = resp2.data
   
    const gifs = resp3.map(img => ({
       id: img?.id,
       title: img?.title,
       url: img?.images?.downsized_medium?.url
 
 
    }));

    return gifs; 
   }
 