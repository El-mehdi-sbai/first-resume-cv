function sendMail(params){
    let tempParams = {
        from_name:document.getElementById("fromName").value,
        contact_email:document.getElementById("fromEmail").value,
        message:document.getElementById("message").value
    }
    emailjs.send('service_5czv4kj', 'template_uz1n8kj', tempParams).then(function(res){
        console.log("success: ", res.status);

        if (res.status === 200){
            msgSuccess = document.getElementById('msg_success');
                msgSuccess.setAttribute("style", "display : block");
            setTimeout(() => {
                msgSuccess.setAttribute("style", "display : none");
            }, 5000);
        }
    })
}