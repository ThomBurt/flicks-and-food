import React, { useState, useEffect } from 'react';
import {
    HistoryWrapper,
    HistoryContainerForm,
    HistoryList
} from './History.elements'

import './history.css';

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
                        <h4 className='title'><u>Here it is! Your night is all sorted!</u></h4>
                        <div> 
                            <div className='selection-div'>
                                <div>
                                Your movie choice:
                                </div>
                                <div>
                                    <h4>
                                        {localStorage.getItem(`movieInfo`)}
                                    </h4>
                                </div>
                            </div>

                            <div className='selection-div'>
                                <div>
                                    Your dinner for this evening is:
                                </div>
                                <h4>
                                    {localStorage.getItem(`restaurantInfo`)}
                                </h4>
                            </div>

                            <div className='selection-div'>
                                <div> 
                                    Check out your drink:
                                </div>
                                <div>
                                     <h4>
                                         {localStorage.getItem(`drinkInfo`)}
                                     </h4>
                                     <div>
                                         <img src={img} alt="drink" />
                                     </div> 
                                </div>
                            </div>

                     
                        </div>
                    </HistoryList>
                </HistoryContainerForm>
            </HistoryWrapper>
        </div>
    )
};