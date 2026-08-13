import os
import subprocess

directories = [
    "images/hero",
    "images/services",
    "images/blog",
    "images/blog/categories",
    "images/case-studies",
    "images/resources",
    "images/legal",
    "images/clients",
    "assets/images/client-images/30x30"
]

for d in directories:
    os.makedirs(d, exist_ok=True)

hero_images = [
    "images/hero/yr-tech-growth-contact-digital-marketing-agency-pakistan.webp",
    "images/hero/yr-tech-growth-digital-marketing-insights-pakistan.webp",
    "images/hero/yr-tech-growth-client-reviews-digital-marketing-pakistan.webp",
    "images/hero/yr-tech-growth-website-sitemap-pakistan.webp",
    "images/hero/about-yr-tech-growth-digital-marketing-agency-pakistan.webp",
    "images/hero/yr-tech-growth-ceo-digital-marketing-agency-pakistan.webp",
    "images/hero/yr-tech-growth-digital-marketing-team-pakistan.webp",
    "images/services/yr-tech-growth-digital-marketing-services-pakistan.webp",
    "images/services/analytics-tracking-digital-marketing-pakistan.webp",
    "images/services/branding-identity-agency-pakistan.webp",
    "images/services/content-marketing-agency-pakistan.webp",
    "images/services/digital-marketing-agency-pakistan.webp",
    "images/services/ecommerce-marketing-agency-pakistan.webp",
    "images/services/email-marketing-agency-pakistan.webp",
    "images/services/google-ads-management-agency-pakistan.webp",
    "images/services/marketing-automation-agency-pakistan.webp",
    "images/services/meta-ads-management-agency-pakistan.webp",
    "images/services/meta-pixel-conversions-api-capi-setup-pakistan.webp",
    "images/services/sales-funnel-development-agency-pakistan.webp",
    "images/services/seo-services-agency-pakistan.webp",
    "images/services/shopify-marketing-agency-pakistan.webp",
    "images/services/social-media-management-agency-pakistan.webp",
    "images/services/tiktok-ads-management-agency-pakistan.webp",
    "images/services/website-development-agency-pakistan.webp",
    "images/services/whatsapp-marketing-agency-pakistan.webp",
    "images/blog/yr-tech-growth-digital-marketing-blog-pakistan.webp",
    "images/blog/5x-roas-faisalabad-restaurant-meta-ads-case-study.webp",
    "images/blog/ai-vs-human-content-marketing-2026.webp",
    "images/blog/eid-2026-digital-advertising-strategy-pakistan.webp",
    "images/blog/faisalabad-ecommerce-store-4x-roas-case-study.webp",
    "images/blog/future-ecommerce-payments-pakistan.webp",
    "images/blog/google-performance-max-320-roi-case-study.webp",
    "images/blog/lahore-medical-center-digital-marketing-case-study.webp",
    "images/blog/scale-meta-ads-pkr-1-million-case-study.webp",
    "images/blog/whatsapp-marketing-automation-flows-pakistan.webp",
    "images/blog/categories/digital-marketing-case-studies-pakistan.webp",
    "images/blog/categories/digital-marketing-tips-pakistan.webp",
    "images/blog/categories/digital-marketing-industry-insights-pakistan.webp",
    "images/case-studies/yr-tech-growth-digital-marketing-case-studies-pakistan.webp",
    "images/resources/yr-tech-growth-affiliate-program-pakistan.webp",
    "images/resources/yr-tech-growth-digital-marketing-careers-pakistan.webp",
    "images/resources/yr-tech-growth-partner-with-us-pakistan.webp",
    "images/resources/yr-tech-growth-digital-marketing-faqs-pakistan.webp",
    "images/resources/digital-marketing-guides-pakistan.webp",
    "images/resources/digital-marketing-roi-calculator-pakistan.webp",
    "images/resources/yr-tech-growth-free-digital-marketing-tools-pakistan.webp",
    "images/legal/yr-tech-growth-acceptable-use-policy.webp",
    "images/legal/yr-tech-growth-cancellation-policy.webp",
    "images/legal/yr-tech-growth-cookie-policy.webp",
    "images/legal/yr-tech-growth-data-processing-agreement.webp",
    "images/legal/yr-tech-growth-disclaimer.webp",
    "images/legal/yr-tech-growth-gdpr-compliance.webp",
    "images/legal/yr-tech-growth-privacy-policy.webp",
    "images/legal/yr-tech-growth-refund-policy.webp",
    "images/legal/yr-tech-growth-service-level-agreement.webp",
    "images/legal/yr-tech-growth-terms-and-conditions.webp"
]

print("Generating Hero WebP background images with ffmpeg...")
for hero in hero_images:
    if not os.path.exists(hero):
        cmd = [
            'ffmpeg', '-y', '-f', 'lavfi',
            '-i', 'color=c=0x0b0f19:s=1200x630',
            '-vframes', '1', hero
        ]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

print("Generating Client Logos and 30x30 Thumbnails...")
client_logos = [
    "fatima-jewelry-jaranwala-client-yr-tech-growth.webp",
    "hassan-medical-center-jaranwala-client-yr-tech-growth.webp",
    "informatics-group-colleges-jaranwala-client-yr-tech-growth.webp",
    "mansoob-aziz-faisalabad-client-yr-tech-growth.webp",
    "mughal-tuff-tile-factory-jaranwala-client-yr-tech-growth.webp",
    "salar-online-quran-academy-client-yr-tech-growth.webp",
    "star-chinese-language-center-jaranwala-client-yr-tech-growth.webp",
    "star-medical-college-jaranwala-client-yr-tech-growth.webp",
    "the-wears-house-faisalabad-client-yr-tech-growth.webp",
    "yaseen-traders-collections-client-yr-tech-growth.webp",
    "ar-pin-master-dubai-client-yr-tech-growth.webp"
]

for filename in client_logos:
    main_path = os.path.join("images/clients", filename)
    thumb_path = os.path.join("assets/images/client-images/30x30", filename)

    if not os.path.exists(main_path):
        cmd = ['ffmpeg', '-y', '-f', 'lavfi', '-i', 'color=c=0x111827:s=300x300', '-vframes', '1', main_path]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

    if not os.path.exists(thumb_path):
        cmd = ['ffmpeg', '-y', '-f', 'lavfi', '-i', 'color=c=0x1f2937:s=30x30', '-vframes', '1', thumb_path]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

existing_map = {
    "logo-hassan-medical-center-jaranwala.webp": "hassan-medical-center-jaranwala-client-yr-tech-growth.webp",
    "logo-informatics-group-of-college-jaranwala.webp": "informatics-group-colleges-jaranwala-client-yr-tech-growth.webp",
    "logo-star-medical-college-jaranwala.webp": "star-medical-college-jaranwala-client-yr-tech-growth.webp",
    "logo-yaseen-traders-and-collections.webp": "yaseen-traders-collections-client-yr-tech-growth.webp",
    "logo-star-chinese-language-center-jaranwala.webp": "star-chinese-language-center-jaranwala-client-yr-tech-growth.webp",
    "logo-mansoob-aziz-client-fsd.webp": "mansoob-aziz-faisalabad-client-yr-tech-growth.webp"
}

for old_name, new_name in existing_map.items():
    old_path = os.path.join("assets/images/client-images/30x30", old_name)
    new_path = os.path.join("assets/images/client-images/30x30", new_name)
    if os.path.exists(old_path):
        subprocess.run(["cp", old_path, new_path], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

print("All WebP assets generated successfully!")
