"use strict";

exports._connect = function _connect(consumer) {
  return consumer.connect();
};

exports._consumer = function _consumer(kafka, config) {
  return kafka.consumer(config);
};

exports._subscribe = function _subscribe(consumer, subscription) {
  return consumer.subscribe(subscription);
};
