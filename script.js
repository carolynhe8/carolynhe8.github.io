// ===== Main Script =====

document.addEventListener('DOMContentLoaded', () => {
    initIntroAnimation();
    initBackgroundPhotos();
    initCards();
    initCategoryButtons();
    initModal();
    initSubpageModal();
    initDropZone();
    initShuffle();
    initStickyNotes();
});

// ===== Random Background Photos =====
function initBackgroundPhotos() {
    // Photos NOT used in cards - for background decoration only
    const backgroundPhotos = [
        'images/Photos-3-002/100_0089.JPG',
        'images/Photos-3-002/100_0125.JPG',
        'images/Photos-3-002/100_0129.JPG',
        'images/Photos-3-002/100_0155.JPG',
        'images/Photos-3-002/100_0158.JPG',
        'images/Photos-3-002/100_1434.jpeg',
        'images/Photos-3-002/100_1493.JPG.jpeg',
        'images/Photos-3-002/100_4434.JPG',
        'images/Photos-3-002/100_4452.JPG',
        'images/Photos-3-002/1000009064.jpg',
        'images/Photos-3-002/101_0238.JPG',
        'images/Photos-3-002/20250406_110632-b9b1.jpg',
        'images/Photos-3-002/20250407_035822-7ed5.jpg',
        'images/Photos-3-002/20250407_051817-de24.jpg',
        'images/Photos-3-002/20250407_112531-b0f9.jpg',
        'images/Photos-3-002/20250630_011136-b3da.jpg',
        'images/Photos-3-002/b6317c69-c4dd-460f-9cfa-7353131f7689.jpg',
        'images/Photos-3-002/ConfettiSideWall-20250926200125181_print.jpg',
        'images/Photos-3-002/DSC_0018.JPG',
        'images/Photos-3-002/DSC_0298.JPG',
        'images/Photos-3-002/DSC_0713.JPG',
        'images/Photos-3-002/DSC_0722.JPG',
        'images/Photos-3-002/DSC_0739.JPG',
        'images/Photos-3-002/DSC_0742.JPG',
        'images/Photos-3-002/DSC_1001.JPG',
        'images/Photos-3-002/DSC_1030.JPG',
        'images/Photos-3-002/DSC03487.JPG',
        'images/Photos-3-002/DSC03594.JPG',
        'images/Photos-3-002/DSC03884.JPG',
        'images/Photos-3-002/IMG_20250210_205152.jpg',
        'images/Photos-3-002/IMG_20250727_185754.jpg',
        'images/Photos-3-002/IMG_20250828_151106.jpg',
        'images/Photos-3-002/IMG_20250828_151130.jpg',
        'images/Photos-3-002/IMG_2205.JPG',
        'images/Photos-3-002/IMG_2275.JPG',
        'images/Photos-3-002/IMG_20250628_201018.jpg',
        'images/Photos-3-002/IMG_3265.JPG',
        'images/Photos-3-002/IMG_3302.JPG',
        'images/Photos-3-002/IMG_3442.JPG',
        'images/Photos-3-002/IMG_3566.JPG',
        'images/Photos-3-002/IMG_4273.jpg',
        'images/Photos-3-002/IMG_4911.JPG',
        'images/Photos-3-002/IMG_4935.JPG',
        'images/Photos-3-002/IMG_4937.JPG',
        'images/Photos-3-002/IMG_4941.JPG',
        'images/Photos-3-002/IMG_5329.JPG',
        'images/Photos-3-002/IMG_5487.jpeg',
        'images/Photos-3-002/IMG_5721.jpeg',
        'images/Photos-3-002/IMG_5726.JPG',
        'images/Photos-3-002/IMG_5783.jpeg',
        'images/Photos-3-002/IMG_5855.jpeg',
        'images/Photos-3-002/IMG_8046.jpg',
        'images/Photos-3-002/IMG_9188.JPG.jpeg',
        'images/Photos-3-002/IMG_9202.jpg.jpeg',
        'images/Photos-3-002/PXL_20250408_231045850.jpg',
        'images/Photos-3-002/PXL_20250414_125858631.MP.jpg',
        'images/Photos-3-002/PXL_20250419_104638406.jpg',
        'images/Photos-3-002/PXL_20250528_005048038.jpg',
        'images/Photos-3-002/PXL_20250528_010741307.jpg',
        'images/Photos-3-002/PXL_20250529_205303182.jpg',
        'images/Photos-3-002/PXL_20250614_160523560.jpg',
        'images/Photos-3-002/PXL_20250615_193935321.jpg',
        'images/Photos-3-002/PXL_20250616_094926988.jpg',
        'images/Photos-3-002/PXL_20250616_111211728.jpg',
        'images/Photos-3-002/PXL_20250618_212240122.jpg',
        'images/Photos-3-002/PXL_20250619_142350971.jpg',
        'images/Photos-3-002/PXL_20250619_190346927.jpg',
        'images/Photos-3-002/PXL_20250703_220913610.jpg',
        'images/Photos-3-002/PXL_20250703_221306527.jpg',
        'images/Photos-3-002/PXL_20250704_221518906.jpg',
        'images/Photos-3-002/PXL_20250704_233309551.jpg',
        'images/Photos-3-002/PXL_20250704_235520237.jpg',
        'images/Photos-3-002/PXL_20250711_155117047.jpg',
        'images/Photos-3-002/PXL_20250711_210934160.jpg',
        'images/Photos-3-002/PXL_20250711_212825180.jpg',
        'images/Photos-3-002/PXL_20250718_020641535.jpg',
        'images/Photos-3-002/PXL_20250718_113727214.jpg',
        'images/Photos-3-002/PXL_20250720_121717918.jpg',
        'images/Photos-3-002/PXL_20250803_234219877.jpg',
        'images/Photos-3-002/PXL_20250803_235607054.jpg',
        'images/Photos-3-002/PXL_20250808_002528071.jpg',
        'images/Photos-3-002/PXL_20250808_004034746.jpg',
        'images/Photos-3-002/PXL_20250815_224714267.jpg',
        'images/Photos-3-002/PXL_20250816_233358317.jpg',
        'images/Photos-3-002/PXL_20250830_041955159.jpg',
        'images/Photos-3-002/PXL_20250831_002311546.jpg',
        'images/Photos-3-002/PXL_20250831_002535956.jpg',
        'images/Photos-3-002/PXL_20250831_002611010.jpg',
        'images/Photos-3-002/PXL_20250913_075029667.jpg',
        'images/Photos-3-002/PXL_20250919_053836667.jpg',
        'images/Photos-3-002/PXL_20250927_022819176.jpg',
        'images/Photos-3-002/WhatsApp Image 2025-06-23 at 11.48.53 PM.jpeg',
        // Also include Photos-3-001
        'images/Photos-3-001/DSC07637.JPG',
        'images/Photos-3-001/DSC07648.JPG',
        'images/Photos-3-001/DSC07656.JPG',
        'images/Photos-3-001/DSC07676.JPG',
        'images/Photos-3-001/DSC07700.JPG',
        'images/Photos-3-001/IMG_0117.JPG',
        'images/Photos-3-001/IMG_0134.JPG',
        'images/Photos-3-001/IMG_0147.JPG',
        'images/Photos-3-001/IMG_0154.JPG',
        'images/Photos-3-001/IMG_0163.JPG',
        'images/Photos-3-001/IMG_0164.JPG',
        'images/Photos-3-001/IMG_0173.JPG',
        'images/Photos-3-001/IMG_0177.JPG',
        'images/Photos-3-001/IMG_0179.JPG',
        'images/Photos-3-001/IMG_0202.JPG',
        'images/Photos-3-001/IMG_0205.JPG',
        'images/Photos-3-001/IMG_1604.JPG',
        'images/Photos-3-001/R1-08177-000A.JPG.jpeg',
        'images/Photos-3-001/R1-08177-003A.JPG.jpeg',
        'images/Photos-3-001/R1-08177-006A.JPG.jpeg',
        'images/Photos-3-001/R1-08177-011A.JPG.jpeg',
    ];

    // Shuffle and pick 6 random photos
    const shuffled = backgroundPhotos.sort(() => Math.random() - 0.5);
    const selectedPhotos = shuffled.slice(0, 6);

    // Apply to each background decoration element
    const photoElements = document.querySelectorAll('.scrapbook-decor[class*="photo-"]');
    photoElements.forEach((el, index) => {
        if (selectedPhotos[index]) {
            el.style.backgroundImage = `url('${selectedPhotos[index]}')`;
        }
    });
}

