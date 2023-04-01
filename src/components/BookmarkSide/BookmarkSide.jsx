import React from 'react';

import './BookmarkSide.css'
import BookMark from '../Bookmark/Bookmark';
const BookmarkSide = ({ bookmarkSide, blogs }) => {
    
    let readTotal = 0;
    for (const item of bookmarkSide) {
        readTotal = readTotal + item.duration;
    } 
    return (
        <div>
            <div className='time-section'>
                <h3>Spent time on read :{ readTotal} min</h3>
            </div>
            <BookMark blogs={blogs}></BookMark>
        </div>
    );
};

export default BookmarkSide;