class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.isOpen = false;
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 50;
                    transition: transform 0.3s ease, background-color 0.3s ease;
                }
                
                :host(.hidden-nav) {
                    transform: translateY(-100%);
                }
                
                :host(.scrolled) {
                    background-color: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                }
                
                nav {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 1.5rem 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .logo span {
                    color: #FF6B4A;
                }
                
                .desktop-menu {
                    display: none;
                    align-items: center;
                    gap: 2.5rem;
                }
                
                @media (min-width: 768px) {
                    .desktop-menu {
                        display: flex;
                    }
                }
                
                .desktop-menu a {
                    text-decoration: none;
                    color: #666666;
                    font-size: 0.95rem;
                    font-weight: 500;
                    position: relative;
                    transition: color 0.3s ease;
                }
                
                .desktop-menu a:hover {
                    color: #1a1a1a;
                }
                
                .desktop-menu a::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #FF6B4A;
                    transition: width 0.3s ease;
                }
                
                .desktop-menu a:hover::after {
                    width: 100%;
                }
                
                .cta-btn {
                    background-color: #1a1a1a;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 9999px;
                    text-decoration: none;
                    font-size: 0.9rem;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }
                
                .cta-btn:hover {
                    background-color: #FF6B4A;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(255, 107, 74, 0.2);
                }
                
                .mobile-toggle {
                    display: block;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                    z-index: 60;
                }
                
                @media (min-width: 768px) {
                    .mobile-toggle {
                        display: none;
                    }
                }
                
                .hamburger {
                    width: 24px;
                    height: 2px;
                    background-color: #1a1a1a;
                    position: relative;
                    transition: all 0.3s ease;
                }
                
                .hamburger::before,
                .hamburger::after {
                    content: '';
                    position: absolute;
                    width: 24px;
                    height: 2px;
                    background-color: #1a1a1a;
                    transition: all 0.3s ease;
                }
                
                .hamburger::before {
                    top: -8px;
                }
                
                .hamburger::after {
                    bottom: -8px;
                }
                
                .mobile-toggle.active .hamburger {
                    background-color: transparent;
                }
                
                .mobile-toggle.active .hamburger::before {
                    top: 0;
                    transform: rotate(45deg);
                }
                
                .mobile-toggle.active .hamburger::after {
                    bottom: 0;
                    transform: rotate(-45deg);
                }
                
                .mobile-menu {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    width: 100%;
                    height: 100vh;
                    background-color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 2rem;
                    transition: right 0.3s ease;
                    z-index: 40;
                }
                
                .mobile-menu.active {
                    right: 0;
                }
                
                .mobile-menu a {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 2rem;
                    font-weight: 600;
                    color: #1a1a1a;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .mobile-menu a:hover {
                    color: #FF6B4A;
                }
                
                .mobile-menu .cta-mobile {
                    margin-top: 1rem;
                    background-color: #FF6B4A;
                    color: white;
                    padding: 1rem 2.5rem;
                    border-radius: 9999px;
                    font-size: 1.1rem;
                }
            </style>
            
            <nav>
                <a href="#hero" class="logo">
                    Kallkan<span>.</span>
                </a>
                <div class="desktop-menu">
                    <a href="#services">Services</a>
                    <a href="#portfolio">Results</a>
                    <a href="#about">About</a>
                    <a href="#contact" class="cta-btn">Get a Quote</a>
                </div>
<button class="mobile-toggle" aria-label="Toggle menu">
                    <div class="hamburger"></div>
                </button>
                <div class="mobile-menu">
                    <a href="#services" class="mobile-link">Services</a>
                    <a href="#portfolio" class="mobile-link">Results</a>
                    <a href="#about" class="mobile-link">About</a>
                    <a href="#contact" class="mobile-link cta-mobile">Get a Quote</a>
                </div>
</nav>
        `;
    }

    setupEventListeners() {
        const mobileToggle = this.shadowRoot.querySelector('.mobile-toggle');
        const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
        const mobileLinks = this.shadowRoot.querySelectorAll('.mobile-link');
        
        mobileToggle.addEventListener('click', () => {
            this.isOpen = !this.isOpen;
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = this.isOpen ? 'hidden' : '';
        });
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.isOpen = false;
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Handle scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.classList.add('scrolled');
            } else {
                this.classList.remove('scrolled');
            }
        });
        
        // Handle hide on scroll down
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > lastScroll && currentScroll > 100) {
                this.classList.add('hidden-nav');
            } else {
                this.classList.remove('hidden-nav');
            }
            
            lastScroll = currentScroll;
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);