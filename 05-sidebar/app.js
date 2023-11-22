const sidebarContainer = document.querySelector('#sidebar-container');
const btnToggleSidebar = document.querySelector('#btn-toggle-sidebar');
const iconToggleSidebar = document.querySelector('#icon-toggle-sidebar');

const ToggleSidebar = () => {
  sidebarContainer.classList.toggle('closed');

  if (iconToggleSidebar.classList.contains('fa-caret-right')) {
    iconToggleSidebar.classList.remove('fa-caret-right');
    iconToggleSidebar.classList.add('fa-caret-left');
  } else {
    iconToggleSidebar.classList.remove('fa-caret-left');
    iconToggleSidebar.classList.add('fa-caret-right');
  }
};

btnToggleSidebar.addEventListener('click', ToggleSidebar);
