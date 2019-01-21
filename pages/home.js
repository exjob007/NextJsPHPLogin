import react from 'react'
import axios from 'axios'
import Router from 'next/router'


class Home extends React.Component {
    componentDidMount(){
        if(sessionStorage.getItem("UserData") == "pass"){
            console.log("success")

        }
        else{
            Router.push('/')
        }
    }

    Logout(){
        sessionStorage.clear()
        Router.push('/')
        



    }
    render(){
        


        return(
            <div>
                <h1>
                    Login Successfully
                    <br />
                    <button onClick={this.Logout.bind(this)}>Logout</button>
                
                </h1>
            </div>
        )
    }
}

export default Home