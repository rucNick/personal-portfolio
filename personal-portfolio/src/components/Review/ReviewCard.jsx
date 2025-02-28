// src/components/Review/ReviewCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const ratings = new Array(5).fill({
  icon: 'star',
  style: { fontVariationSettings: '"FILL" 1' }
});

const ReviewCard = ({ content, imgSrc, name, company }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3">
        {ratings.map((rating, index) => (
          <span
            key={index}
            className="material-symbols-rounded text-yellow-300 text-[18px]"
            style={rating.style}
          >
            {rating.icon}
          </span>
        ))}
      </div>
      <p className="text-zinc-400 mb-8">{content}</p>
      <div className="flex items-center gap-2 mt-auto">
        <figure className="rounded-lg overflow-hidden">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="object-cover rounded-lg"
          />
        </figure>
        <div>
          <p className="text-green-400 font-semibold">{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired
};

export default ReviewCard;
