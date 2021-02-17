import React from 'react';


function Form() {

    return (
        <div className="form-container">
            <form>
              <label>Name
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter a name"
                />
              </label>
              <label>Email
                <input
                  type="email"
                  name="email"
                  placeholder="Enter an email"
                />
              </label>
              <label>Password
                  <input 
                    type="text"
                    name="password"
                    placeholder="Enter a password"
                  />
              </label>
              <label>
                 Terms of service
                 <input
                    type="checkbox"     
                 /> 
              </label>

              <div className="button">
                  <button>Submit</button>
              </div>
            </form>
        </div>
    )
}

export default Form;