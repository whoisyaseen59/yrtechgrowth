import os
import re

# Defined logos lookup: (filename, alt_text)
LOGOS = {
    "informatics": ("informatics-group-colleges-jaranwala-client-yr-tech-growth.webp", "Informatics Group of Colleges Jaranwala Logo - Jaranwala Client"),
    "star_med": ("star-medical-college-jaranwala-client-yr-tech-growth.webp", "Star Medical College Jaranwala Logo - Jaranwala Client"),
    "hassan_med": ("hassan-medical-center-jaranwala-client-yr-tech-growth.webp", "Hassan Medical Center Jaranwala Logo - Jaranwala Client"),
    "wears_house": ("the-wears-house-faisalabad-client-yr-tech-growth.webp", "The Wears House Faisalabad Logo - Faisalabad Client"),
    "fatima": ("fatima-jewelry-jaranwala-client-yr-tech-growth.webp", "Fatima Jewelry Jaranwala Logo - Jaranwala Client"),
    "mansoob": ("mansoob-aziz-faisalabad-client-yr-tech-growth.webp", "Mansoob Aziz Faisalabad Logo - Faisalabad Client"),
    "mughal": ("mughal-tuff-tile-factory-jaranwala-client-yr-tech-growth.webp", "Mughal Tuff Tile Factory Jaranwala Logo - Jaranwala Client"),
    "salar": ("salar-online-quran-academy-client-yr-tech-growth.webp", "Salar Online Quran Academy Logo - Client"),
    "star_chinese": ("star-chinese-language-center-jaranwala-client-yr-tech-growth.webp", "Star Chinese Language Center Jaranwala Logo - Jaranwala Client"),
    "yaseen_traders": ("yaseen-traders-collections-client-yr-tech-growth.webp", "Yaseen Traders and Collections Logo - Pakistani Client"),
    "ar_pin": ("ar-pin-master-dubai-client-yr-tech-growth.webp", "AR Pin Master Dubai Logo - UAE Client")
}

def generate_hero_clients_block(selected_logo_keys, trust_text):
    imgs_html = []
    for key in selected_logo_keys:
        filename, alt_text = LOGOS[key]
        imgs_html.append(f'    <img src="/assets/images/client-images/30x30/{filename}" alt="{alt_text}" width="30" height="30" loading="lazy" decoding="async">')
    
    imgs_str = "\n".join(imgs_html)
    return f'''<div class="hero-clients mb-4" data-aos="fade-up">
  <div class="client-logos">
{imgs_str}
    <div class="client-count-badge" aria-label="Trusted by 150 plus clients">
      <span>150+</span>
    </div>
  </div>
  <p class="client-trust-text">{trust_text}</p>
</div>'''

