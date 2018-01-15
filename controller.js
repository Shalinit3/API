import User from './model'

export const add = (req, res) => {

    var data = new User(req.body)
    data.save()
    .then (() => {
        res.send({
            data: data,
            message: 'Data successfully saved'
        })
    })
    .catch ((err) => {
        res.send({
            data:  data,
            message: 'Error Occured' + err
        })
    })
}

export const view = (req, res) => {
    User.find()
    .then ((response) => { 
        res.status(200).json({ data: response });
    })
} 