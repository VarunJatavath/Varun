// Application data
const eventPlanners = [
  {
    id: 1,
    name: "Royal Celebrations",
    specialization: "Luxury Weddings & Corporate Events",
    rating: 4.9,
    reviews: 156,
    startingPrice: "₹50,000",
    tier: "premium",
    location: "Hyderabad",
    verified: true,
    image: "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/8f1909bc6ba1b103ebb2e58861c0b8dc6c067557.png",
    experience: "8 years",
    services: ["Full Event Planning", "Venue Decoration", "Catering Coordination", "Entertainment Management"],
    about: "Specializing in luxury weddings and high-end corporate events with over 8 years of experience creating unforgettable moments.",
    portfolio: [
      "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/8f1909bc6ba1b103ebb2e58861c0b8dc6c067557.png",
      "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/5e32403d68f2f31fa1f22b4993cddb88908514aa.png"
    ]
  },
  {
    id: 2,
    name: "Melody Musicians",
    specialization: "Live Music & Entertainment",
    rating: 4.8,
    reviews: 92,
    startingPrice: "₹15,000",
    tier: "mid-range",
    location: "Hyderabad",
    verified: true,
    image: "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/7a93b9e6740639e0ceed5f883f2ff4f92cfd5435.png",
    experience: "5 years",
    services: ["Live Band", "DJ Services", "Sound System", "Background Music"],
    about: "Professional musicians providing exceptional live entertainment for weddings, corporate events, and private celebrations.",
    portfolio: [
      "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/7a93b9e6740639e0ceed5f883f2ff4f92cfd5435.png",
      "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/ece24db32a0d04502857b4ef39e525216be96cab.png"
    ]
  },
  {
    id: 3,
    name: "Lens & Light Photography",
    specialization: "Event Photography & Videography",
    rating: 4.7,
    reviews: 203,
    startingPrice: "₹8,000",
    tier: "budget",
    location: "Hyderabad",
    verified: true,
    image: "https://pplx-res.cloudinary.com/image/upload/v1755177913/pplx_project_search_images/00eb72287b7f7f6a31f4fc75b4f83c66a16a5b3b.png",
    experience: "6 years",
    services: ["Photography", "Videography", "Drone Shots", "Photo Editing"],
    about: "Capturing life's most precious moments with artistic photography and cinematic videography for over 6 years.",
    portfolio: [
      "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/80c3ae71e01aac3aca15b50db759316892d437ca.png",
      "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/358a007347176dee2d1edbf27c1720f9c143d577.png"
    ]
  },
  {
    id: 4,
    name: "Spice Garden Catering",
    specialization: "Multi-Cuisine Catering",
    rating: 4.6,
    reviews: 134,
    startingPrice: "₹300/plate",
    tier: "mid-range",
    location: "Hyderabad",
    verified: true,
    image: "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/497d192ca802276a98091ebd6987c483e710a59f.png",
    experience: "10 years",
    services: ["Buffet Catering", "Live Counters", "Beverages", "Desserts"],
    about: "Delivering exceptional culinary experiences with diverse menu options and impeccable service for a decade.",
    portfolio: [
      "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/497d192ca802276a98091ebd6987c483e710a59f.png",
      "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/4045e384ccce32e47edff07603f11f0cf8f1adeb.png"
    ]
  },
  {
    id: 5,
    name: "Elegant Decor Studio",
    specialization: "Theme Decoration & Styling",
    rating: 4.8,
    reviews: 87,
    startingPrice: "₹25,000",
    tier: "premium",
    location: "Hyderabad",
    verified: true,
    image: "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/4045e384ccce32e47edff07603f11f0cf8f1adeb.png",
    experience: "7 years",
    services: ["Theme Decoration", "Floral Arrangements", "Lighting Setup", "Stage Design"],
    about: "Creating breathtaking event atmospheres through innovative decoration and styling solutions since 7 years.",
    portfolio: [
      "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/4045e384ccce32e47edff07603f11f0cf8f1adeb.png",
      "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/5e32403d68f2f31fa1f22b4993cddb88908514aa.png"
    ]
  },
  {
    id: 6,
    name: "Budget Bash Planners",
    specialization: "Affordable Complete Events",
    rating: 4.5,
    reviews: 267,
    startingPrice: "₹12,000",
    tier: "budget",
    location: "Hyderabad",
    verified: true,
    image: "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/358a007347176dee2d1edbf27c1720f9c143d577.png",
    experience: "4 years",
    services: ["Basic Event Planning", "Venue Booking", "Simple Decoration", "Coordination"],
    about: "Making celebrations affordable without compromising quality. Specialized in budget-friendly event solutions.",
    portfolio: [
      "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/358a007347176dee2d1edbf27c1720f9c143d577.png",
      "https://pplx-res.cloudinary.com/image/upload/v1757180550/pplx_project_search_images/497d192ca802276a98091ebd6987c483e710a59f.png"
    ]
  }
];

