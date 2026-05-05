// ===== APP DATA =====
const destinations = [
    { name: "Amazon Rainforest", country: "Brazil", price: "$2,500", category: "rainforest", icon: "🌳", rating: 4.8 },
    { name: "Yellowstone", country: "USA", price: "$1,800", category: "mountains", icon: "🏔️", rating: 4.7 },
    { name: "Banff National Park", country: "Canada", price: "$2,200", category: "mountains", icon: "🏞️", rating: 4.9 },
    { name: "Serengeti", country: "Tanzania", price: "$3,200", category: "safari", icon: "🦁", rating: 4.9 },
    { name: "Great Barrier Reef", country: "Australia", price: "$2,800", category: "beach", icon: "🐠", rating: 4.8 },
    { name: "Norwegian Fjords", country: "Norway", price: "$2,600", category: "mountains", icon: "⛰️", rating: 4.7 }
];

const facts = {
    animals: [
        "🐘 Elephants are the only mammals that can't jump!",
        "🦒 Giraffes only sleep 30 minutes per day!",
        "🐙 Octopuses have three hearts and blue blood!",
        "🦋 Butterflies taste with their feet!",
        "🐧 Penguins propose with a pebble!"
    ],
    plants: [
        "🌳 Trees can communicate through underground fungal networks!",
        "🌻 Sunflowers follow the sun across the sky!",
        "🎋 Bamboo can grow 35 inches in one day!",
        "🌵 Cacti can store 5,000 gallons of water!",
        "🌸 The corpse flower smells like rotting meat!"
    ],
    ocean: [
        "🌊 The ocean covers 71% of Earth's surface!",
        "🐋 Blue whales are the largest animals ever!",
        "🐠 Clownfish can change gender!",
        "🪸 Coral reefs are the rainforests of the sea!",
        "🐙 Octopuses are incredibly intelligent!"
    ],
    space: [
        "🌍 Earth is the only known planet with life!",
        "⭐ The sun makes up 99.86% of solar system mass!",
        "🌙 You could fit 1.3 million Earths in the sun!",
        "🪐 Saturn's rings are made of ice and rock!",
        "✨ There are more stars than grains of sand!"
    ],
    weather: [
        "⚡ Lightning strikes Earth 100 times per second!",
        "🌪️ A tornado can spin up to 300 mph!",
        "❄️ Snowflakes are all unique!",
        "🌈 Rainbows are full circles, we see only half!",
        "☁️ A single cloud can weigh 1 million pounds!"
    ]
};

const challenges = [
    { title: "Plant 10 Trees", progress: 7, target: 10, icon: "🌳" },
    { title: "Reduce Plastic", progress: 450, target: 1000, icon: "♻️", unit: "kg" },
    { title: "Save Water", progress: 1200, target: 5000, icon: "💧", unit: "gallons" }
];

const tips = [
    "🌱 Plant native species in your garden",
    "♻️ Reduce, reuse, recycle - in that order!",
    "💡 Use LED bulbs and energy-efficient appliances",
    "🚶 Walk or bike instead of driving short distances",
    "🥩 Reduce meat consumption for lower carbon footprint"
];

const bookings = [
    { id: 1, destination: "Amazon Rainforest", date: "2024-03-15", status: "confirmed", guests: 2, price: "$2,500" },
    { id: 2, destination: "Serengeti Safari", date: "2024-04-20", status: "pending", guests: 1, price: "$3,200" },
    { id: 3, destination: "Banff National Park", date: "2024-02-10", status: "completed", guests: 3, price: "$2,200" }
];

// ===== DOM ELEMENTS =====
let currentPage = "home";

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", function() {
    renderFeaturedDestinations();
    renderDestinationsList();
    renderBookings();
    renderChallenges();
    renderTips();
    loadDailyTip();
    setupEventListeners();
    loadThemePreference();
});

