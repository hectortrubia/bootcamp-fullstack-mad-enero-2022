import { useNavigate } from 'react-router-dom';
import { createUser as createUserToAPI } from '../../api/users';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useCountries } from '../../api/countries.hook';

function Register() {
    const countries = useCountries();
    const nav = useNavigate();

    const createUser = e => {
        e.preventDefault();
        createUserToAPI(e.target).then(() => nav('/home'));
    }

    return (
        <Form onSubmit={createUser}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' required type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control name='lastname' required type="text" placeholder="Enter lastname" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control name='username' required type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="img">
                <Form.Label>Imagen</Form.Label>
                <Form.Control name='img' required type="url" placeholder="Enter the url of image" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Select name='country' aria-label="Pais">
                    <option>Selecciona un país</option>
                    {countries.map(c => <option key={c.code} value={c.name_es}>{c.name_es}</option>)}
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
                Registrar
            </Button>
        </Form>
    )
}


export default Register;