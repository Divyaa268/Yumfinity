import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1> Welcome to About Us page</h1>
            <User name={"Divya from Functional Component"}/>

            <UserClass name={"Divya from Class Component"} location={"Lucknow Class"} />
        </div>
    )
}

export default About;