export interface ProjectDetail {
    title: string;
    date: string;
    author: string;
    video: string;
    images: string[];
    content: string;
}

export const projectDetails: Record<string, ProjectDetail> = {
    "smart-home": {
        title: "Smart Home Automation System",
        date: "January 22, 2019",
        author: "Jasmine Zheng",
        video: "/videos/smart-home/smart-home-demo.mp4",
        images: [
        "/images/smart-home/smart-home-1.jpg",
        "/images/smart-home/smart-home-2.jpg",
        "/images/smart-home/smart-home-3.jpg",
        "/images/smart-home/smart-home-4.jpg"
        ],
        content: `
        <p>This <strong>Smart Home Automation System</strong> integrates various sensors and IoT components 
        to enhance automation and air quality monitoring.</p>

        <h3>🎓 Student Exchange Achievement:</h3>
        <ul>
            <li><strong>Temasek Foundation International Specialists’ Community Action and Leadership Exchange (TFI SCALE)</strong> at Republic Polytechnic.</li>
            <li>Engaged in holistic learning and cross-cultural sharing experience in Suzhou, China.</li>
            <li>Implemented co-developed social innovation projects to benefit local communities, such as the <strong>Environmental Monitoring Detection System</strong>.</li>
        </ul>

        <h3>🏆 Award Recognition:</h3>
        <ul>
            <li><strong>SG Digital Wonderland Finalist</strong> – Awarded by the <strong>Infocomm Media Development Authority (IMDA)</strong>.</li>
            <li>Implement assistive technology to help elderly or disabled who live alone.</li>
            <li>Showcased the project in one of Singapore’s largest technology and innovation events.</li>
        </ul>
        `,
    },

    "polyfintech-2018": {
        title: "Hawker Centre Cashless Payment",
        date: "July 01, 2018",
        author: "Jasmine Zheng",
        video: "",
        images: [
        "/images/polyfintech-2018/1.jpeg",
        "/images/polyfintech-2018/2.jpeg"
        ],
        content: `
        <p>Our team, <strong>Polygen</strong>, from the <strong>Diploma in Business Applications</strong> at Republic Polytechnic, 
        showcased our <strong>Hawker Centre Cashless Payment</strong> solution at the <strong>Singapore Fintech Festival</strong>! 🚀💳</p>

        <h3>🌟 What This Project Does:</h3>
        <ul>
            <li>Enhances cashless payment ease in hawker centres.</li>
            <li>Uses <strong>image recognition</strong> instead of QR codes for identifying merchants.</li>
            <li>Predicts the transaction amount for a seamless <strong>one-step scanning and payment process</strong>.</li>
            <li>Users can <strong>confirm or adjust the price before finalizing payment</strong>.</li>
        </ul>

        <h3>🏆 Achievements:</h3>
        <ul>
            <li><strong>NETS Most Innovative Payment Award</strong> – Won at the PolyFinTech100 API Hackathon.</li>
            <li>Praised for its ability to simplify cashless payments for <strong>hawkers and customers</strong>.</li>
        </ul>
        `,
    }
};
