'use client';
import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { Button, Modal } from 'react-bootstrap';

interface MapPickerProps {
    setLongitude: (lng: number) => void;
    setLatitude: (lat: number) => void;
}

export default function MapPicker({ setLatitude, setLongitude }: MapPickerProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<L.Map | null>(null);
    const [L, setL] = useState<typeof import('leaflet') | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<{
        lat: number;
        lng: number;
    } | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('leaflet').then((leaflet) => {
                setL(leaflet);
            });
        }
    }, []);

    useEffect(() => {
        if (!L || !mapRef.current || mapInstance.current || !showModal) return;

        mapInstance.current = L.map(mapRef.current).setView([10.421034188999379, 105.64194783052326], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 22,
            attribution: '© OpenStreetMap contributors',
        }).addTo(mapInstance.current);

        mapInstance.current.on('click', (e: L.LeafletMouseEvent) => {
            setSelectedLocation({ lat: e.latlng.lat, lng: e.latlng.lng });
        });
    }, [L, showModal]);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        if (mapInstance.current) {
            mapInstance.current.remove(); // Xóa bản đồ khỏi DOM
            mapInstance.current = null; // Đặt lại mapInstance
        }
        if (mapRef.current) {
            mapRef.current.innerHTML = ''; // Làm sạch container
        }
        setShowModal(false);
    };

    const confirmLocation = () => {
        if (selectedLocation) {
            setLatitude(selectedLocation.lat);
            setLongitude(selectedLocation.lng);
        }
        closeModal();
    };

    return (
        <div>
            <Button onClick={openModal}>Select Location</Button>
            <Modal show={showModal} onHide={closeModal} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Select Location on Map</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div ref={mapRef} style={{ height: '400px', width: '100%' }} />
                    {selectedLocation && (
                        <div className="mt-4 text-center">
                            <p>
                                <strong>Selected Latitude:</strong> {selectedLocation.lat}
                            </p>
                            <p>
                                <strong>Selected Longitude:</strong> {selectedLocation.lng}
                            </p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={confirmLocation}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}