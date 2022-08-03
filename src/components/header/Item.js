import React from 'react'

function Item(props) {
    return (
        <h1 key={props.content}>
            <a
                style={{ color: '#0ccac4', margin: '10px' }}
                className='link'
                href='//'
                onClick={props.onItemClick}>
                {props.content}
            </a>
        </h1>
    )
}

export default Item