let url = document.querySelector("#channelURL");
let search = document.querySelector("#search");
let subscribers = document.querySelector("#subscriberValue");
let views = document.querySelector("#viewsValue");
let videos = document.querySelector("#totalVideos");
let response = document.querySelector("#response");
let errorValue = document.querySelector("#errorValue");
let errors = document.querySelector("#errors");

// if search button clicked
search.addEventListener("click",()=>{
    let key = "AIzaSyDC6gmvUxck_VzKRd9H6mkuyo7BqMV3R3k";
    let userID = url.value;

    // read full article to learn how to use youtube api
    // link => https://developers.google.com/
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${userID}&key=${key}`).then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);
        if(data.pageInfo.totalResults > 0){
            response.style.display ="block";
            errors.style.display ="none";
            subscribers.innerText = data.items[0].statistics.subscriberCount;
            videos.innerText = data.items[0].statistics.videoCount;
            views.innerText = data.items[0].statistics.viewCount;
        }else{
            errorValue.innerText = "Please Enter Correct Youtube ID";
            response.style.display = "none";
            errors.style.display = "grid";
        }
    })
})