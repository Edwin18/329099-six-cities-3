import React, {createRef} from 'react';
// import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._map = null;
    this._markers = [];
    this._mapContainer = createRef();
  }

  componentDidMount() {
    const {city, coordinates, current = null} = this.props;

    this._initMap([city.latitude, city.longitude], city.zoom, coordinates, current);
  }

  componentWillUnmount() {
    this._map = null;
  }

  componentDidUpdate() {
    const {city, coordinates} = this.props;

    this._removeMarkers();
    this._setView([city.latitude, city.longitude], city.zoom);
    this._renderMarkers(coordinates);
  }

  render() {
    return <div id="map" style={{height: `100%`}} ref={this._mapContainer}></div>;
  }

  _initMap(city, zoom, coordinates, current) {
    this._createMap(city, zoom);
    this._setView(city, zoom);
    this._setLayer();
    this._renderMarkers(coordinates, current);
  }

  _createMap(city, zoom) {
    this._map = leaflet.map(this._mapContainer.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
  }

  _setView(city, zoom) {
    this._map.setView(city, zoom);
  }

  _setLayer() {
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this._map);
  }

  _removeMarkers() {
    if (this._map !== null) {
      this._markers.forEach((marker) => {
        this._map.removeLayer(marker);
      });
    }
    this._markers = [];
  }

  _renderMarkers(coordinates, current) {
    coordinates.map((coordinate) => (
      this._markers.push(leaflet
        .marker(coordinate, {icon: this._getDefaultIcon()})
        .addTo(this._map))
    ));

    if (current) {
      this._markers.push(leaflet
        .marker(current, {icon: this._getActiveIcon()})
        .addTo(this._map));
    }
  }

  _getDefaultIcon() {
    return leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
  }

  _getActiveIcon() {
    return leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
  }
}

Map.propTypes = {
  city: PropTypes.exact({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }).isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  current: PropTypes.arrayOf(PropTypes.number),
  hoveredOffer: PropTypes.exact(),
};

// const mapStateToProps = (state) => ({
//   hoveredOffer: state.hoveredOffer,
// });

// export {Map};
// export default connect(mapStateToProps)(Map);

export default Map;
