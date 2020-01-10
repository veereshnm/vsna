import React from 'react';

import Logo from '../../components/logo/logo.component';
import Vachana from '../../components/vachana/vachana.component';
import Upcomingevent from '../../components/upcomingevent/upcomingevent.component';

const HeroSection = () => {
    return <section class="hero">
    <div class="hero-body">
        <div className="container">
        <div class="columns">
            <div className="column is-4">
                <Logo></Logo>
            </div>
           <div className="column is-4">
                <Vachana></Vachana>
           </div>
           <div className="column is-4">
                <Upcomingevent></Upcomingevent>
           </div>
        </div>
        </div>
    </div>
</section>
}
export default HeroSection;