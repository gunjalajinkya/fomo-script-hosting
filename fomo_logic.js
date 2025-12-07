// --- Configuration ---
const initialDelay = 5000;      // 5 seconds delay before the first notification
const displayDuration = 7000;   // 7 seconds display time
const intervalDelay = 3000;    // 13 seconds between the start of one notification and the next

// Data for 100 diverse Indian customer purchases (All "Screen-to-Pencil Shift Bundle" @ ₹197)
const DUMMY_SALES_DATA = [
    {"name":"Pooja Sharma","location":"Pune","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Siddharth More","location":"Mumbai","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Aisha Khan","location":"Nagpur","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Ganesh Patil","location":"Nashik","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Renuka Joshi","location":"Thane","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Farah Sheikh","location":"Aurangabad","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Vivek Deshmukh","location":"Kolhapur","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Deepali Kulkarni","location":"Pune","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Zainab Inamdar","location":"Mumbai","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Rajesh Soni","location":"Latur","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Karan Verma","location":"New Delhi","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Neha Khanna","location":"Gurgaon, HR","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Amit Singh","location":"Noida, UP","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Priya Malik","location":"Faridabad, HR","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Mohit Jain","location":"Ghaziabad, UP","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Shefali Gupta","location":"New Delhi","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Rajat Sharma","location":"Gurgaon, HR","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Ayesha Bibi","location":"Noida, UP","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Varun Yadav","location":"New Delhi","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Simran Kaur","location":"Ghaziabad, UP","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Nitin Hegde","location":"Bengaluru, KA","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Deepa Rao","location":"Mysuru, KA","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Arjun Reddy","location":"Bengaluru, KA","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Lakshmi Iyer","location":"Mangaluru, KA","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Syed Hussain","location":"Hubli, KA","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Meena Kumar","location":"Bengaluru, KA","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Vishal Gowda","location":"Shivamogga, KA","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Anjali Menon","location":"Bengaluru, KA","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Ramesh Bhat","location":"Belagavi, KA","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Hema Latha","location":"Bengaluru, KA","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Srinivasan P.","location":"Chennai, TN","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Priya Mani","location":"Coimbatore, TN","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Abdul Qadir","location":"Madurai, TN","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Janani Devi","location":"Tiruchirappalli, TN","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Ravi Shankar","location":"Salem, TN","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Shalini Babu","location":"Chennai, TN","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Gopal Iyengar","location":"Vellore, TN","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Mary Joseph","location":"Dindigul, TN","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Harish S.","location":"Chennai, TN","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Ayesha Begum","location":"Erode, TN","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Ayan Mukherjee","location":"Kolkata, WB","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Shruti Das","location":"Howrah, WB","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Raja Ghosh","location":"Durgapur, WB","price":199,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Poulami Sen","location":"Asansol, WB","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Samarjit Roy","location":"Siliguri, WB","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Mala Basu","location":"Kolkata, WB","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Tariq Zaman","location":"Kharagpur, WB","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Suman Mitra","location":"Bardhaman, WB","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Debjani Pal","location":"Kolkata, WB","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Javed Akhtar","location":"Malda, WB","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Riya Patel","location":"Ahmedabad, GJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Chirag Shah","location":"Surat, GJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Salma Mansuri","location":"Vadodara, GJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Hetal Vora","location":"Rajkot, GJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Jayesh Mehta","location":"Bhavnagar, GJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Aarav Gupta","location":"Ahmedabad, GJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Mona Jani","location":"Jamnagar, GJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Imran Momin","location":"Gandhinagar, GJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Pooja Trivedi","location":"Anand, GJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Mustafa Ali","location":"Ahmedabad, GJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Aditya Mishra","location":"Lucknow, UP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Sana Ansari","location":"Kanpur, UP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Rahul Yadav","location":"Agra, UP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Pooja Devi","location":"Varanasi, UP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Faizan Malik","location":"Meerut, UP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Kajal Saxena","location":"Allahabad, UP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Ajay Pal","location":"Lucknow, UP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Zara Khan","location":"Aligarh, UP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Vikas Dubey","location":"Bareilly, UP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Shweta Tiwari","location":"Moradabad, UP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Garima Khandelwal","location":"Jaipur, RJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Suresh Meena","location":"Jodhpur, RJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Priyanka Sharma","location":"Udaipur, RJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Abdul Rashid","location":"Kota, RJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Manish Kumawat","location":"Ajmer, RJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Deepika Jain","location":"Bikaner, RJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Harsh Rajput","location":"Jaipur, RJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Fatima Bano","location":"Alwar, RJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Sunil Saini","location":"Bhilwara, RJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Nisha Singh","location":"Jaipur, RJ","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Sainadh Varma","location":"Hyderabad, TS","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Anil Kumar","location":"Visakhapatnam, AP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Jyothi Rao","location":"Vijayawada, AP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Mohammed Ali","location":"Guntur, AP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Bhavana Chetri","location":"Warangal, TS","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Krishna Murthy","location":"Kakinada, AP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Saba Naaz","location":"Nellore, AP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Pavan Teja","location":"Kurnool, AP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Divya Das","location":"Hyderabad, TS","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Sameer Shah","location":"Tirupati, AP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Aarohi Gupta","location":"Indore, MP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Devendra Patel","location":"Bhopal, MP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Suman Verma","location":"Jabalpur, MP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Zafar Khan","location":"Gwalior, MP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Prachi Dubey","location":"Ujjain, MP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Alok Singh","location":"Indore, MP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Muskan Bano","location":"Sagar, MP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Rahul Sahu","location":"Rewa, MP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Seema Jain","location":"Dewas, MP","price":197,"product":"Screen-to-Pencil Shift Bundle"},
    {"name":"Faisal Qureshi","location":"Indore, MP","price":197,"product":"Screen-to-Pencil Shift Bundle"}
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
            background-color: #ffffff;
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
            background: linear-gradient(45deg, #FF6F61, #E53935);
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fomo-purchase-icon">
                    <path d="M7.5 7.5a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3v-6Zm6-3a3 3 0 0 0-3 3v1.5a.75.75 0 0 1-1.5 0V7.5a3 3 0 0 0-3-3h-.75a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0V4.5h.75a1.5 1.5 0 0 1 1.5 1.5v3.75c0 .666-.174 1.298-.475 1.859A3 3 0 0 0 12 15a3 3 0 0 0 3.725-3.891c-.301-.561-.475-1.193-.475-1.859V7.5a1.5 1.5 0 0 1 1.5-1.5h.75a.75.75 0 0 0 0-1.5h-.75a3 3 0 0 0-3 3V7.5Zm-1.5 9v1.5a3 3 0 0 0 3 3v-6a3 3 0 0 0-3 3ZM19.5 7.5a3 3 0 0 0-3-3h-.75a.75.75 0 0 0 0 1.5h.75a1.5 1.5 0 0 1 1.5 1.5v3.75c0 .666-.174 1.298-.475 1.859A3 3 0 0 0 18 15v1.5a.75.75 0 0 0 1.5 0V7.5ZM12 18a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z" />
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
     * @param {object} data The purchase event data.
     * @returns {string} The formatted HTML message.
     */
    function formatMessage(data) {
        // Example: "Pooja Sharma from Pune just purchased the Screen-to-Pencil Shift Bundle (₹197)!"
        return `<strong>${data.name}</strong> from ${data.location} just purchased the ${data.product} (₹${data.price})!`;
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
