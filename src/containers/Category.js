import React from 'react';
import Data from '../data/data';
import {CategoryView} from '../components/CategoryView';
import {Button} from '../common/Button';

export default class Category extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            fetched: false,
        }

        this.requestData = this.requestData.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }


    requestData(categoryName){
        Data
            .category(categoryName)
            .then(data => {
                this.setState({
                    fetched: true,
                    data: data.results,
                    nextPage: data.next
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

    loadMore(){
        if(this.state.nextPage != null){
            Data
                .nextPage(this.state.nextPage)
                .then(data => {
                    this.setState({
                        data: this.state.data.concat(data.results),
                        nextPage: data.next
                    })
                })
        }
    }

    render(){
        return(
            <div>
                <CategoryView 
                    {...this.state} 
                    category={this.props.match.params.name} />
                {this.state.nextPage ? <Button onClick={this.loadMore} /> : ''}
            </div>
        )
    }
}