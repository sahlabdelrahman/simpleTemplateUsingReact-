import React, {Component} from 'react';
import {PortfolioSection, PortfolioTitle, Span, PortfolioList, PortfolioItem, ImageDetails, Image, Overlay, OverlaySpan} from './style.js'
import axios from 'axios'
class Portfolio extends Component {
  state = {
    Images : []
  }
  componentDidMount (){
    axios.get('js/data.json').then(res => this.setState({
      Images : res.data.portfolio
    }))
  }
  render (){
    const {Images} = this.state;
    const getImages = Images.map((source) => {
      return(
        <ImageDetails key={source.id}>
          <Image src={source.image} alt=""/>
          <Overlay>
            <OverlaySpan>
              Show Image
            </OverlaySpan>
          </Overlay>
          </ImageDetails>
      )
    })
    return (
      <PortfolioSection>
              <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
              <PortfolioList>
                  <PortfolioItem active>All</PortfolioItem>
                  <PortfolioItem >HTML</PortfolioItem>
                  <PortfolioItem >Photoshop</PortfolioItem>
                  <PortfolioItem >Wordpress</PortfolioItem>
                  <PortfolioItem >Mobile</PortfolioItem>
              </PortfolioList>
              
              <div class="box">
                {getImages}  
              </div>
              
       </PortfolioSection>
    );
  }
  
}

export default Portfolio;