import { useEffect, useState } from 'react';
import UserCard from '../../components/user-card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'


function Home() {
    const [users, updateUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/users')
            .then(r => r.json())
            .then(u => updateUsers(u));
    }, []);

    const deleteUser = id => {
        const options = {
            method: 'DELETE'
        }
        fetch(`http://localhost:4000/users/${id}`, options)
        .then(r => {
            if(r.ok) updateUsers(users.filter(u => u.id !== id));
        })
    }

    return (
        <main>
            <h1>Listado de usuarios</h1>
            <Container className='users__container'>
                <Row>
                    {users.map(u => <Col xs={6} lg={3} key={u.id}><UserCard onDelete={deleteUser} user={u}/></Col>)}
                </Row>
            </Container>
        </main>
    )
}


export default Home;