import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// import {FaLocationDot} from 'react-icons/fa';
// import {MdStars} from 'react-icons/md';

export const ItemShimmerUI = () => {
  return (
    <div className="res-card">
      <Skeleton width={330} height={200} className="skeleton-logo" />
      <div className="name-location-container">
        <Skeleton width={100} height={20} className="skeleton-name" />
        <div className="skeleton-pin">
          <Skeleton width={10} height={10} />
        </div>
      </div>
      <div className="rating-container">
        <Skeleton
          width={30}
          height={20}
          className="skeleton-rating"
        />
        <div className="skeleton-pin">
          <Skeleton width={10} height={10} />
        </div>
      </div>
      <div className="cuisines-container">
        <Skeleton
          width={120}
          height={20}
          className="skeleton-cuisines"
        />
      </div>
    </div>
  );
};
