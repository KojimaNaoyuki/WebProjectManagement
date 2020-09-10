(function() {

  console.log('javascript(common.js)');

  document.addEventListener('DOMContentLoaded', function() {
    let sidevar = new SideVar();
    let changedisplay = new ChangeDisplay();

    /////////////////////////////////////////////////////////////

    //サイドバーのカレントを表すバー
    sidevar.sideBottomVar();

    ////////////////////////////////////////////////////////////

    //mainコンテンツのdisplayの初期化
    changedisplay.init();

    sideIdMember.home.addEventListener('click', function() {
      changedisplay.changeOnOff(mainIdMember.home);
    },false);
    sideIdMember.minutes.addEventListener('click', function() {
      changedisplay.changeOnOff(mainIdMember.minutes);
    },false);
    sideIdMember.idead.addEventListener('click', function() {
      changedisplay.changeOnOff(mainIdMember.idead);
    },false);
    sideIdMember.document.addEventListener('click', function() {
      changedisplay.changeOnOff(mainIdMember.document);
    },false);
    sideIdMember.settings.addEventListener('click', function() {
      changedisplay.changeOnOff(mainIdMember.settings);
    },false);

    ////////////////////////////////////////////////////////////
  }, false);

}).call(this);
