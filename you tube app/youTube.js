var API_KEY = "AIzaSyDUe9oFJWfLfCUJ_vadMAzgnTY3-XRPwnc";
var maxResults = 30;
async function fetchData() {
    var query = document.getElementById("searchParam").value;
    // console.log(query);
    var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${query}&key=${API_KEY}`;
    var response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    var dataArray = data.items;
    displayData(dataArray);
}
    
async function popularVideos() {
    var url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=IN&key=${API_KEY}`;
    var response = await fetch(url);
    var data = await response.json();
    console.log(data.items);
    var dataArray = data.items;
    // displayData(dataArray);
    displayData(dataArray);
}
popularVideos();

function  displayData(dataArray) {
    document.getElementById("resultContainer").innerHTML = "";
    dataArray.forEach((elem) => {
        if (elem.id.videoId == undefined) {
            var videoCard = document.createElement("div");
            videoCard.onclick = function () {
                var id = elem.id.videoId;
                localStorage.setItem("videoId", id);
                location.href = "watch.html";
            }
            var videoTitle = document.createElement("h3");
            videoTitle.textContent = elem.snippet.title;

            var videoDescription = document.createElement("p");
            videoDescription.textContent = elem.snippet.description;

            var videoImg = document.createElement("img");
            videoImg.setAttribute("id", "thumbnail");
            videoImg.src = elem.snippet.thumbnails.high.url;

            videoCard.append(videoImg, videoTitle, videoDescription);
            document.getElementById("resultContainer").append(videoCard);
        }else{
            var videoCard = document.createElement("div");
            videoCard.onclick = function () {
                var id = elem.id.videoId;
                localStorage.setItem("videoId", id);
                location.href = "watch.html";
            }
            var videoTitle = document.createElement("h3");
            videoTitle.textContent = elem.snippet.title;

            var videoDescription = document.createElement("p");
            videoDescription.textContent = elem.snippet.description;

            var videoImg = document.createElement("img");
            videoImg.setAttribute("id", "thumbnail");
            videoImg.src = elem.snippet.thumbnails.high.url;

            videoCard.append(videoImg, videoTitle, videoDescription);
            document.getElementById("resultContainer").append(videoCard);
        }

    })
}

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=IN&key=AIzaSyDUe9oFJWfLfCUJ_vadMAzgnTY3-XRPwnc