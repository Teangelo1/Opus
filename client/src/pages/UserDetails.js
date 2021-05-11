import React from "react";
import Input from "../components/Input";
// import API from "../utils/API";

function UserDetials() {

    return (
        <div>
            <form>
                <Input
                    id="firstName"
                    label="First Name"
                    // onChange={handleInputChange}
                    name="firstName"
                />
                <Input
                    id="lastName"
                    label="Last Name"
                    // onChange={handleInputChange}
                    name="lastName"
                />
                <Input
                    id="Genre"
                    label="What are your genre prefrences?"
                    // onChange={handleInputChange}
                    name="Genre"
                />
                <Input
                    id="Goal"
                    label="How many books do you want to read this year?"
                    //onChange={handleInputChange}
                    name="Goal"
                />
                <Input
                    id="Favorites"
                    label="What are your all time Favorite Books?"
                    //onChange={handleInputChange}
                    name="Favorites"
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