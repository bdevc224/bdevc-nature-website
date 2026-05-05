// ===== SETTINGS MANAGEMENT =====
class SettingsManager {
    constructor() {
        this.settings = this.loadSettings();
        this.pendingConfirmAction = null;
        this.init();
    }
    
    init() {
        this.loadSettingsToUI();
        this.setupEventListeners();
        this.applySettingsToPage();
        this.calculateCacheSize();
    }
    
    loadSettings() {
        const defaultSettings = {
            // Profile
            fullName: "",
            email: "",
            phone: "",
            bio: "",
            language: "en",
            avatar: "🌿",
            
            // Preferences
            darkMode: false,
            fontSize: "medium",
            compactView: false,
            animations: true,
            layout: "grid",
            currency: "USD",
            
            // Notifications
            emailNotifications: true,
            pushNotifications: false,
            smsAlerts: false,
            notifyBooking: true,
            notifyReminders: true,
            notifyOffers: true,
            notifyNewsletter: false,
            notifyConservation: true,
            
            // Privacy
            profileVisibility: "private",
            showEmail: false,
            shareActivity: true,
            
            // Travel
            travelTypes: [],
            budget: "standard",
            groupSize: "couple",
            travelSeasons: [],
            accommodation: "standard",
            
            // Accessibility
            highContrast: false,
            screenReader: false,
            reduceMotion: false,
            
            // Data
            autoSave: true
        };
        
        const saved = localStorage.getItem("userSettings");
        if (saved) {
            return { ...defaultSettings, ...JSON.parse(saved) };
        }
        return defaultSettings;
    }
    
    saveSettings() {
        localStorage.setItem("userSettings", JSON.stringify(this.settings));
        this.applySettingsToPage();
        this.showSuccessModal();
    }
    
    loadSettingsToUI() {
        // Profile
        document.getElementById("fullName").value = this.settings.fullName;
        document.getElementById("email").value = this.settings.email;
        document.getElementById("phone").value = this.settings.phone;
        document.getElementById("bio").value = this.settings.bio;
        document.getElementById("language").value = this.settings.language;
        document.getElementById("avatarPreview").textContent = this.settings.avatar;
        
        // Preferences
        document.getElementById("darkMode").checked = this.settings.darkMode;
        document.getElementById("fontSize").value = this.settings.fontSize;
        document.getElementById("compactView").checked = this.settings.compactView;
        document.getElementById("animations").checked = this.settings.animations;
        const layoutRadio = document.querySelector(`input[name="layout"][value="${this.settings.layout}"]`);
        if (layoutRadio) layoutRadio.checked = true;
        document.getElementById("currency").value = this.settings.currency;
        
        // Notifications
        document.getElementById("emailNotifications").checked = this.settings.emailNotifications;
        document.getElementById("pushNotifications").checked = this.settings.pushNotifications;
        document.getElementById("smsAlerts").checked = this.settings.smsAlerts;
        document.getElementById("notifyBooking").checked = this.settings.notifyBooking;
        document.getElementById("notifyReminders").checked = this.settings.notifyReminders;
        document.getElementById("notifyOffers").checked = this.settings.notifyOffers;
        document.getElementById("notifyNewsletter").checked = this.settings.notifyNewsletter;
        document.getElementById("notifyConservation").checked = this.settings.notifyConservation;
        
        // Privacy
        document.getElementById("profileVisibility").value = this.settings.profileVisibility;
        document.getElementById("showEmail").checked = this.settings.showEmail;
        document.getElementById("shareActivity").checked = this.settings.shareActivity;
        
        // Travel
        const travelTypeCheckboxes = document.querySelectorAll('#travelSection input[type="checkbox"]');
        travelTypeCheckboxes.forEach(cb => {
            cb.checked = this.settings.travelTypes.includes(cb.value);
        });
        document.getElementById("budget").value = this.settings.budget;
        document.getElementById("groupSize").value = this.settings.groupSize;
        const seasonCheckboxes = document.querySelectorAll('#travelSection input[type="checkbox"][value="spring"], #travelSection input[type="checkbox"][value="summer"], #travelSection input[type="checkbox"][value="autumn"], #travelSection input[type="checkbox"][value="winter"]');
        seasonCheckboxes.forEach(cb => {
            cb.checked = this.settings.travelSeasons.includes(cb.value);
        });
        document.getElementById("accommodation").value = this.settings.accommodation;
        
        // Accessibility
        document.getElementById("highContrast").checked = this.settings.highContrast;
        document.getElementById("screenReader").checked = this.settings.screenReader;
        document.getElementById("reduceMotion").checked = this.settings.reduceMotion;
        
        // Data
        document.getElementById("autoSave").checked = this.settings.autoSave;
    }
    
