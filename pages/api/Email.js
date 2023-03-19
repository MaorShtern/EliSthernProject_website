const Email = async (data) => {
    let res = await fetch('http://localhost:3000/api/Api_Email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.status
}

export default Email