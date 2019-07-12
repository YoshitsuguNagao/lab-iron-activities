import React, { Component } from 'react';
import './ActivityCard.css';

class ActivityCard extends Component {
  state = {
    inCart: false,
    inBookmark: false,
  }

  handleAddCart = () => {
    const { inCart } = this.state;
    const { sendCartIndex, index } = this.props;
    sendCartIndex(index, inCart);
    this.setState({
      inCart: !inCart,
    })
  }

  handleAddBookmark = () => {
    const { inBookmark } = this.state;
    const { sendBookmarkIndex, index } = this.props;
    sendBookmarkIndex(index, inBookmark);
    this.setState({
      inBookmark: !inBookmark,
    })
  }

  render() {
    const { title, description, cover_image_url, retail_price } = this.props.activity;
    const { inCart, inBookmark } = this.state;
    // console.log(this.props)
    return (
      <div className="activity-card">
        <img src={cover_image_url} alt=""/>
        <div className="activity-title">
          <h3>{title}</h3>
        </div>
        <div className="activity-description">
          <p>{description}</p>
        </div>
        <h2>{retail_price.formatted_value}</h2>

        {inCart ? <button className="in-cart-on" onClick={this.handleAddCart}>IN CART</button> : <button className="in-cart-off" onClick={this.handleAddCart}>ADD TO CART</button>}
        {inBookmark ? <button className="in-bookmark-on" onClick={this.handleAddBookmark}>YES</button> : <button className="in-bookmark-off" onClick={this.handleAddBookmark}>NO</button>}
      </div>
    )
  }
}

export default ActivityCard
