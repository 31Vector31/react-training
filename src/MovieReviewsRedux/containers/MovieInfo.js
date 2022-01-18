import {connect} from 'react-redux'
import MovieInfo from '../components/MovieInfo/MovieInfo'
import {getMovieInfo} from "../actions";

const mapStateToProps = state => ({
    movie: state.movieInfo
})

const mapDispatchToProps = dispatch => ({
    getMovieInfo: (id) => dispatch(getMovieInfo(id))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(MovieInfo)
