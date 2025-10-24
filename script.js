//your JS code here. If required.
const select = document.querySelector('#colorSelect');
const btn = document.querySelector('input[type="button"]');
btn.addEventListener('click',()=>{
	select.remove(select.selectedIndex)
})