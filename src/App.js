import React from 'react'
import './App.css';
import QuoteCard from './component/QuoteCard'
import axios from 'axios'

const quotes = 
  {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: 'Homer Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
  }

class App extends React.Component {

  state = {
    data : quotes
  }


   getQuotes = () => {
    axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response=> response.data )
    .then(data => this.setState({ data : data[0]} )
        )
    }
   


  render () {
  return (
    <div className="App">
    <QuoteCard  info={this.state.data} />  
    <button type="button" onClick={this.getQuotes}> Clique ici </button>
    

    </div>
  );
}
}
export default App;
