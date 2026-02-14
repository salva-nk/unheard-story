const videoInput = document.getElementById("videoInput");
const preview = document.getElementById("preview");

function selectVideo(){
    videoInput.click();
}

videoInput.addEventListener("change", function(){
    preview.innerHTML = "";

    const file = videoInput.files[0];

    if(file){
        const reader = new FileReader();

        reader.onload = function(e){
            const video = document.createElement("video");
            video.src = e.target.result;
            video.controls = true;
            preview.appendChild(video);
        };

        reader.readAsDataURL(file);
    }
});

function uploadVideo(){
    if(videoInput.files.length === 0){
        alert("Please select a video.");
        return;
    }

    const file = videoInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e){

        let storedVideos = JSON.parse(localStorage.getItem("uploadedVideos")) || [];
        storedVideos.push(e.target.result);

        localStorage.setItem("uploadedVideos", JSON.stringify(storedVideos));

        alert("Video uploaded successfully!");

        // Redirect back to selection page
        window.location.href = "selection.html";
    };

    reader.readAsDataURL(file);
}

function goBack(){
    window.location.href = "selection.html";
}
