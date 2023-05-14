
const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;
require('dotenv').config()

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');



app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://coffee_shop:n6!i6Nf4QT_Qz$2@cluster0.mcdvihz.mongodb.net/`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// console.log(uri)

async function run() {
    try {
        const homePageCoffee = client.db('coffeeShop').collection('homePageCoffee')
        // console.log(homePageCoffee2)

        app.get('/homePageCoffeeList', async(req, res) =>{
            const query = {}
            const coffeeList = await homePageCoffee.find(query).toArray()
            res.send(coffeeList)
        })


    }
    finally {

    }
}

run().catch(console.dir)



app.get('/', (req, res) => {
    res.send('api running')
})

app.listen(port, () => console.log(`server on port ${port}`))