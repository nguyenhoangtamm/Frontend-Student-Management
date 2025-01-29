import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OriginHousing } from '@/interface/housingInterface';


export type HousingLocation = Omit<OriginHousing, "id" | "owner">;

const MapComponent: React.FC<{ location: HousingLocation }> = ({ location }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Khởi tạo bản đồ
      mapInstance.current = L.map(mapRef.current).setView([location.lat, location.lon], 13); // Tọa độ và mức zoom

      // Thêm lớp bản đồ từ OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstance.current);

      // Thêm marker vào bản đồ
      L.marker([location.lat, location.lon]).addTo(mapInstance.current)
        .bindPopup(`<b>${location.name}</b><br>Địa chỉ: ${location.address}<br>Giá: ${location.price}<br>Mô tả: ${location.description}`)
        .openPopup();

      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      }

      function showPosition(position: GeolocationPosition) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        alert("Latitude: " + lat + " Longitude: " + lon);
        mapInstance.current!.setView([lat, lon], 13); // Cập nhật vị trí và mức zoom của bản đồ
        L.marker([lat, lon]).addTo(mapInstance.current!)
          .bindPopup('Vị trí hiện tại của bạn!')
          .openPopup();
      }

      function showError(error: GeolocationPositionError) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        }
      }

      // Gán hàm getLocation vào window để có thể gọi từ button
      (window as Window & typeof globalThis & { getLocation: () => void }).getLocation = getLocation;
    }
  }, [location]);

  return (
    <div>
      <button onClick={() => (window as Window & typeof globalThis & { getLocation: () => void }).getLocation()}>
        Get Current Location
      </button>
      <div id="map" ref={mapRef} style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default MapComponent;