# Page Configurations:
# filepath: { bg_url, alt, add_clients (bool), logos (list of keys), trust_text }
CONFIGS = {
    "contact.html": {
        "bg_url": "/images/hero/yr-tech-growth-contact-digital-marketing-agency-pakistan.webp",
        "alt": "Contact YR Tech Growth digital marketing agency in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["informatics", "star_med", "hassan_med", "wears_house"],
        "trust_text": "Join 150+ Businesses Already Growing With Us"
    },
    "insights.html": {
        "bg_url": "/images/hero/yr-tech-growth-digital-marketing-insights-pakistan.webp",
        "alt": "Digital marketing insights by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["informatics", "star_med", "hassan_med", "wears_house"],
        "trust_text": "150+ Businesses Grown With YR Tech Growth"
    },
    "reviews.html": {
        "bg_url": "/images/hero/yr-tech-growth-client-reviews-digital-marketing-pakistan.webp",
        "alt": "Client reviews for YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["informatics", "star_med", "wears_house", "ar_pin"],
        "trust_text": "Trusted By 150+ Clients Across Faisalabad, Lahore & UAE"
    },
    "sitemap.html": {
        "bg_url": "/images/hero/yr-tech-growth-website-sitemap-pakistan.webp",
        "alt": "Website sitemap for YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "about/about-yr-tech-growth.html": {
        "bg_url": "/images/hero/about-yr-tech-growth-digital-marketing-agency-pakistan.webp",
        "alt": "About YR Tech Growth digital marketing agency in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["informatics", "star_med", "hassan_med", "wears_house"],
        "trust_text": "150+ Businesses Grown With YR Tech Growth"
    },
    "about/meet-our-ceo.html": {
        "bg_url": "/images/hero/yr-tech-growth-ceo-digital-marketing-agency-pakistan.webp",
        "alt": "Muhammad Yaseen Rashid CEO of YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["informatics", "star_med", "hassan_med", "wears_house"],
        "trust_text": "150+ Businesses Grown With YR Tech Growth"
    },
    "about/our-team.html": {
        "bg_url": "/images/hero/yr-tech-growth-digital-marketing-team-pakistan.webp",
        "alt": "Digital marketing team at YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["informatics", "star_med", "hassan_med", "wears_house"],
        "trust_text": "150+ Businesses Grown With YR Tech Growth"
    },
    "services/all-services.html": {
        "bg_url": "/images/services/yr-tech-growth-digital-marketing-services-pakistan.webp",
        "alt": "Digital marketing services by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["informatics", "star_med", "hassan_med", "wears_house"],
        "trust_text": "150+ Clients Trust Us With Their Digital Marketing"
    },
    "services/analytics-and-tracking.html": {
        "bg_url": "/images/services/analytics-tracking-digital-marketing-pakistan.webp",
        "alt": "Analytics and tracking services by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["wears_house", "ar_pin", "star_med", "informatics"],
        "trust_text": "150+ Clients Trust Us With Their Analytics & Tracking"
    },
    "services/branding-and-identity.html": {
        "bg_url": "/images/services/branding-identity-agency-pakistan.webp",
        "alt": "Branding and identity services by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["fatima", "wears_house", "yaseen_traders", "mansoob"],
        "trust_text": "150+ Clients Trust Us With Their Branding & Identity"
    },
    "services/content-marketing.html": {
        "bg_url": "/images/services/content-marketing-agency-pakistan.webp",
        "alt": "Content marketing services by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["star_chinese", "salar", "informatics", "wears_house"],
        "trust_text": "150+ Clients Trust Us With Their Content Marketing"
    },
    "services/digital-marketing.html": {
        "bg_url": "/images/services/digital-marketing-agency-pakistan.webp",
        "alt": "Digital marketing agency services by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["informatics", "star_med", "hassan_med", "wears_house"],
        "trust_text": "150+ Clients Trust Us With Their Digital Marketing"
    },
    "services/ecommerce-marketing.html": {
        "bg_url": "/images/services/ecommerce-marketing-agency-pakistan.webp",
        "alt": "Ecommerce marketing agency services by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["wears_house", "fatima", "yaseen_traders", "ar_pin"],
        "trust_text": "150+ Clients Trust Us With Their Ecommerce Marketing"
    },
    "services/email-marketing.html": {
        "bg_url": "/images/services/email-marketing-agency-pakistan.webp",
        "alt": "Email marketing agency services by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["wears_house", "fatima", "yaseen_traders", "ar_pin"],
        "trust_text": "150+ Clients Trust Us With Their Email Marketing"
    },
    "services/google-ads-management.html": {
        "bg_url": "/images/services/google-ads-management-agency-pakistan.webp",
        "alt": "Google Ads management agency by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["star_med", "hassan_med", "wears_house", "ar_pin"],
        "trust_text": "150+ Clients Trust Us With Their Google Ads"
    },
    "services/marketing-automation.html": {
        "bg_url": "/images/services/marketing-automation-agency-pakistan.webp",
        "alt": "Marketing automation agency services by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["wears_house", "star_med", "ar_pin", "yaseen_traders"],
        "trust_text": "150+ Clients Trust Us With Their Marketing Automation"
    },
    "services/meta-ads-management.html": {
        "bg_url": "/images/services/meta-ads-management-agency-pakistan.webp",
        "alt": "Meta Ads management agency by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["wears_house", "ar_pin", "fatima", "star_med"],
        "trust_text": "150+ Clients Trust Us With Their Meta Ads"
    },
    "services/pixel-conversion-api-setup.html": {
        "bg_url": "/images/services/meta-pixel-conversions-api-capi-setup-pakistan.webp",
        "alt": "Meta Pixel and Conversions API setup by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["wears_house", "ar_pin", "fatima", "yaseen_traders"],
        "trust_text": "150+ Clients Trust Us With Their Pixel & CAPI Setup"
    },
    "services/sales-funnel-development.html": {
        "bg_url": "/images/services/sales-funnel-development-agency-pakistan.webp",
        "alt": "Sales funnel development agency by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["star_med", "wears_house", "informatics", "ar_pin"],
        "trust_text": "150+ Clients Trust Us With Their Sales Funnels"
    },
    "services/seo-services.html": {
        "bg_url": "/images/services/seo-services-agency-pakistan.webp",
        "alt": "SEO services by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["hassan_med", "informatics", "star_chinese", "mughal"],
        "trust_text": "150+ Clients Trust Us With Their SEO"
    },
    "services/shopify-marketing.html": {
        "bg_url": "/images/services/shopify-marketing-agency-pakistan.webp",
        "alt": "Shopify marketing agency by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["wears_house", "fatima", "yaseen_traders", "ar_pin"],
        "trust_text": "150+ Clients Trust Us With Their Shopify Marketing"
    },
    "services/social-media-management.html": {
        "bg_url": "/images/services/social-media-management-agency-pakistan.webp",
        "alt": "Social media management agency by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["wears_house", "star_chinese", "hassan_med", "fatima"],
        "trust_text": "150+ Clients Trust Us With Their Social Media"
    },
    "services/tiktok-ads.html": {
        "bg_url": "/images/services/tiktok-ads-management-agency-pakistan.webp",
        "alt": "TikTok Ads management agency by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["wears_house", "fatima", "star_chinese", "yaseen_traders"],
        "trust_text": "150+ Clients Trust Us With Their TikTok Ads"
    },
    "services/website-development.html": {
        "bg_url": "/images/services/website-development-agency-pakistan.webp",
        "alt": "Website development agency by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["informatics", "star_med", "wears_house", "mughal"],
        "trust_text": "150+ Clients Trust Us With Their Web Development"
    },
    "services/whatsapp-marketing.html": {
        "bg_url": "/images/services/whatsapp-marketing-agency-pakistan.webp",
        "alt": "WhatsApp marketing agency by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["hassan_med", "star_med", "wears_house", "yaseen_traders"],
        "trust_text": "150+ Clients Trust Us With Their WhatsApp Marketing"
    },
    "blog/all-posts.html": {
        "bg_url": "/images/blog/yr-tech-growth-digital-marketing-blog-pakistan.webp",
        "alt": "Digital marketing blog by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["informatics", "star_med", "hassan_med", "wears_house"],
        "trust_text": "150+ Businesses Grown With YR Tech Growth"
    },
    "blog/5x-roas-faisalabad-restaurant.html": {
        "bg_url": "/images/blog/5x-roas-faisalabad-restaurant-meta-ads-case-study.webp",
        "alt": "5x ROAS Faisalabad restaurant case study by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "blog/ai-vs-human-content-2026.html": {
        "bg_url": "/images/blog/ai-vs-human-content-marketing-2026.webp",
        "alt": "AI vs human content marketing by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "blog/eid-2026-ad-strategy.html": {
        "bg_url": "/images/blog/eid-2026-digital-advertising-strategy-pakistan.webp",
        "alt": "Eid 2026 ad strategy by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "blog/faisalabad-ecom-store-4x-case-study.html": {
        "bg_url": "/images/blog/faisalabad-ecommerce-store-4x-roas-case-study.webp",
        "alt": "Faisalabad ecommerce store case study by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "blog/future-of-ecommerce-payments-pakistan.html": {
        "bg_url": "/images/blog/future-ecommerce-payments-pakistan.webp",
        "alt": "Future of ecommerce payments by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "blog/google-pmax-320-roi.html": {
        "bg_url": "/images/blog/google-performance-max-320-roi-case-study.webp",
        "alt": "Google Performance Max case study by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "blog/lahore-medical-center-case-study.html": {
        "bg_url": "/images/blog/lahore-medical-center-digital-marketing-case-study.webp",
        "alt": "Lahore medical center case study by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "blog/scale-meta-ads-pkr-1m.html": {
        "bg_url": "/images/blog/scale-meta-ads-pkr-1-million-case-study.webp",
        "alt": "Scale Meta Ads case study by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "blog/whatsapp-automation-flows.html": {
        "bg_url": "/images/blog/whatsapp-marketing-automation-flows-pakistan.webp",
        "alt": "WhatsApp marketing automation flows by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "blog/category/case-studies.html": {
        "bg_url": "/images/blog/categories/digital-marketing-case-studies-pakistan.webp",
        "alt": "Digital marketing case studies category by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "blog/category/digital-marketing-tips.html": {
        "bg_url": "/images/blog/categories/digital-marketing-tips-pakistan.webp",
        "alt": "Digital marketing tips category by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "blog/category/industry-insights.html": {
        "bg_url": "/images/blog/categories/digital-marketing-industry-insights-pakistan.webp",
        "alt": "Digital marketing industry insights category by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "case-study/all-case-studies.html": {
        "bg_url": "/images/case-studies/yr-tech-growth-digital-marketing-case-studies-pakistan.webp",
        "alt": "Digital marketing case studies by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["informatics", "star_med", "wears_house", "ar_pin"],
        "trust_text": "150+ Success Stories Across Pakistan & UAE"
    },
    "resources/company/affiliate-program.html": {
        "bg_url": "/images/resources/yr-tech-growth-affiliate-program-pakistan.webp",
        "alt": "Affiliate program by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "resources/company/careers.html": {
        "bg_url": "/images/resources/yr-tech-growth-digital-marketing-careers-pakistan.webp",
        "alt": "Careers at YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "resources/company/partner-with-us.html": {
        "bg_url": "/images/resources/yr-tech-growth-partner-with-us-pakistan.webp",
        "alt": "Partner with YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": True,
        "logos": ["informatics", "star_med", "hassan_med", "wears_house"],
        "trust_text": "150+ Businesses Grown With YR Tech Growth"
    },
    "resources/faqs.html": {
        "bg_url": "/images/resources/yr-tech-growth-digital-marketing-faqs-pakistan.webp",
        "alt": "Digital marketing FAQs by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "resources/marketing-guides.html": {
        "bg_url": "/images/resources/digital-marketing-guides-pakistan.webp",
        "alt": "Digital marketing guides by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "resources/roi-calculator.html": {
        "bg_url": "/images/resources/digital-marketing-roi-calculator-pakistan.webp",
        "alt": "Digital marketing ROI calculator by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    "resources/tools/all-free-tools.html": {
        "bg_url": "/images/resources/yr-tech-growth-free-digital-marketing-tools-pakistan.webp",
        "alt": "Free digital marketing tools by YR Tech Growth in Jaranwala Faisalabad Punjab Pakistan",
        "add_clients": False
    },
    # Legal Policies (Branded Alt, No location, No trust badge)
    "resources/legal/acceptable-use-policy.html": {
        "bg_url": "/images/legal/yr-tech-growth-acceptable-use-policy.webp",
        "alt": "YR Tech Growth Acceptable Use Policy",
        "add_clients": False
    },
    "resources/legal/cancellation-policy.html": {
        "bg_url": "/images/legal/yr-tech-growth-cancellation-policy.webp",
        "alt": "YR Tech Growth Cancellation Policy",
        "add_clients": False
    },
    "resources/legal/cookie-policy.html": {
        "bg_url": "/images/legal/yr-tech-growth-cookie-policy.webp",
        "alt": "YR Tech Growth Cookie Policy",
        "add_clients": False
    },
    "resources/legal/data-processing-agreement.html": {
        "bg_url": "/images/legal/yr-tech-growth-data-processing-agreement.webp",
        "alt": "YR Tech Growth Data Processing Agreement",
        "add_clients": False
    },
    "resources/legal/disclaimer.html": {
        "bg_url": "/images/legal/yr-tech-growth-disclaimer.webp",
        "alt": "YR Tech Growth Disclaimer",
        "add_clients": False
    },
    "resources/legal/gdpr-compliance.html": {
        "bg_url": "/images/legal/yr-tech-growth-gdpr-compliance.webp",
        "alt": "YR Tech Growth GDPR Compliance",
        "add_clients": False
    },
    "resources/legal/privacy-policy.html": {
        "bg_url": "/images/legal/yr-tech-growth-privacy-policy.webp",
        "alt": "YR Tech Growth Privacy Policy",
        "add_clients": False
    },
    "resources/legal/refund-policy.html": {
        "bg_url": "/images/legal/yr-tech-growth-refund-policy.webp",
        "alt": "YR Tech Growth Refund Policy",
        "add_clients": False
    },
    "resources/legal/service-level-agreement.html": {
        "bg_url": "/images/legal/yr-tech-growth-service-level-agreement.webp",
        "alt": "YR Tech Growth Service Level Agreement",
        "add_clients": False
    },
    "resources/legal/terms-and-conditions.html": {
        "bg_url": "/images/legal/yr-tech-growth-terms-and-conditions.webp",
        "alt": "YR Tech Growth Terms and Conditions",
        "add_clients": False
    }
}

