import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MultiSelect } from "react-multi-select-component";

export default function StudentForm({ formData, handleChange, handleSubmit, validate, coursesData }) {
    const placeSelectedOptions = [];
    const coursesSelectOptions = coursesData.map(course => ({ label: course.name, value: course.id }))
    if (formData.courses.length >= 1) {        
        formData.courses.map(course => {
            coursesSelectOptions.map(selectedOption => {
                return selectedOption.value == course ? placeSelectedOptions.push(selectedOption) : '';
            })
        })
    }
    const [selected, setSelected] = useState(placeSelectedOptions);
    return (
        <Form validated={validate} onSubmit={(e) => handleSubmit(e)}>
            <Row className='mx-0 mt-3' >
                <Col md="6">
                    <fieldset>
                        <Form.Group className="mb-3">
                            <Form.Label>Student name</Form.Label>
                            <Form.Control
                                type="text"
                                className='position-relative'
                                placeholder="name"
                                value={formData.name}
                                name="name"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </Form.Group>
                    </fieldset>
                </Col>
                <Col md="6">
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>

                        <Form.Control
                            type="email"
                            className='position-relative'
                            placeholder="Email"
                            value={formData.email}
                            name="email"
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="mb-3">
                        <Form.Label>Telephone</Form.Label>

                        <Form.Control
                            type="number"
                            className='position-relative'
                            placeholder="Telephone"
                            value={formData.phone}
                            name="phone"
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            className='position-relative'
                            placeholder="Address"
                            value={formData.address}
                            name="address"
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="mb-3">
                        <Form.Label>Courses</Form.Label>

                        <MultiSelect
                            options={coursesSelectOptions}
                            value={selected}
                            onChange={(e) => {setSelected(e); handleChange(e, true)}}
                            labelledBy="Select"
                            hasSelectAll={false}
                        />
                    </Form.Group>
                </Col>

                <Col md="12">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}