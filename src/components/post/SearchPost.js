import React from 'react'
import './searchpost.css'
function SearchPost(props) {
  return (props.trigger)?(

    <div className='content'>
       
        <form>
            <br></br>
                <label className='lb_category'>Select the Category </label>
                <select name="category" >
                    <option value="places">Places</option>
                    <option value="hotels">Hotels</option>
                    <option value="foods">Food</option>
                    
                </select>
                
           <br></br>
           <br></br>
           <br></br>
            
            <label className='lb_city'>Select City</label>
            <select name="category" >
                <option value="places">Places</option>
                <option value="hotels">Hotels</option>
                <option value="foods">Food</option>
                
            </select>
            

            <label className='lb_country'>Select Country</label>
            <select name="category" >
                <option value="places">Country</option>
                <option value="hotels">Country1</option>
                <option value="foods">Country2</option>
                
            </select>
            <br></br>
            <input type={'submit'} value="Search"></input>
        </form>
    </div>
  ):""
}

export default SearchPost
