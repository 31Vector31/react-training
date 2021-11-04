import React from 'react';
import styles from "./Form.module.css";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
    }

    saveReview = () => {
        this.setState({value: 1});
        this.props.saveReview(this.state.value);
    }

    changeValue = (value) => {
        this.setState({value});
    }

    render() {
        const stars = [5, 4, 3, 2, 1].map((n, index) =>
            <React.Fragment key={index}>
                <input
                    checked={n === this.state.value}
                    onClick={() => this.changeValue(n)}
                    type="radio"
                    id={"star-" + n}
                    name="rating"
                    value={n}/>
                <label htmlFor={"star-" + n}/>
            </React.Fragment>
        );
        return (
            <div className={styles.container}>
                Оставьте отзыв:
                <div className={styles.rating}>
                    {stars}
                </div>
                <button onClick={this.saveReview}>Сохранить</button>
            </div>
        );
    }
}

export default Form;