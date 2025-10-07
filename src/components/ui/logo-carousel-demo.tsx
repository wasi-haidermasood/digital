"use client";

import React, { type SVGProps } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Digital Marketing & E-commerce Icons
function ShopifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#95BF47" d="M32.5 25L50 0l17.5 25V75H32.5z"/>
      <path fill="#5E8E3E" d="M32.5 25h35V75H32.5z"/>
      <path fill="#FFF" d="M45 40l5-15 5 15-5 5z"/>
    </svg>
  );
}

function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function GoogleAnalyticsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#FFC107" d="M21.6 2.4H2.4v19.2h19.2V2.4z"/>
      <path fill="#FF3D00" d="M12 12l4.8 8.4h4.8V12z"/>
      <path fill="#4CAF50" d="M7.2 12l4.8 8.4V12z"/>
      <path fill="#03A9F4" d="M7.2 12l4.8-9.6v9.6z"/>
    </svg>
  );
}

function GoogleTagManagerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#4285F4" d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path fill="#34A853" d="M2 7l10 5 10-5M2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  );
}

function SEOMetaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#FF6D00" d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path fill="#FF3D00" d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      <circle fill="#2962FF" cx="12" cy="12" r="3"/>
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="url(#instagramGradient)" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
      <defs>
        <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FD5" />
          <stop offset="25%" stopColor="#FF543F" />
          <stop offset="50%" stopColor="#C837AB" />
          <stop offset="100%" stopColor="#F58529" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function WordPressIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#21759B" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
      <path fill="#21759B" d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
    </svg>
  );
}

function CodingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#2962FF" d="M8 3l-6 9 6 9M16 3l6 9-6 9M13 3l-2 18"/>
    </svg>
  );
}

function SearchConsoleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#4285F4" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path fill="#34A853" d="M12 6l6 6-6 6-6-6z"/>
    </svg>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#000000" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#0077B5" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#1DA1F2" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  );
}

function PinterestIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#BD081C" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
    </svg>
  );
}

function MailchimpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#FFE01B" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      <path fill="#0C0C0C" d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
      <path fill="#FFE01B" d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </svg>
  );
}

function HubSpotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#FF7A59" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      <path fill="#FFFFFF" d="M12 6l6 6-6 6-6-6z"/>
    </svg>
  );
}

const allLogos = [
  { name: "Shopify", id: 1, img: ShopifyIcon },
  { name: "Google", id: 2, img: GoogleIcon },
  { name: "Google Analytics", id: 3, img: GoogleAnalyticsIcon },
  { name: "Google Tag Manager", id: 4, img: GoogleTagManagerIcon },
  { name: "SEO Meta", id: 5, img: SEOMetaIcon },
  { name: "Facebook", id: 6, img: FacebookIcon },
  { name: "Instagram", id: 7, img: InstagramIcon },
  { name: "YouTube", id: 8, img: YouTubeIcon },
  { name: "WordPress", id: 9, img: WordPressIcon },
  { name: "Coding", id: 10, img: CodingIcon },
  { name: "Google Search Console", id: 11, img: SearchConsoleIcon },
  { name: "TikTok", id: 12, img: TikTokIcon },
  { name: "LinkedIn", id: 13, img: LinkedInIcon },
  { name: "Twitter", id: 14, img: TwitterIcon },
  { name: "Pinterest", id: 15, img: PinterestIcon },
  { name: "Mailchimp", id: 16, img: MailchimpIcon },
  { name: "HubSpot", id: 17, img: HubSpotIcon },
];

export function LogoCarouselDemo() {
  return (
    <div className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
            Trusted by Industry Leaders
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Platforms We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Master</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We specialize in the world's leading digital marketing and e-commerce platforms 
            to deliver <span className="font-semibold text-gray-900">exceptional results</span> for your business growth.
          </p>
        </div>

        {/* Logo Carousel Section */}
        <div className="flex justify-center items-center mb-16">
          <div className="w-full max-w-6xl">
            <LogoCarousel columnCount={4} logos={allLogos} /> 
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center">
          <p className="text-lg text-gray-600 italic border-t border-gray-200 pt-8 max-w-2xl mx-auto">
            "Expertise across 17+ platforms to drive your digital success"
          </p>
        </div>
      </div>
    </div>
  );
}