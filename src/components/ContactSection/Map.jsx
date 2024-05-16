import React, { useEffect, useRef } from 'react';
import H from '@here/maps-api-for-javascript';
import { RiArrowUpDoubleLine } from 'react-icons/ri';
import { RiArrowDownDoubleLine } from 'react-icons/ri';
import HoverCardUi from '../../ui/Tooltip';

const Map = (props) => {
  const mapRef = useRef(null);
  const map = useRef(null);
  const platform = useRef(null);
  const { apikey, userPosition, doctorPosition } = props;

  useEffect(() => {
    // Check if the map object has already been created
    if (!map.current) {
      // Create a platform object with the API key and useCIT option
      platform.current = new H.service.Platform({
        apikey,
      });
      // Obtain the default map types from the platform object:
      const defaultLayers = platform.current.createDefaultLayers({
        pois: true,
      });
      // Create a new map instance with the Tile layer, center and zoom level
      // Instantiate (and display) a map:
      const newMap = new H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          zoom: 14,
          center: userPosition,
        }
      );

      // Add panning and zooming behavior to the map
      const behavior = new H.mapevents.Behavior(
        new H.mapevents.MapEvents(newMap)
      );

      const ui = H.ui.UI.createDefault(newMap, defaultLayers);

      // Set the map object to the reference
      map.current = newMap;
    }

    // Check whether doctorPosition is truthy
    if (doctorPosition) {
      calculateRoute(
        platform.current,
        map.current,
        userPosition,
        doctorPosition
      );
    }
  }, [apikey, userPosition, doctorPosition]);

  // Set the style for user and doctor markers
  function getMarkerIcon(color) {
    const svgCircle = `<svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="marker">
                <circle cx="10" cy="10" r="7" fill="${color}" stroke="${color}" stroke-width="4" />
                </g></svg>`;
    return new H.map.Icon(svgCircle, {
      anchor: {
        x: 10,
        y: 10,
      },
    });
  }

  // Calculate the fastest route between the user and doctor location
  function calculateRoute(platform, map, start, destination) {
    function routeResponseHandler(response) {
      const sections = response.routes[0].sections;
      const lineStrings = [];
      sections.forEach((section) => {
        // convert Flexible Polyline encoded string to geometry
        lineStrings.push(
          H.geo.LineString.fromFlexiblePolyline(section.polyline)
        );
      });
      const multiLineString = new H.geo.MultiLineString(lineStrings);
      const bounds = multiLineString.getBoundingBox();

      // Create the polyline for the route
      const routePolyline = new H.map.Polyline(multiLineString, {
        style: {
          lineWidth: 5,
        },
      });

      // Remove all the previous map objects, if any
      map.removeObjects(map.getObjects());
      // Add the polyline to the map
      map.addObject(routePolyline);
      map.addObjects([
        // Add a marker for the user
        new H.map.Marker(start, {
          icon: getMarkerIcon('red'),
        }),
        // Add a marker for the selected doctor
        new H.map.Marker(destination, {
          icon: getMarkerIcon('green'),
        }),
      ]);
      // Configure the map view to automatically zoom into the bounds
      // encompassing markers and route polyline:
      map.getViewModel().setLookAtData({ bounds });
    }

    // Get an instance of the H.service.RoutingService8 service
    const router = platform.getRoutingService(null, 8);

    // Define the routing service parameters
    const routingParams = {
      origin: `${start.lat},${start.lng}`,
      destination: `${destination.lat},${destination.lng}`,
      transportMode: 'car',
      return: 'polyline',
    };
    // Call the routing service with the defined parameters
    router.calculateRoute(routingParams, routeResponseHandler, console.error);
  }

  // Return a div element to hold the map

  return (
    <div className="h-[100vh] w-[100%]" ref={mapRef}>
      <main className="absolute -right-[2px] sm:right-0 top-[44%] sm:top-[18%] w-5 h-screen bg-[#2D3250] flex flex-col justify-center items-center gap-40">
        <HoverCardUi
          icon={
            <a href="#doctorSection">
              <RiArrowUpDoubleLine className="text-white text-[30px] cursor-pointer" />
            </a>
          }
          content={<p className="">Go to the previous section</p>}
        />
        <HoverCardUi
          icon={
            <a href="#testimonialSection">
              <RiArrowDownDoubleLine className="text-white text-[30px] cursor-pointer" />
            </a>
          }
          content={<p>Go to the next section</p>}
        />
      </main>
    </div>
  );
};

export default Map;
