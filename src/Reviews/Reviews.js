import React from 'react';
import Form from './Form';
import Statistics from './Statistics';

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        };
    }

    saveReview = (review) => {
        if (review === 0) return;
        let reviews = this.state.reviews.concat(review);
        this.setState({reviews: reviews});
    }

    render() {
        return (
            <div>
                <Form saveReview={this.saveReview}/>
                <Statistics reviews={this.state.reviews}/>
            </div>
        );
    }
}

export default Reviews;