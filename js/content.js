// 所有可替换内容配置
const siteContent = {
    // Logo配置
    logo: {
        mainLogo: "images/logo.png",
        footerLogo: "images/logo-footer.png",
        logoAltText: "MFG Tianxia Logo",
        logoText: "MFG Tianxia",
        showOnPages: {
            home: true,
            "cnc-machining": true,
            "stamping-molds": true,
            "injection-molding": true,
            "about": true,
            "process": true,
            "faq": true,
            "contact": true
        }
    },

    // SEO配置
    seo: {
        title: "MFG Tianxia - China Manufacturing Partner | CNC Machining & Injection Molding",
        description: "MFG Tianxia is a leading CNC machining manufacturer China, stamping mold factory Guangdong, and desktop injection molding machine supplier. Get precision hardware solutions with factory-direct pricing!",
        keywords: "china manufacturing partner, desktop injection molding machine manufacturer China, precision cnc machining supplier China, stamping mold factory China, small injection molder supplier Guangdong"
    },

    // 导航菜单
    nav: [
        { id: "home", text: "Home", active: true },
        { id: "cnc-machining", text: "CNC Machining" },
        { id: "stamping-molds", text: "Stamping Molds" },
        { id: "injection-molding", text: "Injection Molding" },
        { id: "about", text: "About Us" },
        { id: "process", text: "Service Process" },
        { id: "faq", text: "FAQ" },
        { id: "contact", text: "Contact Us" }
    ],

    // Hero区块内容
    hero: {
        bgImage: "images/hero-bg.jpg",
        logoText: "MFG Tianxia",
        subtitle: "Your Trusted CNC Machining Manufacturer China, Stamping Mold Factory China & Desktop Injection Molding Machine Supplier",
        tagline: "Direct Factory Access · No Middleman Markup · Precision Hardware Solutions from Prototype to Mass Production",
        text: "As a leading precision CNC machining supplier China since 2025, we connect you to vetted Guangdong factories specializing in high-accuracy metal parts, custom stamping molds, and compact desktop injection molding machines. Save 30-50% on costs with our one-stop sourcing.",
        ctaText: "Get Free Quote",
        ctaLink: "#contact"
    },

    // 服务卡片内容
    services: [
        {
            id: "cnc",
            image: "images/cnc-machining.jpg",
            title: "Precision CNC Machining Services",
            details: [
                "Custom CNC parts manufacturer for electronics/automotive/medical",
                "3-5 axis CNC machining with tolerances ±0.01mm",
                "Materials: Aluminum, stainless steel, brass",
                "MOQ 1 piece | 5-10 days sample delivery",
                "ISO 9001 certified factory China"
            ]
        },
        {
            id: "stamping",
            image: "images/stamping-mold.jpg",
            title: "Stamping Molds & Production",
            details: [
                "Custom metal stamping mold manufacturer China",
                "Progressive die stamping for high-volume production",
                "Perfect for enclosures, brackets, connectors",
                "MOQ 500-1000 | 20-35 days mold lead time",
                "RoHS compliant factory Guangdong"
            ]
        },
        {
            id: "injection",
            image: "images/injection-molding.jpg",
            title: "Desktop Injection Molding Machines",
            details: [
                "Desktop injection molder for prototypes/small batches",
                "50-100g shot weight | user-friendly controls",
                "Ideal for electronics/medical R&D",
                "MOQ 1 unit | 15-25 days delivery",
                "CE/UL certified | Guangdong supplier"
            ]
        }
    ],

    // 联系方式
    contact: {
        email: "info@mfgtianxia.com",
        whatsapp: "+86 134 3191 6523",
        address: "4th Floor, Building A, No. 3 Yongbin Road, Tanzhou Town, Zhongshan City, Guangdong Province, China"
    },

    // 页脚内容
    footer: {
        contactTitle: "Contact Us",
        navTitle: "Quick Links",
        copyright: "© 2025 MFG Tianxia - All Rights Reserved | Precision CNC Machining Manufacturer China | Desktop Injection Molding Machine Supplier Guangdong"
    },

    // 各页面内容
    pages: {
        "cnc-machining": {
            title: "Precision CNC Machining Services China",
            content: `
                <div class="page-content">
                    <div class="text-block">
                        <p>As a leading <strong>precision cnc machining supplier China</strong>, MFG Tianxia specializes in high-accuracy custom CNC parts manufacturing for electronics, automotive, and medical device industries. Our ISO 9001 certified factory in Guangdong offers 3-5 axis CNC machining with tolerances as tight as ±0.01mm, ensuring your parts meet the strictest quality standards.</p>
                    </div>
                    <h3 class="section-subtitle">Our CNC Machining Capabilities</h3>
                    <ul class="benefits-list">
                        <li>3-5 axis CNC milling and turning services</li>
                        <li>Materials: Aluminum, stainless steel, brass, copper, plastic</li>
                        <li>Tolerances: ±0.01mm for precision components</li>
                        <li>MOQ: As low as 1 piece for prototypes</li>
                        <li>Sample delivery: 5-10 days | Mass production: 15-30 days</li>
                        <li>Full inspection: CMM, hardness testing, dimensional verification</li>
                    </ul>
                    <div class="text-block">
                        <p>We offer factory-direct pricing for <strong>custom CNC machining services China</strong>, helping you save 25-40% compared to middlemen or Western suppliers. Our English-speaking engineering team provides free DFM (Design for Manufacturability) feedback to optimize your part designs for cost and quality.</p>
                    </div>
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="#contact" class="btn-primary">Get CNC Machining Quote</a>
                    </div>
                </div>
            `
        },
        "stamping-molds": {
            title: "Stamping Mold Factory China | Custom Metal Stamping Molds",
            content: `
                <div class="page-content">
                    <div class="text-block">
                        <p>MFG Tianxia is a trusted <strong>stamping mold factory China</strong> based in Guangdong, specializing in custom metal stamping molds and high-volume progressive die stamping production. Our RoHS compliant facilities produce precision stamping molds for electronic enclosures, brackets, connectors, and automotive components.</p>
                    </div>
                    <h3 class="section-subtitle">Stamping Mold & Production Features</h3>
                    <ul class="benefits-list">
                        <li>Custom progressive die, transfer die, and compound die stamping</li>
                        <li>Material compatibility: Steel, aluminum, copper, brass, stainless steel</li>
                        <li>Mold lead time: 20-35 days | Production lead time: 7-15 days</li>
                        <li>MOQ: 500-1000 pieces for production runs</li>
                        <li>Precision: ±0.02mm tolerance for stamping parts</li>
                        <li>Full mold testing and validation before delivery</li>
                    </ul>
                    <div class="text-block">
                        <p>Our <strong>stamping mold factory Guangdong</strong> works directly with international clients to eliminate middleman costs, while maintaining strict quality control through BSCI and ISO 9001 certifications. We provide full technical support from mold design to mass production, ensuring your stamping projects are delivered on time and within budget.</p>
                    </div>
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="#contact" class="btn-primary">Request Stamping Mold Catalog</a>
                    </div>
                </div>
            `
        },
        "injection-molding": {
            title: "Desktop Injection Molding Machine Manufacturer China",
            content: `
                <div class="page-content">
                    <div class="text-block">
                        <p>MFG Tianxia is a leading <strong>desktop injection molding machine manufacturer China</strong>, supplying compact small injection molders ideal for prototypes and small-batch production. Our CE/UL certified desktop injection molding machines (50-100g shot weight) are perfect for R&D teams in electronics, medical, and consumer goods industries.</p>
                    </div>
                    <h3 class="section-subtitle">Desktop Injection Molder Features (2025 Model)</h3>
                    <ul class="benefits-list">
                        <li>Compact design (desktop/small floor footprint) – easy to integrate into labs/R&D facilities</li>
                        <li>Shot weight: 50-100g | Clamping force: 5-20 tons</li>
                        <li>User-friendly touchscreen controls – no specialized training required</li>
                        <li>MOQ: 1 unit | Delivery time: 15-25 days</li>
                        <li>CE/UL certified | Energy-efficient operation</li>
                        <li>Ideal for ABS, PP, PC, PE, and medical-grade plastics</li>
                    </ul>
                    <div class="text-block">
                        <p>As a <strong>small injection molder supplier Guangdong</strong>, we offer the <strong>best desktop injection molding machine for prototypes 2025</strong> at affordable prices (save 30-50% vs. European/American suppliers). Our <strong>affordable desktop injection molder China</strong> models include full technical support, warranty, and spare parts availability.</p>
                    </div>
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="#contact" class="btn-primary">Get Injection Molder Specs</a>
                    </div>
                </div>
            `
        },
        "about": {
            title: "About MFG Tianxia – Your Trusted China Manufacturing Partner",
            content: `
                <div class="page-content">
                    <div class="text-block">
                        <p>Founded to simplify global sourcing from China's manufacturing heartland in Guangdong, MFG Tianxia is a one-stop partner for precision CNC machining, custom stamping molds, and desktop injection molding machines. We connect international clients directly to vetted, certified factories – eliminating middlemen and reducing costs by 25-50%.</p>
                    </div>
                    <h3 class="section-subtitle">Our Mission</h3>
                    <div class="text-block">
                        <p>To make global sourcing of precision hardware components easy, affordable, and reliable for small to medium businesses worldwide. We combine factory-direct pricing with Western-style customer service (24-hour English support) to bridge the gap between international buyers and Chinese manufacturing excellence.</p>
                    </div>
                    <h3 class="section-subtitle">Our Certifications & Quality Assurance</h3>
                    <ul class="benefits-list">
                        <li>All partner factories audited for BSCI, ISO 9001, and ISO 14001</li>
                        <li>RoHS, REACH, CE compliance for all products</li>
                        <li>Full pre-shipment inspection for all orders</li>
                        <li>24-hour response time for quotes and customer inquiries</li>
                        <li>50+ satisfied clients served in 2025 (and growing)</li>
                    </ul>
                    <div class="text-block">
                        <p>As your <strong>china manufacturing partner</strong>, we handle all aspects of sourcing – from initial quote and design feedback to production oversight and shipping coordination. Our local team in Guangdong ensures your orders meet quality standards and delivery timelines, while our English-speaking account managers keep you informed every step of the way.</p>
                    </div>
                </div>
            `
        },
        "process": {
            title: "Our Manufacturing Service Process",
            content: `
                <div class="page-content">
                    <div class="text-block">
                        <p>At MFG Tianxia, we've streamlined our sourcing and manufacturing process to ensure efficiency, transparency, and quality for every client. Our 6-step process is designed to minimize delays and maximize value for your CNC machining, stamping mold, or injection molding projects.</p>
                    </div>
                    <div class="process-steps">
                        <div class="process-step">
                            <div class="step-number">1</div>
                            <h3 class="section-subtitle" style="font-size: 1.2rem;">Quote Request</h3>
                            <p>Submit your drawings/specs – we provide a detailed quote within 24 hours (including DFM feedback).</p>
                        </div>
                        <div class="process-step">
                            <div class="step-number">2</div>
                            <h3 class="section-subtitle" style="font-size: 1.2rem;">Order Confirmation</h3>
                            <p>Finalize order details, payment terms, and delivery timeline – all in English.</p>
                        </div>
                        <div class="process-step">
                            <div class="step-number">3</div>
                            <h3 class="section-subtitle" style="font-size: 1.2rem;">Production Start</h3>
                            <p>Our factory partners begin production with strict quality control checkpoints.</p>
                        </div>
                        <div class="process-step">
                            <div class="step-number">4</div>
                            <h3 class="section-subtitle" style="font-size: 1.2rem;">In-Process Inspection</h3>
                            <p>We conduct mid-production inspections to ensure compliance with your specs.</p>
                        </div>
                        <div class="process-step">
                            <div class="step-number">5</div>
                            <h3 class="section-subtitle" style="font-size: 1.2rem;">Final QA & Testing</h3>
                            <p>Full inspection of finished parts/molds/machines before shipment.</p>
                        </div>
                        <div class="process-step">
                            <div class="step-number">6</div>
                            <h3 class="section-subtitle" style="font-size: 1.2rem;">Delivery & Support</h3>
                            <p>Secure shipping to your location + post-delivery technical support.</p>
                        </div>
                    </div>
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="#contact" class="btn-primary">Start Your Project Today</a>
                    </div>
                </div>
            `
        },
        "faq": {
            title: "Frequently Asked Questions",
            content: `
                <div class="page-content">
                    <div class="faq-item">
                        <div class="faq-question">
                            <span>What is your MOQ for CNC machining parts?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            <p>Our MOQ for CNC machining parts is as low as 1 piece – perfect for prototypes or small-batch production. For mass production runs, we offer volume discounts with no minimum order requirements beyond 1 piece.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-question">
                            <span>How long does it take to get a stamping mold made?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            <p>Typical lead time for custom stamping molds is 20-35 days from order confirmation to delivery. This includes mold design, machining, testing, and validation. Production stamping runs can start immediately after mold approval.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-question">
                            <span>Are your desktop injection molding machines CE/UL certified?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            <p>Yes – all our desktop injection molding machines are CE and UL certified, meeting international safety and quality standards. We also provide RoHS compliance documentation for all plastic components produced with our machines.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-question">
                            <span>How much can I save with factory-direct pricing?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            <p>Clients typically save 25-40% on CNC machining services and 30-50% on desktop injection molding machines compared to middlemen or Western suppliers. We pass 100% of factory-direct savings to our clients with no hidden fees.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-question">
                            <span>Do you provide design feedback (DFM) for custom parts?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            <p>Yes – our engineering team provides free DFM (Design for Manufacturability) feedback for all quote requests. We optimize your part designs to reduce production costs, improve quality, and shorten lead times – at no extra cost.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-question">
                            <span>What certifications do your factories hold?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            <p>All our partner factories are audited for BSCI, ISO 9001 (quality management), and ISO 14001 (environmental management). We also provide RoHS, REACH, and CE certification documentation for all products as required.</p>
                        </div>
                    </div>
                </div>
            `
        },
<!-- 如下内容更换成Netlify表单要求的样子 -->
        "contact": {
    title: "Contact Us – Get Your Free Quote Today",
    content: `
        <div class="page-content">
            <div class="text-block">
                <p>Ready to start your CNC machining, stamping mold, or desktop injection molding project? Contact our English-speaking team for a free quote within 24 hours. Share your drawings or specs, and we'll provide detailed pricing, lead times, and design feedback – no obligation.</p>
            </div>
            <div class="cta-contact" style="justify-content: flex-start; margin: 30px 0;">
                <div class="cta-contact-item" style="margin-bottom: 15px;">
                    <i class="fas fa-envelope"></i>
                    <span>Email: info@mfgtianxia.com</span>
                </div>
                <div class="cta-contact-item" style="margin-bottom: 15px;">
                    <i class="fab fa-whatsapp"></i>
                    <span>WhatsApp: +86 134 3191 6523</span>
                </div>
                <div class="cta-contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Location: 4th Floor, Building A, No. 3 Yongbin Road, Tanzhou Town, Zhongshan City, Guangdong Province, China</span>
                </div>
            </div>
            <!-- 修改后的表单：加netlify标识和name属性 添加了action和redirect参数 -->
            <form class="contact-form" name="contact-form" method="POST" netlify action="/success.html" redirect="/success.html">
            <!--原来的代码 <form class="contact-form" name="contact-form" method="POST" netlify> -->
                <input type="hidden" name="form-name" value="contact-form"> <!-- 必须：Netlify识别表单 -->
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" class="form-control" placeholder="John Smith" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" class="form-control" placeholder="john@company.com" required>
                </div>
                <div class="form-group">
                    <label for="service">Service Interested In</label>
                    <select id="service" name="service" class="form-control" required>
                        <option value="">Select a service</option>
                        <option value="cnc">Precision CNC Machining</option>
                        <option value="stamping">Stamping Molds & Production</option>
                        <option value="injection">Desktop Injection Molding Machines</option>
                        <option value="other">Other (please specify)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="message">Your Requirements (or attach drawings)</label>
                    <textarea id="message" name="message" class="form-control" placeholder="Please describe your project, quantity, timeline, and any specific requirements..." required></textarea>
                </div>
                <button type="submit" class="btn-primary">Send Free Quote Request</button>
            </form>
        </div>
    `
}
    }
};

