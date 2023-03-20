/**
 * A Maping view with playback
 * @VueMapMeTrackMe
 * @module VueMapMeTrackMe/script.js
 * @author joe@kt3i.com
 * @version 0.0.1
 * @license MIT
 * 
 */

import Utils from "./utils";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import 'leaflet-plugin-trackplayback';

export default {
  name: "VueMapMeTrackMe",

  props: {
    //  Location of API
    apiUrl: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      map: null,
      trackplayback: null,
      data: [],
    };
  },

  /**
   * Make some maps
   *
   */
  mounted() {
    this.map = L.map("mapContainer").setView([38.8464198,-77.2001754], 13.25);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    //use a mix of renderers
    var customPane = this.map.createPane("customPane");
    var canvasRenderer = L.canvas({ pane: "customPane" });
    customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
    L.marker([38.8017528,-77.1268706]).addTo(this.map);
  },

  /**
   * Unmake some maps
   *
   */
  onBeforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },

  /**
   * Clean up when this component is removed
   *
   */
  destroyed() {
    clearTimeout(this.timeout);
  },
};