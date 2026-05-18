// ─── TRANSLATIONS ───────────────────────────────
const i18n = {
  en: {
    nav_home: "Home", nav_skills: "Skills", nav_projects: "Projects", nav_internships: "Internships",
    nav_certs: "Certificates", nav_contact: "Contact",
    badge: "Available for Internships & Fresher Roles",
    hi: "Hi, I'm", role: "Web Developer & Java Enthusiast",
    bio: "B.Tech IT undergraduate at KITS Huzurabad with a passion for building meaningful digital solutions. Quick learner, collaborative team player, and driven to grow in Web Development and Java.",
    btn_work: "View My Work ↓", btn_contact: "Get In Touch",
    cgpa: "CGPA", internships_stat: "Internships", projects_stat: "Projects",
    s_skills_eye: "Technical Arsenal", s_skills: "Skills & Technologies",
    s_proj_eye: "What I've Built", s_projects: "Projects",
    s_int_eye: "Experience", s_internships: "Internships",
    s_edu_eye: "Academic Background", s_edu: "Education",
    edu_degree: "B.Tech – Information Technology", cgpa_label: "CGPA / 10",
    s_cert_eye: "Achievements", s_certs: "Certifications",
    s_int2_eye: "Beyond Code", s_interests: "Interests & Activities",
    s_con_eye: "Let's Connect", s_contact: "Get In Touch",
    con_email: "Email", con_phone: "Phone", con_loc: "Location",
    i1_role: "Java Full Stack Intern",
    i1_b1: "Covered HTML, CSS, Bootstrap, JavaScript, jQuery, Java, Spring Boot, MySQL, and Git",
    i1_b2: "Built responsive frontend interfaces and backend applications using Spring Boot and MySQL",
    i2_role: "Frontend Development Intern",
    i2_b1: "Developed interactive, responsive web interfaces focusing on UI/UX best practices",
    i2_b2: "Gained practical exposure to real-world frontend development workflows and tools",
    p1_title: "Government Scheme Hub", p1_desc: "Centralized platform aggregating government schemes via web scraping with eligibility-based recommendations. Features user authentication and responsive UI for non-technical users.",
    p2_title: "Green Energy Marketplace", p2_desc: "Dynamic e-commerce platform for green energy solutions with real-time data integration. Led a team of 4, handling frontend/backend integration and project coordination.",
    p3_title: "Video to Text Converter", p3_desc: "A responsive web application that converts video audio into real-time text using speech recognition. Features include video uploads, live transcription generation, and a user-friendly transcript management interface.",
    c1: "Programming in Java", c2: "HTML & CSS", c3: "Java Programming", c4: "Intro to Front End Development",
    in1: "Building Web Projects", in2: "React & Tailwind CSS", in3: "Data Storytelling",
    in4: "Hackathons & Tech Expos", in5: "Public Speaking", in6: "Modern Frontend Frameworks",
    footer: "Designed & Built by Samatha Banda · B.Tech IT · KITS Huzurabad · 2024"
  },
  te: {
    nav_home: "హోమ్", nav_skills: "నైపుణ్యాలు", nav_projects: "ప్రాజెక్టులు", nav_internships: "ఇంటర్న్‌షిప్‌లు",
    nav_certs: "సర్టిఫికేట్లు", nav_contact: "సంప్రదించు",
    badge: "ఇంటర్న్‌షిప్ & ఫ్రెషర్ అవకాశాలకు అందుబాటులో ఉన్నాను",
    hi: "నమస్కారం, నేను", role: "వెబ్ డెవలపర్ & జావా ఉత్సాహి",
    bio: "KITS హుజురాబాద్‌లో B.Tech IT చదువుతున్న విద్యార్థిని. వెబ్ డెవలప్‌మెంట్ మరియు జావాలో అభిరుచి ఉంది. వేగంగా నేర్చుకునే వ్యక్తిని మరియు బృంద పని పట్ల ఆసక్తి ఉంది.",
    btn_work: "నా పని చూడండి ↓", btn_contact: "సంప్రదించండి",
    cgpa: "సీజీపీఏ", internships_stat: "ఇంటర్న్‌షిప్‌లు", projects_stat: "ప్రాజెక్టులు",
    s_skills_eye: "సాంకేతిక నైపుణ్యాలు", s_skills: "నైపుణ్యాలు & సాంకేతికతలు",
    s_proj_eye: "నేను నిర్మించినవి", s_projects: "ప్రాజెక్టులు",
    s_int_eye: "అనుభవం", s_internships: "ఇంటర్న్‌షిప్‌లు",
    s_edu_eye: "విద్యా నేపథ్యం", s_edu: "విద్య",
    edu_degree: "B.Tech – ఇన్ఫర్మేషన్ టెక్నాలజీ", cgpa_label: "సీజీపీఏ / 10",
    s_cert_eye: "విజయాలు", s_certs: "సర్టిఫికేట్లు",
    s_int2_eye: "కోడ్ దాటి", s_interests: "అభిరుచులు & కార్యకలాపాలు",
    s_con_eye: "కలుద్దాం", s_contact: "సంప్రదించండి",
    con_email: "ఇమెయిల్", con_phone: "ఫోన్", con_loc: "స్థానం",
    i1_role: "జావా ఫుల్ స్టాక్ ఇంటర్న్",
    i1_b1: "HTML, CSS, Bootstrap, JavaScript, jQuery, Java, Spring Boot, MySQL మరియు Git నేర్చుకున్నాను",
    i1_b2: "Spring Boot మరియు MySQL ఉపయోగించి రెస్పాన్సివ్ ఇంటర్‌ఫేస్‌లు నిర్మించాను",
    i2_role: "ఫ్రంటెండ్ డెవలప్‌మెంట్ ఇంటర్న్",
    i2_b1: "UI/UX బెస్ట్ ప్రాక్టీసులపై దృష్టి పెట్టి ఇంటరాక్టివ్ వెబ్ ఇంటర్‌ఫేస్‌లు అభివృద్ధి చేశాను",
    i2_b2: "నిజ-ప్రపంచ ఫ్రంటెండ్ డెవలప్‌మెంట్ వర్క్‌ఫ్లోలో అనుభవం పొందాను",
    p1_title: "గవర్నమెంట్ స్కీమ్ హబ్", p1_desc: "వెబ్ స్క్రాపింగ్ ద్వారా ప్రభుత్వ పథకాలను సేకరించే కేంద్రీకృత వేదిక. అర్హత ఆధారిత సిఫారసులు మరియు వినియోగదారు ప్రమాణీకరణతో కూడుకున్నది.",
    p2_title: "గ్రీన్ ఎనర్జీ మార్కెట్‌ప్లేస్", p2_desc: "గ్రీన్ ఎనర్జీ పరిష్కారాల కోసం డైనమిక్ ఇ-కామర్స్ వేదిక. 4 మంది బృందానికి నాయకత్వం వహించి ఫ్రంటెండ్/బ్యాకెండ్ ఇంటిగ్రేషన్ నిర్వహించాను.",
    p3_title: "వీడియో నుండి టెక్స్ట్ కన్వర్టర్", p3_desc: "స్పీచ్ రికగ్నిషన్ ఉపయోగించి వీడియో ఆడియోను నిజ-సమయ టెక్స్ట్‌గా మార్చే రెస్పాన్సివ్ వెబ్ అప్లికేషన్. వీడియో అప్‌లోడ్‌లు మరియు సులభమైన ఇంటర్‌ఫేస్ దీని లక్షణాలు.",
    c1: "జావాలో ప్రోగ్రామింగ్", c2: "HTML & CSS", c3: "జావా ప్రోగ్రామింగ్", c4: "ఫ్రంట్ ఎండ్ డెవలప్‌మెంట్ పరిచయం",
    in1: "వెబ్ ప్రాజెక్టులు నిర్మించడం", in2: "React & Tailwind CSS", in3: "డేటా స్టోరీటెల్లింగ్",
    in4: "హాకథాన్‌లు & టెక్ ఎక్స్‌పోలు", in5: "పబ్లిక్ స్పీకింగ్", in6: "ఆధునిక ఫ్రంటెండ్ ఫ్రేమ్‌వర్క్‌లు",
    footer: "రూపొందించిన వారు: సమత బండ · B.Tech IT · KITS హుజురాబాద్ · 2024"
  },
  hi: {
    nav_home: "होम", nav_skills: "कौशल", nav_projects: "प्रोजेक्ट", nav_internships: "इंटर्नशिप",
    nav_certs: "प्रमाणपत्र", nav_contact: "संपर्क",
    badge: "इंटर्नशिप और फ्रेशर अवसरों के लिए उपलब्ध",
    hi: "नमस्ते, मैं हूँ", role: "वेब डेवलपर और जावा उत्साही",
    bio: "KITS हुजुराबाद में B.Tech IT की छात्रा। वेब डेवलपमेंट और जावा में गहरी रुचि। तेजी से सीखने वाली और टीम में काम करने की चाहत रखने वाली।",
    btn_work: "मेरा काम देखें ↓", btn_contact: "संपर्क करें",
    cgpa: "CGPA", internships_stat: "इंटर्नशिप", projects_stat: "प्रोजेक्ट",
    s_skills_eye: "तकनीकी कौशल", s_skills: "कौशल और तकनीकें",
    s_proj_eye: "मेरे प्रोजेक्ट", s_projects: "प्रोजेक्ट",
    s_int_eye: "अनुभव", s_internships: "इंटर्नशिप",
    s_edu_eye: "शैक्षणिक पृष्ठभूमि", s_edu: "शिक्षा",
    edu_degree: "B.Tech – सूचना प्रौद्योगिकी", cgpa_label: "CGPA / 10",
    s_cert_eye: "उपलब्धियाँ", s_certs: "प्रमाणपत्र",
    s_int2_eye: "कोड से परे", s_interests: "रुचियाँ और गतिविधियाँ",
    s_con_eye: "जुड़ें", s_contact: "संपर्क करें",
    con_email: "ईमेल", con_phone: "फ़ोन", con_loc: "स्थान",
    i1_role: "जावा फुल स्टैक इंटर्न",
    i1_b1: "HTML, CSS, Bootstrap, JavaScript, jQuery, Java, Spring Boot, MySQL और Git सीखा",
    i1_b2: "Spring Boot और MySQL से रिस्पॉन्सिव इंटरफेस और बैकएंड एप्लिकेशन बनाए",
    i2_role: "फ्रंटेंड डेवलपमेंट इंटर्न",
    i2_b1: "UI/UX बेस्ट प्रैक्टिस पर ध्यान देते हुए इंटरेक्टिव वेब इंटरफेस विकसित किए",
    i2_b2: "वास्तविक फ्रंटेंड डेवलपमेंट वर्कफ्लो में व्यावहारिक अनुभव प्राप्त किया",
    p1_title: "गवर्नमेंट स्कीम हब", p1_desc: "वेब स्क्रेपिंग के जरिए सरकारी योजनाओं को एकत्र करने वाला केंद्रीय मंच। पात्रता आधारित सिफारिशें और उपयोगकर्ता प्रमाणीकरण के साथ।",
    p2_title: "ग्रीन एनर्जी मार्केटप्लेस", p2_desc: "हरित ऊर्जा समाधानों के लिए डायनामिक ई-कॉमर्स प्लेटफॉर्म। 4 लोगों की टीम का नेतृत्व करते हुए फ्रंटेंड/बैकेंड इंटीग्रेशन संभाला।",
    p3_title: "वीडियो टू टेक्स्ट कनवर्टर", p3_desc: "स्पीच रिकग्निशन का उपयोग करके वीडियो ऑडियो को रियल-टाइम टेक्स्ट में बदलने वाला रिस्पॉन्सिव वेब एप्लिकेशन। इसमें वीडियो अपलोड और आसान इंटरफ़ेस जैसी सुविधाएं शामिल हैं।",
    c1: "जावा में प्रोग्रामिंग", c2: "HTML और CSS", c3: "जावा प्रोग्रामिंग", c4: "फ्रंट एंड डेवलपमेंट परिचय",
    in1: "वेब प्रोजेक्ट बनाना", in2: "React और Tailwind CSS", in3: "डेटा स्टोरीटेलिंग",
    in4: "हैकथॉन और टेक एक्सपो", in5: "सार्वजनिक बोलना", in6: "आधुनिक फ्रंटेंड फ्रेमवर्क",
    footer: "डिज़ाइन और निर्माण: समता बंडा · B.Tech IT · KITS हुजुराबाद · 2024"
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t && t[key]) el.textContent = t[key];
  });
}

// ─── THEME ───────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement;
  html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

// ─── MOBILE MENU ─────────────────────────────────
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.querySelector('.hamburger').classList.toggle('active');
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.querySelector('.hamburger').classList.remove('active');
}

// ─── SCROLL REVEAL & ANIMATIONS ─────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

  // Skill Bar Animation
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-level-fill').forEach(bar => {
          const w = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => { bar.style.width = w; }, 100);
        });
        skillObserver.unobserve(e.target); // Animate only once
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('#skills').forEach(el => skillObserver.observe(el));
});
