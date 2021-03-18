import React from 'react';
import '../styles/PostTwitter.css';

const PostTwitter =(props)=>{
    return(
        <>
        <a href={`https://twitter.com/intent/tweet?text="${props.tweet}"-${props.author}&hashtag=randomquote`} id='tweet-quote' target='_blank' rel='noreferrer' class="fab fa-twitter-square"></a>
        </>
    )
};

export default PostTwitter;