import express from 'express';
import cors from 'cors';

let users = [];
let tweets = [];

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {

    res.send('teste');
});

app.post("/sign-up", (req, res) => {
    users.push(req.body);
    res.send(console.log('Tudo ok!', users));
});

app.post("/tweets", (req, res) => {
    tweets.push(req.body)
    /* res.send(console.log('Tudo ok!', tweets)); */
    res.send(tweets);
});

app.get("/tweets", (req, res) => {
    const slicedTweets = tweets.slice(0, 10);
    res.send(slicedTweets);
});

app.listen(5000); 