// ===== RENDER FUNCTIONS =====
function renderFeaturedDestinations() {
    const container = document.getElementById("featuredDestinations");
    if (!container) return;
    
    let html = "";
    for (let i = 0; i < destinations.length; i++) {
        const dest = destinations[i];
        html += `
            <div class="destination-card-app" onclick="viewDestination('${dest.name}')">
                <div class="destination-image">${dest.icon}</div>
                <div class="destination-info">
                    <h4>${dest.name}</h4>
                    <p>${dest.country}</p>
                    <p class="destination-price">${dest.price}</p>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}

function renderDestinationsList(filter = "all") {
    const container = document.getElementById("destinationsList");
    if (!container) return;
    
    let filtered = destinations;
    if (filter !== "all") {
        filtered = destinations.filter(function(d) { return d.category === filter; });
    }
    
    let html = "";
    for (let i = 0; i < filtered.length; i++) {
        const dest = filtered[i];
        html += `
            <div class="destination-item" onclick="viewDestination('${dest.name}')">
                <div class="destination-icon">${dest.icon}</div>
                <div class="destination-details">
                    <h3>${dest.name}</h3>
                    <p>📍 ${dest.country} | ⭐ ${dest.rating}</p>
                    <p>🎒 ${dest.category}</p>
                </div>
                <div class="destination-price">${dest.price}</div>
            </div>
        `;
    }
    container.innerHTML = html;
}

function renderBookings(filter = "all") {
    const container = document.getElementById("bookingsList");
    if (!container) return;
    
    let filtered = bookings;
    if (filter !== "all") {
        filtered = bookings.filter(function(b) { 
            if (filter === "upcoming") return b.status === "confirmed";
            if (filter === "past") return b.status === "completed";
            if (filter === "cancelled") return b.status === "cancelled";
            return true;
        });
    }
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center;padding:40px;">No bookings found 🗺️</p>';
        return;
    }
    
    let html = "";
    for (let i = 0; i < filtered.length; i++) {
        const booking = filtered[i];
        let statusClass = "status-" + booking.status;
        html += `
            <div class="booking-card">
                <div class="booking-info">
                    <h4>${booking.destination}</h4>
                    <p>📅 ${booking.date} | 👥 ${booking.guests} guests</p>
                    <p>💰 ${booking.price}</p>
                </div>
                <div>
                    <span class="booking-status ${statusClass}">${booking.status}</span>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}

function renderChallenges() {
    const container = document.getElementById("challengeList");
    if (!container) return;
    
    let html = "";
    for (let i = 0; i < challenges.length; i++) {
        const challenge = challenges[i];
        const percent = (challenge.progress / challenge.target) * 100;
        html += `
            <div class="challenge-item">
                <div class="challenge-icon">${challenge.icon}</div>
                <div class="challenge-info">
                    <div class="challenge-title">${challenge.title}</div>
                    <div class="challenge-progress">${challenge.progress} / ${challenge.target} ${challenge.unit || ""}</div>
                    <div class="progress-bar" style="width: 100%; height: 6px; background: var(--border); border-radius: 3px; margin-top: 5px;">
                        <div style="width: ${percent}%; height: 100%; background: var(--primary); border-radius: 3px;"></div>
                    </div>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}

function renderTips() {
    const container = document.getElementById("tipsList");
    if (!container) return;
    
    let html = "";
    for (let i = 0; i < tips.length; i++) {
        html += `
            <div class="tip-item">
                <div class="tip-icon">🌱</div>
                <div class="tip-info">
                    <div class="tip-text">${tips[i]}</div>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}

function loadDailyTip() {
    const tipContainer = document.getElementById("dailyTip");
    if (tipContainer) {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        tipContainer.textContent = randomTip.replace("🌱 ", "");
    }
}

// ===== FACT FUNCTIONS =====
let currentFactType = "animals";

function showRandomFact() {
    const factsArray = facts[currentFactType] || facts.animals;
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];
    const factText = document.getElementById("factText");
    if (factText) factText.textContent = randomFact;
}

function setFactCategory(type) {
    currentFactType = type;
    showRandomFact();
}

// ===== CHAT FUNCTIONS =====
function sendChatMessage() {
    const input = document.getElementById("chatInputApp");
    const message = input.value.trim();
    if (!message) return;
    
    addChatMessage(message, "user");
    input.value = "";
    
    setTimeout(function() {
        const response = getBotResponse(message);
        addChatMessage(response, "bot");
    }, 500);
}

function addChatMessage(text, sender) {
    const container = document.getElementById("chatMessagesApp");
    const messageDiv = document.createElement("div");
    messageDiv.className = "message " + sender;
    
    const avatar = document.createElement("div");
    avatar.className = "message-avatar";
    avatar.textContent = sender === "user" ? "👤" : "🌿";
    
    const bubble = document.createElement("div");
    bubble.className = "message-bubble";
    bubble.textContent = text;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();
    if (lowerMsg.includes("fact") || lowerMsg.includes("tell me")) {
        return showRandomFactResponse();
    } else if (lowerMsg.includes("place") || lowerMsg.includes("visit") || lowerMsg.includes("destination")) {
        return "🌍 I recommend visiting the Amazon Rainforest or Serengeti! Both are amazing for nature lovers! Want to book a trip?";
    } else if (lowerMsg.includes("help") || lowerMsg.includes("conservation")) {
        return "🌱 You can help nature by planting trees, reducing plastic, saving water, and supporting conservation organizations!";
    } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
        return "Hello! I'm NatureBot! How can I help you explore nature today? 🌿";
    } else {
        return "That's interesting! I can tell you about nature facts, travel destinations, or conservation tips. Just ask me! 🌍";
    }
}

