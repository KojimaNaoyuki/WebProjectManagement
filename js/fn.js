console.log('javascript(fn.js)');

var SideVar = function() {}

SideVar.prototype = {
  sideBottomVar : function() {
    //サイドバー、カレントクラス遷移
    let tg = document.getElementsByClassName('side');

    for(let i = 0; i < tg.length; i++) {
      tg[i].addEventListener('click', function() {

        for(let j = 0; j < tg.length; j++) {
          tg[j].classList.remove('current');
        }

        this.classList.toggle('current');
      }, false);
    }

  }
};

//////////////////////////////////////////////////////////////

var ChangeDisplay = function() {}

ChangeDisplay.prototype = {
  changeOnOff : function(tg) {
    //displayがnoneならblockに違うならnoneに
    switch (tg) {
      case mainIdMember.home :
        mainIdMember.minutes.style.display = 'none';
        mainIdMember.idead.style.display = 'none';
        mainIdMember.document.style.display = 'none';
        mainIdMember.settings.style.display = 'none';
        break;
      case mainIdMember.minutes :
        mainIdMember.home.style.display = 'none';
        mainIdMember.idead.style.display = 'none';
        mainIdMember.document.style.display = 'none';
        mainIdMember.settings.style.display = 'none';
        break;
      case mainIdMember.idead :
        mainIdMember.home.style.display = 'none';
        mainIdMember.minutes.style.display = 'none';
        mainIdMember.document.style.display = 'none';
        mainIdMember.settings.style.display = 'none';
        break;
      case mainIdMember.document :
        mainIdMember.home.style.display = 'none';
        mainIdMember.minutes.style.display = 'none';
        mainIdMember.idead.style.display = 'none';
        mainIdMember.settings.style.display = 'none';
        break;
      case mainIdMember.settings :
        mainIdMember.home.style.display = 'none';
        mainIdMember.minutes.style.display = 'none';
        mainIdMember.idead.style.display = 'none';
        mainIdMember.document.style.display = 'none';
    }

    if(tg.style.display == 'none') {
      tg.style.display = 'block';
    }
  },
  init : function() {
    mainIdMember.minutes.style.display = 'none';
    mainIdMember.idead.style.display = 'none';
    mainIdMember.document.style.display = 'none';
    mainIdMember.settings.style.display = 'none';
  }
};