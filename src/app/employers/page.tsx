import React from 'react';
import Link from 'next/link';
// CORRECTED IMPORTS: Replaced FaCalendarAlt with FaCalendarDays, and ensured others are in the fa6 namespace
import { FaUsers, FaBriefcase, FaDatabase, FaCalendarDays, FaEnvelope } from 'react-icons/fa6';

// Data for the Community Stats section
const communityStats = [
  { number: '6,000+', label: 'Discord Members' },
  { number: '16,000+', label: 'Email Subscribers' },
  { number: '90,000+', label: 'Social Media Followers' },
  { number: '50%', label: 'Hold Mid-Senior Level Roles' },
];

const EmployersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Hero Section: Partner with Us - WITH BACKGROUND IMAGE AND FONT */}
      <section 
        className="relative h-screen flex items-center justify-center text-center p-4"
        style={{
          // YOU NEED TO REPLACE THIS with your actual image path!
          backgroundImage: "url('/images/hero13.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg pacifico-regular">
            Partner With Us: Hire Top Tech Talent
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto mb-10">
            Baddies in Tech partners with culture-conscious companies to co-create safe workplaces for women of color to thrive in their tech careers.
            Gain access to a curated talent pool ready to make an impact.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block bg-pink-600 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-pink-700 transition duration-300 shadow-xl uppercase tracking-wider"
          >
            Start Partnering Today
          </Link>
        </div>
      </section>

      <hr className="my-0 border-gray-200" />

      {/* 2. Community & Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Our Community, By the Numbers
          </h2>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            {communityStats.map((stat, index) => (
              <div key={index} className="p-6 bg-pink-50 rounded-lg shadow-md">
                <p className="text-5xl font-extrabold text-pink-700 mb-2">{stat.number}</p>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mt-12">
            **78%** of our members identify as Black or African American, and **25%** hold a Master's degree or higher. We are a network of dynamic professionals dedicated to driving innovation in technology.
          </p>
        </div>
      </section>

      <hr className="my-0 border-gray-200" />

      {/* 3. Ways to Partner Section (Offerings) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Discover, Connect, and Hire Top Talent
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Job Board */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-pink-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <FaBriefcase className="mr-3 text-pink-500" /> Job Board Postings
              </h3>
              <p className="text-gray-600 mb-6">
                Connect with ambitious women of color in tech. Amplify your open roles to an engaged network of professionals ready to lead, innovate, and impact your organization.
              </p>
              <Link
                href="/employers/post-job"
                className="inline-block text-pink-600 font-bold py-2 px-6 rounded-full text-sm border border-pink-600 hover:bg-pink-50 transition duration-300"
              >
                Post a Job (Launching Soon)
              </Link>
            </div>
            
            {/* Card 2: Resume Bank */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <FaDatabase className="mr-3 text-purple-500" /> Resume Bank Access
              </h3>
              <p className="text-gray-600 mb-6">
                Access BiT's curated database of talented women of color in tech. Browse and discover candidates with diverse skills and experiences who are ready to make an impact.
              </p>
              <Link
                href="/employers/recruiter-membership"
                className="inline-block text-purple-600 font-bold py-2 px-6 rounded-full text-sm border border-purple-600 hover:bg-purple-50 transition duration-300"
              >
                Explore Recruiter Membership
              </Link>
            </div>
            
            {/* Card 3: Sponsorship */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <FaCalendarDays className="mr-3 text-blue-500" /> Sponsor an Event
              </h3>
              <p className="text-gray-600 mb-6">
                Amplify your employer brand and connect directly with the BiT community by sponsoring BaddieCon, local meetups, or virtual workshops.
              </p>
              <Link
                href="/employers/sponsorship"
                className="inline-block text-blue-600 font-bold py-2 px-6 rounded-full text-sm border border-blue-600 hover:bg-blue-50 transition duration-300"
              >
                View Sponsorship Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-0 border-gray-200" />

      {/* 4. Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-pink-50 p-8 rounded-xl shadow-2xl border-l-8 border-pink-500">
            <p className="text-xl italic text-gray-800 mb-6">
              "We spoke with a candidate from Baddies in Tech before the holidays and she was excellent! We offered her the role right away. I am bugging my tech partners to hurry up and use the rest of our job posts so we can get some good help on the front or back end side. Good stuff!"
            </p>
            <p className="font-bold text-gray-900 text-lg">
              — CEO, Open Seat Direct
            </p>
          </div>
        </div>
      </section>

      <hr className="my-0 border-gray-200" />

      {/* 5. Final Call-to-Action */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Get in Touch
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Partnering with Baddies in Tech grants you broad exposure to our hard-to-reach audience of women of color technologists. Let's chat about partnership opportunities!
          </p>
          <Link
            href="/contact"
            className="bg-gray-900 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-pink-600 transition duration-300 shadow-xl uppercase tracking-wider flex items-center justify-center mx-auto w-fit"
          >
            <FaEnvelope className="mr-2" /> Contact Our Partnership Team
          </Link>
        </div>
      </section>

    </div>
  );
};

export default EmployersPage;