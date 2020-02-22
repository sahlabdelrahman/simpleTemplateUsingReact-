import React, {Component} from 'react';
import {SocialSection, Social, Icon, SocialDes, SpanOne, SpanTwo} from './style.js';
import axios from 'axios';
class SocialMedia extends Component {
  state = {
    social : []
  }
  componentDidMount (){
    axios.get('js/data.json').then((res) => this.setState({
      social : res.data.social
    }))
  }

  render (){
    const {social} = this.state
    const SocialList = social.map((SocialItem) => {
      return(
        <Social item={SocialItem.id} key={SocialItem.id}>
                <Icon className={SocialItem.icon}></Icon>
                <SocialDes>
                    <SpanOne >{SocialItem.title}</SpanOne>
                    <SpanTwo >{SocialItem.body}</SpanTwo>
                </SocialDes>
            </Social>
      )
    })
    return(
       <SocialSection>
            {SocialList}
        </SocialSection>
    );
  }
}

export default SocialMedia;