import React from 'react'

export default class UserClass extends React.Component {

  constructor(props){   // constructor is called when the nstance of a class is created.
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name:"Dummy",
        id:"Default",
        avatar_url:'Dummy '
      }
    }

    // console.log("when component is mounted, constructor is called first");
    // console.log( this.props.name + 'Constructor');
  }

  async componentDidMount(){

    const data = await fetch('https://api.github.com/users/amitjamshetty')
    const jsonData = await data.json()

    this.setState({
      userInfo: jsonData
    })

    console.log(jsonData);
    console.log( this.props.name + 'ComponentDidMount!');
  }

  componentDidUpdate(){
    // console.log('componentDidUpdate!');
  }

  componentWillUnmount(){
    // console.log('componentWillUnmount!');
  }

  render() {

    // console.log("Then body is rendered!");
    console.log( this.props.name + 'Render');

    // const {name, location} = this.props;
    const {count, count2, name, id, avatar_url} = this.state.userInfo

    return (
      <div className='user-card'>
        {/* <h2>Name: {this.props.name}</h2> */}
        <h1>Count: {count}</h1>
        <button onClick={() => {
          this.setState({count: this.state.count + 1})
        }}>Increase Count</button>
        <h1>Count: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Id: {id}</h3>
        <img src={avatar_url} />
        {/* <h3>Location: {location}</h3> */}
        <h3>Contact: +91 7349437782</h3>
      </div>
    )
  }
}


/*****
 * Constructed Called(DUMMY)
 * Body Rendered(DUMMY)
 * componentDidMount
 * - <API CALL>
 * - this.setState -> it will render the body again
 * componentDidUpdate
 * coponentWillUnmount
 * 
 * 
 * 
 * ***** */