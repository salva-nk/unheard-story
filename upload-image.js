const input = document.getElementById("imageInput");
const preview = document.getElementById("preview");

function selectImages(){
    input.click();
}

input.addEventListener("change", function(){
    preview.innerHTML = "";
    const files = input.files;

    for(let i = 0; i < files.length; i++){
        const reader = new FileReader();

        reader.onload = function(e){
            const img = document.createElement("img");
            img.src = e.target.result;
            preview.appendChild(img);
        };

        reader.readAsDataURL(files[i]);
    }
});

function uploadImages(){
    if(input.files.length === 0){
        alert("Please select at least one image.");
        return;
    }

    let storedImages = JSON.parse(localStorage.getItem("uploadedImages")) || [];

    const files = input.files;
    let count = 0;

    for(let i = 0; i < files.length; i++){
        const reader = new FileReader();

        reader.onload = function(e){
            storedImages.push(e.target.result);
            count++;

            if(count === files.length){
                localStorage.setItem("uploadedImages", JSON.stringify(storedImages));
                alert("Images uploaded successfully!");

                // Redirect back to selection page
                window.location.href = "selection.html";
            }
        };

        reader.readAsDataURL(files[i]);
    }
}

/* ✅ FIXED GO BACK FUNCTION */
function goBack(){
    window.location.href = "selection.html";
}
