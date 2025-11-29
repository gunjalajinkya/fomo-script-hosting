// --- Configuration ---
const initialDelay = 5000;      // 5 seconds delay before the first notification
const displayDuration = 7000;   // 7 seconds display time
const intervalDelay = 3000;    // 13 seconds between the start of one notification and the next

// Data for 100 diverse Indian customer purchases
const PRODUCT_NAME = "The Anti-Anxiety Blueprint";
const PRODUCT_PRICE = 199;

const DUMMY_SALES_DATA = [
    {"name":"Aisha Sharma","location":"Mumbai"},
    {"name":"Prakash Rao","location":"Bengaluru"},
    {"name":"Sonia Kaur","location":"New Delhi"},
    {"name":"Mohammad Ali","location":"Hyderabad"},
    {"name":"Deepa Varma","location":"Chennai"},
    {"name":"Rajesh Gupta","location":"Pune"},
    {"name":"Neha Patel","location":"Ahmedabad"},
    {"name":"Vivek Dubey","location":"Kolkata"},
    {"name":"Komal Singh","location":"Lucknow"},
    {"name":"Zahir Khan","location":"Jaipur"},
    {"name":"Ritu Hegde","location":"Thane"},
    {"name":"Arun Das","location":"Bhopal"},
    {"name":"Pooja Iyer","location":"Surat"},
    {"name":"Imran Sheikh","location":"Nagpur"},
    {"name":"Geeta Tiwari","location":"Indore"},
    {"name":"Ankit Soni","location":"Vadodara"},
    {"name":"Meenakshi Pillai","location":"Kochi"},
    {"name":"Harish Chandra","location":"Chandigarh"},
    {"name":"Jaspreet Gill","location":"Ludhiana"},
    {"name":"Farah Begum","location":"Nashik"},
    {"name":"Vikas Sharma","location":"Visakhapatnam"},
    {"name":"Shruti Desai","location":"Rajkot"},
    {"name":"Manav Tandon","location":"Gwalior"},
    {"name":"Saba Khan","location":"Agra"},
    {"name":"Prasad Kulkarni","location":"Coimbatore"},
    {"name":"Rishabh Jain","location":"Jabalpur"},
    {"name":"Divya Rana","location":"Dehradun"},
    {"name":"Sunil Yadav","location":"Patna"},
    {"name":"Tanya Roy","location":"Bhubaneswar"},
    {"name":"Aman Singh","location":"Ranchi"},
    {"name":"Lata Reddy","location":"Mysuru"},
    {"name":"Shreyas Rao","location":"Mangaluru"},
    {"name":"Reena Kumari","location":"Varanasi"},
    {"name":"Girish Menon","location":"Trivandrum"},
    {"name":"Nandini Das","location":"Guwahati"},
    {"name":"Gaurav Mishra","location":"Noida"},
    {"name":"Sneha Kohli","location":"Gurgaon"},
    {"name":"Akash Patel","location":"Ahmednagar"},
    {"name":"Minal Kher","location":"Aurangabad"},
    {"name":"Shabana Shaikh","location":"Amritsar"},
    {"name":"Kiran Bala","location":"Kanpur"},
    {"name":"Ashish Garg","location":"Faridabad"},
    {"name":"Deepak Singh","location":"Jodhpur"},
    {"name":"Preeti Shah","location":"Kolhapur"},
    {"name":"Zoya Qureshi","location":"Aligarh"},
    {"name":"Sanjay Kumar","location":"Bareilly"},
    {"name":"Riya Verma","location":"Moradabad"},
    {"name":"Karthik Iyer","location":"Trichy"},
    {"name":"Priyanka Bose","location":"Durgapur"},
    {"name":"Nitin Goel","location":"Panchkula"},
    {"name":"Aisha Sharma","location":"Mumbai"},
    {"name":"Prakash Rao","location":"Bengaluru"},
    {"name":"Sonia Kaur","location":"New Delhi"},
    {"name":"Mohammad Ali","location":"Hyderabad"},
    {"name":"Deepa Varma","location":"Chennai"},
    {"name":"Rajesh Gupta","location":"Pune"},
    {"name":"Neha Patel","location":"Ahmedabad"},
    {"name":"Vivek Dubey","location":"Kolkata"},
    {"name":"Komal Singh","location":"Lucknow"},
    {"name":"Zahir Khan","location":"Jaipur"},
    {"name":"Ritu Hegde","location":"Thane"},
    {"name":"Arun Das","location":"Bhopal"},
    {"name":"Pooja Iyer","location":"Surat"},
    {"name":"Imran Sheikh","location":"Nagpur"},
    {"name":"Geeta Tiwari","location":"Indore"},
    {"name":"Ankit Soni","location":"Vadodara"},
    {"name":"Meenakshi Pillai","location":"Kochi"},
    {"name":"Harish Chandra","location":"Chandigarh"},
    {"name":"Jaspreet Gill","location":"Ludhiana"},
    {"name":"Farah Begum","location":"Nashik"},
    {"name":"Vikas Sharma","location":"Visakhapatnam"},
    {"name":"Shruti Desai","location":"Rajkot"},
    {"name":"Manav Tandon","location":"Gwalior"},
    {"name":"Saba Khan","location":"Agra"},
    {"name":"Prasad Kulkarni","location":"Coimbatore"},
    {"name":"Rishabh Jain","location":"Jabalpur"},
    {"name":"Divya Rana","location":"Dehradun"},
    {"name":"Sunil Yadav","location":"Patna"},
    {"name":"Tanya Roy","location":"Bhubaneswar"},
    {"name":"Aman Singh","location":"Ranchi"},
    {"name":"Lata Reddy","location":"Mysuru"},
    {"name":"Shreyas Rao","location":"Mangaluru"},
    {"name":"Reena Kumari","location":"Varanasi"},
    {"name":"Girish Menon","location":"Trivandrum"},
    {"name":"Nandini Das","location":"Guwahati"},
    {"name":"Gaurav Mishra","location":"Noida"},
    {"name":"Sneha Kohli","location":"Gurgaon"},
    {"name":"Akash Patel","location":"Ahmednagar"},
    {"name":"Minal Kher","location":"Aurangabad"},
    {"name":"Shabana Shaikh","location":"Amritsar"},
    {"name":"Kiran Bala","location":"Kanpur"},
    {"name":"Ashish Garg","location":"Faridabad"},
    {"name":"Deepak Singh","location":"Jodhpur"},
    {"name":"Preeti Shah","location":"Kolhapur"},
    {"name":"Zoya Qureshi","location":"Aligarh"},
    {"name":"Sanjay Kumar","location":"Bareilly"},
    {"name":"Riya Verma","location":"Moradabad"},
    {"name":"Karthik Iyer","location":"Trichy"},
    {"name":"Priyanka Bose","location":"Durgapur"},
    {"name":"Nitin Goel","location":"Panchkula"},
];