// Global variables
let currentFilter = 'all';
let filteredPlanners = [...eventPlanners];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  console.log('Initializing EventConnect app...');
  
  // Render initial planners
  renderPlanners();
  
  // Setup all event listeners
  setupEventListeners();
  
  // Initialize navigation
  setupNavigation();
  
  console.log('App initialized successfully');
}

function setupEventListeners() {
  // Filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const filter = this.getAttribute('data-filter');
      console.log('Filter clicked:', filter);
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Apply filter
      currentFilter = filter;
      applyFilters();
    });
  });
  
  // Search functionality
  const searchBtn = document.querySelector('.search-btn');
  const searchInput = document.querySelector('.search-input');
  const searchSelect = document.querySelector('.search-select');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      handleSearch();
    });
  }
  
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
      }
    });
    
    searchInput.addEventListener('input', function() {
      // Real-time search as user types
      if (this.value.length > 2 || this.value.length === 0) {
        handleSearch();
      }
    });
  }
  
  if (searchSelect) {
    searchSelect.addEventListener('change', function() {
      handleSearch();
    });
  }
  
  // Modal functionality
  const modal = document.getElementById('plannerModal');
  const closeModal = document.getElementById('closeModal');
  
  if (closeModal) {
    closeModal.addEventListener('click', function() {
      closeModalHandler();
    });
  }
  
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModalHandler();
      }
    });
  }
  
  // Category cards
  setupCategoryCards();
  
  console.log('Event listeners setup complete');
}

function setupCategoryCards() {
  const categoryCards = document.querySelectorAll('.category-card');
  
  categoryCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
      const categoryName = this.querySelector('h3').textContent.toLowerCase();
      console.log('Category clicked:', categoryName);
      
      // Map category names to service filters
      const categoryMap = {
        'full event planning': 'full-planning',
        'photography': 'photography',
        'catering': 'catering',
        'musicians': 'musicians',
        'decorators': 'decorators',
        'venues': 'venues'
      };
      
      const serviceValue = categoryMap[categoryName];
      if (serviceValue) {
        // Update search select
        const searchSelect = document.querySelector('.search-select');
        if (searchSelect) {
          searchSelect.value = serviceValue;
        }
        
        // Scroll to planners section
        const plannersSection = document.getElementById('planners');
        if (plannersSection) {
          plannersSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          });
          
          // Apply search after scrolling
          setTimeout(() => {
            handleSearch();
          }, 500);
        }
      }
    });
  });
}

function applyFilters() {
  console.log('Applying filter:', currentFilter);
  
  if (currentFilter === 'all') {
    filteredPlanners = [...eventPlanners];
  } else {
    filteredPlanners = eventPlanners.filter(planner => {
      const plannerTier = planner.tier.toLowerCase().replace('-', '-');
      const filterTier = currentFilter.toLowerCase().replace('-', '-');
      return plannerTier === filterTier;
    });
  }
  
  console.log('Filtered planners:', filteredPlanners.length);
  renderPlanners();
}

function handleSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchSelect = document.querySelector('.search-select');
  
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const serviceFilter = searchSelect ? searchSelect.value : '';
  
  console.log('Search term:', searchTerm, 'Service filter:', serviceFilter);
  
  let results = [...eventPlanners];
  
  // Filter by search term
  if (searchTerm) {
    results = results.filter(planner => 
      planner.name.toLowerCase().includes(searchTerm) ||
      planner.specialization.toLowerCase().includes(searchTerm) ||
      planner.location.toLowerCase().includes(searchTerm) ||
      planner.services.some(service => service.toLowerCase().includes(searchTerm))
    );
  }
  
  // Filter by service type
  if (serviceFilter) {
    const serviceMap = {
      'full-planning': ['Full Event Planning', 'Basic Event Planning'],
      'photography': ['Photography', 'Videography'],
      'catering': ['Buffet Catering', 'Live Counters', 'Beverages'],
      'musicians': ['Live Band', 'DJ Services', 'Background Music'],
      'decorators': ['Theme Decoration', 'Venue Decoration', 'Floral Arrangements'],
      'venues': ['Venue Booking']
    };
    
    if (serviceMap[serviceFilter]) {
      results = results.filter(planner =>
        planner.services.some(service =>
          serviceMap[serviceFilter].some(mappedService =>
            service.toLowerCase().includes(mappedService.toLowerCase())
          )
        )
      );
    }
  }
  
  // Apply current tier filter if not 'all'
  if (currentFilter !== 'all') {
    results = results.filter(planner => {
      const plannerTier = planner.tier.toLowerCase().replace('-', '-');
      const filterTier = currentFilter.toLowerCase().replace('-', '-');
      return plannerTier === filterTier;
    });
  }
  
  filteredPlanners = results;
  console.log('Search results:', filteredPlanners.length);
  renderPlanners();
}

