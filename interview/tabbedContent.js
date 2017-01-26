// create the functionality for tabbed content
//

function createTabs(domNode) {
  const tabs = domNode.querySelectorAll('.tab');

  tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
      // remove active class from previous tab
      const prevTab = domNode.querySelector('.tab--active');
      prevTab.classList.remove('tab--active');

      // add active class on this tab
      this.classList.add('tab--active');
      const city = tab.dataset.city;

      // remove active class from previous city
      const prevCity = domNode.querySelector('.city--desc__active');
      prevCity.classList.remove('city--desc__active');

      // add active class on city desc
      const desc = domNode.querySelector(`div[data-city="${city}"]`);
      desc.classList.add('city--desc__active');
    });
  })
}

const groups = document.querySelectorAll('section');

groups.forEach(group => createTabs(group));
