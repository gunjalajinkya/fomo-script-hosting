// --- Configuration ---
const initialDelay = 3000;      // 3 seconds delay before the first notification
const displayDuration = 5000;   // 5 seconds display time
// CRITICAL FIX: Interval Delay increased to 10 seconds to prevent notification overlap.
const intervalDelay = 10000;    // 10 seconds between the start of one notification and the next

// Data for 100 diverse Indian customer purchases
const PRODUCT_NAME = "Self Healing Mastery Course";
const PRODUCT_PRICE = 399;

const DUMMY_SALES_DATA = [
    // Using the same diverse Indian names/locations for a realistic feel
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
            background-color: #f0f0f0; /* Requested light grey background */
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
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

        .fomo-image-container {
            flex-shrink: 0;
            width: 40px; /* Slightly larger image area */
            height: 40px;
            margin-right: 12px;
            border-radius: 8px; /* Square corners for course image */
            background-color: #ffffff; /* Placeholder background */
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        
        /* Placeholder for a professional course image (replace URL below with actual course image) */
        .fomo-course-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            /* Placeholder: replace this image with your course icon/image */
            background: url("https://placehold.co/40x40/4CAF50/ffffff?text=SHM") center center no-repeat;
            background-size: cover;
        }

        .fomo-verified-line {
            display: flex;
            align-items: center;
            font-size: 11px;
            color: #10B981; /* Tailwind Green 500 for a bright, verified look */
            margin-bottom: 3px;
            font-weight: 700;
        }
        
        .fomo-tick-svg {
            width: 14px;
            height: 14px;
            margin-right: 4px;
            fill: #10B981; /* Green tick color */
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
            <div class="fomo-image-container">
                <div class="fomo-course-image"></div>
            </div>
            <div class="fomo-content">
                <!-- Verified Purchase Line with Green Tick -->
                <div class="fomo-verified-line">
                    <svg class="fomo-tick-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M9.9997 15.2201L22.9997 2.22008L20.5797 -0.200006L9.9997 10.3901L3.6397 4.03008L1.2197 6.45008L9.9997 15.2201Z"/>
                    </svg>
                    <span>VERIFIED PURCHASE</span>
                </div>
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
     */
    function getRandomTimeAgo() {
        const minutes = Math.floor(Math.random() * 30) + 1;
        return `${minutes} minutes ago`;
    }

    /**
     * Formats the purchase data into the display message.
     */
    function formatMessage(data) {
        return `<strong>${data.name}</strong> from ${data.location} just purchased the ${PRODUCT_NAME} (₹${PRODUCT_PRICE})!`;
    }

    /**
     * Selects a random event, updates the DOM, and displays the notification.
     */
    function showNotification() {
        const randomIndex = Math.floor(Math.random() * DUMMY_SALES_DATA.length);
        const event = DUMMY_SALES_DATA[randomIndex];

        const message = formatMessage(event);
        const timeAgo = getRandomTimeAgo();

        messageEl.innerHTML = message;
        timeEl.textContent = timeAgo;

        notificationEl.classList.remove('hide');
        notificationEl.classList.add('show');

        setTimeout(hideNotification, displayDuration);
    }

    /**
     * Hides the current notification and schedules the next display.
     */
    function hideNotification() {
        notificationEl.classList.remove('show');
        notificationEl.classList.add('hide');

        // Schedule the next show function, accounting for transition time
        setTimeout(showNotification, intervalDelay - 600); 
    }

    // --- Initialization ---
    messageEl.innerHTML = '<strong>Welcome!</strong> See recent purchases below.';
    timeEl.textContent = 'just started';

    setTimeout(showNotification, initialDelay);
}

// Ensure the script runs after the DOM is ready (important for external scripts)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFomoWidget);
} else {
    injectFomoWidget();
}
