import { Button } from "@/components/ui/button";
import { MoreVertical, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { MdEdit } from "react-icons/md";
interface DataItem {
    id: number;
    name: string;
    owner: string;
    address: string;
    status: string;
    }

export default function TableRow() {
  return (
    <tr key={item.id} className="border-t">
      <td className="p-3">
        <input type="checkbox" checked={check} />
      </td>
      <td className="p-3">{item.id}</td>
      <td className="p-3">{item.name}</td>
      <td className="p-3">{item.owner}</td>
      <td className="p-3">{item.address}</td>
      <td className="p-3">
        <span
          className={`inline-block w-24 text-center px-3 py-1 text-white rounded-full ${
            statusColors[item.status]
          }`}
        >
          {item.status}
        </span>
      </td>
      <td className="p-3 flex gap-2 justify-center">
        <Link href={`/${entityName.toLowerCase()}/${item.id}`}>
          <Button variant="ghost" style={{ border: "none" }}>
            <MdEdit size={16} color="black" />
          </Button>
        </Link>
        <Button
          variant="ghost"
          style={{ border: "none" }}
          onClick={handleDelete}
        >
          <Trash2 size={16} />
        </Button>
        <Button variant="ghost" style={{ border: "none" }}>
          <MoreVertical size={16} />
        </Button>
      </td>
    </tr>
  );
}
