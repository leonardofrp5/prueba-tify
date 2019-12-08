import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../../redux/home/actions';
import Loader from '../../components/Loading';

import '../home/styles.scss';

class Home extends Component {

  componentDidMount() {
    this.props.getArtists();
  }

  onHandleClick = (e) => {
    this.props.history.push({ pathname: '/album', search: new URLSearchParams({id: e.target.id}).toString()})
  };

  renderList = item => (
      <div className="content-information" key={item.id} onClick={this.onHandleClick} >
        <img className="circle" src={item.image} alt={item.name} id={item.id} />
        <span className="text-artis">{item.name}</span>
      </div>
    );

  render(){
    const { data, dataLoading } = this.props;
    return dataLoading || dataLoading ? (
      <Loader />
      ) : (
        <div className="content-circle">{data.map(this.renderList)}</div>
      );
  }
}

Home.propTypes = {
  getArtists: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.any),
};

const mapStateToProps = store => ({
  data: store.home.data
});

const mapDispatchToProps = dispatch => ({
  getArtists: () => dispatch(actions.getArtists())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
