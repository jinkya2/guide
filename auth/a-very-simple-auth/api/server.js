import jwt from 'express-jwt';
import jsonwebtoken from 'jsonwebtoken';
import cors from 'cors';
import express from 'express';



const app = express();
app.use(cors());

const jwtSecret = "dog123";

app.get('/jwt', (req, res)=>{
    res.json({
        token: jsonwebtoken.sign({user: "Ajinkya"}, jwtSecret)
    });
});

app.use(jwt({secret: jwtSecret, algorithms: ['HS256']}))

const foods = [{id: 1, name: 'Pohe'}, {id: 2, name: 'Jalebi'}, {id: 3, name: 'Moong Bhajiya'},]

app.get('/foods', (req, res)=>{
    res.json(foods);
})

app.listen(3001, function(){console.log('lisytening on 3001')});