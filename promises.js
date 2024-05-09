function makeApiRequest(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

// Example usage
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
makeApiRequest(apiUrl)
    .then(data => {
        console.log('API response:', data);
        // Do something with the data
    })
    .catch(error => {
        console.error('Error making API request:', error);
    });
