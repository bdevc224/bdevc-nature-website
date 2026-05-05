// ===== DASHBOARD DATA =====
const dashboardData = {
    destinations: [
        { name: "Amazon Rainforest", country: "Brazil/Peru/Colombia", bookings: 234, rating: 4.8, price: "$2,500" },
        { name: "Yellowstone National Park", country: "USA", bookings: 187, rating: 4.7, price: "$1,800" },
        { name: "Banff National Park", country: "Canada", bookings: 156, rating: 4.9, price: "$2,200" },
        { name: "Serengeti National Park", country: "Tanzania", bookings: 198, rating: 4.9, price: "$3,200" },
        { name: "Great Barrier Reef", country: "Australia", bookings: 167, rating: 4.8, price: "$2,800" },
        { name: "Norwegian Fjords", country: "Norway", bookings: 145, rating: 4.7, price: "$2,600" },
        { name: "Costa Rica Rainforests", country: "Costa Rica", bookings: 189, rating: 4.8, price: "$2,400" },
        { name: "New Zealand South Island", country: "New Zealand", bookings: 178, rating: 4.9, price: "$3,000" }
    ],
    
    bookings: [
        { id: "BK001", customer: "John Smith", destination: "Amazon Rainforest", date: "2024-01-15", status: "confirmed", amount: "$2,500" },
        { id: "BK002", customer: "Sarah Johnson", destination: "Yellowstone", date: "2024-01-18", status: "pending", amount: "$1,800" },
        { id: "BK003", customer: "Michael Brown", destination: "Serengeti", date: "2024-01-20", status: "confirmed", amount: "$3,200" },
        { id: "BK004", customer: "Emily Davis", destination: "Banff", date: "2024-01-22", status: "completed", amount: "$2,200" },
        { id: "BK005", customer: "David Wilson", destination: "Great Barrier Reef", date: "2024-01-25", status: "pending", amount: "$2,800" },
        { id: "BK006", customer: "Lisa Anderson", destination: "Norwegian Fjords", date: "2024-01-28", status: "confirmed", amount: "$2,600" }
    ],
    
    messages: [
        { user: "Alice Wonder", message: "Tell me about the Amazon Rainforest tour", time: "2024-01-30 10:30", status: "read" },
        { user: "Bob Marley", message: "How can I book a safari in Serengeti?", time: "2024-01-30 09:15", status: "unread" },
        { user: "Charlie Green", message: "Do you offer eco-friendly tours?", time: "2024-01-29 16:45", status: "read" },
        { user: "Diana Prince", message: "What's the best time to visit Norway?", time: "2024-01-29 14:20", status: "read" }
    ],
    
    conservationTips: [
        "Plant native species in your garden to support local wildlife",
        "Reduce plastic use - bring reusable bags and bottles",
        "Compost food waste to reduce methane emissions",
        "Save water by fixing leaks and taking shorter showers",
        "Support conservation organizations like WWF",
        "Use energy-efficient appliances and LED bulbs",
        "Choose sustainable products with eco-certifications",
        "Volunteer for local clean-ups and tree planting events"
    ],
    
    services: [
        { icon: "✈️", name: "Adventure Tours", description: "Guided hiking, trekking, and camping expeditions", link: "service.html" },
        { icon: "🚣", name: "Wildlife Safaris", description: "Expert-led safaris in Africa, Amazon, and Asia", link: "service.html" },
        { icon: "🏔️", name: "Mountain Expeditions", description: "Climb mountains with expert guides", link: "service.html" },
        { icon: "🛶", name: "Water Adventures", description: "Kayaking, rafting, diving, and snorkeling", link: "service.html" },
        { icon: "🏕️", name: "Eco-Lodges", description: "Sustainable accommodations in nature", link: "service.html" },
        { icon: "📸", name: "Photography Tours", description: "Capture nature's beauty professionally", link: "service.html" }
    ]
};

// ===== CHART INSTANCES =====
let charts = {};
let isChartJsAvailable = false;