function showRandomFactResponse() {
    const factsArray = facts.animals;
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];
    return randomFact + " 🌿 Want another fact? Just ask!";
}

// ===== NAVIGATION FUNCTIONS =====
function navigateToPage(pageId) {
    currentPage = pageId;
    
    // Hide all pages
    const pages = document.querySelectorAll(".app-page");
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active");
    }
    
    // Show selected page
    const targetPage = document.getElementById(pageId + "Page");
    if (targetPage) targetPage.classList.add("active");
    
    // Update bottom nav
    const navItems = document.querySelectorAll(".nav-item-app");
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("active");
        if (navItems[i].getAttribute("data-nav") === pageId) {
            navItems[i].classList.add("active");
        }
    }
    
    // Update drawer items
    const drawerItems = document.querySelectorAll(".drawer-item");
    for (let i = 0; i < drawerItems.length; i++) {
        drawerItems[i].classList.remove("active");
        const drawerPage = drawerItems[i].getAttribute("data-page");
        if (drawerPage === pageId) {
            drawerItems[i].classList.add("active");
        }
    }
    
    // Close drawer if open
    closeDrawer();
}

function toggleDrawer() {
    const drawer = document.getElementById("drawerMenu");
    const overlay = document.getElementById("drawerOverlay");
    if (drawer.classList.contains("open")) {
        closeDrawer();
    } else {
        drawer.classList.add("open");
        overlay.classList.add("open");
    }
}

function closeDrawer() {
    const drawer = document.getElementById("drawerMenu");
    const overlay = document.getElementById("drawerOverlay");
    drawer.classList.remove("open");
    overlay.classList.remove("open");
}

function viewDestination(name) {
    alert("✨ Viewing details for " + name + "\n\nWould you like to book this adventure? Check our bookings page!");
    navigateToPage("bookings");
}

