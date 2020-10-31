$(document).ready(function () {
                $("button").click(function () {
                    var divWithText = $(".text");
                    divWithText.animate({ left: '150px' }, "slow");
                    divWithText.animate({ fontSize: '4em' }, "slow");
                });
            });