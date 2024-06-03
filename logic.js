document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById("slider");
    const slidesContainer = document.getElementById("slides-container");
    const paginationDots = document.getElementById("pagination-dots");

    let currentPage = 0;
    let totalPages = 0;

    const calculateTotalPages = () => {
        const slider = document.getElementById("slider");
        const pageWidth = slider.clientWidth;
        const totalWidth = slider.scrollWidth;
        totalPages = Math.ceil(totalWidth / pageWidth);
    };
    const renderPaginationDots = () => {
        const paginationDotsContainer = document.getElementById('pagination-dots');
        paginationDotsContainer.innerHTML = '';
    
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('span');
            dot.classList.add('pagination-dot', 'mx-1', 'rounded-circle', 'bg-secondary');
            dot.style.width = '10px';
            dot.style.height = '10px';
            dot.style.display = 'inline-block';
            dot.style.cursor = 'pointer';
            
            if (i === currentPage) {
                dot.classList.add('bg-danger');
            }
    
            dot.addEventListener('click', () => {
                currentPage = i;
                updateDots();
                // Scroll to the corresponding slide
                slider.scrollTo({
                    left: pageWidth * currentPage,
                    behavior: 'smooth'
                });
            });
    
            paginationDotsContainer.appendChild(dot);
        }
    };
    const updateDots = () => {
        const dots = document.querySelectorAll('.pagination-dot');
        dots.forEach((dot, index) => {
            if (index === currentPage) {
                dot.classList.add('bg-danger');
                dot.classList.remove('bg-secondary');
            } else {
                dot.classList.add('bg-secondary');
                dot.classList.remove('bg-danger');
            }
        });
    };
    
    const handleScroll = () => {
        const slider = document.getElementById("slider");
        const pageWidth = slider.clientWidth;
        const scrollLeft = slider.scrollLeft;
        currentPage = Math.round(scrollLeft / pageWidth);
        updateDots();
    };
    
    const init = () => {
        addCards();
        const slider = document.getElementById("slider");
        slider.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', () => {
            calculateTotalPages();
            renderPaginationDots();
        });
    };

    slider.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", calculateTotalPages);

    const data = [
        { image: "../assets/card_1.png", title: "WEB DEVELOPMENT" },
        { image: "../assets/card_2.png", title: "HEADING CARD 2" },
        { image: "../assets/card_1.png", title: "WEB DEVELOPMENT" },
        { image: "../assets/card_3.png", title: "HEADING CARD 3" },
        { image: "../assets/card_2.png", title: "HEADING CARD 2" },
        { image: "../assets/card_3.png", title: "HEADING CARD 3" },
        { image: "../assets/card_1.png", title: "WEB DEVELOPMENT" },
        { image: "../assets/card_2.png", title: "HEADING CARD 2" },
        { image: "../assets/card_3.png", title: "HEADING CARD 3" },
        { image: "../assets/card_1.png", title: "WEB DEVELOPMENT" }
    ];

    const addCards = () => {
        const slidesContainer = document.getElementById('slides-container');
        data.forEach((item, index) => {
            // Create card container
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('flex-shrink-0', 'position-relative', 'rounded-xl', 'overflow-hidden', 'm-2');
            cardDiv.style.width = '15rem';
            cardDiv.style.height = '20rem';
            
            // Create card content
            const cardContent = document.createElement('div');
            cardContent.classList.add('d-flex', 'flex-column', 'align-items-center', 'justify-content-center', 'bg-danger', 'position-absolute', 'top-0', 'start-0', 'w-100', 'h-100', 'gap-3', 'px-2');
            cardContent.style.display = 'none';
    
            const iconImg = document.createElement('img');
            iconImg.src = "../assets/icon.png";
            iconImg.alt = "icon";
            iconImg.style.width = '3rem';
    
            const titlePara = document.createElement('p');
            titlePara.classList.add('text-white', 'font-bold');
            titlePara.innerText = item.title;
    
            const descriptionPara = document.createElement('p');
            descriptionPara.classList.add('text-center', 'text-white');
            descriptionPara.innerText = 'Dolore cupidatat qui ipsum duis cupidatat ex labore ullamco ut elit.';
    
            const link = document.createElement('a');
            link.href = 'https://fylehq.com';
            link.target = '_blank';
    
            const linkDiv = document.createElement('div');
            linkDiv.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'px-2', 'py-2', 'rounded-sm', 'bg-white', 'text-danger', 'select-none', 'cursor-pointer', 'hover-shadow-lg');
            linkDiv.innerHTML = 'READ MORE <i class="fas fa-arrow-right"></i>'; // Assuming you have FontAwesome or a similar library
    
            link.appendChild(linkDiv);
            cardContent.appendChild(iconImg);
            cardContent.appendChild(titlePara);
            cardContent.appendChild(descriptionPara);
            cardContent.appendChild(link);
    
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = `Slide ${index}`;
            img.classList.add('w-100', 'h-100', 'object-cover');
    
            cardDiv.appendChild(img);
            cardDiv.appendChild(cardContent);
    
            cardDiv.addEventListener('mouseover', () => {
                img.style.display = 'none';
                cardContent.style.display = 'flex';
            });
    
            cardDiv.addEventListener('mouseout', () => {
                img.style.display = 'block';
                cardContent.style.display = 'none';
            });
    
            slidesContainer.appendChild(cardDiv);
        });
    };
    init();
    addCards();
    calculateTotalPages();
});