// ===== Shuffle Cards =====
function initShuffle() {
    const shuffleBtn = document.getElementById('shuffle-btn');
    shuffleBtn.addEventListener('click', shuffleCards);
}

function shuffleCards() {
    const container = document.getElementById('cards-container');
    const cards = Array.from(container.children);

    // Fisher-Yates shuffle
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    // Add shuffle animation
    cards.forEach((card, index) => {
        card.style.transition = 'transform 0.4s ease, opacity 0.3s ease';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8) rotate(' + (Math.random() - 0.5) * 30 + 'deg)';
    });

    // Re-append in new order with staggered animation
    setTimeout(() => {
        container.innerHTML = '';
        cards.forEach((card, index) => {
            container.appendChild(card);
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'rotate(' + (Math.random() - 0.5) * 5 + 'deg)';
            }, index * 30);
        });
    }, 300);
}

// ===== Intro Animation =====
function initIntroAnimation() {
    const overlay = document.getElementById('intro-overlay');
    const photoScatter = document.getElementById('photo-scatter');
    const mainContent = document.getElementById('main-content');

    // Your personal photos for the intro animation - randomly selected each load
    const allPhotos = [
        // Photos-3-001
        'images/Photos-3-001/20260117_030256000_iOS.jpg',
        'images/Photos-3-001/20260117_041324000_iOS.jpg',
        'images/Photos-3-001/20260117_041414000_iOS.jpg',
        'images/Photos-3-001/20260117_041428000_iOS.jpg',
        'images/Photos-3-001/20260117_042245000_iOS.jpg',
        'images/Photos-3-001/20260117_042340000_iOS.jpg',
        'images/Photos-3-001/20260117_042820000_iOS.jpg',
        'images/Photos-3-001/20260117_043011000_iOS.jpg',
        'images/Photos-3-001/20260117_043119000_iOS.jpg',
        'images/Photos-3-001/20260117_043224000_iOS.jpg',
        'images/Photos-3-001/20260117_043913000_iOS.jpg',
        'images/Photos-3-001/20260117_044024000_iOS.jpg',
        'images/Photos-3-001/20260117_044323000_iOS.jpg',
        'images/Photos-3-001/DSC07637.JPG',
        'images/Photos-3-001/DSC07648.JPG',
        'images/Photos-3-001/DSC07656.JPG',
        'images/Photos-3-001/DSC07676.JPG',
        'images/Photos-3-001/DSC07700.JPG',
        'images/Photos-3-001/IMG_0117.JPG',
        'images/Photos-3-001/IMG_0134.JPG',
        'images/Photos-3-001/IMG_0147.JPG',
        'images/Photos-3-001/IMG_0154.JPG',
        'images/Photos-3-001/IMG_0163.JPG',
        'images/Photos-3-001/IMG_0164.JPG',
        'images/Photos-3-001/IMG_0173.JPG',
        'images/Photos-3-001/IMG_0177.JPG',
        'images/Photos-3-001/IMG_0179.JPG',
        'images/Photos-3-001/IMG_0202.JPG',
        'images/Photos-3-001/IMG_0205.JPG',
        'images/Photos-3-001/IMG_1604.JPG',
        'images/Photos-3-001/IMG_2640.JPG.jpeg',
        'images/Photos-3-001/IMG_3652.JPG',
        'images/Photos-3-001/IMG_3654.JPG',
        'images/Photos-3-001/IMG_3680.JPG',
        'images/Photos-3-001/IMG_3683.JPG',
        'images/Photos-3-001/IMG_3706.JPG',
        'images/Photos-3-001/IMG_5582.JPG',
        'images/Photos-3-001/IMG_5613.JPG',
        'images/Photos-3-001/IMG_5788.jpg',
        'images/Photos-3-001/IMG_5827.JPG',
        'images/Photos-3-001/IMG_6044.JPEG',
        'images/Photos-3-001/IMG_6046.JPG',
        'images/Photos-3-001/IMG_6049.JPEG',
        'images/Photos-3-001/IMG_6056.JPG',
        'images/Photos-3-001/IMG_6063.JPEG',
        'images/Photos-3-001/IMG_6067.JPEG',
        'images/Photos-3-001/IMG_6074.JPEG',
        'images/Photos-3-001/IMG_6079.JPEG',
        'images/Photos-3-001/PXL_20251120_071633935.jpg',
        'images/Photos-3-001/PXL_20251221_212710758.jpg',
        'images/Photos-3-001/PXL_20251221_213611839.jpg',
        'images/Photos-3-001/PXL_20251226_194121827.MP.jpg',
        'images/Photos-3-001/PXL_20251226_222934307.jpg',
        'images/Photos-3-001/PXL_20251229_001046024.jpg',
        'images/Photos-3-001/PXL_20251229_001453125.MP.jpg',
        'images/Photos-3-001/PXL_20251229_003414482.jpg',
        'images/Photos-3-001/PXL_20251229_003432169.jpg',
        'images/Photos-3-001/PXL_20251229_003506897.jpg',
        'images/Photos-3-001/PXL_20251229_214322136.jpg',
        'images/Photos-3-001/PXL_20251230_002935940.jpg',
        'images/Photos-3-001/PXL_20251230_202303469.jpg',
        'images/Photos-3-001/PXL_20251230_211250809.jpg',
        'images/Photos-3-001/PXL_20251231_024044351.jpg',
        'images/Photos-3-001/PXL_20260118_234545517.jpg',
        'images/Photos-3-001/PXL_20260121_012541385.jpg',
        'images/Photos-3-001/PXL_20260124_000816738.jpg',
        'images/Photos-3-001/PXL_20260125_005813256.jpg',
        'images/Photos-3-001/PXL_20260125_010043937.jpg',
        'images/Photos-3-001/PXL_20260125_010049888.jpg',
        'images/Photos-3-001/PXL_20260125_210311149.jpg',
        'images/Photos-3-001/PXL_20260201_173424027.jpg',
        'images/Photos-3-001/PXL_20260201_173453042.jpg',
        'images/Photos-3-001/PXL_20260201_193543970.jpg',
        'images/Photos-3-001/PXL_20260202_000618122.jpg',
        'images/Photos-3-001/R1-08177-000A.JPG.jpeg',
        'images/Photos-3-001/R1-08177-003A.JPG.jpeg',
        'images/Photos-3-001/R1-08177-006A.JPG.jpeg',
        'images/Photos-3-001/R1-08177-011A.JPG.jpeg',
        'images/Photos-3-001/7023795306342428507.jpg.jpeg',
        'images/Photos-3-001/8136599717555507943.jpg.jpeg',
        // Photos-3-002 (unused photos for rotation)
        'images/Photos-3-002/100_0089.JPG',
        'images/Photos-3-002/100_0125.JPG',
        'images/Photos-3-002/100_0129.JPG',
        'images/Photos-3-002/100_0155.JPG',
        'images/Photos-3-002/100_0158.JPG',
        'images/Photos-3-002/100_1434.jpeg',
        'images/Photos-3-002/100_1493.JPG.jpeg',
        'images/Photos-3-002/100_4434.JPG',
        'images/Photos-3-002/100_4452.JPG',
        'images/Photos-3-002/1000009064.jpg',
        'images/Photos-3-002/101_0238.JPG',
        'images/Photos-3-002/20250406_110632-b9b1.jpg',
        'images/Photos-3-002/20250407_035822-7ed5.jpg',
        'images/Photos-3-002/20250407_051817-de24.jpg',
        'images/Photos-3-002/20250407_112531-b0f9.jpg',
        'images/Photos-3-002/20250630_011136-b3da.jpg',
        'images/Photos-3-002/b6317c69-c4dd-460f-9cfa-7353131f7689.jpg',
        'images/Photos-3-002/ConfettiSideWall-20250926200125181_print.jpg',
        'images/Photos-3-002/DSC_0018.JPG',
        'images/Photos-3-002/DSC_0298.JPG',
        'images/Photos-3-002/DSC_0713.JPG',
        'images/Photos-3-002/DSC_0722.JPG',
        'images/Photos-3-002/DSC_0739.JPG',
        'images/Photos-3-002/DSC_0742.JPG',
        'images/Photos-3-002/DSC_1001.JPG',
        'images/Photos-3-002/DSC_1022.JPG',
        'images/Photos-3-002/DSC_1030.JPG',
        'images/Photos-3-002/DSC03487.JPG',
        'images/Photos-3-002/DSC03540.JPG',
        'images/Photos-3-002/DSC03594.JPG',
        'images/Photos-3-002/DSC03884.JPG',
        'images/Photos-3-002/IMG_1571.JPG',
        'images/Photos-3-002/IMG_20250210_205152.jpg',
        'images/Photos-3-002/IMG_20250628_201018.jpg',
        'images/Photos-3-002/IMG_20250727_185754.jpg',
        'images/Photos-3-002/IMG_20250828_151106.jpg',
        'images/Photos-3-002/IMG_20250828_151130.jpg',
        'images/Photos-3-002/IMG_2205.JPG',
        'images/Photos-3-002/IMG_2275.JPG',
        'images/Photos-3-002/IMG_3265.JPG',
        'images/Photos-3-002/IMG_3302.JPG',
        'images/Photos-3-002/IMG_3442.JPG',
        'images/Photos-3-002/IMG_3566.JPG',
        'images/Photos-3-002/IMG_4273.jpg',
        'images/Photos-3-002/IMG_4911.JPG',
        'images/Photos-3-002/IMG_4935.JPG',
        'images/Photos-3-002/IMG_4937.JPG',
        'images/Photos-3-002/IMG_4941.JPG',
        'images/Photos-3-002/IMG_5329.JPG',
        'images/Photos-3-002/IMG_5376.jpeg',
        'images/Photos-3-002/IMG_5487.jpeg',
        'images/Photos-3-002/IMG_5689.jpeg',
        'images/Photos-3-002/IMG_5721.jpeg',
        'images/Photos-3-002/IMG_5726.JPG',
        'images/Photos-3-002/IMG_5783.jpeg',
        'images/Photos-3-002/IMG_5855.jpeg',
        'images/Photos-3-002/IMG_8012.jpg',
        'images/Photos-3-002/IMG_8046.jpg',
        'images/Photos-3-002/IMG_9188.JPG.jpeg',
        'images/Photos-3-002/IMG_9202.jpg.jpeg',
        'images/Photos-3-002/PXL_20250408_231045850.jpg',
        'images/Photos-3-002/PXL_20250414_125858631.MP.jpg',
        'images/Photos-3-002/PXL_20250419_104638406.jpg',
        'images/Photos-3-002/PXL_20250528_005048038.jpg',
        'images/Photos-3-002/PXL_20250528_010741307.jpg',
        'images/Photos-3-002/PXL_20250529_204601886.jpg',
        'images/Photos-3-002/PXL_20250529_205303182.jpg',
        'images/Photos-3-002/PXL_20250614_160523560.jpg',
        'images/Photos-3-002/PXL_20250615_193935321.jpg',
        'images/Photos-3-002/PXL_20250616_094926988.jpg',
        'images/Photos-3-002/PXL_20250616_111211728.jpg',
        'images/Photos-3-002/PXL_20250618_212240122.jpg',
        'images/Photos-3-002/PXL_20250619_142350971.jpg',
        'images/Photos-3-002/PXL_20250619_181129503.jpg',
        'images/Photos-3-002/PXL_20250619_190346927.jpg',
        'images/Photos-3-002/PXL_20250624_230357960.jpg',
        'images/Photos-3-002/PXL_20250703_220913610.jpg',
        'images/Photos-3-002/PXL_20250703_221306527.jpg',
        'images/Photos-3-002/PXL_20250704_221518906.jpg',
        'images/Photos-3-002/PXL_20250704_233309551.jpg',
        'images/Photos-3-002/PXL_20250704_235520237.jpg',
        'images/Photos-3-002/PXL_20250705_005937045.jpg',
        'images/Photos-3-002/PXL_20250711_210934160.jpg',
        'images/Photos-3-002/PXL_20250711_212825180.jpg',
        'images/Photos-3-002/PXL_20250718_020641535.jpg',
        'images/Photos-3-002/PXL_20250718_113727214.jpg',
        'images/Photos-3-002/PXL_20250720_121717918.jpg',
        'images/Photos-3-002/PXL_20250725_205518811.jpg',
        'images/Photos-3-002/PXL_20250803_234219877.jpg',
        'images/Photos-3-002/PXL_20250803_235607054.jpg',
        'images/Photos-3-002/PXL_20250808_002528071.jpg',
        'images/Photos-3-002/PXL_20250808_004034746.jpg',
        'images/Photos-3-002/PXL_20250815_221902028.jpg',
        'images/Photos-3-002/PXL_20250815_224714267.jpg',
        'images/Photos-3-002/PXL_20250816_233358317.jpg',
        'images/Photos-3-002/PXL_20250830_041955159.jpg',
        'images/Photos-3-002/PXL_20250831_002311546.jpg',
        'images/Photos-3-002/PXL_20250831_002535956.jpg',
        'images/Photos-3-002/PXL_20250831_002611010.jpg',
        'images/Photos-3-002/PXL_20250913_075029667.jpg',
        'images/Photos-3-002/PXL_20250919_053836667.jpg',
        'images/Photos-3-002/PXL_20250920_225759901.jpg',
        'images/Photos-3-002/PXL_20250927_022819176.jpg',
        'images/Photos-3-002/WhatsApp Image 2025-06-23 at 11.48.53 PM.jpeg',
    ];

    // Shuffle and pick random photos for this load
    const shuffled = allPhotos.sort(() => Math.random() - 0.5);
    const introPhotos = shuffled.slice(0, 15);

    // Create scattered photos positioned AROUND the center (not covering tagline)
    const numPhotos = 15;
    const photos = [];

    // Define zones around the center - avoiding the middle where tagline appears
    const zones = [
        // Top left corner
        { xMin: 3, xMax: 25, yMin: 5, yMax: 35 },
        // Top right corner
        { xMin: 75, xMax: 97, yMin: 5, yMax: 35 },
        // Bottom left corner
        { xMin: 3, xMax: 25, yMin: 60, yMax: 90 },
        // Bottom right corner
        { xMin: 75, xMax: 97, yMin: 60, yMax: 90 },
        // Left side (middle height)
        { xMin: 0, xMax: 18, yMin: 35, yMax: 65 },
        // Right side (middle height)
        { xMin: 82, xMax: 100, yMin: 35, yMax: 65 },
        // Top center (above tagline)
        { xMin: 30, xMax: 70, yMin: 3, yMax: 30 },
        // Bottom center (below tagline)
        { xMin: 30, xMax: 70, yMin: 68, yMax: 95 },
    ];

    // Scatter directions for each photo (for blown animation)
    const scatterDirections = [
        'scatter-left',
        'scatter-right',
        'scatter-up',
        'scatter-down',
        'scatter-up-left',
        'scatter-up-right',
        'scatter-down-left',
        'scatter-down-right'
    ];

    for (let i = 0; i < numPhotos; i++) {
        const photo = document.createElement('div');
        photo.className = 'scatter-photo';

        // Pick a zone (distribute evenly, then random)
        const zone = zones[i % zones.length];
        const x = zone.xMin + Math.random() * (zone.xMax - zone.xMin);
        const y = zone.yMin + Math.random() * (zone.yMax - zone.yMin);
        const rotation = -25 + Math.random() * 50; // -25 to 25 degrees

        photo.style.left = `${x}%`;
        photo.style.top = `${y}%`;
        photo.style.transform = `rotate(${rotation}deg)`;

        // Assign a scatter direction for the blown animation
        const direction = scatterDirections[i % scatterDirections.length];
        photo.dataset.scatter = direction;

        // Use your personal photos
        photo.style.backgroundImage = `url('${introPhotos[i % introPhotos.length]}')`;
        photo.style.backgroundSize = 'cover';
        photo.style.backgroundPosition = 'center';

        photoScatter.appendChild(photo);
        photos.push(photo);
    }

    // Stagger photos appearing
    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.classList.add('visible');
        }, 100 + index * 100);
    });

    // After photos appear and tagline shows, blow them away in different directions
    setTimeout(() => {
        photos.forEach((photo, index) => {
            setTimeout(() => {
                photo.classList.add('blown');
                photo.classList.add(photo.dataset.scatter);
            }, index * 60);
        });

        // Hide overlay and show main content
        setTimeout(() => {
            overlay.classList.add('hidden');
            mainContent.classList.add('visible');
        }, 1000);
    }, 4000);
}

