// =====================================================
// CAROLYN'S PORTFOLIO - CONTENT DATA
// =====================================================
// This file contains all your editable content!
// To update: just modify the text/data below.
// =====================================================

// ========== MONTHLY MUSIC - UPDATE EACH MONTH! ==========
// Option 1: Use Spotify embed (recommended!) - paste your playlist/track URL
// Option 2: Manual song list with album art
//
// To get Spotify embed URL:
// 1. Go to Spotify, right-click a playlist/track
// 2. Share > Copy Embed Code
// 3. Paste the URL from the iframe src below

const musicData = {
    month: "february 2026",
    // Spotify embed URL - your playlist!
    // To change: replace with any Spotify playlist URL
    spotifyEmbed: "https://open.spotify.com/playlist/5v3eMd1h7IcjjJSjt7ELm2", // songs that live rent free in my head
    spotifyProfile: "https://open.spotify.com/user/7xfzj5l46cybj25l2texawz1z", // your profile

    // Fallback: manual song list (shown if no Spotify embed)
    songs: [
        {
            title: "good luck, babe!",
            artist: "Chappell Roan",
            albumArt: "https://i.scdn.co/image/ab67616d0000b273e1bc1f64da6f12dda99746a2",
            spotifyUrl: "https://open.spotify.com/track/0WbMK4wrZ1wFSty9F7FCgu"
        },
        {
            title: "espresso",
            artist: "Sabrina Carpenter",
            albumArt: "https://i.scdn.co/image/ab67616d0000b2735f4acf9723395f91ce0a8c44",
            spotifyUrl: "https://open.spotify.com/track/2qSkIjg1o9h3YT9RAgYN75"
        },
        {
            title: "birds of a feather",
            artist: "Billie Eilish",
            albumArt: "https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62",
            spotifyUrl: "https://open.spotify.com/track/6dOtVTDbd7Smi6tn8V7xKT"
        },
        {
            title: "pink pony club",
            artist: "Chappell Roan",
            albumArt: "https://i.scdn.co/image/ab67616d0000b2730c471c36970b9406233842a5",
            spotifyUrl: "https://open.spotify.com/track/3FoTc2yVrIraCqJbIbCc3F"
        },
        {
            title: "saturn",
            artist: "SZA",
            albumArt: "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120e3f89571",
            spotifyUrl: "https://open.spotify.com/track/4CS3HikVvzEhGhyB9lkMRt"
        }
    ]
};

// ========== CATEGORY CONTENT ==========
// Main sections shown when clicking category buttons

