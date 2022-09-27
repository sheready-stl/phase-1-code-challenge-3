// Your code here
// Your code here
document.addEventListener('DOMContentLoaded',()=>{
    const movieTitles = document.getElementById("films")
    const moviePoster = document.getElementById("poster")
    const movieTitle = document.getElementById("title")
    const runTime = document.getElementById("runtime")
    const movieInfo = document.getElementById("film-info")
    const showTime = document.getElementById('showtime')
    const ticketNum = document.getElementById("ticket-num")
    const buyBtn = document.getElementById("buy-ticket")
    fetch('http://localhost:3000/films')
    .then((res)=>res.json())
    .then((data)=>{
        moviePoster.src = data[0].poster
        movieTitle.innerText = data[0].title
        runTime.innerText = `${data[0].runtime} minutes`
        movieInfo.innerText = data[0].description
        showTime.innerText = data[0].showtime
        ticketNum.innerText =data[0].tickets_sold
        let tickets = data[0].tickets_sold
        

        data.forEach(movie => {
            
            const movieList = document.createElement('li')
            movieList.innerText = movie.title
            movieList.classList.add("film")
            movieTitles.appendChild(movieList)
            movieList.id = movie.id
            movieList.style.cursor = 'pointer'
            movieList.addEventListener('click',(e)=>{
                e.preventDefault()
                moviePoster.src = movie.poster
                movieTitle.innerText = movie.title
                runTime.innerText = `${movie.runtime} minutes`
                movieInfo.innerText = movie.description
                showTime.innerText = movie.showtime
                ticketNum.innerText =movie.tickets_sold
                let tickets = movie.tickets_sold
                buyBtn.addEventListener('click',(e)=>{
                    e.preventDefault()
                    tickets --
                    ticketNum.innerText = tickets
                    if (tickets === 0 ) {
                        buyBtn.disabled = 'true'
                        buyBtn.textContent = 'SOLD OUT'
                        
                    }
                })
                
            })
            
        });

    })









})