// ===== THEME FUNCTIONS =====
function toggleAppTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("appTheme", isDark ? "dark" : "light");
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem("appTheme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        const darkModeToggle = document.getElementById("darkModeToggle");
        if (darkModeToggle) darkModeToggle.checked = true;
    }
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
    // Menu button
    const menuBtn = document.getElementById("menuBtn");
    if (menuBtn) menuBtn.addEventListener("click", toggleDrawer);
    
    // Drawer overlay
    const overlay = document.getElementById("drawerOverlay");
    if (overlay) overlay.addEventListener("click", closeDrawer);
    
    // Drawer navigation
    const drawerItems = document.querySelectorAll(".drawer-item[data-page]");
    for (let i = 0; i < drawerItems.length; i++) {
        drawerItems[i].addEventListener("click", function(e) {
            e.preventDefault();
            const page = this.getAttribute("data-page");
            navigateToPage(page);
        });
    }
    
    // Bottom navigation
    const navItems = document.querySelectorAll(".nav-item-app");
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", function() {
            const page = this.getAttribute("data-nav");
            navigateToPage(page);
        });
    }
    
    // Fact button
    const factBtn = document.getElementById("newFactBtn");
    if (factBtn) factBtn.addEventListener("click", showRandomFact);
    
    // Fact categories
    const categoryChips = document.querySelectorAll(".category-chip");
    for (let i = 0; i < categoryChips.length; i++) {
        categoryChips[i].addEventListener("click", function() {
            const type = this.getAttribute("data-fact-type");
            setFactCategory(type);
        });
    }
    
    // Chat
    const sendBtn = document.getElementById("sendChatBtn");
    if (sendBtn) sendBtn.addEventListener("click", sendChatMessage);
    
    const chatInput = document.getElementById("chatInputApp");
    if (chatInput) {
        chatInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") sendChatMessage();
        });
    }
    
    // Quick chips
    const chips = document.querySelectorAll(".chip");
    for (let i = 0; i < chips.length; i++) {
        chips[i].addEventListener("click", function() {
            const question = this.getAttribute("data-question");
            const input = document.getElementById("chatInputApp");
            if (input) input.value = question;
            sendChatMessage();
        });
    }
    
    // Search destinations
    const searchInput = document.getElementById("searchDestinations");
    if (searchInput) {
        searchInput.addEventListener("input", function(e) {
            const term = e.target.value.toLowerCase();
            const filtered = destinations.filter(function(d) {
                return d.name.toLowerCase().includes(term);
            });
            const container = document.getElementById("destinationsList");
            if (container) {
                let html = "";
                for (let i = 0; i < filtered.length; i++) {
                    const dest = filtered[i];
                    html += `
                        <div class="destination-item" onclick="viewDestination('${dest.name}')">
                            <div class="destination-icon">${dest.icon}</div>
                            <div class="destination-details">
                                <h3>${dest.name}</h3>
                                <p>📍 ${dest.country} | ⭐ ${dest.rating}</p>
                            </div>
                            <div class="destination-price">${dest.price}</div>
                        </div>
                    `;
                }
                container.innerHTML = html || '<p style="text-align:center;padding:40px;">No destinations found 🌍</p>';
            }
        });
    }
    
    // Category filters
    const filters = document.querySelectorAll(".filter-chip");
    for (let i = 0; i < filters.length; i++) {
        filters[i].addEventListener("click", function() {
            const category = this.getAttribute("data-category");
            for (let j = 0; j < filters.length; j++) {
                filters[j].classList.remove("active");
            }
            this.classList.add("active");
            renderDestinationsList(category);
        });
    }
    
    // Booking tabs
    const tabs = document.querySelectorAll(".tab-btn");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function() {
            const tab = this.getAttribute("data-tab");
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove("active");
            }
            this.classList.add("active");
            renderBookings(tab);
        });
    }
    
    // Dark mode toggle
    const darkToggle = document.getElementById("darkModeToggle");
    if (darkToggle) darkToggle.addEventListener("change", toggleAppTheme);
    
    // Clear data button
    const clearBtn = document.getElementById("clearDataBtn");
    if (clearBtn) {
        clearBtn.addEventListener("click", function() {
            if (confirm("Clear all app data? This will reset your preferences.")) {
                localStorage.clear();
                alert("Data cleared! Please refresh the page.");
                location.reload();
            }
        });
    }
    
    // Logout button
    const logoutBtn = document.getElementById("logoutAppBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function() {
            if (confirm("Logout from Nature App?")) {
                window.location.href = "index.html";
            }
        });
    }
    
    // Initialize first fact
    setTimeout(showRandomFact, 500);
}

// Make functions globally available
window.navigateToPage = navigateToPage;
window.viewDestination = viewDestination;
window.toggleDrawer = toggleDrawer;
window.closeDrawer = closeDrawer;
window.showRandomFact = showRandomFact;
window.setFactCategory = setFactCategory;
window.sendChatMessage = sendChatMessage;