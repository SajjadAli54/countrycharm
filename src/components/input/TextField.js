import React from 'react'

function TextField(props) {
    return (
        <div>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type={props.type}
                placeholder={props.placeholder}
            ></input>
        </div>
    )
}

export default TextField