// ===== CHECK IF CHART.JS IS LOADED =====
function checkChartJs() {
    isChartJsAvailable = (typeof Chart !== 'undefined');
    if (!isChartJsAvailable) {
        console.warn('Chart.js not loaded. Charts will not be displayed.');
    }
    return isChartJsAvailable;
}

// ===== INITIALIZE CHARTS =====
function initCharts() {
    if (!checkChartJs()) {
        return;
    }
    
    try {
        // Destinations Chart
        const destinationsCanvas = document.getElementById('destinationsChart');
        if (destinationsCanvas && destinationsCanvas.getContext && !charts.destinations) {
            const ctx = destinationsCanvas.getContext('2d');
            charts.destinations = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: dashboardData.destinations.map(function(d) { return d.name.split(' ')[0]; }),
                    datasets: [{
                        label: 'Number of Bookings',
                        data: dashboardData.destinations.map(function(d) { return d.bookings; }),
                        backgroundColor: 'rgba(34, 139, 34, 0.6)',
                        borderColor: '#228b22',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: { position: 'top' }
                    }
                }
            });
        }
        
        // Bookings Chart
        const bookingsCanvas = document.getElementById('bookingsChart');
        if (bookingsCanvas && bookingsCanvas.getContext && !charts.bookings) {
            const ctx = bookingsCanvas.getContext('2d');
            charts.bookings = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Bookings',
                        data: [45, 52, 68, 74, 89, 95, 112, 128, 145, 167, 189, 210],
                        borderColor: '#228b22',
                        backgroundColor: 'rgba(34, 139, 34, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true
                }
            });
        }
        
        // Engagement Chart
        const engagementCanvas = document.getElementById('engagementChart');
        if (engagementCanvas && engagementCanvas.getContext && !charts.engagement) {
            const ctx = engagementCanvas.getContext('2d');
            charts.engagement = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Website Visits', 'Chatbot Interactions', 'Bookings', 'Newsletter'],
                    datasets: [{
                        data: [45, 30, 15, 10],
                        backgroundColor: ['#228b22', '#07c507', '#1a6b1a', '#4d9eff'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: { position: 'bottom' }
                    }
                }
            });
        }
        
        // Revenue Chart
        const revenueCanvas = document.getElementById('revenueChart');
        if (revenueCanvas && revenueCanvas.getContext && !charts.revenue) {
            const ctx = revenueCanvas.getContext('2d');
            charts.revenue = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: 'Revenue ($)',
                        data: [8500, 9200, 10800, 12580],
                        backgroundColor: 'rgba(7, 197, 7, 0.6)',
                        borderColor: '#07c507',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true
                }
            });
        }
        
        // Visitor Chart
        const visitorCanvas = document.getElementById('visitorChart');
        if (visitorCanvas && visitorCanvas.getContext && !charts.visitor) {
            const ctx = visitorCanvas.getContext('2d');
            charts.visitor = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Daily Visitors',
                        data: [1200, 1350, 1420, 1580, 1890, 2100, 1950],
                        borderColor: '#228b22',
                        backgroundColor: 'rgba(34, 139, 34, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true
                }
            });
        }
        
        // Platform Chart
        const platformCanvas = document.getElementById('platformChart');
        if (platformCanvas && platformCanvas.getContext && !charts.platform) {
            const ctx = platformCanvas.getContext('2d');
            charts.platform = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Desktop', 'Mobile', 'Tablet'],
                    datasets: [{
                        data: [55, 35, 10],
                        backgroundColor: ['#228b22', '#07c507', '#4d9eff']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: { position: 'bottom' }
                    }
                }
            });
        }
        
        // Traffic Chart
        const trafficCanvas = document.getElementById('trafficChart');
        if (trafficCanvas && trafficCanvas.getContext && !charts.traffic) {
            const ctx = trafficCanvas.getContext('2d');
            charts.traffic = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Direct', 'Search', 'Social', 'Referral', 'Email'],
                    datasets: [{
                        label: 'Traffic (%)',
                        data: [30, 45, 15, 5, 5],
                        backgroundColor: '#228b22'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    indexAxis: 'y',
                    plugins: {
                        legend: { position: 'top' }
                    }
                }
            });
        }
        
        console.log('Charts initialized successfully');
    } catch (error) {
        console.error('Error initializing charts:', error);
    }
}

