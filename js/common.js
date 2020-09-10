(function() {

  console.log('javascript(common.js)');

  document.addEventListener('DOMContentLoaded', function() {
    let sidevar = new SideVar();
    let changedisplay = new ChangeDisplay();
    let createhtml = new CreateHtml();

    /////////////////////////////////////////////////////////////

    //サイドバーのカレントを表すバー
    sidevar.sideBottomVar();

    ////////////////////////////////////////////////////////////

    changedisplay.init(); //mainコンテンツのdisplayの初期化

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

    otherIdMember.joinProject.addEventListener('click', function() {
      this.classList.toggle('joinProjectClicked');
      otherIdMember.msg.classList.toggle('msg_box');
      createhtml.create(otherIdMember.msg, 'h3', 'あなたが参加できるプロジェクト');
      createhtml.create(otherIdMember.msg, 'p', 'TJHS');

      if((joinProjectClicked % 2) == 1) {
        createhtml.delete(otherIdMember.msg);
        createhtml.delete(otherIdMember.msg);
        createhtml.delete(otherIdMember.msg);
        createhtml.delete(otherIdMember.msg);
      }

      joinProjectClicked++;
    }, false);

    ////////////////////////////////////////////////////////////
  }, false);

}).call(this);
