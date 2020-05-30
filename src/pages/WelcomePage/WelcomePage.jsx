import React from 'react';
import QuotesPage from '../QuotesPage/QuotesPage';

function WelcomePage(props) {
    let quotes = props.user ?
        <div>
            <QuotesPage />
        </div>
        :
        <div id ='container'>
            <h2 id="title">Welcome to Good Vibes</h2>
            <p id="text">"The wisdom of the wise, and the experience of ages, may be preserved by quotation".</p>

<p id="author">Isaac D'Israeli</p>
            <p>Sign up or Log in to see famous quotes that will encourage and motivate you!</p>
        </div>

    return (
        <div>
            {quotes}
        </div>
    )
}

export default WelcomePage;