// ===== UPDATE CHART COLORS FOR DARK MODE =====
function updateChartColors() {
    if (!isChartJsAvailable) {
        return;
    }
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    const chartKeys = Object.keys(charts);
    
    for (var i = 0; i < chartKeys.length; i++) {
        var chartName = chartKeys[i];
        var chart = charts[chartName];
        
        if (chart && chart.config && chart.data) {
            var datasets = chart.data.datasets;
            for (var j = 0; j < datasets.length; j++) {
                var dataset = datasets[j];
                var chartType = chart.config.type;
                
                if (chartType === 'bar' || chartType === 'line') {
                    if (j === 0) {
                        dataset.borderColor = isDarkMode ? '#07c507' : '#228b22';
                        if (typeof dataset.backgroundColor === 'string') {
                            dataset.backgroundColor = isDarkMode ? 'rgba(7, 197, 7, 0.2)' : 'rgba(34, 139, 34, 0.1)';
                        }
                    }
                } else if (chartType === 'doughnut' || chartType === 'pie') {
                    dataset.backgroundColor = isDarkMode ? 
                        ['#07c507', '#4d9eff', '#1a6b1a', '#228b22'] :
                        ['#228b22', '#07c507', '#1a6b1a', '#4d9eff'];
                }
            }
            chart.update();
        }
    }
}

// ===== RENDER FUNCTIONS =====
function renderDestinations() {
    var grid = document.getElementById('destinationsGrid');
    if (!grid) {
        return;
    }
    
    var html = '';
    for (var i = 0; i < dashboardData.destinations.length; i++) {
        var dest = dashboardData.destinations[i];
        html += '<div class="destination-card">';
        html += '<div class="destination-info">';
        html += '<h3>' + dest.name + '</h3>';
        html += '<p>📍 ' + dest.country + '</p>';
        html += '<p>⭐ ' + dest.rating + ' / 5.0</p>';
        html += '<div class="destination-stats">';
        html += '<span>📅 ' + dest.bookings + ' bookings</span>';
        html += '<span>💰 ' + dest.price + '</span>';
        html += '</div>';
        html += '<button class="add-btn" onclick="viewDestination(\'' + dest.name + '\')">View Details</button>';
        html += '</div></div>';
    }
    grid.innerHTML = html;
}

function renderBookings(filter) {
    filter = filter || 'all';
    var tbody = document.getElementById('bookingsTableBody');
    if (!tbody) {
        return;
    }
    
    var filteredBookings = dashboardData.bookings;
    if (filter !== 'all') {
        filteredBookings = [];
        for (var i = 0; i < dashboardData.bookings.length; i++) {
            if (dashboardData.bookings[i].status === filter) {
                filteredBookings.push(dashboardData.bookings[i]);
            }
        }
    }
    
    var html = '';
    for (var i = 0; i < filteredBookings.length; i++) {
        var booking = filteredBookings[i];
        html += '<tr>';
        html += '<td>' + booking.id + '</td>';
        html += '<td>' + booking.customer + '</td>';
        html += '<td>' + booking.destination + '</td>';
        html += '<td>' + booking.date + '</td>';
        html += '<td><span class="status-badge status-' + booking.status + '">' + booking.status + '</span></td>';
        html += '<td>' + booking.amount + '</td>';
        html += '<td><button class="action-btn" onclick="viewBooking(\'' + booking.id + '\')">View</button></td>';
        html += '</tr>';
    }
    tbody.innerHTML = html;
}

