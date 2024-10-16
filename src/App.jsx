import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Kard from "./assets/kard/Kard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { message } from "antd";
import img2 from "./assets/Folder/20241004_153850.JPG";
import img5 from "./assets/Folder/20241004_153926.JPG";
import img6 from "./assets/Folder/20241004_153942.JPG";
import img7 from "./assets/Folder/20241004_153951.JPG";
import img8 from "./assets/Folder/20241004_154002.JPG";
import img9 from "./assets/Folder/20241004_154034.JPG";
import img11 from "./assets/Folder/20241004_154101.JPG";
import img13 from "./assets/Folder/1.jpeg";
import img14 from "./assets/Folder/2.jpeg";
import img15 from "./assets/Folder/3.jpeg";
import img16 from "./assets/Folder/4.jpeg";
import img17 from "./assets/Folder/5.jpeg";
import img18 from "./assets/Folder/6.jpeg";
import img19 from "./assets/Folder/7.jpeg";
import img20 from "./assets/Folder/8.jpeg";
import img22 from "./assets/Folder/10.jpeg";
import img23 from "./assets/Folder/pg1 (1).jpg";
import img24 from "./assets/Folder/pg2.jpg";
import img25 from "./assets/Folder/pg3.jpg";
import img26 from "./assets/Folder/pg4.jpg";

import { useRef } from "react";

const Home = ({ onSubmit, result }) => (
  <>
    {/* Hero Section */}
    <section className="bg-cover bg-center flex items-center justify-center bg-[url('https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg?auto=compress&cs=tinysrgb&w=800')]">
      <div className="h-full w-full py-20 bg-black/50">
        <div className="text-center text-white px-4 my-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find Your Dream Home in Gurugram
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Discover luxurious properties tailored to your lifestyle.
          </p>
          <a
            className="bg-red-600 border  hover:bg-white hover:text-red-600 hover:border-red-500 px-6 py-3 rounded-lg text-white text-lg transition duration-300"
            href="tel:7800677500"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>

    {/* Form Section */}
    <section
      className="py-16 bg-[url('https://images.pexels.com/photos/681368/pexels-photo-681368.jpeg?auto=compress&cs=tinysrgb&w=2000')] bg-no-repeat bg-cover"
      id="form"
    >
      <div>
        <h3 className="py-4 text-center font-bold text-3xl text-black">
          Struggling to find your perfect home?
        </h3>
        <div className="mb-12 w-1/4 h-1 bg-red-500 mx-auto"> </div>
        <div className="lg:w-[50%] w-[90%] mx-auto shadow-lg bg-stone-100 rounded-lg">
          <img
            src="https://images.pexels.com/photos/3646913/pexels-photo-3646913.jpeg?auto=compress&cs=tinysrgb&w=2000"
            className="h-[300px] w-full p-8 px-16"
            alt="Form Image"
          />
          <form
            onSubmit={onSubmit}
            className="flex flex-col w-[80%] mx-auto gap-3 my-2"
          >
            <div className="flex gap-2 justify-between">
              <select name="rent" id="rent" required className="px-4 py-2">
                <option value="">RENT</option>
                <option value="1-bhk">1-bhk</option>
                <option value="2-bhk">2-bhk</option>
                <option value="3-bhk">3-bhk</option>
                <option value="4-bhk">4-bhk</option>
                <option value="5-bhk">5-bhk</option>
              </select>
              <select name="rent" id="rent" required className="px-4 py-2">
                <option value="">Looking Space</option>
                <option value="1-bhk">1-bhk</option>
                <option value="2-bhk">2-bhk</option>
                <option value="3-bhk">3-bhk</option>
                <option value="4-bhk">4-bhk</option>
                <option value="5-bhk">5-bhk</option>
              </select>
              <select name="pg" id="pg" required className="px-4 py-2">
                <option value="">PG</option>
                <option value="Private-room">Private-room</option>
                <option value="Double-sharing">Double-sharing</option>
                <option value="Triple-sharing">Triple-sharing</option>
              </select>
            </div>

            <label htmlFor="name">Name</label>
            <input type="text" name="name" required className="p-2" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" required className="p-2" />

            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              required
              maxLength={10}
              className="p-2"
            />

            <label>Looking For/Location</label>
            <textarea
              name="message"
              required
              className="resize-none p-4"
            ></textarea>

            <button
              type="submit"
              className="px-4 py-2 border bg-red-500 hover:bg-white hover:text-black hover:border-red-500 mb-8 rounded text-white w-1/4 mx-auto text-center lg:text-lg text-[10px]"
            >
              Submit
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </section>
  </>
);

