function showSection(type) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(type + "Section").style.display = "block";

    if (type === "view") {
        displayStories();
    }

    if (type === "gallery") {
        loadGallery();
    }
}

// Redirect to story page
function goToStory(){
    window.location.href = "story.html";
}

// Redirect to image upload page
function goToUpload(){
    window.location.href = "upload-image.html";
}

// Redirect to video upload page
function goToVideoUpload(){
    window.location.href = "upload-video.html";
}

// Display stories saved from story.html
function displayStories() {
    let stories = JSON.parse(localStorage.getItem("stories")) || [];
    let display = document.getElementById("storiesDisplay");
    display.innerHTML = "";

    if(stories.length === 0){
        display.innerHTML = "<p>No stories yet.</p>";
        return;
    }

    stories.forEach(story => {
        let div = document.createElement("div");
        div.style.marginBottom = "15px";
        div.style.padding = "10px";
        div.style.border = "1px solid #ccc";
        div.style.borderRadius = "8px";

        let title = document.createElement("h3");
        title.textContent = story.title;

        let content = document.createElement("p");
        content.textContent = story.content;

        let author = document.createElement("small");
        author.textContent = "— " + story.author;

        div.appendChild(title);
        div.appendChild(content);
        div.appendChild(author);

        display.appendChild(div);
    });
}

// Load image gallery
function loadGallery(){
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    const images = JSON.parse(localStorage.getItem("uploadedImages")) || [];

    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.style.width = "100px";
        img.style.margin = "5px";
        img.style.borderRadius = "5px";
        gallery.appendChild(img);
    });
}

// Logout
function logout() {
    window.location.href = "index.html";
}
function goToStories(){
  window.location.href = "stories.html";
}