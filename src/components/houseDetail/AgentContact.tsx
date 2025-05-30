import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { Button } from "../ui/button";

interface AgentContactProps {
  phoneNumber: string;
  ownerName: string;
  image?: string;
}

export default function AgentContact({ phoneNumber, ownerName,image }: AgentContactProps) {
    return (
    <div className="agent-card bg-dark text-light p-3 rounded">
      <h5>Liên hệ:</h5>
      <div className="d-flex align-items-center">
        <Image
          src={image || "/images/agent.jpg"}
          alt="Agent"
          width={50}
          height={50}
          className="rounded-circle"
        />
        <div className="ms-3">
          <h6>{ownerName}</h6>
          <span className="badge bg-success">Verified seller</span>
        </div>
      </div>
      <div className="mt-3">
        <Button className="w-100">
          <FaPhone /> Call: <small>{phoneNumber}</small>
        </Button>
      </div>
    </div>
  );
};

