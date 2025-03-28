const posts = require("../data/posts.js");


function index(req, res) {
    res.json(posts)
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
    res.send("Funzione Store")
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