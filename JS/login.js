const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});

const signupForm = document.querySelector('.signup1');
signupForm.addEventListener('click', async (e) => {
  e.preventDefault();
  const signupName = document.getElementById('signup-name').value;
  const signupEmail = document.getElementById('signup-email').value;
  const signupPassword = document.getElementById('signup-password').value;
  const signupCPassword = document.getElementById('signup-cpassword').value;

  if (signupPassword === signupCPassword) {
    const signupResponse = await fetch('http://localhost:5000/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'name': signupName, 'email': signupEmail, 'password': signupPassword })
    });
    const js = await signupResponse.json();
    if (js.success){
      alert('Success');
      window.location.href="../index.html"
    }
    else{
      alert('Failed');
    }
  }
  else { 
    alert('Failed'); 
  }
});

const logForm = document.querySelector('.login1');
logForm.addEventListener('click', async (e) => {
  e.preventDefault();
  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;
    const signupResponse = await fetch('http://localhost:5000/auth/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'email': loginEmail, 'password': loginPassword })
    });
    const js = await signupResponse.json();
    if (js.success){
      alert('Success');
      window.location.href="../index.html"
    }
    else{
      alert('Failed');
  }
})