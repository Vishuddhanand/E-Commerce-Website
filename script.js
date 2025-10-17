// index.html

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// productId.html

const products = {
  "splendor-drum-rubber": {
    name: "Splendor Drum Rubber",
    img: "./assets/splendor-drum-rubber-1000x1000.webp",
    desc: "OE Quality | Set of 5",
    price: "₹24"
  },
  "pulsar-drum-rubber": {
    name: "Pulsar Drum Rubber",
    img: "./assets/Pulsar 4 hole Drum rubber.jpeg",
    desc: "4 Hole | OE Quality | Set of 5",
    price: "₹38"
  },
  "unicorn-shocker-seal": {
    name: "Shocker Seal Unicorn",
    img: "./assets/honda-unicorn-fork-oil-seal-500x500.webp",
    desc: "OE Quality | Set of 10",
    price: "₹19"
  },
  "activa-air-pipe": {
    name: "Activa Air Pipe",
    img: "./assets/Activa air pipe.jpeg",
    desc: "OE Quality",
    price: "₹20"
  },
   "unicorn-air-filter": {
    name: "Uctiva Air Filter",
    img: "./assets/Unicorn.jpg",
    desc: "OE Quality",
    price: "₹67"
  },
   "bullet-air-filter": {
    name: "Bullet Air Filter",
    img: "./assets/Bullet Air Filter.webp",
    desc: "OE Quality",
    price: "₹90"
  },
  "brek-liver-hero-honda": {
    name: "Brek Liver Hero Honda",
    img: "./assets/Brake liver hero honda.webp",
    desc: "OE Quality",
    price: "₹35"
  },

  "break-pad-pulsur": {
    name: "Break Pad Pulsur",
    img: "./assets/Brake Pad Pulsur.webp",
    desc: "OE Quality",
    price: "₹60"

  },

  // Bike Drum Rubbers

  "splendor-drum-rubber": {
    name: "Splendor Drum Rubber",
    img: "./assets/splendor-drum-rubber-1000x1000.webp",
    desc: "OE Quality | Set of 5",
    price: "₹24"
  },
  "pulsar-drum-rubber": {
    name: "Pulsar Drum Rubber",
    img: "./assets/Pulsar 4 hole Drum rubber.jpeg",
    desc: "4 Hole | OE Quality | Set of 5",
    price: "₹38"
  },
  "shine-drum-rubber": {
    name: "Shine Drum Rubber",
    img: "./assets/Shine Drum Rubber.png",
    desc: "OE Quality | Set of 5",
    price: "₹30"
  },
  "passion-drum-rubber": {
    name: "Passion Drum Rubber",
    img: "./assets/passion pro drum rubber.png",
    desc: "OE Quality | Set of 5",
    price: "₹34"
  },
  "gixxer-drum-rubber": {
    name: "Gixxer Drum Rubber",
    img: "./assets/GIXXER Drum Rubber.png",
    desc: "OE Quality | Set of 5",
    price: "₹25"
  },
  "yamaha-drum-rubber": {
    name: "Yamaha Drum Rubber",
    img: "./assets/yamaha drum rubber.png",
    desc: "OE Quality | Set of 5",
    price: "₹35"
  },
  "discover-drum-rubber": {
    name: "Discover Drum Rubber",
    img: "./assets/Discover Drum Rubber.png",
    desc: "OE Quality | Set of 5",
    price: "₹40"
  },

  "twister-drum-rubber": {
    name: "Twister Drum Rubber",
    img: "./assets/Twister Drum Rubber.png",
    desc: "OE Quality | Set of 5",
    price: "₹29"
  },

  // Petrol Pipes

  "passion-pro-petrol-pipes": {
    name: "Passion Pro Petrol Pipe",
    img: "./assets/passion pro petrol pipes.png",
    desc: "OE Quality",
    price: "₹8"
  },
  "discover-petrol-pipe": {
    name: "Discover Petrol Pipe",
    img: "./assets/Discover petrol pipe.png",
    desc: "OE Quality",
    price: "₹8"
  },
  "splendor-petrol-pipe": {
    name: "Splendor Petrol Pipe",
    img: "./assets/Splender Petrol Pipe.png",
    desc: "OE Quality",
    price: "₹6.20"
  },
  "activa-petrol-pipe": {
    name: "Activa Petrol Pipe",
    img: "./assets/Activa petrol pipe.png",
    desc: "OE Quality",
    price: "₹19"
  },
  "activa-j-pipe": {
    name: "Activa J Pipe",
    img: "./assets/activa j pipe.png",
    desc: "OE Quality",
    price: "₹23"
  },
  "activa-air-pipe": {
    name: "Activa Air Pipe",
    img: "./assets/Activa air pipe.jpeg",
    desc: "OE Quality",
    price: "₹20"
  },

  
  // Brake Clutches

  "brake-liver-hero-honda": {
    name: "Brake Liver Hero Honda",
    img: "./assets/Brake liver hero honda.webp",
    desc: "OE Quality",
    price: "₹35"
  },

  "clutch-liver-hero-honda": {
    name: "Clutch Liver Hero Honda",
    img: "./assets/clutch liver hero honda.png",
    desc: "OE Quality",
    price: "₹35"
  },

  "brake-liver-activa": {
    name: "Brake Liver Activa",
    img: "./assets/Brake Liver Activa.png",
    desc: "OE Quality",
    price: "₹36"
  },

  "clutch-liver-activa": {
    name: "Clutch Liver Activa",
    img: "./assets/Clutch liver activa.png",
    desc: "OE Quality",
    price: "₹36"
  },

  "brake-liver-bajaj": {
    name: "Brake Liver Bajaj",
    img: "./assets/Brake Liver bajaj.png",
    desc: "OE Quality",
    price: "₹41"
  },

  "clutch-liver-bajaj": {
    name: "Clutch Liver Bajaj",
    img: "./assets/Clutch liver bajaj.png",
    desc: "OE Quality",
    price: "₹41"
  },

  // Bike Parts

  "socker-seal-splendor": {
    name: "Shocker Seal Splender",
    img: "./assets/socker seal splendor.png",
    desc: "OE Quality",
    price: "₹19"
  },
  "brake-pad-pulsur": {
    name: "Brake Pad Pulsar",
    img: "./assets/Brake Pad Pulsur.webp",
    desc: "OE Quality",
    price: "₹60"
  },
  "unicorn-shocker-seal": {
    name: "Shocker Seal Unicorn",
    img: "./assets/honda-unicorn-fork-oil-seal-500x500.webp",
    desc: "OE Quality",
    price: "₹19"
  },
  "discover-handle-grip": {
    name: "Discover Handle Grip",
    img: "./assets/Discover Handle Grip.png",
    desc: "OE Quality",
    price: "₹42"
  },
  "unicorn-air-filter": {
    name: "Unicorn Air Filter",
    img: "./assets/unicorn air filter.png",
    desc: "OE Quality",
    price: "₹60"
  },
  "tvs-genune-parts": {
    name: "TVS Geniune Parts",
    img: "./assets/TVS Genune Part.png",
    desc: "OE Quality",
    price: "₹85"
  },
  "horn-button-activa": {
    name: "Horn Button Activa",
    img: "./assets/Horn Button Activa.png",
    desc: "OE Quality",
    price: "₹17"

  },
  "indicator-button-activa": {
    name: "Indicator Button Activa",
    img: "./assets/indicator button activa.png",
    desc: "OE Quality",
    price: "₹17"
  }
  
  
};

// get product id from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');

// show product data
if (productId && products[productId]) {
  const p = products[productId];
  document.getElementById("productImg").src = p.img;
  document.getElementById("productName").textContent = p.name;
  document.getElementById("productDesc").textContent = p.desc;
  document.getElementById("productPrice").textContent = p.price;
}

// order button and form
const btn = document.getElementById("orderBtn");
const form = document.getElementById("orderForm");
const thank = document.getElementById("thankyou");

if (btn) {
  btn.onclick = () => {
    form.style.display = "block";
    btn.style.display = "none";
  };
}

if (form) {
  form.onsubmit = (e) => {
    e.preventDefault();
    form.style.display = "none";
    thank.style.display = "block";
  };
}


