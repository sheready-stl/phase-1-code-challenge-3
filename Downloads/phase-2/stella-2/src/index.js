// write your code here
const img = document.querySelector("#card-image")
const title = document.querySelector("#card-title")
const comments = document.querySelector(".comments")
const form = document.querySelector("#comment-form")
const commentInput = document.querySelector("#comment")
const myLikeBtn = document.querySelector("#like-button")
const myLikes = document.querySelector("#like-count")
document.addEventListener("DOMContentLoaded", () => {
    myCommImgFetch()
form.addEventListener("submit", function(e){
    e.preventDefault()
    let commList = document.createElement("li")
    commToServ = commList.innerText = commentInput.value
    comments.appendChild(commList)
    fetch(`http://localhost:3000/comments`,{
        method: "POST",
        headers: {
            "content-type": "application/json",
            Accept: 'application/json',
        },
        body: JSON.stringify({
            imageId: 1,
            content: commToServ
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
})
myLikeBtn.addEventListener("click", () => {
    num = parseInt(myLikes.innerText)
    num += 1
    const toServ = myLikes.innerText = `${num} likes`
    fetch(`http://localhost:3000/images/1`,{
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            Accept: 'application/json',
        },
        body: JSON.stringify({
            likes: toServ,
        })
    })
    .then(res => res.json())
    .then((json) => {
        json.likes = myLikes.innerText
    });
})
})
function myCommImgFetch(){
    Promise.all([
        fetch('http://localhost:3000/images').then(res => res.json()),
        fetch('http://localhost:3000/comments').then(res => res.json())
    ]).then(data => {
        const imgData = data[0]
        const commData = data[1]
        const imgs = imgData
        .map(imgL => {
            return imgL.image
        })
        img.src = imgs
        const mariam = imgData
        .map(titleP => {
            return titleP.title
        })
        title.innerText = mariam
        const htmlD = commData
        .map(myList => {
            return `<li>${myList.content}</li>`;
        })
        .join(" ")
        comments.innerHTML = htmlD
    }).catch(error => alert(error))
}
