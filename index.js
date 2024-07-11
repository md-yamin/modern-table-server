const express = require('express');
const app = express()
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;

//middleware

app.use(cors({
    origin: ['https://dream-real-estate-efecd.web.app','http://localhost:5173'],
    credentials: true
}))
app.use(express.json())


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.brerg1p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {


        const chefsCollection = client.db("modernTable").collection("chefs");
        const mealsCollection = client.db("modernTable").collection("meals");
        const newsCollection = client.db("modernTable").collection("news");
        const introsCollection = client.db("modernTable").collection("intros");
        const usersCollection = client.db("modernTable").collection("users");
        
        


        const verifyToken = (req, res, next) => {
            if (!req.headers.authorization) {
                return res.status(401).send({ message: 'unauthorized access' })
            }
            const token = req.headers.authorization.split(' ')[1];
            jwt.verify(token, process.env.TOKEN_Secret, (err, decoded) => {
                if (err) {
                    return res.status(403).send({ message: 'forbidden access' })
                }
                req.decoded = decoded
                next()
            });

        } 

        app.post('/jwt', async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.TOKEN_Secret, {
                expiresIn: '3h'
            })
            res.send({ token })
        })
        
        app.get("/meals", async(req, res)=>{
            const result = await mealsCollection.find().toArray()
            res.send(result) 
        })
        app.get("/chefs", async(req, res)=>{
            const result = await chefsCollection.find().toArray()
            res.send(result) 
        })
        app.get("/news", async(req, res)=>{
            const result = await newsCollection.find().toArray()
            res.send(result) 
        })
        app.get("/intros", async(req, res)=>{
            const result = await introsCollection.find().toArray()
            res.send(result) 
        })
        app.post("/users", async(req, res)=>{
            const cursor = req.body
            const result = await usersCollection.insertOne(cursor)
            res.send(result) 
        })

    } finally {
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('server is running properly, no issues here')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})