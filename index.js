// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
function email_obfuscator() {
    coded = "FXorBFr@9FX9gRBMX4S.KK8BzM.FX8"
    key = "AU8Pgoux15hCNQlFT9yEj67tzbH3Bsk2ZWmXenIfSw0JMvVcDdOpGrLRiKq4aY"
    shift = coded.length
    link = ""
    for (i = 0; i < coded.length; i++) {
        if (key.indexOf(coded.charAt(i)) == -1) {
            ltr = coded.charAt(i)
            link += (ltr)
        }
        else {
            ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
            link += (key.charAt(ltr))
        }
    }
    return link
}

function email() {
    var link = email_obfuscator();
    document.getElementById("email").outerHTML = "<a href='mailto:" + link + "' class=\"btn btn-default\" role=\"button\">" + link + "</a>";
}
function delay_email() {
    document.getElementById("email").setAttribute('disabled', 'true');
    document.getElementById("email").innerText = "Please wait..";
    setTimeout(email, 3000);
}
