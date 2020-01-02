define(['libs/material-components-web.min'], function (mdc) {
  [].map.call(document.querySelectorAll('.mdc-button'), function (element) {
    mdc.ripple.MDCRipple.attachTo(element);
  });
  const textfields = [].map.call(document.querySelectorAll('.mdc-text-field'), function (element) {
    return new mdc.textField.MDCTextField(element);
  });
  const sliders = [].map.call(document.querySelectorAll('.mdc-slider'), function (element) {
    return new mdc.slider.MDCSlider(element);
  });
})



