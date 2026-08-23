

// URL for use
// https://dog.ceo/api

//endpoints
//breeds/list/all 

///breeds/image/random




fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {{
        const imageEl = document.createElement('img')
        imageEl.src = data.message
        imageEl.alt = 'random dog picture'
        document.querySelector('#img-container').appendChild(imageEl)
    }})

//first fetch fetch the data from into response in json 
//the second .then add the data to the data variable
//const imageEl = document.createElement('img') --> this create a html elemtne <img> 
// the next tow line add the parameter that are src and alt
// finally the containere is fetched and the iamge imported 


//          JSON-PLACEHOLDER
