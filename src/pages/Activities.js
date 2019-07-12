import React, { Component } from 'react';
import ActivityCard from '../components/ActivityCard';
import './Activity.css';
import 'bootstrap/dist/css/bootstrap.css';


class Activities extends Component {
  state = {
    activities: this.props.activities,
    total: this.props.total,
    numberOfCart: this.props.numberOfCart,
    isVisibleCart: true,
    numberOfBookmark: this.props.numberOfBookmark,
    isVisibleBooking: true,
  }

  handleCart = (index, inCart) => {
    const { numberOfCart } = this.state;
    let newNumberOfCart;
    console.log(index, inCart)
    if (inCart) {
      newNumberOfCart = numberOfCart - 1;
    } else {
      newNumberOfCart = numberOfCart + 1;
    }
    this.setState({
      numberOfCart: newNumberOfCart,
    })
  }

  handleBookmark = (index, inBookmark) => {
    const { numberOfBookmark } = this.state;
    let newNumberOfBookmark;
    console.log(index, inBookmark)
    if (inBookmark) {
      newNumberOfBookmark = numberOfBookmark - 1;
    } else {
      newNumberOfBookmark = numberOfBookmark + 1;
    }
    this.setState({
      numberOfBookmark: newNumberOfBookmark,
    })
  }

  render() {
    console.log(this.props)
    const { activities, total, numberOfCart, numberOfBookmark } = this.state;
    return (
      <div>
        <div >
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
        </div>
        <div className="brand-container">
          <div><h1>BRAND</h1></div>
          <div className="cart-container">
            <div><h3>{total}</h3></div>
            <div>
            <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i className="fas fa-shopping-bag"></i>
              <sup>{numberOfCart}</sup>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
              <i className="fas fa-shopping-bag"></i>
              <sup>{numberOfCart}</sup>
              <i className="fas fa-star"></i>
              <sup>{numberOfBookmark}</sup>
            </div>
          </div>
        </div>
        <div className="activity-card-container">
          {
            activities.map((activity,index) => {
              return <ActivityCard
                      key={index}
                      index={index}
                      activity={activity}
                      sendCartIndex={this.handleCart}
                      sendBookmarkIndex={this.handleBookmark}
                    />
            })
          }

        </div>
      </div>
    )
  }
}

export default Activities
