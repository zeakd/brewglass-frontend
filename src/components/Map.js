import React from 'react'
import ReactResizeDetector from 'react-resize-detector';
import './Map.css';
function createMarkerOnMap(lat, lng, map, cb) {

  /*global naver*/
  const latLng = new naver.maps.LatLng(lat, lng)
  const marker = new naver.maps.Marker({
    position: latLng,
    map: map
  });
  const infoWindow = new naver.maps.InfoWindow({
    content: '<div style="width:150px;text-align:center;padding:10px;"><b>Test</b>.</div>'
  });

  naver.maps.Event.addListener(marker, 'click', function (e) {
    map.panTo(latLng);

    if (infoWindow.getMap()) {
      infoWindow.close();
    } else {
      infoWindow.open(map, marker);
    }

    if (cb) {
      cb();
    }
  });

  return marker;
}

/**
 * Map Component
 * Using Naver Maps Api
 */
class Map extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render () {
    return (
      <div className='Map'>
        <div id='naver-map'>

        </div>
        <ReactResizeDetector handleWidth handleHeight onResize={this.resizeHandler.bind(this)} />
      </div>
    )
  }

  componentDidMount() {
    /*global naver*/
    const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10
    };

    const map = this.map = new naver.maps.Map('naver-map', mapOptions);

    let bounds = map.getBounds(),
        southWest = bounds.getSW(),
        northEast = bounds.getNE(),
        lngSpan = northEast.lng() - southWest.lng(),
        latSpan = northEast.lat() - southWest.lat();

    // random markers
    let markers = [];
    for (var i = 0; i < 100; i++) {
      markers.push(createMarkerOnMap(
        southWest.lat() + latSpan * Math.random(),
        southWest.lng() + lngSpan * Math.random(),
        this.map,
        this.props.onMarkerClick        
      ));
    }
  }

  resizeHandler(width, height) {
    // using naver map api setSize.
    this.map.setSize({
      width, height
    })
  }
}

export default Map;