const categoryContent = {
    education: {
        title: "Education",
        content: `
            <h3>education</h3>
            <div class="edu-item">
                <h4>Stanford University</h4>
                <p><strong>September 2025 – June 2028 (expected)</strong></p>
                <p>B.S. Data Science (Quantitative Finance Track), M.S. Management Science & Engineering</p>
                <p>Minor: Energy Science & Engineering | GPA: 4.065</p>
                <br>
                <p><strong>Coursework:</strong> Principles of Data Science, Differential Equations, Principles of Economics, Stanford Climate Ventures, Financing Sustainability Solutions, Understand Energy, Integrative Design & Entrepreneurship for Sustainability</p>
            </div>
        `
    },

    // NEW: Communities section (replaces some leadership/awards)
    communities: {
        title: "Communities",
        content: `
            <h3>communities</h3>
            <p class="section-intro">the people and places that have shaped me</p>

            <div class="communities-grid">
                <div class="community-badge stanford">
                    <span class="badge-label">Stanford</span>
                    <div class="badge-items">
                        <span>Women in Investing</span>
                        <span>Sustainable Investment Group</span>
                        <span>Business Association of Stanford Entrepreneurial Students</span>
                        <span>Stanford Pre-Business Association</span>
                        <span>Stanford Business Insights</span>
                        <span>Women in Tech Entrepreneurship</span>
                        <span>EcoRAMP Fellow</span>
                        <span>Rising Bird Fellow</span>
                        <span><a href="https://we3lab.stanford.edu/" target="_blank" style="color: inherit;">WE3 Lab</a></span>
                    </div>
                </div>

                <div class="community-badge fellowships">
                    <span class="badge-label">Fellowships & Programs</span>
                    <div class="badge-items">
                        <span><a href="https://www.coca-colascholarsfoundation.org/about/2025-scholar-bios/" target="_blank" style="color: inherit;">Coca-Cola Scholars</a></span>
                        <span>World Science Scholars</span>
                        <span>Nontrivial Fellowship</span>
                        <span>Civics Unplugged Fellow</span>
                        <span>Governor STEM Scholar (NJ R&D Council)</span>
                        <span>Recalc Growth Equity</span>
                        <span>Grata Scholars</span>
                        <span>Peakspan Growth Equity</span>
                    </div>
                </div>

                <div class="community-badge previously">
                    <span class="badge-label">Previously</span>
                    <div class="badge-items">
                        <span>A Sustainable Future — Founder (97 schools, 9 countries)</span>
                        <span><a href="https://womeninstem.org/" target="_blank" style="color: inherit;">Women in STEM</a> — National President (222 chapters, 6K+ members)</span>
                        <span><a href="https://rootsandshoots.org/people/carolyn-h/" target="_blank" style="color: inherit;">Jane Goodall Institute</a> — National Youth Council</span>
                        <span><a href="https://projectgreenschools.org/staff/carolyn-he/" target="_blank" style="color: inherit;">Project Green Schools</a> — Youth Council President</span>
                        <span>National Speech and Debate Association — Member of Distinction</span>
                        <span>NJ Speech & Debate League — Student Board</span>
                        <span>EngineerGirl — Ambassador & Lead Instructor</span>
                        <span>Torch Leadership Academy — Counselor</span>
                    </div>
                </div>
            </div>

            <h4 style="margin-top: 30px;">recognition</h4>
            <p class="awards-line"><a href="https://www.nj.com/news/2025/05/2-nj-students-score-top-national-scholarship-now-theyre-headed-to-elite-universities.html" target="_blank" style="color: inherit;">US Presidential Scholar</a> · <a href="https://www.coca-colascholarsfoundation.org/about/2025-scholar-bios/" target="_blank" style="color: inherit;">Coca-Cola Scholar</a> · Academic All-American · <a href="https://www.wearefamilyfoundation.org/gtls-2025/carolyn-he" target="_blank" style="color: inherit;">WAFF Global Teen Leader</a> · NJ Governor's Environmental Excellence Award · <a href="https://www.pointsoflight.org/awards/the-student-turning-data-into-action-and-revolutionizing-sustainability-in-schools/" target="_blank" style="color: inherit;">George H.W. Bush Point of Light</a> · <a href="https://www.technovation.org/blogs/2024-alumna-changemaker-award-winners/" target="_blank" style="color: inherit;">Technovation Changemaker</a> · <a href="https://njhalloffame.org/2025/06/new-jersey-hall-of-fame-announces-2025-essay-contest-and-arete-scholarship-recipients/" target="_blank" style="color: inherit;">NJ Hall of Fame Arete Scholar</a> · <a href="https://www.global-solutions-initiative.org/person/carolyn-he/" target="_blank" style="color: inherit;">Global Solutions Fellow</a></p>
        `
    },

    experience: {
        title: "Experience",
        content: `
            <h3>experience</h3>

            <div class="exp-item">
                <h4>Investment Analyst Intern | Peak Sustainability Ventures</h4>
                <p><em>Mumbai, India | August 2026 – October 2026</em></p>
                <p>Evaluated early-stage emerging market investments across 4 verticals (energy, water, food systems, climate); built sector theses and market maps to support sourcing strategy.</p>
            </div>

            <div class="exp-item" style="margin-top: 20px;">
                <h4>Investment Intern | World Wildlife Fund (Nature Finance Investing)</h4>
                <p><em>Washington DC / Hybrid | June 2026 – August 2026</em></p>
                <p>Executed investment diligence on early-stage nature-based ventures; conducted sector analyses across aquaculture and blue economy to support $100M+ mobilization across 50 companies by 2030.</p>
            </div>

            <div class="exp-item" style="margin-top: 20px;">
                <h4>Data, Product, & Strategy Intern | Newlab</h4>
                <p><em>New York NY / Hybrid | June 2026 – August 2026</em></p>
                <p>Built startup intelligence infrastructure across HubSpot, Airtable, PitchBook, and Harmonic; engineered Python/SQL data models reconciling 800–900 companies to surface ecosystem insights for venture strategy.</p>
            </div>

            <div class="exp-item" style="margin-top: 20px;">
                <h4>Environmental Economics Research Assistant | Hunt Alcott Lab (SIEPR)</h4>
                <p><em>Stanford CA / Remote | June 2026 – Present</em></p>
                <p>Conducted computational research in structural IO demand estimation for Chinese EVs using BLP models; coded product-market data pipelines and robustness analyses for automobile market counterfactuals.</p>
            </div>

            <div class="exp-item" style="margin-top: 20px;">
                <h4>Ecopreneurship Intern | Stanford Graduate School of Business</h4>
                <p><em>Stanford CA | April 2026 – June 2026</em></p>
                <p>Analyzed Stanford climate venture ecosystem by tracking alumni startups, funding trajectories, and program impact metrics to support Ecopreneurship resource strategy.</p>
            </div>

            <div class="exp-item" style="margin-top: 20px;">
                <h4>Venture Analyst | Aera VC</h4>
                <p><em>Remote | March 2026 – Present</em></p>
                <p>Conducted founder diligence for Emerald Battery Labs, Orbital, and Cecilia; built investment memos, TAM/SAM models, and competitive analyses across $100M resilience, industrial systems, and AI fund.</p>
            </div>

            <div class="exp-item" style="margin-top: 20px;">
                <h4>Market Discovery & Commercialization Analyst | E-Flex (WE3 Lab)</h4>
                <p><em>Stanford CA | January 2026 – April 2026</em></p>
                <p>Leading commercialization for utility-scale energy-flexibility platform. Conducted 34 asset owner interviews across 6 states; analyzed 118K operational records to size $410M TAM.</p>
            </div>

            <div class="exp-item" style="margin-top: 20px;">
                <h4>Investment Analyst | Valo Ventures</h4>
                <p><em>San Francisco CA | January 2026 – April 2026</em></p>
                <p>Exit and value-maximization analysis across 18 portfolio companies. Researched 17 M&A precedents totaling $13.4B to benchmark valuations.</p>
            </div>

            <div class="exp-item" style="margin-top: 20px;">
                <h4>ESG Market Analyst (Etho Fellow) | Etho Capital</h4>
                <p><em>San Francisco CA | October 2025 – March 2026</em></p>
                <p>Built ESG analytics across 2.14M datapoints, 12 climate indices, quantifying 31 MtCO₂e climate impact.</p>
            </div>

            <div class="exp-item" style="margin-top: 20px;">
                <h4>Growth & Marketing Intern | Nixo (YC S25)</h4>
                <p><em>San Francisco CA | October 2025 – February 2026</em></p>
                <p>Designed GTM strategy to scale supply-side network in $4.6T SaaS market. Outbounded to 100+ FDEs and built execution roadmap.</p>
            </div>

            <div class="exp-item" style="margin-top: 20px;">
                <h4>Environmental Science & Research Intern | NJ Department of Environmental Protection</h4>
                <p><em>Trenton NJ | August 2025 – September 2025</em></p>
                <p>Conducted LCAs for urban turf projects; developed ArcGIS contamination tools and QA'd PFAS datasets (10K+ records).</p>
            </div>

            <div class="exp-item" style="margin-top: 20px;">
                <h4>Data Analytics Intern | US Department of Education</h4>
                <p><em>September 2024 – March 2025</em></p>
                <p>Built 10+ Power BI dashboards for FAFSA metrics; presented Tableau visualizations to 40+ stakeholders.</p>
            </div>

            <h4 style="margin-top: 30px;">Leadership</h4>

            <div class="exp-item" style="margin-top: 15px;">
                <h4>Founding Partner | University Climate Ventures</h4>
                <p><em>January 2026 – Present</em></p>
                <p>Co-founded climate-tech venture platform across 4 universities; convened 100+ founders, researchers, and investors, facilitating fundraising and accelerator placements (a16z Speedrun, Keel).</p>
            </div>

            <div class="exp-item" style="margin-top: 20px;">
                <h4>Project Lead & VP, Energy Foundry | Hyfin (Stanford Energy Club)</h4>
                <p><em>January 2026 – Present</em></p>
                <p>Led largest team advancing Hyfin's climate finance platform targeting $1T in clean energy asset mobilization; drove delivery across 4 global workstreams focused on EV blended-finance programs in SE Asia.</p>
            </div>

            <div class="exp-item" style="margin-top: 20px;">
                <h4>Chief Recruitment Officer | Stanford Women in Investing</h4>
                <p><em>January 2026 – Present</em></p>
                <p>Recruited 50+ finance professionals (VC, IB, PE) for speaker series and competitions; built speaker/alumni databases and expanded mentorship engagement.</p>
            </div>

            <div class="exp-item" style="margin-top: 20px;">
                <h4>Founder | A Sustainable Future</h4>
                <p><em>January 2023 – January 2026</em></p>
                <p>Founded data-driven sustainable printing initiative; deployed Paper Consumption Model in 97 schools saving 21M sheets and teaching 98k+ students applied research.</p>
            </div>

            <h4 style="margin-top: 30px;">Research</h4>
            <p>NASA · University of Maryland · Virginia Tech CEARS — Remote sensing, wildfire classification, LiDAR forest biomass modeling</p>
        `
    },

    thoughts: {
        title: "Thoughts",
        content: `
            <h3>thoughts & musings</h3>
            <ul>
                <li><a href="https://carolynhe.substack.com/" target="_blank">Substack</a> - Long-form writing & interviews</li>
                <li><a href="https://open.spotify.com/show/7pbhjFLN3jm8YWYTdMv2Kc" target="_blank">Podcast</a> - Just two girls chatting</li>
                <li><a href="https://www.youtube.com/@carolikestoeat/shorts" target="_blank">YouTube - carolikestoeat</a> - Food adventures</li>
                <li><a href="https://app.thestorygraph.com/profile/carolikestocry" target="_blank">StoryGraph</a> - What I'm reading</li>
            </ul>
            <br>
            <p><em>"The comings and goings of a constant wanderer"</em></p>
        `
    },

    about: {
        title: "About Me",
        content: `
            <h3>about me</h3>

            <div class="about-section">
                <h4>the fun stuff</h4>
                <ul>
                    <li><a href="#" onclick="openCardByTitle('what i\\'m reading'); return false;">What I'm Reading</a> - current books</li>
                    <li><a href="#" onclick="openCardByTitle('podcasts i love'); return false;">Podcasts I Love</a> - current rotation</li>
                    <li><a href="#" onclick="openCardByTitle('daily step count'); return false;">Daily Step Count</a> - yes, i track this</li>
                    <li><a href="#" onclick="openCardByTitle('startup ideas'); return false;">Startup Ideas</a> - shower thoughts & research</li>
                    <li><a href="#" onclick="openCardByTitle('recent obsessions'); return false;">Recent Obsessions</a> - things i can't stop thinking about</li>
                    <li><a href="#" onclick="openCardByTitle('virtual wardrobe'); return false;">Virtual Wardrobe</a> - thrift finds & wishlist</li>
                    <li><a href="#" onclick="openCardByTitle('favorite music'); return false;">Favorite Music</a> - tier lists</li>
                    <li><a href="#" onclick="openCardByTitle('now playing'); return false;">Now Playing</a> - monthly favorites</li>
                    <li><a href="#" onclick="openCardByTitle('stanford class rankings'); return false;">Stanford Class Rankings</a> - courses ranked</li>
                    <li><a href="#" onclick="openCardByTitle('favorite quotes'); return false;">Favorite Quotes</a> - words that stick with me</li>
                    <li><a href="#" onclick="openCardByTitle('travels'); return false;">Travels</a> - adventures near & far</li>
                    <li><a href="#" onclick="openCardByTitle('to-eat list'); return false;">To-Eat List</a> - food adventures</li>
                </ul>
                <p style="margin-top: 15px; font-style: italic; color: #5a5856;">explore the cards below to dive deeper!</p>
            </div>

            <div class="about-section" style="margin-top: 25px;">
                <h4>technical skills</h4>
                <p><strong>Languages:</strong> Python, R, SQL, JavaScript, C++, Java</p>
                <p><strong>Tools:</strong> Power BI, Tableau, GEE, ArcGIS, Jupyter</p>
                <p><strong>Methods:</strong> Statistical Modeling, ML, Time Series, Spectral Analysis</p>
            </div>

            <div class="about-section" style="margin-top: 25px;">
                <h4>interests</h4>
                <p>Hot yoga, pilates, hiking, power walking, reading, collaging, knitting, pressing flowers, quasi-competitive badminton</p>
            </div>
        `
    }
};


