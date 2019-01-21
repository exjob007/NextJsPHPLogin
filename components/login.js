import react from 'react'
import axios from 'axios'
import Router from 'next/router'


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
        }
    }

    Login(){
        axios
        .post("http://localhost/SERVER/syslogin.php" , {
            username: this.state.username,
            password: this.state.password
        })
        .then((resp) => {
            if(resp.data == "true")
            {
                sessionStorage.setItem('UserData', 'pass')
                Router.push("/home")
            }
            else{
                console.log("fail")
                alert("try agalin.")
            }
        })



    }

    UserHanddle(e){
        this.setState({
            username: e.target.value
        })

    }
    PassHanddle(e){
        this.setState({
            password: e.target.value
        })
    }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td>username</td>
                        <td>
                            <input type="text" placeholder="username" onChange={this.UserHanddle.bind(this)}></input>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>password</td>
                        <td>
                            <input type="password" placeholder="password" onChange={this.PassHanddle.bind(this)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button onClick={this.Login.bind(this)}>Login</button></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Login