export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};


export const fetchData = async (urls, options) => { //urls and addtional options parameters
    const response = await fetch(urls, options); //fetching the data
    const data = await response.json(); //extracting the data

    return data;
};
