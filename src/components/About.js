import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// Functional
// const About = () => {
//     return(
//         <div>
//             <h1> Welcome to About Us page</h1>
//             <User name={"Divya from Functional Component"}/>

//             <UserClass name={"Divya from Class Component"} location={"Lucknow Class"} />
//         </div>
//     )
// }

// export default About;


class About extends React.Component
{
    constructor(props)
    {
        super(props)

        console.log("Parent Constructor");
    }

    render() 
    {
        console.log("Render()")
            return(
                <div>
                    <h1> Welcome to About Us page</h1>
                    <User name={"Divya from Functional Component"}/>
        
                    <UserClass name={"Divya from Class Component"} location={"Lucknow Class"} />
                </div>
            )
        }

}
 
export default About;
