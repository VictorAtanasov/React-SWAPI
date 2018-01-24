import React from 'react';
import Data from '../data/data';

export default class Category extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            fetched: false,
        }

        this.requestData = this.requestData.bind(this);
    }


    requestData(categoryName){
        Data
            .category(categoryName)
            .then(data => {
                this.setState({
                    fetched: true,
                    data: data.results,
                })
            })
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.match.params.name !== this.props.match.params.name){
            this.setState({
                fetched: false
            })
            this.requestData(nextProps.match.params.name);
        }
        
    }

    componentDidMount(){
        this.requestData(this.props.match.params.name);
    }

    render(){
        return(
            <div>
                <p>
                    {this.props.match.params.name}
                </p>
                <p>
                    {this.state.fetched ? 'yes' : 'no'}
                </p>
            </div>
        )
    }
}