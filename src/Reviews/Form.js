import React from 'react';
import styles from "./Form.module.css";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            reset: false
        };
    }

    changeValue = (event) => {
        this.setState({value: Number(event.target.value), reset: false});
    }

    saveReview = () => {
        this.setState({reset: true, value: 0});
        return this.props.saveReview(this.state.value);
    }

    render() {
        return (
            <div onChange={this.changeValue} className={styles.rating}>
                <input type="radio" id="star-5" name="rating" value="5"/>
                <label for="star-5"/>
                <input type="radio" id="star-4" name="rating" value="4"/>
                <label for="star-4"/>
                <input type="radio" id="star-3" name="rating" value="3"/>
                <label for="star-3"/>
                <input type="radio" id="star-2" name="rating" value="2"/>
                <label for="star-2"/>
                <input type="radio" id="star-1" name="rating" value="1"/>
                <label for="star-1"/>
                <input checked={this.state.reset} type="radio" id="star-0" name="rating" value="0"/>
                <button onClick={this.saveReview}>Сохранить</button>
            </div>
        );
    }
}

export default Form;