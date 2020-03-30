import * as React from 'react';
import * as leaflet from 'leaflet';
import {DELETE_MARKER} from '../../const';
import {Offer, Location} from '../../types';

type Props = {
  city: Location;
  coordinates: Array<Array<number>>;
  current?: Array<number>;
  hoveredOffer?: Offer | any;
};

class Map extends React.PureComponent<Props, {}> {
  _map: null | leaflet.Map;
  _markers: Array<number>;
  _hoveredMarker: null | number;
  _mapContainer: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);

    this._map = null;
    this._markers = [];
    this._hoveredMarker = null;
    this._mapContainer = React.createRef();
  }

  componentDidMount() {
    const {city, coordinates, current = null} = this.props;

    this._initMap([city.latitude, city.longitude], city.zoom, coordinates, current);
  }

  componentWillUnmount() {
    this._map = null;
  }

  componentDidUpdate() {
    const {city, coordinates, current, hoveredOffer} = this.props;

    this._removeMarkers();
    this._setView([city.latitude, city.longitude], city.zoom);
    this._renderMarkers(coordinates, current);

    if (hoveredOffer === DELETE_MARKER || hoveredOffer === null) {
      return;
    }

    this._renderHoveredMarker();
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
        this._removeMarker(marker);
      });
    }
    this._markers = [];
  }

  _removeMarker(marker) {
    this._map.removeLayer(marker);
  }

  _renderMarkers(coordinates, current) {
    coordinates.forEach((coordinate) => {
      this._renderMarker(coordinate);
    });

    if (current) {
      this._renderMarker(current, this._getActiveIcon());
    }
  }

  _renderMarker(coordinate, icon = this._getDefaultIcon()) {
    this._markers.push(leaflet
        .marker(coordinate, {icon})
        .addTo(this._map));
  }

  _renderHoveredMarker() {
    const {hoveredOffer} = this.props;
    this._renderMarker([hoveredOffer.location.latitude, hoveredOffer.location.longitude], this._getActiveIcon());
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

export default Map;