// ========== CARDS DATA ==========
// Each card appears in the deck. Add/remove/edit as needed!
//
// FIELDS:
//   id: unique number
//   title: card name (lowercase looks best)
//   category: which section it belongs to
//   type: "link" | "story" | "subpage" | "music"
//   link: URL for external links (type: "link")
//   subpage: filename for sub-pages (type: "subpage")
//   image: background image URL
//   content: HTML content shown in modal (for type: "story")
//
// TO EDIT CARD TEXT: Find the card below and edit its "content" field
// TO ADD A NEW CARD: Copy an existing card, change the id, and edit fields

const cardsData = [
    // ===== NOW PLAYING - MUSIC CARD =====
    { id: 0, title: "now playing", category: "about", type: "music",
      image: "images/Photos-3-002/IMG_20250628_201018.jpg" },

    // ===== ABOUT ME CARDS =====
    { id: 1, title: "what i'm reading", category: "about", type: "link",
      link: "https://app.thestorygraph.com/profile/carolikestocry",
      image: "images/Photos-3-002/books.jpg",
      content: `
        <p>I track all my reading on StoryGraph! Currently obsessed with literary fiction and memoirs.</p>
        <p><strong>2026 reading goal:</strong> 52 books</p>
      `
    },

    { id: 2, title: "podcasts i love", category: "about", type: "story",
      image: "images/Photos-3-002/podcasts i like.jpg",
      content: `
        <p>My current rotation:</p>
        <ul>
          <li><strong>The Daily</strong> - staying informed</li>
          <li><strong>Watt It Takes</strong> - climate & energy founders</li>
          <li><strong>The Journal</strong> - WSJ business stories</li>
          <li><strong>The Moth</strong> - true stories, live</li>
          <li><strong>No Stupid Questions</strong> - curiosity-driven</li>
          <li><strong>Golden Impact</strong> - impact investing</li>
          <li><strong>Think Fast Talk Smart</strong> - communication skills</li>
          <li><strong>StoryCorps</strong> - human connection</li>
          <li><strong>Snap Judgment</strong> - storytelling</li>
          <li><strong>TED Radio Hour</strong> - big ideas</li>
          <li><strong>Today, Explained</strong> - news made clear</li>
        </ul>
      `
    },

    { id: 3, title: "daily step count", category: "about", type: "story",
      image: "images/Photos-3-002/daily step count.jpg",
      content: `
        <p>Yes, I'm that person who tracks steps religiously.</p>
        <p><strong>Daily goal:</strong> 10,000 steps</p>
        <p><strong>Personal best:</strong> 36,743 steps (May 17, 2026)</p>
        <br>
        <p><strong>2026 monthly totals:</strong></p>
        <ul>
          <li>May: 654,918 (avg ~21,126/day)</li>
          <li>April: 559,222 (avg ~18,641/day)</li>
          <li>March: 603,368 (avg ~19,463/day)</li>
          <li>February: 443,798 (avg ~15,850/day)</li>
          <li>January: 389,197 (avg ~12,554/day)</li>
        </ul>
      `
    },

    { id: 4, title: "startup ideas", category: "about", type: "subpage", subpage: "startup-ideas.html",
      image: "images/Photos-3-002/startup ideas.jpg" },

    { id: 5, title: "recent obsessions", category: "about", type: "subpage", subpage: "obsessions.html",
      image: "images/Photos-3-002/IMG_8012.jpg" },

    { id: 6, title: "virtual wardrobe", category: "about", type: "subpage", subpage: "wardrobe.html",
      image: "images/Photos-3-002/PXL_20250624_230357960.jpg" },

    { id: 7, title: "stanford class rankings", category: "about", type: "subpage", subpage: "class-rankings.html",
      image: "images/Photos-3-002/class tier rankings.jpg" },

    { id: 8, title: "favorite quotes", category: "about", type: "story",
      image: "images/Photos-3-002/PXL_20250705_005937045.jpg",
      content: `
        <blockquote>"Everyday is blue and never cloudy"</blockquote>
        <p>— Lorde</p>
        <br>
        <blockquote>"Be who you are and say what you feel, because in the end those who matter don't mind and those who mind don't matter"</blockquote>
        <p>— Bernard Baruch</p>
      `
    },

    // ===== THOUGHTS CARDS =====
    { id: 9, title: "substack", category: "thoughts", type: "link",
      link: "https://carolynhe.substack.com/",
      image: "images/Photos-3-002/IMG_5689.jpeg",
      content: `<p>Long-form writing on climate, tech, and life as a college student. Chronicling conversations that matter - interviews with founders, researchers, and interesting people.</p>`
    },

    { id: 10, title: "my podcast", category: "thoughts", type: "link",
      link: "https://open.spotify.com/show/7pbhjFLN3jm8YWYTdMv2Kc",
      image: "images/Photos-3-002/my podcast.png",
      content: `<p>Just two girls chatting about their lives.</p>`
    },

    { id: 11, title: "to-eat list", category: "thoughts", type: "subpage", subpage: "to-eat.html",
      image: "images/Photos-3-002/carolikestoeat.jpg"
    },

    { id: 12, title: "favorite music", category: "about", type: "subpage", subpage: "music-rankings.html",
      image: "images/Photos-3-002/music rankings.jpg.jpeg" },

    // ===== EXPERIENCE CARDS =====
    { id: 13, title: "valo ventures", category: "experience", type: "link",
      link: "https://valoventures.org/",
      image: "images/Photos-3-002/DSC03540.JPG",
      content: `
        <p>Investment Analyst working on exit analysis and portfolio company valuations.</p>
        <p>Focus areas: Climate tech, enterprise SaaS, consumer.</p>
      `
    },

    { id: 14, title: "e-flex @ we3", category: "experience", type: "link",
      link: "https://we3lab.stanford.edu/",
      image: "images/Photos-3-002/eflex.jpg",
      content: `
        <p>Leading commercialization for a utility-scale energy flexibility platform at Stanford's WE3 Lab.</p>
        <p>Conducted 34 asset owner interviews, sized a $410M TAM.</p>
      `
    },

    { id: 15, title: "nasa research", category: "experience", type: "story",
      image: "images/Photos-3-002/NASA research.jpg",
      content: `
        <p>Remote sensing research analyzing wildfire vegetation loss using satellite imagery.</p>
        <p>Worked with MODIS data and GIS tools to track fire impact over time.</p>
        <p><em>One of my favorite research experiences — combining environmental science with data.</em></p>
      `
    },

    { id: 21, title: "peak sustainability ventures", category: "experience", type: "link",
      link: "https://www.peakventures.in/",
      image: "images/Photos-3-002/peak.jpg",
      content: `
        <p>Investment Analyst Intern evaluating early-stage emerging market investments across energy, water, food, and climate.</p>
        <p>Built sector theses and market maps across 100+ startups and investors.</p>
      `
    },

    { id: 22, title: "wwf nature finance", category: "experience", type: "link",
      link: "https://www.worldwildlife.org/our-work/nature-finance/",
      image: "images/Photos-3-002/wwf.jpg",
      content: `
        <p>Investment Intern executing diligence on early-stage nature-based ventures.</p>
        <p>Supporting mobilization of $100M+ in equity investments across early-stage companies by 2030.</p>
      `
    },

    { id: 23, title: "newlab", category: "experience", type: "link",
      link: "https://www.newlab.com/",
      image: "images/Photos-3-002/newlab.JPG",
      content: `
        <p>Data, Product, & Strategy Intern building startup intelligence infrastructure.</p>
        <p>Engineered Python/SQL data models reconciling 800–900 companies for venture strategy.</p>
      `
    },

    { id: 26, title: "aera vc", category: "experience", type: "link",
      link: "https://www.aera.vc/",
      image: "images/Photos-3-002/aera.JPEG",
      content: `
        <p>Venture Analyst conducting founder diligence across resilience, industrial systems, and AI.</p>
        <p>Built investment memos, TAM/SAM models, and competitive analyses.</p>
      `
    },

    { id: 27, title: "university climate ventures", category: "communities", type: "link",
      link: "https://www.universityclimateventures.org/home",
      image: "images/Photos-3-002/PXL_20260512_010844305.jpg",
      content: `
        <p>Co-founded climate-tech venture platform across 4 universities.</p>
        <p>Convened 100+ founders, researchers, and investors, facilitating fundraising and accelerator placements (a16z Speedrun, Keel).</p>
        <p><em>January 2026 – Present</em></p>
      `
    },


    // ===== COMMUNITIES CARDS =====
    { id: 16, title: "a sustainable future", category: "communities", type: "link",
      link: "https://www.pointsoflight.org/awards/the-student-turning-data-into-action-and-revolutionizing-sustainability-in-schools/",
      image: "images/Photos-3-002/PXL_20250619_181129503.jpg",
      content: `
        <p>Founded this sustainability nonprofit that deployed print-reduction analytics across 97 schools in 9 countries.</p>
        <p><strong>Impact:</strong> 21M+ sheets of paper saved</p>
        <p style="margin-top: 15px;"><strong>Press:</strong> <a href="https://www.pointsoflight.org/awards/the-student-turning-data-into-action-and-revolutionizing-sustainability-in-schools/" target="_blank">Points of Light</a> · <a href="https://www.technovation.org/blogs/2024-alumna-changemaker-award-winners/" target="_blank">Technovation</a> · <a href="https://www.dailyrecord.com/story/news/local/morris-county/2024/02/22/can-schools-cut-paper-waste-morris-county-teens-nonprofit-leads-way/72568037007/" target="_blank">Daily Record</a> · <a href="https://dep.nj.gov/newsrel/24_0059/" target="_blank">NJ DEP</a></p>
      `
    },

    { id: 17, title: "women in stem", category: "communities", type: "link",
      link: "https://womeninstem.org/",
      image: "images/Photos-3-002/DSC_1022.JPG",
      content: `
        <p>Served as National President, scaling from 86 to 222 chapters and 2K to 6K+ members.</p>
        <p>Built mentorship programs and launched 4 new org-wide initiatives.</p>
        <p style="margin-top: 15px;"><strong>Press:</strong> <a href="https://citris-uc.org/2024-edge-in-tech-athena-award-recipients-embody-diverse-perspectives-in-tech/" target="_blank">CITRIS</a> · <a href="https://canvasrebel.com/meet-carolyn-he/" target="_blank">CanvasRebel</a></p>
      `
    },

    { id: 18, title: "stanford wii", category: "communities", type: "link",
      link: "https://www.linkedin.com/in/carolyn-he/",
      image: "images/Photos-3-002/stanford wii.JPG",
      content: `
        <p>Chief Recruitment Officer for Stanford Women in Investing.</p>
        <p>Recruited 50+ finance speakers, organized corporate treks, and built our alumni network.</p>
      `
    },

    // ===== EDUCATION CARDS =====
    { id: 19, title: "stanford", category: "education", type: "story",
      image: "images/Photos-3-002/IMG_5376.jpeg",
      content: `
        <p><strong>B.S. Data Science</strong> (Quantitative Finance Track)</p>
        <p><strong>M.S. Management Science & Engineering</strong></p>
        <p><strong>Minor:</strong> Energy Science & Engineering</p>
        <p><strong>GPA:</strong> 4.065</p>
        <p><em>Go Cardinal!</em></p>
      `
    },

    // ===== TRAVELS =====
    { id: 20, title: "travels", category: "about", type: "subpage", subpage: "travels.html",
      image: "images/Photos-3-002/IMG_1571.JPG" },
];


