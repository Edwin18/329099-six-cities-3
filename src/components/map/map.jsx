import React, {createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._map = createRef();
  }

  componentDidMount() {
    const {coordinates} = this.props;

    const city = [52.38333, 4.9];
    const zoom = 12;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const map = leaflet.map(this._map.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    coordinates.map((coordinate) => (
      leaflet
        .marker(coordinate, {icon})
        .addTo(map)
    ));
  }

  render() {
    return <div id="map" style={{height: `100%`}} ref={this._map}></div>;
  }
}

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  current: PropTypes.arrayOf(PropTypes.number),
};

export default Map;
