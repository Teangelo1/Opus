import React, { useContext } from "react";
import Input from "../components/Input";
// import API from "../utils/API";
import UserContext from "../utils/UserContext"; 

function UserDetials() {
const userData = useContext(UserContext.context); 
const userName = userData.name
    
    return (
        <div>
        <p>{userName}</p>
            <form>
                <Input
                    id="firstName"
                    label="First Name"
                    // onChange={handleInputChange}
                    name="firstName"
                    type="text"
                />
                <Input
                    id="lastName"
                    label="Last Name"
                    // onChange={handleInputChange}
                    name="lastName"
                    type="text"
                />
                <Input
                    id="Genre"
                    label="What are your genre prefrences?"
                    // onChange={handleInputChange}
                    name="Genre"
                    type="text"
                />
                <Input
                    id="Goal"
                    label="How many books do you want to read this year?"
                    //onChange={handleInputChange}
                    name="Goal"
                    type="text"
                />
                <Input
                    id="Favorites"
                    label="What are your all time Favorite Books?"
                    //onChange={handleInputChange}
                    name="Favorites"
                    type="text"
                />
                <button
                  type="submit"
                  className="btn btn-dark btn-md"
                  //onClick={handleFormSubmit}
                 >
                  Take me to my shelves! 
                </button>
            </form>

        </div>
    )
}

export default UserDetials;