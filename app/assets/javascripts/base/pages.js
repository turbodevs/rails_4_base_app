var PagesManagement = window.PagesManagement = {

  init: function () {
    $('.sortable').nestedSortable({
      handle: 'div',
      items: 'li',
      toleranceElement: '> div',
      stop: function( event, ui ) {
        var array_of_ids = $('.sortable').nestedSortable('toArray', {startDepthCount: 0});
      }
    });
  }

}