const products = {
  mobile: [
    {
      id: 1,
      name: "iPhone 15 Pro",
      brand: "Apple",
      price: 145999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=1",
          urlName: "iPhone 15 Pro",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 2,
      name: "Galaxy S23 Ultra",
      brand: "Samsung",
      price: 124999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=2",
          urlName: "Galaxy S23 Ultra",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "South Korea",
    },
    {
      id: 3,
      name: "Pixel 8 Pro",
      brand: "Google",
      price: 99999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=3",
          urlName: "Pixel 8 Pro",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "USA",
    },
    {
      id: 4,
      name: "OnePlus 11R",
      brand: "OnePlus",
      price: 44999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=4",
          urlName: "OnePlus 11R",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 5,
      name: "Xiaomi 13 Pro",
      brand: "Xiaomi",
      price: 79999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=5",
          urlName: "Xiaomi 13 Pro",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "China",
    },
    {
      id: 6,
      name: "iPhone 14",
      brand: "Apple",
      price: 119999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=6",
          urlName: "iPhone 14",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 7,
      name: "Galaxy Z Fold 5",
      brand: "Samsung",
      price: 154999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=7",
          urlName: "Galaxy Z Fold 5",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "South Korea",
    },
    {
      id: 8,
      name: "Pixel 7",
      brand: "Google",
      price: 62999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=8",
          urlName: "Pixel 7",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "USA",
    },
    {
      id: 9,
      name: "OnePlus Nord 3",
      brand: "OnePlus",
      price: 33999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=9",
          urlName: "OnePlus Nord 3",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 10,
      name: "Xiaomi Redmi Note 12 Pro",
      brand: "Xiaomi",
      price: 24999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=10",
          urlName: "Redmi Note 12 Pro",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "China",
    },
    {
      id: 11,
      name: "Motorola Edge 40",
      brand: "Motorola",
      price: 29999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=11",
          urlName: "Motorola Edge 40",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "USA",
    },
    {
      id: 12,
      name: "Asus ROG Phone 7",
      brand: "Asus",
      price: 99999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=12",
          urlName: "Asus ROG Phone 7",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "Taiwan",
    },
    {
      id: 13,
      name: "Realme GT Neo 3",
      brand: "Realme",
      price: 30999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=13",
          urlName: "Realme GT Neo 3",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 14,
      name: "Vivo X90 Pro",
      brand: "Vivo",
      price: 84999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=14",
          urlName: "Vivo X90 Pro",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "China",
    },
    {
      id: 15,
      name: "Oppo Reno 10 Pro",
      brand: "Oppo",
      price: 39999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=15",
          urlName: "Oppo Reno 10 Pro",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "China",
    },
    {
      id: 16,
      name: "iPhone SE (2022)",
      brand: "Apple",
      price: 49999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=16",
          urlName: "iPhone SE (2022)",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 17,
      name: "Galaxy A54",
      brand: "Samsung",
      price: 38999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=17",
          urlName: "Galaxy A54",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "South Korea",
    },
    {
      id: 18,
      name: "Pixel 6a",
      brand: "Google",
      price: 39999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=18",
          urlName: "Pixel 6a",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "USA",
    },
    {
      id: 19,
      name: "OnePlus 10T",
      brand: "OnePlus",
      price: 51999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=19",
          urlName: "OnePlus 10T",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 20,
      name: "Xiaomi 12 Pro",
      brand: "Xiaomi",
      price: 62999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=20",
          urlName: "Xiaomi 12 Pro",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "China",
    },
    {
      id: 21,
      name: "Motorola Razr 40",
      brand: "Motorola",
      price: 89999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=21",
          urlName: "Motorola Razr 40",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "USA",
    },
    {
      id: 22,
      name: "Asus Zenfone 10",
      brand: "Asus",
      price: 74999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=22",
          urlName: "Asus Zenfone 10",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Taiwan",
    },
    {
      id: 23,
      name: "Realme Narzo 60 Pro",
      brand: "Realme",
      price: 23999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=23",
          urlName: "Realme Narzo 60 Pro",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "India",
    },
    {
      id: 24,
      name: "Vivo V29",
      brand: "Vivo",
      price: 32999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=24",
          urlName: "Vivo V29",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "China",
    },
    {
      id: 25,
      name: "Oppo Find X5 Pro",
      brand: "Oppo",
      price: 99999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=25",
          urlName: "Oppo Find X5 Pro",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "China",
    },
    {
      id: 26,
      name: "Nokia X30 5G",
      brand: "Nokia",
      price: 35999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=26",
          urlName: "Nokia X30 5G",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Finland",
    },
    {
      id: 27,
      name: "Tecno Phantom X2",
      brand: "Tecno",
      price: 36999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=27",
          urlName: "Tecno Phantom X2",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "China",
    },
    {
      id: 28,
      name: "Infinix Zero 5G",
      brand: "Infinix",
      price: 17999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=28",
          urlName: "Infinix Zero 5G",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Hong Kong",
    },
    {
      id: 29,
      name: "Lava Agni 2",
      brand: "Lava",
      price: 21999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=29",
          urlName: "Lava Agni 2",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 30,
      name: "Nothing Phone (2)",
      brand: "Nothing",
      price: 49999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=30",
          urlName: "Nothing Phone (2)",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "UK",
    },
  ],
  tablets: [
    {
      id: 1,
      name: "iPad Pro 12.9",
      brand: "Apple",
      price: 119999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=6",
          urlName: "iPad Pro 12.9",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 2,
      name: "Galaxy Tab S9",
      brand: "Samsung",
      price: 89999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=7",
          urlName: "Galaxy Tab S9",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "South Korea",
    },
    {
      id: 3,
      name: "Lenovo Tab P12 Pro",
      brand: "Lenovo",
      price: 54999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=8",
          urlName: "Lenovo Tab P12 Pro",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "China",
    },
    {
      id: 4,
      name: "Microsoft Surface Go 3",
      brand: "Microsoft",
      price: 62999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=9",
          urlName: "Surface Go 3",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "USA",
    },
    {
      id: 5,
      name: "Realme Pad X",
      brand: "Realme",
      price: 27999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=10",
          urlName: "Realme Pad X",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 6,
      name: "iPad Air (5th Gen)",
      brand: "Apple",
      price: 74999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=11",
          urlName: "iPad Air 5",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 7,
      name: "Samsung Galaxy Tab A8",
      brand: "Samsung",
      price: 21999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=12",
          urlName: "Galaxy Tab A8",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "South Korea",
    },
    {
      id: 8,
      name: "Lenovo Yoga Tab 13",
      brand: "Lenovo",
      price: 69999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=13",
          urlName: "Yoga Tab 13",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "China",
    },
    {
      id: 9,
      name: "Microsoft Surface Pro 8",
      brand: "Microsoft",
      price: 105999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=14",
          urlName: "Surface Pro 8",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "USA",
    },
    {
      id: 10,
      name: "Realme Pad",
      brand: "Realme",
      price: 15999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=15",
          urlName: "Realme Pad",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 11,
      name: "Xiaomi Pad 6",
      brand: "Xiaomi",
      price: 26999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=16",
          urlName: "Xiaomi Pad 6",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "China",
    },
    {
      id: 12,
      name: "Nokia T20",
      brand: "Nokia",
      price: 16999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=17",
          urlName: "Nokia T20",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "Finland",
    },
    {
      id: 13,
      name: "Huawei MatePad Pro",
      brand: "Huawei",
      price: 72999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=18",
          urlName: "MatePad Pro",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "China",
    },
    {
      id: 14,
      name: "Amazon Fire HD 10",
      brand: "Amazon",
      price: 12999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=19",
          urlName: "Fire HD 10",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "USA",
    },
    {
      id: 15,
      name: "Oppo Pad Air",
      brand: "Oppo",
      price: 17999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=20",
          urlName: "Oppo Pad Air",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "China",
    },
    {
      id: 16,
      name: "Vivo Pad 2",
      brand: "Vivo",
      price: 32999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=21",
          urlName: "Vivo Pad 2",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "China",
    },
    {
      id: 17,
      name: "Asus ROG Flow Z13",
      brand: "Asus",
      price: 139999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=22",
          urlName: "ROG Flow Z13",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Taiwan",
    },
    {
      id: 18,
      name: "iPad Mini (6th Gen)",
      brand: "Apple",
      price: 64999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=23",
          urlName: "iPad Mini 6",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 19,
      name: "Alcatel 3T 10",
      brand: "Alcatel",
      price: 14999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=24",
          urlName: "Alcatel 3T 10",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "France",
    },
    {
      id: 20,
      name: "TCL Tab 10s",
      brand: "TCL",
      price: 17999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=25",
          urlName: "TCL Tab 10s",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "China",
    },
    {
      id: 21,
      name: "Honor Pad X9",
      brand: "Honor",
      price: 18999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=26",
          urlName: "Honor Pad X9",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "China",
    },
    {
      id: 22,
      name: "Micromax Canvas Tab P681",
      brand: "Micromax",
      price: 10999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=27",
          urlName: "Canvas Tab P681",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "India",
    },
    {
      id: 23,
      name: "HTC A100",
      brand: "HTC",
      price: 18999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=28",
          urlName: "HTC A100",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Taiwan",
    },
    {
      id: 24,
      name: "ZTE Axon Pad",
      brand: "ZTE",
      price: 29999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=29",
          urlName: "ZTE Axon Pad",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "China",
    },
    {
      id: 25,
      name: "Panasonic Tab 8 HD",
      brand: "Panasonic",
      price: 8999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=30",
          urlName: "Panasonic Tab 8 HD",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "Japan",
    },
    {
      id: 26,
      name: "iPad (10th Gen)",
      brand: "Apple",
      price: 44999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=31",
          urlName: "iPad 10th Gen",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 27,
      name: "Galaxy Tab S6 Lite",
      brand: "Samsung",
      price: 30999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=32",
          urlName: "Tab S6 Lite",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "South Korea",
    },
    {
      id: 28,
      name: "Chuwi HiPad Max",
      brand: "Chuwi",
      price: 17999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=33",
          urlName: "HiPad Max",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "China",
    },
    {
      id: 29,
      name: "Blackview Tab 11",
      brand: "Blackview",
      price: 16999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=34",
          urlName: "Blackview Tab 11",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Hong Kong",
    },
    {
      id: 30,
      name: "Teclast T40 Pro",
      brand: "Teclast",
      price: 21999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=35",
          urlName: "Teclast T40 Pro",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "China",
    },
  ],
  laptop: [
    {
      id: 1,
      name: "MacBook Air M2",
      brand: "Apple",
      price: 114999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=11",
          urlName: "MacBook Air M2",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 2,
      name: "Dell XPS 13",
      brand: "Dell",
      price: 134999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=12",
          urlName: "Dell XPS 13",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "USA",
    },
    {
      id: 3,
      name: "HP Spectre x360",
      brand: "HP",
      price: 124999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=13",
          urlName: "HP Spectre x360",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 4,
      name: "Asus ROG Zephyrus G14",
      brand: "Asus",
      price: 139999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=14",
          urlName: "Asus ROG Zephyrus G14",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Taiwan",
    },
    {
      id: 5,
      name: "Lenovo Legion 5",
      brand: "Lenovo",
      price: 99999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=15",
          urlName: "Lenovo Legion 5",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "China",
    },
    {
      id: 6,
      name: "MacBook Pro M3",
      brand: "Apple",
      price: 189999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=16",
          urlName: "MacBook Pro M3",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 7,
      name: "Dell Inspiron 15",
      brand: "Dell",
      price: 58999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=17",
          urlName: "Dell Inspiron 15",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "USA",
    },
    {
      id: 8,
      name: "HP Envy 13",
      brand: "HP",
      price: 86999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=18",
          urlName: "HP Envy 13",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "India",
    },
    {
      id: 9,
      name: "Asus ZenBook 14",
      brand: "Asus",
      price: 79999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=19",
          urlName: "Asus ZenBook 14",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Taiwan",
    },
    {
      id: 10,
      name: "Lenovo Yoga Slim 7",
      brand: "Lenovo",
      price: 87999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=20",
          urlName: "Lenovo Yoga Slim 7",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "China",
    },
    {
      id: 11,
      name: "Acer Swift 3",
      brand: "Acer",
      price: 67999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=21",
          urlName: "Acer Swift 3",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "Taiwan",
    },
    {
      id: 12,
      name: "MSI Modern 14",
      brand: "MSI",
      price: 61999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=22",
          urlName: "MSI Modern 14",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Taiwan",
    },
    {
      id: 13,
      name: "Samsung Galaxy Book 3",
      brand: "Samsung",
      price: 94999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=23",
          urlName: "Samsung Galaxy Book 3",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "South Korea",
    },
    {
      id: 14,
      name: "Microsoft Surface Laptop 5",
      brand: "Microsoft",
      price: 129999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=24",
          urlName: "Surface Laptop 5",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "USA",
    },
    {
      id: 15,
      name: "LG Gram 16",
      brand: "LG",
      price: 122999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=25",
          urlName: "LG Gram 16",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "South Korea",
    },
    {
      id: 16,
      name: "Avita Liber V14",
      brand: "Avita",
      price: 45999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=26",
          urlName: "Avita Liber V14",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Hong Kong",
    },
    {
      id: 17,
      name: "Xiaomi Notebook Pro",
      brand: "Xiaomi",
      price: 69999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=27",
          urlName: "Xiaomi Notebook Pro",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "China",
    },
    {
      id: 18,
      name: "Infinix Zero Book Ultra",
      brand: "Infinix",
      price: 49999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=28",
          urlName: "Infinix Zero Book Ultra",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Hong Kong",
    },
    {
      id: 19,
      name: "Honor MagicBook X14",
      brand: "Honor",
      price: 56999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=29",
          urlName: "Honor MagicBook X14",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "China",
    },
    {
      id: 20,
      name: "Fujitsu UH-X",
      brand: "Fujitsu",
      price: 87999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=30",
          urlName: "Fujitsu UH-X",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "Japan",
    },
    {
      id: 21,
      name: "Toshiba Dynabook Satellite",
      brand: "Toshiba",
      price: 55999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=31",
          urlName: "Toshiba Dynabook Satellite",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Japan",
    },
    {
      id: 22,
      name: "Chuwi GemiBook Pro",
      brand: "Chuwi",
      price: 38999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=32",
          urlName: "Chuwi GemiBook Pro",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "China",
    },
    {
      id: 23,
      name: "Vaio E15",
      brand: "Vaio",
      price: 65999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=33",
          urlName: "Vaio E15",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "Japan",
    },
    {
      id: 24,
      name: "Realme Book Prime",
      brand: "Realme",
      price: 47999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=34",
          urlName: "Realme Book Prime",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 25,
      name: "iBall CompBook M500",
      brand: "iBall",
      price: 18999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=35",
          urlName: "iBall CompBook M500",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "India",
    },
    {
      id: 26,
      name: "Razer Blade 14",
      brand: "Razer",
      price: 189999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=36",
          urlName: "Razer Blade 14",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "USA",
    },
    {
      id: 27,
      name: "Gigabyte Aorus 15",
      brand: "Gigabyte",
      price: 129999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=37",
          urlName: "Gigabyte Aorus 15",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Taiwan",
    },
    {
      id: 28,
      name: "Alienware m15 R7",
      brand: "Dell",
      price: 179999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=38",
          urlName: "Alienware m15 R7",
        },
      ],
      inStock: false,
      availability: "Out of stock",
      country: "USA",
    },
    {
      id: 29,
      name: "HP Pavilion Plus 14",
      brand: "HP",
      price: 78999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=39",
          urlName: "HP Pavilion Plus 14",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "India",
    },
    {
      id: 30,
      name: "Asus TUF Gaming F15",
      brand: "Asus",
      price: 89999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=40",
          urlName: "TUF Gaming F15",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Taiwan",
    },
    {
      id: 31,
      name: "Asus TUF Gaming F15",
      brand: "Asus",
      price: 89999,
      image: [
        {
          url: "https://picsum.photos/500/300?random=41",
          urlName: "TUF Gaming F15",
        },
      ],
      inStock: true,
      availability: "In stock",
      country: "Taiwan",
    },
  ],
};
export default products;
