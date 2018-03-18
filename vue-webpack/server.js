const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'))


let orders = [];

app.get('/api/items', (req, res) => {
  res.send(orders);
});

app.put('/api/items/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let itemsMap = orders.map(item => { return item.id; });
  let index = itemsMap.indexOf(id);
  let item = orders[index];
  item.quantity++;
  res.send(item);
});

app.post('/api/items', (req, res) => {
  let item = req.body;
  item.quantity = 1;
  orders.push(item);
  res.send(item);
});

app.delete('/api/items/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = orders.map(order => { return order.id; }).indexOf(id);
  console.log(removeIndex);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that item doesn't exist");
    return;
  }
  orders.splice(removeIndex, 1);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'))