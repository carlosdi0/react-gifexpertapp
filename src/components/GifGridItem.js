import React from 'react';

const GifGridItem = ({ id, title, url }) => {

    return (
        <div key={id}
            className="grid-item animate__animated animate__fadeIn">
            <img src={url} alt={title} />
        </div>
    );
};

export default GifGridItem;