// --- Fomo Widget Injection Logic ---

function injectFomoWidget() {
    // 1. Inject CSS Styles
    const style = document.createElement('style');
    style.textContent = `
        /* Fomo Widget Base Styles */
        .fomo-widget-style {
            position: fixed;
            bottom: 20px;
            right: 20px;
            left: 20px; /* Responsive on mobile */
            max-width: 360px;
            margin: 0 auto;
            background-color: #ededed;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            padding: 15px;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transform: translateY(100%);
            transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            display: flex;
            align-items: center;
        }

        /* Desktop/Tablet adjustment: Pin to bottom-right corner */
        @media (min-width: 480px) {
            .fomo-widget-style {
                left: unset;
                right: 30px;
                bottom: 30px;
                margin: 0;
            }
        }

        /* Class to show the notification */
        .fomo-widget-style.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        /* Class to hide the notification */
        .fomo-widget-style.hide {
            transform: translateY(150%);
            opacity: 0;
        }

        .fomo-icon {
            flex-shrink: 0;
            width: 36px;
            height: 36px;
            margin-right: 12px;
            border-radius: 50%;
            /* New gradient theme for self-help/calmness */
            background: linear-gradient(45deg, #4CAF50, #81C784); 
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .fomo-purchase-icon {
            fill: #ffffff;
            width: 20px;
            height: 20px;
        }

        .fomo-content {
            flex-grow: 1;
            font-size: 14px;
            line-height: 1.4;
            color: #333333;
        }

        .fomo-content strong {
            font-weight: 700;
            color: #000000;
        }

        .fomo-time {
            display: block;
            font-size: 11px;
            color: #777777;
            margin-top: 4px;
        }
    `;
    document.head.appendChild(style);

    // 2. Inject HTML Structure
    const widgetHTML = `
        <div id="sales-fomo-notification" aria-live="polite" class="fomo-widget-style">
            <div class="fomo-icon">
                <!-- SVG Icon representing peace/growth for Anti-Anxiety theme (Feather/Leaf) -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fomo-purchase-icon">
                    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM15.75 9.75a.75.75 0 0 0-1.5 0v3h-3a.75.75 0 0 0 0 1.5h3v3a.75.75 0 0 0 1.5 0v-3h3a.75.75 0 0 0 0-1.5h-3v-3Z" />
                </svg>
            </div>
            <div class="fomo-content">
                <span id="fomo-message"></span>
                <span id="fomo-time" class="fomo-time"></span>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', widgetHTML);

    // 3. Start Logic Loop
    startNotificationLoop();
}


function startNotificationLoop() {
    const notificationEl = document.getElementById('sales-fomo-notification');
    const messageEl = notificationEl.querySelector('#fomo-message');
    const timeEl = notificationEl.querySelector('#fomo-time');
    
    /**
     * Generates a random time ago string (e.g., "15 minutes ago").
     * @returns {string} The formatted time ago string.
     */
    function getRandomTimeAgo() {
        // Generate a random number of minutes between 1 and 30
        const minutes = Math.floor(Math.random() * 30) + 1;
        return `${minutes} minutes ago`;
    }

    /**
     * Formats the purchase data into the display message.
     * @param {object} data The purchase event data (only name and location needed here).
     * @returns {string} The formatted HTML message.
     */
    function formatMessage(data) {
        // Example: "Pooja Sharma from Pune just purchased The Anti-Anxiety Blueprint (₹199)!"
        return `<strong>${data.name}</strong> from ${data.location} just purchased the ${PRODUCT_NAME} (₹${PRODUCT_PRICE})!`;
    }

    /**
     * Selects a random event, updates the DOM, and displays the notification.
     */
    function showNotification() {
        // 1. Select a random purchase event
        const randomIndex = Math.floor(Math.random() * DUMMY_SALES_DATA.length);
        const event = DUMMY_SALES_DATA[randomIndex];

        // 2. Map data to the notification text
        const message = formatMessage(event);
        const timeAgo = getRandomTimeAgo();

        // 3. Update DOM elements
        messageEl.innerHTML = message;
        timeEl.textContent = timeAgo;

        // 4. Show the notification (Apply 'show' class for animation)
        notificationEl.classList.remove('hide');
        notificationEl.classList.add('show');

        // 5. Schedule the hide function
        setTimeout(hideNotification, displayDuration);
    }

    /**
     * Hides the current notification and schedules the next display.
     */
    function hideNotification() {
        // 1. Hide the notification (Apply 'hide' class for animation)
        notificationEl.classList.remove('show');
        notificationEl.classList.add('hide');

        // 2. Schedule the next show function
        // The intervalDelay controls the time between displays
        setTimeout(showNotification, intervalDelay - 600); 
    }

    // --- Initialization ---
    // Set initial message while waiting for the loop to start
    messageEl.innerHTML = '<strong>Welcome!</strong> See recent purchases below.';
    timeEl.textContent = 'just started';

    // Start the notification loop after the initial delay
    setTimeout(showNotification, initialDelay);
}

// Ensure the script runs after the DOM is ready (important for external scripts)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFomoWidget);
} else {
    injectFomoWidget();
}
