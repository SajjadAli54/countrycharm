import React from 'react'
import PostCard from './PostCard'

function PostsList() {
    let description ="Some quick example text to build on the card title and make up thebulk of the card's content."
    return (
        <div>
            <PostCard cardname="Title will be here" cardDescrip={description} url_img="https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg"/>
        </div>
    )
}

export default PostsList