import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Khởi tạo bản đồ
      mapInstance.current = L.map(mapRef.current).setView([10.3675, 105.4235], 13); // Tọa độ và mức zoom

      // Thêm lớp bản đồ từ OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstance.current);

      // Danh sách các tọa độ nhà trọ
      const hostels = [
        { lat: 10.3675, lon: 105.4235, name: 'Nhà trọ A', address: 'Địa chỉ A', price: '1 triệu/tháng', description: 'Nhà trọ sạch sẽ, an ninh tốt.' },
        { lat: 10.3700, lon: 105.4250, name: 'Nhà trọ B', address: 'Địa chỉ B', price: '1.2 triệu/tháng', description: 'Nhà trọ gần trường học, tiện lợi.' },
        { lat: 10.3725, lon: 105.4275, name: 'Nhà trọ C', address: 'Địa chỉ C', price: '1.5 triệu/tháng', description: 'Nhà trọ có chỗ để xe rộng rãi.' }
      ];

      // Thêm các marker vào bản đồ
      hostels.forEach(hostel => {
        L.marker([hostel.lat, hostel.lon]).addTo(mapInstance.current!)
          .bindPopup(`<b>${hostel.name}</b><br>Địa chỉ: ${hostel.address}<br>Giá: ${hostel.price}<br>Mô tả: ${hostel.description}`)
          .openPopup();
      });

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
  }, []);

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