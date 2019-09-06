import React from 'react';

function Reviews() {
  return (
    <section className="reviews-wrap">
      <div className="container">
        <div className="section-header">
          <div className="section-header__name">Testimonials</div>
          <div className="section-header__title">
            By the same illusion which lifts the horizon.
          </div>
        </div>
        <div className="reviews">
          <div className="review">
            <div className="review__author-photo review--primary">
              <img src="/images/author-photo1.png" alt="" />
            </div>
            <div className="review__description">
“By the same illusion which lifts the horizon of the sea to the level
            of the spectator on a hillside.”
            </div>
            <div className="divider divider--primary" />
            <div className="review__author">John Wayne</div>
            <div className="review__details text--primary">CEO</div>
          </div>
          <div className="review">
            <div className="review__author-photo review--warning">
              <img src="/images/author-photo2.png" alt="" />
            </div>
            <div className="review__description">
“By the same illusion which lifts the horizon of the sea to the level
            of the spectator on a hillside.”
            </div>
            <div className="divider divider--warning" />
            <div className="review__author">John Wayne</div>
            <div className="review__details text--warning">CEO</div>
          </div>
          <div className="review">
            <div className="review__author-photo review--danger">
              <img src="/images/author-photo3.png" alt="" />
            </div>
            <div className="review__description">
“By the same illusion which lifts the horizon of the sea to the level
            of the spectator on a hillside.”
            </div>
            <div className="divider divider--danger" />
            <div className="review__author">John Wayne</div>
            <div className="review__details text--danger">CEO</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