// 渲染SEO标签
document.getElementById("page-title").textContent = siteContent.seo.title;
document.getElementById("meta-description").content = siteContent.seo.description;
document.getElementById("meta-keywords").content = siteContent.seo.keywords;

// 渲染头部Logo
const headerLogoImg = document.getElementById("header-logo-img");
headerLogoImg.src = siteContent.logo.mainLogo;
headerLogoImg.alt = siteContent.logo.logoAltText;
document.getElementById("brand-logo").textContent = siteContent.logo.logoText;

// 渲染Hero区域Logo
const heroLogoContainer = document.getElementById("hero-logo-container");
if (siteContent.logo.showOnPages.home) {
    heroLogoContainer.innerHTML = `
        <img src="${siteContent.logo.mainLogo}" alt="${siteContent.logo.logoAltText}" class="hero-logo-img">
    `;
}

// 渲染各页面顶部Logo
const pageIds = ["cnc-machining", "stamping-molds", "injection-molding", "about", "process", "faq", "contact"];
pageIds.forEach(pageId => {
    const pageLogoEl = document.getElementById(`${pageId.split("-").join("")}-page-logo`);
    if (siteContent.logo.showOnPages[pageId] && pageLogoEl) {
        pageLogoEl.innerHTML = `
            <img src="${siteContent.logo.mainLogo}" alt="${siteContent.logo.logoAltText}" class="page-logo-img">
        `;
    }
});