// ===== Initialize Cards =====
function initCards() {
    const container = document.getElementById('cards-container');

    cardsData.forEach((card, index) => {
        const cardEl = createCard(card, index);
        container.appendChild(cardEl);
    });
}

function createCard(cardData, index) {
    const card = document.createElement('div');

    // Assign random size class
    const sizes = ['size-small', 'size-medium', 'size-large', 'size-wide', 'size-tall'];
    const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];

    card.className = `card ${sizeClass}`;
    card.draggable = true;
    card.dataset.id = cardData.id;
    card.dataset.category = cardData.category;
    card.dataset.size = sizeClass;
    card.dataset.type = cardData.type;
    if (cardData.subpage) card.dataset.subpage = cardData.subpage;

    // Random color for when activated
    const colorIndex = index % cardColors.length;

    const imageStyle = cardData.image ? `background-image: url('${cardData.image}');` : '';

    card.innerHTML = `
        <div class="card-image" data-color="${cardColors[colorIndex]}" style="${imageStyle}"></div>
        <div class="card-content">
            <div class="card-title">${cardData.title}</div>
            <div class="card-category">${cardData.category}</div>
        </div>
    `;

    // Drag events
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);

    // Click to interact (remove grayscale)
    card.addEventListener('click', () => {
        card.classList.add('interacted');
        const imageEl = card.querySelector('.card-image');
        imageEl.style.filter = 'grayscale(0%)';

        // Handle different card types
        if (cardData.type === 'subpage' && cardData.subpage) {
            openSubpage(cardData.subpage);
        } else if (cardData.type === 'music') {
            showMusicModal();
        } else {
            showCardModal(cardData);
        }
    });

    // Touch support for mobile
    card.addEventListener('touchstart', handleTouchStart, { passive: false });
    card.addEventListener('touchmove', handleTouchMove, { passive: false });
    card.addEventListener('touchend', handleTouchEnd);

    return card;
}

