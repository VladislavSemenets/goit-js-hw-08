function e(){const e={email:emailInput.value,message:messageTextarea.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}function t(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);emailInput.value=t.email,messageTextarea.value=t.message}}const a=document.getElementById("feedbackForm");if(a){const o=a.querySelector("#emailInput"),l=a.querySelector("#messageTextarea");t();const s=_.throttle(e,500);a.addEventListener("input",s),a.addEventListener("submit",(function(e){e.preventDefault(),console.log("Submitted form with values:"),console.log({email:o.value,message:l.value}),localStorage.removeItem("feedback-form-state"),o.value="",l.value=""}))}
//# sourceMappingURL=03-feedback.c6dcb9e4.js.map
