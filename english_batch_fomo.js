// --- Configuration ---
const initialDelay = 3000;      // 3 seconds delay before the first notification
const displayDuration = 5000;   // 5 seconds display time
// CRITICAL FIX: Interval Delay set to 9 seconds (5s display + 4s gap) to prevent overlap.
const intervalDelay = 9000;    // 9 seconds between the start of one notification and the next

// Product Details
const PRODUCT_NAME = "Live Spoken English Practice Batch";

// Data for 200 diverse registrants from Maharashtra (Name, Profession, Location)
const DUMMY_REGISTRATION_DATA = [
    {"name":"Minal Dusane","profession":"Homemaker","location":"Nashik"},
    {"name":"Dipak Joshi","profession":"Student","location":"Pune"},
    {"name":"Jasmin Maniyar","profession":"Beauty Parlour Owner","location":"Nagpur"},
    {"name":"Rahul Sawant","profession":"Shopkeeper","location":"Ratnagiri"},
    {"name":"Deepa Sutar","profession":"Lawyer","location":"Latur"},
    {"name":"Vishal Gunjal","profession":"Digital Creator","location":"Jalana"},
    {"name":"Namrata Sanap","profession":"Housewife","location":"Nanded"},
    {"name":"Keshav Gholap","profession":"Retired","location":"Parbhani"},
    {"name":"Ravsaheb Patil","profession":"Farmer","location":"Satana"},
    {"name":"Pooja Deore","profession":"Mother","location":"Akola"},
    {"name":"Ishwar Bhamare","profession":"Manager","location":"Sambhajinagar"},
    {"name":"Shekhar Nimbalkar","profession":"Sales Executive","location":"Ahilyanagar"},
    {"name":"Nadeem Shaik","profession":"Real Estate Agent","location":"Bhivandi"},
    {"name":"Nitu Gill","profession":"LIC Agent","location":"Nanded"},
    {"name":"Rutuja Kulkarni","profession":"Engineer","location":"Mumbai"},
    {"name":"Sanjay Shinde","profession":"IT Professional","location":"Thane"},
    {"name":"Amruta Chavan","profession":"Teacher","location":"Kolhapur"},
    {"name":"Ganesh More","profession":"Bank Clerk","location":"Solapur"},
    {"name":"Swati Pawar","profession":"Doctor","location":"Panvel"},
    {"name":"Vijay Jadhav","profession":"Government Employee","location":"Aurangabad"},
    {"name":"Priya Rane","profession":"Artist","location":"Sindhudurg"},
    {"name":"Amit Kamble","profession":"Mechanic","location":"Chandrapur"},
    {"name":"Shruti Deshmukh","profession":"Student","location":"Dhule"},
    {"name":"Akshay Raut","profession":"Accountant","location":"Jalgaon"},
    {"name":"Neha Gaikwad","profession":"Homemaker","location":"Yavatmal"},
    {"name":"Sameer Inamdar","profession":"Software Developer","location":"Pimpri-Chinchwad"},
    {"name":"Vaishali Mane","profession":"Nurse","location":"Sangli"},
    {"name":"Rohit Kadam","profession":"Journalist","location":"Amravati"},
    {"name":"Kiran Gore","profession":"Electrician","location":"Buldhana"},
    {"name":"Anjali Surve","profession":"Beautician","location":"Gondia"},
    {"name":"Prashant Teli","profession":"Sales Manager","location":"Wardha"},
    {"name":"Manisha Thakur","profession":"Librarian","location":"Hingoli"},
    {"name":"Sunil Deshpande","profession":"Consultant","location":"Osmanabad"},
    {"name":"Ayesha Sayyed","profession":"Chef","location":"Jalna"},
    {"name":"Balkrishna Koli","profession":"Fisherman","location":"Alibag"},
    {"name":"Jayesh Barde","profession":"Photographer","location":"Malegaon"},
    {"name":"Sheetal Mahajan","profession":"HR Manager","location":"Karad"},
    {"name":"Vicky Wagh","profession":"Security Guard","location":"Kalyan"},
    {"name":"Sushma Shelar","profession":"Mother","location":"Palghar"},
    {"name":"Arjun Rathod","profession":"Driver","location":"Beed"},
    {"name":"Deepak Sawant","profession":"Shopkeeper","location":"Chiplun"},
    {"name":"Sarika Kulkarni","profession":"IT Professional","location":"Pune"},
    {"name":"Omkar Patil","profession":"Civil Engineer","location":"Kolhapur"},
    {"name":"Ritu Sharma","profession":"Student","location":"Nagpur"},
    {"name":"Firoz Khan","profession":"Casting Director","location":"Mumbai"},
    {"name":"Leena Deshmukh","profession":"Housewife","location":"Nashik"},
    {"name":"Nitin Nimbhorkar","profession":"Farmer","location":"Satara"},
    {"name":"Shreya Joshi","profession":"Teacher","location":"Aurangabad"},
    {"name":"Ajay Chavan","profession":"Sales Executive","location":"Jalgaon"},
    {"name":"Kavita Gaikwad","profession":"Nurse","location":"Latur"},
    {"name":"Tushar More","profession":"Bank Manager","location":"Solapur"},
    {"name":"Sana Shaikh","profession":"Student","location":"Thane"},
    {"name":"Sachin Jadhav","profession":"Gym Trainer","location":"Amravati"},
    {"name":"Rutuja Raut","profession":"Designer","location":"Nanded"},
    {"name":"Vivek Sawant","profession":"Lawyer","location":"Ratnagiri"},
    {"name":"Archana Sutar","profession":"Homemaker","location":"Mumbai"},
    {"name":"Pravin Gore","profession":"Electrician","location":"Pune"},
    {"name":"Nisha Bhamare","profession":"Manager","location":"Nashik"},
    {"name":"Sunita Gholap","profession":"Retired","location":"Parbhani"},
    {"name":"Swapnil Sanap","profession":"Digital Creator","location":"Jalana"},
    {"name":"Rajesh Dusane","profession":"Shopkeeper","location":"Akola"},
    {"name":"Aparna Maniyar","profession":"Beautician","location":"Nagpur"},
    {"name":"Dilip Deore","profession":"Farmer","location":"Satana"},
    {"name":"Shraddha Kulkarni","profession":"Mother","location":"Sambhajinagar"},
    {"name":"Mahesh Shinde","profession":"Engineer","location":"Ahilyanagar"},
    {"name":"Priyanka Pawar","profession":"IT Professional","location":"Bhivandi"},
    {"name":"Avinash Kadam","profession":"Journalist","location":"Hingoli"},
    {"name":"Bhavna Teli","profession":"Sales Manager","location":"Wardha"},
    {"name":"Jitendra Thakur","profession":"Librarian","location":"Osmanabad"},
    {"name":"Zoya Sayyed","profession":"Chef","location":"Jalna"},
    {"name":"Dinesh Koli","profession":"Fisherman","location":"Alibag"},
    {"name":"Sandip Barde","profession":"Photographer","location":"Malegaon"},
    {"name":"Rupali Mahajan","profession":"HR Manager","location":"Karad"},
    {"name":"Nikhil Wagh","profession":"Security Guard","location":"Kalyan"},
    {"name":"Varsha Shelar","profession":"Housewife","location":"Palghar"},
    {"name":"Vikram Rathod","profession":"Driver","location":"Beed"},
    {"name":"Kishor Sawant","profession":"Shopkeeper","location":"Chiplun"},
    {"name":"Dipika Sutar","profession":"Lawyer","location":"Latur"},
    {"name":"Gopal Gunjal","profession":"Digital Creator","location":"Jalana"},
    {"name":"Sneha Sanap","profession":"Housewife","location":"Nanded"},
    {"name":"Arvind Gholap","profession":"Retired","location":"Parbhani"},
    {"name":"Ranjana Patil","profession":"Farmer","location":"Satana"},
    {"name":"Vikas Deore","profession":"Mother","location":"Akola"},
    {"name":"Pravin Bhamare","profession":"Manager","location":"Sambhajinagar"},
    {"name":"Kiran Nimbalkar","profession":"Sales Executive","location":"Ahilyanagar"},
    {"name":"Fahad Shaik","profession":"Real Estate Agent","location":"Bhivandi"},
    {"name":"Sonali Gill","profession":"LIC Agent","location":"Nanded"},
    {"name":"Shraddha Kulkarni","profession":"Engineer","location":"Mumbai"},
    {"name":"Akash Shinde","profession":"IT Professional","location":"Thane"},
    {"name":"Priya Chavan","profession":"Teacher","location":"Kolhapur"},
    {"name":"Rakesh More","profession":"Bank Clerk","location":"Solapur"},
    {"name":"Mansi Pawar","profession":"Doctor","location":"Panvel"},
    {"name":"Manoj Jadhav","profession":"Government Employee","location":"Aurangabad"},
    {"name":"Ankita Rane","profession":"Artist","location":"Sindhudurg"},
    {"name":"Sagar Kamble","profession":"Mechanic","location":"Chandrapur"},
    {"name":"Yogesh Deshmukh","profession":"Student","location":"Dhule"},
    {"name":"Pooja Raut","profession":"Accountant","location":"Jalgaon"},
    {"name":"Ajit Gaikwad","profession":"Homemaker","location":"Yavatmal"},
    {"name":"Mubin Inamdar","profession":"Software Developer","location":"Pimpri-Chinchwad"},
    {"name":"Ashwini Mane","profession":"Nurse","location":"Sangli"},
    {"name":"Amol Kadam","profession":"Journalist","location":"Amravati"},
    {"name":"Kalyani Gore","profession":"Electrician","location":"Buldhana"},
    {"name":"Dipti Surve","profession":"Beautician","location":"Gondia"},
    {"name":"Vaibhav Teli","profession":"Sales Manager","location":"Wardha"},
    {"name":"Pooja Thakur","profession":"Librarian","location":"Hingoli"},
    {"name":"Harish Deshpande","profession":"Consultant","location":"Osmanabad"},
    {"name":"Amina Sayyed","profession":"Chef","location":"Jalna"},
    {"name":"Prakash Koli","profession":"Fisherman","location":"Alibag"},
    {"name":"Akshay Barde","profession":"Photographer","location":"Malegaon"},
    {"name":"Geeta Mahajan","profession":"HR Manager","location":"Karad"},
    {"name":"Sanket Wagh","profession":"Security Guard","location":"Kalyan"},
    {"name":"Snehal Shelar","profession":"Mother","location":"Palghar"},
    {"name":"Rohan Rathod","profession":"Driver","location":"Beed"},
    {"name":"Jitendra Sawant","profession":"Shopkeeper","location":"Chiplun"},
    {"name":"Ankita Kulkarni","profession":"IT Professional","location":"Pune"},
    {"name":"Ketan Patil","profession":"Civil Engineer","location":"Kolhapur"},
    {"name":"Divya Sharma","profession":"Student","location":"Nagpur"},
    {"name":"Irfan Khan","profession":"Casting Director","location":"Mumbai"},
    {"name":"Seema Deshmukh","profession":"Housewife","location":"Nashik"},
    {"name":"Pramod Nimbhorkar","profession":"Farmer","location":"Satara"},
    {"name":"Anjali Joshi","profession":"Teacher","location":"Aurangabad"},
    {"name":"Siddharth Chavan","profession":"Sales Executive","location":"Jalgaon"},
    {"name":"Madhavi Gaikwad","profession":"Nurse","location":"Latur"},
    {"name":"Suhas More","profession":"Bank Manager","location":"Solapur"},
    {"name":"Fiza Shaikh","profession":"Student","location":"Thane"},
    {"name":"Anand Jadhav","profession":"Gym Trainer","location":"Amravati"},
    {"name":"Priti Raut","profession":"Designer","location":"Nanded"},
    {"name":"Sunil Sawant","profession":"Lawyer","location":"Ratnagiri"},
    {"name":"Neha Sutar","profession":"Homemaker","location":"Mumbai"},
    {"name":"Mangesh Gore","profession":"Electrician","location":"Pune"},
    {"name":"Savita Bhamare","profession":"Manager","location":"Nashik"},
    {"name":"Ashok Gholap","profession":"Retired","location":"Parbhani"},
    {"name":"Pooja Sanap","profession":"Digital Creator","location":"Jalana"},
    {"name":"Rajesh Dusane","profession":"Shopkeeper","location":"Akola"},
    {"name":"Aarti Maniyar","profession":"Beautician","location":"Nagpur"},
    {"name":"Dattatray Deore","profession":"Farmer","location":"Satana"},
    {"name":"Vaidehi Kulkarni","profession":"Mother","location":"Sambhajinagar"},
    {"name":"Sanket Shinde","profession":"Engineer","location":"Ahilyanagar"},
    {"name":"Geeta Pawar","profession":"IT Professional","location":"Bhivandi"},
    {"name":"Jayshree Kadam","profession":"Journalist","location":"Hingoli"},
    {"name":"Bharat Teli","profession":"Sales Manager","location":"Wardha"},
    {"name":"Shweta Thakur","profession":"Librarian","location":"Osmanabad"},
    {"name":"Javed Sayyed","profession":"Chef","location":"Jalna"},
    {"name":"Sandeep Koli","profession":"Fisherman","location":"Alibag"},
    {"name":"Ritesh Barde","profession":"Photographer","location":"Malegaon"},
    {"name":"Pooja Mahajan","profession":"HR Manager","location":"Karad"},
    {"name":"Ajay Wagh","profession":"Security Guard","location":"Kalyan"},
    {"name":"Pallavi Shelar","profession":"Housewife","location":"Palghar"},
    {"name":"Suhas Rathod","profession":"Driver","location":"Beed"},
    {"name":"Santosh Sawant","profession":"Shopkeeper","location":"Chiplun"},
    {"name":"Shreya Deshmukh","profession":"Student","location":"Dhule"},
    {"name":"Amol Raut","profession":"Accountant","location":"Jalgaon"},
    {"name":"Kiran Gaikwad","profession":"Homemaker","location":"Yavatmal"},
    {"name":"Fardeen Inamdar","profession":"Software Developer","location":"Pimpri-Chinchwad"},
    {"name":"Shital Mane","profession":"Nurse","location":"Sangli"},
    {"name":"Swapnil Kadam","profession":"Journalist","location":"Amravati"},
    {"name":"Ramesh Gore","profession":"Electrician","location":"Buldhana"},
    {"name":"Sonali Surve","profession":"Beautician","location":"Gondia"},
    {"name":"Ashwini Teli","profession":"Sales Manager","location":"Wardha"},
    {"name":"Vaishali Thakur","profession":"Librarian","location":"Hingoli"},
    {"name":"Sanjay Deshpande","profession":"Consultant","location":"Osmanabad"},
    {"name":"Shabana Sayyed","profession":"Chef","location":"Jalna"},
    {"name":"Vinod Koli","profession":"Fisherman","location":"Alibag"},
    {"name":"Prajwal Barde","profession":"Photographer","location":"Malegaon"},
    {"name":"Kavita Mahajan","profession":"HR Manager","location":"Karad"},
    {"name":"Prashant Wagh","profession":"Security Guard","location":"Kalyan"},
    {"name":"Jyoti Shelar","profession":"Mother","location":"Palghar"},
    {"name":"Ganesh Rathod","profession":"Driver","location":"Beed"},
    {"name":"Vikas Sawant","profession":"Shopkeeper","location":"Chiplun"},
    {"name":"Sheetal Kulkarni","profession":"IT Professional","location":"Pune"},
    {"name":"Rohini Patil","profession":"Civil Engineer","location":"Kolhapur"},
    {"name":"Kishor Sharma","profession":"Student","location":"Nagpur"},
    {"name":"Rafiq Khan","profession":"Casting Director","location":"Mumbai"},
    {"name":"Pooja Deshmukh","profession":"Housewife","location":"Nashik"},
    {"name":"Vilas Nimbhorkar","profession":"Farmer","location":"Satara"},
    {"name":"Sarita Joshi","profession":"Teacher","location":"Aurangabad"},
    {"name":"Nikhil Chavan","profession":"Sales Executive","location":"Jalgaon"},
    {"name":"Anjali Gaikwad","profession":"Nurse","location":"Latur"},
    {"name":"Manoj More","profession":"Bank Manager","location":"Solapur"},
    {"name":"Nazia Shaikh","profession":"Student","location":"Thane"},
    {"name":"Dipak Jadhav","profession":"Gym Trainer","location":"Amravati"},
    {"name":"Komal Raut","profession":"Designer","location":"Nanded"},
    {"name":"Pravin Sawant","profession":"Lawyer","location":"Ratnagiri"},
    {"name":"Deepak Sutar","profession":"Homemaker","location":"Mumbai"},
    {"name":"Vivek Gore","profession":"Electrician","location":"Pune"},
    {"name":"Kirti Bhamare","profession":"Manager","location":"Nashik"},
    {"name":"Datta Gholap","profession":"Retired","location":"Parbhani"},
    {"name":"Akanksha Sanap","profession":"Digital Creator","location":"Jalana"},
    {"name":"Suresh Dusane","profession":"Shopkeeper","location":"Akola"},
    {"name":"Amreen Maniyar","profession":"Beautician","location":"Nagpur"},
    {"name":"Rajesh Deore","profession":"Farmer","location":"Satana"},
    {"name":"Aishwaraya Kulkarni","profession":"Mother","location":"Sambhajinagar"},
    {"name":"Sachin Shinde","profession":"Engineer","location":"Ahilyanagar"},
    {"name":"Sneha Pawar","profession":"IT Professional","location":"Bhivandi"},
    {"name":"Ashish Kadam","profession":"Journalist","location":"Hingoli"},
    {"name":"Pooja Teli","profession":"Sales Manager","location":"Wardha"},
    {"name":"Nitin Thakur","profession":"Librarian","location":"Osmanabad"},
    {"name":"Arif Sayyed","profession":"Chef","location":"Jalna"},
    {"name":"Raju Koli","profession":"Fisherman","location":"Alibag"},
    {"name":"Harish Barde","profession":"Photographer","location":"Malegaon"},
    {"name":"Shital Mahajan","profession":"HR Manager","location":"Karad"},
    {"name":"Sagar Wagh","profession":"Security Guard","location":"Kalyan"},
    {"name":"Kalyani Shelar","profession":"Housewife","location":"Palghar"},
    {"name":"Ashutosh Rathod","profession":"Driver","location":"Beed"},
    {"name":"Dinesh Sawant","profession":"Shopkeeper","location":"Chiplun"},
    {"name":"Manasi Sutar","profession":"Lawyer","location":"Latur"},
    {"name":"Rohit Gunjal","profession":"Digital Creator","location":"Jalana"},
    {"name":"Poonam Sanap","profession":"Housewife","location":"Nanded"},
    {"name":"Bharat Gholap","profession":"Retired","location":"Parbhani"},
    {"name":"Savita Patil","profession":"Farmer","location":"Satana"},
    {"name":"Akshay Deore","profession":"Mother","location":"Akola"},
    {"name":"Jayesh Bhamare","profession":"Manager","location":"Sambhajinagar"},
    {"name":"Ajay Nimbalkar","profession":"Sales Executive","location":"Ahilyanagar"},
    {"name":"Farooq Shaik","profession":"Real Estate Agent","location":"Bhivandi"},
    {"name":"Seema Gill","profession":"LIC Agent","location":"Nanded"},
    {"name":"Harshal Kulkarni","profession":"Engineer","location":"Mumbai"},
    {"name":"Priyanka Shinde","profession":"IT Professional","location":"Thane"},
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
            width: 40px; 
            height: 40px;
            margin-right: 12px;
            border-radius: 8px; 
            background-color: #ffffff; 
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        
        /* Placeholder for a professional course image (replace URL below with actual course icon/image) */
        .fomo-course-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            /* Placeholder: replace this image with your course icon/image */
            /* Using initials for Spoken English - SE */
            background: url("https://placehold.co/40x40/0A84FF/ffffff?text=SE") center center no-repeat;
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
                    <span>VERIFIED LEARNER</span>
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
     * Formats the registration data into the display message.
     */
    function formatMessage(data) {
        // Message structure: Name, Profession from Location registered for PRODUCT_NAME
        return `<strong>${data.name}</strong>, ${data.profession} from ${data.location} just registered for the ${PRODUCT_NAME}!`;
    }

    /**
     * Selects a random event, updates the DOM, and displays the notification.
     */
    function showNotification() {
        const randomIndex = Math.floor(Math.random() * DUMMY_REGISTRATION_DATA.length);
        const event = DUMMY_REGISTRATION_DATA[randomIndex];

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
    messageEl.innerHTML = '<strong>Welcome!</strong> See recent registrations below.';
    timeEl.textContent = 'just started';

    setTimeout(showNotification, initialDelay);
}

// Ensure the script runs after the DOM is ready (important for external scripts)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFomoWidget);
} else {
    injectFomoWidget();
}