// ===== Sub-page Modal =====
function initSubpageModal() {
    const overlay = document.getElementById('subpage-overlay');
    const closeBtn = document.getElementById('subpage-close');

    closeBtn.addEventListener('click', closeSubpage);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeSubpage();
        }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
            closeSubpage();
        }
    });
}

function openSubpage(pageName) {
    const overlay = document.getElementById('subpage-overlay');
    const iframe = document.getElementById('subpage-frame');
    iframe.src = pageName;
    overlay.classList.remove('hidden');
}

function closeSubpage() {
    const overlay = document.getElementById('subpage-overlay');
    const iframe = document.getElementById('subpage-frame');
    overlay.classList.add('hidden');
    iframe.src = '';
}

// ===== Sticky Notes =====
function initStickyNotes() {
    const addBtn = document.getElementById('add-note-btn');
    addBtn.addEventListener('click', createStickyNote);
}

let noteZIndex = 100;

function createStickyNote() {
    const dropZone = document.getElementById('drop-zone');
    const note = document.createElement('div');
    note.className = 'sticky-note';

    // Random color
    const color = stickyNoteColors[Math.floor(Math.random() * stickyNoteColors.length)];
    note.style.background = color;

    // Random position near center
    const rect = dropZone.getBoundingClientRect();
    const x = Math.random() * (rect.width - 150) + 20;
    const y = Math.random() * (rect.height - 150) + 20;
    const rotation = (Math.random() - 0.5) * 10;

    note.style.left = `${x}px`;
    note.style.top = `${y}px`;
    note.style.transform = `rotate(${rotation}deg)`;
    note.style.zIndex = ++noteZIndex;

    note.innerHTML = `
        <button class="sticky-note-delete">&times;</button>
        <textarea class="sticky-note-content" placeholder="write something..."></textarea>
    `;

    // Delete button
    note.querySelector('.sticky-note-delete').addEventListener('click', () => {
        note.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        note.style.opacity = '0';
        note.style.transform += ' scale(0.8)';
        setTimeout(() => note.remove(), 200);
    });

    // Make draggable
    makeStickyNoteDraggable(note);

    // Focus textarea on click
    note.querySelector('.sticky-note-content').addEventListener('focus', () => {
        note.style.zIndex = ++noteZIndex;
    });

    dropZone.appendChild(note);

    // Focus the textarea
    note.querySelector('.sticky-note-content').focus();
}

