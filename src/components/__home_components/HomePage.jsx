import React from 'react';
import Faq from './FAQ/FAQ';
import HomeBanner from './HomeBanner/HomeBanner';

const HomePage = () => {
    return (
        <div>
            {/* banner section  */}
            <section>
                <HomeBanner/>
            </section>
            
            {/* faq section  */}
            <section>
                <Faq/>
            </section>
        </div>
    );
};

export default HomePage;