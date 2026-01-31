class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1a1a1a;
                    color: white;
                    padding: 4rem 0 2rem;
                }
                
                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }
                
                .footer-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    margin-bottom: 4rem;
                }
                
                @media (min-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 2fr 1fr 1fr 1fr;
                    }
                }
                
                .brand p {
                    color: #9ca3af;
                    margin-top: 1rem;
                    line-height: 1.6;
                    font-size: 0.95rem;
                }
                
                .logo {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    text-decoration: none;
                }
                
                .logo span {
                    color: #FF6B4A;
                }
                
                h4 {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 1rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: white;
                }
                
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                li {
                    margin-bottom: 0.75rem;
                }
                
                a {
                    color: #9ca3af;
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: color 0.3s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                a:hover {
                    color: #FF6B4A;
                }
                
                .bottom {
                    border-top: 1px solid #333;
                    padding-top: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    justify-content: space-between;
                    align-items: center;
                    text-align: center;
                }
                
                @media (min-width: 768px) {
                    .bottom {
                        flex-direction: row;
                        text-align: left;
                    }
                }
                
                .copyright {
                    color: #666;
                    font-size: 0.875rem;
                }
                
                .socials {
                    display: flex;
                    gap: 1.5rem;
                }
                
                .socials a {
                    color: #9ca3af;
                    transition: color 0.3s ease;
                }
                
                .socials a:hover {
                    color: #FF6B4A;
                }
            </style>
            
            <div class="container">
                <div class="footer-grid">
                    <div class="brand">
                        <a href="#hero" class="logo">Kallkan<span>.</span></a>
                        <p>Transforming brands through strategic digital experiences. Based in Skopje, working globally.</p>
                    </div>
                    
                    <div>
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Social Media</a></li>
                            <li><a href="#services">Video Production</a></li>
                            <li><a href="#services">Photography</a></li>
                            <li><a href="#services">Branding</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#portfolio">Results</a></li>
                            <li><a href="#contact">Start a Project</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
<div>
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="mailto:hello@kallkanmedia.com">hello@kallkanmedia.com</a></li>
                            <li><a href="tel:+38921234567">+389 2 123 4567</a></li>
                            <li><a href="#">Skopje, Macedonia</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="bottom">
                    <p class="copyright">© 2024 Kallkan Media. All rights reserved.</p>
                    <div class="socials">
                        <a href="#" aria-label="Instagram">
                            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="#" aria-label="Facebook">
                            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);