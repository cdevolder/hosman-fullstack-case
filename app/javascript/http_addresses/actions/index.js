const POST_HEADERS = {
  'X-CSRF-Token':     document.getElementsByName('csrf-token')[0].getAttribute('content'),
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type':     'application/json',
  'Accept':           'application/json'
}
