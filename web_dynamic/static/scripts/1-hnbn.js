$(document).ready(function(){
  const listamenities = [];

  $('input').css('margin-left', '10px');
  $('input[type=checkbox]').click(function () {
    if ($(this).is('checked')) {
      listamenities.push($(this).attr('data-name'));
    } else {
      const Solveindex = listamenities.indexOf($(this).attr('data-name'));
      listamenities.splice(Solveindex, 1);
    }
    $('.amenities h4').text(amenities.join(', ')).css({ width: '220px', height: '16px', overflow: 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' });
  });
});
