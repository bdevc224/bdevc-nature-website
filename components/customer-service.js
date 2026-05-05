// ===== FAQ DATA =====
const faqData = {
    general: [
        {
            question: "What is BDevC Nature?",
            answer: "BDevC Nature is a nature exploration and travel company dedicated to helping people discover, experience, and protect nature. We offer guided tours, adventure packages, educational programs, and conservation initiatives."
        },
        {
            question: "How do I create an account?",
            answer: "Click on the 'Sign Up' button at the top of our website, fill in your details (name, email, password), and verify your email address. It's free and takes less than 2 minutes!"
        },
        {
            question: "Is my personal information secure?",
            answer: "Yes! We use industry-standard SSL encryption to protect your data. We never share your personal information with third parties without your consent."
        },
        {
            question: "Do you offer group discounts?",
            answer: "Yes! Groups of 6+ people receive 10% off, 10+ people receive 15% off, and 20+ people receive 20% off. Contact our group booking team for custom quotes."
        }
    ],
    booking: [
        {
            question: "How do I book a tour?",
            answer: "You can book directly through our website by selecting your desired destination, choosing dates, and completing the checkout process. You can also call our support team at +234 916 622 6690 for assistance."
        },
        {
            question: "Can I modify my booking?",
            answer: "Yes, you can modify your booking up to 14 days before departure. Changes are subject to availability and may incur additional fees. Contact our support team for modifications."
        },
        {
            question: "How far in advance should I book?",
            answer: "We recommend booking at least 2-3 months in advance for popular destinations like Amazon, Serengeti, and Banff. For last-minute bookings, check our 'Deals' section for availability."
        },
        {
            question: "Do I need travel insurance?",
            answer: "Yes, we strongly recommend travel insurance for all our tours. It covers cancellations, medical emergencies, lost luggage, and other unexpected events."
        }
    ],
    travel: [
        {
            question: "What's included in the tour package?",
            answer: "Most packages include accommodation, guided tours, select meals, transportation to/from sites, and 24/7 support. Check individual destination pages for specific inclusions."
        },
        {
            question: "What should I pack?",
            answer: "Essentials include: comfortable hiking shoes, weather-appropriate clothing, insect repellent, sunscreen, hat, reusable water bottle, camera, and any personal medications."
        },
        {
            question: "Are flights included?",
            answer: "International flights are not included in standard packages. However, we can arrange them for an additional fee. Local transportation to/from sites IS included."
        },
        {
            question: "What's the cancellation policy?",
            answer: "Free cancellation up to 30 days before departure. 50% refund 14-30 days before. No refund within 14 days of departure. COVID-19 related cancellations are fully refundable."
        }
    ],
    payment: [
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, bank transfers, and mobile money (for African customers). Secure payment processing guaranteed."
        },
        {
            question: "Do you offer payment plans?",
            answer: "Yes! We offer interest-free payment plans. Pay 30% deposit to secure your booking, then pay the remainder in monthly installments. Contact our team to set up a plan."
        },
        {
            question: "Is it safe to pay online?",
            answer: "Absolutely! Our payment gateway is PCI-DSS compliant and uses 256-bit SSL encryption. Your financial information is never stored on our servers."
        },
        {
            question: "Do you charge extra fees?",
            answer: "No hidden fees! The price you see includes all taxes, service charges, and park fees. The only extras are optional activities and personal expenses."
        }
    ],
    refund: [
        {
            question: "How do I request a refund?",
            answer: "Contact our support team with your booking ID and reason for refund. Refunds are processed within 5-7 business days to your original payment method."
        },
        {
            question: "How long do refunds take?",
            answer: "Once approved, refunds take 5-10 business days to appear in your account, depending on your bank's processing time."
        },
        {
            question: "Are deposits refundable?",
            answer: "Deposits are refundable if you cancel more than 30 days before departure. Within 30 days, deposits are non-refundable but can be transferred to a future booking."
        }
    ],
    conservation: [
        {
            question: "How does BDevC support conservation?",
            answer: "We plant 10 trees for every booking, donate 5% of profits to conservation organizations, and use eco-friendly practices in all our operations."
        },
        {
            question: "Can I participate in conservation activities?",
            answer: "Yes! Many of our tours include tree planting, beach cleanups, and wildlife monitoring. We also offer dedicated eco-volunteer programs."
        },
        {
            question: "Are your tours eco-friendly?",
            answer: "Yes! We partner with eco-certified lodges, use local guides, minimize plastic waste, and offset carbon emissions from all tours."
        }
    ]
};

