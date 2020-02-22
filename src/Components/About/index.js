import React from 'react';
import {AboutSection, AboutInfo, AboutTitle, Span, AboutDir, AboutDes, Anchor} from './style.js'

const About = () => {
  return (
        <AboutSection>
            <div class="container">
                <AboutInfo>
                    <AboutTitle><Span>This is</Span> Me</AboutTitle>
                    <AboutDir>Creative Director</AboutDir>
                    <AboutDes>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </AboutDes>
                    <AboutDes>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </AboutDes>
                </AboutInfo>
            </div>
        </AboutSection>
  );
}

export default About;