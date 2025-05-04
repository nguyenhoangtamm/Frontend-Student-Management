'use client';
import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { Button } from 'react-bootstrap';
import { DormitoryLocationType } from '@/schemaValidations/dormitory.schema';


const MapDormitory: React.FC<{ location: DormitoryLocationType }> = ({
    location,
}) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<L.Map | null>(null);
    const [L, setL] = useState<typeof import('leaflet') | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('leaflet').then((leaflet) => {
                setL(leaflet);
            });
        }
    }, []);

    useEffect(() => {
        if (!L || !mapRef.current || mapInstance.current) return;

        mapInstance.current = L.map(mapRef.current).setView(
            [parseFloat(location.latitude ?? "0"), parseFloat(location.longitude ?? "0")],
            13,
        );

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors',
        }).addTo(mapInstance.current);

        L.marker([parseFloat(location.latitude ?? "0"), parseFloat(location.longitude ?? "0")])
            .addTo(mapInstance.current)
            .bindPopup(`<b>${location.name}</b><br>Địa chỉ: ${location.address}`)
            .openPopup();

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        }

        function showPosition(position: GeolocationPosition) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            mapInstance.current!.setView([lat, lon], 13);
            L?.marker([lat, lon])
                .addTo(mapInstance.current!)
                .bindPopup('Vị trí hiện tại của bạn!')
                .openPopup();
        }

        function showError(error: GeolocationPositionError) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    alert('User denied the request for Geolocation.');
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert('Location information is unavailable.');
                    break;
                case error.TIMEOUT:
                    alert('The request to get user location timed out.');
                    break;
                default:
                    alert('An unknown error occurred.');
                    break;
            }
        }

        (window as unknown as Window & { getLocation: () => void }).getLocation =
            getLocation;
    }, [L, location]);

    return (
        <div>
            <Button
                onClick={() =>
                    (
                        window as unknown as Window & {
                            getLocation: () => void;
                        }
                    ).getLocation()
                }
            >
                Get Current Location
            </Button>
            <div ref={mapRef} style={{ height: '400px', width: '100%' }} />
        </div>
    );
};

export default dynamic(() => Promise.resolve(MapDormitory), { ssr: false });
