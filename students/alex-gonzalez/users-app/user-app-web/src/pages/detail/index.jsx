import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';


function Detail() {
    const { id } = useParams();
    const [user, updateUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:4000/users/${id}`)
        .then(r => r.json())
        .then(u => updateUser(u));
    }, [id]);
    return (
        <main>
            <h1>Detalle del usuario: {id}</h1>
            <p>{user.name}</p>
            <p>{user.lastname}</p>
            <img src={user.img} alt='' />
        </main>
    )
}


export default Detail;