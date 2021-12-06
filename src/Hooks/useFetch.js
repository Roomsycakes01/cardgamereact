const fetchApi = async (url, options = {}) => {
    let response = await fetch( 'http://localhost:8080'+ url, options);
    let data =  await response.json()
    return data
};

export default fetchApi
