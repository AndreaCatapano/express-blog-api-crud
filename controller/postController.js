const posts = require("../data/posts.js");

function index(req, res) {
    let filterdPosts = posts;

    if (req.query.tags) {

        const tagsArray = Array.isArray(req.query.tags) ? req.query.tags : [req.query.tags];
        
        filterdPosts = posts.filter(post => {

            return tagsArray.every(queryTags => {

                const normalizedQueryTag = queryTags.toLowerCase().replace(/\s/g, '+');

                return post.tags.some(postTag => {
                    const normalizedPostTag = postTag.toLowerCase().replace(/\s/g, '+');
                    return normalizedPostTag.includes(normalizedQueryTag);
                });
            });
        });
    }
    res.json(filterdPosts)
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: "Post non trovato" });
    }
}

function store(req, res) {
    const newId = posts.length > 0 ? (posts[posts.length - 1].id + 1) : 1;
    const newPost = {
        id: newId, 
        title : req.body.title,
        content : req.body.content,
        image : req.body.image,
        tags : req.body.tags
    }

    posts.push(newPost);

    console.log(posts)

    res.status(201);
    res.json(newPost);
}

function update(req, res) {
    res.send("Funzione Update")

}

function patch(req, res) {
    res.send("Funzione Patch")
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex(post => post.id === id);

    if (postIndex >= 0) {
        posts.splice(postIndex, 1);
        console.log(posts)
        res.sendStatus(204)
    } else {
        res.status(404).json({ message: "Post non trovato" });
    }
}


module.exports = { index, show, store, update, patch, destroy }