export const MOCK_PRODUCTS = [
  {
    id: 'phone-1',
    name: 'iPhone 15 Pro Max',
    category: 'Mobiles',
    brand: 'Apple',
    price: 134900,
    oldPrice: 144900,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Flagship',
    image: '/images/hero_flagship.png',
    inStock: true,
    specs: {
      screen: '6.7" Super Retina XDR OLED 120Hz',
      chipset: 'A17 Pro (3nm)',
      camera: '48MP Triple Lens + 5x Optical Zoom',
      battery: '4422 mAh | 20W Fast Charge',
      storage: '256GB / 512GB / 1TB'
    },
    description: 'Titanium design with textured matte glass back, Action Button, and groundbreaking graphics performance for mobile gaming.'
  },
  {
    id: 'phone-2',
    name: 'Samsung Galaxy S24 Ultra',
    category: 'Mobiles',
    brand: 'Samsung',
    price: 129999,
    oldPrice: 139999,
    rating: 4.9,
    reviewsCount: 118,
    badge: 'Galaxy AI',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    specs: {
      screen: '6.8" Dynamic AMOLED 2X 120Hz',
      chipset: 'Snapdragon 8 Gen 3 for Galaxy',
      camera: '200MP Quad Camera + Galaxy AI',
      battery: '5000 mAh | 45W Super Fast',
      storage: '256GB / 512GB'
    },
    description: 'Built with titanium armor and integrated S Pen. Revolutionary Galaxy AI photo editing and live call translation.'
  },
  {
    id: 'phone-3',
    name: 'Google Pixel 8 Pro',
    category: 'Mobiles',
    brand: 'Google',
    price: 84999,
    oldPrice: 93999,
    rating: 4.8,
    reviewsCount: 89,
    badge: 'Pro Camera',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    specs: {
      screen: '6.7" LTPO OLED 120Hz Brightness 2400 nits',
      chipset: 'Google Tensor G3',
      camera: '50MP + 48MP Ultrawide + 48MP Telephoto',
      battery: '5050 mAh | 30W Fast Charge',
      storage: '128GB / 256GB'
    },
    description: 'Engineered by Google with AI at its core. Incredible computational photography and Magic Editor capabilities.'
  },
  {
    id: 'phone-4',
    name: 'OnePlus 12 5G',
    category: 'Mobiles',
    brand: 'OnePlus',
    price: 64999,
    oldPrice: 69999,
    rating: 4.7,
    reviewsCount: 64,
    badge: '100W Charge',
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    specs: {
      screen: '6.82" 2K 120Hz ProXDR Display',
      chipset: 'Snapdragon 8 Gen 3',
      camera: '4th Gen Hasselblad Camera System',
      battery: '5400 mAh | 80W / 100W SUPERVOOC',
      storage: '256GB / 512GB'
    },
    description: 'Extreme speed and fluid display with Hasselblad camera tuned colors and ultra-fast 100W wired charging.'
  },
  {
    id: 'acc-1',
    name: 'MagSafe Armor Leather Case',
    category: 'Accessories',
    brand: 'NexusCraft',
    price: 2499,
    oldPrice: 3499,
    rating: 4.9,
    reviewsCount: 230,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    specs: {
      material: 'Genuine Italian Grain Leather & TPU',
      magnetStrength: 'N52 Neodymium Magnetic Ring',
      protection: '10ft Military-Grade Drop Tested',
      compatibility: 'iPhone 15 & 14 Series'
    },
    description: 'Ultra-thin profile with reinforced corner air-cushions and built-in strong magnetic ring for instant wireless charging.'
  },
  {
    id: 'acc-2',
    name: '65W Dual USB-C GaN Fast Charger',
    category: 'Power',
    brand: 'Anker',
    price: 2999,
    oldPrice: 3999,
    rating: 4.9,
    reviewsCount: 310,
    badge: 'GaN III',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    specs: {
      powerOutput: '65W Max USB Power Delivery 3.0',
      ports: '2x USB-C + 1x USB-A',
      tech: 'Gallium Nitride III Semiconductor',
      compatibility: 'MacBook, iPad, iPhone, Android'
    },
    description: 'Compact pocket-sized fast charger capable of charging a phone to 60% in just 25 minutes simultaneously.'
  },
  {
    id: 'acc-3',
    name: 'Pro ANC Wireless Earbuds',
    category: 'Audio',
    brand: 'NexusAudio',
    price: 8999,
    oldPrice: 11999,
    rating: 4.8,
    reviewsCount: 175,
    badge: 'Noise Cancel',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    specs: {
      anc: '45dB Hybrid Active Noise Cancellation',
      batteryLife: '36 Hours Total with Wireless Case',
      waterproof: 'IPX5 Sweat & Water Resistant',
      bluetooth: 'v5.3 Low Latency Codec'
    },
    description: 'Spatial audio with head tracking, crystal clear dual beamforming mics for calls, and intuitive touch gesture controls.'
  },
  {
    id: 'acc-4',
    name: '10,000mAh Magnetic Power Bank',
    category: 'Power',
    brand: 'Baseus',
    price: 3499,
    oldPrice: 4499,
    rating: 4.8,
    reviewsCount: 92,
    badge: 'Wireless Snap',
    image: 'https://images.unsplash.com/photo-1622445268465-843836406857?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    specs: {
      capacity: '10,000mAh Lithium Polymer',
      wirelessSpeed: '15W Fast Magnetic Wireless',
      wiredOutput: '20W PD Type-C Port',
      stand: 'Built-in Foldable Metal Kickstand'
    },
    description: 'Snap onto the back of your phone for hands-free charging while watching movies or taking video calls.'
  },
  {
    id: 'acc-5',
    name: '9H Sapphire Glass Screen Protector',
    category: 'Accessories',
    brand: 'GlassPro',
    price: 799,
    oldPrice: 1299,
    rating: 4.9,
    reviewsCount: 410,
    badge: 'Anti-Scratch',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    specs: {
      hardness: '9H Synthetic Sapphire Coating',
      clarity: '99.99% HD Optical Translucency',
      installation: 'Includes Auto-Alignment Frame',
      touchResponse: '0.1mm Ultra-thin Oleophobic'
    },
    description: 'Explosion-proof tempered glass with privacy filter options and bubble-free 30-second applicator box included.'
  }
];

