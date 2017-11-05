import { headers, parseJSON } from './utils';
import RequestWatcher from './request-watcher';
import ServiceClient from '../config/ServiceClient';
import $ from 'jquery';

let protocol = 'ws:';
if (window.location.protocol === 'https:') {
  protocol = 'wss:';
}
const host = ((process.env.NODE_ENV === 'development') ?
  'localhost:9000' : `${window.location.host}`);
const webSocketUrl = `${protocol}//${host}`;

const socketWatcher = new RequestWatcher({ webSocketUrl });

export function postLogin(email, password, handlers) {
  return ServiceClient.ajaxPost('/login/authenticate', { "userEmail": email, "password": password}, handlers);
}

export function deleteSession() {
  return ServiceClient.ajaxGet('/login/logout')
}