// 渲染页脚Logo
const footerLogoContainer = document.getElementById("footer-logo-container");
footerLogoContainer.innerHTML = `
    <img src="${siteContent.logo.footerLogo || siteContent.logo.mainLogo}" alt="${siteContent.logo.logoAltText}" class="footer-logo-img">
`;

// 渲染导航菜单
const navMenu = document.getElementById("nav-menu");
siteContent.nav.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${item.id}" class="${item.active ? 'active' : ''}">${item.text}</a>`;
    navMenu.appendChild(li);
});

// 渲染Hero区块
const heroSection = document.getElementById("hero-section");
heroSection.style.backgroundImage = `url(${siteContent.hero.bgImage})`;
heroSection.innerHTML += `
    <div class="hero-overlay"></div>
    <div class="container hero-content">
        <h1 class="hero-logo">${siteContent.hero.logoText}</h1>
        <p class="hero-subtitle">${siteContent.hero.subtitle}</p>
        <p class="hero-tagline">${siteContent.hero.tagline}</p>
        <p class="hero-text">${siteContent.hero.text}</p>
        <a href="${siteContent.hero.ctaLink}" class="btn-primary">${siteContent.hero.ctaText}</a>
    </div>
`;

// 渲染服务卡片
const cardsGrid = document.getElementById("services-cards");
siteContent.services.forEach(card => {
    const cardEl = document.createElement("div");
    cardEl.className = "service-card";
    cardEl.innerHTML = `
        <img src="${card.image}" alt="${card.title}" class="card-img">
        <div class="card-content">
            <h3 class="card-title">${card.title}</h3>
            <ul class="card-details">
                ${card.details.map(detail => `<li>${detail}</li>`).join("")}
            </ul>
        </div>
    `;
    cardsGrid.appendChild(cardEl);
});

