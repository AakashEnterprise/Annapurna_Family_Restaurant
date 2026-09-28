// Pure Vanilla JavaScript Application Logic for Annpurna Family Restaurant (Mobile UX Optimized)

// ==================== 1. MENU DATABASE ====================
const CATEGORIES = [
  { id: "all", name: "All Dishes" },
  { id: "signature", name: "Annapurna Specials" },
  { id: "thali", name: "Thalis & Combos" },
  { id: "kathiyawadi", name: "Kathiyawadi & Gujarati" },
  { id: "punjabi", name: "Punjabi & North Indian" },
  { id: "rajasthani", name: "Rajasthani Delights" },
  { id: "dal-khichdi", name: "Dal, Kadhi & Khichdi" },
  { id: "roti-bread", name: "Rotla & Indian Breads" },
  { id: "rice-biryani", name: "Rice & Biryani" },
  { id: "south-indian", name: "South Indian" },
  { id: "chinese", name: "Indo-Chinese" },
  { id: "farsan-snacks", name: "Farsan & Snacks" },
  { id: "chaat", name: "Street Chaat" },
  { id: "healthy", name: "Healthy & Millets" },
  { id: "beverages", name: "Chaas & Beverages" },
  { id: "desserts", name: "Traditional Sweets" },
];

const DIETARY_FILTERS = [
  { id: "all", label: "All Items" },
  { id: "bestseller", label: "🔥 Bestsellers" },
  { id: "signature", label: "✨ Chef's Special" },
  { id: "jain", label: "🌱 Jain Available" },
  { id: "vegan", label: "🌿 Pure Vegan" },
  { id: "spicy", label: "🌶️ Spicy" },
  { id: "healthy", label: "🌾 Healthy Grains" },
];

