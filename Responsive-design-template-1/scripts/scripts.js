/*
* Simplified JS check to show the validation. 
* We could use JQuery validation() plugins for more fancy validations.
*/
var Comments = {
  myComments: function () {
        var comments = document.getElementById("txtSendComments").value;
        if(!Comments.validationCheck(comments)) {
            alert('Please fill the comments!');
        }
  },
  addComments: function () {
        var comments = document.getElementById("txtAddComments").value;
        if(!Comments.validationCheck(comments)) {
            alert('Please fill the comments!');
        }
  },
  validationCheck: function(input) {
        if(!input) {
            return false;
        }
        return true;
  }
};
