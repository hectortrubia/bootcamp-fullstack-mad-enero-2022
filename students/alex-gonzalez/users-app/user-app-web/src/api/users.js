


// dado un formulario, hace la llamada al backend
export const createUser = async (form) => {
    const userFormData = new FormData(form);
    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(userFormData))
    }
    return await fetch('http://localhost:4000/users', options);
}