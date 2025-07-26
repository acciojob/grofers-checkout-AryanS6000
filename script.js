const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
 const sum =  document.Element.querySelectorAll("price");
	let total = 0;
	sum.foreach(function(priceElement){
	 const price = parsefloat(priceElement.textContent);
		total = price+total;
	});
	const newrow = document.createElement("tr");
	const newcell = document.createElement("td");
	newcell.setAttribute("colspan",2);
	newcell.textContent = "total-price:" + total;
	const table = document.querySelector(table);
	newrow.appendChild(newcell);
	table.appendChild(newrow);
	
};

getSumBtn.addEventListener("click", getSum);









