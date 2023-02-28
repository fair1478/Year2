const returnDate = ()=>{
    const date = new Date()
    postMessage(date)
    setInterval(returnDate,1000)
}
  returnDate()