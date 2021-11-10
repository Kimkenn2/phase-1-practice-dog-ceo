console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// let img = document.createElement("img")
// img.src = imgUrl

// let dogImage = document.getElementById("dog-image-container")
// dogImage.appendChild(img)
dogImageContainer = document.getElementById("dog-image-container")

function addImage() {
    const p = document.createElement('p')
    p.id = `${message}`

    dogImageContainer.appendChild(image)
}

fetch(imgUrl)
.then(resp => resp.json())
.then(image => image.forEach(addImage)
).catch(console.log(error))