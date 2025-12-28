/**
 * Project: Aarogya Massage Kala E-Book
 * Scope: PAN India (All Religions, Regions, and Ages)
 */

(function() {
    const config = {
        productName: "Aarogya Massage Kala E-Book",
        initialDelay: 3000,
        displayDuration: 5000,
        intervalDelay: 4000,
        bgColor: '#f9f9f9', // Whitish Grey
        ebookImage: 'https://placehold.co/100x100/28a745/ffffff?text=E-Book' // Replace with your e-book URL
    };

    // Diverse Pan-India Data Pool
    const names = [
        "Minal Chauhan", "Dipak Mishra", "Jasmin Maniyar", "Rahul Sharma", "Deepa Mehta", 
        "Vishal Pande", "Namrata Singh", "Keshav Dixit", "Ravsaheb Patil", "Pooja Rana", 
        "Nadeem Shaik", "Nitu Gill", "John D'Souza", "Srinivasan Reddy", "Arman Shetty",
        "Priyanka Deshmukh", "Aniket Kulkarni", "Zoya Khan", "Harpreet Singh", "Lata Iyer",
        "Vikram Rathore", "Arun Venkat", "Siddharth Chatterjee", "Amitava Ghosh", "Meenakshi Sundaram",
        "Rajesh Khanna", "Sunita Williams", "Mohd. Azhar", "Gurpreet Kaur", "Fatima Bi"
    ];

    const locations = [
        "Indore", "Patna", "Kochi", "Chandigarh", "Delhi", "Lucknow", "Amritsar", "Ujjain", 
        "Satara", "Haryana", "Jaipur", "Shimla", "Goa", "Hyderabad", "Banglore", "Pune", 
        "Mumbai", "Chennai", "Kolkata", "Ahmedabad", "Surat", "Bhopal", "Visakhapatnam", 
        "Vadodara", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot"
    ];

    // Generate 200 diverse customer entries
    const customers = [];
    for (let i = 0; i < 200; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomCity = locations[Math.floor(Math.random() * locations.length)];
        const timeAgo = Math.floor(Math.random() * 55) + 2; 
        customers.push({ name: randomName, city: randomCity, time: timeAgo });
    }

    function initFomo() {
        const style = document.createElement('style');
        style.innerHTML = `
            #amk-fomo-v2 {
                position: fixed;
                bottom: 20px;
                left: 20px;
                max-width: 380px;
                background: ${config.bgColor};
                border: 1px solid #e0e0e0;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                padding: 10px;
                display: flex;
                align-items: center;
                font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                z-index: 10000;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.5s ease-in-out;
            }
            #amk-fomo-v2.visible { opacity: 1; transform: translateY(0); }
            .fomo-img { width: 60px; height: 60px; border-radius: 4px; margin-right: 12px; object-fit: cover; border: 1px solid #ddd; }
            .fomo-content { flex: 1; }
            .fomo-badge { 
                color: #28a745; 
                font-size: 11px; 
                font-weight: bold; 
                display: flex; 
                align-items: center; 
                margin-bottom: 3px;
                text-transform: uppercase;
            }
            .fomo-badge svg { width: 14px; height: 14px; margin-right: 4px; fill: #28a745; }
            .fomo-text { font-size: 13px; color: #444; line-height: 1.3; }
            .fomo-text b { color: #000; }
            .fomo-time { font-size: 11px; color: #888; margin-top: 4px; }
            @media (max-width: 500px) { #amk-fomo-v2 { left: 10px; right: 10px; bottom: 10px; } }
        `;
        document.head.appendChild(style);

        const widget = document.createElement('div');
        widget.id = 'amk-fomo-v2';
        widget.innerHTML = `
            <img src="${config.ebookImage}" class="fomo-img">
            <div class="fomo-content">
                <div class="fomo-badge">
                    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    Verified Purchase
                </div>
                <div class="fomo-text" id="fomo-msg"></div>
                <div class="fomo-time" id="fomo-time"></div>
            </div>
        `;
        document.body.appendChild(widget);

        let counter = 0;
        function rotateFomo() {
            const c = customers[counter];
            document.getElementById('fomo-msg').innerHTML = `<b>${c.name}</b> from ${c.city} purchased "${config.productName}"`;
            document.getElementById('fomo-time').innerText = `${c.time} min ago`;
            
            widget.classList.add('visible');
            
            setTimeout(() => {
                widget.classList.remove('visible');
                counter = (counter + 1) % customers.length;
                setTimeout(rotateFomo, config.intervalDelay);
            }, config.displayDuration);
        }

        setTimeout(rotateFomo, config.initialDelay);
    }
    window.addEventListener('load', initFomo);
})();
