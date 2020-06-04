exports.updateString = function(query){
  let queryKeys = Object.keys(query);
  let updates = '';
  let started = false;
  for(let i = 0; i < queryKeys.length; i += 1){
    const currentKey = queryKeys[i];
    const currentString = `${currentKey}='${query[currentKey]}'`;
    if(!started){
      updates = currentString
      started = true;
    } else{
      updates = `${updates}, ${currentString}` 
    }
  }
  return updates;
}