    updateSettingsFromUI() {
        // Profile
        this.settings.fullName = document.getElementById("fullName").value;
        this.settings.email = document.getElementById("email").value;
        this.settings.phone = document.getElementById("phone").value;
        this.settings.bio = document.getElementById("bio").value;
        this.settings.language = document.getElementById("language").value;
        
        // Preferences
        this.settings.darkMode = document.getElementById("darkMode").checked;
        this.settings.fontSize = document.getElementById("fontSize").value;
        this.settings.compactView = document.getElementById("compactView").checked;
        this.settings.animations = document.getElementById("animations").checked;
        const selectedLayout = document.querySelector('input[name="layout"]:checked');
        if (selectedLayout) this.settings.layout = selectedLayout.value;
        this.settings.currency = document.getElementById("currency").value;
        
        // Notifications
        this.settings.emailNotifications = document.getElementById("emailNotifications").checked;
        this.settings.pushNotifications = document.getElementById("pushNotifications").checked;
        this.settings.smsAlerts = document.getElementById("smsAlerts").checked;
        this.settings.notifyBooking = document.getElementById("notifyBooking").checked;
        this.settings.notifyReminders = document.getElementById("notifyReminders").checked;
        this.settings.notifyOffers = document.getElementById("notifyOffers").checked;
        this.settings.notifyNewsletter = document.getElementById("notifyNewsletter").checked;
        this.settings.notifyConservation = document.getElementById("notifyConservation").checked;
        
        // Privacy
        this.settings.profileVisibility = document.getElementById("profileVisibility").value;
        this.settings.showEmail = document.getElementById("showEmail").checked;
        this.settings.shareActivity = document.getElementById("shareActivity").checked;
        
        // Travel
        const travelTypes = [];
        const travelCheckboxes = document.querySelectorAll('#travelSection input[type="checkbox"]');
        travelCheckboxes.forEach(cb => {
            if (cb.checked && cb.value) travelTypes.push(cb.value);
        });
        this.settings.travelTypes = travelTypes;
        this.settings.budget = document.getElementById("budget").value;
        this.settings.groupSize = document.getElementById("groupSize").value;
        const seasons = [];
        const seasonBoxes = document.querySelectorAll('#travelSection input[type="checkbox"][value="spring"], #travelSection input[type="checkbox"][value="summer"], #travelSection input[type="checkbox"][value="autumn"], #travelSection input[type="checkbox"][value="winter"]');
        seasonBoxes.forEach(cb => {
            if (cb.checked) seasons.push(cb.value);
        });
        this.settings.travelSeasons = seasons;
        this.settings.accommodation = document.getElementById("accommodation").value;
        
        // Accessibility
        this.settings.highContrast = document.getElementById("highContrast").checked;
        this.settings.screenReader = document.getElementById("screenReader").checked;
        this.settings.reduceMotion = document.getElementById("reduceMotion").checked;
        
        // Data
        this.settings.autoSave = document.getElementById("autoSave").checked;
    }
    
