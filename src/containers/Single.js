import React from 'react';
import Data from '../data/data';
import {SingleView} from '../components/SingleView';
import {FontawesomeSpinner} from '../common/FontawesomeSpinner';


export default class Single extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            fetched: false,
            fetchedSchema: false
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

    // requestSchema(categoryName){
    //     Data
    //         .singleViewSchema(categoryName)
    //         .then(data => {
    //             this.setState({
    //                 fetchedSchema: true,
    //                 schemaData: data.required,
    //             })
    //         })
    // }

    componentDidMount(){
        this.requestData(this.props.match.params.category, this.props.match.params.id);
        //this.requestSchema(this.props.match.params.category);
    }

    render(){
        if(this.state.fetched === false && this.state.fetchedSchema === false){
            return(
                <div>
                    <FontawesomeSpinner />
                </div>
            )
        } else {
            return(
                <div>
                    <SingleView 
                        {...this.state}
                    />
                </div>
            )
        }
    }
}