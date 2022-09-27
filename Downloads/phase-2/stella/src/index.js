document.addEventListener('DOMContentLoaded',() => {
    fetching()
    document.getElementById("button-review-id").addEventListener("click",(event) => {
        event.preventDefault()
    customerReviews(review.value)
        })
    })
function fetching()
{
     fetch(`http://localhost:3000/beers`)
        .then(resp => resp.json())
            .then(data => {
                    addbeertomylist(data)
            })
}


function addbeertomylist(data){
    data.forEach(element => {
        let beerName = document.getElementById("beer-name")
        beerName.textContent = element.name
        let listTag = document.createElement("li")
        let unorderlist = document.getElementById("beer-list")
        unorderlist.appendChild(listTag)
        listTag.textContent = element.name
        let beerImage = document.getElementById("beer-image");
        beerImage.setAttribute("src",element.image_url)
        let beerDescription = document.getElementById("beer-description")
        beerDescription.textContent = element.description
        listTag.addEventListener("click",()=> {
            beerName.textContent = element.name
            beerImage.setAttribute("src",element.image_url)
            beerDescription.textContent = element.description;
            let ServerReview = document.getElementById("serverreviews")
            ServerReview.textContent = element.reviews
        })
    });
 }
 
 
function customerReviews(myText){
    let myReviewList = document.createElement("li")
    myReviewList.innerHTML = `${myText}`
    document.getElementById("actualreviews").appendChild(myReviewList)
    let btn = document.createElement("button")
    btn.textContent = ' X '
    myReviewList.appendChild(btn)
    btn.addEventListener('click',event => event.target.parentNode.remove())
}