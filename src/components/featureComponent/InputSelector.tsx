// "use client";
// import { useState } from "react";
// import { Form, Button, Container } from "react-bootstrap";
// import { Typeahead } from "react-bootstrap-typeahead";
// import "react-bootstrap-typeahead/css/Typeahead.css";


// export default function InputSelector({Options, title}: {Options: string[], title: string}) {
//     const [selectedCity, setSelectedCity] = useState<string[]>([]);

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (selectedCity.length > 0) {
//             alert(`Bạn đã chọn: ${selectedCity[0]}`);
//         } else {
//             alert("Vui lòng chọn một nhà trọ!");
//         }
//     };

//     return (
//         <Container className="mt-5">
//             <h2 className="mb-4">Chọn {title}</h2>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                     <Form.Label>{title}</Form.Label>
//                     <Typeahead
//                         id="city-typeahead"
//                         options={Options}
//                         placeholder="Nhập để tìm kiếm..."
//                         onChange={setSelectedCity}
//                         selected={selectedCity}
//                         multiple={false}
//                     />
//                 </Form.Group>
//                 <Button type="submit" variant="primary">
//                     Chọn
//                 </Button>
//             </Form>
//         </Container>
//     );
// }
