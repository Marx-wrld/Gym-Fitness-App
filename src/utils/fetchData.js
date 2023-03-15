export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'fa215201c6msh00f0fb15220e24ap102a5ejsna2766eaea227',
  },
};

export const fetchData = async (urls, options) => { //urls and addtional options parameters
    const response = await fetch(urls, options); //fetching the data
    const data = await response.json(); //extracting the data

    return data;
};