const Gallery = ({ images }) => (
  <section className="bg-stone-100 py-32" id="gallery">
    <h2 className="text-3xl font-bold mb-2 text-center">
      Our Property Gallery
    </h2>
    <div className="mb-12 w-1/12 h-1 bg-red-500 mx-auto"> </div>
    <div className="w-[80%] shadow-lg mx-auto">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full bg-stone-100"
      >
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card key={index}>
                  <CardContent className="flex aspect-square items-center justify-center p-6 h-full w-full">
                    <div className="h-80 w-80">
                      <img
                        src={img.img}
                        alt={`Slide ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                      <h3 className="mt-2 text-center font-semibold">
                        {img.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

const Testimonials = () => (
  <section className=" bg-gray-100" id="testimonials"></section>
);

const PrivacyPolicy = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
    <div className="p-6 lg:p-16">
      <div className="lg:p-10 border border-black p-4 space-y-6">
        <p className="text-sm text-[#555555] lg:text-base">
          At Propcodes.com, we respect your privacy and are committed to
          protecting the personal information of all our users, including
          brokers, builders, owners, and potential buyers or renters
          (collectively referred to as "Users"). This Privacy Policy outlines
          how we collect, use, disclose, and safeguard your personal information
          when you access and use our website, Propcodes.com, and related
          services (the "Platform").
        </p>
        <p className="text-sm text-[#555555] lg:text-base">
          By using our Platform, you agree to the practices described in this
          Privacy Policy. If you do not agree with the terms, please do not use
          the Platform or its services.
        </p>

        <h2 className="font-bold text-xl mt-6 text-black">
          1. Information We Collect
        </h2>
        <p className="text-sm text-[#555555] lg:text-base">
          We collect the following types of information when you use our
          Platform:
        </p>
        <h3 className="font-semibold mt-2 text-[#fb0103]">
          A. Information You Provide Directly:
        </h3>
        <ul className="list-disc list-inside ml-4">
          <li className="text-sm text-[#555555] lg:text-base">
            Personal Details: Name, email address, phone number, company name,
            and other contact details provided during account registration.
          </li>
          <li className="text-sm text-[#555555] lg:text-base">
            Property Details: Information about properties you list, including
            property type, location, size, amenities, pricing, and photos.
          </li>
          <li className="text-sm text-[#555555] lg:text-base">
            Payment Information: While we do not store financial data, we use
            third-party payment processors to handle payment transactions for
            premium services.
          </li>
          <li className="text-sm text-[#555555] lg:text-base">
            Communication Data: Records of your communications with us, such as
            inquiries, feedback, support requests, or other interactions via
            email, phone, or forms.
          </li>
        </ul>
        <h3 className="font-semibold mt-2 text-[#fb0103]">
          B. Information Collected Automatically:
        </h3>
        <ul className="list-disc list-inside ml-4">
          <li className="text-sm text-[#555555] lg:text-base">
            Usage Data: Information about how you interact with the Platform,
            including search preferences, pages visited, and time spent on the
            Platform.
          </li>
          <li className="text-sm text-[#555555] lg:text-base">
            Device Data: IP address, browser type, operating system, device
            identifiers, and other technical information.
          </li>
          <li className="text-sm text-[#555555] lg:text-base">
            Cookies: We use cookies and similar technologies to recognize you,
            enhance your user experience, and analyze Platform traffic. You may
            disable cookies in your browser settings, but certain features may
            not work as intended.
          </li>
        </ul>
        <h3 className="font-semibold mt-2 text-[#fb0103]">
          C. Third-Party Data:
        </h3>
        <p className="text-sm text-[#555555] lg:text-base">
          We may collect information about you from third-party services,
          marketing partners, or through leads generated by external advertising
          platforms.
        </p>

        <h2 className="font-bold text-xl text-black mt-6">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside ml-4">
          <li className="text-sm text-[#555555] lg:text-base">
            Service Provision: To enable you to post property listings, manage
            your account, and connect with leads.
          </li>
          <li className="text-sm text-[#555555] lg:text-base">
            Lead Generation: To provide relevant leads based on your property
            listings through marketing efforts or third-party applications.
          </li>
          <li className="text-sm text-[#555555] lg:text-base">
            Marketing and Promotions: To send you updates, promotions, and
            recommendations based on your preferences and activities.
          </li>
          <li className="text-sm text-[#555555] lg:text-base">
            Platform Improvement: To enhance our services, develop new features,
            and personalize your experience on the Platform.
          </li>
          <li className="text-sm text-[#555555] lg:text-base">
            Analytics and Research: To analyze user behavior, monitor trends,
            and improve the effectiveness of our marketing efforts.
          </li>
          <li className="text-sm text-[#555555] lg:text-base">
            Legal Compliance: To comply with applicable legal obligations,
            resolve disputes, and enforce our terms of service.
          </li>
        </ul>

        <h2 className="font-bold text-xl mt-6 text-black">
          3. How We Share Your Information
        </h2>
        <p className="text-sm text-[#555555] lg:text-base">
          We may share your personal data in the following circumstances:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="text-sm text-[#555555] lg:text-base">
            With Other Users: Your contact details and property listings will be
            visible to potential buyers, renters, or other brokers on the
            Platform to facilitate transactions.
          </li>
          <li className="text-sm text-[#555555] lg:text-base">
            Third-Party Service Providers: We may share your information with
            trusted third-party service providers, such as payment processors,
            marketing platforms, or lead-generation applications, to perform
            services on our behalf.
          </li>
          <li className="text-sm text-[#555555] lg:text-base">
            For Legal Purposes: If required by law, regulation, or legal
            process, we may disclose your information to government authorities
            or other entities.
          </li>
          <li className="text-sm text-[#555555] lg:text-base">
            Business Transfers: In the event of a merger, acquisition, or sale
            of assets, your information may be transferred to the new owners.
          </li>
        </ul>

        <h2 className="font-bold text-xl text-black mt-6">
          4. Data Security and Retention
        </h2>
        <p className="text-sm text-[#555555] lg:text-base">
          We implement commercially reasonable security measures to protect your
          personal data from unauthorized access, disclosure, or loss. However,
          no security method is 100% secure, and we cannot guarantee absolute
          security.
        </p>
        <p className="mt-2 text-sm text-[#555555] lg:text-base">
          We retain your personal information for as long as necessary to
          provide the services and comply with legal obligations. You may
          request the deletion of your data by contacting us at [Insert Contact
          Information], but certain information may be retained for legal or
          compliance purposes.
        </p>

        <h2 className="font-bold text-xl t[#fb0103] mt-6">5. Your Rights</h2>
        <p className="text-sm text-[#555555] lg:text-base">
          As a user of Propcodes.com, you have the following rights concerning
          your personal data:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="text-[#555555] lg:text-base text-sm">
            Access and Correction: You can access or update your personal
            information by logging into your account or contacting us.
          </li>
          <li className="text-[#555555] lg:text-base text-sm">
            Opt-Out of Marketing: You may opt out of receiving marketing
            communications from us at any time by following the unsubscribe
            instructions in the communication or by contacting us.
          </li>
          <li className="text-[#555555] lg:text-base text-sm">
            Deletion of Data: You may request the deletion of your account or
            any personal data we hold by contacting our support team.
          </li>
        </ul>

        <h2 className="font-bold text-xl t[#fb0103] mt-6">
          6. Cookies and Tracking Technologies
        </h2>
        <p className="text-sm text-[#555555] lg:text-base">
          We use cookies and similar technologies to track user activity on the
          Platform, improve your experience, and deliver personalized
          advertisements. You can manage cookie preferences through your browser
          settings, but please note that disabling cookies may affect the
          functionality of the Platform.
        </p>

        <h2 className="font-bold text-xl t[#fb0103] mt-6">
          7. Third-Party Links
        </h2>
        <p className="text-sm text-[#555555] lg:text-base">
          Our Platform may contain links to third-party websites or services. We
          are not responsible for the privacy practices of these external sites,
          and we encourage you to review their privacy policies before sharing
          your personal information.
        </p>

        <h2 className="font-bold text-xl t[#fb0103] mt-6">
          8. Children's Privacy
        </h2>
        <p className="text-sm text-[#555555] lg:text-base">
          Our Platform is not intended for users under the age of 18. We do not
          knowingly collect personal information from minors. If you are under
          18, please do not use the Platform or provide any personal
          information.
        </p>

        <h2 className="font-bold text-xl t[#fb0103] mt-6">
          9. Changes to This Privacy Policy
        </h2>
        <p className="text-sm text-[#555555] lg:text-base">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable laws. We will notify you of any
          significant updates by posting the revised policy on the Platform.
          Please review this page periodically for the latest information.
        </p>

        <h2 className="font-bold text-xl t[#fb0103] mt-6">10. Contact Us</h2>
        <p className="text-sm text-[#555555] lg:text-base">
          If you have any questions, concerns, or requests related to this
          Privacy Policy, please contact us at: info@propcodes.com
        </p>
      </div>
    </div>
  </div>
);

const TermsAndConditions = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
    <div className="p-6 lg:p-16">
      <div className="lg:p-10 border border-black p-4 space-y-6">
        <h1 className="text-4xl font-bold text-center text-black mb-6">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          Welcome to Rentduniya.com! These terms and conditions outline the
          rules and regulations for the use of Rentduniya's Website, located at
          www.Rentduniya.com.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          By accessing this website, we assume you accept these terms and
          conditions in full. Do not continue to use Rentduniya.com if you do
          not agree to all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-semibold text-[#black mb-4">
          1. Definitions
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>
            "Platform" refers to the Rentduniya.com website and any associated
            services provided by Rentduniya.com.
          </li>
          <li>
            "User" includes brokers, builders, and owners who use the Platform
            to post properties and access services.
          </li>
          <li>
            "Services" refers to all advertising, marketing, and lead generation
            services provided by Rentduniya.com through the Platform or
            third-party applications.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mb-4">
          2. Use of Platform
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>
            Users must register an account to access and utilize the Services
            provided by Rentduniya.com. Each User is responsible for maintaining
            the confidentiality of their account and password.
          </li>
          <li>
            The Platform allows Users to post property listings, access leads,
            and use the marketing tools provided. Users must ensure that all
            content uploaded to the Platform complies with applicable laws and
            is accurate and up-to-date.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mb-4">
          3. Provision of Services
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>
            Rentduniya.com provides lead generation services through direct
            marketing and third-party applications. The quantity and quality of
            leads are not guaranteed, and may vary based on market conditions
            and other external factors.
          </li>
          <li>
            Rentduniya.com reserves the right to modify, suspend, or discontinue
            any aspect of the Services at any time without notice.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mb-4">
          4. Refund Policy
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          We stand behind the quality of our services and strive for customer
          satisfaction. If, for any reason, you are not satisfied with your
          purchase, you may request a refund under the following conditions:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>
            Refund requests must be made within 3 days of the purchase date.
          </li>
          <li>
            To initiate a refund, please contact our support team with proof of
            purchase.
          </li>
          <li>
            After 3 days from the date of purchase, no refunds will be issued.
          </li>
          <li>
            All refunds will be processed within 7 business days of approval.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mb-4">
          5. User Responsibilities
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>
            Users are responsible for the content they post, including the
            accuracy of property details and compliance with real estate
            advertising laws.
          </li>
          <li>
            Users agree to use the Platform and Services ethically and legally,
            refraining from any form of deceptive practices.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mb-4">
          6. Intellectual Property
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>
            All content included on the Platform, such as text, graphics, logos,
            images, as well as the compilation thereof, and any software used on
            the Platform, is the property of Rentduniya.com or its suppliers and
            protected by copyright and other intellectual property laws.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mb-4">
          7. Disclaimer of Warranties
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>
            The Platform and its Services are provided "as is". Rentduniya.com
            makes no warranty that the Services will meet your requirements or
            be available on an uninterrupted, secure, or error-free basis.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mb-4">
          8. Limitation of Liability
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>
            Rentduniya.com will not be liable for any direct, indirect,
            incidental, special, consequential, or punitive damages resulting
            from the use of or inability to use the Platform or Services, even
            if Rentduniya.com has been advised of the possibility of such
            damages.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mb-4">
          9. Indemnification
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>
            You agree to defend, indemnify, and hold harmless Rentduniya.com,
            its officers, directors, employees, and agents, from and against any
            claims, liabilities, damages, losses, and expenses, including
            without limitation reasonable attorney’s fees and costs, arising out
            of or in any way connected with your access to or use of the
            Platform and Services.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mb-4">
          10. Amendments
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>
            Rentduniya.com reserves the right to amend these Terms and
            Conditions at any time. All amendments to these Terms will be posted
            on the Platform and effective immediately upon posting.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mb-4">
          11. Governing Law
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of the jurisdiction in which Rentduniya.com
            operates, without regard to its conflict of law provisions.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mb-4">
          12. Contact Us
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>
            If you have any questions about these Terms and Conditions, please
            contact us at support@Rentduniya.com.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const Disclaimer = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
    <div className="lg:p-10 p-4">
      <div className="lg:p-10 border border-black p-4">
        <p className=" mt-4 text-[#555555] lg:text-base">
          Rentduniya.com is a technological platform designed to facilitate
          connections between brokers, builders, owners, and potential buyers or
          renters. Rentduniya.com does not participate in any real estate
          transactions nor acts as a real estate agent. The platform serves
          solely as a medium to display property listings provided by users.
        </p>

        <p className="lg:mt-8 mt-4 text-[#555555] lg:text-base">
          {" "}
          All users are advised to verify any information provided on this
          website, including but not limited to property details, pricing, and
          compliance with applicable real estate regulations independently.
          Property information can be verified through the Real Estate
          Regulatory Authority (RERA) website of the respective state where the
          property is located. Rentduniya.com does not verify the RERA
          compliance of any projects listed on the platform and expressly
          disclaims any liability for non-compliance with RERA or any other
          regulations.
        </p>

        <p className="lg:mt-8 mt-4 text-[#555555] lg:text-base">
          Rentduniya.com is not involved in any transaction executed between
          users and does not have the means to ascertain the execution or
          legality of a transaction. As such, Rentduniya.com shall not be
          responsible or liable to resolve any disputes between parties involved
          in real estate transactions initiated through our platform.
        </p>

        <p className="lg:mt-8 mt-4 text-[#555555] lg:text-base">
          Use of Rentduniya.com signifies your agreement to this disclaimer and
          confirms that Rentduniya.com shall not be liable under RERA or any
          other laws applicable to real estate transactions. All users are
          encouraged to exercise due diligence and discretion in all
          transactions and interactions facilitated by our platform.
        </p>
      </div>
    </div>
  </div>
);

const App = () => {
  const images = [
    { img: img2, name: "Modern Living Room" },
    { img: img14, name: "Bed Room" },
    { img: img15, name: "Kitchen" },
    { img: img6, name: "Cozy Study" },
    { img: img7, name: "Bed Room" },
    { img: img20, name: "Living Room" },
    { img: img17, name: "Bed Room" },
    { img: img18, name: "Bath Room" },
    { img: img13, name: "Wash Room" },
    { img: img16, name: "Guest Room" },
    { img: img19, name: "kitchen" },
    { img: img9, name: "Washroom" },
    { img: img11, name: "Bed Room" },
    { img: img5, name: "Living Room" },
    { img: img22, name: "Bed Room" },
  ];

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "a0ba43f5-5d13-4635-a00e-617979dd1e8f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        message.success("Your form has been submitted successfully!");
        event.target.reset();
      } else {
        setResult(data.message);
        message.error("There was an error submitting the form.");
      }
    } catch (error) {
      setResult("Submission failed. Please try again.");
      message.error("There was an error submitting the form.");
    }
  };

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300, // Adjust based on card width
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300, // Adjust based on card width
      behavior: "smooth",
    });
  };

  const listings = [
    {
      image: img23, // Replace with actual image path
      title: "SR Homes (For Girls)",
      location: "Sector 27, Gurgaon",
      price: "₹ 12,500",
    },
    {
      image: img24,
      title: "Corporate Girls PG",
      location: "Sector 23 A, Gurgaon",
      price: "₹ 8,500",
    },
    {
      image: img25,
      title: "Corporate Girls pg",
      location: "Sector 39, Gurgaon",
      price: "₹ 12,500",
    },
    {
      image: img26,
      title: "Luxury PG for Women",
      location: "Sector 45, Gurgaon",
      price: "₹ 15,000",
    },
  ];

  return (
    <Router>
      <div>
        {/* Header */}
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
              <Link to="/">
                <img
                  src="https://www.rentduniya.com/assets/logo-z59io__-.png"
                  className="h-8 md:h-12" // Smaller logo on mobile (h-12)
                  alt="Rent Duniya Logo"
                />
              </Link>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="/"
                    className="text-blue-600 font-bold hover:text-blue-800"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-blue-600 font-bold hover:text-blue-800"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-blue-600 font-bold hover:text-blue-800"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div id="home">
                    <Home onSubmit={onSubmit} result={result} />
                  </div>
                  <div className="relative w-[80%] mx-auto  pt-16 ">
                    {/* Left Arrow */}
                    <button
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full z-10"
                      onClick={scrollLeft}
                    >
                      &#8249;
                    </button>

                    {/* Carousel Container */}
                    <h3 className="text-center text-3xl font-bold">
                      Gurgoan PG Rental With 24/7 Facilities - Perfect for you
                    </h3>
                    <div className="w-1/4 h-1 mt-4 mx-auto bg-red-500"></div>
                    <div
                      className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth my-16"
                      ref={carouselRef}
                    >
                      {listings.map((listing, index) => (
                        <div key={index} className="flex-shrink-0 w-80">
                          {" "}
                          {/* Adjust width as needed */}
                          <Kard
                            image={listing.image}
                            title={listing.title}
                            location={listing.location}
                            price={listing.price}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full z-10"
                      onClick={scrollRight}
                    >
                      &#8250;
                    </button>
                  </div>
                  <Gallery images={images} />

                  <Testimonials />
                </>
              }
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 pt-12 pb-6">
          <div className="container mx-auto text-center">
            <div className="mb-6">
              <Link to="/" className="text-white text-2xl font-bold">
                Rent Duniya
              </Link>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <Link to="/" className="cursor-pointer">
                <span className="mr-1">Address: </span>
                Office no. 412, Vipul Business Park, Sector 48, Gurugram,
                Haryana, 122001
              </Link>
              <div className="flex flex-row  justify-center">
                <span className="mr-1">Contact Us: </span>
                <Link to="/" className="cursor-pointer">
                  +91 7800677500
                </Link>
                {/* <Link to="/" className="cursor-pointer">
                  contact.rentduniya@gmail.com
                </Link> */}
              </div>
            </div>
            <div className="flex flex-row gap-2 pt-2 justify-center">
              <Link to="/privacy-policy" className="cursor-pointer">
                Privacy Policy
              </Link>
              |
              <Link to="/terms-and-conditions" className="cursor-pointer">
                Terms and Conditions
              </Link>
              |
              <Link to="/disclaimer" className="cursor-pointer">
                Disclaimer
              </Link>
            </div>
            <p className="mt-4">
              &copy; 2024 Rent Duniya . All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
