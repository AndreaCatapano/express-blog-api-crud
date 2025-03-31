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
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    posts.push(newPost);

    console.log(posts);

    res.status(201);
    res.json(newPost);
}

function update(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (post) {
        if (!req.body.title || !req.body.content || !req.body.image || !req.body.tags) {
            res.status(404).json({ message: "Dati Non validi" });
        } else {
            post.title = req.body.title;
            post.content = req.body.content;
            post.image = req.body.image;
            post.tags = Array.isArray(req.body.tags) ? req.body.tags : [req.body.tags];
            res.status(200).json(post)
        }
    } else {
        res.status(404).json({ message: "Post non trovato" });
    }
}

function patch(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (post) {
        if (req.body.title && req.body.title != post.title) {
            post.title = req.body.title;
        }
        if (req.body.content && req.body.content != post.content) {
            post.content = req.body.content;
        }
        if (req.body.image && req.body.image != post.image) {
            post.image = req.body.image;
        }
        if (req.body.tags && JSON.stringify(req.body.tags) !== JSON.stringify(post.tags)) {
            post.tags = Array.isArray(req.body.tags) ? req.body.tags : [req.body.tags];
        }
        res.status(200).json(post)
    } else {
        res.status(404).json({ message: "Post non trovato" });
    }
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