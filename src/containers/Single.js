import React from 'react';
import Data from '../data/data';
import {SingleView} from '../components/SingleView';
import {FontawesomeSpinner} from '../common/FontawesomeSpinner';


export default class Single extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            fetched: false
        }

        this.requestData = this.requestData.bind(this);
    }


    requestData(categoryName, id){
        Data
            .singleView(categoryName, id)
            .then(data => {
                this.setState({
                    fetched: true,
                    data: data,
                })
            })
    }

    componentWillReceiveProps(nextProps){
        if((nextProps.match.params.category !== this.props.match.params.category) || (nextProps.match.params.id !== this.props.match.params.id)){
            this.setState({
                fetched: false
            })
            this.requestData(nextProps.match.params.category, nextProps.match.params.id);
        }
    }

    componentDidMount(){
        this.requestData(this.props.match.params.category, this.props.match.params.id);
    }

    render(){
        if(this.state.fetched === false){
            return(
                <div className='center'>
                    <div className="category-stars-box"></div>
                    <FontawesomeSpinner />
                </div>
            )
        } else {
            return(
                <div>
                    <div className="category-stars-box"></div>
                    <SingleView 
                        {...this.state}
                    />
                </div>
            )
        }
    }
}