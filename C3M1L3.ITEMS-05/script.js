function initPage() {
    console.log("Page loaded!");
}

function showProductImage() {
    const productImageSection = document.getElementById("productImageSection");
    
    // TODO 2: Capture the product name from the dropdown with id "productImage" to update the productImage src
    const productImage = document.getElementById("productImage");
    
    // TODO 3: Capture the productCategory selected from dropdown.
    const categorySelect = document.getElementById("productCategory");
    const selectedCategory = categorySelect.value;

    // TODO 4: Make use of if else-if to show the data on screen and set the src to display the image.
    if (selectedCategory === "phone") {
        productImage.src = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200";
        productImage.alt = "Phone";
    } else if (selectedCategory === "laptop") {
        productImage.src = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200";
        productImage.alt = "Laptop";
    } else if (selectedCategory === "camera") {
        productImage.src = "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200";
        productImage.alt = "Camera";
    } else if (selectedCategory === "headphones") {
        productImage.src = "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200";
        productImage.alt = "Headphones";
    } else if (selectedCategory === "watch") {
        productImage.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200";
        productImage.alt = "Smart Watch";
    } else {
        productImageSection.style.display = "none";
        return;
    }

    productImageSection.style.display = "block";
}

function submitForm() {
    let isValid = true;

    clearErrors();

    if (isValid) {
        document.getElementById("productForm").style.display = "none";
        document.getElementById("thanksMessage").style.display = "block";
    }
}

function clearErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach(error => error.innerHTML = "");
}

function displayError(elementId, message) {
    document.getElementById(elementId).innerHTML = message;
}