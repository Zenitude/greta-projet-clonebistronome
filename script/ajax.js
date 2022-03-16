let ajax = new XMLHttpRequest();
let method = "GET";
let url = "../configs/connectBdd.php";
let asynchronous = true;

ajax.open(method, url, asynchronous);
ajax.send();

ajax.onreadystatechange = function ()
{
	if(this.readyState == 4 && this.status == 200)
	{
		let data = JSON.parse(this.responseText);
		console.log(data);
	}
}