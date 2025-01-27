'use client'
import React from "react";
import { Button, Modal } from "react-bootstrap";
import MapComponent from "./Mapcomponent";

interface LocationProps {
    isOpen: boolean;
    setOpen: (s: boolean) => void;
    // lati: number;
    // longi: number;
    }   

export default function MapModal(props: LocationProps) {
  const { isOpen, setOpen} = props;
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Modal show={isOpen} onHide={handleClose} centered backdrop="static" size="xl">
      <Modal.Header closeButton>
        <Modal.Title>OpenStreetMap</Modal.Title>
      </Modal.Header>
      <Modal.Body>
     <MapComponent/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
