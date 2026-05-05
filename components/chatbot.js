// ===== CHATBOT KNOWLEDGE BASE =====
const knowledgeBase = {
    // Fascinating Nature Facts
    facts: [
        "Did you know? A single mature tree can absorb up to 48 pounds of carbon dioxide per year!",
        "The Amazon Rainforest produces 20% of the world's oxygen!",
        "Honeybees can recognize human faces and have their own language (waggle dance)!",
        "The world's oldest living organism is a 9,550-year-old spruce tree in Sweden!",
        "Monarch butterflies travel up to 3,000 miles during migration!",
        "Bamboo can grow up to 35 inches in a single day!",
        "Octopuses have three hearts and blue blood!",
        "There's a 'rainforest' underwater - coral reefs are often called the rainforests of the sea!",
        "Giraffes only sleep for about 30 minutes to 2 hours per day!",
        "The coldest place on Earth is Antarctica, reaching -128.6°F (-89.2°C)!",
        "The Sahara Desert expands by about 0.8 kilometers per month!",
        "Elephants are one of the few animals that can recognize themselves in a mirror!",
        "The largest living organism on Earth is a fungus in Oregon spanning 2.4 miles!",
        "The Rafflesia flower can grow up to 3 feet across and smells like rotting meat!",
        "Greenland sharks can live for 400+ years, making them the longest-living vertebrates!",
        "There are more than 1,500 active volcanoes in the world today!",
        "Ants can carry up to 50 times their own body weight!",
        "Spiders produce 7 different types of silk, each stronger than steel by weight!",
        "The Mariana Trench is deeper than Mount Everest is tall - over 36,000 feet deep!",
        "Dolphins give each other unique names and can call each other by name!"
    ],

    // Horrors of Nature
    horrors: [
        "Warning: Nature can be terrifying! Here are some dark facts:",
        "Driver ants in Africa can form colonies of 20 million and consume everything in their path!",
        "The 1815 eruption of Mount Tambora killed 90,000 people and caused 'The Year Without a Summer'!",
        "The Box Jellyfish has enough venom to kill 60 humans in 3 minutes!",
        "Tsunamis can travel at speeds up to 500 mph - as fast as a jet airplane!",
        "The Brazilian Wandering Spider's venom can cause painful erections lasting hours in men!",
        "Lightning strikes the Earth 100 times per second - about 8.6 million times per day!",
        "The deadliest tornado in history killed 1,300 people in Bangladesh in 1989!",
        "Saltwater crocodiles have the strongest bite force of any animal - 3,700 PSI!",
        "The heatwave of 2003 killed 70,000 people across Europe!",
        "Mosquitoes kill more humans than any other animal - over 700,000 deaths per year!",
        "A derecho (inland hurricane) can cause as much damage as a Category 3 hurricane!",
        "The Black Death (bubonic plague) killed 200 million people - caused by bacteria from fleas!",
        "Grizzly bears can run 35 mph and have been known to hunt humans when hungry!",
        "Rogue waves can appear without warning and reach heights of 100 feet!",
        "Wildfires can create their own weather systems, including fire tornadoes!",
        "Avalanches can reach speeds of 80 mph and bury entire villages!",
        "Funnel web spiders have venom that can kill a human in 15 minutes!",
        "Supervolcanoes like Yellowstone could eject 1,000 cubic km of material if they erupt!",
        "Inland Taipan snakes have enough venom in one bite to kill 100 adult humans!"
    ],

    // Human-Nature Interaction
    interaction: [
        "Humans have a complex relationship with nature. Here's how we interact:",
        "Agriculture: We've domesticated over 10,000 plant species for food!",
        "Urbanization: 55% of the world's population now lives in cities.",
        "Water management: Humans have built over 800,000 dams worldwide!",
        "Wildlife conflict: Human-animal conflict costs $35 billion annually in crop losses.",
        "Deforestation: We lose 18.7 million acres of forests annually.",
        "Positive actions: Over 100 countries have banned single-use plastics!",
        "Reforestation: China's 'Great Green Wall' has planted over 66 billion trees!",
        "Marine protection: The ocean now has over 5,000 Marine Protected Areas!",
        "Renewable energy: Solar and wind now provide 10% of global electricity!",
        "Ecotourism: Generates $600 billion annually and supports conservation!",
        "Indigenous peoples: 80% of biodiversity is protected by indigenous communities!",
        "Pollution: Humans produce 300 million tons of plastic waste each year!",
        "Climate change: Global temperatures have risen 1.1°C since pre-industrial times!",
        "Pollinators: 75% of crops depend on pollinators threatened by human activity!"
    ],

    // Conservation & Improvement
    conservation: [
        "Want to help nature? Here are actionable tips:",
        "Plant native species in your garden - they support local wildlife!",
        "Reduce plastic use - bring reusable bags, bottles, and containers!",
        "Compost food waste - it reduces methane emissions from landfills!",
        "Save water - fix leaks and take shorter showers!",
        "Support conservation organizations like WWF or The Nature Conservancy!",
        "Use energy-efficient appliances and LED bulbs!",
        "Choose sustainable products with eco-certifications!",
        "Volunteer for local clean-ups and tree planting events!",
        "Reduce meat consumption - livestock produces 14.5% of greenhouse gases!",
        "Educate others about environmental issues and solutions!",
        "Together, we CAN make a difference! Every small action counts!",
        "Carpool or use public transport to reduce carbon emissions!",
        "Install solar panels or choose green energy providers!",
        "Buy second-hand and avoid fast fashion - clothing produces 10% of emissions!",
        "Plant trees - one tree can absorb 48 pounds of CO2 per year!"
    ],

    // Travel Destinations
    destinations: {
        "amazon": "**Amazon Rainforest** - Brazil/Peru/Colombia\nExperience the world's largest tropical rainforest! Activities: jungle treks, wildlife spotting, river cruises, and indigenous cultural experiences.\nBest time: June-November\n\n <a href='https://bc-travel-tour-vacation-web.netlify.app/' target='_blank' class='chat-link'>Book Amazon Tour →</a>",
        "yellowstone": "**Yellowstone National Park** - USA\nFirst national park in the world! Features: Old Faithful geyser, hot springs, bison herds, and Grand Prismatic Spring.\nBest time: April-September\n\n <a href='https://bc-travel-tour-vacation-web.netlify.app/' target='_blank' class='chat-link'>Book Yellowstone Tour →</a>",
        "banff": "**Banff National Park** - Canada\nStunning Canadian Rockies! Activities: hiking, skiing, lake canoeing, wildlife watching (bears, elk, moose).\nBest time: June-August (summer), December-March (skiing)\n\n <a href='https://bc-travel-tour-vacation-web.netlify.app/' target='_blank' class='chat-link'>Book Banff Tour →</a>",
        "machu": "**Machu Picchu & Sacred Valley** - Peru\nInca citadel in the Andes! Activities: Inca Trail trek, llama encounters, cloud forest exploration.\nBest time: May-September\n\n <a href='https://bc-travel-tour-vacation-web.netlify.app/' target='_blank' class='chat-link'>Book Machu Picchu Tour →</a>",
        "serengeti": "**Serengeti National Park** - Tanzania\nHome of the Great Migration! Witness 1.5 million wildebeest and 200,000 zebras crossing the plains.\nBest time: June-October (migration viewing)\n\n <a href='https://bc-travel-tour-vacation-web.netlify.app/' target='_blank' class='chat-link'>Book Serengeti Safari →</a>",
        "torres": "**Torres del Paine** - Chile\nPatagonian paradise! Features: granite towers, glaciers, turquoise lakes, and guanacos.\nBest time: November-March\n\n <a href='https://bc-travel-tour-vacation-web.netlify.app/' target='_blank' class='chat-link'>Book Patagonia Tour →</a>",
        "great_barrier": "**Great Barrier Reef** - Australia\nWorld's largest coral reef system! Activities: scuba diving, snorkeling, sailing, glass-bottom boats.\nBest time: June-October\n\n <a href='https://bc-travel-tour-vacation-web.netlify.app/' target='_blank' class='chat-link'>Book Great Barrier Reef Tour →</a>",
        "norway": "**Norwegian Fjords** - Norway\nDramatic cliffs and waterfalls! Activities: fjord cruises, kayaking, hiking Pulpit Rock, Northern Lights viewing.\nBest time: May-September\n\n <a href='https://bc-travel-tour-vacation-web.netlify.app/' target='_blank' class='chat-link'>Book Norway Fjords Tour →</a>",
        "costa_rica": "**Costa Rica Rainforests**\nBiodiversity hotspot! Features: sloths, monkeys, toucans, active volcanoes, and cloud forests.\nBest time: December-April\n\n <a href='https://bc-travel-tour-vacation-web.netlify.app/' target='_blank' class='chat-link'>Book Costa Rica Tour →</a>",
        "new_zealand": "**New Zealand South Island**\nMiddle-earth landscapes! Activities: hiking glaciers, bungee jumping, fjord cruises, stargazing.\nBest time: December-February\n\n <a href='https://bc-travel-tour-vacation-web.netlify.app/' target='_blank' class='chat-link'>Book New Zealand Adventure →</a>"
    },

    // Services Offered with Clickable Links
    services: [
        "**Our Nature Travel Services**\n\n",
        "**Adventure Tours**: Guided hiking, trekking, and camping expeditions to remote natural sites.\n",
        "**Wildlife Safaris**: Expert-led safaris in Africa, Amazon, and Asian jungles.\n",
        "**Mountain Expeditions**: Climb Kilimanjaro, Himalayas, Andes, or Rockies with expert guides.\n",
        "**Water Adventures**: Kayaking, rafting, diving, and snorkeling trips to pristine waters.\n",
        "**Eco-Lodges**: Stay in sustainable accommodations that give back to nature.\n",
        "**Photography Tours**: Capture nature's beauty with professional photographers.\n",
        "**Retreats**: Yoga, meditation, and wellness retreats in serene natural settings.\n",
        "**Family Adventures**: Kid-friendly nature exploration and educational programs.\n",
        "**Educational Programs**: Learn about ecology, conservation, and wildlife biology.\n",
        "**Pricing**: Custom packages from $500 - $10,000 depending on destination and duration.\n",
        "**Book Now**: <a href='https://bc-travel-tour-vacation-web.netlify.app/' target='_blank' class='chat-link'>Visit our booking site →</a>"
    ],

    // Contact Info with Clickable Links
    contact: [
        "**Contact NatureBot Travel & Tours**\n\n",
        "**Head Office**: 123 Nature Street, Eco City, Earth 12345\n\n",
        "**Email**: \n   • <a href='mailto:bdevc224@gmail.com' class='chat-link'>bdevc224@gmail.com</a> (General & Support)\n   • <a href='mailto:tours@naturebot.com' class='chat-link'>tours@naturebot.com</a> (Bookings)\n\n",
        "**Phone**: \n   • <a href='tel:+2349166226690' class='chat-link'>+234 916 622 6690</a> (Nigeria Office)\n   • <a href='tel:+15551234567' class='chat-link'>+1 (555) 123-4567</a> (USA Office)\n\n",
        "**WhatsApp**: <a href='https://wa.me/2349166226690' target='_blank' class='chat-link'>Chat with us on WhatsApp →</a>\n\n",
        "**Website**: <a href='index.html' class='chat-link'>www.bdevcnature.com</a>\n\n",
        "**Social Media**:\n   • <a href='https://instagram.com' target='_blank' class='chat-link'>Instagram: @bdevc_nature</a>\n   • <a href='https://facebook.com' target='_blank' class='chat-link'>Facebook: /bdevcnature</a>\n   • <a href='https://twitter.com' target='_blank' class='chat-link'>Twitter: @bdevc_nature</a>\n\n",
        "**Contact Form**: <a href='contact.html' class='chat-link'>Send us a message →</a>\n\n",
        "**Special Offer**: Mention 'NATUREBOT2024' for 15% off your first booking!\n\n",
        "**Find us on Google Maps**: <a href='https://maps.google.com/?q=Nigeria' target='_blank' class='chat-link'>View Location →</a>"
    ]
};

