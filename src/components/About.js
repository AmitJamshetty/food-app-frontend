import User from "./User"
import UserClass from "./UserClass"
import React from "react"
import UserContext from "../utils/UserContext"

// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is the About page.</h2>
//             <User name="Amit"/>
//             <UserClass name="Amit (class)" location="Blr (class)" />
//         </div>
//     )
// }

class About extends React.Component{

    constructor(props){
        super(props)
        // console.log('Parent Constructor');       // Parent Constructor   - only one parent and one child
                                                 // Parent Render
                                                 // Child Constructor
                                                 // Child Render
                                                 // Child ComponentDidMount
                                                 // Parent ComponentDidMount

                                                 // Parent Constructor   - only one parent two child
                                                 // Parent Render
                                                 // First Constructor
                                                 // First Render
                                                 // Second Constructor
                                                 // Second Render
                                            //   DOM is updated for both first and second in SINGLE BATCH.
                                                 // First componentDidMount
                                                 // Second componentDidMount
                                                 // Parent componentDidMount
                                                
    }

    componentDidMount(){    // it is called when the component is mounted
        // console.log('Parent ComponentDidMount!');
      }

    render(){
        // console.log('Parent Render');
        return(
            <div>
                <h1>About</h1>
                <div>
                    Logged In User
                    <UserContext.Consumer>
                        {({loggedInUser}) => (
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>                          
                        )}
                    </UserContext.Consumer>
                </div>
                 <h2>This is the About page.</h2>
                 <User name="Amit"/>
                 <UserClass name="First (class)" location="Blr (class)"/>
                 {/* <UserClass name="Second (class)" location="Blr (class)"/> */}
            </div>
        )
    }
}

export default About