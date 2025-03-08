"use client";
import { useListDormitoriesName } from "@/services/hooks/useDomainarie";
import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

// const Options = ["Nhà trọ A", "Nhà trọ B", "Nhà trọ C"];
interface InputSelectorProps {
    onChange: (selected: string) => void;
}
interface Option {
    id: string;
    name: string;
}

export default function InputSelector({ onChange }: InputSelectorProps) {
    const { data: dataOff, isLoading, error } = useListDormitoriesName();
    const Options = Array.isArray(dataOff) ? dataOff : [];
    const [selectedOff, setSelectedOff] = useState<string | null>(null);
    const handleChange = (selected: Option) => {
        setSelectedOff(selected.name);
        onChange(selected.id);
        console.log("selected", selected.id);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (selectedOff) {
            // const { data: house, isLoading, error } = useDomainarie(houseId);
            alert(`Bạn đã chọn nhà trọ: ${selectedOff}`);
        } else {
            alert("Vui lòng chọn một nhà trọ!");
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <Container className="mt-5">
            <h2 className="mb-4">Chọn Nhà trọ</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nhà trọ</Form.Label>
                    <Typeahead
                        id="city-typeahead"
                        options={Options.map((option) => ({
                            id: option.id,
                            label: option.name,
                        }))}
                        placeholder="Nhập tên nhà trọ..."
                        onChange={(selected) =>
                            handleChange(selected[0] as Option)
                        }
                        multiple={false}
                        labelKey="label"
                        defaultInputValue={selectedOff ? selectedOff : ""}
                    />
                </Form.Group>
            </Form>
        </Container>
    );
}
