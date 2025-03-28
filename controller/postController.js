function index (req, res){
    res.send("Funzione Index")
}

function show (req, res){
    res.send("Funzione Show")
}

function store (req, res){
    res.send("Funzione Store")
}

function update (req, res){
    res.send("Funzione Update")
}

function patch (req, res){
    res.send("Funzione Patch")
}

function destroy (req, res){
    res.send("Funzione Delete")
}


module.exports = {index, show, store, update, patch, destroy}