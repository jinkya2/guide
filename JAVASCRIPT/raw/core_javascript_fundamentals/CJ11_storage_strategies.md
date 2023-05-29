
 
 Storage in key value pairs of strings.
 
 Two mechanisms
 
 1. Session Storage - 
 persistent only for particular session. A soon as window or tab 
 is close, that data is losed. Session storage data is not sent to server while making
 network request calls. You can store atleast 5 MB data.
 
 2. Local Storage
 Even if you close tab, browser, or even shut down system, when you visit the site again,
 that data persists. Highest memory capacity depending on the device you are using.
 Roughly atleast 5MB even if using mobile phones.
 Its very efficient to store the frequelty used user data on browser than making network
 requests. Many websites like flipkart stores user suggestions. 
 
 Due to security reasons both storage mechanism follow Same Origin policy.
 ORIGIN = PROTOCOL + HOST           + PORT
           http/s    flipkart.com       8080

If the localstorage data is stored for `https://abc.com` then it can be accessed only from 
`https://abc.com/*`. Not even `https://pqr.abc.com/*` or `https://abc.com:8080`

Local Storage
```javascript
  localStorage.setItem("key", "value"); // Using the same key again, the value will override.
  localStorage.getItem("key");
  localStorage.removeItem("key");
  localStorage.clear(); 
```
Same methods for sessionStorage.



Cookies
- When a web server sents a web page tp browser, the connection is shut down. The server forgets everything about the user. 
- example

```javascript
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
```