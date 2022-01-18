import {connect} from 'react-redux'
import {getMovieReviews} from "../actions";
import MovieReviews from "../components/MovieReviews/MovieReviews";

const mapStateToProps = state => ({
    reviews: state.movieReviews
})

const mapDispatchToProps = dispatch => ({
    getMovieReviews: (id) => dispatch(getMovieReviews(id))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(MovieReviews)
