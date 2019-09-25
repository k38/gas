function myFunction() {
  var html = UrlFetchApp.fetch(url).getContentText();

  var reg = /<div class="lb-none-pad lb-none-v-margin lb-box">([\s\S]*?)<\/div>/g;
  var divs = html.match(reg);
  var html2 = divs.join("");
  var reg2 = /<a class="lb-txt-none lb-txt"([\s\S]*?)<\/a>/g;
  var as = html2.match(reg2);
  var text = as.join("\n");

//  Logger.log(as.length);
//  Logger.log(text);

  MailApp.sendEmail(mailAddr, mailTitle, [new Date(), as.length, text].join("\n\n"));
}
