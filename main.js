document.addEventListener('DOMContentLoaded', () => {
    const projectTabs = document.querySelectorAll('.projects-info-header span');
    const contentContainer = document.querySelector('.projects-content');

    const deviceDescriptions = {
        paula: {
            laptop: 
            `
                <i><h3>Barangay Pinagsanjan Information System</h3></i>
                <p><b>About the System:</b><br>Information system integrates very well personnel with software-based platform to manage and distribute data or information. Set of information that is organized and recorded to produce data that may be utilized in the future.
                <br>One of the local government facilities in Pagsanjan, Laguna, is the barangay hall. This is the venue the barangay technically needed the facilities to be assisted their colleagues and to be more functional in using technology. The Information of the community will surely deliver easily when they are the linkage for the assistance we need. In actuality, barangay authorities play a key role in both the growth of the barangay and the problem-solving of its residents.</p>
                    <div class="tech-used">
                        <h4 style="grid-column: span 2;">Technologies Used:</h4>
                        <div class="tech-item">
                            <img src="logo/java.png" alt="Java Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>Java</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/mysql.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>MYSQL</span>
                        </div>
                        <!-- Add more tech items here -->
                    </div>
            `,
            smartphone: `
                <i><h3>Idol Clothing Billing System</h3></i>
                <p><b>About the System:</b><br>a Java-based application designed to streamline and automate the billing process for a clothing business. It allows users to efficiently manage customer transactions, generate accurate bills, and keep track of sales records, helping improve the overall workflow and customer service.</p>
                    <div class="tech-used">
                        <h4 style="grid-column: span 2;">Technologies Used:</h4>
                        <div class="tech-item">
                            <img src="logo/java.png" alt="Java Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>Java</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/mysql.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>MYSQL</span>
                        </div>
                        <!-- Add more tech items here -->
                    </div>
            `
        },
        cyril: {
            laptop: `
                <i><h3>Mobile Shopee (E Commerce)</h3></i>
                <p><b>About the System:</b><br>Mobile Shopee is your one-stop eCommerce platform for buying and selling smartphones, specializing in iPhone and Samsung devices. Whether you're looking to purchase the latest models or sell your pre-owned phones</p>
                    <div class="tech-used">
                        <h4 style="grid-column: span 2;">Technologies Used:</h4>
                        <div class="tech-item">
                            <img src="logo/html.png" alt="Java Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>HTML</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/css-3.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>CSS</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/js.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>Javascript</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/python.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>Python</span>
                        </div>
                        <!-- Add more tech items here -->
                    </div>
            `,
            smartphone: `
                <i><h3>Dear Diary, Let’s Spill the Tea (app/web) </h3></i>
                <p><b>About the System:</b><br>Dear Diary, Let’s Spill the Tea is a comprehensive journaling app designed to offer a structured yet creative space for reflection. It features a journaling page for daily entries, a moodboard for visual expression, a to-do list for task management, and an integrated calendar to organize events, providing users with an efficient and engaging way to document and plan their lives</p>
                    <div class="tech-used">
                        <h4 style="grid-column: span 2;">Technologies Used:</h4>
                        <div class="tech-item">
                            <img src="logo/html.png" alt="Java Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>HTML</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/css-3.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>CSS</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/php.png" alt="Python Logo" style="width: 45px; height: 40px; margin-right: 10px;" />
                            <span>PHP</span>
                        </div>
                        <!-- Add more tech items here -->
                    </div>
            `
        },
        kyla: {
            laptop: `
            <i><h3>Mobile Shopee</h3></i>
            <p><b>About the System:</b><br>Mobile Shopee (M-Shopee) is an e-commerce website focused on buying and selling mobile phones. Just like a typical online shopping platform, users can browse products, add items to their cart, and proceed to checkout for a seamless purchasing experience. Other features include user registration and login, product search and filtering, order tracking, and a secure payment system. Sellers can also list their phones for sale, manage their inventory, and communicate with potential buyers.</p>
                <div class="tech-used">
                    <h4 style="grid-column: span 2;">Technologies Used:</h4>
                    <div class="tech-item">
                        <img src="logo/html.png" alt="Java Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                        <span>HTML</span>
                    </div>
                    <div class="tech-item">
                        <img src="logo/css-3.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                        <span>CSS</span>
                    </div>
                    <div class="tech-item">
                        <img src="logo/js.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                        <span>Javascript</span>
                    </div>
                    <div class="tech-item">
                        <img src="logo/python.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                        <span>Python</span>
                    </div>
                    <!-- Add more tech items here -->
                </div>
        `,
        smartphone: `
            <i><h3>Dear Diary, Let's Spill the Tea!</h3></i>
            <p><b>About the System:</b><br>Dear Diary, Let’s Spill the Tea is a web and mobile app project designed to make journaling faster, easier, and more convenient for users. The app aims to provide a creative and personal space where users can express their thoughts and keep track of their daily lives. Its features include the ability to write and save journal entries, create a to-do list for better task management, and use a mood board where users can set their mood for the day using emojis. It also includes a calendar of events to help users stay organized and never miss important dates or activities.</p>
                <div class="tech-used">
                    <h4 style="grid-column: span 2;">Technologies Used:</h4>
                    <div class="tech-item">
                        <img src="logo/html.png" alt="Java Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                        <span>HTML</span>
                    </div>
                    <div class="tech-item">
                        <img src="logo/css-3.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                        <span>CSS</span>
                    </div>
                    <div class="tech-item">
                        <img src="logo/php.png" alt="Python Logo" style="width: 45px; height: 40px; margin-right: 10px;" />
                        <span>PHP</span>
                    </div>
                    <!-- Add more tech items here -->
                </div>
        `
        },
        julia:{
            laptop: `
            <i><h3>Mobile Shopee</h3></i>
            <p><b>About the System:</b><br>Mobile Shopee (M-Shopee) is an e-commerce website focused on buying and selling mobile phones. Just like a typical online shopping platform, users can browse products, add items to their cart, and proceed to checkout for a seamless purchasing experience. Other features include user registration and login, product search and filtering, order tracking, and a secure payment system. Sellers can also list their phones for sale, manage their inventory, and communicate with potential buyers.</p>
                <div class="tech-used">
                    <h4 style="grid-column: span 2;">Technologies Used:</h4>
                    <div class="tech-item">
                        <img src="logo/html.png" alt="Java Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                        <span>HTML</span>
                    </div>
                    <div class="tech-item">
                        <img src="logo/css-3.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                        <span>CSS</span>
                    </div>
                    <div class="tech-item">
                        <img src="logo/js.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                        <span>Javascript</span>
                    </div>
                    <div class="tech-item">
                        <img src="logo/python.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                        <span>Python</span>
                    </div>
                    <!-- Add more tech items here -->
                </div>
        `,
        smartphone: `
            <i><h3>Dear Diary, Let's Spill the Tea!</h3></i>
            <p><b>About the System:</b><br> is a fun and interactive mobile diary app designed for self-expression, emotional check-ins, and storytelling. With a playful twist, users can "spill the tea" on their daily experiences, moods, secrets, or gossip in a safe, private space. The app features Start Writing, To-do List, Mood board, and Calendar—making it the ultimate digital bestie for journaling your realest thoughts.</p>
                <div class="tech-used">
                    <h4 style="grid-column: span 2;">Technologies Used:</h4>
                    <div class="tech-item">
                        <img src="logo/html.png" alt="Java Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                        <span>HTML</span>
                    </div>
                    <div class="tech-item">
                        <img src="logo/css-3.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                        <span>CSS</span>
                    </div>
                    <div class="tech-item">
                        <img src="logo/php.png" alt="Python Logo" style="width: 45px; height: 40px; margin-right: 10px;" />
                        <span>PHP</span>
                    </div>
                    <!-- Add more tech items here -->
                </div>
        `
        },
        melinda:{
            laptop: 
            `
                <i><h3>PandanPro</h3></i>
                <p><b>About the System:</b><br>PandanPro is an e-commerce web system that helps promote pandan-based products from Luisiana, Laguna. It supports local sellers by letting them list products, while buyers can browse, add to wishlist, and place orders. Key features include account-based access, product management, wishlist, and an admin panel. This project aims to boost local pandan product sales and support small businesses in the community.</p>
                    <div class="tech-used">
                        <h4 style="grid-column: span 2;">Technologies Used:</h4>
                        <div class="tech-item">
                            <img src="logo/html.png" alt="Java Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>HTML</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/css-3.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>CSS</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/js.png" alt="Java Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>Javascript</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/bootstrap.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>Bootstrap</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/python.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>Python</span>
                        </div>
                        <!-- Add more tech items here -->
                    </div>
            `,
            smartphone: `
                <i><h3>Profile Page</h3></i>
                <p><b>About the System:</b><br>This project is a basic profile webpage created as a homework activity. It was developed using Visual Studio Code and showcases a student’s academic and personal details. The goal is to demonstrate the ability to structure content using HTML and apply custom styling using an external CSS file.</p>
                    <div class="tech-used">
                        <h4 style="grid-column: span 2;">Technologies Used:</h4>
                        <div class="tech-item">
                            <img src="logo/html.png" alt="Java Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>HTML</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/css-3.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>CSS</span>
                        </div>
                        <!-- Add more tech items here -->
                    </div>
            `
        },
        viezel:{
            laptop: 
            `
                <i><h3>Serene Mind</h3></i>
                <p><b>About the System:</b><br>Serene Mind is a comprehensive mental health platform built to support individuals facing stress, anxiety, or emotional challenges. Designed as both a website and mobile application, it offers a variety of user-friendly tools and resources—such as guided relaxation, breathing exercises, calming soundscapes, and wellness insights.
<br>The platform focuses on promoting mindfulness and emotional resilience through accessible self-care activities. Whether you're looking to unwind after a stressful day or build healthier coping habits, Serene Mind provides a safe, supportive space to help you regain balance and peace of mind—anytime, anywhere.</p>
                    <div class="tech-used">
                        <h4 style="grid-column: span 2;">Technologies Used:</h4>
                        <div class="tech-item">
                            <img src="logo/html.png" alt="Java Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>HTML</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/css-3.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>CSS</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/js.png" alt="Java Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>Javascript</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/mysql.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>MySQL</span>
                        </div>
                        <!-- Add more tech items here -->
                    </div>
            `,
            smartphone: `
                <i><h3>Code Shooter: Python Edition</h3></i>
                <p><b>About the System:</b><br>An interactive typing shooter game that challenges players to type Python keywords to eliminate falling targets. Players control a shooter at the bottom of the screen, aiming to destroy keywords before they reach the ground. With each correct keyword typed, the shooter fires and destroys the incoming word.
<br>The game is designed to reinforce familiarity with Python keywords while enhancing typing speed and accuracy. As the game advances, the difficulty increases by gradually speeding up the falling keywords. The game ends after three missed inputs, pushing players to stay sharp under pressure.</p>
                    <div class="tech-used">
                        <h4 style="grid-column: span 2;">Technologies Used:</h4>
                        <div class="tech-item">
                            <img src="logo/html.png" alt="Java Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>HTML</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/css-3.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>CSS</span>
                        </div>
                        <div class="tech-item">
                            <img src="logo/python.png" alt="Python Logo" style="width: 40px; height: 40px; margin-right: 10px;" />
                            <span>Python</span>
                        </div>
                        <!-- Add more tech items here -->
                    </div>
            `
        }
    };

    const projectContents = {
        paula: `
    <div class="project-card">
        <i><b><h3>What technical skills does Paula excel at?</h3></b></i>
        <div class="skills-container">
        <div class="skills-column">
            <b><h4>Technical Skills</h4></b>
            <div class="skills-grid">
                <div class="skill-item">
                    <img src="logo/mysql.png" alt="HTML" />
                    <span>MySQL</span>
                </div>
                <div class="skill-item">
                    <img src="logo/java.png" alt="Python" />
                    <span>Java</span>
                </div>
                <div class="skill-item">
                    <img src="logo/c-sharp.png" alt="CSS" />
                    <span>C#</span>
                </div>
            </div>
        </div>
        <div class="skills-column">
            <b><h4>Software</h4></b>
            <div class="skills-grid">
                <div class="skill-item">
                    <img src="logo/visual-studio-code.png" alt="VS Code" />
                    <span>VS Code</span>
                </div>
                <div class="skill-item">
                    <img src="logo/netbeans.png" alt="Netbeans" />
                    <span>Netbeans</span>
                </div>
                <div class="skill-item">
                    <img src="logo/canva.png" alt="Canva" />
                    <span>Canva</span>
                </div>
                <div class="skill-item">
                    <img src="logo/android.png" alt="Android" />
                    <span>Android Studio</span>
                </div>
                <div class="skill-item">
                    <img src="logo/xampp.png" alt="XAMPP" />
                    <span>XAMPP</span>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div class="device-carousel">
        <div class="carousel-container">
            <div class="device-wrapper front">
                <img src="laptop.png" alt="Laptop" style="width: 900px; height: 500px;" />
                <video class="device-video" autoplay muted loop playsinline>
                    <source src="blotter_system.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="device-wrapper back">
                <img src="laptop.png" alt="Smartphone" style="width: 900px; height: 500px;" />
                    <video class="device-video phone" 
                        style="width: 680px; height: 450px; margin-left: 40px;" 
                        autoplay muted loop playsinline>
                        <source src="idl_system.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
            </div>
        </div>
        <div class="device-arrows">
            <button id="arrow-left">&#8592;</button>
            <button id="arrow-right">&#8594;</button>
        </div>
    </div>

            <div class="device-section">
                <div class="device-description-box" id="device-description">
                    <h3>Project Details</h3>
                    <p>This area can include text, titles, or descriptions related to the current project being shown.</p>
                    <p>You can even include buttons, links, or scrollable content if needed.</p>
                </div>
            </div>
            <div class="project-card">
            <i><h3>Check Paula's Resume</h3></i>
            <div style="text-align: center; margin-top: 1rem;">
                <button id="openModal-paula" class="cv-button">Curriculum Vitae</button>
            </div>
            </div>

            <!-- Modal Structure -->
            <div id="modal-paula" class="modal">
            <div class="modal-content">
                <span class="close" id="closeModal-paula">&times;</span>
                <!-- Image of the resume -->
                <img src="resume/resume_paula.jpg" alt="Paula's Resume" style="width: 100%; max-width: 700px; height: auto; margin-top: 20px;">
            </div>
            </div>
        `,
        cyril: `
                <div class="project-card">
                    <i><b><h3>What technical skills does Cyril excel at?</h3></b></i>
                    <div class="skills-container">
                    <div class="skills-column">
                        <b><h4>Technical Skills</h4></b>
                        <div class="skills-grid">
                            <div class="skill-item">
                                <img src="logo/html.png" alt="HTML" />
                                <span>HTML</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/python.png" alt="Python" />
                                <span>Python</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/css-3.png" alt="CSS" />
                                <span>CSS</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/js.png" alt="JavaScript" />
                                <span>JavaScript</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/mysql.png" alt="MySQL" />
                                <span>MySQL</span>
                            </div>
                        </div>
                    </div>
                    <div class="skills-column">
                        <b><h4>Software</h4></b>
                        <div class="skills-grid">
                            <div class="skill-item">
                                <img src="logo/visual-studio-code.png" alt="VS Code" />
                                <span>VS Code</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/canva.png" alt="Figma" />
                                <span>Canva</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="device-carousel">
                    <div class="carousel-container">
                        <div class="device-wrapper front">
                            <img src="laptop.png" alt="Laptop" style="width: 900px; height: 500px;" />
                            <video class="device-video" autoplay muted loop playsinline>
                                <source src="ecomm.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="device-wrapper back">
                            <img src="smartphone.png" alt="Smartphone" style="width: 350px; height: 640px;" />
                            <video class="device-video phone" autoplay muted loop playsinline>
                                <source src="deardiary_mobile.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div class="device-arrows">
                        <button id="arrow-left">&#8592;</button>
                        <button id="arrow-right">&#8594;</button>
                    </div>
                </div>

                        <div class="device-section">
                            <div class="device-description-box" id="device-description">
                            </div>
                        </div>
                        <div class="project-card">
                        <i><h3>Check Cyril's Resume</h3></i>
                        <div style="text-align: center; margin-top: 1rem;">
                            <button id="openModal-paula" class="cv-button">Curriculum Vitae</button>
                        </div>
                        </div>

                        <!-- Modal Structure -->
                        <div id="modal-paula" class="modal">
                        <div class="modal-content">
                            <span class="close" id="closeModal-paula">&times;</span>
                            <!-- Image of the resume -->
                            <img src="resume/resume_cyril.jpg" alt="Cyril's Resume" style="width: 100%; max-width: 700px; height: auto; margin-top: 20px;">
                        </div>
                        </div>
        `,
        kyla: `
                <div class="project-card">
                    <i><b><h3>What technical skills does Kyla excel at?</h3></b></i>
                    <div class="skills-container">
                    <div class="skills-column">
                        <b><h4>Technical Skills</h4></b>
                        <div class="skills-grid">
                            <div class="skill-item">
                                <img src="logo/html.png" alt="HTML" />
                                <span>HTML</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/python.png" alt="Python" />
                                <span>Python</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/css-3.png" alt="CSS" />
                                <span>CSS</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/js.png" alt="JavaScript" />
                                <span>JavaScript</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/mysql.png" alt="MySQL" />
                                <span>MySQL</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/php.png" alt="MySQL" />
                                <span>PHP</span>
                            </div>
                        </div>
                    </div>
                    <div class="skills-column">
                        <b><h4>Software</h4></b>
                        <div class="skills-grid">
                            <div class="skill-item">
                                <img src="logo/visual-studio-code.png" alt="VS Code" />
                                <span>VS Code</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/canva.png" alt="Figma" />
                                <span>Canva</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/android.png" alt="VS Code" />
                                <span>Android Studio</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/github.png" alt="Figma" />
                                <span>GitHub</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="device-carousel">
                    <div class="carousel-container">
                        <div class="device-wrapper front">
                            <img src="laptop.png" alt="Laptop" style="width: 900px; height: 500px;" />
                            <video class="device-video" autoplay muted loop playsinline>
                                <source src="ecomm.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="device-wrapper back">
                            <img src="smartphone.png" alt="Smartphone" style="width: 350px; height: 640px;" />
                            <video class="device-video phone" autoplay muted loop playsinline>
                                <source src="deardiary_mobile.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div class="device-arrows">
                        <button id="arrow-left">&#8592;</button>
                        <button id="arrow-right">&#8594;</button>
                    </div>
                </div>

                        <div class="device-section">
                            <div class="device-description-box" id="device-description">
                            </div>
                        </div>
                        <div class="project-card">
                        <i><h3>Check Kyla's Resume</h3></i>
                        <div style="text-align: center; margin-top: 1rem;">
                            <button id="openModal-paula" class="cv-button">Curriculum Vitae</button>
                        </div>
                        </div>

                        <!-- Modal Structure -->
                        <div id="modal-paula" class="modal">
                        <div class="modal-content">
                            <span class="close" id="closeModal-paula">&times;</span>
                            <!-- Image of the resume -->
                            <img src="resume/resume_kyla.jpg" alt="Kyla's Resume" style="width: 100%; max-width: 700px; height: auto; margin-top: 20px;">
                        </div>
                        </div>
        `,
        julia: `
                <div class="project-card">
                    <i><b><h3>What technical skills does Julia excel at?</h3></b></i>
                    <div class="skills-container">
                    <div class="skills-column">
                        <b><h4>Technical Skills</h4></b>
                        <div class="skills-grid">
                            <div class="skill-item">
                                <img src="logo/html.png" alt="HTML" />
                                <span>HTML</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/python.png" alt="Python" />
                                <span>Python</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/css-3.png" alt="CSS" />
                                <span>CSS</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/js.png" alt="JavaScript" />
                                <span>JavaScript</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/mysql.png" alt="MySQL" />
                                <span>MySQL</span>
                            </div>
                           <div class="skill-item">
                                <img src="logo/c-sharp.png" alt="C#" />
                                <span>C#</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/cplus.png" alt="CSS" />
                                <span>C++</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/java.png" alt="JavaScript" />
                                <span>Java</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/firebase.png" alt="MySQL" />
                                <span>Firebase</span>
                            </div>
                        </div>
                    </div>
                    <div class="skills-column">
                        <b><h4>Software</h4></b>
                        <div class="skills-grid">
                            <div class="skill-item">
                                <img src="logo/canva.png" alt="Canva" />
                                <span>Canva</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/visual-studio-code.png" alt="VS Code" />
                                <span>VS Code</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/github.png" alt="Figma" />
                                <span>GitHub</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/netbeans.png" alt="VS Code" />
                                <span>Netbeans</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/xampp.png" alt="Figma" />
                                <span>XAMPP</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/android.png" alt="VS Code" />
                                <span>Android Studio</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/metaspark studio.png" alt="Figma" />
                                <span>Meta Spark</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="device-carousel">
                    <div class="carousel-container">
                        <div class="device-wrapper front">
                            <img src="laptop.png" alt="Laptop" style="width: 900px; height: 500px;" />
                            <video class="device-video" autoplay muted loop playsinline>
                                <source src="ecomm.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="device-wrapper back">
                            <img src="smartphone.png" alt="Smartphone" style="width: 350px; height: 640px;" />
                            <video class="device-video phone" autoplay muted loop playsinline>
                                <source src="deardiary_mobile.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div class="device-arrows">
                        <button id="arrow-left">&#8592;</button>
                        <button id="arrow-right">&#8594;</button>
                    </div>
                </div>

                        <div class="device-section">
                            <div class="device-description-box" id="device-description">
                            </div>
                        </div>
                        <div class="project-card">
                        <i><h3>Check Julia's Resume</h3></i>
                        <div style="text-align: center; margin-top: 1rem;">
                            <button id="openModal-paula" class="cv-button">Curriculum Vitae</button>
                        </div>
                        </div>

                        <!-- Modal Structure -->
                        <div id="modal-paula" class="modal">
                        <div class="modal-content">
                            <span class="close" id="closeModal-paula">&times;</span>
                            <!-- Image of the resume -->
                            <img src="resume/resume_julia.jpg" alt="Julia's Resume" style="width: 100%; max-width: 700px; height: auto; margin-top: 20px;">
                        </div>
                        </div>
        `,
        melinda: `
                    <div class="project-card">
                        <i><b><h3>What technical skills does Melinda excel at?</h3></b></i>
                        <div class="skills-container">
                        <div class="skills-column">
                            <b><h4>Technical Skills</h4></b>
                            <div class="skills-grid">
                                <div class="skill-item">
                                    <img src="logo/html.png" alt="HTML" />
                                    <span>HTML</span>
                                </div>
                                <div class="skill-item">
                                    <img src="logo/css-3.png" alt="Python" />
                                    <span>CSS</span>
                                </div>
                                <div class="skill-item">
                                    <img src="logo/js.png" alt="CSS" />
                                    <span>Javascript</span>
                                </div>
                                <div class="skill-item">
                                    <img src="logo/bootstrap.png" alt="Python" />
                                    <span>Bootstrap</span>
                                </div>
                                <div class="skill-item">
                                    <img src="logo/python.png" alt="CSS" />
                                    <span>Python</span>
                                </div>
                                <div class="skill-item">
                                    <img src="logo/mysql.png" alt="CSS" />
                                    <span>MySQL</span>
                                </div>
                            </div>
                        </div>
                        <div class="skills-column">
                            <b><h4>Software</h4></b>
                            <div class="skills-grid">
                                <div class="skill-item">
                                    <img src="logo/visual-studio-code.png" alt="VS Code" />
                                    <span>VS Code</span>
                                </div>
                                <div class="skill-item">
                                    <img src="logo/canva.png" alt="Canva" />
                                    <span>Canva</span>
                                </div>
                                <div class="skill-item">
                                    <img src="logo/sqlyog.png" alt="Android" />
                                    <span>SQLyog</span>
                                </div>
                                <div class="skill-item">
                                    <img src="logo/xampp.png" alt="XAMPP" />
                                    <span>XAMPP</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="device-carousel">
                        <div class="carousel-container">
                            <div class="device-wrapper front">
                                <img src="laptop.png" alt="Laptop" style="width: 900px; height: 500px;" />
                                <video class="device-video" autoplay muted loop playsinline>
                                    <source src="ecomm_melinda.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div class="device-wrapper back">
                                <img src="laptop.png" alt="Smartphone" style="width: 900px; height: 500px;" />
                                    <video class="device-video phone" 
                                        style="width: 680px; height: 450px; margin-left: 40px;" 
                                        autoplay muted loop playsinline>
                                        <source src="melinda_vid.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                            </div>
                        </div>
                        <div class="device-arrows">
                            <button id="arrow-left">&#8592;</button>
                            <button id="arrow-right">&#8594;</button>
                        </div>
                    </div>

                            <div class="device-section">
                                <div class="device-description-box" id="device-description">
                                    <h3>Project Details</h3>
                                    <p>This area can include text, titles, or descriptions related to the current project being shown.</p>
                                    <p>You can even include buttons, links, or scrollable content if needed.</p>
                                </div>
                            </div>
                            <div class="project-card">
                            <i><h3>Check Melinda's Resume</h3></i>
                            <div style="text-align: center; margin-top: 1rem;">
                                <button id="openModal-paula" class="cv-button">Curriculum Vitae</button>
                            </div>
                            </div>

                            <!-- Modal Structure -->
                            <div id="modal-paula" class="modal">
                            <div class="modal-content">
                                <span class="close" id="closeModal-paula">&times;</span>
                                <!-- Image of the resume -->
                                <img src="resume/resume_melinda.jpg" alt="Paula's Resume" style="width: 100%; max-width: 700px; height: auto; margin-top: 20px;">
                            </div>
                            </div>
        `,
        viezel: `
                <div class="project-card">
                    <i><b><h3>What technical skills does Viezel excel at?</h3></b></i>
                    <div class="skills-container">
                    <div class="skills-column">
                        <b><h4>Technical Skills</h4></b>
                        <div class="skills-grid">
                           <div class="skill-item">
                                <img src="logo/html.png" alt="HTML" />
                                <span>HTML</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/python.png" alt="Python" />
                                <span>Python</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/css-3.png" alt="CSS" />
                                <span>CSS</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/js.png" alt="JavaScript" />
                                <span>JavaScript</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/mysql.png" alt="MySQL" />
                                <span>MySQL</span>
                            </div>
                           <div class="skill-item">
                                <img src="logo/c-sharp.png" alt="C#" />
                                <span>C#</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/gdscript-removebg-preview.png" alt="CSS" />
                                <span>GDscript</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/java.png" alt="JavaScript" />
                                <span>Java</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/php.png" alt="MySQL" />
                                <span>PHP</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/bootstrap.png" alt="MySQL" />
                                <span>Bootstrap</span>
                            </div>
                        </div>
                    </div>
                    <div class="skills-column">
                        <b><h4>Software</h4></b>
                        <div class="skills-grid">
                            <div class="skill-item">
                                <img src="logo/visual-studio-code.png" alt="VS Code" />
                                <span>VS Code</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/canva.png" alt="Canva" />
                                <span>Canva</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/sqlyog.png" alt="Android" />
                                <span>SQLyog</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/xampp.png" alt="XAMPP" />
                                <span>XAMPP</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/netbeans.png" alt="XAMPP" />
                                <span>Netbeans</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/capcut.png" alt="XAMPP" />
                                <span>Capcut</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/figma.png" alt="XAMPP" />
                                <span>Figma</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/godot.png" alt="XAMPP" />
                                <span>Godot</span>
                            </div>
                            <div class="skill-item">
                                <img src="logo/github.png" alt="XAMPP" />
                                <span>GitHub</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="device-carousel">
                    <div class="carousel-container">
                        <div class="device-wrapper front">
                            <img src="laptop.png" alt="Laptop" style="width: 900px; height: 500px;" />
                            <video class="device-video" autoplay muted loop playsinline>
                                <source src="serene.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="device-wrapper back">
                            <img src="laptop.png" alt="Smartphone" style="width: 900px; height: 500px;" />
                                <video class="device-video phone" 
                                    style="width: 680px; height: 450px; margin-left: 40px;" 
                                    autoplay muted loop playsinline>
                                    <source src="python_system.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                        </div>
                    </div>
                    <div class="device-arrows">
                        <button id="arrow-left">&#8592;</button>
                        <button id="arrow-right">&#8594;</button>
                    </div>
                </div>

                        <div class="device-section">
                            <div class="device-description-box" id="device-description">
                                <h3>Project Details</h3>
                                <p>This area can include text, titles, or descriptions related to the current project being shown.</p>
                                <p>You can even include buttons, links, or scrollable content if needed.</p>
                            </div>
                        </div>
                        <div class="project-card">
                        <i><h3>Check Viezel's Resume</h3></i>
                        <div style="text-align: center; margin-top: 1rem;">
                            <button id="openModal-paula" class="cv-button">Curriculum Vitae</button>
                        </div>
                        </div>

                        <!-- Modal Structure -->
                        <div id="modal-paula" class="modal">
                        <div class="modal-content">
                            <span class="close" id="closeModal-paula">&times;</span>
                            <!-- Image of the resume -->
                            <img src="resume/resume_viezel.jpg" alt="Paula's Resume" style="width: 100%; max-width: 700px; height: auto; margin-top: 20px;">
                        </div>
                        </div>
        `
    };
    document.addEventListener("click", function(event) {
        // Open modal
        if (event.target && event.target.id === "openModal-paula") {
            const modal = document.getElementById("modal-paula");
            if (modal) modal.style.display = "block";
        }
    
        // Close modal
        if (event.target && event.target.id === "closeModal-paula") {
            const modal = document.getElementById("modal-paula");
            if (modal) modal.style.display = "none";
        }
    
        // Close modal when clicking outside the modal content
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });
    function initializeCarouselIfExists(name) {
        const deviceImgs = document.querySelectorAll('.device-wrapper');
        const arrowLeft = document.getElementById('arrow-left');
        const arrowRight = document.getElementById('arrow-right');
        const descriptionBox = document.getElementById('device-description');
    
        if (deviceImgs.length !== 2 || !arrowLeft || !arrowRight || !descriptionBox) return;
    
        let isLaptopFront = true;
    
        function updateDeviceDescription(name) {
            const currentDesc = deviceDescriptions[name];
            if (!currentDesc) return;
    
            if (isLaptopFront) {
                descriptionBox.innerHTML = currentDesc.laptop;
            } else {
                descriptionBox.innerHTML = currentDesc.smartphone;
            }
        }
    
        function rotateDevices(direction) {
            deviceImgs.forEach(img => {
                img.classList.remove('front', 'back');
                img.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
            });
    
            if (direction === 'left') {
                deviceImgs[0].classList.add('back');
                deviceImgs[1].classList.add('front');
                isLaptopFront = false;
            } else {
                deviceImgs[0].classList.add('front');
                deviceImgs[1].classList.add('back');
                isLaptopFront = true;
            }
    
            updateDeviceDescription(name);
        }
    
        arrowLeft.addEventListener('click', () => rotateDevices('left'));
        arrowRight.addEventListener('click', () => rotateDevices('right'));
    
        updateDeviceDescription(name);
    }
    

    projectTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const name = tab.dataset.name;
            contentContainer.innerHTML = projectContents[name] || `<p>No content available.</p>`;
    
            projectTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            setTimeout(() => {
                setupModalFor(name);
            }, 0);
            initializeCarouselIfExists(name);
            
        });
    });

    // Set default to Paula and init
    contentContainer.innerHTML = projectContents.paula;
    initializeCarouselIfExists('paula');
    
    
});
function setupModalFor(name) {
    const openBtn = document.getElementById(`openModal-${name}`);
    const modal = document.getElementById(`modal-${name}`);
    const closeBtn = document.getElementById(`closeModal-${name}`);

    if (!openBtn || !modal || !closeBtn) return;

    openBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Optional: click outside to close
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}