const dataImg = [
    {
        id: 1,
        image: '../assets/image_OP1.png',
        heading: "Genderless Kei - Japan's Hot",
        desc: "Set to launch on the manufacturer's new A330neo aircraft in 2024. Set to launch on the manufacturer's new A330neo aircraft in 2024",
        animation: "fade-down"
    },
    {
        id: 2,
        image: '../assets/receipe_1.jpg',
        heading: "Better Strategy & Quality",
        desc: "Set to launch on the manufacturer's new A330neo aircraft in 2024. Set to launch on the manufacturer's new A330neo aircraft in 2024",
        animation: "fade-left"
    },
    {
        id: 3,
        image: '../assets/receipe_3.jpg',
        heading: "Genderless Kei - Japan's Hot",
        desc: "Set to launch on the manufacturer's new A330neo aircraft in 2024. Set to launch on the manufacturer's new A330neo aircraft in 2024",
        animation: "slide-up"
    },
];

let currentImgId = dataImg[0].id;
        document.addEventListener('DOMContentLoaded', () => {
            const mainImage = document.getElementById('mainImage');
            const cardsContainer = document.getElementById('cardsContainer');

            mainImage.src = dataImg[0].image;

            dataImg.forEach(item => {
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('project-card', 'mb-3');
                cardDiv.setAttribute('data-aos', item.animation);

                cardDiv.innerHTML = `
                    <p class="font-weight-bold text-uppercase">${item.heading}</p>
                    <p>${item.desc}</p>
                `;

                cardDiv.addEventListener('mouseover', () => {
                    mainImage.src = item.image;
                    mainImage.style.transform = 'scale(1.05)';
                });

                cardDiv.addEventListener('mouseout', () => {
                    mainImage.style.transform = 'scale(1)';
                });

                cardsContainer.appendChild(cardDiv);
            });
        });

        const openModal = () => {
            document.getElementById('myModal').style.display = 'block';
            // document.body.classList.add('modal-opened');
          };
        
          const closeModal = () => {
            document.getElementById('myModal').style.display = 'none';
            // document.body.classList.remove('modal-opened');
          };
        
          const handleSubmit = (event) => {
            // Implement your form submission logic here
            event.preventDefault(); // Prevent form submission for this example
            console.log('Form submitted');
          };
        
          const handleCheckboxChange = (checkbox) => {
            // Implement your checkbox change logic here
            console.log('Checkbox checked: ', checkbox.checked);
          };