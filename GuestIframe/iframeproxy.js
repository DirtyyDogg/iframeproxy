var iframeproxy = {};
iframeproxy.makeHostProxy = function(proxy_url){
  iframeproxy.host_proxy_url = proxy_url;
  host_proxy_iframe = document.createElement('iframe');
  host_proxy_iframe.setAttribute('src',proxy_url);
  host_proxy_iframe.setAttribute('width',0);
  host_proxy_iframe.setAttribute('height',0);
  host_proxy_iframe.setAttribute('frameborder',"none");
  host_proxy_iframe.setAttribute('style',"display:none");
  document.body.appendChild(host_proxy_iframe);
  iframeproxy.host_proxy_iframe = host_proxy_iframe;
}
iframeproxy.sendToHost = function(vars){
  var url_vars = [];
  for(v in vars){
    url_vars.push(v+"="+vars[v]);
  }
  iframeproxy.host_proxy_iframe.setAttribute('src',iframeproxy.host_proxy_url+"?"+url_vars.join(","));
}
