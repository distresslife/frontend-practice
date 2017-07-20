ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

<div class="pic">
  <img class="lazy" data-original="url">
  <span>created</span>
<div>





// var MustacheTemplate = (function(){
//     return function (id, data, partial) {
//         var static_template = $(id).html();
//         if(typeof(data) === "undefined"){
//             return Mustache.render(static_template);
//         }else{
//             if(typeof(partial) === "undefined"){
//                 return Mustache.render(static_template, data);
//             }else{
//                 return Mustache.render(static_template, data, partial);
//             }
//         }
//     };
// })();
// var getData = function(url, type, data, callback) {
//  $.ajax({
//         type: type,
//         url: url,
//         data : data,
//         dataType: 'jsonp',
//         beforeSend : function() {
//             $('body').append('<div class="loading"></div>');
//             $('body .loading').css('display','block');
//         },
//     }).done(function (output) {
//      $('body .loading').remove();
//         callback(output);
//     }).fail(function (jqXHR, textStatus) {
//         callback(null);
//     });
// };

// var key = 'qMKlb7FhuLXIhBwz0Z6aevxjqwyFyGtKMHoFCqinLeTnhPrCjX';
// var hostname = 'butteryplanet.tumblr.com';
// var offset = 0;
// var isEnd = false;
// var loadStatus = false;
// var getMediaList = function(){
//  loadStatus = true;
//  getData("http://api.tumblr.com/v2/blog/"+hostname+"/posts/photo", "GET", {offset:offset, api_key:key},function(output){
//      if (output.response.posts === 0) {
//          isEnd = true;
//          return ;
//      }

//      var list = [];
//      offset += output.response.posts.length;

//      $.each(output.response.posts, function(k,v){
//          if (v.type === "photo") {
//              $.each(v.photos, function(k,p){
//                  var media = {
//                      "created" : v.date,
//                      "url" : p.original_size.url
//                  }
//                  list.push(media);
//              });
//          }
//      });

//      var html = MustacheTemplate('#template-image-list', {media:list});
//      $('body').append(html).trigger('imageLazyload');
//      loadStatus = false;
//  });
// }

// var search = window.location.search.substring(1);
// if (search !== '') {
//  var query = search ? JSON.parse('{"' + window.location.search.substring(1).replace(/&/g, '","').replace(/=/g,'":"') + '"}',
//         function(key, value) {
//             return key === "" ? value : decodeURIComponent(value)
//         }
//     ) : {};
//     if (query.hasOwnProperty('v') && query.v.length !== 0) {
//      hostname = query.v;
//     }
// }

// $.ajax({
//     type: "GET",
//     url: "http://api.tumblr.com/v2/blog/"+hostname+"/info",
//     data : {
//      api_key: key
//     },
//     dataType: 'jsonp'
// }).done(function (output) {
//  if (output.response.blog.posts !== 0) {
//      getMediaList();
//  }
// });

// $(window).scroll(function () {
//  if ($(window).scrollTop() + $(window).height() + 500 >= $(document).height()) {
//      if(offset !== 0 && loadStatus == false && isEnd == false){
//          getMediaList();
//      }
//  }
// });
// $(window).on('imageLazyload', function(e){
//     $('body').find('img.lazy').lazyload({
//         skip_invisible : true,
//         effect : "fadeIn",
//         failure_limit : 10
//     }).removeClass('lazy');
// });