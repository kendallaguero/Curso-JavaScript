const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post1', 'Post2', 'Post3'];
            const error = false;

            if(error){
                reject('Error');
            } else {
                resolve(posts);
            }
        }, 2000);
    });
};

fetchPosts()
    .then((posts) => {
        console.log(posts);
    })
    .catch((error) => {
        console.log(error);
    });

// const miVariable = fetchPosts();
// console.log(miVariable);
// *Incorrecto*