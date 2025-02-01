# Digital Marketing Agency

This is a fully responsive frontend website design for a **Digital Marketing Agency**, built using **HTML, CSS, Bootstrap, Owl Carousel, Font Awesome, jQuery, and JavaScript**. The design is modern, interactive, and optimized for a great user experience.  

---

## 📌 Features  

✔️ **Fully Responsive Design** (Mobile, Tablet, Desktop)  
✔️ **Interactive & Dynamic UI**  
✔️ **Smooth Animations & Transitions**  
✔️ **Owl Carousel Integration** for Sliders  
✔️ **Bootstrap Framework** for Grid System & Components  
✔️ **Font Awesome Icons** for Elegant UI  
✔️ **jQuery & JavaScript Functionalities**  

---

## 🛠️ Technologies Used  

- **HTML5** - Structure & Content  
- **CSS3** - Styling & Animations  
- **Bootstrap 5** - Grid System & Components  
- **Owl Carousel** - Testimonials & Image Sliders  
- **Font Awesome** - Icon Library  
- **jQuery & JavaScript** - Interactive Elements  

---

## 📂 Folder Structure  

```
/Digital-Marketing-Agency/
│── index.html                   # Main Landing Page
│── assets/                      # Static Assets Folder
│   ├── css/                     # Stylesheets
│   │   ├── style.css            # Custom Styles
│   │   └── responsive_style.css # Responsive Styles
│   ├── js/                      # JavaScript Files
│   │   └── script.js            # Custom Scripts
│   └── images/                  # Images & Logo
└── README.md                    # Documentation
```

---

## 🔌 Dependencies  

💡 Add the following **CDN links** inside your `<head>` tag:  

### **Bootstrap 5**  
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

### **Owl Carousel**  
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css">
```

### **Font Awesome**  
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"> 
```

### **Owl Carousel JS**  
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
```

### **jQuery & Bootstrap JS**  
```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
```

---

## 🎯 Customization  

You can modify:  
✅ **Colors & Fonts** in `style.css`  
✅ **Slider Settings** in `main.js`  
✅ **Content & Images** in `index.html`  

To customize the **Owl Carousel**, update the script in `script.js`:  

```js
$(document).ready(function () {
    $('.client-slider-section').owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});
```

---

## 📧 Contact & Support  

For any questions or improvements, feel free to reach out! 😊  


Happy Coding! 🎉