const MENU_ITEMS = [
  // --- ANNAPURNA SPECIALS ---
  {
    id: "annpurna-spl-paneer",
    category: "signature",
    subcategory: "Chef's Creation",
    name: "Annapurna Special Paneer",
    description: "Chef's pride! Fresh cottage cheese cubes simmered in a velvety spinach & cashew gravy infused with saffron & secret royal spices.",
    price: 290,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    jain: true, vegan: false, spicy: false, popular: true, signature: true, healthy: false
  },
  {
    id: "annpurna-ni-moj",
    category: "signature",
    subcategory: "Khambhaliya Specialty",
    name: "Annapurna Ni Moj",
    description: "An authentic local delight featuring stuffed paneer & dry fruit dumplings bathed in a rich, mild spicy onion-tomato garlic gravy.",
    price: 310,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    jain: false, vegan: false, spicy: true, popular: true, signature: true, healthy: false
  },

  // --- THALIS & COMBOS ---
  {
    id: "special-gujarati-thali",
    category: "thali",
    subcategory: "Full Feast",
    name: "Special Gujarati Thali",
    description: "3 Seasonal Veggies (Kathiyawadi/Gujarati), Gujarati Sweet Dal, Kadhi, Steamed Basmati Rice, 4 Phulka / 2 Bajra Rotla, Garlic Chutney, Papad, Salad, Masala Chaas & Sweet of the Day.",
    price: 280,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    jain: true, vegan: false, spicy: false, popular: true, signature: true, healthy: true
  },
  {
    id: "kathiyawadi-thali-royal",
    category: "thali",
    subcategory: "Regional Feast",
    name: "Authentic Kathiyawadi Thali",
    description: "Sev Tameta, Lasaniya Bateta, Ringan No Olo, Kathiyawadi Spicy Kadhi, Khichdi, 2 Bajra Rotla with Fresh Homemade White Butter, Raw Jaggery, Pungent Garlic Chutney & Chilled Masala Chaas.",
    price: 320,
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
    jain: false, vegan: false, spicy: true, popular: true, signature: true, healthy: true
  },
  {
    id: "rajasthani-thali",
    category: "thali",
    subcategory: "Royal Feast",
    name: "Royal Rajasthani Thali",
    description: "4 Crisp Baati, Panchmel Dal, Sweet Churma, Gatte Ki Sabzi, Rajasthani Kadhi, 2 Bajre Ki Roti, Fried Red Chilli Chutney & Sweet Lassi.",
    price: 340,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    jain: false, vegan: false, spicy: true, popular: false, signature: false, healthy: false
  },

  // --- KATHIYAWADI & GUJARATI ---
  {
    id: "sev-tameta",
    category: "kathiyawadi",
    subcategory: "Curry",
    name: "Sev Tameta Nu Shaak",
    description: "Juicy, sweet & tangy tomato curry cooked with aromatic spices, topped with crispy spiced gram flour sev right before serving.",
    price: 180,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    jain: true, vegan: false, spicy: true, popular: true, signature: false, healthy: false
  },
  {
    id: "lasaniya-bateta",
    category: "kathiyawadi",
    subcategory: "Curry",
    name: "Lasaniya Bateta",
    description: "Tender baby potatoes roasted and simmered in a red chilli and pungent fresh garlic red gravy. A staple of Kathiyawad.",
    price: 190,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    jain: false, vegan: true, spicy: true, popular: true, signature: false, healthy: false
  },
  {
    id: "ringan-olo",
    category: "kathiyawadi",
    subcategory: "Curry",
    name: "Ringan No Olo (Baingan Bharta)",
    description: "Smokey wood-fire roasted eggplant mashed and sautéed with green chillies, garlic, mustard seeds, and fresh spring onions.",
    price: 210,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    jain: false, vegan: true, spicy: true, popular: true, signature: true, healthy: true
  },
  {
    id: "bharela-ringan-bateta",
    category: "kathiyawadi",
    subcategory: "Curry",
    name: "Bharela Ringan Bateta",
    description: "Baby eggplants and potato wedges stuffed with roasted spice mix, sesame seeds, peanuts, and jaggery.",
    price: 200,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
    jain: false, vegan: false, spicy: false, popular: false, signature: false, healthy: true
  },
  {
    id: "dal-dhokli",
    category: "kathiyawadi",
    subcategory: "Traditional Meal",
    name: "Gujarati Dal Dhokli",
    description: "Comfort food classic! Whole wheat dumplings cooked in sweet, sour, spiced sweet pigeon pea dal with peanuts & ghee temper.",
    price: 190,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    jain: true, vegan: false, spicy: false, popular: true, signature: false, healthy: true
  },

  // --- PUNJABI & NORTH INDIAN ---
  {
    id: "paneer-butter-masala",
    category: "punjabi",
    subcategory: "Main Course",
    name: "Paneer Butter Masala",
    description: "Soft cottage cheese cubes in a smooth, creamy, mildly sweet tomato and cashew nut gravy enriched with butter and kasuri methi.",
    price: 250,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    jain: true, vegan: false, spicy: false, popular: true, signature: false, healthy: false
  },
  {
    id: "paneer-tikka-masala",
    category: "punjabi",
    subcategory: "Main Course",
    name: "Paneer Tikka Masala",
    description: "Char-grilled tandoori paneer tikka pieces tossed in a fiery, aromatic onion-tomato spiced gravy with diced capsicum.",
    price: 260,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    jain: false, vegan: false, spicy: true, popular: true, signature: false, healthy: false
  },
  {
    id: "dal-makhani",
    category: "punjabi",
    subcategory: "Main Course",
    name: "Amritsari Dal Makhani",
    description: "Black lentils and kidney beans slow-cooked overnight on charcoal flames, finished with churned butter and fresh cream.",
    price: 220,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    jain: true, vegan: false, spicy: false, popular: true, signature: false, healthy: false
  },

  // --- RAJASTHANI ---
  {
    id: "dal-baati-churma",
    category: "rajasthani",
    subcategory: "Specialty",
    name: "Dal Baati Churma (Set of 4 Baati)",
    description: "Authentic baked wheat flour baatis dipped in pure cow ghee, served with spicy Panchmel Dal and sweet cardamom churma.",
    price: 250,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    jain: false, vegan: false, spicy: true, popular: true, signature: true, healthy: false
  },
  {
    id: "gatte-ki-sabzi",
    category: "rajasthani",
    subcategory: "Curry",
    name: "Rajasthani Gatte Ki Sabzi",
    description: "Tender steamed gram flour logs simmered in a spiced yogurt-based gravy seasoned with mustard, hing and dry red chillies.",
    price: 210,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    jain: false, vegan: false, spicy: true, popular: false, signature: false, healthy: true
  },

  // --- DAL, KADHI & KHICHDI ---
  {
    id: "dal-tadka",
    category: "dal-khichdi",
    subcategory: "Dal",
    name: "Yellow Dal Tadka",
    description: "Yellow arhar dal tempered with ghee, cumin seeds, garlic, green chillies, tomatoes, and fresh coriander leaves.",
    price: 180,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    jain: true, vegan: false, spicy: false, popular: true, signature: false, healthy: true
  },
  {
    id: "kathiyawadi-kadhi",
    category: "dal-khichdi",
    subcategory: "Kadhi",
    name: "Spicy Kathiyawadi Kadhi",
    description: "Hot, spicy yogurt soup tempered with fenugreek seeds, cloves, cinnamon, curry leaves, and green chillies.",
    price: 140,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    jain: false, vegan: false, spicy: true, popular: true, signature: false, healthy: true
  },

  // --- ROTLA & BREADS ---
  {
    id: "bajra-rotla-white-butter",
    category: "roti-bread",
    subcategory: "Hand-patted Rotla",
    name: "Bajra Rotla with Homemade White Butter",
    description: "Freshly hand-pressed pearl millet flatbread baked on clay tawa, served hot topped with homemade white butter (makhan) & raw jaggery.",
    price: 60,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
    jain: true, vegan: false, spicy: false, popular: true, signature: true, healthy: true
  },
  {
    id: "jowar-rotla",
    category: "roti-bread",
    subcategory: "Rotla",
    name: "Organic Jowar Rotla",
    description: "Gluten-free sorghum flatbread patted by hand and roasted over traditional earthenware.",
    price: 50,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
    jain: true, vegan: true, spicy: false, popular: false, signature: false, healthy: true
  },
  {
    id: "garlic-naan",
    category: "roti-bread",
    subcategory: "Tandoori Bread",
    name: "Garlic Butter Naan",
    description: "Tandoor-baked naan coated with minced garlic, chopped coriander leaves, and clarified butter.",
    price: 70,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    jain: false, vegan: false, spicy: false, popular: true, signature: false, healthy: false
  },

  // --- RICE & BIRYANI ---
  {
    id: "veg-hyderabadi-biryani",
    category: "rice-biryani",
    subcategory: "Biryani",
    name: "Hyderabadi Dum Veg Biryani",
    description: "Long grain fragrant Basmati rice dum-cooked with layered marinated vegetables, mint, saffron & whole spices.",
    price: 240,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    jain: false, vegan: false, spicy: true, popular: true, signature: true, healthy: false
  },

  // --- SOUTH INDIAN ---
  {
    id: "masala-dosa",
    category: "south-indian",
    subcategory: "Dosa",
    name: "Crispy Golden Masala Dosa",
    description: "Thin fermented rice-crepe stuffed with spiced potato mash & green peas. Served with hot Sambar & Coconut Chutney.",
    price: 160,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    jain: false, vegan: true, spicy: false, popular: true, signature: false, healthy: true
  },

  // --- INDO-CHINESE ---
  {
    id: "veg-hakka-noodles",
    category: "chinese",
    subcategory: "Noodles",
    name: "Veg Hakka Noodles",
    description: "Wok-tossed noodles with crunchy julienned bell peppers, cabbage, carrots, spring onions, and soya sauce.",
    price: 180,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
    jain: true, vegan: true, spicy: false, popular: true, signature: false, healthy: false
  },

  // --- FARSAN & CHAAT ---
  {
    id: "khaman-dhokla",
    category: "farsan-snacks",
    subcategory: "Gujarati Farsan",
    name: "Nylon Khaman Dhokla",
    description: "Soft, spongy steamed gram flour cakes tempered with mustard seeds, curry leaves, green chillies & grated coconut.",
    price: 90,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    jain: true, vegan: true, spicy: false, popular: true, signature: false, healthy: true
  },
  {
    id: "pani-puri",
    category: "chaat",
    subcategory: "Street Food",
    name: "Khambhaliya Special Pani Puri (8 Pcs)",
    description: "Crispy hollow puri shells filled with spiced ragda/potato mash, served with ice-cold mint-corridor spiced water & sweet tamarind chutney.",
    price: 60,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    jain: true, vegan: true, spicy: true, popular: true, signature: false, healthy: false
  },

  // --- BEVERAGES & DESSERTS ---
  {
    id: "masala-chaas",
    category: "beverages",
    subcategory: "Digestive",
    name: "Chilled Masala Chaas",
    description: "Freshly churned curd buttermilk seasoned with roasted cumin powder, black salt, mint leaves, and green chilli hint.",
    price: 40,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
    jain: true, vegan: false, spicy: false, popular: true, signature: true, healthy: true
  },
  {
    id: "kesar-shrikhand",
    category: "desserts",
    subcategory: "Gujarati Sweet",
    name: "Kesar Elaichi Shrikhand",
    description: "Traditional strained yogurt dessert flavored with pure Kashmiri saffron strands, green cardamom, and almonds.",
    price: 90,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
    jain: true, vegan: false, spicy: false, popular: true, signature: true, healthy: false
  }
];

