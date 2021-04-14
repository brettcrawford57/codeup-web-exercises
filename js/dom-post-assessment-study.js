/**
 * Write your solutions here
 */

$('#change-bg-color').click(function(){
    $('body').css('background-color','blue')
});

$('.btn').click(function(){
    $(this).css('background-color', '#93f2e5')
});

$('#reset-btn').click(function(){
    location.reload();
});

$('.star').hover(function(){
    var dataValue = $(this).attr('data-value');
    $('#review-result').html(dataValue)
});

$('#go-to-btn').click(function(){
    var newUrl = $('#custom-url').val();
    window.location = newUrl;
});

$('#append-to-ul').click(function(){
    var newLi = "<li>text</li>";
    $('#append-to-me').append(newLi);
});

$(document).ready(function(){
    setTimeout(function(){
        $('#message').html("Goodbye, World!")
    }, 2000);
});

$('#hl-toggle li').click(function(){
    $(this).toggleClass('star')
});

$('#upcase-name').click(function(){
    var nameValue = $('#input').val();
    $('#output').html('Your name uppercased is: ' + nameValue.toUpperCase());
});

$('#font-grow li').dblclick(function(){
    var currentSize = parseFloat($(this).css('font-size'));
    var doubleSize = (currentSize * 2) + "px";
    $(this).css('font-size', doubleSize);
});