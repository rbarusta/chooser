require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import axios from 'axios'

import { Button, Row, Col, Spinner} from './common'
import Paper from './Paper'

const urlAvatars = 'https://api.adorable.io/avatars/285/'
function getGif(p){
  return `https://api.giphy.com/v1/gifs/search?q=${p}+funny+badass&api_key=dc6zaTOxFJmzC`
}



class AppComponent extends React.Component {
  constructor(props) {
        super(props);
        this.state = { 
          searching : false,
          hasData: false,
          members:['Rich', 'Alex', 'Helton', 'Jona'],
          member:'',
          quote: '',
          gif: '',
          avatar: ''
         };
        this.search = this.search.bind(this)
    }
  search(){
    let index_random = Math.floor((Math.random() * 20) + 1);
    this.setState(
      {
        searching:true,
        hasData: false,
      }
    )
    if(this.state.members.length===0){
      let last_gif = getGif("badass")
      axios.get(last_gif)
        .then((res)=>{
          this.setState({
             members:['Rich', 'Alex', 'Helton', 'Jona'],
              member: "Hermes",
              avatar: urlAvatars+"Hermes",
              quote: "I am the boss",
              gif: res.data.data[index_random].images.downsized_large.url,
              hasData: true,
              searching: false
            })
        })
      
            return;
    }
    let rand = this.state.members[Math.floor(Math.random() * this.state.members.length)];
    let avatar = urlAvatars+rand
    let newArr = []
    let tquote
    let tgif
    this.state.members.map(m=>{
      if(m!==rand){
        newArr.push(m)
      }
    })

    axios.get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', {
      headers: {
          'X-Mashape-Key': 'waptdqlFJDmsh4EnZLbKrYsLZqCMp1xoNgljsnY42adtb1wZ1G'
      }
    })
    .then((res)=>{
      
      tquote = res.data.quote
      axios.get(getGif(res.data.quote))
        .then((res)=>{
            tgif = res.data.data[index_random].images.downsized_large.url
            this.setState({
              members:newArr,
              member: rand,
              avatar: avatar,
              quote: tquote,
              gif: tgif,
              hasData: true,
              searching: false
            })
        })
        .catch((err)=>{
          console.log(err)
        })
    })
    .catch((err)=>{
      console.log(err)
    })


    
    
      
  }
  renderButton(){
    if(this.state.searching){
        return <Spinner/>
    }
    return <Button Click={this.search} color="red">Start!</Button>
  }
  renderPaper(){
    if(this.state.hasData){
      return <Paper member={this.state.member} avatar={this.state.avatar} quote={this.state.quote} gif={this.state.gif} />
    }
  }
  render() {
    return (
      <section className="main">
        <div>
          <h1 className="cursive">Chooser</h1>
          <Row aligment="center" screen="xs">
            <Col space="4" screen="xs">
              {this.renderButton()}
            </Col>
          </Row>
        </div>
        
        <Row aligment="center" screen="xs">
          <Col space="12" screen="xs">
            {this.renderPaper()}
          </Col>
        </Row>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