function makeStickyNoteDraggable(note) {
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    note.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') return;

        e.preventDefault();
        isDragging = true;
        note.classList.add('dragging');
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = note.offsetLeft;
        initialTop = note.offsetTop;
        note.style.zIndex = ++noteZIndex;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        note.style.left = `${initialLeft + dx}px`;
        note.style.top = `${initialTop + dy}px`;
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            note.classList.remove('dragging');
        }
    });
}

// ===== Drag & Drop =====
let draggedCard = null;
let touchStartX, touchStartY;
let cardClone = null;

function handleDragStart(e) {
    draggedCard = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.id);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    draggedCard = null;
}

function handleTouchStart(e) {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    draggedCard = this;

    // Create clone for visual feedback
    cardClone = this.cloneNode(true);
    cardClone.style.position = 'fixed';
    cardClone.style.zIndex = '1000';
    cardClone.style.pointerEvents = 'none';
    cardClone.style.opacity = '0.8';
    cardClone.style.transform = 'scale(1.05) rotate(5deg)';
    document.body.appendChild(cardClone);

    this.classList.add('dragging');
}

function handleTouchMove(e) {
    e.preventDefault();
    if (!cardClone) return;

    const touch = e.touches[0];
    cardClone.style.left = `${touch.clientX - 90}px`;
    cardClone.style.top = `${touch.clientY - 120}px`;

    // Check if over drop zone
    const dropZone = document.getElementById('drop-zone');
    const rect = dropZone.getBoundingClientRect();

    if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
        touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
        dropZone.classList.add('drag-over');
    } else {
        dropZone.classList.remove('drag-over');
    }
}

