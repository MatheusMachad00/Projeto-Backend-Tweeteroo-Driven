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
    users.push(req.body);
    userAvatar = req.body.avatar
    res.status(200).send(console.log('Tudo ok!', users));
});

app.post("/tweets", (req, res) => { 
    const data = req.body;

	const tweetData = {
		username: data.username,
		avatar: userAvatar,
		tweet: data.tweet
	}

    tweets.push(tweetData)
    res.status(200).send(tweets);
});

app.get("/tweets", (_, res) => {
    const slicedTweets = tweets.slice(0, 10);

    res.status(200).send(slicedTweets);
});

app.listen(5000); 