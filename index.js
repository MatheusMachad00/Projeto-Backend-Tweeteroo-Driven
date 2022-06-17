import express from 'express';
import cors from 'cors';

let users = [];
let tweets = [];
let userAvatar;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (_, res) => {

    res.status(200).send('teste');
});

app.post("/sign-up", (req, res) => {
    if(req.body.avatar !== "" && req.body.username !== ""){
        users.push(req.body);
        userAvatar = req.body.avatar;
        res.status(201).send('Usuário cadastrado com sucesso!');
    }else res.sendStatus(400);
});

app.post("/tweets", (req, res) => { 
    const data = req.body;

	const tweetData = {
		username: data.username,
		avatar: userAvatar,
		tweet: data.tweet
	}

    if(req.body.username !== "" && req.body.tweet !== ""){
        tweets.push(tweetData);
        res.status(201).send(tweets);
    }else res.sendStatus(400);
});

app.get("/tweets", (_, res) => {
    const slicedTweets = tweets.slice(0, 10);

    res.status(200).send(slicedTweets.reverse());
});


app.listen(5000); 