function handleTouchEnd(e) {
    if (!draggedCard || !cardClone) return;

    const dropZone = document.getElementById('drop-zone');
    dropZone.classList.remove('drag-over');

    // Check if ended over drop zone
    const touch = e.changedTouches[0];
    const rect = dropZone.getBoundingClientRect();

    if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
        touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
        placeCardOnWall(draggedCard, touch.clientX - rect.left, touch.clientY - rect.top);
    }

    draggedCard.classList.remove('dragging');
    document.body.removeChild(cardClone);
    cardClone = null;
    draggedCard = null;
}

// ===== Drop Zone =====
function initDropZone() {
    const dropZone = document.getElementById('drop-zone');

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');

        if (draggedCard) {
            const rect = dropZone.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            placeCardOnWall(draggedCard, x, y);
        }
    });
}

// Track z-index for stacking
let currentZIndex = 1;

function getPlacedCards() {
    return Array.from(document.querySelectorAll('#drop-zone .card.placed'));
}

// Track original corkboard height
let originalDropZoneHeight = null;
const maxExpansion = 2; // Can expand up to 2x

function expandCorkboardIfNeeded() {
    const dropZone = document.getElementById('drop-zone');
    const placedCards = getPlacedCards();

    if (!originalDropZoneHeight) {
        originalDropZoneHeight = dropZone.offsetHeight;
    }

    // Find the lowest card
    let maxBottom = 0;
    placedCards.forEach(card => {
        const cardBottom = card.offsetTop + card.offsetHeight + 20;
        if (cardBottom > maxBottom) maxBottom = cardBottom;
    });

    // Expand if needed, up to 2x original
    const maxHeight = originalDropZoneHeight * maxExpansion;
    if (maxBottom > dropZone.offsetHeight && dropZone.offsetHeight < maxHeight) {
        dropZone.style.minHeight = `${Math.min(maxBottom, maxHeight)}px`;
    }
}

