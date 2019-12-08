import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import actions from '../../redux/Album/actions';
import Loader from '../../components/Loading';
import '../Album/styles.scss';

class Album extends Component {

  componentDidMount() {
    const value = queryString.parse(this.props.location.search);
    this.props.getAlbums(value.id);
  }

  onHandleClick = (e) => {
    this.props.history.push({ pathname: '/song', search: new URLSearchParams({id: e.target.id}).toString()})
  };

  renderList = item => (
    <div className="content-information-album" key={item.id} onClick={this.onHandleClick} >
      <img className="circle-album" src={item.image} alt={item.name} id={item.id} />
      <span className="text-artis-album">{item.name}</span>
    </div>
  );

  render(){
    const { data, dataLoading } = this.props;
    return dataLoading || dataLoading ? (
      <Loader />
      ) : (
        <div className="content-circle-album">{data.map(this.renderList)}</div>
      );
  }
}

Album.propTypes = {
  getAlbums: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.any),
};

const mapStateToProps = store => ({
  data: store.album.data
});

const mapDispatchToProps = dispatch => ({
  getAlbums: id => dispatch(actions.getAlbums(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Album));