// 渲染优势列表
const benefitsSection = document.getElementById("benefits-section");
benefitsSection.innerHTML = `
    <h2 class="section-subtitle">Why Choose MFG Tianxia as Your China Manufacturing Partner in 2025</h2>
    <ul class="benefits-list">
        <li>Factory-direct pricing – save 25-40% vs. competitors (best CNC machining services China)</li>
        <li>All factories audited for BSCI / ISO 9001 / ISO 14001</li>
        <li>Full certification support: RoHS, REACH, CE for desktop injection molding machines</li>
        <li>One English-fluent contact – 24-hour response for custom CNC machining quotes</li>
        <li>Helped 50+ clients with precision metal stamping and small injection molder projects (2025)</li>
        <li>Affordable desktop injection molder China – best for prototypes 2025</li>
    </ul>
`;

// 渲染主CTA
const mainCta = document.getElementById("main-cta");
mainCta.innerHTML = `
    <h2 class="cta-title">Get Free CNC Machining Quote, Stamping Mold Catalog, or Injection Molding Specs in 24 Hours</h2>
    <div class="cta-contact">
        <div class="cta-contact-item">
            <i class="fas fa-envelope"></i>
            <span>Email: ${siteContent.contact.email}</span>
        </div>
        <div class="cta-contact-item">
            <i class="fab fa-whatsapp"></i>
            <span>WhatsApp: ${siteContent.contact.whatsapp}</span>
        </div>
    </div>
    <a href="#contact" class="btn-primary">Request Free Quote Now</a>
    <p style="margin-top: 20px; opacity: 0.9;">Share your drawings – we provide DFM feedback free! Custom small injection molding services China available.</p>
`;

// 渲染各页面内容
document.querySelectorAll(".page-template").forEach(el => {
    const pageId = el.id;
    if (siteContent.pages[pageId]) {
        el.innerHTML += `
            <h2 class="page-title">${siteContent.pages[pageId].title}</h2>
            ${siteContent.pages[pageId].content}
        `;
    }
});

// 渲染页脚
document.getElementById("footer-content").innerHTML = `
    <div class="footer-contact">
        <h3>${siteContent.footer.contactTitle}</h3>
        <p><i class="fas fa-envelope"></i> ${siteContent.contact.email}</p>
        <p><i class="fab fa-whatsapp"></i> ${siteContent.contact.whatsapp}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${siteContent.contact.address}</p>
    </div>
    <div class="footer-nav">
        <h3>${siteContent.footer.navTitle}</h3>
        <ul>
            ${siteContent.nav.map(item => `<li><a href="#${item.id}">${item.text}</a></li>`).join("")}
        </ul>
    </div>
`;
document.getElementById("copyright-text").textContent = siteContent.footer.copyright;
