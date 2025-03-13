import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            totalResults: 0,
            articles: []
        }
    }

    async getAPIData() {
        var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&sortBy=publishedAt&apiKey=9a57fe8c40e64e4da0eddcbe81c2d6f3`)
        response = await response.json()
        this.setState({
            totalResults: response.totalResults,
            articles: response.articles
        })
    }

    componentDidMount() {
        this.getAPIData()
    }

    componentDidUpdate(oldProps) {
        if (this.props !== oldProps) {
            this.getAPIData()
        }
    }
    render() {
        return (
            <>
                <div className="container-fluid my-3">
                    <h4 className='bg-secondary text-light p-2 text-center'>{this.props.q} News Items</h4>
                    <div className="row">
                        {
                            this.state.articles.map((item, index) => {
                                return <NewsItem
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    source={item.source.name}
                                    url={item.url}
                                    pic={item.urlToImage}
                                    date={(new Date(item.publishedAt)).toLocaleDateString()}
                                />
                            })
                        }
                    </div>

                </div>
            </>
        );
    }
}
