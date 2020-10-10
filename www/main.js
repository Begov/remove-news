let start = document.querySelector('#start');

start.addEventListener('click', () => {
  // Обращаемся к текущей вкладке
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // Выполняем скрипт
    chrome.tabs.executeScript(
      tabs[0].id, // Указываем эту вкладку
      // Указываем код, что сработает на этой странице
      {code: `function removeNews() {

        let menu = document.querySelector('.MEAGs .wpO6b');
      
        if(menu) {
      
          console.log(menu);
          menu.click();
          
          setTimeout(() => {document.querySelector('.-Cab_').click()}, 200);
          setTimeout(() => {document.querySelector('.-Cab_').click()}, 400);
          setTimeout(removeNews, 2000);
      
        }
      }
      
      removeNews();`}
    );
  })
});