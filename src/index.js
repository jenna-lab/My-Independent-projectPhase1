fetch("http://localhost:3000/types")
  .then((resp) => resp.json())
  .then((types) => renderTypes(types));

  const renderTypes = (types) =>{
    console.log(types)
    
  }