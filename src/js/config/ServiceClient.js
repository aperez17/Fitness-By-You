import $ from 'jquery';

const serverPrefix = "/api";
const contentType ="application/json; charset=utf-8";
let my = {};

function put(url, data, callback){
  return $.ajax({
    url: url,
    type: 'PUT',
    success: callback,
    data: data,
    contentType: contentType
  });
}

function post(url, data, callback){
  return $.ajax({
    url: url,
    type: 'POST',
    success: callback,
    data: data,
    contentType: contentType
  });
}

function ajaxDelete(url, callback){
  return $.ajax({
    url: url,
    type: 'DELETE',
    success: callback,
    contentType: contentType
  });
}

function get(url, callback){
  return $.ajax({
    url: url,
    type: 'GET',
    success: callback,
    contentType: contentType
  });
}

my.ajaxPost = function (url, payload, handlers) {
  post(serverPrefix + url, JSON.stringify(payload), handlers.success).fail(handlers.error);
};

my.ajaxGet = function (url, handlers) {
  get(serverPrefix +url, handlers.success).fail(handlers.error);
};

my.ajaxPut = function (url, payload, handlers){
  put(serverPrefix +url, JSON.stringify(payload), handlers.success).fail(handlers.error);
};

my.ajaxDelete = function (url, handlers) {
  ajaxDelete(serverPrefix +url, handlers.success).fail(handlers.error);
}

export default my;
