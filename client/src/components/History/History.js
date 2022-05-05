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
                        <p> 
                        Test #1<br></br>
                        Test #1<br></br>
                        Test #1<br></br>
                        Test #1<br></br>
                        Test #1<br></br>
                        Test #1<br></br> 
                        </p>
                    </HistoryList>
                </HistoryContainerForm>
            </HistoryWrapper>
        </div>
    )
};