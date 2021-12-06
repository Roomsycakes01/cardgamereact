// because it is abstracted here we have control when it occurs - once when component first mounted then whenever
// we choose from that point onwards, thus no infinite recalling.
import fetchApi from './useFetch';

/**
 *  This hook is used to async and await the fetchApi component
 * @param url
 * @returns {Promise<*>}
 */
const useGetData = async (url) => {
    return await fetchApi(url);
};

export default useGetData;