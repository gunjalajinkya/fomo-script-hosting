// --- Configuration ---
const initialDelay = 3000;      // 3 seconds delay before the first notification
const displayDuration = 5000;   // 5 seconds display time
// CRITICAL FIX: Interval Delay set to 9 seconds (5s display + 4s gap) to prevent overlap.
const intervalDelay = 9000;    // 9 seconds between the start of one notification and the next

// Product Details
const PRODUCT_NAME = "Live Spoken English Practice Batch";

// Data for 200 diverse registrants from Maharashtra (Name, Profession, Location - now in Marathi script)
const DUMMY_REGISTRATION_DATA = [
    // Data structure now uses Marathi translations for Name, Profession, and Location
    {"name":"मीनल दुसाने","profession_marathi":"गृहिणी","location_marathi":"नाशिक"},
    {"name":"दीपक जोशी","profession_marathi":"विद्यार्थी","location_marathi":"पुणे"},
    {"name":"जास्मिन मणियार","profession_marathi":"ब्युटी पार्लर मालक","location_marathi":"नागपूर"},
    {"name":"राहुल सावंत","profession_marathi":"दुकानदार","location_marathi":"रत्नागिरी"},
    {"name":"दीपा सुतार","profession_marathi":"वकील","location_marathi":"लातूर"},
    {"name":"विशाल गुंजाळ","profession_marathi":"डिजिटल निर्माता","location_marathi":"जालना"},
    {"name":"नम्रता सानप","profession_marathi":"गृहिणी","location_marathi":"नांदेड"},
    {"name":"केशव घोलाप","profession_marathi":"निवृत्त","location_marathi":"परभणी"},
    {"name":"रावसाहेब पाटील","profession_marathi":"शेतकरी","location_marathi":"सातारा"},
    {"name":"पूजा देवरे","profession_marathi":"आई","location_marathi":"अकोला"},
    {"name":"ईश्वर भामरे","profession_marathi":"व्यवस्थापक","location_marathi":"संभाजीनगर"},
    {"name":"शेखर निंबाळकर","profession_marathi":"विक्री कार्यकारी","location_marathi":"अहिल्यानगर"},
    {"name":"नदीम शेख","profession_marathi":"रिअल इस्टेट एजंट","location_marathi":"भिवंडी"},
    {"name":"नितू गिल","profession_marathi":"एलआयसी एजंट","location_marathi":"नांदेड"},
    {"name":"ऋतुजा कुलकर्णी","profession_marathi":"अभियंता","location_marathi":"मुंबई"},
    {"name":"संजय शिंदे","profession_marathi":"आयटी व्यावसायिक","location_marathi":"ठाणे"},
    {"name":"अमृता चव्हाण","profession_marathi":"शिक्षक","location_marathi":"कोल्हापूर"},
    {"name":"गणेश मोरे","profession_marathi":"बँक क्लर्क","location_marathi":"सोलापूर"},
    {"name":"स्वाती पवार","profession_marathi":"डॉक्टर","location_marathi":"पनवेल"},
    {"name":"विजय जाधव","profession_marathi":"सरकारी कर्मचारी","location_marathi":"औरंगाबाद"},
    {"name":"प्रिया राणे","profession_marathi":"कलाकार","location_marathi":"सिंधुदुर्ग"},
    {"name":"अमित कांबळे","profession_marathi":"मेकॅनिक","location_marathi":"चंद्रपूर"},
    {"name":"श्रुती देशमुख","profession_marathi":"विद्यार्थी","location_marathi":"धुळे"},
    {"name":"अक्षय राऊत","profession_marathi":"लेखापाल","location_marathi":"जळगाव"},
    {"name":"नेहा गायकवाड","profession_marathi":"गृहिणी","location_marathi":"यवतमाळ"},
    {"name":"समीर इनामदार","profession_marathi":"सॉफ्टवेअर डेव्हलपर","location_marathi":"पिंपरी-चिंचवड"},
    {"name":"वैशाली माने","profession_marathi":"नर्स","location_marathi":"सांगली"},
    {"name":"रोहित कदम","profession_marathi":"पत्रकार","location_marathi":"अमरावती"},
    {"name":"किरण गोरे","profession_marathi":"इलेक्ट्रिशियन","location_marathi":"बुलढाणा"},
    {"name":"अंजली सुर्वे","profession_marathi":"ब्युटिशियन","location_marathi":"गोंदिया"},
    {"name":"प्रशांत तेली","profession_marathi":"विक्री व्यवस्थापक","location_marathi":"वर्धा"},
    {"name":"मनीषा ठाकूर","profession_marathi":"ग्रंथपाल","location_marathi":"हिंगोली"},
    {"name":"सुनील देशपांडे","profession_marathi":"सल्लागार","location_marathi":"उस्मानाबाद"},
    {"name":"आयशा सय्यद","profession_marathi":"शेफ","location_marathi":"जालना"},
    {"name":"बाळकृष्ण कोळी","profession_marathi":"मासेमार","location_marathi":"अलिबाग"},
    {"name":"जयेश बारदे","profession_marathi":"फोटोग्राफर","location_marathi":"मालेगाव"},
    {"name":"शीतल महाजन","profession_marathi":"एचआर व्यवस्थापक","location_marathi":"कराड"},
    {"name":"विकी वाघ","profession_marathi":"सुरक्षा रक्षक","location_marathi":"कल्याण"},
    {"name":"सुषमा शेलार","profession_marathi":"आई","location_marathi":"पालघर"},
    {"name":"अर्जुन राठोड","profession_marathi":"ड्रायव्हर","location_marathi":"बीड"},
    {"name":"दीपक सावंत","profession_marathi":"दुकानदार","location_marathi":"चिपळूण"},
    {"name":"सारिका कुलकर्णी","profession_marathi":"आयटी व्यावसायिक","location_marathi":"पुणे"},
    {"name":"ओंकार पाटील","profession_marathi":"स्थापत्य अभियंता","location_marathi":"कोल्हापूर"},
    {"name":"रितू शर्मा","profession_marathi":"विद्यार्थी","location_marathi":"नागपूर"},
    {"name":"फिरोज खान","profession_marathi":"कास्टिंग डायरेक्टर","location_marathi":"मुंबई"},
    {"name":"लीना देशमुख","profession_marathi":"गृहिणी","location_marathi":"नाशिक"},
    {"name":"नितीन निंभोरकर","profession_marathi":"शेतकरी","location_marathi":"सातारा"},
    {"name":"श्रेया जोशी","profession_marathi":"शिक्षक","location_marathi":"औरंगाबाद"},
    {"name":"अजय चव्हाण","profession_marathi":"विक्री कार्यकारी","location_marathi":"जळगाव"},
    {"name":"कविता गायकवाड","profession_marathi":"नर्स","location_marathi":"लातूर"},
    {"name":"तुषार मोरे","profession_marathi":"बँक व्यवस्थापक","location_marathi":"सोलापूर"},
    {"name":"सना शेख","profession_marathi":"विद्यार्थी","location_marathi":"ठाणे"},
    {"name":"सचिन जाधव","profession_marathi":"जिम ट्रेनर","location_marathi":"अमरावती"},
    {"name":"ऋतुजा राऊत","profession_marathi":"डिझायनर","location_marathi":"नांदेड"},
    {"name":"विवेक सावंत","profession_marathi":"वकील","location_marathi":"रत्नागिरी"},
    {"name":"अर्चना सुतार","profession_marathi":"गृहिणी","location_marathi":"मुंबई"},
    {"name":"प्रवीण गोरे","profession_marathi":"इलेक्ट्रिशियन","location_marathi":"पुणे"},
    {"name":"निशा भामरे","profession_marathi":"व्यवस्थापक","location_marathi":"नाशिक"},
    {"name":"सुनीता घोलाप","profession_marathi":"निवृत्त","location_marathi":"परभणी"},
    {"name":"स्वप्नील सानप","profession_marathi":"डिजिटल निर्माता","location_marathi":"जालना"},
    {"name":"राजेश दुसाने","profession_marathi":"दुकानदार","location_marathi":"अकोला"},
    {"name":"अपर्णा मणियार","profession_marathi":"ब्युटिशियन","location_marathi":"नागपूर"},
    {"name":"दिलीप देवरे","profession_marathi":"शेतकरी","location_marathi":"सातारा"},
    {"name":"श्रद्धा कुलकर्णी","profession_marathi":"आई","location_marathi":"संभाजीनगर"},
    {"name":"महेश शिंदे","profession_marathi":"अभियंता","location_marathi":"अहिल्यानगर"},
    {"name":"प्रियांका पवार","profession_marathi":"आयटी व्यावसायिक","location_marathi":"भिवंडी"},
    {"name":"अविनाश कदम","profession_marathi":"पत्रकार","location_marathi":"हिंगोली"},
    {"name":"भावना तेली","profession_marathi":"विक्री व्यवस्थापक","location_marathi":"वर्धा"},
    {"name":"जितेंद्र ठाकूर","profession_marathi":"ग्रंथपाल","location_marathi":"उस्मानाबाद"},
    {"name":"झोया सय्यद","profession_marathi":"शेफ","location_marathi":"जालना"},
    {"name":"दिनेश कोळी","profession_marathi":"मासेमार","location_marathi":"अलिबाग"},
    {"name":"संदीप बारदे","profession_marathi":"फोटोग्राफर","location_marathi":"मालेगाव"},
    {"name":"रूपाली महाजन","profession_marathi":"एचआर व्यवस्थापक","location_marathi":"कराड"},
    {"name":"निखिल वाघ","profession_marathi":"सुरक्षा रक्षक","location_marathi":"कल्याण"},
    {"name":"वर्षा शेलार","profession_marathi":"गृहिणी","location_marathi":"पालघर"},
    {"name":"विक्रम राठोड","profession_marathi":"ड्रायव्हर","location_marathi":"बीड"},
    {"name":"किशोर सावंत","profession_marathi":"दुकानदार","location_marathi":"चिपळूण"},
    {"name":"दीपिका सुतार","profession_marathi":"वकील","location_marathi":"लातूर"},
    {"name":"गोपाल गुंजाळ","profession_marathi":"डिजिटल निर्माता","location_marathi":"जालना"},
    {"name":"स्नेहा सानप","profession_marathi":"गृहिणी","location_marathi":"नांदेड"},
    {"name":"अरविंद घोलाप","profession_marathi":"निवृत्त","location_marathi":"परभणी"},
    {"name":"रंजना पाटील","profession_marathi":"शेतकरी","location_marathi":"सातारा"},
    {"name":"विकास देवरे","profession_marathi":"आई","location_marathi":"अकोला"},
    {"name":"प्रवीण भामरे","profession_marathi":"व्यवस्थापक","location_marathi":"संभाजीनगर"},
    {"name":"किरण निंबाळकर","profession_marathi":"विक्री कार्यकारी","location_marathi":"अहिल्यानगर"},
    {"name":"फहाद शेख","profession_marathi":"रिअल इस्टेट एजंट","location_marathi":"भिवंडी"},
    {"name":"सोनाली गिल","profession_marathi":"एलआयसी एजंट","location_marathi":"नांदेड"},
    {"name":"श्रद्धा कुलकर्णी","profession_marathi":"अभियंता","location_marathi":"मुंबई"},
    {"name":"आकाश शिंदे","profession_marathi":"आयटी व्यावसायिक","location_marathi":"ठाणे"},
    {"name":"प्रिया चव्हाण","profession_marathi":"शिक्षक","location_marathi":"कोल्हापूर"},
    {"name":"राकेश मोरे","profession_marathi":"बँक क्लर्क","location_marathi":"सोलापूर"},
    {"name":"मानसी पवार","profession_marathi":"डॉक्टर","location_marathi":"पनवेल"},
    {"name":"मनोज जाधव","profession_marathi":"सरकारी कर्मचारी","location_marathi":"औरंगाबाद"},
    {"name":"अंकिता राणे","profession_marathi":"कलाकार","location_marathi":"सिंधुदुर्ग"},
    {"name":"सागर कांबळे","profession_marathi":"मेकॅनिक","location_marathi":"चंद्रपूर"},
    {"name":"योगेश देशमुख","profession_marathi":"विद्यार्थी","location_marathi":"धुळे"},
    {"name":"पूजा राऊत","profession_marathi":"लेखापाल","location_marathi":"जळगाव"},
    {"name":"अजित गायकवाड","profession_marathi":"गृहिणी","location_marathi":"यवतमाळ"},
    {"name":"मुबीन इनामदार","profession_marathi":"सॉफ्टवेअर डेव्हलपर","location_marathi":"पिंपरी-चिंचवड"},
    {"name":"अश्विनी माने","profession_marathi":"नर्स","location_marathi":"सांगली"},
    {"name":"अमोल कदम","profession_marathi":"पत्रकार","location_marathi":"अमरावती"},
    {"name":"कल्याणी गोरे","profession_marathi":"इलेक्ट्रिशियन","location_marathi":"बुलढाणा"},
    {"name":"दीप्ती सुर्वे","profession_marathi":"ब्युटिशियन","location_marathi":"गोंदिया"},
    {"name":"वैभव तेली","profession_marathi":"विक्री व्यवस्थापक","location_marathi":"वर्धा"},
    {"name":"पूजा ठाकूर","profession_marathi":"ग्रंथपाल","location_marathi":"हिंगोली"},
    {"name":"हरीश देशपांडे","profession_marathi":"सल्लागार","location_marathi":"उस्मानाबाद"},
    {"name":"अमिना सय्यद","profession_marathi":"शेफ","location_marathi":"जालना"},
    {"name":"प्रकाश कोळी","profession_marathi":"मासेमार","location_marathi":"अलिबाग"},
    {"name":"अक्षय बारदे","profession_marathi":"फोटोग्राफर","location_marathi":"मालेगाव"},
    {"name":"गीता महाजन","profession_marathi":"एचआर व्यवस्थापक","location_marathi":"कराड"},
    {"name":"संकेत वाघ","profession_marathi":"सुरक्षा रक्षक","location_marathi":"कल्याण"},
    {"name":"स्नेहल शेलार","profession_marathi":"आई","location_marathi":"पालघर"},
    {"name":"रोहन राठोड","profession_marathi":"ड्रायव्हर","location_marathi":"बीड"},
    {"name":"जितेंद्र सावंत","profession_marathi":"दुकानदार","location_marathi":"चिपळूण"},
    {"name":"अंकिता कुलकर्णी","profession_marathi":"आयटी व्यावसायिक","location_marathi":"पुणे"},
    {"name":"केतन पाटील","profession_marathi":"स्थापत्य अभियंता","location_marathi":"कोल्हापूर"},
    {"name":"दिव्या शर्मा","profession_marathi":"विद्यार्थी","location_marathi":"नागपूर"},
    {"name":"इरफान खान","profession_marathi":"कास्टिंग डायरेक्टर","location_marathi":"मुंबई"},
    {"name":"सीमा देशमुख","profession_marathi":"गृहिणी","location_marathi":"नाशिक"},
    {"name":"प्रमोद निंभोरकर","profession_marathi":"शेतकरी","location_marathi":"सातारा"},
    {"name":"अंजली जोशी","profession_marathi":"शिक्षक","location_marathi":"औरंगाबाद"},
    {"name":"सिद्धार्थ चव्हाण","profession_marathi":"विक्री कार्यकारी","location_marathi":"जळगाव"},
    {"name":"माधवी गायकवाड","profession_marathi":"नर्स","location_marathi":"लातूर"},
    {"name":"सुहास मोरे","profession_marathi":"बँक व्यवस्थापक","location_marathi":"सोलापूर"},
    {"name":"फिजा शेख","profession_marathi":"विद्यार्थी","location_marathi":"ठाणे"},
    {"name":"आनंद जाधव","profession_marathi":"जिम ट्रेनर","location_marathi":"अमरावती"},
    {"name":"प्रीती राऊत","profession_marathi":"डिझायनर","location_marathi":"नांदेड"},
    {"name":"सुनील सावंत","profession_marathi":"वकील","location_marathi":"रत्नागिरी"},
    {"name":"नेहा सुतार","profession_marathi":"गृहिणी","location_marathi":"मुंबई"},
    {"name":"मंगेश गोरे","profession_marathi":"इलेक्ट्रिशियन","location_marathi":"पुणे"},
    {"name":"सविता भामरे","profession_marathi":"व्यवस्थापक","location_marathi":"नाशिक"},
    {"name":"अशोक घोलाप","profession_marathi":"निवृत्त","location_marathi":"परभणी"},
    {"name":"पूजा सानप","profession_marathi":"डिजिटल निर्माता","location_marathi":"जालना"},
    {"name":"राजेश दुसाने","profession_marathi":"दुकानदार","location_marathi":"अकोला"},
    {"name":"अमरीन मणियार","profession_marathi":"ब्युटिशियन","location_marathi":"नागपूर"},
    {"name":"दत्तात्रय देवरे","profession_marathi":"शेतकरी","location_marathi":"सातारा"},
    {"name":"ऐश्वर्या कुलकर्णी","profession_marathi":"आई","location_marathi":"संभाजीनगर"},
    {"name":"सचिन शिंदे","profession_marathi":"अभियंता","location_marathi":"अहिल्यानगर"},
    {"name":"स्नेहा पवार","profession_marathi":"आयटी व्यावसायिक","location_marathi":"भिवंडी"},
    {"name":"आशिष कदम","profession_marathi":"पत्रकार","location_marathi":"हिंगोली"},
    {"name":"पूजा तेली","profession_marathi":"विक्री व्यवस्थापक","location_marathi":"वर्धा"},
    {"name":"नितीन ठाकूर","profession_marathi":"ग्रंथपाल","location_marathi":"उस्मानाबाद"},
    {"name":"आरिफ सय्यद","profession_marathi":"शेफ","location_marathi":"जालना"},
    {"name":"राजू कोळी","profession_marathi":"मासेमार","location_marathi":"अलिबाग"},
    {"name":"हरीश बारदे","profession_marathi":"फोटोग्राफर","location_marathi":"मालेगाव"},
    {"name":"शीतल महाजन","profession_marathi":"एचआर व्यवस्थापक","location_marathi":"कराड"},
    {"name":"सागर वाघ","profession_marathi":"सुरक्षा रक्षक","location_marathi":"कल्याण"},
    {"name":"कल्याणी शेलार","profession_marathi":"गृहिणी","location_marathi":"पालघर"},
    {"name":"आशुतोष राठोड","profession_marathi":"ड्रायव्हर","location_marathi":"बीड"},
    {"name":"दिनेश सावंत","profession_marathi":"दुकानदार","location_marathi":"चिपळूण"},
    {"name":"मानसी सुतार","profession_marathi":"वकील","location_marathi":"लातूर"},
    {"name":"रोहित गुंजाळ","profession_marathi":"डिजिटल निर्माता","location_marathi":"जालना"},
    {"name":"पूनम सानप","profession_marathi":"गृहिणी","location_marathi":"नांदेड"},
    {"name":"भरत घोलाप","profession_marathi":"निवृत्त","location_marathi":"परभणी"},
    {"name":"सविता पाटील","profession_marathi":"शेतकरी","location_marathi":"सातारा"},
    {"name":"अक्षय देवरे","profession_marathi":"आई","location_marathi":"अकोला"},
    {"name":"जयेश भामरे","profession_marathi":"व्यवस्थापक","location_marathi":"संभाजीनगर"},
    {"name":"अजय निंबाळकर","profession_marathi":"विक्री कार्यकारी","location_marathi":"अहिल्यानगर"},
    {"name":"फारूक शेख","profession_marathi":"रिअल इस्टेट एजंट","location_marathi":"भिवंडी"},
    {"name":"सीमा गिल","profession_marathi":"एलआयसी एजंट","location_marathi":"नांदेड"},
    {"name":"हर्षल कुलकर्णी","profession_marathi":"अभियंता","location_marathi":"मुंबई"},
    {"name":"प्रियांका शिंदे","profession_marathi":"आयटी व्यावसायिक","location_marathi":"ठाणे"},
    // Remaining entries to reach 200, ensuring diversity and Marathi focus
    {"name":"वसंत मोरे","profession_marathi":"सरकारी नोकर","location_marathi":"सांगली"},
    {"name":"आशा कश्यप","profession_marathi":"शिक्षक","location_marathi":"कोल्हापूर"},
    {"name":"नितीन देशमुख","profession_marathi":"कन्सल्टंट","location_marathi":"रत्नागिरी"},
    {"name":"स्मिता पाटील","profession_marathi":"व्यावसायिक","location_marathi":"नागपूर"},
    {"name":"भूषण माने","profession_marathi":"व्यवस्थापक","location_marathi":"पुणे"},
    {"name":"शिल्पा जाधव","profession_marathi":"नर्स","location_marathi":"नांदेड"},
    {"name":"अमोल वाघमारे","profession_marathi":"विक्री कार्यकारी","location_marathi":"औरंगाबाद"},
    {"name":"प्राजक्ता शेवाळे","profession_marathi":"गृहिणी","location_marathi":"नाशिक"},
    {"name":"रमेश देसाई","profession_marathi":"शेतकरी","location_marathi":"सातारा"},
    {"name":"अंजुम पठाण","profession_marathi":"ब्युटिशियन","location_marathi":"जळगाव"},
    {"name":"सुरेश कदम","profession_marathi":"मासेमार","location_marathi":"रायगड"},
    {"name":"रश्मी सप्रे","profession_marathi":"पत्रकार","location_marathi":"अमरावती"},
    {"name":"जितेंद्र गायकवाड","profession_marathi":"ड्रायव्हर","location_marathi":"लातूर"},
    {"name":"पूजा भोसले","profession_marathi":"विद्यार्थी","location_marathi":"सोलापूर"},
    {"name":"विनायक कोळेकर","profession_marathi":"मेकॅनिक","location_marathi":"उस्मानाबाद"},
    {"name":"मंदाकिनी शिर्के","profession_marathi":"आई","location_marathi":"सिंधुदुर्ग"},
    {"name":"शुभम शर्मा","profession_marathi":"सॉफ्टवेअर डेव्हलपर","location_marathi":"मुंबई"},
    {"name":"संगीता शिंदे","profession_marathi":"आयटी व्यावसायिक","location_marathi":"ठाणे"},
    {"name":"नारायण देशपांडे","profession_marathi":"शिक्षक","location_marathi":"कोल्हापूर"},
    {"name":"शालिनी मोरे","profession_marathi":"बँक क्लर्क","location_marathi":"सोलापूर"},
    {"name":"अभिजीत पवार","profession_marathi":"डॉक्टर","location_marathi":"पनवेल"},
    {"name":"दिलीप जाधव","profession_marathi":"सरकारी कर्मचारी","location_marathi":"औरंगाबाद"},
    {"name":"अश्विनी राणे","profession_marathi":"कलाकार","location_marathi":"सिंधुदुर्ग"},
    {"name":"विक्रम कांबळे","profession_marathi":"मेकॅनिक","location_marathi":"चंद्रपूर"},
    {"name":"कविता देशमुख","profession_marathi":"विद्यार्थी","location_marathi":"धुळे"},
    {"name":"नंदकिशोर राऊत","profession_marathi":"लेखापाल","location_marathi":"जळगाव"},
    {"name":"माधुरी गायकवाड","profession_marathi":"गृहिणी","location_marathi":"यवतमाळ"},
    {"name":"रिझवान इनामदार","profession_marathi":"सॉफ्टवेअर डेव्हलपर","location_marathi":"पिंपरी-चिंचवड"},
    {"name":"वर्षा माने","profession_marathi":"नर्स","location_marathi":"सांगली"},
    {"name":"सुधीर कदम","profession_marathi":"पत्रकार","location_marathi":"अमरावती"},
    {"name":"ज्योती गोरे","profession_marathi":"इलेक्ट्रिशियन","location_marathi":"बुलढाणा"},
    {"name":"मनोज सुर्वे","profession_marathi":"ब्युटिशियन","location_marathi":"गोंदिया"},
    {"name":"प्रीतम तेली","profession_marathi":"विक्री व्यवस्थापक","location_marathi":"वर्धा"},
    {"name":"पल्लवी ठाकूर","profession_marathi":"ग्रंथपाल","location_marathi":"हिंगोली"},
    {"name":"अतुल देशपांडे","profession_marathi":"सल्लागार","location_marathi":"उस्मानाबाद"},
    {"name":"झरीन सय्यद","profession_marathi":"शेफ","location_marathi":"जालना"},
    {"name":"रवींद्र कोळी","profession_marathi":"मासेमार","location_marathi":"अलिबाग"},
    {"name":"नितीन बारदे","profession_marathi":"फोटोग्राफर","location_marathi":"मालेगाव"},
    {"name":"प्रज्ञा महाजन","profession_marathi":"एचआर व्यवस्थापक","location_marathi":"कराड"},
    {"name":"समीर वाघ","profession_marathi":"सुरक्षा रक्षक","location_marathi":"कल्याण"},
    {"name":"मीना शेलार","profession_marathi":"आई","location_marathi":"पालघर"},
    {"name":"सुनील राठोड","profession_marathi":"ड्रायव्हर","location_marathi":"बीड"},
    {"name":"प्रकाश सावंत","profession_marathi":"दुकानदार","location_marathi":"चिपळूण"},
    {"name":"अनुजा कुलकर्णी","profession_marathi":"आयटी व्यावसायिक","location_marathi":"पुणे"},
    {"name":"दीपक पाटील","profession_marathi":"स्थापत्य अभियंता","location_marathi":"कोल्हापूर"},
    {"name":"स्नेहल शर्मा","profession_marathi":"विद्यार्थी","location_marathi":"नागपूर"},
    {"name":"अजहर खान","profession_marathi":"कास्टिंग डायरेक्टर","location_marathi":"मुंबई"},
    {"name":"प्रज्ञा देशमुख","profession_marathi":"गृहिणी","location_marathi":"नाशिक"},
    {"name":"शशिकांत निंभोरकर","profession_marathi":"शेतकरी","location_marathi":"सातारा"},
    {"name":"अर्चना जोशी","profession_marathi":"शिक्षक","location_marathi":"औरंगाबाद"},
    {"name":"विवेक चव्हाण","profession_marathi":"विक्री कार्यकारी","location_marathi":"जळगाव"},
    {"name":"सुमन गायकवाड","profession_marathi":"नर्स","location_marathi":"लातूर"},
    {"name":"प्रशांत मोरे","profession_marathi":"बँक व्यवस्थापक","location_marathi":"सोलापूर"},
    {"name":"शायना शेख","profession_marathi":"विद्यार्थी","location_marathi":"ठाणे"},
    {"name":"रोहन जाधव","profession_marathi":"जिम ट्रेनर","location_marathi":"अमरावती"},
    {"name":"सपना राऊत","profession_marathi":"डिझायनर","location_marathi":"नांदेड"},
    {"name":"महेश सावंत","profession_marathi":"वकील","location_marathi":"रत्नागिरी"},
    {"name":"प्रणाली सुतार","profession_marathi":"गृहिणी","location_marathi":"मुंबई"},
    {"name":"प्रमोद गोरे","profession_marathi":"इलेक्ट्रिशियन","location_marathi":"पुणे"},
    {"name":"अंजली भामरे","profession_marathi":"व्यवस्थापक","location_marathi":"नाशिक"},
    {"name":"किशोर घोलाप","profession_marathi":"निवृत्त","location_marathi":"परभणी"},
    {"name":"वैभव सानप","profession_marathi":"डिजिटल निर्माता","location_marathi":"जालना"},
    {"name":"अमोल दुसाने","profession_marathi":"दुकानदार","location_marathi":"अकोला"},
    {"name":"सबीना मणियार","profession_marathi":"ब्युटिशियन","location_marathi":"नागपूर"},
    {"name":"सुरेश देवरे","profession_marathi":"शेतकरी","location_marathi":"सातारा"},
    {"name":"प्रियांका कुलकर्णी","profession_marathi":"आई","location_marathi":"संभाजीनगर"},
    {"name":"गणेश शिंदे","profession_marathi":"अभियंता","location_marathi":"अहिल्यानगर"},
    {"name":"आकांक्षा पवार","profession_marathi":"आयटी व्यावसायिक","location_marathi":"भिवंडी"},
    {"name":"जितेंद्र कदम","profession_marathi":"पत्रकार","location_marathi":"हिंगोली"},
    {"name":"अश्विनी तेली","profession_marathi":"विक्री व्यवस्थापक","location_marathi":"वर्धा"},
    {"name":"प्रवीण ठाकूर","profession_marathi":"ग्रंथपाल","location_marathi":"उस्मानाबाद"},
    {"name":"रियाझ सय्यद","profession_marathi":"शेफ","location_marathi":"जालना"},
    {"name":"संकेत कोळी","profession_marathi":"मासेमार","location_marathi":"अलिबाग"},
    {"name":"रुपेश बारदे","profession_marathi":"फोटोग्राफर","location_marathi":"मालेगाव"},
    {"name":"अदिती महाजन","profession_marathi":"एचआर व्यवस्थापक","location_marathi":"कराड"},
    {"name":"अनिकेत वाघ","profession_marathi":"सुरक्षा रक्षक","location_marathi":"कल्याण"},
    {"name":"विद्या शेलार","profession_marathi":"गृहिणी","location_marathi":"पालघर"},
    {"name":"सचिन राठोड","profession_marathi":"ड्रायव्हर","location_marathi":"बीड"},
    {"name":"अमोल सावंत","profession_marathi":"दुकानदार","location_marathi":"चिपळूण"},
    {"name":"कविता सुतार","profession_marathi":"वकील","location_marathi":"लातूर"},
    {"name":"सिद्धेश गुंजाळ","profession_marathi":"डिजिटल निर्माता","location_marathi":"जालना"},
    {"name":"प्रीती सानप","profession_marathi":"गृहिणी","location_marathi":"नांदेड"},
    {"name":"रवींद्र घोलाप","profession_marathi":"निवृत्त","location_marathi":"परभणी"},
    {"name":"वर्षा पाटील","profession_marathi":"शेतकरी","location_marathi":"सातारा"},
    {"name":"सुहास देवरे","profession_marathi":"आई","location_marathi":"अकोला"},
    {"name":"प्रणित भामरे","profession_marathi":"व्यवस्थापक","location_marathi":"संभाजीनगर"},
    {"name":"सागर निंबाळकर","profession_marathi":"विक्री कार्यकारी","location_marathi":"अहिल्यानगर"},
    {"name":"अफरोज शेख","profession_marathi":"रिअल इस्टेट एजंट","location_marathi":"भिवंडी"},
    {"name":"प्रीती गिल","profession_marathi":"एलआयसी एजंट","location_marathi":"नांदेड"},
    {"name":"मनोज कुलकर्णी","profession_marathi":"अभियंता","location_marathi":"मुंबई"},
    {"name":"पल्लवी शिंदे","profession_marathi":"आयटी व्यावसायिक","location_marathi":"ठाणे"}
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
     * Formats the registration data into the display message, using Marathi for key details.
     */
    function formatMessage(data) {
        // Structure: (Marathi Name), (Marathi Profession) from (Marathi Location) just registered for the PRODUCT_NAME!
        return `<strong>${data.name}</strong>, ${data.profession_marathi} from ${data.location_marathi} just registered for the ${PRODUCT_NAME}!`;
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
    // Note: Initialization text is kept in English
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
