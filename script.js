let remaining=(9*60)+19;
const countdown=document.getElementById('countdown');
function updateCountdown(){const minutes=Math.floor(remaining/60),seconds=remaining%60;countdown.textContent=`${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;if(remaining>0)remaining--;}
updateCountdown();setInterval(updateCountdown,1000);
