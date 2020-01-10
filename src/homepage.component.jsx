import React from 'react';
import 'bulma';

const HomePage = () => {
    return <div className="homepage">
        <section class="hero">
            <div class="hero-body">
                <div className="container">
                <div class="columns">
                   <div className="column is-4">
                        <h1 className="title">VSNA, Houston</h1>
                   </div>
                   <div className="column is-4">
                   ಮಡಕೆಯ ಮಾಡುವಡೆ ಮಣ್ಣೆ ಮೊದಲು,<br/>
                   ತೊಡಿಗೆಯ ಮಾಡುವಡೆ ಹೊನ್ನೆ ಮೊದಲು,<br/>
                   ಶಿವಪಥವನರಿವಡೆ ಗುರುಪಥವೆ ಮೊದಲು,<br/>
                   ಕೂಡಲಸಂಗಮದೇವರನರಿವಡೆ<br/>
                   ಶರಣರ ಸಂಗವೆ ಮೊದಲು...
                   </div>
                   <div className="column is-4 notification is-info">
                        <p className="title">Upcoming event</p>
                        <p className="subtitle"></p>
                   </div>
                </div>
                </div>
            </div>
        </section>
    </div>
}


export default HomePage;