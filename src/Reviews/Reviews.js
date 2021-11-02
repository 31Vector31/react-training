import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 5,
            reviews: []
        };
    }

    changeValue = (event) => {
        this.setState({value: Number(event.target.value)});
    }

    saveReview = () => {
        let reviews = this.state.reviews;
        reviews.push(this.state.value);
        this.setState({reviews: reviews, value: 5});
    }

    render() {
        const reviews = this.state.reviews;
        return (
            <div>
                <label>Оставьте отзыв:</label>
                <select value={this.state.value} onChange={this.changeValue}>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select><br/>
                <button onClick={this.saveReview}>Сохранить</button>
                <br/>
                <div>Общее кол-во отзывов: {reviews.length}, процент
                    хороших: {(reviews.length > 0 && reviews.filter(el => el > 3).length / (reviews.length / 100))}%
                </div>
                <div>Кол-во хороших отзывов: {reviews.filter(el => el > 3).length}</div>
                <div>Кол-во нейтральных отзывов: {reviews.filter(el => el == 3).length}</div>
                <div>Кол-во плохих отзывов: {reviews.filter(el => el < 3).length}</div>
            </div>
        );
    }
}

export default Reviews;