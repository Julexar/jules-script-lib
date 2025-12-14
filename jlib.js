function registerLib() {
  jules.lib = {
    styles: {
      divMenu: 'style="width: 200px; border: 1px solid black; background-color: #ffffff; padding: 5px;"',
      divButton: 'style="text-align:center;"',
      buttonSmall: 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 75px;',
      buttonMedium: 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;',
      buttonLarge: 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;',
      table: 'style="text-align:center; font-size: 12px; width: 100%; border-style: 3px solid #cccccc;"',
      arrow: 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"',
      header: 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"',
      sub: 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"',
      tdReg: 'style="padding: 2px; padding-left: 5px; border: none;"',
      trTab: 'style="text-align: left; border-bottom: 1px solid #cccccc;"',
      tdTab: 'style="text-align: center; border-right: 1px solid #cccccc;"',
      span: 'style="display: inline; width: 10px; height: 10px; padding: 1px; border: 1px solid black; background-color: white;"',
    },
  };

  log('Jules Script Lib - Successfully registered Library!');
}

on('ready', () => {
  registerLib();
});