import React, { Component } from 'react';
import Slider from 'react-slick';

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      arrows: false,
    };
    return (

      <div className="slider-wrap">
        <div className="slider">
          <Slider ref={c => (this.slider = c)} {...settings}>

            <div className="slider__item" key={1}>
              <img className="slider-img" src="./images/photo.png" alt="slide" />
              <div className="slider-info">
                <div className="slider-info__title">INtro</div>
                <div className="slider-info__text">
                  By the same illusion which lifts the horizon.
                </div>
              </div>
            </div>
            <div className="slider__item" key={2}>
              <img className="slider-img" src="./images/photo.png" alt="slide" />
              <div className="slider-info">
                <div className="slider-info__title">INtro2</div>
                <div className="slider-info__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </Slider>

          <button className="control control-prev" onClick={this.previous} />
          <button className="control control-next" onClick={this.next} />

        </div>
      </div>

    );
  }
}
