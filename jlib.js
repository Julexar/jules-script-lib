function registerLib() {
  jules.lib = {
    styles: {
      divMenu: 'style="width: 200px; border: 1px solid black; background-color: #ffffff; padding: 5px;"',
      divCenter: 'style="text-align:center;"',
      buttonSmall: 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 75px;',
      buttonMedium: 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;',
      buttonLarge: 'style="text-align:center; border: 1px solid black; margin: 1px; background-color: #7E2D40; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;',
      table: 'style="text-align:center; font-size: 12px; width: 100%; border-style: 3px solid #cccccc;"',
      arrow: 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid rgb(126, 45, 64); margin-bottom: 2px; margin-top: 2px;"',
      header: 'style="color: rgb(126, 45, 64); font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"',
      sub: 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"',
      tdPad: 'style="padding: 2px; padding-left: 5px; border: none;"',
      tdRight: 'style="text-align: right;"',
      trTab: 'style="text-align: left; border-bottom: 1px solid #cccccc;"',
      trInv: 'style="border-bottom: 1px solid #cccccc; border-left: 1px solid #cccccc; border-right: 1px solid #cccccc;"',
      tdInv: 'style="text-align: center; border-right: 1px solid #cccccc;"',
      invHeader: '<thead><tr style="border-top: 1px solid #cccccc;"><th style="border-right: 1px solid #cccccc; border-left: 1px solid #cccccc;">Pos.</th><th style="border-right: 1px solid #cccccc; text-align:center;">Amount</th><th style="border-right: 1px solid #cccccc; text-align:center;">Item Name</th><th style="border-right: 1px solid #cccccc; text-align:center;">Description</th><th style="border-right: 1px solid #cccccc; text-align:center;">Price (GP)</th></tr></thead>',
      span: 'style="display: inline; width: 10px; height: 10px; padding: 1px; border: 1px solid black; background-color: white;"',
    },
    shop: {
      typeList: ['Weapon', 'Armor', 'Scroll', 'Potion', 'Misc', 'Mundane Item', 'Random'],
      rareList: ['Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary', 'Random']
    },
    func: {
      getIdFromToken: function (selected) {
        return (selected || [])
          .map(obj => getObj('graphic', obj._id))
          .filter(x => !!x)
          .map(token => token.get('represents'))
          .filter(id => getObj('character', id || ''));
      } 
    }
  };

  log('Jules Script Lib - Successfully registered Library!');
}

on('ready', () => {
  registerLib();
});