// ========== SUB-PAGE DATA ==========
// Content for the interactive sub-pages

// Virtual Wardrobe - Add your thrift finds here!
const wardrobeData = {
    categories: ["tops", "bottoms", "dresses", "outerwear", "accessories", "shoes"],
    items: [
        { name: "brown riding boots", category: "shoes", status: "wishlist", image: "images/wardrobe-boots.jpg", notes: "leather with gold buckles" },
        { name: "asymmetrical woolen coat", category: "outerwear", status: "wishlist", image: "images/wardrobe-coat.jpg", notes: "black wool, unique collar" },
        { name: "quilted jacket", category: "outerwear", status: "wishlist", image: "images/wardrobe-quilted.jpg", notes: "brown/taupe, cozy" },
        { name: "dark wash jeans", category: "bottoms", status: "wishlist", image: "images/wardrobe-jeans.jpg", notes: "raw hem" },
        { name: "blanket scarf", category: "accessories", status: "wishlist", image: "images/wardrobe-scarf.jpg", notes: "lucky brand, gray" },
        // Add more items here!
    ]
};

// Startup Ideas - Your idea bank
const startupIdeasData = {
    categories: ["climate", "fintech", "consumer", "health", "education", "enterprise", "other"],
    statuses: ["shower thought", "researched", "building"],
    ideas: [
        { title: "carbon credit marketplace for students", category: "climate", status: "researched", oneLiner: "gamified sustainability tracking with real offsets" },
        { title: "AI study buddy", category: "education", status: "shower thought", oneLiner: "personalized tutoring that adapts to your learning style" },
        { title: "thrift inventory app", category: "consumer", status: "shower thought", oneLiner: "track items across multiple thrift stores" },
        { title: "mercor for cybersecurity", category: "enterprise", status: "researched", oneLiner: "upskill engineers to AI cybersecurity specialists via vetted marketplace" },
        { title: "research-to-commercialization marketplace", category: "enterprise", status: "researched", oneLiner: "AI-augmented Bain for scientists — streamline academic tech externalization" },
        { title: "AI career trajectory planner", category: "education", status: "shower thought", oneLiner: "help students plan careers by mapping values, interests, and evolving tech landscape" },
        { title: "consumer inventory auditing", category: "consumer", status: "shower thought", oneLiner: "log and locate closet/pantry/fridge items to save money and reduce waste" },
        { title: "delayed shipment clothing model", category: "consumer", status: "shower thought", oneLiner: "cheaper clothes if purchased a year ahead — back to artisan goods" },
        { title: "incentive-driven sustainability marketplace", category: "climate", status: "researched", oneLiner: "climate-focused e-commerce with sustainability scores and service-for-savings rewards" },
    ]
};

