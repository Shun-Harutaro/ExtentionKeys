chrome.extension.onRequest.addListener(function(req, sender, res) {
  const tar = req.name;
  console.log(tar);
});