function placeCardOnWall(card, x, y) {
    const dropZone = document.getElementById('drop-zone');
    dropZone.classList.add('has-cards');

    // Clone the card for the wall
    const placedCard = card.cloneNode(true);
    placedCard.classList.add('placed');
    placedCard.classList.remove('dragging');

    // Add random size variation
    const sizes = ['placed-small', 'placed-medium', 'placed-medium', 'placed-large'];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    placedCard.classList.add(randomSize);

    // Place exactly where user's cursor is (centered under cursor)
    const finalX = x - 70;
    const finalY = y - 52;

    placedCard.style.left = `${finalX}px`;
    placedCard.style.top = `${finalY}px`;
    placedCard.style.position = 'absolute';

    // Random rotation for organic feel (-6 to 6 degrees)
    const rotation = (Math.random() - 0.5) * 12;
    placedCard.style.transform = `rotate(${rotation}deg)`;

    // Increment z-index so newer cards stack on top
    currentZIndex++;
    placedCard.style.zIndex = currentZIndex;

    // Activate color - keep the image, just remove grayscale
    const imageEl = placedCard.querySelector('.card-image');
    imageEl.style.filter = 'grayscale(0%)';

    // Make it draggable within the wall
    placedCard.draggable = false;
    makeDraggableOnWall(placedCard);

    // Add click handler - bring to front on click
    const cardId = parseInt(placedCard.dataset.id);
    const cardData = cardsData.find(c => c.id === cardId);
    placedCard.addEventListener('click', (e) => {
        if (!placedCard.classList.contains('wall-dragging')) {
            // Bring to front
            currentZIndex++;
            placedCard.style.zIndex = currentZIndex;

            // Handle different card types
            if (cardData.type === 'subpage' && cardData.subpage) {
                openSubpage(cardData.subpage);
            } else if (cardData.type === 'music') {
                showMusicModal();
            } else {
                showCardModal(cardData);
            }
        }
    });

    dropZone.appendChild(placedCard);

    // Check if corkboard needs to expand
    expandCorkboardIfNeeded();

    // Also activate the original card
    card.classList.add('interacted');
    const originalImage = card.querySelector('.card-image');
    originalImage.style.filter = 'grayscale(0%)';
}