function renderPlanners() {
  const plannersGrid = document.getElementById('plannersGrid');
  if (!plannersGrid) {
    console.error('Planners grid not found');
    return;
  }
  
  console.log('Rendering planners:', filteredPlanners.length);
  plannersGrid.innerHTML = '';
  
  if (filteredPlanners.length === 0) {
    plannersGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--color-text-secondary);">
        <h3 style="margin-bottom: 1rem;">No planners found</h3>
        <p>Try adjusting your filters or search terms.</p>
      </div>
    `;
    return;
  }
  
  filteredPlanners.forEach(planner => {
    const plannerCard = createPlannerCard(planner);
    plannersGrid.appendChild(plannerCard);
  });
}

function createPlannerCard(planner) {
  const card = document.createElement('div');
  card.className = 'planner-card';
  card.setAttribute('data-tier', planner.tier);
  
  const tierDisplayName = planner.tier.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('-');
  
  const tierClass = `tier-${planner.tier}`;
  
  card.innerHTML = `
    <div class="planner-image">
      <img src="${planner.image}" alt="${planner.name}" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV2ZW50IFBsYW5uZXI8L3RleHQ+PC9zdmc+'">
      ${planner.verified ? '<div class="verified-badge">✓ Verified</div>' : ''}
      <div class="tier-badge ${tierClass}">${tierDisplayName}</div>
    </div>
    <div class="planner-info">
      <div class="planner-header">
        <h3 class="planner-name">${planner.name}</h3>
        <div class="planner-price">${planner.startingPrice}</div>
      </div>
      <p class="planner-specialization">${planner.specialization}</p>
      <div class="planner-meta">
        <div class="rating">
          <span class="rating-stars">⭐ ${planner.rating}</span>
          <span>(${planner.reviews} reviews)</span>
        </div>
        <div class="location">📍 ${planner.location}</div>
      </div>
      <div class="planner-actions">
        <button class="btn btn--view" onclick="showPlannerDetails(${planner.id})">View Profile</button>
        <button class="btn btn--contact" onclick="contactPlanner(${planner.id})">Contact</button>
      </div>
    </div>
  `;
  
  return card;
}

// Global functions for button clicks
window.showPlannerDetails = function(plannerId) {
  console.log('Showing planner details for:', plannerId);
  const planner = eventPlanners.find(p => p.id === plannerId);
  if (!planner) {
    console.error('Planner not found:', plannerId);
    return;
  }
  
  const modal = document.getElementById('plannerModal');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalBody) {
    console.error('Modal elements not found');
    return;
  }
  
  modalBody.innerHTML = `
    <div class="planner-detail">
      <div class="planner-detail-header">
        <img src="${planner.image}" alt="${planner.name}" class="planner-detail-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV2ZW50IFBsYW5uZXI8L3RleHQ+PC9zdmc+'">
        <div class="planner-detail-info">
          <h2>${planner.name}</h2>
          <p class="specialization">${planner.specialization}</p>
          <div class="detail-meta">
            <div class="rating">
              <span class="rating-stars">⭐ ${planner.rating}</span>
              <span>(${planner.reviews} reviews)</span>
            </div>
            <div class="experience">🏆 ${planner.experience} experience</div>
            <div class="location">📍 ${planner.location}</div>
          </div>
          <div class="pricing">
            <strong>Starting from ${planner.startingPrice}</strong>
          </div>
        </div>
      </div>
      
      <div class="planner-detail-content">
        <div class="about-section">
          <h3>About</h3>
          <p>${planner.about}</p>
        </div>
        
        <div class="services-section">
          <h3>Services</h3>
          <div class="services-list">
            ${planner.services.map(service => `<span class="service-tag">${service}</span>`).join('')}
          </div>
        </div>
        
        <div class="portfolio-section">
          <h3>Portfolio</h3>
          <div class="portfolio-grid">
            ${planner.portfolio.map(image => `
              <img src="${image}" alt="Portfolio Image" class="portfolio-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlBvcnRmb2xpbyBJbWFnZTwvdGV4dD48L3N2Zz4='">
            `).join('')}
          </div>
        </div>
        
        <div class="action-buttons">
          <button class="btn btn--primary btn--lg" onclick="bookPlanner(${planner.id})">Book Now</button>
          <button class="btn btn--outline btn--lg" onclick="contactPlanner(${planner.id})">Send Message</button>
        </div>
      </div>
    </div>
    
    <style>
      .planner-detail-header {
        display: flex;
        gap: 1.5rem;
        margin-bottom: 2rem;
      }
      
      .planner-detail-image {
        width: 120px;
        height: 120px;
        border-radius: 12px;
        object-fit: cover;
        flex-shrink: 0;
      }
      
      .planner-detail-info h2 {
        color: var(--color-royal-purple);
        margin-bottom: 0.5rem;
        font-size: 1.8rem;
      }
      
      .specialization {
        color: var(--color-text-secondary);
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }
      
      .detail-meta {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
        font-size: 0.9rem;
      }
      
      .pricing {
        color: var(--color-gold-accent);
        font-size: 1.2rem;
      }
      
      .planner-detail-content h3 {
        color: var(--color-royal-purple);
        margin: 1.5rem 0 1rem 0;
        font-size: 1.3rem;
      }
      
      .services-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }
      
      .service-tag {
        background: var(--color-gold-light);
        color: var(--color-royal-purple);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 500;
      }
      
      .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 1rem;
        margin-bottom: 1rem;
      }
      
      .portfolio-image {
        width: 100%;
        height: 120px;
        object-fit: cover;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.2s ease;
      }
      
      .portfolio-image:hover {
        transform: scale(1.05);
      }
      
      .action-buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        justify-content: center;
      }
      
      @media (max-width: 768px) {
        .planner-detail-header {
          flex-direction: column;
          text-align: center;
          align-items: center;
        }
        
        .action-buttons {
          flex-direction: column;
        }
        
        .portfolio-grid {
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        }
      }
    </style>
  `;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

window.contactPlanner = function(plannerId) {
  const planner = eventPlanners.find(p => p.id === plannerId);
  if (!planner) return;
  
  alert(`📞 Contacting ${planner.name}...\n\n✉️ In a real app, this would:\n• Open a messaging interface\n• Show contact form\n• Display phone number\n• Enable direct communication`);
};

window.bookPlanner = function(plannerId) {
  const planner = eventPlanners.find(p => p.id === plannerId);
  if (!planner) return;
  
  alert(`🎉 Booking ${planner.name}...\n\n📅 In a real app, this would:\n• Show date/time picker\n• Display service packages\n• Calculate pricing\n• Process payment\n• Send confirmation`);
  closeModalHandler();
};

function closeModalHandler() {
  const modal = document.getElementById('plannerModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function setupNavigation() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
  
  // Handle scroll to update active nav link
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = 'var(--shadow-md)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
      }
    }
  });
}

// Keyboard support
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('plannerModal');
    if (modal && !modal.classList.contains('hidden')) {
      closeModalHandler();
    }
  }
});

// Add visual feedback for interactions
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn')) {
    // Add ripple effect
    const button = e.target;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
      z-index: 1;
    `;
    
    // Ensure button has relative positioning
    const originalPosition = getComputedStyle(button).position;
    if (originalPosition === 'static') {
      button.style.position = 'relative';
    }
    button.style.overflow = 'hidden';
    
    button.appendChild(ripple);
    
    // Add ripple animation if not already present
    if (!document.querySelector('#ripple-animation')) {
      const style = document.createElement('style');
      style.id = 'ripple-animation';
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  }
});

// Initialize tooltips
document.addEventListener('DOMContentLoaded', function() {
  // Add tooltips to verified badges
  setTimeout(() => {
    const verifiedBadges = document.querySelectorAll('.verified-badge');
    verifiedBadges.forEach(badge => {
      badge.title = 'This planner has been verified by EventConnect';
    });
  }, 500);
});

console.log('EventConnect app script loaded successfully');