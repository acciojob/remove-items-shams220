//your JS code here. If required.
const select = querySelctor('#colorSelect');
const btn = querySelector('input[type="button"]');
btn.addEvenListener('click',()=>{
	select.remove(select.selectedIndex)
})