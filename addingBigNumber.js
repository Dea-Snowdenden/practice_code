function add(a, b) {
  var x,y;
  var first=a.split('').map(function(f){return parseInt(f)});
  var second=b.split('').map(function(s){return parseInt(s)});
  if(first.length > second.length){x=first;y=second}else{y=first;x=second}
  var res = [];
  var n,m;
  for(var i=0;i<x.length;i++){
    for(var j=0;j<y.length;j++){
      (!y[y.length-1-i]) ? m = 0 : m=y[y.length-1-i];
      n= x[x.length-1-i];
      res[x.length-1-i]=n+m;
    }
  }
  for(var i = res.length-1; i>-1;i--){
    if(res[i]>=10){
      if(i==0){
        res[i]=res[i];
      }
      else{
        res[i-1]+=1;
        res[i]=res[i]-10;
      }
 	 }
    else {
      res[i]=res[i];
    }
  }
  return res.join('');
}