const FAQS = [
  {
    q: "What are your restaurant opening hours?",
    a: "Annpurna Family Restaurant is open every day (Monday through Sunday) from 11:00 AM to 11:00 PM for dine-in, takeaway pickup, and online home delivery."
  },
  {
    q: "Do you deliver throughout Khambhaliya?",
    a: "Yes! We offer home delivery across Khambhaliya town including Station Road, Bus Stand area, GIDC, Dwarka Highway junction, and residential colonies."
  },
  {
    q: "Are Jain food options available?",
    a: "Absolutly. We offer a dedicated range of 100% Pure Jain dishes cooked without onion, garlic, or root vegetables. Look for the 'Jain' tag on our online menu."
  },
  {
    q: "Can I place bulk orders for family functions or office lunch?",
    a: "Yes! We specialize in bulk Thali boxes and catering packs for family celebrations, pilgrimage groups, and corporate meetings. Call us directly at +91 98252 84920."
  }
];

// ==================== 2. APPLICATION STATE ====================
let cart = {}; // { [dishId]: quantity }
let activeCategory = "all";
let activeDietaryFilter = "all";
let searchQuery = "";
let orderType = "delivery"; // 'delivery' | 'pickup'

// ==================== 3. EVENT LISTENERS & DOM INIT ====================
document.addEventListener("DOMContentLoaded", () => {
  initUI();
});

