import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h4 className="font-semibold mb-2">Popular Templates</h4>
          <ul>
            <li>Content Calendar</li>
            <li>Product Roadmap</li>
            <li>Inventory Tracking</li>
            <li>Marketing Campaign Tracking</li>
            <li>Event Planning</li>
           
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Popular Extensions</h4>
          <ul>
            <li>Miro</li>
            <li>Jira</li>
            <li>Clearbit</li>
            <li>Loom</li>
            <li>Formstack</li>
           
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Popular Solutions</h4>
          <ul>
            <li>Marketing</li>
            <li>Product Operations</li>
            <li>Human Resources</li>
            <li>Sales</li>
            <li>Operations</li>
           
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Learn More</h4>
          <ul>
            <li>
              Webinars <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded text-xs ml-1">POPULAR</span>
            </li>
            <li>
              Demos <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded text-xs ml-1">NEW</span>
            </li>
            <li>Guides</li>
            <li>Customer Stories</li>
            <li>Articles</li>
           
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul>
            <li>About</li>
            <li>
              Careers <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded text-xs ml-1">POPULAR</span>
            </li>
            <li>Blog</li>
            <li>Status</li>
            <li>Newsroom</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
