import React,{Component} from 'react';
import {random} from 'lodash';
import './styles/App.css';
import 'typeface-roboto';
import QuoteMachine from './components/QuoteMachine';
import PostTwitter from './components/PostTwitter';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      quotes:[],
      selectedQuoteIndex:null,
    }
    this.componentDidMount=this.componentDidMount.bind(this);
    this.selectQuoteIndex=this.selectQuoteIndex.bind(this);
    this.assignNewQuoteIndex=this.assignNewQuoteIndex.bind(this);
  };

  // set quotes and random index quote after page load
  componentDidMount(){
    // fetch quotes from url
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    // get the data from json
      .then(data=>data.json())
      // set state quotes to data from json and set random index from method with callback function
      .then(data=>this.setState({quotes:data},this.assignNewQuoteIndex))
  };

  // return value of rand index from quotes
  get selectedQuote(){
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
      return 'OOOPS WHERE IS MY LIST';
    }
      return this.state.quotes[this.state.selectedQuoteIndex];
    };

  //set random quote index
  selectQuoteIndex(){
    if(!this.state.quotes.length){
      return;
    }
    return random(0,this.state.quotes.length-1);
  };

  // assign new random index
  assignNewQuoteIndex(){
    this.setState({
      selectedQuoteIndex:this.selectQuoteIndex(),
    });
  };

  render(){
    return (
      <div className="App" id='quote-box'>
        <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} />
        <br></br>
        <PostTwitter tweet={this.selectedQuote.quote} author={this.selectedQuote.author}/>
      </div>
    );
  }
}

export default App;
