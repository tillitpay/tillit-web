import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-36 md:pt-40 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-xl mb-2">Tillit (tillitpay.com)</p>
          <p className="text-muted-foreground mb-8 italic">Effective Date: December 2025</p>
          
          <div className="space-y-8 text-foreground/90">
            {/* 1. Introduction */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Tillit ("we," "us," "our," or the "Company"). Tillit operates tillitpay.com and provides a mobile point-of-sale ("Mobile POS") solution that enables shoppers to scan items and pay instantly using their smartphones, offering retailers faster checkout processes, reduced operational costs, and seamless in-store experiences.
              </p>
              <p className="leading-relaxed mt-4">
                This Privacy Policy describes how we collect, use, disclose, and safeguard your personal information when you visit our website at tillitpay.com, use our Contact Us form, access our mobile applications, or utilize our Mobile POS services. By accessing or using our website and services, you consent to the practices described in this Privacy Policy.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">2. Information We Collect</h2>
              
              <h3 className="font-semibold text-xl mb-3 mt-6">2.1 Information Collected Through the Contact Us Form</h3>
              <p className="leading-relaxed mb-3">
                When you submit an inquiry through our Contact Us form on tillitpay.com, we may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number (if provided)</li>
                <li>Company or business name (if applicable)</li>
                <li>Nature of your inquiry or message content</li>
                <li>Any additional information you voluntarily provide</li>
              </ul>

              <h3 className="font-semibold text-xl mb-3 mt-6">2.2 Information Collected from Retailers</h3>
              <p className="leading-relaxed mb-3">
                If you are a retailer using our Mobile POS services, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Business name and registration details</li>
                <li>Business address and location information</li>
                <li>Contact information for business representatives</li>
                <li>Banking and financial information for payment processing</li>
                <li>Transaction data and sales information</li>
                <li>Inventory and product catalog data</li>
              </ul>

              <h3 className="font-semibold text-xl mb-3 mt-6">2.3 Information Collected from Shoppers</h3>
              <p className="leading-relaxed mb-3">
                When shoppers use our Mobile POS system to scan items and make payments, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment card information (processed through secure payment gateways)</li>
                <li>Transaction details including items purchased, amounts, and timestamps</li>
                <li>Mobile device information and identifiers</li>
                <li>Digital receipts and transaction history</li>
              </ul>

              <h3 className="font-semibold text-xl mb-3 mt-6">2.4 Automatically Collected Information</h3>
              <p className="leading-relaxed mb-3">
                When you visit tillitpay.com, we automatically collect certain information through cookies, tracking technologies, and third-party analytics services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and approximate geographic location</li>
                <li>Browser type, version, and operating system</li>
                <li>Device type and screen resolution</li>
                <li>Pages visited, time spent on pages, and navigation paths</li>
                <li>Referring website or source</li>
                <li>Date and time of visits</li>
              </ul>
            </section>

            {/* 3. Third-Party Tracking and Analytics */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">3. Third-Party Tracking and Analytics</h2>
              <p className="leading-relaxed mb-4">
                Our website uses Facebook Pixel and similar tracking technologies to measure the effectiveness of our advertising, understand user behavior, and deliver targeted advertisements. These technologies may collect information about your online activities over time and across different websites.
              </p>
              <p className="leading-relaxed">
                Facebook Pixel collects data including pages you visit, actions you take on our website, and your device information. This data is shared with Meta Platforms, Inc. (Facebook) and is subject to their privacy practices. You can learn more about Facebook's data practices and opt-out options at:{" "}
                <a href="https://www.facebook.com/privacy/explanation" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  https://www.facebook.com/privacy/explanation
                </a>
              </p>
            </section>

            {/* 4. How We Use Your Information */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">4. How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">
                We use the personal information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to inquiries submitted through our Contact Us form</li>
                <li>To provide, maintain, and improve our Mobile POS services</li>
                <li>To process payments and transactions securely</li>
                <li>To enable faster checkout experiences for retailers and shoppers</li>
                <li>To send transactional communications such as receipts and confirmations</li>
                <li>To send marketing communications (with your consent where required)</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To detect, prevent, and address fraud and security issues</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>To measure and optimize advertising effectiveness</li>
              </ul>
            </section>

            {/* 5. Disclosure of Your Information */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">5. Disclosure of Your Information</h2>
              <p className="leading-relaxed mb-3">
                We may share your personal information with the following categories of third parties:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment processors and financial institutions to process transactions securely</li>
                <li>Cloud hosting and infrastructure providers that support our services</li>
                <li>Analytics providers (including Meta/Facebook) for website analytics and advertising</li>
                <li>Professional advisors including lawyers, accountants, and auditors</li>
                <li>Law enforcement or government authorities when required by law</li>
                <li>Business partners and affiliates for joint service offerings</li>
                <li>Potential acquirers in the event of a merger, acquisition, or sale of assets</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We require all third parties to respect the security of your personal information and to treat it in accordance with applicable laws. We do not sell your personal information to third parties for their own marketing purposes.
              </p>
            </section>

            {/* 6. Payment Processing and Security */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">6. Payment Processing and Security</h2>
              <p className="leading-relaxed mb-3">
                As a Mobile POS provider, payment security is paramount to our operations. We implement industry-standard security measures to protect payment information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment Card Industry Data Security Standard (PCI-DSS) compliance</li>
                <li>End-to-end encryption for all payment data transmission</li>
                <li>Tokenization of sensitive payment card information</li>
                <li>Secure Socket Layer (SSL/TLS) encryption for all data transfers</li>
                <li>Fraud detection and prevention systems</li>
                <li>Regular security audits and vulnerability assessments</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We do not store complete payment card numbers on our servers. Payment card data is processed through secure, PCI-DSS compliant payment gateways.
              </p>
            </section>

            {/* 7. Data Retention */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">7. Data Retention</h2>
              <p className="leading-relaxed mb-3">
                We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. The retention period may vary depending on the type of information and the purpose of collection:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact form submissions: Up to 3 years from the date of submission</li>
                <li>Transaction records: As required by applicable tax and financial regulations (typically 7 years)</li>
                <li>Account information: Duration of active business relationship plus applicable retention period</li>
                <li>Marketing preferences: Until you withdraw consent or request deletion</li>
              </ul>
            </section>

            {/* 8. Your Privacy Rights */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">8. Your Privacy Rights</h2>
              <p className="leading-relaxed mb-3">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal information in certain circumstances</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of processing in certain circumstances</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the details provided in Section 13 below.
              </p>
            </section>

            {/* 9. Cookies and Tracking Technologies */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">9. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed mb-3">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and support our advertising efforts. We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly and cannot be disabled</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track advertising effectiveness (including Facebook Pixel)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect website functionality.
              </p>
            </section>

            {/* 10. Children's Privacy */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">10. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our website and services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information from our systems.
              </p>
            </section>

            {/* 11. International Data Transfers */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">11. International Data Transfers</h2>
              <p className="leading-relaxed">
                Your personal information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country. When we transfer your information internationally, we implement appropriate safeguards to protect your personal information in accordance with applicable law, including standard contractual clauses, data protection agreements, or other appropriate transfer mechanisms.
              </p>
            </section>

            {/* 12. Changes to This Privacy Policy */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">12. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a revised "Effective Date" at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>
            </section>

            {/* 13. Contact Us */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">13. Contact Us</h2>
              <p className="leading-relaxed mb-3">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-secondary/30 p-6 rounded-lg">
                <p className="font-semibold text-lg mb-2">Tillit</p>
                <p className="leading-relaxed">Website: <a href="https://tillitpay.com" className="text-primary hover:underline">tillitpay.com</a></p>
                <p className="leading-relaxed">Email: <a href="mailto:privacy@tillitpay.com" className="text-primary hover:underline">privacy@tillitpay.com</a></p>
              </div>
              <p className="leading-relaxed mt-4">
                For data protection inquiries or to exercise your privacy rights, please include "Privacy Request" in the subject line of your communication.
              </p>
            </section>

            {/* 14. Additional Disclosures for California Residents */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">14. Additional Disclosures for California Residents</h2>
              <p className="leading-relaxed mb-3">
                If you are a California resident, the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) provide you with additional rights regarding your personal information. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to know what personal information we have collected, used, disclosed, and sold</li>
                <li>The right to delete personal information we have collected from you</li>
                <li>The right to opt-out of the sale or sharing of personal information</li>
                <li>The right to non-discrimination for exercising your privacy rights</li>
                <li>The right to correct inaccurate personal information</li>
                <li>The right to limit use and disclosure of sensitive personal information</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided in Section 13. We do not sell personal information as defined under the CCPA/CPRA.
              </p>
            </section>

            {/* 15. Additional Disclosures for EU/UK Residents */}
            <section>
              <h2 className="font-semibold text-2xl mb-4">15. Additional Disclosures for EU/UK Residents</h2>
              <p className="leading-relaxed mb-3">
                If you are located in the European Economic Area (EEA) or the United Kingdom, the General Data Protection Regulation (GDPR) and UK GDPR provide you with enhanced data protection rights. The legal bases for processing your personal information include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contract:</strong> Processing necessary for the performance of a contract with you</li>
                <li><strong>Consent:</strong> Processing based on your explicit consent (e.g., marketing communications)</li>
                <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
                <li><strong>Legal Obligation:</strong> Processing necessary for compliance with legal requirements</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You have the right to lodge a complaint with your local data protection supervisory authority if you believe we have not complied with applicable data protection laws.
              </p>
            </section>

            {/* Footer Note */}
            <section className="border-t pt-8 mt-8">
              <p className="leading-relaxed text-center italic">
                By using tillitpay.com and our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

