export const fetchData = async (urls, options) => { //urls and addtional options parameters
    const response = await fetch(urls, options); //fetching the data
    const data = await response.json(); //extracting the data

    return data;
}