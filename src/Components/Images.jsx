import React from 'react';

export default function Image({src, className, alt, onClick}) {
    return (
         <img src={process.env.PUBLIC_URL+ "/" + src} className={className} alt={alt} onClick={onClick} />
    )
}