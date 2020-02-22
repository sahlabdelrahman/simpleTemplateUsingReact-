import React from 'react';
import {HomeSection, HomeInfo, HomeTitle, HomeJob, HomeDes, Span, HomeBtn} from  './style.js'
const Home = () => {
  return (
    <HomeSection>
            <div className="container">
                <HomeInfo>
                    <HomeTitle>Abd El-rahman</HomeTitle>
                    <HomeJob>Creative Director</HomeJob>
                    <HomeDes>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web. Let us work together. Thank you. 
                    </HomeDes>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInfo>
            </div>
    </HomeSection>
          
  );
}

export default Home;