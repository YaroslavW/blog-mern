const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test1');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());

// const posts = [
//     {
//         title:  "lorem ipsum1",
//         text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elitconsectetur adipisicing elit. Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
//     },
//     {
//         title:  "lorem ipsum2",
//         text: "Lorem ipsum dolor sit amet  Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
//     },
//     {
//         title:  "lorem ipsum3",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
//     },
//     {
//         title:  "lorem ipsum4",
//         text: "Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
//     }    
// ];

// app.get('/posts', function(req, res) {
//     return res.send(posts);
// });

// app.get('/posts/:id', function(req, res) {
//     const id = req.params.id;
//     res.send(posts[id]);
// })
// app.post('/posts', function(req, res) {
//     const data = req.body;
//     console.log(data);
//     posts.push(data);
//     return res.send(posts);
// })
// app.listen(3000, ()=> console.log('Server running on 3000 port'));