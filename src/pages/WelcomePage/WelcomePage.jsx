import React from 'react';
import QuotesPage from '../QuotesPage/QuotesPage';

function WelcomePage(props) {
    let quotes = props.user ?
        <div>
            <QuotesPage />
        </div>
        :
        <div>
            <h2>Welcome to Motivational Quotes</h2>
            <p>Sign up or Log in to improve your day!</p>
        </div>

    return (
        <div>
            {quotes}
        </div>
    )
}

export default WelcomePage;