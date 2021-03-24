import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCTextField} from '@material/textfield';
import {MDCTextFieldCharacterCounter} from '@material/textfield/character-counter';
import {MDCRipple} from '@material/ripple';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

if (document.querySelector('.mdc-text-field--name') !== null) {
  const nameField = new MDCTextField(document.querySelector('.mdc-text-field--name'));
  const emailField = new MDCTextField(document.querySelector('.mdc-text-field--email'));
  const messageField = new MDCTextField(document.querySelector('.mdc-text-field--message'));
  const characterCounter = new MDCTextFieldCharacterCounter(document.querySelector('.mdc-text-field-character-counter'));
  
  const button = document.querySelector('.mdc-button');
  const ripple = new MDCRipple(button);
}

your_email = "cdouglas3579@gmail.com"	;
emailSub = "Portfolio Enquiry";
emailBody = document.getElementById("textarea").innerText; 
var email_btn = document.getElementById('send_email');
email_btn.addEventListener("click",function(e){
    e.preventDefault();
    location.href = "mailto:"+your_email+'&subject='+emailSub+'&body='+emailBody;
});