// Recent Obsessions - What you're into right now
const obsessionsData = {
    categories: ["food", "places", "products", "media", "activities"],
    items: [
        { title: "gelato runs", category: "food", image: "images/Photos-3-002/PXL_20250815_224714267.jpg", caption: "caffè panna is always the answer" },
        { title: "brunch with friends", category: "food", image: "images/Photos-3-002/PXL_20250616_111211728.jpg", caption: "long lunches, good conversation" },
        { title: "exploring new cities", category: "places", image: "images/Photos-3-002/PXL_20250614_160523560.jpg", caption: "getting lost in side streets" },
        { title: "dc adventures", category: "places", image: "images/Photos-3-002/IMG_8046.jpg", caption: "monuments & museums" },
        { title: "coastal walks", category: "places", image: "images/Photos-3-002/PXL_20250703_220913610.jpg", caption: "ocean views & fresh air" },
        { title: "hot yoga", category: "activities", image: "images/Photos-3-002/PXL_20250920_225759901.jpg", caption: "26+2 bikram sequence, 3-4x weekly" },
        { title: "flower pressing", category: "activities", image: "images/Photos-3-002/PXL_20250529_204601886.jpg", caption: "wildflowers from yosemite, cherry blossoms from the oval" },
        { title: "botanical illustrations", category: "activities", image: "images/Photos-3-002/PXL_20250725_205518811.jpg", caption: "collecting vintage prints" },
        { title: "sunset hikes", category: "activities", image: "images/Photos-3-002/IMG_1571.JPG", caption: "dish trail, windy hill, purisima creek" },
        // Add more obsessions here!
    ]
};

