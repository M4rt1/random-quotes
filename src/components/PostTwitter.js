import React from 'react';

const PostTwitter =(props)=>{
    return(
        <>
        <a href={`https://twitter.com/intent/tweet?text=${props.tweet}&hashtag=randomquote`} id='tweet-quote' target='_blank'>Post on Twitter</a>
        </>
    )
};

export default PostTwitter;