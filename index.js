import express from "express";
import cors from "cors";
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/user', (req, res) => {
    let body = req.body;
    console.log(body);
    res.send(body);
});

app.listen(process.env.PORT, () => {
    console.log(`app is running on port ${process.env.PORT}`);
});
