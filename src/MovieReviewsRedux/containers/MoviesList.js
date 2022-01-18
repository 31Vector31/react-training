import {connect} from 'react-redux'
import MoviesList from '../components/MoviesList/MoviesList'
import {getMovies} from "../actions";

const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(getMovies())
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(MoviesList)
