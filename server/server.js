const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let uniqueId = 1;
const users = [{ id: 100, username:'Harry', surname: 'Potter', email: 'harrypotter@gn.com', password: 'akcio', adress: 'hogwarts', phone:'+854547'},
               { id: 101, username:'Tony', surname: 'Stark', email: 'avenger@gn.com', password: 'ironman', adress: 'USA', phone:'+1111'},
               { id: 102, username:'Miranda', surname: 'Lovers', email: 'miranfa@gn.com', password: 'qwe', adress: 'Vakanda', phone:'+111547'},
]

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// роутинг


app.get('/api/profile', function (req, res) {
    res.status(200).send(users);
});
app.post('/api/profile/', function (req, res) {
    const { username, surname, email, password, adress, phone } = req.body;
    const user = {
        id: uniqueId,
        username,
        surname,
        email,
        password,
        adress,
        phone
    };
    uniqueId++;
    users.push(user);
    res.status(200).send(users);
},
);
app.put('/api/profile/:userId', function (req, res) {
    const id = req.params.userId;
    let userIndex = users.findIndex(user => user.id == id);
    if (userIndex >= 0) {
        users[userIndex] = { ...users[userIndex], ...req.body };
        res.status(200).json(users);
    } else {
        res
        .status(404)
        .json({ message: `error` });
    }
    res.status(200).send(users);
});
app.listen(process.env.PORT || 3010);
console.log("сервер запущен!");


/*const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

app.post('/api/profile/:userId', function (req, res) {
    const { username, surname, email,password, adress, phone } = req.body;
    const user = {
                id: uniqueId,
                username,
                surname,
                email,
                password,
                adress,
                phone
            };
            uniqueId++;
            [].push(user);

            res.status(200).send(user);
        },
    );

app.get('/api/profile/:userId', function (req, res) {
    const id = req.params.userId;
    console.log(id)
 //  let user = users.filter(user => user.id == id)
    // const id = req.params.id;
    res.status(200).send(users);
});
*/