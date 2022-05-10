import React, { useState, useEffect } from 'react';
import {
    HistoryWrapper,
    HistoryContainerForm,
    HistoryList
} from './History.elements'

export const History = () => {

    const [img, setImg] = useState();

    const fetchImage = async() => {
        const res = await fetch (localStorage.getItem(`drinkInfoImg`))
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    }

    useEffect(() => {
        fetchImage();
      }, []);

    // const image = localStorage.getItem(`drinkInfoImg`);
    console.log(img);

    return (
        <div>
            <HistoryWrapper>
                <HistoryContainerForm>
                    <HistoryList>
                        <h4>Your Experience</h4>
                        <div> 
                            <div>{localStorage.getItem(`movieInfo`)}</div>
                            <div>{localStorage.getItem(`restaurantInfo`)}</div>
                            <div>{localStorage.getItem(`drinkInfo`)}</div>
                            <div><img src={img} alt="drink" /></div>              
                        </div>
                    </HistoryList>
                </HistoryContainerForm>
            </HistoryWrapper>
        </div>
    )
};