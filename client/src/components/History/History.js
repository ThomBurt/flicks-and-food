import React from 'react';
import { Link } from 'react-router-dom';
import {
    HistoryWrapper,
    HistoryContainerForm,
    HistoryList
} from './History.elements'

export const History = ({ history }) => {

    return (
        <div>
            <HistoryWrapper>
                <HistoryContainerForm>
                    <HistoryList>
                        <Link to={`/history/${history._id}`}>
                        <p>{history.historyText}</p>
                        </Link>
                    </HistoryList>
                </HistoryContainerForm>
            </HistoryWrapper>
        </div>
    )
};