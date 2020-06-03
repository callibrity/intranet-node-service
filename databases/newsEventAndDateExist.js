exports.newsEventAndDateExist = function(date, event, res){
  if(!date){
    res.status(400).send({message: 'Date is missing!'});
    return false;
  }
  if(!event){
    res.status(400).send({message: 'Event is missing!'})
    return false;
  }
  return true;
}