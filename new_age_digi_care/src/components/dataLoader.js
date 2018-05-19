import React, { Component } from 'react';

export default class DataLoader extends Component{
    state={
        //Variable to hold the state properties of component
        result: null,
    }

    componentDidMount() {
        //change the url
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({result: res}))
            .catch(err => console.log('There is error in req', err))
    }

    render(){
        const result = this.state.result;
        //change eachPost.title to eachPost.<row_head>
        return(
            <div>
                {result && result.map(eachPost =>
                    <div key={eachPost.userId}>
                        The id is : {eachPost.userId}
                        <div> {eachPost.title} </div>

                    </div>
                )}
            </div>
        )
    }
}