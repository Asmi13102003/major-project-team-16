let products = {
    data: [{
        productName: "Regular White T-Shirt",
        category: "Fashion",
        price: "30",
        image: "img/white-tshirt.jpg",
    },
    {
        productName: "Floral Print Dress",
        category: "Fashion",
        price: "30",
        image: "img/card1.png",
    },
    {
        productName: "Green Tshirt",
        category: "Fashion",
        price: "30",
        image: "img/card2.png",
    },
    {
        productName: "Red Midi Dress ",
        category: "Fashion",
        price: "30",
        image: "img/card4.png",
    },
    {
        productName: " Unisex Black Nike Shoe",
        category: "Fashion",
        price: "30",
        image: "img/card9.png",
    },
    {
        productName: " Unisex Black Nike Shoe",
        category: "Fashion",
        price: "30",
        image: "img/card10.png",
    },
    {
        productName: " Unisex Black Nike Shoe",
        category: "Fashion",
        price: "30",
        image: "img/card11.png",
    },
    {
        productName: " Unisex Black Nike Shoe",
        category: "Fashion",
        price: "30",
        image: "img/card12.png",
    },
    {
        productName: "Beige Short Skirt",
        category: "Fashion",
        price: "49",
        image: "img/short-skirt.jpg",
    },
    {
        productName: "Sporty SmartWatch",
        category: "Fashion",
        price: "99",
        image: "img/sporty-smartwatch.jpg",
    },
    {
        productName: "Basic Knitted Top",
        category: "Fashion",
        price: "29",
        image: "img/knitted-top.jpg",
    },
    {
        productName: "Black Leather Jacket",
        category: "Fashion",
        price: "129",
        image: "img/black-leather-jacket.jpg",
    },
    {
        productName: "Stylish Pink Trousers",
        category: "Fashion",
        price: "89",
        image: "img/pink-trousers.jpg",
    },
    {
        productName: "Brown Men's Jacket",
        category: "Fashion",
        price: "189",
        image: "img/brown-jacket.jpg",
    },
    {
        productName: "Oversized Hoddie",
        category: "Fashion",
        price: "189",
        image: "img/card3.png",
    },
    {
        productName: "Black Shirt",
        category: "Fashion",
        price: "189",
        image: "img/card6.png",
    },
    {
        productName: "Black Shirt",
        category: "Fashion",
        price: "189",
        image: "img/card7.png",
    },
    {
        productName: "Black Shirt",
        category: "Fashion",
        price: "189",
        image: "img/card8.png",
    },
    {
        productName: "Black Shirt",
        category: "Fashion",
        price: "189",
        image: "img/card5.png",
    },
    {
        productName: "Green Thirt",
        category: "Fashion",
        price: "189",
        image: "img/product image 1.png",
    },
    {
        productName: "Printed Shirt",
        category: "Fashion",
        price: "189",
        image: "img/men-collection.png",
    },
    {
        productName: "Sony Camera",
        category: "Electronics",
        price: "500",
        image: "img/Electronics.jpg",
    },
    {
        productName: "Tablet + Earbuds",
        category: "Electronics",
        price: "500",
        image: "img/img11.jpg",
    },
    {
        productName: "iPad",
        category: "Electronics",
        price: "300",
        image: "img/img12.jpg",
    },
    {
        productName: " Drone Camera",
        category: "Electronics",
        price: "600",
        image: "img/img16.jpg",
    },
    {
        productName: "Android Mobile",
        category: "Electronics",
        price: "500",
        image: "img/img14.jpg",
    },
    {
        productName: "Bluetooth Speaker",
        category: "Electronics",
        price: "500",
        image: "img/img17.jpg",
    },
    {
        productName: "Laptop",
        category: "Electronics",
        price: "450",
        image: "img/img20.jpg",
    },
    {
        productName: "5kg Apples",
        category: "Groceries",
        price: "450",
        image: "img/img 18.jpg",
    },
    {
        productName: "Vegetables",
        category: "Groceries",
        price: "450",
        image: "img/vegetables.png",
    },
    {
        productName: "Oats",
        category: "Groceries",
        price: "450",
        image: "img/oats.png",
    },
    {
        productName: "Mix fruits",
        category: "Groceries",
        price: "129",
        image: "img/Mix fruits -6.jpg"
    },
    {
        productName: "Couch set",
        category: "Furniture",
        price: "129",
        image: "img/img8.jpg"
    },
    {
        productName: "Furniture",
        category: "Furniture",
        price: "129",
        image: "img/img5.jpg"
    },
    {
        productName: "Furniture",
        category: "Furniture",
        price: "129",
        image: "img/img6.jpg"
    },
    {
        productName: "Furniture",
        category: "Furniture",
        price: "129",
        image: "img/img7.jpg"
    },
    {
        productName: "Candles",
        category: "Decor",
        price: "129",
        image: "img/Decor.jpg"
    },
    {
        productName: "Welcome",
        category: "Decor",
        price: "129",
        image: "img/img2.jpg",
    },
    {
        productName: "Welcome",
        category: "Decor",
        price: "129",
        image: "img/img3.jpg",
    },
    {
        productName: "Welcome",
        category: "Decor",
        price: "129",
        image: "img/img21.jpg",
    },
    {
        productName:"Toys",
        category:"Sports",
        price:"299",
        image:"img/Sports.jpg",
    },
    {
        productName:"Toys",
        category:"Sports",
        price:"299",
        image:"img/img27.jpg",
    },
    {
        productName:"Toys",
        category:"Sports",
        price:"299",
        image:"img/img28.jpg",
    },
    {
        productName:"Toys",
        category:"Sports",
        price:"299",
        image:"img/img29.jpg",
    },
    
    ]
};

// Function to create product cards
for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);

    // Add event listener for displaying product in large size
    card.addEventListener("click", () => {
        toggleProductSize(card);
    });

    // Add to Cart button for each product
    let addToCartButton = document.createElement("button");
    addToCartButton.innerText = "Add to Cart";
    addToCartButton.addEventListener("click", () => {
        console.log("Added to cart:", i.productName);
    });
    container.appendChild(addToCartButton);

    // Add event listener to navigate to fashion.html with the specific image data when clicked
card.addEventListener("click", () => {
    // Encode the image data to base64 before passing it in the URL
    const imageData = encodeURIComponent(i.image);
    window.location.href = "fashion.html?image=" + imageData;
});
}

// Function to toggle the size of the clicked product
function toggleProductSize(card) {
    card.classList.toggle("large-product");
}

// Parameter passed from button (Parameter same as category)
function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}

// Search button click
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
});

// Initially display all products
window.onload = () => {
    filterProduct("all");
};

// Get reference to the large image container
const largeImageContainer = document.getElementById('large-image-container');

// Loop through each product and add event listeners
products.data.forEach((product, index) => {
    const card = document.getElementById(`product-${index}`); // Assuming each product card has an ID like 'product-0', 'product-1', etc.

    // Add click event listener to the product card
    card.addEventListener('click', function() {
        // Display the large image in the container
        const largeImage = document.createElement('img');
        largeImage.setAttribute('src', product.image);
        largeImage.setAttribute('alt', product.productName);
        
        // Clear existing content in the large image container
        largeImageContainer.innerHTML = '';

        // Append the large image to the container
        largeImageContainer.appendChild(largeImage);
    });
});