function initUI() {
  renderSignatureGrid();
  renderDietaryFilters();
  renderCategoryNav();
  renderMenu();
  renderFaqs();
  setupEventListeners();
  updateCartUI();
}

function setupEventListeners() {
  // Mobile drawer toggle
  document.getElementById("toggleMobileMenuBtn").addEventListener("click", () => {
    const drawer = document.getElementById("mobileDrawerNav");
    drawer.classList.toggle("hidden");
  });

  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("mobileDrawerNav").classList.add("hidden");
    });
  });

  // Cart Modal Open/Close
  const openCartHandler = () => openModal("cartModal");
  document.getElementById("openCartBtn").addEventListener("click", openCartHandler);
  document.getElementById("openMobileCartBtn").addEventListener("click", openCartHandler);
  document.getElementById("drawerCartBtn").addEventListener("click", () => {
    document.getElementById("mobileDrawerNav").classList.add("hidden");
    openModal("cartModal");
  });
  document.getElementById("stickyViewOrderBtn").addEventListener("click", openCartHandler);
  document.getElementById("closeCartBtn").addEventListener("click", () => closeModal("cartModal"));

  // Checkout Modal Open/Close
  document.getElementById("proceedToCheckoutBtn").addEventListener("click", () => {
    closeModal("cartModal");
    openModal("checkoutModal");
  });
  document.getElementById("closeCheckoutBtn").addEventListener("click", () => closeModal("checkoutModal"));

  // Confirmation Modal Close
  document.getElementById("closeConfirmationBtn").addEventListener("click", () => {
    closeModal("confirmationModal");
  });

  // Search input listeners
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (searchQuery) {
      clearSearchBtn.classList.remove("hidden");
    } else {
      clearSearchBtn.classList.add("hidden");
    }
    renderMenu();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.classList.add("hidden");
    renderMenu();
  });

  // Cart Modal Order Type Toggles
  document.getElementById("cartDeliveryToggle").addEventListener("click", () => setOrderType('delivery'));
  document.getElementById("cartPickupToggle").addEventListener("click", () => setOrderType('pickup'));

  // Checkout Form Order Type Toggles
  document.getElementById("chkDeliveryBtn").addEventListener("click", () => setOrderType('delivery'));
  document.getElementById("chkPickupBtn").addEventListener("click", () => setOrderType('pickup'));

  // Checkout Form Submission
  document.getElementById("checkoutForm").addEventListener("submit", handleCheckoutSubmit);
}

function setOrderType(type) {
  orderType = type;
  const isDel = type === 'delivery';

  // Update Cart Modal Toggles
  const cDel = document.getElementById("cartDeliveryToggle");
  const cPick = document.getElementById("cartPickupToggle");
  if (isDel) {
    cDel.className = "flex-1 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all bg-brand-green text-white shadow-xs";
    cPick.className = "flex-1 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all bg-white text-slate-600 hover:bg-slate-100 border border-slate-200";
  } else {
    cPick.className = "flex-1 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all bg-brand-green text-white shadow-xs";
    cDel.className = "flex-1 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all bg-white text-slate-600 hover:bg-slate-100 border border-slate-200";
  }

  // Update Checkout Form Toggles
  const chkDel = document.getElementById("chkDeliveryBtn");
  const chkPick = document.getElementById("chkPickupBtn");
  if (isDel) {
    chkDel.className = "py-2.5 px-3 rounded-xl text-xs font-extrabold uppercase tracking-wider border bg-brand-green text-white border-brand-green shadow-xs";
    chkPick.className = "py-2.5 px-3 rounded-xl text-xs font-extrabold uppercase tracking-wider border bg-slate-50 text-slate-600 border-slate-200";
    document.getElementById("addressGroup").classList.remove("hidden");
    document.getElementById("landmarkGroup").classList.remove("hidden");
    document.getElementById("pickupTimeGroup").classList.add("hidden");
  } else {
    chkPick.className = "py-2.5 px-3 rounded-xl text-xs font-extrabold uppercase tracking-wider border bg-brand-green text-white border-brand-green shadow-xs";
    chkDel.className = "py-2.5 px-3 rounded-xl text-xs font-extrabold uppercase tracking-wider border bg-slate-50 text-slate-600 border-slate-200";
    document.getElementById("addressGroup").classList.add("hidden");
    document.getElementById("landmarkGroup").classList.add("hidden");
    document.getElementById("pickupTimeGroup").classList.remove("hidden");
  }

  updateCartUI();
}

