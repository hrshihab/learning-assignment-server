const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/tutorial_categories.json');
const allTopics = require('./data/tutorial_topics.json');
const descriptions = require('./data/tutorial_descriptions.json');
app.get('/',(req,res)=> {
  res.send('Api Running');
});

app.get('/categories',(req,res)=> {
 
  res.send(categories);
});

app.get('/categories/:id',(req,res)=>  {
  const id =parseInt(req.params.id) ;
  const selectedTopics = allTopics.filter(topic => topic.tutorial_category_id === id);
  
  res.send(selectedTopics);
  
  
})

app.get('/topics/:topicId',(req,res)=> {
  const topicId = req.params.topicId;
  const topicDescription = descriptions.topics.filter(topic => topic.id === topicId);
  res.send(topicDescription);
  
})

app.listen(port,()=> {
  console.log('Port in running  ', port);
})