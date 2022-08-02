import React from 'react'

function PostHeader(props) {
    return (
        <div className='header'>
            <img
                className='dib'
                src={props.src}
                width='100px'
                height='50px'
            />
            <span className='tc cover-full'>{props.name} </span>
        </div>
    )
}

export default PostHeader