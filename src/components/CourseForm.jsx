import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function CourseEdit({ formData, handleChange, handleSubmit, isCreate, validate }) {
    return (
        <Form validated={validate} onSubmit={(e) => handleSubmit(e)}>
            <Row className='mx-0 mt-3' >
                <Col md="6">
                    <fieldset disabled={!isCreate}>
                        <Form.Group className="mb-3">
                            <Form.Label>Course name</Form.Label>
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
                        <Form.Label>Start Date</Form.Label>

                        <Form.Control
                            type="date"
                            className='position-relative'
                            placeholder="Start Date"
                            value={formData.startDate}
                            name="startDate"
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="mb-3">
                        <Form.Label>End Date</Form.Label>

                        <Form.Control
                            type="date"
                            className='position-relative'
                            placeholder="End Date"
                            value={formData.endDate}
                            name="endDate"
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="mb-3">
                        <Form.Label>Cost</Form.Label>

                        <Form.Control
                            type="number"
                            className='position-relative'
                            placeholder="Cost"
                            value={formData.cost}
                            name="cost"
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="mb-3">
                        <Form.Label>Capacity</Form.Label>

                        <Form.Control
                            type="number"
                            className='position-relative'
                            placeholder="Capacity"
                            value={formData.capacity}
                            name="capacity"
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="mb-3">
                        <Form.Label>status</Form.Label>

                        <Form.Select
                            value={formData.status}
                            name="status"
                            onChange={(e) => handleChange(e)}
                            required>
                            <option value="Started">Started</option>
                            <option value="Not started">Not started</option>
                            <option value="Canceld">Canceld</option>
                        </Form.Select>
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