function renderServices() {
    var grid = document.getElementById('servicesGrid');
    if (!grid) {
        return;
    }
    
    var html = '';
    for (var i = 0; i < dashboardData.services.length; i++) {
        var service = dashboardData.services[i];
        html += '<div class="service-card">';
        html += '<div class="service-icon">' + service.icon + '</div>';
        html += '<h3>' + service.name + '</h3>';
        html += '<p>' + service.description + '</p>';
        html += '<a href="' + service.link + '" class="service-link">Learn More →</a>';
        html += '</div>';
    }
    grid.innerHTML = html;
}

function renderMessages() {
    var container = document.getElementById('messagesList');
    if (!container) {
        return;
    }
    
    var html = '';
    for (var i = 0; i < dashboardData.messages.length; i++) {
        var msg = dashboardData.messages[i];
        var borderStyle = (msg.status === 'unread') ? 'border-left: 3px solid #228b22;' : '';
        html += '<div class="message-item" style="' + borderStyle + '">';
        html += '<div class="message-content">';
        html += '<p><strong>' + msg.user + '</strong>: ' + msg.message + '</p>';
        html += '<span class="message-time">' + msg.time + '</span>';
        html += '</div>';
        html += '<button class="action-btn" onclick="replyToMessage(\'' + msg.user + '\')">Reply</button>';
        html += '</div>';
    }
    container.innerHTML = html;
}

function renderConservationTips() {
    var list = document.getElementById('conservationTips');
    if (!list) {
        return;
    }
    
    var html = '';
    for (var i = 0; i < dashboardData.conservationTips.length; i++) {
        html += '<li>' + dashboardData.conservationTips[i] + '</li>';
    }
    list.innerHTML = html;
}

function updateStats() {
    var totalDestinationsElem = document.getElementById('totalDestinations');
    var totalBookingsElem = document.getElementById('totalBookings');
    var activeUsersElem = document.getElementById('activeUsers');
    var revenueElem = document.getElementById('revenue');
    var chatMessagesElem = document.getElementById('chatMessages');
    var treesPlantedElem = document.getElementById('treesPlanted');
    
    if (totalDestinationsElem) totalDestinationsElem.textContent = dashboardData.destinations.length;
    if (totalBookingsElem) totalBookingsElem.textContent = dashboardData.bookings.length;
    if (activeUsersElem) activeUsersElem.textContent = '1,234';
    if (revenueElem) revenueElem.textContent = '$42,580';
    if (chatMessagesElem) chatMessagesElem.textContent = '1,892';
    if (treesPlantedElem) treesPlantedElem.textContent = '5,234';
}

// ===== THEME TOGGLE =====
function toggleTheme() {
    console.log('Toggle theme function called');
    var body = document.body;
    var themeToggleBtn = document.getElementById('themeToggle');
    
    if (!body) {
        console.error('Body element not found');
        return;
    }
    
    // Toggle dark mode class
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        if (themeToggleBtn) {
            themeToggleBtn.textContent = '🌙 Dark Mode';
        }
        localStorage.setItem('dashboardTheme', 'light');
    } else {
        body.classList.add('dark-mode');
        if (themeToggleBtn) {
            themeToggleBtn.textContent = '☀️ Light Mode';
        }
        localStorage.setItem('dashboardTheme', 'dark');
    }
    
    // Update chart colors if Chart.js is available
    if (isChartJsAvailable) {
        updateChartColors();
    }
    
    console.log('Theme toggled. Dark mode:', body.classList.contains('dark-mode'));
}

function loadTheme() {
    console.log('Loading saved theme...');
    var savedTheme = localStorage.getItem('dashboardTheme');
    var themeToggleBtn = document.getElementById('themeToggle');
    var body = document.body;
    
    if (!body) {
        return;
    }
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggleBtn) {
            themeToggleBtn.textContent = '☀️ Light Mode';
        }
    } else {
        body.classList.remove('dark-mode');
        if (themeToggleBtn) {
            themeToggleBtn.textContent = '🌙 Dark Mode';
        }
    }
    
    // Update charts after theme loads
    setTimeout(function() {
        if (isChartJsAvailable) {
            updateChartColors();
        }
    }, 100);
}

