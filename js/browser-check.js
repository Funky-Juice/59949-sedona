(function(){
  var photoBlog = document.querySelector('.photo-blog');
  var pageFooter = document.querySelector('.page-footer__wrap');
  var rangeFilter = document.getElementById('range-filter-1');

  if (/Edge\/12./i.test(navigator.userAgent)){
    if(rangeFilter) {
      rangeFilter.classList.add('range-filter--edge-patch');
    };

    if(photoBlog) {
      photoBlog.classList.add('photo-blog--edge-patch');
    };

    if(pageFooter) {
      pageFooter.classList.add('page-footer__wrap--ie11-patch');
    };
  }

  if (navigator.userAgent.search(/Trident/) > -1) {
    if(photoBlog) {
      photoBlog.classList.add('photo-blog--ie11-patch');
    };

    if(pageFooter) {
      pageFooter.classList.add('page-footer__wrap--ie11-patch');
    };
  }
}());
