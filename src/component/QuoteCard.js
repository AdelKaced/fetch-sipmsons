import React from 'react';
import './QuoteCard.css';

class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
  
    
    return (
      <figure className="QuoteCard">
        <img src={this.props.info.image} alt={this.props.character} />
        <figcaption>
          <blockquote>{this.props.info.quote}</blockquote>
          <p>
            <cite>{this.props.info.character}</cite>
            <span>&#9733;</span>
          </p>
          
        </figcaption>
      </figure>
    );
  }
}

export default QuoteCard;
