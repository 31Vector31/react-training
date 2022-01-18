import {connect} from 'react-redux'
import MovieCast from '../components/MovieCast/MovieCast'
import {getMovieCast} from "../actions";

const mapStateToProps = state => ({
    cast: state.movieCast
})

const mapDispatchToProps = dispatch => ({
    getMovieCast: (id) => dispatch(getMovieCast(id))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(MovieCast)
