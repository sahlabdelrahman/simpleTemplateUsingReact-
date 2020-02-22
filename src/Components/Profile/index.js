import React, {Component} from 'react';
import {ProfileSection, ProfilePart, ProfileList, ProfileItem, Span, Skills, SkillsDes, Bar, BatTitle, BarPerc, BarParent, BarSpan, ProfileTitle, TitleSpan, SOne} from './style.js';
import axios from 'axios';

class Profile extends Component {
  state = {
    bar : []
  }
  componentDidMount (){
    axios.get('js/data.json').then(res => this.setState({
      bar : res.data.bar
    }))
  }
  render (){
    const {bar} = this.state
    const BarDetails = bar.map((BarD) => {
      return (
        <Bar key={BarD.id}>
          <BatTitle>{BarD.title}</BatTitle>
          <BarPerc>{BarD.perc}</BarPerc>
          <BarParent>
            <BarSpan item={BarD.id}></BarSpan>
          </BarParent>
        </Bar>
      )
    })
    return (
      <ProfileSection>
              <div class="container">
                  <ProfilePart>
                      <ProfileTitle><TitleSpan>My </TitleSpan>Profile</ProfileTitle>
                      <ProfileList>
                          <ProfileItem>
                              <Span>Name</Span>
                              Sahl Abdelrahman
                          </ProfileItem>
                          <ProfileItem>
                              <Span>Birthday</Span>
                              2/2/1999
                          </ProfileItem>
                          <ProfileItem>
                              <Span>Address</Span>
                              El Shorouk City
                          </ProfileItem>
                          <ProfileItem>
                              <Span>Phone</Span>
                              4444 5555 6666
                          </ProfileItem>
                          <ProfileItem>
                              <Span>Email</Span>
                              sahlabdelrahman07@gmail.com
                          </ProfileItem>
                          <ProfileItem>
                              <Span>Website</Span>
                              <Span web>www.google.com</Span>
                          </ProfileItem>
                      </ProfileList>
                  </ProfilePart>
                  
                  <Skills>
                      <ProfileTitle>Some <TitleSpan>skills</TitleSpan></ProfileTitle>
                      <SkillsDes>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                      </SkillsDes>
                      {BarDetails}
                  </Skills>
                  
              </div>
      </ProfileSection>
          
    );
  }
}

export default Profile;