fetch("https://whatyearisit-backend-seven-ivory.vercel.app/year")
  .then(response => response.json())
  .then(data =>{
    console.log(data.year)
    // document.body.innerHTML +=`<div id = "year">${data.year}</div>`
    document.querySelector("#year").textContent = data.year 
  })
