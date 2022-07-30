fetch("https://jsonplaceholder.typicode.com/posts").then(res => {
    return res.json()
}).then(res => {
    console.log(res)
    res.map(post => {   
        console.log(post.userId)
    })
}).catch(err => {
    console.log(err)
})
