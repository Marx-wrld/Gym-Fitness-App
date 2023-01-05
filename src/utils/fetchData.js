export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};


export const fetchData = async (url, options) => { //urls and addtional options parameters
    const response = await fetch(url, options); //fetching the data
    const data = await response.json(); //extracting the data

    return data;
};