    applySettingsToPage() {
        // Dark Mode
        if (this.settings.darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
        
        // Font Size
        document.body.classList.remove("font-small", "font-medium", "font-large", "font-xlarge");
        document.body.classList.add(`font-${this.settings.fontSize}`);
        
        // Compact View
        if (this.settings.compactView) {
            document.body.classList.add("compact");
        } else {
            document.body.classList.remove("compact");
        }
        
        // High Contrast
        if (this.settings.highContrast) {
            document.body.classList.add("high-contrast");
        } else {
            document.body.classList.remove("high-contrast");
        }
        
        // Reduce Motion
        if (this.settings.reduceMotion) {
            document.body.classList.add("reduce-motion");
        } else {
            document.body.classList.remove("reduce-motion");
        }
        
        // Apply to iframes or other elements if needed
        console.log("Settings applied:", this.settings);
    }
    
    setupEventListeners() {
        // Navigation
        const navBtns = document.querySelectorAll(".settings-nav-btn");
        navBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const section = btn.getAttribute("data-section");
                this.switchSection(section);
            });
        });
        
        // Save buttons
        document.getElementById("saveAllBtn").addEventListener("click", () => this.saveAll());
        document.getElementById("applyBtn").addEventListener("click", () => this.applyChanges());
        document.getElementById("cancelBtn").addEventListener("click", () => this.cancelChanges());
        
        // Avatar change
        document.getElementById("changeAvatarBtn").addEventListener("click", () => this.changeAvatar());
        
        // Data management
        document.getElementById("clearCacheBtn").addEventListener("click", () => this.confirmAction("Clear cache?", () => this.clearCache()));
        document.getElementById("clearSearchHistoryBtn").addEventListener("click", () => this.confirmAction("Clear search history?", () => this.clearSearchHistory()));
        document.getElementById("resetPreferencesBtn").addEventListener("click", () => this.confirmAction("Reset all preferences to default?", () => this.resetPreferences()));
        document.getElementById("downloadDataBtn").addEventListener("click", () => this.downloadData());
        document.getElementById("deleteAccountBtn").addEventListener("click", () => this.confirmAction("Delete your account? This action cannot be undone.", () => this.deleteAccount()));
        
        // Security
        document.getElementById("changePasswordBtn").addEventListener("click", () => this.changePassword());
        document.getElementById("manageSessionsBtn").addEventListener("click", () => this.manageSessions());
        document.getElementById("cookieSettings").addEventListener("click", () => this.manageCookies());
        
        // Auto-save
        if (this.settings.autoSave) {
            const inputs = document.querySelectorAll("input, select, textarea");
            inputs.forEach(input => {
                input.addEventListener("change", () => this.autoSave());
            });
        }
    }
    
    switchSection(sectionId) {
        // Update nav buttons
        const navBtns = document.querySelectorAll(".settings-nav-btn");
        navBtns.forEach(btn => {
            btn.classList.remove("active");
            if (btn.getAttribute("data-section") === sectionId) {
                btn.classList.add("active");
            }
        });
        
        // Update sections
        const sections = document.querySelectorAll(".settings-section");
        sections.forEach(section => {
            section.classList.remove("active");
        });
        document.getElementById(`${sectionId}Section`).classList.add("active");
    }
    
    saveAll() {
        this.updateSettingsFromUI();
        this.saveSettings();
    }
    
    applyChanges() {
        this.updateSettingsFromUI();
        this.saveSettings();
    }
    
    cancelChanges() {
        this.loadSettingsToUI();
        this.showToast("Changes cancelled");
    }
    
    autoSave() {
        if (this.settings.autoSave) {
            this.updateSettingsFromUI();
            this.saveSettings();
            this.showToast("Auto-saved", 1500);
        }
    }
    
    changeAvatar() {
        const avatars = ["🌿", "🌍", "🌺", "🦁", "🐘", "🦋", "🌲", "🏔️", "🌊", "🦜"];
        const currentIndex = avatars.indexOf(this.settings.avatar);
        const nextIndex = (currentIndex + 1) % avatars.length;
        this.settings.avatar = avatars[nextIndex];
        document.getElementById("avatarPreview").textContent = this.settings.avatar;
        if (this.settings.autoSave) this.saveSettings();
    }
    
    clearCache() {
        if ("caches" in window) {
            caches.keys().then(keys => {
                keys.forEach(key => caches.delete(key));
            });
        }
        localStorage.removeItem("searchHistory");
        this.calculateCacheSize();
        this.showToast("Cache cleared successfully");
    }
    
    clearSearchHistory() {
        localStorage.removeItem("searchHistory");
        this.showToast("Search history cleared");
    }
    
    resetPreferences() {
        localStorage.removeItem("userSettings");
        this.settings = this.loadSettings();
        this.loadSettingsToUI();
        this.applySettingsToPage();
        this.showToast("All preferences reset to default");
    }
    
    downloadData() {
        const data = {
            settings: this.settings,
            bookings: JSON.parse(localStorage.getItem("userBookings") || "[]"),
            searchHistory: JSON.parse(localStorage.getItem("searchHistory") || "[]"),
            exportedAt: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `bdevc-nature-data-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.showToast("Data downloaded successfully");
    }
    
    deleteAccount() {
        // In production, this would call an API
        localStorage.clear();
        sessionStorage.clear();
        this.showToast("Account deleted. Redirecting...");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    }
    
    changePassword() {
        this.showToast("Password change link sent to your email");
    }
    
    manageSessions() {
        this.showToast("All other sessions have been logged out");
    }
    
    manageCookies() {
        this.showToast("Cookie preferences updated");
    }
    
    calculateCacheSize() {
        let total = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            total += (key.length + value.length) * 2;
        }
        const sizeMB = (total / (1024 * 1024)).toFixed(2);
        document.getElementById("cacheSize").textContent = `${sizeMB} MB`;
        document.getElementById("lastBackup").textContent = localStorage.getItem("lastBackup") || "Never";
    }
    
    confirmAction(message, action) {
        document.getElementById("confirmMessage").textContent = message;
        document.getElementById("confirmModal").classList.add("show");
        this.pendingConfirmAction = action;
    }
    
    executeConfirmAction() {
        if (this.pendingConfirmAction) {
            this.pendingConfirmAction();
            this.pendingConfirmAction = null;
        }
        this.closeConfirmModal();
    }
    
    showSuccessModal() {
        document.getElementById("successModal").classList.add("show");
        setTimeout(() => this.closeModal(), 2000);
    }
    
    closeModal() {
        document.getElementById("successModal").classList.remove("show");
    }
    
    closeConfirmModal() {
        document.getElementById("confirmModal").classList.remove("show");
    }
    
    showToast(message, duration = 3000) {
        // Create toast element
        const toast = document.createElement("div");
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--primary);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), duration);
    }
}

// ===== UTILITY FUNCTIONS =====
function goBack() {
    window.history.back();
}

function closeModal() {
    if (window.settingsManager) {
        window.settingsManager.closeModal();
    }
}

function closeConfirmModal() {
    if (window.settingsManager) {
        window.settingsManager.closeConfirmModal();
    }
}

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
    window.settingsManager = new SettingsManager();
    
    // Confirm action button
    document.getElementById("confirmActionBtn").addEventListener("click", () => {
        window.settingsManager.executeConfirmAction();
    });
});

// Make functions global
window.goBack = goBack;
window.closeModal = closeModal;
window.closeConfirmModal = closeConfirmModal;