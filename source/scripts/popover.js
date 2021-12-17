const openPopover = () => {
  const btnPopover = document.querySelector('.j-achieve-popover-btn');
  const popover = document.querySelector('.j-achieve-popover');

  btnPopover.addEventListener('click', () => {
    popover.classList.toggle('is-active');
  })
}

export { openPopover }