function openModal(modalId) {
  document.getElementById(modalId).classList.remove("hidden");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add("hidden");
}

// ==================== 4. RENDERING FUNCTIONS ====================

// Render Signature Dishes Grid (Compact mobile cards + desktop grid)
function renderSignatureGrid() {
  const container = document.getElementById("signatureGrid");
  const signatureItems = MENU_ITEMS.filter(item => item.signature || item.popular).slice(0, 6);

  container.innerHTML = signatureItems.map(dish => {
    const qty = cart[dish.id] || 0;
    return `
      <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-row sm:flex-col justify-between group hover:shadow-md hover:border-green-300 transition-all p-3 sm:p-0">
        <!-- Compact image on mobile (28x28 / 32x32 square), Full image on desktop -->
        <div class="relative w-28 h-28 sm:w-full sm:h-48 rounded-xl sm:rounded-none shrink-0 overflow-hidden bg-slate-100">
          <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 flex flex-wrap gap-1">
            ${dish.signature ? `<span class="bg-brand-blue text-white px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider shadow-xs">Special</span>` : ''}
            ${dish.popular ? `<span class="bg-brand-green text-white px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider shadow-xs">Bestseller</span>` : ''}
          </div>
          <div class="hidden sm:block absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-0.5 rounded-full text-xs font-black text-slate-900 border border-slate-200">₹${dish.price}</div>
        </div>

        <div class="flex-1 sm:p-5 flex flex-col justify-between space-y-2 sm:space-y-4 pl-3 sm:pl-5">
          <div>
            <div class="flex items-center justify-between gap-1.5 mb-1">
              <div class="flex items-center gap-1.5">
                <span class="veg-symbol"></span>
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">${dish.subcategory}</span>
              </div>
              <div class="flex items-center gap-1 text-[9px]">
                ${dish.jain ? `<span class="text-emerald-800 bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-200">Jain</span>` : ''}
                ${dish.spicy ? `<span class="text-red-800 bg-red-50 px-1.5 py-0.2 rounded-full border border-red-200">🌶️</span>` : ''}
              </div>
            </div>
            <h3 class="text-base sm:text-lg font-extrabold text-slate-900 leading-snug group-hover:text-brand-blue transition-colors">${dish.name}</h3>
            <p class="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed hidden sm:block">${dish.description}</p>
            <div class="text-sm font-black text-brand-green sm:hidden pt-0.5">₹${dish.price}</div>
          </div>

          <div class="pt-2 sm:pt-3 border-t sm:border-slate-100 flex items-center justify-between">
            <span class="hidden sm:inline-block text-lg font-black text-brand-green">₹${dish.price}</span>
            <div class="dish-control-btn" data-id="${dish.id}">
              ${renderQtyButton(dish.id, qty)}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Render Dietary Filter Chips
function renderDietaryFilters() {
  const container = document.getElementById("dietaryFilterContainer");
  container.innerHTML = DIETARY_FILTERS.map(f => `
    <button onclick="setDietaryFilter('${f.id}')" class="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all ${
      activeDietaryFilter === f.id
        ? 'bg-brand-blue text-white shadow-xs'
        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
    }">
      ${f.label}
    </button>
  `).join('');
}

function setDietaryFilter(filterId) {
  activeDietaryFilter = filterId;
  renderDietaryFilters();
  renderMenu();
}

// Render Category Navigator Bar
function renderCategoryNav() {
  const container = document.getElementById("categoryNavContainer");
  container.innerHTML = CATEGORIES.map(cat => {
    const isActive = activeCategory === cat.id;
    return `
      <button onclick="selectCategory('${cat.id}')" class="shrink-0 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs uppercase font-extrabold tracking-wider transition-all flex items-center gap-2 ${
        isActive
          ? 'bg-brand-green text-white shadow-xs'
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
      }">
        <span>${cat.name}</span>
      </button>
    `;
  }).join('');
}

function selectCategory(catId) {
  activeCategory = catId;
  renderCategoryNav();
  renderMenu();

  if (catId !== 'all') {
    const target = document.getElementById(`category-${catId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Render Main Menu Items Grid
function renderMenu() {
  const container = document.getElementById("menuItemsContainer");

  const filteredDishes = MENU_ITEMS.filter(dish => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = dish.name.toLowerCase().includes(q);
      const matchDesc = dish.description.toLowerCase().includes(q);
      const matchSub = dish.subcategory.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchSub) return false;
    }

    if (activeDietaryFilter === 'bestseller' && !dish.popular) return false;
    if (activeDietaryFilter === 'signature' && !dish.signature) return false;
    if (activeDietaryFilter === 'jain' && !dish.jain) return false;
    if (activeDietaryFilter === 'vegan' && !dish.vegan) return false;
    if (activeDietaryFilter === 'spicy' && !dish.spicy) return false;
    if (activeDietaryFilter === 'healthy' && !dish.healthy) return false;

    return true;
  });

  if (filteredDishes.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center bg-white rounded-3xl border border-slate-200 p-6 space-y-3">
        <span class="material-symbols-outlined text-slate-300 text-[48px]">restaurant_menu</span>
        <h3 class="text-xl font-extrabold text-slate-900">No Matching Delicacies Found</h3>
        <p class="text-xs text-slate-500 max-w-md mx-auto">
          We couldn't find any dishes matching "${searchQuery}". Try searching for Paneer, Thali, Bajra Rotla, or Sev Tameta.
        </p>
        <button onclick="resetFilters()" class="bg-brand-green text-white px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider hover:bg-green-700">
          View All Menu Items
        </button>
      </div>
    `;
    return;
  }

  const categoriesToRender = activeCategory === 'all'
    ? CATEGORIES.filter(c => c.id !== 'all')
    : CATEGORIES.filter(c => c.id === activeCategory);

  container.innerHTML = categoriesToRender.map(cat => {
    const catDishes = filteredDishes.filter(dish => {
      if (cat.id === 'signature') return dish.signature;
      return dish.category === cat.id;
    });

    if (catDishes.length === 0) return '';

    return `
      <div id="category-${cat.id}" class="space-y-4 scroll-mt-36">
        <div class="flex items-center justify-between border-b border-slate-200 pb-2.5">
          <div class="flex items-center gap-2.5">
            <span class="w-3 h-3 rounded-full bg-brand-green inline-block"></span>
            <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900">${cat.name}</h3>
            <span class="text-[11px] text-brand-green font-extrabold bg-green-50 px-2.5 py-0.5 rounded-full border border-green-200">${catDishes.length} Items</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          ${catDishes.map(dish => renderDishCard(dish)).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Render Individual Compact Mobile Food Card (Thumbnail Left, Specs Center, Button Right)
function renderDishCard(dish) {
  const qty = cart[dish.id] || 0;
  return `
    <div class="bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-4 flex items-center justify-between gap-3 hover:border-green-300 transition-all shadow-xs">
      <!-- Compact thumbnail image on mobile (24x24 / 28x28 square) -->
      <div class="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-slate-100">
        <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover">
        ${dish.signature ? `<span class="absolute top-1 left-1 bg-brand-blue text-white text-[8px] font-extrabold uppercase px-1.5 py-0.2 rounded">Special</span>` : ''}
      </div>

      <!-- Dish Details Container -->
      <div class="flex-1 min-w-0 space-y-1">
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="veg-symbol"></span>
          <span class="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-500 truncate">${dish.subcategory}</span>
          ${dish.jain ? `<span class="text-[9px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-200">Jain</span>` : ''}
          ${dish.spicy ? `<span class="text-[9px] font-bold text-red-800 bg-red-50 px-1.5 py-0.2 rounded-full border border-red-200">🌶️</span>` : ''}
        </div>

        <h4 class="text-sm sm:text-base font-extrabold text-slate-900 leading-snug truncate">${dish.name}</h4>
        <p class="text-[11px] sm:text-xs text-slate-500 line-clamp-2 leading-tight">${dish.description}</p>
        
        <div class="flex items-center justify-between pt-1">
          <span class="text-sm sm:text-base font-black text-brand-green">₹${dish.price}</span>
        </div>
      </div>

      <!-- Quantity Button (Far Right) -->
      <div class="shrink-0 flex items-center justify-end pl-1">
        <div class="dish-control-btn" data-id="${dish.id}">
          ${renderQtyButton(dish.id, qty)}
        </div>
      </div>
    </div>
  `;
}

function renderQtyButton(dishId, qty) {
  if (qty === 0) {
    return `
      <button onclick="updateCartQuantity('${dishId}', 1)" class="bg-gradient-to-r from-brand-green to-emerald-600 text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center gap-1 hover:shadow-md transition-all active:scale-95 shadow-xs">
        <span class="material-symbols-outlined text-[15px]">add</span>
        <span>Add</span>
      </button>
    `;
  }
  return `
    <div class="flex items-center border border-brand-green bg-brand-green text-white rounded-full overflow-hidden shadow-xs">
      <button onclick="updateCartQuantity('${dishId}', -1)" class="px-2.5 py-1 hover:bg-emerald-700 text-xs font-black">−</button>
      <span class="px-2 text-xs font-extrabold text-center min-w-[20px]">${qty}</span>
      <button onclick="updateCartQuantity('${dishId}', 1)" class="px-2.5 py-1 hover:bg-emerald-700 text-xs font-black">+</button>
    </div>
  `;
}

function resetFilters() {
  searchQuery = "";
  activeDietaryFilter = "all";
  activeCategory = "all";
  document.getElementById("searchInput").value = "";
  renderDietaryFilters();
  renderCategoryNav();
  renderMenu();
}

// Render FAQs Accordion
function renderFaqs() {
  const container = document.getElementById("faqContainer");
  container.innerHTML = FAQS.map((faq, idx) => `
    <div class="bg-white rounded-2xl border border-slate-200/80 overflow-hidden">
      <button onclick="toggleFaq(${idx})" class="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-slate-900 hover:text-brand-blue">
        <span>${faq.q}</span>
        <span id="faqIcon-${idx}" class="material-symbols-outlined text-slate-400">expand_more</span>
      </button>
      <div id="faqAns-${idx}" class="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed hidden border-t border-slate-100 pt-3">
        ${faq.a}
      </div>
    </div>
  `).join('');
}

function toggleFaq(idx) {
  const ans = document.getElementById(`faqAns-${idx}`);
  const icon = document.getElementById(`faqIcon-${idx}`);
  if (ans.classList.contains("hidden")) {
    ans.classList.remove("hidden");
    icon.textContent = "expand_less";
  } else {
    ans.classList.add("hidden");
    icon.textContent = "expand_more";
  }
}

// ==================== 5. CART STATE MANAGEMENT ====================
function updateCartQuantity(dishId, delta) {
  const current = cart[dishId] || 0;
  const next = current + delta;
  if (next <= 0) {
    delete cart[dishId];
  } else {
    cart[dishId] = next;
  }

  updateCartUI();
  renderSignatureGrid();
  renderMenu();
}

function updateCartUI() {
  let subtotal = 0;
  let totalCount = 0;

  Object.entries(cart).forEach(([id, qty]) => {
    const dish = MENU_ITEMS.find(item => item.id === id);
    if (dish && qty > 0) {
      subtotal += dish.price * qty;
      totalCount += qty;
    }
  });

  const deliveryFee = orderType === 'delivery' && subtotal > 0 ? 40 : 0;
  const grandTotal = subtotal + deliveryFee;

  // Header badges
  const hBadge = document.getElementById("headerCartBadge");
  const mBadge = document.getElementById("mobileHeaderBadge");

  if (totalCount > 0) {
    hBadge.textContent = `${totalCount} · ₹${grandTotal}`;
    hBadge.classList.remove("hidden");
    mBadge.textContent = totalCount;
    mBadge.classList.remove("hidden");
  } else {
    hBadge.classList.add("hidden");
    mBadge.classList.add("hidden");
  }

  // Sticky bottom cart bar
  const stickyBar = document.getElementById("stickyCartBar");
  if (totalCount > 0) {
    stickyBar.classList.remove("hidden");
    document.getElementById("stickyItemCount").textContent = `${totalCount} ${totalCount === 1 ? 'Item' : 'Items'} Selected`;
    document.getElementById("stickyTotalPrice").innerHTML = `₹${grandTotal} <span class="text-xs font-sans text-slate-500 font-normal">(Live Total)</span>`;
  } else {
    stickyBar.classList.add("hidden");
  }

  // Render Cart Drawer Contents
  renderCartDrawer(subtotal, deliveryFee, grandTotal, totalCount);

  // Update Checkout Totals
  document.getElementById("chkGrandTotalText").textContent = `₹${grandTotal}`;
}

function renderCartDrawer(subtotal, deliveryFee, grandTotal, totalCount) {
  const listContainer = document.getElementById("cartItemsList");
  const cartFooter = document.getElementById("cartFooter");

  if (totalCount === 0) {
    listContainer.innerHTML = `
      <div class="py-16 text-center space-y-3">
        <span class="material-symbols-outlined text-slate-300 text-[48px]">shopping_bag</span>
        <h4 class="text-lg font-extrabold text-slate-900">Your Cart is Empty</h4>
        <p class="text-xs text-slate-500 max-w-xs mx-auto">Explore our authentic Kathiyawadi & Punjabi menu items to start ordering.</p>
        <button onclick="closeModal('cartModal')" class="bg-brand-green text-white px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-xs">
          Browse Menu
        </button>
      </div>
    `;
    cartFooter.classList.add("hidden");
    return;
  }

  cartFooter.classList.remove("hidden");
  document.getElementById("cartSubtotalText").textContent = `₹${subtotal}`;
  document.getElementById("cartDeliveryText").textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;
  document.getElementById("cartGrandTotalText").textContent = `₹${grandTotal}`;
  document.getElementById("deliveryLabel").textContent = orderType === 'delivery' ? 'Delivery Charges (Khambhaliya)' : 'Pickup Charges';

  listContainer.innerHTML = Object.entries(cart).map(([id, qty]) => {
    const dish = MENU_ITEMS.find(item => item.id === id);
    if (!dish || qty <= 0) return '';

    return `
      <div class="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-center justify-between gap-3">
        <div class="flex-1 space-y-0.5">
          <h5 class="font-bold text-xs sm:text-sm text-slate-900">${dish.name}</h5>
          <div class="text-[11px] text-slate-500">
            ₹${dish.price} × ${qty} = <strong class="text-brand-green font-extrabold">₹${dish.price * qty}</strong>
          </div>
        </div>
        <div class="flex items-center border border-brand-green bg-brand-green text-white rounded-full overflow-hidden shadow-xs">
          <button onclick="updateCartQuantity('${dish.id}', -1)" class="px-2 py-0.5 text-xs font-black hover:bg-emerald-700">−</button>
          <span class="px-2 text-xs font-extrabold min-w-[18px] text-center">${qty}</span>
          <button onclick="updateCartQuantity('${dish.id}', 1)" class="px-2 py-0.5 text-xs font-black hover:bg-emerald-700">+</button>
        </div>
      </div>
    `;
  }).join('');
}

// ==================== 6. CHECKOUT SUBMISSION ====================
function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();

  let hasError = false;

  if (!name) {
    document.getElementById("errCustName").classList.remove("hidden");
    hasError = true;
  } else {
    document.getElementById("errCustName").classList.add("hidden");
  }

  if (!phone || phone.length < 10) {
    document.getElementById("errCustPhone").classList.remove("hidden");
    hasError = true;
  } else {
    document.getElementById("errCustPhone").classList.add("hidden");
  }

  if (orderType === 'delivery' && !address) {
    document.getElementById("errCustAddress").classList.remove("hidden");
    hasError = true;
  } else {
    document.getElementById("errCustAddress").classList.add("hidden");
  }

  if (hasError) return;

  const btn = document.getElementById("submitOrderBtn");
  btn.innerHTML = `<span class="material-symbols-outlined text-[18px] animate-spin">progress_activity</span> Sending to Kitchen...`;
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = `<span class="material-symbols-outlined text-[18px]">check_circle</span> <span>Place Order</span>`;
    btn.disabled = false;

    let subtotal = 0;
    const itemsList = [];
    Object.entries(cart).forEach(([id, qty]) => {
      const dish = MENU_ITEMS.find(item => item.id === id);
      if (dish && qty > 0) {
        subtotal += dish.price * qty;
        itemsList.push({ name: dish.name, quantity: qty, itemTotal: dish.price * qty });
      }
    });

    const deliveryFee = orderType === 'delivery' ? 40 : 0;
    const grandTotal = subtotal + deliveryFee;
    const randomId = Math.floor(1000 + Math.random() * 9000);

    // Populate confirmation modal
    document.getElementById("confCustomerName").textContent = `Thank You, ${name}!`;
    document.getElementById("confOrderId").textContent = `#AFR-${randomId}`;
    document.getElementById("confOrderType").textContent = orderType === 'delivery' ? '🛵 Doorstep Delivery' : '🛍️ Restaurant Pickup';
    document.getElementById("confEstimatedTime").textContent = orderType === 'delivery' ? '35 - 45 Mins' : '20 - 25 Mins';
    document.getElementById("confCustomerPhone").textContent = phone;

    if (orderType === 'delivery') {
      document.getElementById("confAddressRow").classList.remove("hidden");
      document.getElementById("confCustomerAddress").textContent = address;
    } else {
      document.getElementById("confAddressRow").classList.add("hidden");
    }

    document.getElementById("confGrandTotal").textContent = `₹${grandTotal}`;

    document.getElementById("confItemsSummary").innerHTML = itemsList.map(item => `
      <div class="flex justify-between text-xs text-slate-800">
        <span>${item.name} × ${item.quantity}</span>
        <span class="font-extrabold text-brand-green">₹${item.itemTotal}</span>
      </div>
    `).join('');

    // Clear Cart and Switch Modals
    cart = {};
    updateCartUI();
    renderSignatureGrid();
    renderMenu();
    closeModal("checkoutModal");
    openModal("confirmationModal");
  }, 1200);
}
