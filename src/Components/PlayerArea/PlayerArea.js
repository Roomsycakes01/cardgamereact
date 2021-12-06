import {useEffect, useState} from "react";
import useGetData from "../../Hooks/useGetData";
import Card from "../Atoms/Card";

const PlayerArea = () => {
    const [data, setData] = useState([])
    const [cardArray, setCardArray] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setData(await useGetData('/initialCards'))
    },[])

    useEffect(() => {
        let tempArray = []
        data.forEach((card)=>{
            for(let i = 0; i < card.number; i++){
                tempArray.push(card)
            }
        })
        setCardArray(tempArray)
    },[data])

    function showCard(cardArray) {
        let i = 0
        let output
            cardArray === [] ? output = '':
                output = cardArray.map((card)=>{
                    i++
                    return <Card key={i} name={card.name} image={card.imageUrl} />
                })
        return output
    }

    return(
        <div>
            {showCard(cardArray)}
        </div>
    )
}

export default PlayerArea