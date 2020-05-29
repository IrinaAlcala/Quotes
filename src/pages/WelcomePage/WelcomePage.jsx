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
            <h4>"The wisdom of the wise, and the experience of ages, may be preserved by quotation".

Isaac D'Israeli</h4>
            <p>Sign up or Log in to see famous quotes that will encourage and motivate you!</p>
        </div>

    return (
        <div>
            {quotes}
        </div>
    )
}

export default WelcomePage;