updated_count = 0

for file_path, cfg in CONFIGS.items():
    if not os.path.exists(file_path):
        print(f"Skipping non-existent file: {file_path}")
        continue
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Hero background style update on <section class="page-hero ..."> or <section class="hero-section ..."> or <section class="inner-hero ...">
    bg_style = f"background: linear-gradient(135deg, rgba(11, 15, 25, 0.9) 0%, rgba(17, 24, 39, 0.95) 100%), url('{cfg['bg_url']}') center center / cover no-repeat;"
    
    # Check if hero section tag has a style attribute or not
    def repl_hero(match):
        attrs = match.group(1)
        if 'style="' in attrs:
            new_attrs = re.sub(r'style="[^"]*"', f'style="{bg_style}"', attrs)
        else:
            new_attrs = f'style="{bg_style}" {attrs}'
        return f'<section {new_attrs}>'

    content = re.sub(r'<section\s+([^>]*class="[^"]*(?:page-hero|hero-section|inner-hero)[^"]*"[^>]*)>', repl_hero, content, flags=re.IGNORECASE)

    # 2. Add hero-clients block if requested and not present
    if cfg.get("add_clients", False):
        if 'class="hero-clients' not in content:
            clients_html = generate_hero_clients_block(cfg["logos"], cfg["trust_text"])
            
            # Place right before <div class="page-hero-badge" or <h1 or <div class="badge
            if '<div class="page-hero-badge' in content:
                content = content.replace('<div class="page-hero-badge', f'{clients_html}\n          <div class="page-hero-badge', 1)
            elif '<h1' in content:
                # Find first <h1 inside hero
                content = re.sub(r'(<h1[^>]*>)', f'{clients_html}\n          \\1', content, count=1)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    
    updated_count += 1

print(f"Successfully updated {updated_count} HTML pages!")