// ===== NAVIGATION =====
function navigateTo(pageId) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    
    var targetPage = document.getElementById(pageId + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    var navItems = document.querySelectorAll('.nav-item');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
    }
    
    var activeNav = null;
    var allNavs = document.querySelectorAll('.nav-item');
    for (var i = 0; i < allNavs.length; i++) {
        if (allNavs[i].getAttribute('data-page') === pageId) {
            activeNav = allNavs[i];
            break;
        }
    }
    if (activeNav) {
        activeNav.classList.add('active');
    }
    
    if (pageId === 'destinations') renderDestinations();
    if (pageId === 'bookings') renderBookings();
    if (pageId === 'services') renderServices();
    if (pageId === 'messages') renderMessages();
    if (pageId === 'conservation') renderConservationTips();
}

// ===== SEARCH FUNCTIONALITY =====
function setupSearch() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            var searchTerm = e.target.value.toLowerCase();
            var activePage = document.querySelector('.page.active');
            var activePageId = activePage ? activePage.id : '';
            
            if (activePageId === 'destinationsPage') {
                var filteredDestinations = [];
                for (var i = 0; i < dashboardData.destinations.length; i++) {
                    var dest = dashboardData.destinations[i];
                    if (dest.name.toLowerCase().indexOf(searchTerm) !== -1 || 
                        dest.country.toLowerCase().indexOf(searchTerm) !== -1) {
                        filteredDestinations.push(dest);
                    }
                }
                
                var grid = document.getElementById('destinationsGrid');
                if (grid) {
                    var html = '';
                    for (var i = 0; i < filteredDestinations.length; i++) {
                        var dest = filteredDestinations[i];
                        html += '<div class="destination-card">';
                        html += '<div class="destination-info">';
                        html += '<h3>' + dest.name + '</h3>';
                        html += '<p>📍 ' + dest.country + '</p>';
                        html += '<p>⭐ ' + dest.rating + ' / 5.0</p>';
                        html += '<div class="destination-stats">';
                        html += '<span>📅 ' + dest.bookings + ' bookings</span>';
                        html += '<span>💰 ' + dest.price + '</span>';
                        html += '</div>';
                        html += '</div></div>';
                    }
                    grid.innerHTML = html;
                }
            }
        });
    }
}

// ===== SIDEBAR TOGGLE =====
function setupSidebar() {
    var menuToggle = document.getElementById('menuToggle');
    var sidebar = document.getElementById('sidebar');
    var closeSidebar = document.getElementById('closeSidebar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (sidebar) sidebar.classList.add('open');
        });
    }
    
    if (closeSidebar) {
        closeSidebar.addEventListener('click', function() {
            if (sidebar) sidebar.classList.remove('open');
        });
    }
    
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
            if (sidebar && menuToggle && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });
}