// ===== CHATBOT RESPONSES =====
const chatResponses = {
    booking: "I'll help you with your booking! Please provide your booking ID or full name so I can look it up. You can also call our booking hotline at +234 916 622 6690.",
    cancel: "I understand you want to cancel. Our cancellation policy: Free cancellation 30+ days before departure. 50% refund 14-30 days before. No refund within 14 days. Would you like to proceed?",
    destinations: "We have amazing destinations! 🌍 Popular choices: Amazon Rainforest, Serengeti, Banff, Great Barrier Reef, Norwegian Fjords. Which interests you?",
    payment: "We accept Visa, Mastercard, Amex, PayPal, and bank transfers. We also offer interest-free payment plans! Would you like to set one up?",
    refund: "For refunds, please contact our support team with your booking ID. Refunds take 5-10 business days to process.",
    support: "A support agent will be with you shortly. In the meantime, check our FAQ or call +234 916 622 6690 for immediate assistance.",
    default: "Thanks for your message! Our team will review and get back to you soon. For urgent issues, please call +234 916 622 6690."
};

// ===== DOM Elements =====
let currentFaqCategory = "general";
let ticketCounter = 1234;

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", function() {
    renderFaqs();
    setupEventListeners();
    loadTheme();
    setupSearch();
});

// ===== RENDER FAQS =====
function renderFaqs() {
    const container = document.getElementById("faqList");
    if (!container) return;
    
    const faqs = faqData[currentFaqCategory];
    if (!faqs) return;
    
    let html = "";
    for (let i = 0; i < faqs.length; i++) {
        const faq = faqs[i];
        html += `
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFaq(this)">
                    <span>${faq.question}</span>
                    <span class="faq-icon">▼</span>
                </div>
                <div class="faq-answer">
                    <p>${faq.answer}</p>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}

function toggleFaq(element) {
    const faqItem = element.closest(".faq-item");
    faqItem.classList.toggle("open");
}

function filterFaqs(category) {
    currentFaqCategory = category;
    renderFaqs();
    
    // Update active button
    const buttons = document.querySelectorAll(".faq-cat-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
        if (buttons[i].getAttribute("data-cat") === category) {
            buttons[i].classList.add("active");
        }
    }
}

// ===== SEARCH FAQS =====
function setupSearch() {
    const searchInput = document.getElementById("searchFaq");
    if (!searchInput) return;
    
    searchInput.addEventListener("input", function(e) {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm === "") {
            renderFaqs();
            return;
        }
        
        // Search through all FAQ categories
        let allFaqs = [];
        for (let cat in faqData) {
            allFaqs = allFaqs.concat(faqData[cat]);
        }
        
        const filtered = allFaqs.filter(function(faq) {
            return faq.question.toLowerCase().includes(searchTerm) || 
                   faq.answer.toLowerCase().includes(searchTerm);
        });
        
        const container = document.getElementById("faqList");
        if (container) {
            let html = "";
            for (let i = 0; i < filtered.length; i++) {
                const faq = filtered[i];
                html += `
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>${faq.question}</span>
                            <span class="faq-icon">▼</span>
                        </div>
                        <div class="faq-answer">
                            <p>${faq.answer}</p>
                        </div>
                    </div>
                `;
            }
            container.innerHTML = html || '<p style="text-align:center;padding:40px;">No results found. Try different keywords! 🔍</p>';
        }
    });
}

// ===== LIVE CHAT =====
function openLiveChat() {
    const chatWidget = document.getElementById("chatWidget");
    chatWidget.classList.add("open");
}

function closeChat() {
    const chatWidget = document.getElementById("chatWidget");
    chatWidget.classList.remove("open");
}

function sendChatMessage() {
    const input = document.getElementById("chatMessageInput");
    const message = input.value.trim();
    if (!message) return;
    
    addChatMessage(message, "user");
    input.value = "";
    
    // Bot response
    setTimeout(function() {
        let response = getChatResponse(message);
        addChatMessage(response, "bot");
    }, 500);
}

function addChatMessage(text, sender) {
    const container = document.getElementById("chatMessagesCs");
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-cs " + sender;
    
    const avatar = document.createElement("div");
    avatar.className = "message-avatar-cs";
    avatar.textContent = sender === "user" ? "👤" : "🌿";
    
    const bubble = document.createElement("div");
    bubble.className = "message-bubble-cs";
    bubble.textContent = text;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

function getChatResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes("book") || lowerMsg.includes("reservation")) {
        return chatResponses.booking;
    } else if (lowerMsg.includes("cancel")) {
        return chatResponses.cancel;
    } else if (lowerMsg.includes("destination") || lowerMsg.includes("place") || lowerMsg.includes("travel")) {
        return chatResponses.destinations;
    } else if (lowerMsg.includes("pay") || lowerMsg.includes("card") || lowerMsg.includes("price")) {
        return chatResponses.payment;
    } else if (lowerMsg.includes("refund")) {
        return chatResponses.refund;
    } else if (lowerMsg.includes("help") || lowerMsg.includes("support")) {
        return chatResponses.support;
    } else {
        return "Thank you for contacting BDevC Nature support! 🌿 Our team will respond shortly. For immediate assistance, please call +234 916 622 6690.\n\nIs there anything specific I can help you with? (booking, cancellation, destinations, payments)";
    }
}

// ===== TICKET SUBMISSION =====
function submitTicket(event) {
    event.preventDefault();
    
    const name = document.getElementById("ticketName").value;
    const email = document.getElementById("ticketEmail").value;
    const bookingId = document.getElementById("ticketBookingId").value;
    const type = document.getElementById("ticketType").value;
    const subject = document.getElementById("ticketSubject").value;
    const message = document.getElementById("ticketMessage").value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    
    // Generate ticket number
    ticketCounter++;
    const ticketNumber = "TKT-" + Date.now() + "-" + ticketCounter;
    
    // Store in localStorage (simulate database)
    const tickets = JSON.parse(localStorage.getItem("supportTickets") || "[]");
    tickets.push({
        ticketNumber: ticketNumber,
        name: name,
        email: email,
        bookingId: bookingId,
        type: type,
        subject: subject,
        message: message,
        priority: priority,
        status: "open",
        date: new Date().toISOString()
    });
    localStorage.setItem("supportTickets", JSON.stringify(tickets));
    
    // Show success modal
    document.getElementById("ticketNumber").textContent = ticketNumber;
    document.getElementById("successModal").classList.add("show");
    
    // Reset form
    document.getElementById("supportTicketForm").reset();
    
    // Send email notification (simulated)
    console.log("Ticket submitted:", ticketNumber);
}

function closeModal() {
    document.getElementById("successModal").classList.remove("show");
}

// ===== THEME FUNCTIONS =====
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("csTheme", isDark ? "dark" : "light");
    
    const themeBtn = document.getElementById("themeToggle");
    themeBtn.textContent = isDark ? "☀️" : "🌙";
}

function loadTheme() {
    const savedTheme = localStorage.getItem("csTheme");
    const themeBtn = document.getElementById("themeToggle");
    
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
}

// ===== SCROLL FUNCTION =====
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId + "Section");
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
    // FAQ category buttons
    const faqBtns = document.querySelectorAll(".faq-cat-btn");
    for (let i = 0; i < faqBtns.length; i++) {
        faqBtns[i].addEventListener("click", function() {
            const cat = this.getAttribute("data-cat");
            filterFaqs(cat);
        });
    }
    
    // Theme toggle
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
    
    // Chat close button
    const closeChatBtn = document.getElementById("closeChat");
    if (closeChatBtn) closeChatBtn.addEventListener("click", closeChat);
    
    // Send message button
    const sendBtn = document.getElementById("sendChatMessage");
    if (sendBtn) sendBtn.addEventListener("click", sendChatMessage);
    
    // Enter key for chat
    const chatInput = document.getElementById("chatMessageInput");
    if (chatInput) {
        chatInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") sendChatMessage();
        });
    }
    
    // Quick message buttons
    const quickMsgs = document.querySelectorAll(".quick-msg");
    for (let i = 0; i < quickMsgs.length; i++) {
        quickMsgs[i].addEventListener("click", function() {
            const msg = this.getAttribute("data-msg");
            const input = document.getElementById("chatMessageInput");
            input.value = msg;
            sendChatMessage();
        });
    }
    
    // Ticket form submission
    const ticketForm = document.getElementById("supportTicketForm");
    if (ticketForm) ticketForm.addEventListener("submit", submitTicket);
}

// ===== MAKE FUNCTIONS GLOBAL =====
window.toggleFaq = toggleFaq;
window.filterFaqs = filterFaqs;
window.openLiveChat = openLiveChat;
window.closeChat = closeChat;
window.sendChatMessage = sendChatMessage;
window.submitTicket = submitTicket;
window.closeModal = closeModal;
window.toggleTheme = toggleTheme;
window.scrollToSection = scrollToSection;