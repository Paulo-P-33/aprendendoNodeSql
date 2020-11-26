exports.listAll = (req, res) =>{
    let usuarios =  [
            {
                nome: 'teste01',
                email: 'test@01.com'
            },
            {
                nome: 'teste02',
                email: 'test@02.com'
            }
                    ]
    res.send(usuarios)
}

exports.createOne = (req, res ) => {
    let response = {
        message: 'Usuario criado com sucesso',
        data : req.body
    }
    res.send(response)
}