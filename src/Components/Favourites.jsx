import React from 'react';
import Photos from './Photos';

const Favourites = ({ favouritePhotos = [], handleRemoveFavourite }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_logo">FotoFlix</div>
        <div className="navbar_links">
          <a href="/">Home</a>
        </div>
      </nav>
      <main>
        <section className='photos'>
          {favouritePhotos.length === 0 ? (
            <p>No favourite photos available</p>
          ) : (
            favouritePhotos.map((image, index) => (
              <Photos
                key={index}
                {...image}
                isFavourite={true}
                onFavouriteClick={() => handleRemoveFavourite(image)}
              >
                <span>Added to favourites</span>
              </Photos>
            ))
          )}
        </section>
      </main>
    </div>
  );
};

export default Favourites;
