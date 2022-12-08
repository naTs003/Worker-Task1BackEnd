const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Server respone on / route")
})

app.get('/isciler', (req, res) => {

    let worker = [
        {
            name: 'Yusif',
            surname: 'Aliyev',
            age: '20',
        },
        {
            name:'ismayil',
            surname:'Meherremli',
            age:'20'
        }
    ]


    res.json(worker)
})





app.listen(3000, () => {
    console.log("Server started on 3000 port")

})