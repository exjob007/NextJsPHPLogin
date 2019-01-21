import react from 'react'
import axios from 'axios'
import Login from '../components/login'
import Router from 'next/router'



class Index extends React.Component {
    constructor(props){
        super(props)
        this.state = {  
            login: false
        }
    }

    request(){
        axios.get("http://localhost/SERVER/index.php")
        .then((res) => console.log(res.data))
    }
    getData(){
        axios.get("http://localhost/SERVER/getdata.php", {
            params:{
                username:'Admin'
            }
        })
        .then( (resp) => console.log(resp.data))
        

    }
    postdata(){
        axios({
            method: 'post',
            url: 'http://localhost/SERVER/postdata.php',
            data: {
                username:'jingjo'
            },  
           // config: { headers: {'Content-Type': 'multipart/form-data' }}

          })
          //.catch((error) => console.log(error))
            .then(function (resp){
            var result = resp.data
            console.log("result" + result)

        })
        


    
    }
 
    render(){
        return(
            <div>
                <button onClick={this.request.bind(this)} >REQUEST</button>
                <button onClick={this.getData.bind(this)} > GET DATA </button>
                <button onClick={this.postdata.bind(this)} >POST AND RESPONSE</button>

                <Login />

            </div>
        )
    }
}

export default Index