// ===== ENHANCED NATURAL LANGUAGE PROCESSING =====
function getBotResponse(userInput) {
    const input = userInput.toLowerCase().trim();
    
    // ===== GREETINGS =====
    const greetings = /^(hello|hi|hey|greetings|good morning|good afternoon|good evening|howdy|sup|yo|hola|bonjour|ciao)$/i;
    if (greetings.test(input) || input.match(/\b(hello|hi|hey)\b/)) {
        return "Hello there! I'm BdevC NatureBot, your guide to the natural world! How can I help you explore nature today? Feel free to ask me about facts, travel, conservation, or our services!";
    }
    
    // ===== HELP =====
    if (input.match(/\b(help|what can you do|options|menu|assist|capabilities|features|what do you do|how can you help)\b/)) {
        return "Here's what I can help with:\n\n Nature Facts\n⚡ Nature Horrors\n Human-Nature Interaction\n Conservation Tips\n Travel Destinations\n Place Recommendations\n Our Services\n Contact Information\n\nJust ask me about any of these topics! For example: 'tell me about nature', 'show me travel options', or 'how can I help the environment?'";
    }
    
    // ===== NATURE FACTS =====
    const factPatterns = [
        /tell me about nature/i,
        /(tell|share|give|show).*?(fact|information|knowledge).*?(nature|natural|wild|earth)/i,
        /(what|tell).*?(interesting|amazing|fascinating|cool|awesome).*?(fact|thing).*?(nature|natural)/i,
        /(nature|natural|wild).*?(fact|information|knowledge)/i,
        /(did you know|did you know that)/i,
        /(fascinating|amazing|cool|interesting|awesome).*?(fact|thing)/i,
        /tell me something (about|regarding) nature/i,
        /what (is|are).*?nature/i,
        /(explain|describe).*?nature/i
    ];
    
    if (factPatterns.some(pattern => pattern.test(input)) || 
        input.match(/\b(fact|facts|information|knowledge|interesting|amazing|fascinating)\b/) ||
        input.match(/^(nature|natural world|earth|planet)$/i)) {
        return getRandomItem(knowledgeBase.facts) + " Would you like to hear another fascinating fact? Just say 'another fact' or 'tell me more'!";
    }
    
    // ===== NATURE HORRORS =====
    const horrorPatterns = [
        /tell me about (nature horrors|scary nature|dangerous animals|natural disasters)/i,
        /(tell|share).*?(horror|scary|terrifying|dangerous|deadly|dark).*?(nature|natural|wild)/i,
        /(what|tell).*?(scary|horrifying|terrifying|dangerous|deadly).*?(thing|fact|event).*?(nature|natural)/i,
        /(nature|natural|wild).*?(horror|scary|danger|deadly|dark)/i,
        /(natural disaster|extreme weather|deadly animal|dangerous animal)/i,
        /(can nature be scary|is nature dangerous|what is the most dangerous)/i,
        /(horrifying|terrifying|frightening|creepy) (facts|things|events)/i
    ];
    
    if (horrorPatterns.some(pattern => pattern.test(input)) ||
        input.match(/\b(horror|horrors|scary|terrifying|dangerous|deadly|dark|threatening)\b/)) {
        return getRandomItem(knowledgeBase.horrors) + " Nature is beautiful but also powerful! Want to learn how to stay safe in nature?";
    }
    
    // ===== HUMAN-NATURE INTERACTION =====
    const interactionPatterns = [
        /how do humans (interact|affect|impact|influence) nature/i,
        /tell me about human (interaction|relationship|impact) with nature/i,
        /(what|how).*?humans.*?(interact|affect|impact|influence).*?(nature|environment|ecosystem)/i,
        /(human|people).*?(interaction|relationship|impact|affect).*?(nature|environment)/i,
        /(how|what).*?(humans treat nature|people affect environment)/i,
        /human (activity|activities).*?nature/i,
        /(relationship|connection) between humans and nature/i
    ];
    
    if (interactionPatterns.some(pattern => pattern.test(input)) ||
        input.match(/\b(interact|interaction|relationship|impact|affect|influence).*?(nature|environment|ecosystem)\b/i)) {
        return getRandomItem(knowledgeBase.interaction) + " Want to learn how we can improve our relationship with nature? Ask about 'conservation' or 'how to help nature'!";
    }
    
    // ===== CONSERVATION & IMPROVEMENT =====
    const conservationPatterns = [
        /how can (i|we|people|humans) (help|protect|save|improve|maintain) nature/i,
        /(tell|share).*?(ways|tips|methods).*?(help|protect|save) nature/i,
        /(conservation|sustainability|eco-friendly|environmentally friendly)/i,
        /how to (reduce|decrease|lessen).*?(pollution|carbon footprint|environmental impact)/i,
        /(tips|advice|suggestions).*?(eco|green|sustainable|environmental)/i,
        /what can (i|we) do to (help|protect) the (planet|environment|earth)/i,
        /(improve|maintain|preserve) nature/i,
        /(save|protect) (the planet|the earth|nature|wildlife)/i
    ];
    
    if (conservationPatterns.some(pattern => pattern.test(input)) ||
        input.match(/\b(conservation|sustainable|eco|green|environmental|protect|save|preserve)\b/i)) {
        return getRandomItem(knowledgeBase.conservation) + " Together we can make a difference! What would you like to know more about?";
    }
    
    // ===== TRAVEL & TOURS =====
    const travelPatterns = [
        /(tell|show) me (about|regarding) (travel|tours|vacation|trips|adventure)/i,
        /i want to (travel|tour|vacation|go on a trip|explore|hike|trek|adventure)/i,
        /(where|what).*?(travel|tour|vacation|trip|adventure|explore|hike|trek|expedition)/i,
        /(travel|tours|vacation|trips|adventure).*?(nature|natural|wild)/i,
        /(best places|destinations|locations).*?(travel|visit|go)/i,
        /(plan|book|arrange).*?(trip|vacation|tour|adventure)/i,
        /(hiking|trekking|camping|safari|diving|kayaking|climbing).*?(trip|tour|package)/i
    ];
    
    if (travelPatterns.some(pattern => pattern.test(input))) {
        return "**Ready for an adventure?** We offer amazing nature tours!\n\n" +
               "**Popular Destinations**: Amazon Rainforest, Yellowstone, Banff, Serengeti, Patagonia, Great Barrier Reef, Norwegian Fjords\n\n" +
               "**Activities**: Hiking, safaris, diving, kayaking, mountain climbing, wildlife photography, camping\n\n" +
               "**Packages range from $500-$10,000**\n\n" +
               "Want specific recommendations? Ask me about places like 'Amazon', 'Yellowstone', 'Banff', 'Serengeti', 'Patagonia', 'Costa Rica', 'New Zealand', 'Great Barrier Reef', or 'Norwegian Fjords'\n\n" +
               "<a href='https://bc-travel-tour-vacation-web.netlify.app/' target='_blank' class='chat-link'>Book Your Adventure Now →</a>\n\n" +
               "Or ask about 'services' to see all our offerings!";
    }
    
    // ===== SPECIFIC DESTINATIONS =====
    if (input.match(/amazon|rainforest|brazil|peru|colombia|amazon rainforest|amazon jungle|amazon river/i)) {
        return knowledgeBase.destinations.amazon;
    }
    
    if (input.match(/yellowstone|old faithful|geyser|yellowstone national park/i)) {
        return knowledgeBase.destinations.yellowstone;
    }
    
    if (input.match(/banff|canadian rockies|canada rockies|lake louise|moraine lake/i)) {
        return knowledgeBase.destinations.banff;
    }
    
    if (input.match(/machu picchu|peru|inca|andes|machu|sacred valley|inca trail/i)) {
        return knowledgeBase.destinations.machu;
    }
    
    if (input.match(/serengeti|safari|tanzania|wildebeest migration|africa safari|maasai mara|ngorongoro/i)) {
        return knowledgeBase.destinations.serengeti;
    }
    
    if (input.match(/patagonia|torres del paine|chile|argentina|patagonian|andes patagonia/i)) {
        return knowledgeBase.destinations.torres;
    }
    
    if (input.match(/great barrier reef|australia reef|scuba|snorkel|coral reef|queensland|cairns|whitsundays/i)) {
        return knowledgeBase.destinations.great_barrier;
    }
    
    if (input.match(/norway|fjord|norwegian fjords|bergen|northern lights|aurora borealis|oslo|flam/i)) {
        return knowledgeBase.destinations.norway;
    }
    
    if (input.match(/costa rica|sloth|monkey|cloud forest|monteverde|arenal|tortuguero|san jose/i)) {
        return knowledgeBase.destinations.costa_rica;
    }
    
    if (input.match(/new zealand|south island|north island|lord of the rings|middle earth|queenstown|milford sound|fiordland|auckland|wellington/i)) {
        return knowledgeBase.destinations.new_zealand;
    }
    
    // ===== PLACES TO VISIT / RECOMMENDATIONS =====
    const placesPatterns = [
        /(suggest|recommend|show).*?(place|location|destination|site).*?(visit|see|go|explore)/i,
        /where should (i|we) (visit|go|travel|explore)/i,
        /(best|top|nice|beautiful).*?(place|location|destination).*?(visit|see|travel)/i,
        /(where|what).*?(recommend|suggest).*?(nature|natural|wild|beautiful|scenic)/i,
        /show me (some|a few|a couple of) (places|destinations)/i,
        /(suggestion|recommendation).*?(place|destination|location)/i,
        /what (do you recommend|should i see|is worth visiting)/i
    ];
    
    if (placesPatterns.some(pattern => pattern.test(input))) {
        const destinations = Object.values(knowledgeBase.destinations);
        const randomDestinations = destinations.sort(() => 0.5 - Math.random()).slice(0, 3);
        return "**Top Recommended Destinations for You:**\n\n" + 
               randomDestinations.join("\n\n---\n\n") +
               "\n\nWhich destination interests you? Ask me for more details about any specific place! For example: 'tell me about the Amazon' or 'show me Yellowstone'\n\n🔗 <a href='https://bc-travel-tour-vacation-web.netlify.app/' target='_blank' class='chat-link'>View All Destinations →</a>";
    }
    
    // ===== SERVICES =====
    const servicesPatterns = [
        /(tell|show).*?(service|offer|package|tour package|booking|book a trip)/i,
        /what (services|packages|tours|offers).*?(you|your company) (provide|have|offer)/i,
        /(booking|reservation|package).*?(trip|tour|travel|vacation)/i,
        /how (much|to book|to reserve|to schedule)/i,
        /(price|cost|fee|rate).*?(tour|package|trip|service)/i,
        /(tell|show).*?(available|options).*?(tours|packages|trips)/i
    ];
    
    if (servicesPatterns.some(pattern => pattern.test(input))) {
        return knowledgeBase.services.join("\n") + "\n\n Special discount for first-time customers! Ready to book your adventure? <a href='/contact.html' class='chat-link'>Contact our team →</a>";
    }
    
    // ===== CONTACT =====
    const contactPatterns = [
        /(how|where).*?(contact|reach|call|find|locate).*?(you|your company|support|office)/i,
        /(email|phone|address|location|office|headquarters)/i,
        /(get in touch|reach out|contact info|contact information)/i,
        /(social media|instagram|facebook|twitter|linkedin)/i,
        /(support|customer service|help desk|assistance)/i,
        /(who|where).*?(call|email|phone).*?(book|inquire|question)/i
    ];
    
    if (contactPatterns.some(pattern => pattern.test(input))) {
        return knowledgeBase.contact.join("\n") + "\n\n We typically respond within 2 hours during business hours! <a href='contact.html' class='chat-link'>Send us a message →</a>";
    }
    
    // ===== THANK YOU =====
    if (input.match(/\b(thank|thanks|appreciate|grateful|much appreciated|thank you so much)\b/i)) {
        return " You're very welcome! It's my pleasure to help you explore and protect our beautiful planet. Is there anything else you'd like to know about nature, travel, or conservation? Feel free to ask me anything!\n\n <a href='index.html' class='chat-link'>Return to Homepage →</a>";
    }
    
    // ===== GOODBYE =====
    if (input.match(/\b(goodbye|bye|see you|farewell|cya|take care|see you later|talk later)\b/i)) {
        return " Goodbye, nature lover! Remember to explore responsibly and protect our planet. Come back anytime you need nature inspiration or travel advice! \n\n🔗 <a href='index.html' class='chat-link'>Visit Our Website →</a>\n\nBefore you go, would you like one last fascinating nature fact? Just say 'one more fact'!";
    }
    
    // ===== WEBSITE / HOME PAGE =====
    if (input.match(/\b(website|site|home page|main page|url|link|web address|online)\b/i)) {
        return " **Visit our website**: <a href='index.html' class='chat-link'>www.bdevcnature.com</a>\n\n **You'll find**:\n- Detailed destination guides\n- Blog with nature tips\n- Customer reviews\n- Online booking system\n- Special deals and discounts\n\n **Other Pages**:\n- <a href='about.html' class='chat-link'>About Us →</a>\n- <a href='service.html' class='chat-link'>Our Services →</a>\n- <a href='contact.html' class='chat-link'>Contact Us →</a>\n\nCan I help you find something specific on our site? Try asking about 'services' or 'travel'!";
    }
    
    // ===== MORE FACTS REQUEST =====
    if (input.match(/\b(another|more|next|another one|tell me another|another fact|another interesting|more facts)\b/i)) {
        return getRandomItem(knowledgeBase.facts) + "  Keep exploring! Want to learn about something specific? Ask me about 'horrors', 'travel', 'conservation', or 'human interaction'!";
    }
    
    // ===== ONE MORE FACT =====
    if (input.match(/\b(one more fact|last fact|final fact|one more|give me a fact)\b/i)) {
        return getRandomItem(knowledgeBase.facts) + " Hope you enjoyed learning about nature! Come back anytime for more fascinating facts and travel inspiration!\n\n <a href='service.html' class='chat-link'>Book a Nature Tour →</a>";
    }
    
    // ===== SAFETY IN NATURE =====
    if (input.match(/\b(safe|safety|stay safe|danger|precaution|survival).*?nature\b/i)) {
        return "**Staying Safe in Nature:**\n\n" +
               "Always tell someone your travel plans\n" +
               "Carry bear spray in bear country\n" +
               "Stay on marked trails\n" +
               "Check weather forecasts before heading out\n" +
               "Pack emergency supplies (first aid, water, food)\n" +
               "Learn about local wildlife before visiting\n" +
               "Don't approach or feed wild animals\n" +
               "Carry a map and compass (don't rely only on phones)\n\n" +
               "Want to learn about specific dangers? Ask about 'natural disasters' or 'dangerous animals'!\n\n <a href='contact.html' class='chat-link'>Contact us for safety briefings →</a>";
    }
    
    // ===== CLIMATE CHANGE =====
    if (input.match(/\b(climate change|global warming|greenhouse|emissions|carbon).*?(nature|environment|planet)\b/i)) {
        return " **Climate Change & Nature:**\n\n" +
               "Climate change is one of the biggest threats to nature today:\n" +
               "• Global temperatures have risen 1.1°C since pre-industrial times\n" +
               "• Sea levels are rising 3.3mm per year\n" +
               "• 1 million species face extinction due to climate change\n" +
               "• Extreme weather events are becoming more frequent\n\n" +
               " **What you can do:** Reduce carbon footprint, use renewable energy, plant trees, support climate policies\n\n" +
               "Want specific tips? Ask about 'conservation' or 'how to help nature'!\n\n🔗 <a href='service.html' class='chat-link'>Join our Eco-Programs →</a>";
    }
    
    // ===== WILDLIFE / ANIMALS =====
    const wildlifePatterns = [
        /tell me about (animals|wildlife|creatures|fauna)/i,
        /what (animals|wildlife|creatures).*?live in (nature|the wild|forests|jungles)/i,
        /(interesting|fascinating).*?(animals|wildlife|creatures)/i
    ];
    
    if (wildlifePatterns.some(pattern => pattern.test(input))) {
        const animalFacts = [
            "Elephants have complex social structures and mourn their dead!",
            "Gorillas can learn sign language and use tools!",
            "Dolphins have names for each other and can recognize themselves in mirrors!",
            "Parrots can live up to 80 years and have the intelligence of a 4-year-old human!",
            "Octopuses have three hearts, blue blood, and can change color and shape!",
            "Wolves howl to communicate with pack members over long distances!",
            "Owls can rotate their heads 270 degrees and have incredible night vision!",
            "Penguins propose to their mates with a pebble!",
            "Butterflies taste with their feet and can see ultraviolet light!"
        ];
        return getRandomItem(animalFacts) + " Want more animal facts? Just ask 'tell me about wildlife' again or ask about specific animals!\n\n <a href='service.html' class='chat-link'>Book a Wildlife Safari →</a>";
    }
    
    // ===== PLANTS / TREES / FLORA =====
    if (input.match(/\b(plants|trees|flowers|flora|vegetation|forests)\b/i)) {
        const plantFacts = [
            "Trees communicate through underground fungal networks called the 'Wood Wide Web'!",
            "Sunflowers follow the sun across the sky, a phenomenon called heliotropism!",
            "Mycelium (mushroom roots) can form networks that span thousands of acres!",
            "Cacti can store up to 5,000 gallons of water in their stems!",
            "Bamboo is the fastest-growing plant in the world, growing up to 35 inches per day!",
            "The Amazon Rainforest has over 40,000 plant species!",
            "The oldest tree in the world is over 9,550 years old (a spruce in Sweden)!",
            "The corpse flower (Rafflesia) can grow up to 3 feet wide and smells like rotting meat!"
        ];
        return getRandomItem(plantFacts) + " 🌿 Nature never ceases to amaze! Want to learn more about plants or trees? Just ask!";
    }
    
    // ===== BOOKING SPECIFIC REQUEST =====
    if (input.match(/\b(book|booking|reserve|reservation|purchase|buy)\b.*?\b(tour|trip|package|adventure|vacation)\b/i)) {
        return " **Ready to Book Your Adventure?**\n\n" +
               "Click the link below to visit our booking site:\n" +
               " <a href='https://bc-travel-tour-vacation-web.netlify.app/' target='_blank' class='chat-link'>Book Now →</a>\n\n" +
               "Or contact our travel specialists:\n" +
               " <a href='mailto:bdevc224@gmail.com' class='chat-link'>bdevc224@gmail.com</a>\n" +
               " <a href='tel:+2349166226690' class='chat-link'>+234 916 622 6690</a>\n\n" +
               "Use promo code 'NATUREBOT2024' for 15% off!";
    }
    
    // ===== DEFAULT RESPONSE =====
    return "I'm not sure I understand that question. Here are some things I can help with:\n\n" +
           "**Tell me about nature** - Get fascinating facts\n" +
           "**Tell me about nature horrors** - Learn dark and scary facts\n" +
           "**How do humans interact with nature?** - Understand our relationship\n" +
           "**How can I help nature?** - Get conservation tips\n" +
           "**Show me travel options** - Plan your nature adventure\n" +
           "**Suggest places to visit** - Get destination recommendations\n" +
           "**What services do you offer?** - Learn about our tours\n" +
           "**How to contact you?** - Reach our team\n" +
           "**Booking** - Book your adventure now\n\n" +
           "For example, try typing: 'tell me about nature', 'where should I travel', or 'how can I help the environment'\n\n" +
           "<a href='index.html' class='chat-link'>Visit Homepage</a> | <a href='service.html' class='chat-link'>View Services</a> | <a href='contact.html' class='chat-link'>Contact Us</a>";
}

