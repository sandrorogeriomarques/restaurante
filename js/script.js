// Função tabela
function changeTab(tabIndex) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');
  
    tabContents.forEach((content, index) => {
      content.classList.remove('active');
      tabButtons[index].classList.remove('active');
    });
  
    tabContents[tabIndex].classList.add('active');
    tabButtons[tabIndex].classList.add('active');
  }