import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      choicesArr: [{name: 'nothing', icon: 'fa fa-heart', src:""},
        {name: 'stranger', icon: 'fa fa-tv', src: "https://res.cloudinary.com/osidekweenyasss/image/upload/v1547254512/frenchienewthings.png"},
        {name: 'snowman', icon: 'fa fa-snowflake-o', src: "https://res.cloudinary.com/osidekweenyasss/image/upload/v1547254137/frenchienewsno.png"},
        {name: 'parents', icon: 'fa fa-bed', src: "https://res.cloudinary.com/osidekweenyasss/image/upload/v1547254129/frenchienewparents.png"},
        {name: 'hoodie', icon: 'fa fa-female', src: "https://res.cloudinary.com/osidekweenyasss/image/upload/v1547254137/frenchienewpink.png"},
        {name: 'tux', icon: 'fa fa-black-tie', src: "https://res.cloudinary.com/osidekweenyasss/image/upload/v1547254511/frenchienewtux.png"},
        {name: 'cold', icon: 'fa fa-thermometer-empty', src: "https://res.cloudinary.com/osidekweenyasss/image/upload/v1547254511/frenchienewsweater.png"},
        {name: 'stripes', icon: 'fa fa-bars', src: "https://res.cloudinary.com/osidekweenyasss/image/upload/v1547254133/frenchienewstripe.png"}],
      selectedOutfit: ""
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://res.cloudinary.com/osidekweenyasss/image/upload/v1547249255/frenchiefont.png" className="myFont"/>
          <div class="imgDiv">
          <img src="https://res.cloudinary.com/osidekweenyasss/image/upload/v1547245516/frenchiemain.png"  className="frenchie" alt="frenchie" />
            {this.state.selectedOutfit !== "" ? <img src={this.state.selectedOutfit} className="frenchie" alt="frenchieclothes" /> : null}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          </div>
        </header>
        <div className="row col-md-12">
          <div className="col-md-2"></div>
          {this.state.choicesArr.map((item, i) => {
            return (
              <div className="col-md-1">
                <div className="box" onClick={() => this.setState({selectedOutfit: item.src})}><i className={item.icon}/></div>
              </div>
            )
          })}
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default App;
