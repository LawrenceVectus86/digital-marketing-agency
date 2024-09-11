

// Marketing

// Array of services with image paths
const services = [
    {
        icon: 'img/Group.png',
        title: "Content Marketing",
        description: "Design a content strategy that aligns with business goals, create high-quality content such as blogs, articles, infographics and videos, and distribute content."
    },
    {
        icon: 'img/cil_send.png',
        title: "Search Engine Optimization",
        description: "Improve website rankings in search engines by optimizing on-page content and off-page elements, conducting keyword research, and applying SEO best practices."
    },
    {
        icon: 'img/123.png',
        title: "Social Media Marketing",
        description: "Manage business social media accounts professionally, create and schedule engaging content, develop strategies to increase audience interaction and engagement."
    },
    {
        icon: 'img/solar_graph-outline.png',
        title: "Analytic & Reporting",
        description: "Collect and analyze data to understand campaign performance, provide regular reports with actionable insights, and use data to inform and optimize marketing strategies."
    },
    {
        icon: 'img/solar_graph-outline.png',
        title: "Influencer Marketing",
        description: "Identify and collaborate with influencers in your niche, manage campaigns involving influencers, from outreach to ROI tracking with the best asian full power."
    },
    {
        icon: 'img/solar_graph-outline.png',
        title: "Advertising",
        description: "Create and manage advertising campaigns on Google and social media to attract relevant traffic, manage advertising budgets, and track and report on effectiveness."
    },
    {
        icon: 'img/solar_graph-outline.png',
        title: "Online Reputation",
        description: "Monitor and manage online reviews and mentions, develop strategies to improve the company's image, and manage crisis situations."
    }
];

// Find the services grid container
const servicesGrid = document.getElementById('services-grid');

// Loop through each service and create a card
services.forEach((service) => {
    const card = document.createElement('div');
    card.className = `bg-white rounded-3xl shadow-lg overflow-hidden`;

    card.innerHTML = `
        <div class="p-6 border-b-[10px] border-[#000] hover:border-blue-600">
            <div class="bg-blue-600 p-3 rounded-2xl w-16 h-16 flex items-center justify-center mb-4">
                <img src="${service.icon}" alt="${service.title}" class="w-8 h-8">
            </div>
            <h3 class="text-xl font-bold mb-2">${service.title}</h3>
            <p class="text-gray-600 text-sm">${service.description}</p>
        </div>
    `;

    // Append each card to the services grid
    servicesGrid.appendChild(card);
});


// Page5

const processItems = [
    { number: "01", title: "Consultation", description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
    { number: "02", title: "Research and Strategy Development", description: "We conduct thorough research and develop a tailored strategy based on your business needs and market trends." },
    { number: "03", title: "Implementation", description: "Our team executes the developed strategy, implementing various digital marketing tactics to achieve your goals." },
    { number: "04", title: "Monitoring and Optimization", description: "We continuously monitor the performance of our efforts and optimize strategies for better results." },
    { number: "05", title: "Reporting and Communication", description: "Regular reports and communication keep you informed about the progress and results of our marketing efforts." },
    { number: "06", title: "Continual Improvement", description: "We constantly seek ways to improve and refine our strategies to ensure long-term success for your business." }
];

const processContainer = document.getElementById('processItems');

processItems.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = `process-item ${index === 0 ? 'bg-blue-600 text-white' : 'bg-white text-black'} rounded-xl p-4 shadow`;
    div.innerHTML = `
        <div class="flex justify-between items-center cursor-pointer">
            <div>
                <span class="font-bold text-6xl mr-2 md:text-3xl font-medium">${item.number}</span>
                <span class="text-3xl md:text-sm">${item.title}</span>
            </div>
            <button class="toggle-btn">+</button>
        </div>
         <div class="line border-1 py-"></div>
        <div class="process-description mt-2 hidden">
            <p class="text-lg">${item.description}</p>
        </div>
    `;
    processContainer.appendChild(div);
});

document.querySelectorAll('.process-item').forEach(item => {
    const titleBar = item.querySelector('.flex');
    const toggleBtn = item.querySelector('.toggle-btn');
    const description = item.querySelector('.process-description');

    titleBar.addEventListener('click', () => {
        item.classList.toggle('active');
        description.classList.toggle('hidden');
        toggleBtn.textContent = item.classList.contains('active') ? '-' : '+';
    });
});