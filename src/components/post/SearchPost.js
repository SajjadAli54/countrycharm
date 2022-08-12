import React from 'react'
import './searchpost.css'

function SearchPost(props) {
    function searchClick() {
        let obj = {
            'category': document.getElementById('category').value,
            'country': document.getElementById('country').value,
            'city': document.getElementById('city').value
        }

        props.onSearchClick(obj);
    }

    return (props.trigger) ? (

        <div className='content'>

            <form>
                <br></br>
                <label className='lb_category' for='category'>Category </label>
                <select id='category' name="category" >
                    <option value="All">All</option>
                    <option value="Place">Place</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Food">Food</option>
                </select>

                <br></br>
                <br></br>
                <br></br>

                <label className='lb_country' for='country'>Country</label>
                <select id='country' name="country" >
                    <option value="Places">Country</option>
                    <option value="hotels">Country1</option>
                    <option value="foods">Country2</option>

                </select>

                <label for='city' className='lb_city'>City</label>
                <select id='city' name="city" >
                    <option value="Place">Places</option>
                    <option value="Hotel">Hotels</option>
                    <option value="Food">Food</option>

                </select>

                <br></br>
                <input type={'button'} value="Search" onClick={searchClick}></input>
            </form>
        </div>
    ) : ""
}

export default SearchPost