function makeDraggableOnWall(card) {
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    card.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        card.classList.add('wall-dragging');
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = card.offsetLeft;
        initialTop = card.offsetTop;
        // Bring to front while dragging
        currentZIndex++;
        card.style.zIndex = currentZIndex + 100;
        card.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        card.style.left = `${initialLeft + dx}px`;
        card.style.top = `${initialTop + dy}px`;
    });

    document.addEventListener('mouseup', (e) => {
        if (isDragging) {
            isDragging = false;

            // Check if card is outside the drop zone
            const dropZone = document.getElementById('drop-zone');
            const dropRect = dropZone.getBoundingClientRect();
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;

            // If card center is outside drop zone, remove it with fade animation
            if (cardCenterX < dropRect.left || cardCenterX > dropRect.right ||
                cardCenterY < dropRect.top || cardCenterY > dropRect.bottom) {
                card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                card.style.opacity = '0';
                card.style.transform += ' scale(0.8)';
                setTimeout(() => {
                    card.remove();
                    // Check if any cards left
                    if (getPlacedCards().length === 0) {
                        dropZone.classList.remove('has-cards');
                    }
                }, 300);
                return;
            }

            // Slight rotation change when dropped
            const newRotation = (Math.random() - 0.5) * 14;
            card.style.transform = `rotate(${newRotation}deg)`;
            setTimeout(() => {
                card.classList.remove('wall-dragging');
            }, 100);
            // Keep at elevated z-index
            currentZIndex++;
            card.style.zIndex = currentZIndex;
            card.style.cursor = 'grab';
        }
    });
}

// ===== Category Buttons =====
function initCategoryButtons() {
    const buttons = document.querySelectorAll('.category-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;

            if (category === 'whimsical') {
                // Pick a random card/link
                const randomCard = cardsData[Math.floor(Math.random() * cardsData.length)];
                if (randomCard.type === 'subpage' && randomCard.subpage) {
                    openSubpage(randomCard.subpage);
                } else if (randomCard.type === 'music') {
                    showMusicModal();
                } else {
                    showCardModal(randomCard);
                }
            } else {
                // Show category content
                showCategoryModal(category);
            }
        });
    });
}

// ===== Modal =====
function initModal() {
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('modal-close');

    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function showCategoryModal(category) {
    const overlay = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-body');

    const content = categoryContent[category];
    if (content) {
        body.innerHTML = content.content;
    }

    overlay.classList.remove('hidden');
}

function showCardModal(cardData) {
    const overlay = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-body');

    // Use custom content if provided, otherwise show placeholder
    const contentHtml = cardData.content
        ? cardData.content
        : `<p>This is a placeholder for the "${cardData.title}" content. Edit the "content" field in data.js to customize this!</p>`;

    body.innerHTML = `
        <h3>${cardData.title}</h3>
        <p class="modal-category">${cardData.category}</p>
        <div class="modal-card-content">
            ${contentHtml}
        </div>
        ${cardData.type === 'link' && cardData.link !== '#' ? `<a href="${cardData.link}" target="_blank" class="modal-link">Visit Link →</a>` : ''}
    `;

    overlay.classList.remove('hidden');
}

function showMusicModal() {
    const overlay = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-body');

    let musicContent = '';

    // Check if Spotify embed is provided
    if (musicData.spotifyEmbed && musicData.spotifyEmbed.trim() !== '') {
        // Convert regular Spotify URL to embed URL if needed
        let embedUrl = musicData.spotifyEmbed;
        if (embedUrl.includes('open.spotify.com') && !embedUrl.includes('/embed/')) {
            embedUrl = embedUrl.replace('open.spotify.com/', 'open.spotify.com/embed/');
        }

        musicContent = `
            <div class="spotify-embed-container">
                <iframe
                    src="${embedUrl}?utm_source=generator&theme=0"
                    width="100%"
                    height="380"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    style="border-radius: 12px;">
                </iframe>
            </div>
        `;
    } else {
        // Fallback to CD graphics with Spotify links
        const cdsHtml = musicData.songs.map(song => `
            <div class="cd-item" ${song.spotifyUrl ? `onclick="window.open('${song.spotifyUrl}', '_blank')" style="cursor: pointer;"` : ''}>
                <div class="cd-case">
                    <div class="cd-disc">
                        <div class="cd-album-art" style="background-image: url('${song.albumArt}')"></div>
                        <div class="grooves"></div>
                    </div>
                </div>
                <div class="cd-info">
                    <div class="cd-title">${song.title}</div>
                    <div class="cd-artist">${song.artist}</div>
                </div>
            </div>
        `).join('');

        musicContent = `<div class="music-modal-container">${cdsHtml}</div>`;
    }

    const profileLink = musicData.spotifyProfile
        ? `<a href="${musicData.spotifyProfile}" target="_blank" class="spotify-profile-link">view full profile on spotify →</a>`
        : '';

    body.innerHTML = `
        <h3>now playing</h3>
        <p class="modal-category">${musicData.month}</p>
        ${musicContent}
        ${profileLink}
    `;

    overlay.classList.remove('hidden');
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.add('hidden');
}

// Open a card by its title (used for links in about section)
function openCardByTitle(title) {
    const cardData = cardsData.find(c => c.title.toLowerCase() === title.toLowerCase());
    if (!cardData) return;

    // Close current modal first
    closeModal();

    // Small delay to let modal close, then open the card
    setTimeout(() => {
        if (cardData.type === 'subpage' && cardData.subpage) {
            openSubpage(cardData.subpage);
        } else if (cardData.type === 'music') {
            showMusicModal();
        } else {
            showCardModal(cardData);
        }
    }, 100);
}
