export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const youTubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY_YOUTUBE,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const FetchData = async (url, options) => {
  const appcall = await fetch(url, options)
  const data = await appcall.json();
  return data;
}