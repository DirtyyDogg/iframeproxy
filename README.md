Simple Cross-Domain Iframe Proxy
================================

to use the "Simple Cross-Domain Iframe Proxy" follow these steps :


### Host ###
1. on your host domain add the file "iframeproxy.html" 

2. than on your hosting page add the iframe to your gest page :

```
<iframe id="guestFrame" name="guestFrame" width="500" height="0" frameborder="0" 
src="http://gestdomain.com/GuestIframe/index.html" scrolling="no"></iframe>
```

3. and add the "getIframeData" function that will receive "data" from the gest iframe 
   than use the received data as you want (ex: control the height of the iframe)
```javascript
function getIframeData(data){
  if(data.height){
    $("#guestFrame").height(data.height);
  }
}
```

### Gest ###
4. on your gest page load "iframeproxy.js"
```
<script type="text/javascript" src="iframeproxy.js"></script>
```

5. than on window load make the host proxy by calling "iframeproxy.makeHostProxy(proxy_url)" 
   setting "proxy_url" to the path of "iframeproxy.html" on your host domain (see: step 1)
```javascript
window.onload=function(){
  iframeproxy.makeHostProxy("http://hostdomain.com/HostCrossDomainIframe/iframeproxy.html");
  //...
}
```

6. and send the data you want to receive by the hosting page (ex: the height of the gest page)
```javascript
  var h = document.body.clientHeight;
  iframeproxy.sendToHost({height:h});
```


