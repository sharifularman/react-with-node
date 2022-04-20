const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello kitty bro, dhurr hi again');

});

const users = [
    { id: 1, name: 'Abdul Halim', email: 'abhalim@gmail.com', phone: '01544444145' },
    { id: 2, name: 'Abdul Awal', email: 'awal@gmail.com', phone: '01544444145' },
    { id: 3, name: 'Abdul Jobbar', email: 'jobbar@gmail.com', phone: '01544444145' },
    { id: 4, name: 'Abdul Khalek', email: 'khalek@gmail.com', phone: '01544444145' },
    { id: 5, name: 'Abdul Malek', email: 'malek@gmail.com', phone: '01544444145' },
    { id: 6, name: 'Abdul Kadir', email: 'akadir@gmail.com', phone: '01544444145' },
    { id: 7, name: 'Abdul Alim', email: 'abaalim@gmail.com', phone: '01544444145' },
]
app.get('/users', (req, res) => {
    //filter by query parameter
    if(req.query.name){
        const search= req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched)
    }
    else{
        res.send(users)
    }
    
});

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
    console.log(req.params);
});

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
});


app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges', 'malta', 'pineapples'])
});

app.get('/fruits/mango/langra', (req, res) => {
    res.send("sweety sweety my langra mango")
})

app.listen(port, () => {
    console.log('listening to', port);
})