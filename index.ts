function shadowwizard(options) {
  let img = Array.from(document.querySelectorAll('.shadowwizard')) as HTMLElement[];

  if(options.shadow_type === 'hard')
    options.shadow_type === '0px';

  img.forEach(im => {
    im.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

    if(options.padding) {
      im.style.padding = '1em';
    }
  })
}

module.exports.shadowwizard = shadowwizard;