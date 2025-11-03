// i.js
// Theme Toggle Functionality
const themeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
themeToggle.checked = savedTheme === 'light';

// Toggle theme when checkbox changes
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Animate stats counter
function animateCounter() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // The lower the slower
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounter(), 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Client Industry Selection
const industryItems = document.querySelectorAll('.industry-item');
const clientModal = document.getElementById('client-modal');
const closeClientModal = document.querySelector('.close-client-modal');
const clientIndustryTitle = document.getElementById('client-industry');

// Client data for each industry
const clientData = {
    schools: [
        "Greenwood High",
        "Lincoln Academy", 
        "Tech University",
        "Learning Center",
        "STEM Institute",
        "City College"
    ],
    hospitality: [
        "Grand Hotel",
        "Resort Paradise",
        "City Suites",
        "Luxury Inn",
        "Business Stay",
        "Vacation Rentals"
    ],
    government: [
        "City Council",
        "State Dept",
        "Public Works",
        "Health Services",
        "Transportation",
        "Utilities Board"
    ],
    food: [
        "Fresh Foods Co",
        "Organic Farms",
        "Restaurant Chain",
        "Beverage Corp",
        "Food Distributors",
        "Catering Services"
    ]
};

// Open client modal with industry details
industryItems.forEach(item => {
    item.addEventListener('click', () => {
        const industryType = item.getAttribute('data-industry');
        const industryName = item.querySelector('h3').textContent;
        
        // Update modal title
        clientIndustryTitle.textContent = industryName;
        
        // Clear existing logos
        const logosGrid = document.querySelector('.client-logos-grid');
        logosGrid.innerHTML = '';
        
        // Add new logos based on industry
        if (clientData[industryType]) {
            clientData[industryType].forEach(clientName => {
                const clientLogo = document.createElement('div');
                clientLogo.className = 'client-logo-modal';
                clientLogo.innerHTML = `<div class="logo-placeholder">${clientName}</div>`;
                logosGrid.appendChild(clientLogo);
            });
        }
        
        // Show modal
        clientModal.style.display = 'block';
    });
});

// Close client modal
closeClientModal.addEventListener('click', () => {
    clientModal.style.display = 'none';
});

// Close client modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === clientModal) {
        clientModal.style.display = 'none';
    }
});

// Team Member Details
const teamMembers = document.querySelectorAll('.team-member');
const teamModal = document.getElementById('team-modal');
const closeModal = document.querySelector('.close-modal');

// Team member data
const teamData = {
    1: {
        name: "Arjan Biscarra",
        position: "Chief Technical Officer",
        bio: "John is the visionary behind Source Area Solutions. With over 15 years of experience in the IT industry, he founded the company in 2022 with the mission to deliver cutting-edge technological solutions to businesses of all sizes. His expertise lies in strategic IT planning and digital transformation.",
        email: "john.smith@sourceareasolutions.com",
        specialization: "Strategic IT Planning, Digital Transformation"
    },
    2: {
        name: "Sarah Johnson",
        position: "CTO",
        bio: "Sarah leads our technical strategy and innovation initiatives. With a background in computer science and 12 years of experience in enterprise IT architecture, she ensures our solutions are at the forefront of technology while maintaining reliability and security.",
        email: "sarah.johnson@sourceareasolutions.com",
        specialization: "Enterprise Architecture, Cloud Solutions"
    },
    3: {
        name: "Michael Chen",
        position: "Head of Security",
        bio: "Michael is our cybersecurity expert with certifications in CISSP and CEH. He has over 10 years of experience in protecting organizations from digital threats and developing comprehensive security frameworks that safeguard critical business assets.",
        email: "michael.chen@sourceareasolutions.com",
        specialization: "Cybersecurity, Risk Management"
    },
    4: {
        name: "Emily Rodriguez",
        position: "Cloud Solutions Architect",
        bio: "Emily specializes in designing and implementing cloud infrastructure solutions. With expertise across AWS, Azure, and Google Cloud platforms, she helps clients migrate to the cloud efficiently while optimizing costs and performance.",
        email: "emily.rodriguez@sourceareasolutions.com",
        specialization: "Cloud Migration, Infrastructure Design"
    },
    5: {
        name: "David Wilson",
        position: "Network Engineer",
        bio: "David has 8 years of experience in network design and implementation. He specializes in creating robust, scalable network infrastructures that support business growth while maintaining high availability and security standards.",
        email: "david.wilson@sourceareasolutions.com",
        specialization: "Network Design, SD-WAN"
    },
    6: {
        name: "Lisa Thompson",
        position: "Software Developer",
        bio: "Lisa leads our custom software development team. With expertise in multiple programming languages and frameworks, she creates tailored solutions that address specific business challenges and improve operational efficiency.",
        email: "lisa.thompson@sourceareasolutions.com",
        specialization: "Custom Software, Application Development"
    },
    7: {
        name: "Robert Brown",
        position: "IT Consultant",
        bio: "Robert works directly with clients to assess their technology needs and develop strategic IT roadmaps. His consultative approach helps organizations align technology investments with business objectives for maximum ROI.",
        email: "robert.brown@sourceareasolutions.com",
        specialization: "IT Strategy, Business Alignment"
    },
    8: {
        name: "Jennifer Lee",
        position: "Project Manager",
        bio: "Jennifer ensures our projects are delivered on time and within budget. With PMP certification and 7 years of experience managing IT implementations, she coordinates cross-functional teams to achieve project success.",
        email: "jennifer.lee@sourceareasolutions.com",
        specialization: "Project Management, Implementation"
    },
    9: {
        name: "James Anderson",
        position: "Systems Administrator",
        bio: "James manages our clients' IT infrastructure with a focus on reliability and performance. His expertise includes server administration, storage solutions, and ensuring systems operate at peak efficiency.",
        email: "james.anderson@sourceareasolutions.com",
        specialization: "Systems Administration, Infrastructure Management"
    }
};

// Open modal with team member details
teamMembers.forEach(member => {
    member.addEventListener('click', () => {
        const memberId = member.getAttribute('data-member');
        const memberData = teamData[memberId];
        
        if (memberData) {
            document.getElementById('modal-name').textContent = memberData.name;
            document.getElementById('modal-position').textContent = memberData.position;
            document.getElementById('modal-bio').textContent = memberData.bio;
            document.getElementById('modal-email').textContent = memberData.email;
            document.getElementById('modal-specialization').textContent = memberData.specialization;
            
            teamModal.style.display = 'block';
        }
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    teamModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === teamModal) {
        teamModal.style.display = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Start counter animation when stats section is visible
            if (entry.target.id === 'about') {
                animateCounter();
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .team-member, .client-logo, .partner-logo').forEach(el => {
    observer.observe(el);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});