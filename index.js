import express from 'express';
import cors from 'cors';
import chalk from 'chalk';

let users = [];
let tweets = [];

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {

    res.status(200).send('teste');
});

app.post("/sign-up", (req, res) => {
    users.push(req.body);
    res.status(200).send(console.log('Tudo ok!', users));
});

app.post("/tweets", (req, res) => {
    tweets.push(req.body)
    res.status(200).send(tweets);
});

app.get("/tweets", (req, res) => {
    const slicedTweets = tweets.slice(0, 10);
    res.status(200).send(slicedTweets);
});

app.listen(5000); 