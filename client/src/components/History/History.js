import React from 'react';
import {
    HistoryWrapper,
    HistoryContainerForm,
    HistoryList
} from './History.elements'

export const History = () => {


    return (
        <div>
            <HistoryWrapper>
                <HistoryContainerForm>
                    <HistoryList>
                        <h4>Experience</h4>
                        <p> 
                            <div>{localStorage.getItem(`movieInfo`)}</div>
                            <div>{localStorage.getItem(`restaurantInfo`)}</div>
                            <div>{localStorage.getItem(`drinkInfo`)}</div>
                        </p>
                    </HistoryList>
                </HistoryContainerForm>
            </HistoryWrapper>
        </div>
    )
};