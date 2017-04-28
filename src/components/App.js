import React, { Component } from 'react';
import classnames from 'classnames';
// import logo from './logo.svg';
import './App.css';
import './layout.css';
import Map from './Map';
import Sidebar from './Sidebar';

class App extends Component {
  state = {
    sidebar: false,
  }
  constructor(props) {
    super(props);
  }

  render() {
    const layoutSidebarClassName = classnames(
      'layout-sidebar',
      {
        'is-open': this.state.sidebar
      }
    );
    const layoutMapClassName = classnames(
      'layout-map',
      {
        'is-sidebar-opened': this.state.sidebar
      }
    )
    return (
      <div className="App">
        <div className={layoutSidebarClassName}>
          <Sidebar onClose={this.sidebarCloseHandler.bind(this)}>
          </Sidebar>
        </div>
        <div className={layoutMapClassName} ref={(map) => {this.mapContainer = map}}>
          <Map onMarkerClick={this.markerClickHandler.bind(this)} size={this.state.mapSize}>

          </Map>
        </div>
      </div>
    );
  }

  markerClickHandler(e) {
    this.setState({
      sidebar: true
    })
  }

  sidebarCloseHandler(e) {
    this.setState({
      sidebar: false
    })
  }
}

export default App;
