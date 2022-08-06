import React from 'react'

function Button(props) {
    return (
        <button
            type='button'
            className='pa3 ba b--green bg-lightest-blue grow bw shadow-5'>
            {props.text}
        </button>
    )
}

export default Button