Simple Cross-Domain Iframe Proxy
================================

to use the "Simple Cross-Domain Iframe Proxy" follow these steps :


### Host ###
1- on your host domain add the file "iframeproxy.html" 

2- then on your host page add the iframe of your guest page :

```
<iframe id="guestFrame" name="guestFrame" width="500" height="0" frameborder="0" 
src="http://guestdomain.com/GuestIframe/index.html" scrolling="no"></iframe>
```

3- and add the "getIframeData" function that will receive "data" from the guest iframe 
   then use the received data as you want (ex: control the height of the iframe)
```javascript
function getIframeData(data){
  if(data.height){
    $("#guestFrame").height(data.height);
  }
}
```

### Guest ###
4- on your guest page load "iframeproxy.js"
```
<script type="text/javascript" src="iframeproxy.js"></script>
```

5- then on window load make the host proxy by calling "iframeproxy.makeHostProxy(proxy_url)" 
   and setting "proxy_url" to the path of "iframeproxy.html" on your host domain (see: step 1)
```javascript
window.onload=function(){
  iframeproxy.makeHostProxy("http://hostdomain.com/HostCrossDomainIframe/iframeproxy.html");
  //...
}
```

6- and send the data you want to receive by the hosting page (ex: the height of the guest page)
```javascript
  var h = document.body.clientHeight;
  iframeproxy.sendToHost({height:h});
```