// Helper function to get random item from array
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ===== UI CONTROLLER =====
class ChatbotUI {
    constructor() {
        this.button = document.getElementById('chatbotButton');
        this.container = document.getElementById('chatbotContainer');
        this.closeBtn = document.getElementById('closeChatbot');
        this.messagesDiv = document.getElementById('chatMessages');
        this.input = document.getElementById('chatInput');
        this.sendBtn = document.getElementById('sendMessage');
        this.optionBtns = document.querySelectorAll('.option-btn');
        this.notificationBadge = document.getElementById('notificationBadge');
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        this.button.addEventListener('click', () => this.toggleChatbot());
        this.closeBtn.addEventListener('click', () => this.closeChatbot());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        this.optionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const query = btn.getAttribute('data-query');
                this.sendQuickQuery(query);
            });
        });
        
        // Hide notification after opening
        this.button.addEventListener('click', () => {
            if (this.notificationBadge) {
                this.notificationBadge.style.display = 'none';
            }
        });
    }
    
    toggleChatbot() {
        if (this.isOpen) {
            this.closeChatbot();
        } else {
            this.openChatbot();
        }
    }
    
    openChatbot() {
        this.container.classList.add('open');
        this.isOpen = true;
        if (this.notificationBadge) {
            this.notificationBadge.style.display = 'none';
        }
        this.scrollToBottom();
    }
    
    closeChatbot() {
        this.container.classList.remove('open');
        this.isOpen = false;
    }
    
    sendQuickQuery(query) {
        let message = '';
        switch(query) {
            case 'facts': message = 'tell me about nature'; break;
            case 'horrors': message = 'tell me about nature horrors'; break;
            case 'interaction': message = 'how do humans interact with nature'; break;
            case 'conservation': message = 'how can i help nature'; break;
            case 'travel': message = 'show me travel options'; break;
            case 'places': message = 'suggest places to visit'; break;
            case 'services': message = 'what services do you offer'; break;
            case 'contact': message = 'how to contact you'; break;
            default: message = query;
        }
        this.input.value = message;
        this.sendMessage();
    }
    
    sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;
        
        // Add user message
        this.addMessage(message, 'user');
        this.input.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Get bot response with natural language processing
        setTimeout(() => {
            this.removeTypingIndicator();
            const response = getBotResponse(message);
            this.addMessage(response, 'bot');
            this.scrollToBottom();
        }, 500 + Math.random() * 500);
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = this.formatMessage(text);
        
        // Add click tracking for links
        contentDiv.querySelectorAll('.chat-link').forEach(link => {
            link.addEventListener('click', (e) => {
                console.log('Link clicked:', link.href);
                // You can add analytics tracking here if needed
            });
        });
        
        messageDiv.appendChild(contentDiv);
        this.messagesDiv.appendChild(messageDiv);
        this.scrollToBottom();
    }
    
    formatMessage(text) {
        // Convert markdown-style formatting but preserve HTML links
        let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formatted = formatted.replace(/\n/g, '<br>');
        return formatted;
    }
    
    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message';
        typingDiv.id = 'typingIndicator';
        
        const indicatorDiv = document.createElement('div');
        indicatorDiv.className = 'typing-indicator';
        indicatorDiv.innerHTML = '<span></span><span></span><span></span>';
        
        typingDiv.appendChild(indicatorDiv);
        this.messagesDiv.appendChild(typingDiv);
        this.scrollToBottom();
    }
    
    removeTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.remove();
        }
    }
    
    scrollToBottom() {
        this.messagesDiv.scrollTop = this.messagesDiv.scrollHeight;
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ChatbotUI();
    
    // Add enhanced CSS for clickable links
    const style = document.createElement('style');
    style.textContent = `
        .message-content strong {
            color: #228b22;
            font-weight: 600;
        }
        .bot-message .message-content strong {
            color: #228b22;
        }
        .user-message .message-content strong {
            color: #ffd700;
        }
        .message-content {
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        .chat-link {
            display: inline-block;
            background: #228b22;
            color: white !important;
            text-decoration: none;
            padding: 8px 16px;
            border-radius: 20px;
            margin: 5px 0;
            transition: all 0.3s ease;
            font-weight: bold;
            font-size: 0.9rem;
        }
        .chat-link:hover {
            background: #07c507;
            transform: translateY(-2px);
            box-shadow: 0 2px 8px rgba(34, 139, 34, 0.3);
        }
        .message-content a:not(.chat-link) {
            color: #228b22;
            text-decoration: underline;
        }
        .user-message .chat-link {
            background: #ffd700;
            color: #333 !important;
        }
        .user-message .chat-link:hover {
            background: #ffed4a;
        }
    `;
    document.head.appendChild(style);
});