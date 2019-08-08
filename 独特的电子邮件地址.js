var numUniqueEmails = function(emails) {
    for(let i=0;i<emails.length;i++){
        emails[i]=tranEmail(emails[i]);
    }
    return Array.from(new Set(emails)).length;

    function tranEmail(email){
        email=email.split('@');
        email[0]=email[0].replace(/\./g,'');
        email[0]=email[0].slice(0,email[0].indexOf("+")==-1?email[0].length:email[0].indexOf("+"))
        return email.join('@');
    }
};