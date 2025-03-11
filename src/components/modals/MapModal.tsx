"use client";
import React from "react";
import { Modal } from "react-bootstrap";
import MapComponent from "./Mapcomponent";
import { Button } from "../ui/button";
import { DormitoryPaginationType } from "@/schemaValidations/dormitory.schema";


interface LocationProps {
    isOpen: boolean;
    setOpen: (s: boolean) => void;
    housingLocation: DormitoryPaginationType;
}

export default function MapModal(props: LocationProps) {
    const { isOpen, setOpen } = props;
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            show={isOpen}
            onHide={handleClose}
            centered
            backdrop="static"
            size="xl"
        >
            <Modal.Header closeButton>
                <Modal.Title>OpenStreetMap</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MapComponent location={props.housingLocation} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
