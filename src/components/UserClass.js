import React from "react";
// Class Component 
class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);

    console.log(props);

    // state variable
    this.state = {
        count: 0,
    }
    }

    render() {
        // destructuring -
        // const { name, location } = this.props;

        // destructuring state variable -
        // const { count } = this.state;
        return(
            <div className="user-card">
            {/* <h2>Name: {name}</h2>  */}
            <h1> Count: {this.state.count}</h1>
            <h2>Name: {this.props.name}</h2>
            <h3>Location: {this.props.location}</h3>
            <h4>Contact: divyaad248@gmail.com</h4>

        </div>
        )
    }
}

export default UserClass;