export const MOCK_REPAIR_SERVICES = [
  {
    id: 'rep-screen',
    title: 'OLED / LCD Screen Replacement',
    icon: 'Smartphone',
    platform: 'Android & iOS',
    estTime: '20 - 30 Mins',
    startingPrice: 2499,
    warranty: '6 Months',
    highlights: ['Original Grade OLED Panels', 'True Tone & Touch Calibration', 'Free Tempered Glass Protector'],
    popularFor: ['iPhone 11 - 15 Series', 'Samsung S21 - S24 Ultra', 'Pixel 6 - 8 Pro', 'OnePlus & Xiaomi']
  },
  {
    id: 'rep-battery',
    title: 'High-Capacity Battery Replacement',
    icon: 'Zap',
    platform: 'Android & iOS',
    estTime: '15 - 25 Mins',
    startingPrice: 1499,
    warranty: '1 Year Warranty',
    highlights: ['0-Cycle Original Cells', 'Battery Health Status Restoration', 'Overheat & Short Protection'],
    popularFor: ['iPhone 8 - 14 Pro Max', 'Galaxy Note/S Series', 'Pixel & Motorola Devices']
  },
  {
    id: 'rep-water',
    title: 'Water & Fluid Damage Restoration',
    icon: 'Droplets',
    platform: 'Android & iOS',
    estTime: '2 - 4 Hours',
    startingPrice: 1999,
    warranty: '90 Days',
    highlights: ['Ultrasonic Chemical Bath', 'Corrosion Removal', 'Chip-level Data Recovery'],
    popularFor: ['All Smartphone Models', 'Tablets & iPads']
  },
  {
    id: 'rep-board',
    title: 'Motherboard IC & Micro-Soldering',
    icon: 'Cpu',
    platform: 'Android & iOS',
    estTime: 'Same Day Service',
    startingPrice: 2999,
    warranty: '6 Months',
    highlights: ['Audio IC & Touch IC Fix', 'Baseband / No Signal Repair', 'Short Circuit Tracing'],
    popularFor: ['Dead Boot Mobiles', 'iPhone Sandwich Board Separation', 'Samsung Exynos/Snapdragon IC']
  },
  {
    id: 'rep-camera',
    title: 'Camera Lens & Sensor Fix',
    icon: 'Camera',
    platform: 'Android & iOS',
    estTime: '30 Mins',
    startingPrice: 1299,
    warranty: '6 Months',
    highlights: ['Blurry Focus Motor Repair', 'Shattered Lens Glass Swapping', 'OIS Vibration Fix'],
    popularFor: ['iPhone 12/13/14/15 Pro', 'Galaxy Ultra Cameras']
  },
  {
    id: 'rep-port',
    title: 'Charging Port & Speaker Repair',
    icon: 'Plug',
    platform: 'Android & iOS',
    estTime: '20 Mins',
    startingPrice: 899,
    warranty: '6 Months',
    highlights: ['Flex Cable Replacement', 'Type-C / Lightning Port Clean', 'Earpiece Dust Grill Swap'],
    popularFor: ['Slow Charging Devices', 'Loose Cable Connection Fix']
  }
];

export const MOCK_TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Verified Buyer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'Brought my cracked iPhone 15 Pro Max here. Fixed in 22 minutes right in front of me! Screen is genuine OLED with TrueTone. Ultra impressed!',
    rating: 5,
    device: 'iPhone 15 Pro Max'
  },
  {
    id: 2,
    name: 'Ananya Patel',
    role: 'Tech Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: 'Purchased the Galaxy S24 Ultra with their MagSafe armor case. Best prices in town, excellent warranty, and zero fuss.',
    rating: 5,
    device: 'Galaxy S24 Ultra'
  },
  {
    id: 3,
    name: 'Vikram Malhotra',
    role: 'Business Owner',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    comment: 'Water damaged my phone before a huge presentation. Their ultrasonic recovery saved all my business contacts and photos. Pure lifesavers!',
    rating: 5,
    device: 'Google Pixel 8 Pro'
  }
];
