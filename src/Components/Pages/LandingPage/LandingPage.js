import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import useGetData from "../../../Hooks/useGetData";

const LandingPage = () => {
    const [data, setData] = useState(0)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        async function fetchData(){
            return await useGetData('/initialCards')
        }
        setData(fetchData())
        console.log(data)
    },[])
    return(
        <div>
            <Link to="/game">Start</Link>
        </div>
    )
}

export default LandingPage