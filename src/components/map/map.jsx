import React, {createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._map = null;
    this._mapContainer = createRef();
  }

  componentDidMount() {
    const {coordinates} = this.props;

    const city = [52.38333, 4.9];
    const zoom = 12;

    this._initMap(city, zoom, coordinates);
  }

  componentWillUnmount() {
    this._map = null;
  }

  render() {
    return <div id="map" style={{height: `100%`}} ref={this._mapContainer}></div>;
  }

  _initMap(city, zoom, coordinates) {
    this._createMap(city, zoom);
    this._setView(city, zoom);
    this._setLayer();
    this._renderIcons(coordinates);
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

  _renderIcons(coordinates) {
    coordinates.map((coordinate) => (
      leaflet
        .marker(coordinate, {icon: this._getDefaultIcon()})
        .addTo(this._map)
    ));
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
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  current: PropTypes.arrayOf(PropTypes.number),
};

export default Map;
