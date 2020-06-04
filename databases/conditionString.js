exports.conditionString = function(query){
  let queryKeys = Object.keys(query);
  let conditions = "";
  let started = false;
  for(let i = 0; i < queryKeys.length; i += 1){
    const currentKey = queryKeys[i];
    const currentString = `UPPER(${currentKey}) LIKE UPPER('%${query[currentKey]}%')`;
    if(!started){
      conditions = ` WHERE ${currentString}`;
      started = true;
    } else{
      conditions = `${conditions} AND ${currentString}`; 
    }
  }
  return conditions;
};