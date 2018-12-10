document.addEventListener('change', function(event) {
  console.log($('#block').prop('checked'));

  if ($('#block').prop('checked')) {
    $('#block').prop('checked',true);
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(null, { file: 'jquery.js' }, function() {
        chrome.tabs.executeScript(null, { file: '/Exmp/index.js' });
      });
    });
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(null, { code: '$("body")[0].removeEventListener("click", removeElement(), true);' });
    });
  }
});
