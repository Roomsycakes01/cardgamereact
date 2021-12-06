const fetchApi = async (url, options = {}) => {
    let response = await fetch( 'http://localhost:8080'+ url, options);
    return await response.json()
};

export default fetchApi