// ===== UTILITY FUNCTIONS =====
function exportMessages() {
    var messages = dashboardData.messages;
    var csv = '';
    for (var i = 0; i < messages.length; i++) {
        csv += messages[i].user + ',' + messages[i].message + ',' + messages[i].time + ',' + messages[i].status + '\n';
    }
    var blob = new Blob([csv], { type: 'text/csv' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'chat_messages.csv';
    a.click();
    URL.revokeObjectURL(url);
    alert('Messages exported successfully!');
}

function viewDestination(name) {
    alert('Viewing details for ' + name + '. Full destination information would be displayed here.');
}

function viewBooking(id) {
    alert('Viewing booking details for ' + id + '. Booking information would be displayed here.');
}

function replyToMessage(user) {
    alert('Reply to ' + user + ': This would open a chat interface.');
}

function saveSettings() {
    var siteNameElem = document.getElementById('siteName');
    var adminEmailElem = document.getElementById('adminEmail');
    var notificationsToggle = document.getElementById('notificationsToggle');
    var darkModeDefault = document.getElementById('darkModeDefault');
    
    var siteName = siteNameElem ? siteNameElem.value : '';
    var adminEmail = adminEmailElem ? adminEmailElem.value : '';
    var notifications = notificationsToggle ? notificationsToggle.checked : false;
    var darkModeDefaultValue = darkModeDefault ? darkModeDefault.checked : false;
    
    localStorage.setItem('siteName', siteName);
    localStorage.setItem('adminEmail', adminEmail);
    localStorage.setItem('notifications', notifications);
    localStorage.setItem('darkModeDefault', darkModeDefaultValue);
    
    if (darkModeDefaultValue) {
        document.body.classList.add('dark-mode');
        var themeBtn = document.getElementById('themeToggle');
        if (themeBtn) themeBtn.textContent = '☀️ Light Mode';
    } else if (!darkModeDefaultValue && !localStorage.getItem('dashboardTheme')) {
        document.body.classList.remove('dark-mode');
        var themeBtn = document.getElementById('themeToggle');
        if (themeBtn) themeBtn.textContent = '🌙 Dark Mode';
    }
    
    alert('Settings saved successfully!');
}

function loadSettings() {
    var siteName = localStorage.getItem('siteName');
    var adminEmail = localStorage.getItem('adminEmail');
    var notifications = localStorage.getItem('notifications');
    
    var siteNameElem = document.getElementById('siteName');
    var adminEmailElem = document.getElementById('adminEmail');
    var notificationsToggle = document.getElementById('notificationsToggle');
    
    if (siteName && siteNameElem) siteNameElem.value = siteName;
    if (adminEmail && adminEmailElem) adminEmailElem.value = adminEmail;
    if (notifications && notificationsToggle) notificationsToggle.checked = (notifications === 'true');
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing dashboard...');
    
    renderDestinations();
    renderBookings('all');
    renderServices();
    renderMessages();
    renderConservationTips();
    updateStats();
    setupSearch();
    setupSidebar();
    loadTheme();
    loadSettings();
    
    // Check for Chart.js
    if (typeof Chart !== 'undefined') {
        console.log('Chart.js detected, initializing charts...');
        isChartJsAvailable = true;
        initCharts();
    } else {
        console.log('Chart.js not loaded yet, waiting...');
        setTimeout(function() {
            if (typeof Chart !== 'undefined') {
                console.log('Chart.js loaded after delay');
                isChartJsAvailable = true;
                initCharts();
            } else {
                console.warn('Chart.js failed to load');
                var chartCards = document.querySelectorAll('.chart-card canvas');
                for (var i = 0; i < chartCards.length; i++) {
                    var parent = chartCards[i].parentElement;
                    if (parent) {
                        parent.innerHTML = '<p style="text-align:center;padding:40px;">📊 Chart.js failed to load. Please check your internet connection.</p>';
                    }
                }
            }
        }, 1000);
    }
    
    // Navigation
    var navItems = document.querySelectorAll('.nav-item[data-page]');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', function(e) {
            e.preventDefault();
            var page = this.getAttribute('data-page');
            navigateTo(page);
        });
    }
    
    // Theme toggle
    var themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        var newThemeToggle = themeToggle.cloneNode(true);
        themeToggle.parentNode.replaceChild(newThemeToggle, themeToggle);
        
        newThemeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Theme button clicked!');
            toggleTheme();
        });
        
        console.log('Theme toggle button attached successfully');
    } else {
        console.error('Theme toggle button element not found!');
    }
    
    // Status filter
    var statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
        statusFilter.addEventListener('change', function(e) {
            renderBookings(e.target.value);
        });
    }
    
    // Export messages
    var exportBtn = document.getElementById('exportMessagesBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportMessages);
    }
    
    // Add destination button
    var addBtn = document.getElementById('addDestinationBtn');
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            alert('Add destination form would open here. Fill in destination details.');
        });
    }
    
    // Save settings
    var saveSettingsBtn = document.getElementById('saveSettings');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', saveSettings);
    }
    
    // Logout
    var logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = 'index.html';
            }
        });
    }
    
    console.log('Dashboard initialized successfully');
});

// Make functions globally available
window.viewDestination = viewDestination;
window.viewBooking = viewBooking;
window.replyToMessage = replyToMessage;
window.toggleTheme = toggleTheme;