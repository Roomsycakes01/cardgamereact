import {useEffect, useState} from "react";
import useGetData from "../../Hooks/useGetData";

const PlayerArea = () => {
    const [data, setData] = useState([])
    const [cardArray, setCardArray] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setData(await useGetData('/initialCards'))
    },[])
    useEffect(()=>{
        let tempArray = []
        data.forEach((card)=>{
            for(let i = 0; i < card.number; i++){
                tempArray.push(card)
            }
        })
        setCardArray(tempArray)
    },[data])
    useEffect(()=>{
        console.log(cardArray)
    },[cardArray])
    return(
        <div>
            Player Area
        </div>
    )
}

export default PlayerArea