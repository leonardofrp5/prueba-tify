import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import actions from '../../redux/Song/actions';
import Loader from '../../components/Loading';
import './styles.scss';

class Song extends Component {

  componentDidMount() {
    const value = queryString.parse(this.props.location.search);
    this.props.getSongs(value.id);
  }

  renderList = item => (
    <div className="content-song" key={item.id} onClick={this.onHandleClick} >
      <span className="text-song">{item.name}</span>
    </div>
  );

  render(){
    const { data, dataLoading } = this.props;
    return dataLoading || dataLoading ? (
      <Loader />
      ) : (
        <div className="content-information-song">{data.map(this.renderList)}</div>
      );
  }
}

Song.propTypes = {
  getSongs: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.any),
};

const mapStateToProps = store => ({
  data: store.song.data
});

const mapDispatchToProps = dispatch => ({
  getSongs: id => dispatch(actions.getSongs(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Song));