// Music Rankings - Your tier list
const musicRankingsData = {
    tiers: ["S", "A", "B", "C"],
    albums: [
        { title: "The Rise and Fall of a Midwest Princess", artist: "Chappell Roan", tier: "S", cover: "https://i.scdn.co/image/ab67616d0000b2730c471c36970b9406233842a5" },
        { title: "SOS", artist: "SZA", tier: "S", cover: "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120e3f89571" },
        { title: "HIT ME HARD AND SOFT", artist: "Billie Eilish", tier: "A", cover: "https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62" },
        { title: "Short n' Sweet", artist: "Sabrina Carpenter", tier: "A", cover: "https://i.scdn.co/image/ab67616d0000b2735f4acf9723395f91ce0a8c44" },
        // Add more albums here!
    ]
};


// ========== STYLING DATA ==========
// Color palettes for card backgrounds

const cardColors = [
    "linear-gradient(135deg, #7a8c6a 0%, #6a7c5a 100%)",  // sage green
    "linear-gradient(135deg, #6a8494 0%, #5a7484 100%)",  // dusty blue
    "linear-gradient(135deg, #c8a098 0%, #b89088 100%)",  // soft pink
    "linear-gradient(135deg, #c86850 0%, #b85840 100%)",  // coral orange
    "linear-gradient(135deg, #4a6050 0%, #3a5040 100%)",  // forest green
    "linear-gradient(135deg, #8a7a90 0%, #7a6a80 100%)",  // muted lavender
    "linear-gradient(135deg, #9aaa8a 0%, #8a9a7a 100%)",  // light sage
    "linear-gradient(135deg, #7090a0 0%, #608090 100%)",  // slate blue
    "linear-gradient(135deg, #d8c8b8 0%, #c8b8a8 100%)",  // warm cream
    "linear-gradient(135deg, #a08880 0%, #907870 100%)",  // dusty rose
];

// Sticky note colors
const stickyNoteColors = [
    "#fff9b1", // yellow
    "#ffb3ba", // pink
    "#baffc9", // mint
    "#bae1ff", // blue
    "#e8d5b7", // cream
    "#d4a5a5", // dusty rose
];
