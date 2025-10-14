const productData = [
  {
    id: 1,
    model: "Samsung A20",
    brand: "Samsung",
    price: 17000.4585,
    inStock: true,
    availability: "In Stock",
    description:
      "The Samsung A20 offers a sleek design, AMOLED display, and reliable performance for everyday tasks.",
    images: [
      { img: "https://picsum.photos/500/300?random=1", imgName: "pic-1.jpg" },
    ],
  },
  {
    id: 2,
    model: "iPhone 13",
    brand: "Apple",
    price: 69999.9999,
    inStock: true,
    availability: "In Stock",
    description:
      "Apple iPhone 13 with A15 Bionic chip, advanced dual-camera system, and brilliant OLED display.",
    images: [
      { img: "https://picsum.photos/500/300?random=2", imgName: "pic-2.jpg" },
    ],
  },
  {
    id: 3,
    model: "Redmi Note 12 Pro",
    brand: "Xiaomi",
    price: 22999.9999,
    inStock: true,
    availability: "In Stock",
    description:
      "Powerful Redmi Note 12 Pro with 5G support, 120Hz AMOLED display, and long-lasting 5000mAh battery.",
    images: [
      { img: "https://picsum.photos/500/300?random=3", imgName: "pic-3.jpg" },
    ],
  },
  {
    id: 4,
    model: "OnePlus Nord 3",
    brand: "OnePlus",
    price: 31999.459,
    inStock: true,
    availability: "In Stock",
    description:
      "The OnePlus Nord 3 brings smooth performance, OxygenOS, and fast charging technology.",
    images: [
      { img: "https://picsum.photos/500/300?random=4", imgName: "pic-4.jpg" },
    ],
  },
  {
    id: 5,
    model: "Vivo V29",
    brand: "Vivo",
    price: 26999.758,
    inStock: true,
    availability: "In Stock",
    description:
      "Vivo V29 with curved AMOLED display, stylish design, and professional-grade photography features.",
    images: [
      { img: "https://picsum.photos/500/300?random=5", imgName: "pic-5.jpg" },
    ],
  },
  {
    id: 6,
    model: "Oppo Reno 10",
    brand: "Oppo",
    price: 34999.458,
    inStock: true,
    availability: "In Stock",
    description:
      "Oppo Reno 10 comes with advanced portrait camera, AMOLED display, and super-fast charging.",
    images: [
      { img: "https://picsum.photos/500/300?random=6", imgName: "pic-6.jpg" },
    ],
  },
  {
    id: 7,
    model: "Realme Narzo 60",
    brand: "Realme",
    price: 15999.654,
    inStock: true,
    availability: "In Stock",
    description:
      "Realme Narzo 60 offers solid midrange performance with stylish leather finish design.",
    images: [
      { img: "https://picsum.photos/500/300?random=7", imgName: "pic-7.jpg" },
    ],
  },
  {
    id: 8,
    model: "Nothing Phone (2)",
    brand: "Nothing",
    price: 44999.123,
    inStock: true,
    availability: "In Stock",
    description:
      "The futuristic Nothing Phone (2) with unique glyph interface and premium performance.",
    images: [
      { img: "https://picsum.photos/500/300?random=8", imgName: "pic-8.jpg" },
    ],
  },
  {
    id: 9,
    model: "Google Pixel 7a",
    brand: "Google",
    price: 43999.875,
    inStock: true,
    availability: "In Stock",
    description:
      "Google Pixel 7a brings top-notch camera performance and pure Android experience.",
    images: [
      { img: "https://picsum.photos/500/300?random=9", imgName: "pic-9.jpg" },
    ],
  },
  {
    id: 10,
    model: "Motorola Edge 40",
    brand: "Motorola",
    price: 28999.478,
    inStock: true,
    availability: "In Stock",
    description:
      "Motorola Edge 40 is a powerful mid-ranger with curved pOLED display and elegant design.",
    images: [
      { img: "https://picsum.photos/500/300?random=10", imgName: "pic-10.jpg" },
    ],
  },
  {
    id: 11,
    model: "Samsung Galaxy S23",
    brand: "Samsung",
    price: 79999.874,
    inStock: true,
    availability: "In Stock",
    description:
      "The flagship Samsung Galaxy S23 features a top-tier processor and dynamic AMOLED 2X display.",
    images: [
      { img: "https://picsum.photos/500/300?random=11", imgName: "pic-11.jpg" },
    ],
  },
  {
    id: 12,
    model: "Poco X5 Pro",
    brand: "Poco",
    price: 24999.452,
    inStock: true,
    availability: "In Stock",
    description:
      "Poco X5 Pro delivers gaming-level performance and 108MP camera in a budget-friendly package.",
    images: [
      { img: "https://picsum.photos/500/300?random=12", imgName: "pic-12.jpg" },
    ],
  },
  {
    id: 13,
    model: "Asus ROG Phone 7",
    brand: "Asus",
    price: 89999.754,
    inStock: true,
    availability: "In Stock",
    description:
      "The ultimate gaming phone — ROG Phone 7 with Snapdragon 8 Gen 2 and cooling system.",
    images: [
      { img: "https://picsum.photos/500/300?random=13", imgName: "pic-13.jpg" },
    ],
  },
  {
    id: 14,
    model: "Lava Agni 2",
    brand: "Lava",
    price: 19999.954,
    inStock: true,
    availability: "In Stock",
    description:
      "Made in India: Lava Agni 2 offers 5G connectivity and curved AMOLED at an affordable price.",
    images: [
      { img: "https://picsum.photos/500/300?random=14", imgName: "pic-14.jpg" },
    ],
  },
  {
    id: 15,
    model: "Infinix Zero 30",
    brand: "Infinix",
    price: 16999.125,
    inStock: true,
    availability: "In Stock",
    description:
      "Infinix Zero 30 delivers a stylish design, 108MP camera, and solid battery life.",
    images: [
      { img: "https://picsum.photos/500/300?random=15", imgName: "pic-15.jpg" },
    ],
  },
  {
    id: 16,
    model: "Tecno Camon 30 Pro",
    brand: "Tecno",
    price: 18999.775,
    inStock: true,
    availability: "In Stock",
    description:
      "Tecno Camon 30 Pro comes with AMOLED display and AI-powered 64MP triple camera setup.",
    images: [
      { img: "https://picsum.photos/500/300?random=16", imgName: "pic-16.jpg" },
    ],
  },
  {
    id: 17,
    model: "Sony Xperia 10 V",
    brand: "Sony",
    price: 49999.654,
    inStock: true,
    availability: "In Stock",
    description:
      "Sony Xperia 10 V brings cinematic display and legendary audio quality in a compact form.",
    images: [
      { img: "https://picsum.photos/500/300?random=17", imgName: "pic-17.jpg" },
    ],
  },
  {
    id: 18,
    model: "Nokia G60 5G",
    brand: "Nokia",
    price: 24999.875,
    inStock: true,
    availability: "In Stock",
    description:
      "Nokia G60 5G provides long-term Android updates, sturdy build, and sustainable design.",
    images: [
      { img: "https://picsum.photos/500/300?random=18", imgName: "pic-18.jpg" },
    ],
  },
  {
    id: 19,
    model: "Honor 90",
    brand: "Honor",
    price: 37999.359,
    inStock: true,
    availability: "In Stock",
    description:
      "Honor 90 stands out with a 200MP camera, bright AMOLED panel, and elegant aesthetics.",
    images: [
      { img: "https://picsum.photos/500/300?random=19", imgName: "pic-19.jpg" },
    ],
  },
  {
    id: 20,
    model: "iQOO Neo 7",
    brand: "iQOO",
    price: 27999.695,
    inStock: true,
    availability: "In Stock",
    description:
      "iQOO Neo 7 delivers blazing-fast gaming performance and liquid cooling with AMOLED display.",
    images: [
      { img: "https://picsum.photos/500/300?random=20", imgName: "pic-20.jpg" },
    ],
  },
];

export default productData;
