const textWrapper = document.querySelector('.render-wrapper');
const textArea = document.querySelector('#text');
const openFontRadio = document.querySelector('#openFont');
const openAltaFontRadio = document.querySelector('#openAltaFont');
const LexieFontRadio = document.querySelector('#lexieFont');
const sFontSizeRadio = document.querySelector('#sFontSize');
const mFontSizeRadio = document.querySelector('#mFontSize');
const lFontSizeRadio = document.querySelector('#lFontSize');
const largeSpacingRadio = document.querySelector('#largeSpacing');
const largeHeightRadio = document.querySelector('#largeHeight');
const fontRadioBtns = document.querySelectorAll('input[name="fontRadio"]');
const sizeRadioBtns = document.querySelectorAll('input[name="sizeRadio"]');
const letterRadioBtns = document.querySelectorAll('input[name="letterRadio"]');
const lineRadioBtns = document.querySelectorAll('input[name="lineRadio"]');

textArea.addEventListener('input', () => {
  textWrapper.innerHTML = textArea.value.replace(/(?:\r\n|\r|\n)/g, '<br>');
});

fontRadioBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (openFontRadio.checked) {
      document.body.style.fontFamily = 'Open Dyslexic';
    }
    if (LexieFontRadio.checked) {
      document.body.style.fontFamily = 'Lexie Readable';
    }
    if (openAltaFontRadio.checked) {
      document.body.style.fontFamily = 'Open Dyslexic Alta';
    }
  });
});

sizeRadioBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    let fontSize = '1.5rem'
    if (sFontSizeRadio.checked) {
        fontSize = '1.25rem';
    }
    if (mFontSizeRadio.checked) {
        fontSize = '1.75rem';
    }
    if (lFontSizeRadio.checked) {
        fontSize = '2.25rem';
    }
    textWrapper.style.fontSize = fontSize;
  });
});

letterRadioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      let letterSpacing = 'normal'
      if (largeSpacingRadio.checked) {
        letterSpacing = '.1rem';
      }
      textWrapper.style.letterSpacing = letterSpacing;
    });
  });

  lineRadioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      let lineHeight = '1.5'
      if (largeHeightRadio.checked) {
        lineHeight = '1.75';
      }
      textWrapper.style.lineHeight = lineHeight;
    });
  });