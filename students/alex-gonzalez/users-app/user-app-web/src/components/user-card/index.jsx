import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function UserCard({ user, onDelete }) {

    return (
        <Card style={{ width: '300px' }}>
            <Card.Img variant="top" src={user.img} />
            <Card.Body>
                <Card.Title>{user.name} {user.lastname}</Card.Title>
                <Card.Text>{user.country}</Card.Text>
                <Button as={Link} to={`/usuarios/${user.id}`} variant="primary">Update</Button>
                <Button onClick={() => onDelete(user.id)} variant="danger">Delete</Button>
            </Card.Body>
        </Card>
    )
}


export default UserCard;