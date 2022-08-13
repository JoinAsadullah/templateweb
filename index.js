
document.getElementById('menuu').addEventListener('click',()=>{
 document.getElementById('nav2').classList.add('show');
 document.getElementById('menuu').classList.add('none');
 })
document.getElementById('nav2').addEventListener('click',()=>{
    document.getElementById('nav2').classList.remove('show');
    document.getElementById('menuu').classList.remove('none');
})