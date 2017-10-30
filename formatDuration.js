function formatDuration (seconds) {
  if (seconds==0) return "now";
  var years,days,hours,mins,secs;
  secs=seconds%60;
  mins=Math.floor(seconds/60);
  hours=Math.floor(seconds/3600);
  days=Math.floor(seconds/86400);
  years=Math.floor(seconds/31536000);
  if(mins>=60) mins=mins%60;
  if(hours>=24) hours=hours%24;
  if(days>=365) days=days%365;
  var result = "";
  if(years==1) result+="1 year, ";
  if(years>1) result+=(years.toString()+" years, ");
  if(days==1) result+="1 day, ";
  if(days>1) result+=(days.toString()+" days, ");
  if(hours==1) result+="1 hour, ";
  if(hours>1) result+=(hours.toString()+" hours, ");
  if(mins==1) result+="1 minute, ";
  if(mins>1) result+=(mins.toString()+" minutes, ");
  if(secs==1) result+="1 second ";
  if(secs>1) result+=(secs.toString()+" seconds ");
  result = result.trim().split(", ");
  if(result.length > 1) result[result.length-1] = "and "+result[result.length-1];
  result = result.join(", ");
  result = result.replace(", and "," and ");
  return result.replace(/,\s*$/, ''); 
}
