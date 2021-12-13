const getMessage = () => {
    return fetch('https://0n4aygm4ac.execute-api.us-east-1.amazonaws.com/dev')
        .then(data => data.json())
}

export { getMessage };