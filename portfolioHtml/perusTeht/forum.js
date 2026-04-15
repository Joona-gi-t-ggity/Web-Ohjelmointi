function send(e) {
    e.preventDefault();
    let form = e.target.form;

    let birthdayField = form.userBirthday;
    let emailField = form.userEmail;
    let typeField = form.commentTypeSel;
    let usageField = form.advertAgree;
    let bodyField = form.commentContent;

    let birthday = birthdayField.value;
    let email = emailField.value;
    let type = typeField.value;
    let usage = usageField.checked;
    let body = bodyField.value;

    console.log("---");
    console.log(`birthday: ${birthday}`);
    console.log(`email: ${email}`);
    console.log(`type: ${type}`);
    console.log(`usage: ${usage}`);
    console.log(`body: ${body}`);
    postMsg(e);

    document.getElementById("postCommentForm").reset();
    document.getElementById("commentPopup").close();
};

function postMsg(e) {
    e.preventDefault();

    const date = new Date();

    const commentArea = document.getElementById("comments");

    const comHead = document.getElementById("commentHeader").value;
    const comCont = document.getElementById("commentContent").value;
    const comType = document.getElementById("commentTypeSel").value;

    const userEmail = document.getElementById("userEmail").value;

    commentArea.innerHTML += `
        <p> ${(date.toLocaleString('fi-FI'))} - ${userEmail} ${comType}: </p>
        <div style="border: 2px solid #676767; padding: 5px;">
            <h3> ${comHead} </h3>
            <p> ${comCont} </p>
        </div>
        <hr>
    `;
};