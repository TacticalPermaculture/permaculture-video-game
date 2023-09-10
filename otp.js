// build function to capture cursor movements 
//on x and y axis, upon change in direction on x axis, alternate truck icon 

function truckDirection(e){
	var xCoords = e.movementX;
	var yCoords = e.movementY;

	if (fuelGaugePercent==0){

		{drive.className='';
		drive.className='gameOver'
		gameOver.className='gameOverBannerOn'}
		gameOverBannerOn()

	}

	if (remainingBudget<1){

		{drive.className='';
		drive.className='gameOver'
		gameOver.className='gameOverBannerOn'
		gameOverBannerOn()

		}
	}


	else if (xCoords > 1 )

		{drive.className='';
		drive.className='driveEast'}

	else if (xCoords < 1 )

		{drive.className='';
		drive.className='driveWest'}

}  

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set permit initial values */

/* permit price per unit */

var permitPricePerUnit =100;

/* set permit inventory */

var permitInv =0;

/* permit installation hours */

var permitInstallLaborHours =1;

/* set total permit cost */

var permitTotalCost = 0


/* build function to refuel whereby distance and mileage counters are reset to zero, 
fuel gallons burnt are reset to zero based on reset distance and miles, reset fuel gauge calc
 with reset full level and reset gallons burnt, reset fuel gauge percent to 100, reset full level text color, 
 refresh the dash display */

function selectFuel(){
	distance = 0;
	miles = 0;
	fuelGallonsBurnt = miles / milesPerGallon;
	fuelGaugeCalc = fuelLevelGallons - fuelGallonsBurnt;
	fuelGaugePercent = 100 + (fuelGaugeCalc - fuelLevelGallons) / fuelLevelGallons * 100;

	dashPanelFuelGauge.classList.remove('redWarning', 'yellowWarning');
		
	document.getElementById('dashPanelFuelGauge').innerHTML = fuelGaugePercent.toFixed(0)  + "%" 

} 


// build function to change text color of truck load level display based on percentage

function updateLoadLevelWarning(){

	if  
		
		(totalTruckLoadPercent <33)

			{document.getElementById('totalTruckLoadPercentDisplay').className=('totalTruckLoadPercentDisplay')}	

	else if 

		(totalTruckLoadPercent >66)
	
			{document.getElementById('totalTruckLoadPercentDisplay').className=('totalTruckLoadPercentDisplay')	

			document.getElementById('totalTruckLoadPercentDisplay').classList.add('redWarningLoadLevel')}
	
	else if
		
		(totalTruckLoadPercent >33)

			{document.getElementById('totalTruckLoadPercentDisplay').className=('totalTruckLoadPercentDisplay')

			document.getElementById('totalTruckLoadPercentDisplay').classList.add('yellowWarningLoadLevel')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set distance to town */

var milesToTown = 30

/* set truck load percent */

/* set truck load percent */

var totalTruckLoadPercent = 0;

/* set work hours */

var workHours =0;

/* set distance driven*/

var distance = 0;

/* set units of site map per miles */

var unitsPerMile = 20;

/* set miles driven as distance driven divided by site map units per mile */

var miles = distance / unitsPerMile;

/* set miles per gallon of fuel */

var milesPerGallon = 15;

/* set price per gallon of fuel */

var pricePerGallon = 5;

/* set pricePerMile as price per gallon divided by miles per gallons*/

var pricePerMile = pricePerGallon / milesPerGallon;

/* set fuel cost as miles multiplied by price per mile */

var fuelCost = miles * pricePerMile;

/* set set maximum gallons of full fuel tank */

var fuelTankMax = 48;

/* set full fuel tank at start of design session */

var fuelLevelGallons = fuelTankMax;

/* set the formula to determine how many gallons of 
fuel have been burnt as miles driven divided by miles per gallon */

var fuelGallonsBurnt = miles / milesPerGallon;

/* set formula for fuel gauge measured in gallons as number of gallons 
in the tank minus the number of gallons burnt */

var fuelGaugeCalc = 0;

/* set formula to convert fuel gauge gallons metric to fuel gauge as a percentage */

var fuelGaugePercent = 100;

/* set total distance driven metric as independent of refueling reset cycle that zeros out distance counter */

var totalDistance =0;

/* set total miles driven metric as independent of refueling reset cycle that zeros out miles counter */

var totalMiles = 0;

/* set total fuel cost as independent of refueling reset cycle that zeros out fuel cost counter */ 

var totalFuelCost= 0;

/* set total materials cost */ 

var totalMaterialsCost = 0;

/* set total labor hours */ 

var totalLaborHours = 0;

/* set cost per labor hour*/ 

var costPerLaborHour = 20;

/* set total labor cost */ 

var totalLaborCost = 0;

/* set average miles per hour drive*/

var mph = 18;

/* set drive time meter */

var hoursDriven = 0; 

/* set drive time total cost */

var totalHoursDrivenCost = 0;

/* set total cost */ 

var totalCost = 0;

/* set starting budget */ 

var startingBudget = 1000000;

/* set remaining budget */ 

var remainingBudget = 1000000;

/* set refunds total */

var refundsTotal = 0;

/* build meta functions*/

// build function to capture cursor coordinatess

var x = 0;
var y = 0;

function captureCoords(event) {
	x = event.clientX;
	y = event.clientY;

  }

// build function to place element menu at cursor coordinatess

// build functions to open and close element menu

      function elementMenuOpen() {
		
		document.getElementById("elementMenu").style.display = "block";
		document.getElementById("elementMenu").style.position = "fixed";
        document.getElementById("elementMenu").style.left = x+"px";
        document.getElementById("elementMenu").style.top = y+"px";

      }
      function elementMenuClose() {
        document.getElementById("elementMenu").style.display = "none";
      }

/* build build meta functions that requireupdated lists of variables */

/* build function to update totalTruckLoadPercent by adding all potential loaded element percentages */

function updateTotalTruckLoadPercent(){

	totalTruckLoadPercent = bambooHTruckLoadPercent + bambooVTruckLoadPercent + cardboardTruckLoadPercent 
	+ compostTruckLoadPercent + compostingToiletTruckLoadPercent + earthBagWallTruckLoadPercent + firePitTruckLoadPercent 
	+ foodStorageContainersTruckLoadPercent
	+ greenHouseTruckLoadPercent + gravelTruckLoadPercent + 
	+ groundCoverTruckLoadPercent + herbsTruckLoadPercent + honeyBeeHiveTruckLoadPercent
	+ livingBarbedWireTruckLoadPercent + medTentTruckLoadPercent 
	+ mulchTruckLoadPercent + pipeHTruckLoadPercent 
	+ pipeVTruckLoadPercent + pondSealantTruckLoadPercent + poultryTruckLoadPercent + rootCropsTruckLoadPercent 
	+ sheetMetalTruckLoadPercent + shortTreeTruckLoadPercent + shrubsTruckLoadPercent + solarPanelsTruckLoadPercent 
	+ stoneTruckLoadPercent + strawBaleTruckLoadPercent + tallTreeTruckLoadPercent + tanksTruckLoadPercent + vinesTruckLoadPercent 
	+ wireFencingTruckLoadPercent + woodCoreBermTruckLoadPercent;
		
	}

/* build function to update materials cost dashboard panel */

function totalMaterialsCostUpdate(){

	totalMaterialsCost = bambooHCost + bambooVCost + cardboardCost + compostCost 
	+ compostingToiletCost + earthBagWallCost + firePitCost + foodStorageContainersCost + greenHouseCost 
	+ gravelCost + gravelCost 
	+ groundCoverCost + herbsCost + honeyBeeHiveCost + livingBarbedWireCost 
	+ mulchCost + medTentCost + pipeHCost + pipeVCost + pondSealantCost 
	+ poultryCost + rootCropsCost + sheetMetalCost + shortTreeCost 
	+ shrubsCost + solarPanelsCost + stoneCost + strawBaleCost 
	+ tallTreeCost + tanksCost + vinesCost	+ wireFencingCost + woodCoreBermCost 

	document.getElementById('totalMaterialsCostDash').innerHTML = "$" + totalMaterialsCost.toFixed(2);
}

/* rebuild total cost */

function updateTotalCost(){

	totalCost = totalMaterialsCost + totalLaborCost + totalFuelCost + totalHoursDrivenCost + permitTotalCost; 
	document.getElementById('totalCostDash').innerHTML = "$" +totalCost.toFixed(0);

}

function updateRemainingBudget(){

	
	remainingBudget = startingBudget;
	remainingBudget-=totalCost - refundsTotal;

	if (remainingBudget>0){

	document.getElementById('budgetDash').innerHTML = "$" + remainingBudget.toFixed(0); 
	refundsTotal= 0;}

	else if (remainingBudget<1){

		document.getElementById('budgetDash').innerHTML = "$0"; 
		refundsTotal= 0;

	} // end conditional above zero remaining budget function
	

}


/* build update total hours driven cost dash */

function updateTotalHoursDrivenCostDash(){

	document.getElementById('totalHoursDrivenDash').innerHTML = hoursDriven.toFixed(0);

	document.getElementById('totalHoursDrivenCostDash').innerHTML = "$" + totalHoursDrivenCost.toFixed(0);

}

/* build update labor cost dashboard panel */

function updateLaborCostDashboardPanel(){

	document.getElementById('totalLaborHoursDash').innerHTML = totalLaborHours;

	document.getElementById('totalLaborCostDash').innerHTML = " $" + totalLaborCost.toFixed(0);

}

/* build function to track and update metrics needed to populate running mileage, 
fuel cost, and fuel gauge percent dashboard display */

function dstCtr(){
	
	miles = distance / unitsPerMile;
	pricePerMile = pricePerGallon / milesPerGallon;
	fuelCost = miles * pricePerMile;
	fuelGallonsBurnt = miles / milesPerGallon;
	fuelGaugeCalc = fuelLevelGallons - fuelGallonsBurnt;
	fuelGaugePercent = 100 + (fuelGaugeCalc - fuelLevelGallons) / fuelLevelGallons * 100;
	totalMiles = totalDistance / unitsPerMile;
	totalFuelCost= totalMiles * pricePerMile;
	hoursDriven = totalMiles / mph; 
	totalHoursDrivenCost = hoursDriven * costPerLaborHour;
	updateTotalHoursDrivenCostDash()
	totalMaterialsCostUpdate()	
	updateTotalCost()
	updateRemainingBudget()
	updateLaborCostDashboardPanel()


/* if there is fuel in the tank, increment both the resetting distance counter and total distance counter,
then refresh the dash display; change the color of the fuel level percentage text to yellow if 
below 2/3 full, and red if below 1/3 full*/

	if (fuelGaugePercent >0)

		{distance++;

		totalDistance++;

	document.getElementById('dashPanelMiles').innerHTML = totalMiles.toFixed(0) 
	
	document.getElementById('dashPanelFuelCost').innerHTML = "$" + totalFuelCost.toFixed(0);   
	
	document.getElementById('dashPanelFuelGauge').innerHTML = fuelGaugePercent.toFixed(0)  + "%" 

	if (fuelGaugePercent <66)
	 
		{dashPanelFuelGauge.classList.add('yellowWarning')};

	if (fuelGaugePercent <33)
	 
		{dashPanelFuelGauge.classList.add('redWarning')};	
}  
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build per element functions */

/* build function to calculate bambooH truck load percent */

function bambooHTruckLoadPercentUpdate(){

	bambooHTruckLoadPercent = bambooHInv * bambooHTruckLoadPercentPerUnit;
	
	}

/* build function to install a unit of bambooH*/

function installBambooH(){

	bambooHInv--;

	bambooHTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	bambooHMenuSelectorHide()

	totalLaborHours+=bambooHInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('bambooHInv').innerHTML = ' | ' + bambooHInv + ' | ' + '$' +bambooHCost;
	
	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'
		
	}

/* build function to uninstall bambooh */

function uninstallBambooH(){

	bambooHInv++;

		bambooHTruckLoadPercentUpdate()

		updateTotalTruckLoadPercent()

		updateLoadLevelWarning()

		bambooHMenuSelectorReset()

        totalLaborHours+=bambooHInstallLaborHours;

        totalLaborCost = totalLaborHours * costPerLaborHour;

        document.getElementById('bambooHInv').innerHTML = ' | ' + bambooHInv + ' | ' + '$' +bambooHCost;

		document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide bambooH menu selector when inventory is at zero

function bambooHMenuSelectorHide(){

    if (bambooHInv ==0) 

		{let bambooHMenuSelector = document.getElementById('bambooHMenuSelector');

        bambooHMenuSelector.classList.add('elementSupplyDepleted')}

}


// build function to reset bambooH supply depletion indicator 

function bambooHMenuSelectorReset(){
    
	if (bambooHInv >0) 

		{let bambooHMenuSelector = document.getElementById('bambooHMenuSelector');

		bambooHMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate bambooV truck load percent */

function bambooVTruckLoadPercentUpdate(){

	bambooVTruckLoadPercent = bambooVInv * bambooVTruckLoadPercentPerUnit;
	
	}

/* build function to install a unit of bambooV*/

function installBambooV(){

	bambooVInv--;

	bambooVTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	bambooVMenuSelectorHide()

	totalLaborHours+=bambooVInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('bambooVInv').innerHTML = ' | ' + bambooVInv + ' | ' + '$' +bambooVCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'
		
	}

/* build function to uninstall bambooV */

function uninstallBambooV(){

	bambooVInv++;

		bambooVTruckLoadPercentUpdate()

		updateTotalTruckLoadPercent()

		updateLoadLevelWarning()

		bambooVMenuSelectorReset()

        totalLaborHours+=bambooVInstallLaborHours;

        totalLaborCost = totalLaborHours * costPerLaborHour;

        document.getElementById('bambooVInv').innerHTML = ' | ' + bambooVInv + ' | ' + '$' +bambooVCost;       

		document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide bambooV menu selector when inventory is at zero

function bambooVMenuSelectorHide(){

    if (bambooVInv ==0) 

		{let bambooVMenuSelector = document.getElementById('bambooVMenuSelector');

        bambooVMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset bambooV supply depletion indicator 

function bambooVMenuSelectorReset(){
    
	if (bambooVInv >0) 

		{let bambooVMenuSelector = document.getElementById('bambooVMenuSelector');

		bambooVMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// build function to hide cardboard menu selector when inventory is at zero

let cardboardMenuSelector = document.getElementById('cardboardMenuSelector');

function cardboardMenuSelectorHide(){

    if (cardboardInv ==0){
      
      cardboardMenuSelector.classList.add('elementSupplyDepleted')}

}


// build function to reset cardboard  supply depletion indicator 

function cardboardMenuSelectorReset(){
    
	if (cardboardInv >0) 

		cardboardMenuSelector.classList.remove('elementSupplyDepleted')}


/* build function to calculate cardboard truck load percent */

function cardboardTruckLoadPercentUpdate(){

	cardboardTruckLoadPercent = cardboardInv * cardboardTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of cardboard*/

function cardboardInstall(){

	cardboardInv--;

	cardboardTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

  cardboardMenuSelectorHide()

	totalLaborHours+=cardboardInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('cardboardInv').innerHTML = ' | ' + cardboardInv + ' | ' + '$' +cardboardCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall cardboard */

function cardboardUninstall(){

	cardboardInv++;

	cardboardTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()
  
  cardboardMenuSelectorReset()

  totalLaborHours+=cardboardInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  document.getElementById('cardboardInv').innerHTML = ' | ' + cardboardInv + ' | ' + '$' +cardboardCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


/* build function to calculate compost truck load percent */

function compostTruckLoadPercentUpdate(){

	compostTruckLoadPercent = compostInv * compostTruckLoadPercentPerUnit;
	
	}

/* build function to install a unit of compost*/

function installCompost(){

	compostInv--;

	compostTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	compostMenuSelectorHide()

	totalLaborHours+=compostInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('compostInv').innerHTML = ' | ' + compostInv + ' | ' + '$' +compostCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'
				
	}

/* build function to uninstall compost */

function uninstallCompost(){

	//compostInv++;

		//compostTruckLoadPercentUpdate()

		//updateTotalTruckLoadPercent()

		//updateLoadLevelWarning()

		compostMenuSelectorReset()

        totalLaborHours+=compostInstallLaborHours;

        totalLaborCost = totalLaborHours * costPerLaborHour;

        //document.getElementById('compostInv').innerHTML = ' | ' + compostInv + ' | ' + '$' +compostCost;

		//document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide compost menu selector when inventory is at zero

function compostMenuSelectorHide(){

    if (compostInv ==0) 

		{let compostMenuSelector = document.getElementById('compostMenuSelector');

        compostMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset compost supply depletion indicator 

function compostMenuSelectorReset(){
    
	if (compostInv >0) 

		{let compostMenuSelector = document.getElementById('compostMenuSelector');

		compostMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// build function to hide compostingToilet menu selector when inventory is at zero

let compostingToiletMenuSelector = document.getElementById('compostingToiletMenuSelector');

function compostingToiletMenuSelectorHide(){

    if (compostingToiletInv ==0){
      
      compostingToiletMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset compostingToilet  supply depletion indicator 

function compostingToiletMenuSelectorReset(){
    
	if (compostingToiletInv >0) 

		compostingToiletMenuSelector.classList.remove('elementSupplyDepleted')}


/* build function to calculate compostingToilet truck load percent */

function compostingToiletTruckLoadPercentUpdate(){

	compostingToiletTruckLoadPercent = compostingToiletInv * compostingToiletTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of compostingToilet*/

function compostingToiletInstall(){

	compostingToiletInv--;

	compostingToiletTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

  compostingToiletMenuSelectorHide()

	totalLaborHours+=compostingToiletInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('compostingToiletInv').innerHTML = ' | ' + compostingToiletInv + ' | ' + '$' +compostingToiletCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall compostingToilet */

function compostingToiletUninstall(){

	compostingToiletInv++;

	compostingToiletTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()
  
  compostingToiletMenuSelectorReset()

  totalLaborHours+=compostingToiletInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  document.getElementById('compostingToiletInv').innerHTML = ' | ' + compostingToiletInv + ' | ' + '$' +compostingToiletCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


/* build function to calculate earthBagWall truck load percent */

function earthBagWallTruckLoadPercentUpdate(){

	earthBagWallTruckLoadPercent = earthBagWallInv * earthBagWallTruckLoadPercentPerUnit;
	
	}

/* build function to install a unit of earthBagWall*/

function installEarthBagWall(){

	earthBagWallInv--;

	earthBagWallTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	earthBagWallMenuSelectorHide()

	totalLaborHours+=earthBagWallInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('earthBagWallInv').innerHTML = ' | ' + earthBagWallInv + ' | ' + '$' +earthBagWallCost;
		
	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'
		
	}

/* build function to uninstall earthBagWall */

function uninstallEarthBagWall(){

	earthBagWallInv++;

		earthBagWallTruckLoadPercentUpdate()

		updateTotalTruckLoadPercent()

		updateLoadLevelWarning()

		earthBagWallMenuSelectorReset()

        totalLaborHours+=earthBagWallInstallLaborHours;

        totalLaborCost = totalLaborHours * costPerLaborHour;

        document.getElementById('earthBagWallInv').innerHTML = ' | ' + earthBagWallInv + ' | ' + '$' +bambooHCost;

		document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

	
// build function to hide earthBagWall menu selector when inventory is at zero

function earthBagWallMenuSelectorHide(){

    if (earthBagWallInv ==0) 

		{let earthBagWallMenuSelector = document.getElementById('earthBagWallMenuSelector');

        earthBagWallMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset earthBagWall supply depletion indicator 

function earthBagWallMenuSelectorReset(){
    
	if (earthBagWallInv >0) 

		{let earthBagWallMenuSelector = document.getElementById('earthBagWallMenuSelector');

		earthBagWallMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// build function to hide firePit menu selector when inventory is at zero

let firePitMenuSelector = document.getElementById('firePitMenuSelector');

function firePitMenuSelectorHide(){

    if (firePitInv ==0){
      
      firePitMenuSelector.classList.add('elementSupplyDepleted')}

}


// build function to reset firePit  supply depletion indicator 

function firePitMenuSelectorReset(){
    
	if (firePitInv >0) 

		firePitMenuSelector.classList.remove('elementSupplyDepleted')}


/* build function to calculate firePit truck load percent */

function firePitTruckLoadPercentUpdate(){

	firePitTruckLoadPercent = firePitInv * firePitTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of firePit*/

function firePitInstall(){

	firePitInv--;

	firePitTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

  firePitMenuSelectorHide()

	totalLaborHours+=firePitInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('firePitInv').innerHTML = ' | ' + firePitInv + ' | ' + '$' +firePitCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall firePit */

function firePitUninstall(){

	firePitInv++;

	firePitTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()
  
  firePitMenuSelectorReset()

  totalLaborHours+=firePitInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  document.getElementById('firePitInv').innerHTML = ' | ' + firePitInv + ' | ' + '$' +firePitCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// build function to hide foodStorageContainers menu selector when inventory is at zero

let foodStorageContainersMenuSelector = document.getElementById('foodStorageContainersMenuSelector');

function foodStorageContainersMenuSelectorHide(){

    if (foodStorageContainersInv ==0){
      
      foodStorageContainersMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset foodStorageContainers  supply depletion indicator 

function foodStorageContainersMenuSelectorReset(){
    
	if (foodStorageContainersInv >0) 

		foodStorageContainersMenuSelector.classList.remove('elementSupplyDepleted')}


/* build function to calculate foodStorageContainers truck load percent */

function foodStorageContainersTruckLoadPercentUpdate(){

	foodStorageContainersTruckLoadPercent = foodStorageContainersInv * foodStorageContainersTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of foodStorageContainers*/

function foodStorageContainersInstall(){

	foodStorageContainersInv--;

	foodStorageContainersTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

  foodStorageContainersMenuSelectorHide()

	totalLaborHours+=foodStorageContainersInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('foodStorageContainersInv').innerHTML = ' | ' + foodStorageContainersInv + ' | ' + '$' +foodStorageContainersCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall foodStorageContainers */

function foodStorageContainersUninstall(){

	foodStorageContainersInv++;

	foodStorageContainersTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()
  
  foodStorageContainersMenuSelectorReset()

  totalLaborHours+=foodStorageContainersInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  document.getElementById('foodStorageContainersInv').innerHTML = ' | ' + foodStorageContainersInv + ' | ' + '$' +foodStorageContainersCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// build function to hide greenHouse menu selector when inventory is at zero


let greenHouseMenuSelector = document.getElementById('greenHouseMenuSelector');

function greenHouseMenuSelectorHide(){

    if (greenHouseInv ==0){
      
      greenHouseMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset greenHouse  supply depletion indicator 

function greenHouseMenuSelectorReset(){
    
	if (greenHouseInv >0) 

		greenHouseMenuSelector.classList.remove('elementSupplyDepleted')}


/* build function to calculate greenHouse truck load percent */

function greenHouseTruckLoadPercentUpdate(){

	greenHouseTruckLoadPercent = greenHouseInv * greenHouseTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of greenHouse*/

function greenHouseInstall(){

	greenHouseInv--;

	greenHouseTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

  greenHouseMenuSelectorHide()

	totalLaborHours+=greenHouseInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('greenHouseInv').innerHTML = ' | ' + greenHouseInv + ' | ' + '$' +greenHouseCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall greenHouse */

function greenHouseUninstall(){

	greenHouseInv++;

	greenHouseTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()
  
  greenHouseMenuSelectorReset()

  totalLaborHours+=greenHouseInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  document.getElementById('greenHouseInv').innerHTML = ' | ' + greenHouseInv + ' | ' + '$' +greenHouseCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate gravel truck load percent */

function gravelTruckLoadPercentUpdate(){

	gravelTruckLoadPercent = gravelInv * gravelTruckLoadPercentPerUnit;
	
	}

/* build function to install a unit of gravel*/

function installGravel(){

	gravelInv--;

	gravelTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	gravelMenuSelectorHide()

	totalLaborHours+=gravelInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('gravelInv').innerHTML = ' | ' + gravelInv + ' | ' + '$' +gravelCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'
		
	}

/* build function to uninstall gravel */

function uninstallGravel(){

	gravelInv++;

		gravelTruckLoadPercentUpdate()

		updateTotalTruckLoadPercent()

		updateLoadLevelWarning()

		gravelMenuSelectorReset()

        totalLaborHours+=gravelInstallLaborHours;

        totalLaborCost = totalLaborHours * costPerLaborHour;

        document.getElementById('gravelInv').innerHTML = ' | ' + gravelInv + ' | ' + '$' +gravelCost;

		document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}


// build function to hide gravel menu selector when inventory is at zero

function gravelMenuSelectorHide(){

    if (gravelInv ==0) 

		{let gravelMenuSelector = document.getElementById('gravelMenuSelector');

        gravelMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset gravel supply depletion indicator 

function gravelMenuSelectorReset(){
    
	if (gravelInv >0) 

		{let gravelMenuSelector = document.getElementById('gravelMenuSelector');

		gravelMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


/* build function to calculate groundCover truck load percent */

function groundCoverTruckLoadPercentUpdate(){

	groundCoverTruckLoadPercent = groundCoverInv * groundCoverTruckLoadPercentPerUnit;
	
	}

/* build function to install a unit of groundCover*/

function groundCoverInstall(){

	groundCoverInv--;

	groundCoverTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	groundCoverMenuSelectorHide()

	totalLaborHours+=groundCoverInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('groundCoverInv').innerHTML = ' | ' + groundCoverInv + ' | ' + '$' +groundCoverCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall groundCover */

function groundCoverUninstall(){

	//groundCoverInv++;

		//groundCoverTruckLoadPercentUpdate()

		//updateTotalTruckLoadPercent()

		//updateLoadLevelWarning()

		groundCoverMenuSelectorReset()

        totalLaborHours+=groundCoverInstallLaborHours;

        totalLaborCost = totalLaborHours * costPerLaborHour;

        //document.getElementById('groundCoverInv').innerHTML = ' | ' + groundCoverInv + ' | ' + '$' +groundCoverCost;

		//document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'
}

// build function to hide groundCover menu selector when inventory is at zero

function groundCoverMenuSelectorHide(){

    if (groundCoverInv ==0) 

		{let groundCoverMenuSelector = document.getElementById('groundCoverMenuSelector');

        groundCoverMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset groundCover supply depletion indicator 

function groundCoverMenuSelectorReset(){
    
	if (groundCoverInv >0) 

		{let groundCoverMenuSelector = document.getElementById('groundCoverMenuSelector');

		groundCoverMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate herbs truck load percent */

function herbsTruckLoadPercentUpdate(){

	herbsTruckLoadPercent = herbsInv * herbsTruckLoadPercentPerUnit;
	
	}

/* build function to install a unit of herbs*/

function herbsInstall(){

	herbsInv--;

	herbsTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	herbsMenuSelectorHide()

	totalLaborHours+=herbsInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('herbsInv').innerHTML = ' | ' + herbsInv + ' | ' + '$' +herbsCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall herbs */

function herbsUninstall(){

	//herbsInv++;

	//	herbsTruckLoadPercentUpdate()

	//	updateTotalTruckLoadPercent()

	//	updateLoadLevelWarning()
		
		herbsMenuSelectorReset()

        totalLaborHours+=herbsInstallLaborHours;

        totalLaborCost = totalLaborHours * costPerLaborHour;

    //  document.getElementById('herbsInv').innerHTML = ' | ' + herbsInv + ' | ' + '$' +herbsCost;

	//	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'
}

// build function to hide groherbsundCover menu selector when inventory is at zero

function herbsMenuSelectorHide(){

    if (herbsInv ==0) 

		{let herbsMenuSelector = document.getElementById('herbsMenuSelector');

        herbsMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset herbs supply depletion indicator 

function herbsMenuSelectorReset(){
    
	if (herbsInv >0) 

		{let herbsMenuSelector = document.getElementById('herbsMenuSelector');

		herbsMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// build function to hide honeyBeeHive menu selector when inventory is at zero

let honeyBeeHiveMenuSelector = document.getElementById('honeyBeeHiveMenuSelector');

function honeyBeeHiveMenuSelectorHide(){

    if (honeyBeeHiveInv ==0){
      
      honeyBeeHiveMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset honeyBeeHive  supply depletion indicator 

function honeyBeeHiveMenuSelectorReset(){
    
	if (honeyBeeHiveInv >0) 

		honeyBeeHiveMenuSelector.classList.remove('elementSupplyDepleted')}


/* build function to calculate honeyBeeHive truck load percent */

function honeyBeeHiveTruckLoadPercentUpdate(){

	honeyBeeHiveTruckLoadPercent = honeyBeeHiveInv * honeyBeeHiveTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of honeyBeeHive*/

function honeyBeeHiveInstall(){

	honeyBeeHiveInv--;

	honeyBeeHiveTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

  honeyBeeHiveMenuSelectorHide()

	totalLaborHours+=honeyBeeHiveInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('honeyBeeHiveInv').innerHTML = ' | ' + honeyBeeHiveInv + ' | ' + '$' +honeyBeeHiveCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall honeyBeeHive */

function honeyBeeHiveUninstall(){

	honeyBeeHiveInv++;

	honeyBeeHiveTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()
  
  honeyBeeHiveMenuSelectorReset()

  totalLaborHours+=honeyBeeHiveInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  document.getElementById('honeyBeeHiveInv').innerHTML = ' | ' + honeyBeeHiveInv + ' | ' + '$' +honeyBeeHiveCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// build function to hide livingBarbedWire menu selector when inventory is at zero

function livingBarbedWireMenuSelectorHide(){
    
	if (livingBarbedWireInv ==0) 

		{let livingBarbedWireMenuSelector = document.getElementById('livingBarbedWireMenuSelector');

		livingBarbedWireMenuSelector.classList.add('elementSupplyDepleted')}

}


// build function to reset livingBarbedWire  supply depletion indicator 

function livingBarbedWireMenuSelectorReset(){

if (livingBarbedWireInv >0) 

	{let livingBarbedWireMenuSelector = document.getElementById('livingBarbedWireMenuSelector');

	livingBarbedWireMenuSelector.classList.remove('elementSupplyDepleted')}

}

/* build function to calculate livingBarbedWire truck load percent */

function livingBarbedWireTruckLoadPercentUpdate(){

livingBarbedWireTruckLoadPercent = livingBarbedWireInv * livingBarbedWireTruckLoadPercentPerUnit;

}


/* build function to install a unit of livingBarbedWire*/

function livingBarbedWireInstall(){

livingBarbedWireInv--;

livingBarbedWireTruckLoadPercentUpdate()

updateTotalTruckLoadPercent()

updateLoadLevelWarning()

livingBarbedWireMenuSelectorHide()

totalLaborHours+=livingBarbedWireInstallLaborHours;
			  
totalLaborCost = totalLaborHours * costPerLaborHour;
	
document.getElementById('livingBarbedWireInv').innerHTML = ' | ' + livingBarbedWireInv + ' | ' + '$' +livingBarbedWireCost;

document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

/* build function to uninstall livingBarbedWire */

function livingBarbedWireUninstall(){

//livingBarbedWireInv++;

//livingBarbedWireTruckLoadPercentUpdate()

//updateTotalTruckLoadPercent()

//updateLoadLevelWarning()

livingBarbedWireMenuSelectorReset()

totalLaborHours+=livingBarbedWireInstallLaborHours;

totalLaborCost = totalLaborHours * costPerLaborHour;

//document.getElementById('livingBarbedWireInv').innerHTML = ' | ' + livingBarbedWireInv + ' | ' + '$' +livingBarbedWireCost;

//document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate medTent truck load percent */

function medTentTruckLoadPercentUpdate(){

	medTentTruckLoadPercent = medTentInv * medTentTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of medTent*/

function medTentInstall(){

	medTentInv--;

	medTentTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	medTentMenuSelectorHide()

	totalLaborHours+=medTentInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('medTentInv').innerHTML = ' | ' + medTentInv + ' | ' + '$' +medTentCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall medTent */

function medTentUninstall(){

	medTentInv++;

	medTentTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()
  
	medTentMenuSelectorReset()

  	totalLaborHours+=medTentInstallLaborHours;

  	totalLaborCost = totalLaborHours * costPerLaborHour;

  	document.getElementById('medTentInv').innerHTML = ' | ' + medTentInv + ' | ' + '$' +medTentCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}


// build function to hide medTent menu selector when inventory is at zero


let medTentMenuSelector = document.getElementById('medTentMenuSelector');

function medTentMenuSelectorHide(){

    if (medTentInv ==0) 

		{medTentMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset medTent  supply depletion indicator 

function medTentMenuSelectorReset(){
    
	if (medTentInv >0){ 
	
		medTentMenuSelector.classList.remove('elementSupplyDepleted')}
	
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate mulch truck load percent */

function mulchTruckLoadPercentUpdate(){

	mulchTruckLoadPercent = mulchInv * mulchTruckLoadPercentPerUnit;
	
	}

/* build function to install a unit of mulch*/

function mulchInstall(){

	mulchInv--;

	mulchTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	mulchMenuSelectorHide()

	totalLaborHours+=mulchInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('mulchInv').innerHTML = ' | ' + mulchInv + ' | ' + '$' +mulchCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall mulch */

function mulchUninstall(){

	//mulchInv++;

	//	mulchTruckLoadPercentUpdate()

	//	updateTotalTruckLoadPercent()

	//	updateLoadLevelWarning()

		mulchMenuSelectorReset()

        totalLaborHours+=mulchInstallLaborHours;

        totalLaborCost = totalLaborHours * costPerLaborHour;

    //    document.getElementById('mulchInv').innerHTML = ' | ' + mulchInv + ' | ' + '$' +mulchCost;

	//	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'
}

// build function to hide mulch menu selector when inventory is at zero

function mulchMenuSelectorHide(){

    if (mulchInv ==0) 

		{let mulchMenuSelector = document.getElementById('mulchMenuSelector');

        mulchMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset mulch supply depletion indicator 

function mulchMenuSelectorReset(){
    
	if (mulchInv >0) 

		{let mulchMenuSelector = document.getElementById('mulchMenuSelector');

		mulchMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate pipeH truck load percent */

function pipeHTruckLoadPercentUpdate(){

	pipeHTruckLoadPercent = pipeHInv * pipeHTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of pipeH*/

function pipeHInstall(){

	pipeHInv--;

	pipeHTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	pipeHMenuSelectorHide()

	totalLaborHours+=pipeHInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('pipeHInv').innerHTML = ' | ' + pipeHInv + ' | ' + '$' +pipeHCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall pipeH */

function pipeHUninstall(){

	pipeHInv++;

	pipeHTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	pipeHMenuSelectorReset()

  	totalLaborHours+=pipeHInstallLaborHours;

  	totalLaborCost = totalLaborHours * costPerLaborHour;

  	document.getElementById('pipeHInv').innerHTML = ' | ' + pipeHInv + ' | ' + '$' +pipeHCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide gropipeHundCover menu selector when inventory is at zero

function pipeHMenuSelectorHide(){

    if (pipeHInv ==0) 

		{let pipeHMenuSelector = document.getElementById('pipeHMenuSelector');

        pipeHMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset pipeH supply depletion indicator 

function pipeHMenuSelectorReset(){
    
	if (pipeHInv >0) 

		{let pipeHMenuSelector = document.getElementById('pipeHMenuSelector');

		pipeHMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate pipeV truck load percent */

function pipeVTruckLoadPercentUpdate(){

	pipeVTruckLoadPercent = pipeVInv * pipeVTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of pipeV*/

function pipeVInstall(){

	pipeVInv--;

	pipeVTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	pipeVMenuSelectorHide()

	totalLaborHours+=pipeVInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('pipeVInv').innerHTML = ' | ' + pipeVInv + ' | ' + '$' +pipeVCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall pipeV */

function pipeVUninstall(){

	pipeVInv++;

	pipeVTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	pipeVMenuSelectorReset()

 	totalLaborHours+=pipeVInstallLaborHours;

  	totalLaborCost = totalLaborHours * costPerLaborHour;

  	document.getElementById('pipeVInv').innerHTML = ' | ' + pipeVInv + ' | ' + '$' +pipeVCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide gropipeVundCover menu selector when inventory is at zero

function pipeVMenuSelectorHide(){

    if (pipeVInv ==0) 

		{let pipeVMenuSelector = document.getElementById('pipeVMenuSelector');

        pipeVMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset pipeV supply depletion indicator 

function pipeVMenuSelectorReset(){
    
	if (pipeVInv >0) 

		{let pipeVMenuSelector = document.getElementById('pipeVMenuSelector');

		pipeVMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate pondSealant truck load percent */

function pondSealantTruckLoadPercentUpdate(){

	pondSealantTruckLoadPercent = pondSealantInv * pondSealantTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of pondSealant*/

function pondSealantInstall(){

	pondSealantInv--;

	pondSealantTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	pondSealantMenuSelectorHide()

	totalLaborHours+=pondSealantInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('pondSealantInv').innerHTML = ' | ' + pondSealantInv + ' | ' + '$' +pondSealantCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall pondSealant */

function pondSealantUninstall(){

	pondSealantInv++;

	pondSealantTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	pondSealantMenuSelectorReset()

  totalLaborHours+=pondSealantInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  document.getElementById('pondSealantInv').innerHTML = ' | ' + pondSealantInv + ' | ' + '$' +pondSealantCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide gropondSealantundCover menu selector when inventory is at zero

function pondSealantMenuSelectorHide(){

    if (pondSealantInv ==0) 

		{let pondSealantMenuSelector = document.getElementById('pondSealantMenuSelector');

        pondSealantMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset pondSealant supply depletion indicator 

function pondSealantMenuSelectorReset(){
    
	if (pondSealantInv >0) 

		{let pondSealantMenuSelector = document.getElementById('pondSealantMenuSelector');

		pondSealantMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate poultry truck load percent */

function poultryTruckLoadPercentUpdate(){

	poultryTruckLoadPercent = poultryInv * poultryTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of poultry*/

function poultryInstall(){

	poultryInv--;

	poultryTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	poultryMenuSelectorHide()

	totalLaborHours+=poultryInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('poultryInv').innerHTML = ' | ' + poultryInv + ' | ' + '$' +poultryCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall poultry */

function poultryUninstall(){

	poultryInv++;

	poultryTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	poultryMenuSelectorReset()

  totalLaborHours+=poultryInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  document.getElementById('poultryInv').innerHTML = ' | ' + poultryInv + ' | ' + '$' +poultryCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide gropoultryundCover menu selector when inventory is at zero

function poultryMenuSelectorHide(){

    if (poultryInv ==0) 

		{let poultryMenuSelector = document.getElementById('poultryMenuSelector');

        poultryMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset poultry supply depletion indicator 

function poultryMenuSelectorReset(){
    
	if (poultryInv >0) 

		{let poultryMenuSelector = document.getElementById('poultryMenuSelector');

		poultryMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate rootCrops truck load percent */

function rootCropsTruckLoadPercentUpdate(){

	rootCropsTruckLoadPercent = rootCropsInv * rootCropsTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of rootCrops*/

function rootCropsInstall(){

	rootCropsInv--;

	rootCropsTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	rootCropsMenuSelectorHide()

	totalLaborHours+=rootCropsInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('rootCropsInv').innerHTML = ' | ' + rootCropsInv + ' | ' + '$' +rootCropsCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall rootCrops */

function rootCropsUninstall(){

	//rootCropsInv++;

	//rootCropsTruckLoadPercentUpdate()

	//updateTotalTruckLoadPercent()

	//updateLoadLevelWarning()

	rootCropsMenuSelectorReset()

  totalLaborHours+=rootCropsInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

 // document.getElementById('rootCropsInv').innerHTML = ' | ' + rootCropsInv + ' | ' + '$' +rootCropsCost;

//	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide grorootCropsundCover menu selector when inventory is at zero

function rootCropsMenuSelectorHide(){

    if (rootCropsInv ==0) 

		{let rootCropsMenuSelector = document.getElementById('rootCropsMenuSelector');

        rootCropsMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset rootCrops supply depletion indicator 

function rootCropsMenuSelectorReset(){
    
	if (rootCropsInv >0) 

		{let rootCropsMenuSelector = document.getElementById('rootCropsMenuSelector');

		rootCropsMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate sheetMetal truck load percent */

function sheetMetalTruckLoadPercentUpdate(){

	sheetMetalTruckLoadPercent = sheetMetalInv * sheetMetalTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of sheetMetal*/

function sheetMetalInstall(){

	sheetMetalInv--;

	sheetMetalTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	sheetMetalMenuSelectorHide()

	totalLaborHours+=sheetMetalInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('sheetMetalInv').innerHTML = ' | ' + sheetMetalInv + ' | ' + '$' +sheetMetalCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall sheetMetal */

function sheetMetalUninstall(){

	sheetMetalInv++;

	sheetMetalTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	sheetMetalMenuSelectorReset()

  totalLaborHours+=sheetMetalInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  document.getElementById('sheetMetalInv').innerHTML = ' | ' + sheetMetalInv + ' | ' + '$' +sheetMetalCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide grosheetMetalundCover menu selector when inventory is at zero

function sheetMetalMenuSelectorHide(){

    if (sheetMetalInv ==0) 

		{let sheetMetalMenuSelector = document.getElementById('sheetMetalMenuSelector');

        sheetMetalMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset sheetMetal supply depletion indicator 

function sheetMetalMenuSelectorReset(){
    
	if (sheetMetalInv >0) 

		{let sheetMetalMenuSelector = document.getElementById('sheetMetalMenuSelector');

		sheetMetalMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


/* build function to calculate shortTree truck load percent */

function shortTreeTruckLoadPercentUpdate(){

	shortTreeTruckLoadPercent = shortTreeInv * shortTreeTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of shortTree*/

function shortTreeInstall(){

	shortTreeInv--;

	shortTreeTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	shortTreeMenuSelectorHide()

	totalLaborHours+=shortTreeInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('shortTreeInv').innerHTML = ' | ' + shortTreeInv + ' | ' + '$' +shortTreeCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall shortTree */

function shortTreeUninstall(){

	//shortTreeInv++;

	//shortTreeTruckLoadPercentUpdate()

	//updateTotalTruckLoadPercent()

	//updateLoadLevelWarning()

	shortTreeMenuSelectorReset()

  totalLaborHours+=shortTreeInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

//  document.getElementById('shortTreeInv').innerHTML = ' | ' + shortTreeInv + ' | ' + '$' +shortTreeCost;

//	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide groshortTreeundCover menu selector when inventory is at zero

function shortTreeMenuSelectorHide(){

    if (shortTreeInv ==0) 

		{let shortTreeMenuSelector = document.getElementById('shortTreeMenuSelector');

        shortTreeMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset shortTree supply depletion indicator 

function shortTreeMenuSelectorReset(){
    
	if (shortTreeInv >0) 

		{let shortTreeMenuSelector = document.getElementById('shortTreeMenuSelector');

		shortTreeMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


/* build function to calculate shrubs truck load percent */

function shrubsTruckLoadPercentUpdate(){

	shrubsTruckLoadPercent = shrubsInv * shrubsTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of shrubs*/

function shrubsInstall(){

	shrubsInv--;

	shrubsTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	shrubsMenuSelectorHide()

	totalLaborHours+=shrubsInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('shrubsInv').innerHTML = ' | ' + shrubsInv + ' | ' + '$' +shrubsCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall shrubs */

function shrubsUninstall(){

	//shrubsInv++;

	//shrubsTruckLoadPercentUpdate()

	//updateTotalTruckLoadPercent()

	//updateLoadLevelWarning()

	shrubsMenuSelectorReset()

  totalLaborHours+=shrubsInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  //document.getElementById('shrubsInv').innerHTML = ' | ' + shrubsInv + ' | ' + '$' +shrubsCost;

	//document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide groshrubsundCover menu selector when inventory is at zero

function shrubsMenuSelectorHide(){

    if (shrubsInv ==0) 

		{let shrubsMenuSelector = document.getElementById('shrubsMenuSelector');

        shrubsMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset shrubs supply depletion indicator 

function shrubsMenuSelectorReset(){
    
	if (shrubsInv >0) 

		{let shrubsMenuSelector = document.getElementById('shrubsMenuSelector');

		shrubsMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate solarPanels truck load percent */

function solarPanelsTruckLoadPercentUpdate(){

	solarPanelsTruckLoadPercent = solarPanelsInv * solarPanelsTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of solarPanels*/

function solarPanelsInstall(){

	solarPanelsInv--;

	solarPanelsTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	solarPanelsMenuSelectorHide()

	totalLaborHours+=solarPanelsInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('solarPanelsInv').innerHTML = ' | ' + solarPanelsInv + ' | ' + '$' +solarPanelsCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall solarPanels */

function solarPanelsUninstall(){

	solarPanelsInv++;

	solarPanelsTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	solarPanelsMenuSelectorReset()

  totalLaborHours+=solarPanelsInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  document.getElementById('solarPanelsInv').innerHTML = ' | ' + solarPanelsInv + ' | ' + '$' +solarPanelsCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide grosolarPanelsundCover menu selector when inventory is at zero

function solarPanelsMenuSelectorHide(){

    if (solarPanelsInv ==0) 

		{let solarPanelsMenuSelector = document.getElementById('solarPanelsMenuSelector');

        solarPanelsMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset solarPanels supply depletion indicator 

function solarPanelsMenuSelectorReset(){
    
	if (solarPanelsInv >0) 

		{let solarPanelsMenuSelector = document.getElementById('solarPanelsMenuSelector');

		solarPanelsMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate stone truck load percent */

function stoneTruckLoadPercentUpdate(){

	stoneTruckLoadPercent = stoneInv * stoneTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of stone*/

function stoneInstall(){

	stoneInv--;

	stoneTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	stoneMenuSelectorHide()

	totalLaborHours+=stoneInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('stoneInv').innerHTML = ' | ' + stoneInv + ' | ' + '$' +stoneCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall stone */

function stoneUninstall(){

	stoneInv++;

	stoneTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	stoneMenuSelectorReset()

  totalLaborHours+=stoneInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  document.getElementById('stoneInv').innerHTML = ' | ' + stoneInv + ' | ' + '$' +stoneCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide stone menu selector when inventory is at zero

function stoneMenuSelectorHide(){

    if (stoneInv ==0) 

		{let stoneMenuSelector = document.getElementById('stoneMenuSelector');

        stoneMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset stone supply depletion indicator 

function stoneMenuSelectorReset(){
    
	if (stoneInv >0) 

		{let stoneMenuSelector = document.getElementById('stoneMenuSelector');

		stoneMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate strawBale truck load percent */

function strawBaleTruckLoadPercentUpdate(){

	strawBaleTruckLoadPercent = strawBaleInv * strawBaleTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of strawBale*/

function strawBaleInstall(){

	strawBaleInv--;

	strawBaleTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	strawBaleMenuSelectorHide()

	totalLaborHours+=strawBaleInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('strawBaleInv').innerHTML = ' | ' + strawBaleInv + ' | ' + '$' +strawBaleCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall strawBale */

function strawBaleUninstall(){

	strawBaleInv++;

	strawBaleTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	strawBaleMenuSelectorReset()

  totalLaborHours+=strawBaleInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  document.getElementById('strawBaleInv').innerHTML = ' | ' + strawBaleInv + ' | ' + '$' +strawBaleCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide grostrawBaleundCover menu selector when inventory is at zero

function strawBaleMenuSelectorHide(){

    if (strawBaleInv ==0) 

		{let strawBaleMenuSelector = document.getElementById('strawBaleMenuSelector');

        strawBaleMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset strawBale supply depletion indicator 

function strawBaleMenuSelectorReset(){
    
	if (strawBaleInv >0) 

		{let strawBaleMenuSelector = document.getElementById('strawBaleMenuSelector');

		strawBaleMenuSelector.classList.remove('elementSupplyDepleted')}

}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to install a unit of swaleES*/

function swaleEWInstall(){

	totalLaborHours+=swaleEWInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
}

/* build function to uninstall swaleES */

function swaleEWUninstall(){

	totalLaborHours+=swaleEWInstallLaborHours;

        totalLaborCost = totalLaborHours * costPerLaborHour;

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


/* build function to install a unit of swaleES*/

function swaleNSInstall(){

	totalLaborHours+=swaleNSInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
}

/* build function to uninstall swaleES */

function swaleNSUninstall(){

	totalLaborHours+=swaleNSInstallLaborHours;

        totalLaborCost = totalLaborHours * costPerLaborHour;

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


/* build function to calculate tallTree truck load percent */

function tallTreeTruckLoadPercentUpdate(){

	tallTreeTruckLoadPercent = tallTreeInv * tallTreeTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of tallTree*/

function tallTreeInstall(){

	tallTreeInv--;

	tallTreeTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	tallTreeMenuSelectorHide()

	totalLaborHours+=tallTreeInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('tallTreeInv').innerHTML = ' | ' + tallTreeInv + ' | ' + '$' +tallTreeCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}
	
/* build function to uninstall tallTree */

function tallTreeUninstall(){

	//tallTreeInv++;

	//tallTreeTruckLoadPercentUpdate()

	//updateTotalTruckLoadPercent()

	//updateLoadLevelWarning()

	tallTreeMenuSelectorReset()

  totalLaborHours+=tallTreeInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  //document.getElementById('tallTreeInv').innerHTML = ' | ' + tallTreeInv + ' | ' + '$' +tallTreeCost;

	//document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide grotallTreeundCover menu selector when inventory is at zero

function tallTreeMenuSelectorHide(){

    if (tallTreeInv ==0) 

		{let tallTreeMenuSelector = document.getElementById('tallTreeMenuSelector');

        tallTreeMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset tallTree supply depletion indicator 

function tallTreeMenuSelectorReset(){
    
	if (tallTreeInv >0) 

		{let tallTreeMenuSelector = document.getElementById('tallTreeMenuSelector');

		tallTreeMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


/* build function to calculate tanks truck load percent */

function tanksTruckLoadPercentUpdate(){

	tanksTruckLoadPercent = tanksInv * tanksTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of tanks*/

function tanksInstall(){

	tanksInv--;

	tanksTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	tanksMenuSelectorHide()

	totalLaborHours+=tanksInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('tanksInv').innerHTML = ' | ' + tanksInv + ' | ' + '$' +tanksCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall tanks */

function tanksUninstall(){

	tanksInv++;

	tanksTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	tanksMenuSelectorReset()

  totalLaborHours+=tanksInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  document.getElementById('tanksInv').innerHTML = ' | ' + tanksInv + ' | ' + '$' +tanksCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide grotanksundCover menu selector when inventory is at zero

function tanksMenuSelectorHide(){

    if (tanksInv ==0) 

		{let tanksMenuSelector = document.getElementById('tanksMenuSelector');

        tanksMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset tanks supply depletion indicator 

function tanksMenuSelectorReset(){
    
	if (tanksInv >0) 

		{let tanksMenuSelector = document.getElementById('tanksMenuSelector');

		tanksMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate vines truck load percent */

function vinesTruckLoadPercentUpdate(){

	vinesTruckLoadPercent = vinesInv * vinesTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of vines*/

function vinesInstall(){

	vinesInv--;

	vinesTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	vinesMenuSelectorHide()

	totalLaborHours+=vinesInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('vinesInv').innerHTML = ' | ' + vinesInv + ' | ' + '$' +vinesCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall vines */

function vinesUninstall(){

	//vinesInv++;

	//vinesTruckLoadPercentUpdate()

	//updateTotalTruckLoadPercent()

	//updateLoadLevelWarning()

	vinesMenuSelectorReset()

  totalLaborHours+=vinesInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  //document.getElementById('vinesInv').innerHTML = ' | ' + vinesInv + ' | ' + '$' +vinesCost;

	//document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide grovinesundCover menu selector when inventory is at zero

function vinesMenuSelectorHide(){

    if (vinesInv ==0) 

		{let vinesMenuSelector = document.getElementById('vinesMenuSelector');

        vinesMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset vines supply depletion indicator 

function vinesMenuSelectorReset(){
    
	if (vinesInv >0) 

		{let vinesMenuSelector = document.getElementById('vinesMenuSelector');

		vinesMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build function to calculate wireFencing truck load percent */

function wireFencingTruckLoadPercentUpdate(){

	wireFencingTruckLoadPercent = wireFencingInv * wireFencingTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of wireFencing*/

function wireFencingInstall(){

	wireFencingInv--;

	wireFencingTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	wireFencingMenuSelectorHide()

	totalLaborHours+=wireFencingInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('wireFencingInv').innerHTML = ' | ' + wireFencingInv + ' | ' + '$' +wireFencingCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall wireFencing */

function wireFencingUninstall(){

	wireFencingInv++;

	wireFencingTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

	wireFencingMenuSelectorReset()

  totalLaborHours+=wireFencingInstallLaborHours;

  totalLaborCost = totalLaborHours * costPerLaborHour;

  document.getElementById('wireFencingInv').innerHTML = ' | ' + wireFencingInv + ' | ' + '$' +wireFencingCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

// build function to hide wireFencing menu selector when inventory is at zero

function wireFencingMenuSelectorHide(){

    if (wireFencingInv ==0) 

		{let wireFencingMenuSelector = document.getElementById('wireFencingMenuSelector');

        wireFencingMenuSelector.classList.add('elementSupplyDepleted')}

}

// build function to reset wireFencing supply depletion indicator 

function wireFencingMenuSelectorReset(){
    
	if (wireFencingInv >0) 

		{let wireFencingMenuSelector = document.getElementById('wireFencingMenuSelector');

		wireFencingMenuSelector.classList.remove('elementSupplyDepleted')}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// build function to hide woodCoreBerm menu selector when inventory is at zero

let woodCoreBermMenuSelector = document.getElementById('woodCoreBermMenuSelector');

function woodCoreBermMenuSelectorHide(){

    if (woodCoreBermInv ==0){
      
      woodCoreBermMenuSelector.classList.add('elementSupplyDepleted')}

}


// build function to reset woodCoreBerm  supply depletion indicator 

function woodCoreBermMenuSelectorReset(){
    
	if (woodCoreBermInv >0) 

		woodCoreBermMenuSelector.classList.remove('elementSupplyDepleted')}


/* build function to calculate woodCoreBerm truck load percent */

function woodCoreBermTruckLoadPercentUpdate(){

	woodCoreBermTruckLoadPercent = woodCoreBermInv * woodCoreBermTruckLoadPercentPerUnit;
	
}

/* build function to install a unit of woodCoreBerm*/

function woodCoreBermInstall(){

	woodCoreBermInv--;

	woodCoreBermTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()

  	woodCoreBermMenuSelectorHide()

	totalLaborHours+=woodCoreBermInstallLaborHours;
				  
	totalLaborCost = totalLaborHours * costPerLaborHour;
		
	document.getElementById('woodCoreBermInv').innerHTML = ' | ' + woodCoreBermInv + ' | ' + '$' +woodCoreBermCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

	}

/* build function to uninstall woodCoreBerm */

function woodCoreBermUninstall(){

	woodCoreBermInv++;

	woodCoreBermTruckLoadPercentUpdate()

	updateTotalTruckLoadPercent()

	updateLoadLevelWarning()
  
  	woodCoreBermMenuSelectorReset()

  	totalLaborHours+=woodCoreBermInstallLaborHours;

  	totalLaborCost = totalLaborHours * costPerLaborHour;

  	document.getElementById('woodCoreBermInv').innerHTML = ' | ' + woodCoreBermInv + ' | ' + '$' +woodCoreBermCost;

	document.getElementById('totalTruckLoadPercentDisplay').innerHTML = totalTruckLoadPercent + '%'

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set design elements */

/* set undefined value for design element selection */
var systemElement = ""

/* set bambooh initial values*/

/* set number of bamboo h units per pack/bundle */

var bambooHUnitsPerPack =1;

/* number of bamboo h units per truck load */

var bambooHUnitsPerTruckLoad =10;

/* set truck load bambooh percent */

var bambooHTruckLoadPercentPerUnit =10;

/* set bambooH truck load percent */

var bambooHTruckLoadPercent =0;

/* bamboo h price per unit */

var bambooHPricePerUnit =100;

/* set bamboo h inventory */

var bambooHInv =0;

/* set bamboo h total cost */

var bambooHCost =0; 

/* set bamboo h total cost */

var bambooHInstallLaborHours =4;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set bambooV initial values */

/* set number of bambooV units per pack/bundle */

var bambooVUnitsPerPack =1;

/* set number of bambooV units per truck load */

var bambooVUnitsPerTruckLoad =10;

/* set truck load bambooV percent */

var bambooVTruckLoadPercentPerUnit =10;

/* set bambooV truck load percent */

var bambooVTruckLoadPercent =0;

/* bambooV price per unit */

var bambooVPricePerUnit =100;

/* set bambooV inventory */

var bambooVInv =0;

/* set bambooV total cost */

var bambooVCost =0;

/* bambooV installation cost */

var bambooVInstallLaborHours =4;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set honeyBeeHive initial values */

/* set honeyBeeHive truck load percent */

var honeyBeeHiveTruckLoadPercent =0;

/* set honeyBeeHive inventory */

var honeyBeeHiveInv =0;

/* set honeyBeeHive total cost */

var honeyBeeHiveCost =0;

/* set number of honeyBeeHive units per pack/bundle */

var honeyBeeHiveUnitsPerPack =1;

/* set number of honeyBeeHive units per truck load */

var honeyBeeHiveUnitsPerTruckLoad =4;

/* set truck load honeyBeeHive percent */

var honeyBeeHiveTruckLoadPercentPerUnit =25;

/* honeyBeeHive price per unit */

var honeyBeeHivePricePerUnit =400;

/* honeyBeeHive installation hours */

var honeyBeeHiveInstallLaborHours =2;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set cardboard initial values */

/* set cardboard truck load percent */

var cardboardTruckLoadPercent =0;

/* set cardboard inventory */

var cardboardInv =0;

/* set cardboard total cost */

var cardboardCost =0;

/* set number of cardboard units per pack/bundle */

var cardboardUnitsPerPack =1;

/* set number of cardboard units per truck load */

var cardboardUnitsPerTruckLoad =10;

/* set truck load cardboard percent */

var cardboardTruckLoadPercentPerUnit =10;

/* cardboard price per unit */

var cardboardPricePerUnit =25;

/* cardboard installation hours */

var cardboardInstallLaborHours =2;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set compost initial values */

/* set number of compost units per pack/bundle */

var compostUnitsPerPack =1;

/* set number of compost units per truck load */

var compostUnitsPerTruckLoad =2;

/* set truck load compost percent */

var compostTruckLoadPercentPerUnit =50;

/* set compost truck load percent */

var compostTruckLoadPercent =0;

/* compost price per unit */

var compostPricePerUnit =75;

/* set compost inventory */

var compostInv =0;

/* set compost total cost */

var compostCost =0;

/* compost installation hours */

var compostInstallLaborHours =2;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set compostingToilet initial values */

/* set compostingToilet truck load percent */

var compostingToiletTruckLoadPercent =0;

/* set compostingToilet inventory */

var compostingToiletInv =0;

/* set compostingToilet total cost */

var compostingToiletCost =0;

/* set number of compostingToilet units per pack/bundle */

var compostingToiletUnitsPerPack =1;

/* set number of compostingToilet units per truck load */

var compostingToiletUnitsPerTruckLoad =1;

/* set truck load compostingToilet percent */

var compostingToiletTruckLoadPercentPerUnit =100;

/* compostingToilet price per unit */

var compostingToiletPricePerUnit =500;

/* compostingToilet installation hours */

var compostingToiletInstallLaborHours =20;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set earthBagWall initial values */

/* set number of gravelCover units per pack/bundle */

var gravelUnitsPerPack =4;

/* set number of earthBagWall units per truck load */

var earthBagWallUnitsPerTruckLoad =4;

/* set truck load earthBagWall percent */

var earthBagWallTruckLoadPercentPerUnit =25;

/* set earthBagWall truck load percent */

var earthBagWallTruckLoadPercent =0;

/* earthBagWall price per unit */

var earthBagWallPricePerUnit =325;

/* set earthBagWall inventory */

var earthBagWallInv =0;

/* set earthBagWall total cost */

var earthBagWallCost =0;

/* earthBagWall installation hours */

var earthBagWallInstallLaborHours =20;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set firePit initial values */

/* set number of firePit units per pack/bundle */

var firePitUnitsPerPack =1;

/* set number of firePit units per truck load */

var firePitUnitsPerTruckLoad =1;

/* set truck load firePit percent */

var firePitTruckLoadPercentPerUnit =100;

/* set firePit truck load percent */

var firePitTruckLoadPercent =0;

/* firePit price per unit */

var firePitPricePerUnit =100;

/* set firePit inventory */

var firePitInv =0;

/* set firePit total cost */

var firePitCost =0;

/* firePit installation hours */

var firePitInstallLaborHours =4;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set foodStorageContainers initial values */

/* set foodStorageContainers truck load percent */

var foodStorageContainersTruckLoadPercent =0;

/* set foodStorageContainers inventory */

var foodStorageContainersInv =0;

/* set foodStorageContainers total cost */

var foodStorageContainersCost =0;

/* set number of foodStorageContainers units per pack/bundle */

var foodStorageContainersUnitsPerPack =6;

/* set number of foodStorageContainers units per truck load */

var foodStorageContainersUnitsPerTruckLoad =1;

/* set truck load foodStorageContainers percent */

var foodStorageContainersTruckLoadPercentPerUnit =100;

/* foodStorageContainers price per unit */

var foodStorageContainersPricePerUnit =1000;

/* foodStorageContainers installation hours */

var foodStorageContainersInstallLaborHours =2;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set greenHouse initial values */

/* set number of greenHouse units per pack/bundle */

var greenHouseUnitsPerPack =1;

/* set number of greenHouse units per truck load */

var greenHouseUnitsPerTruckLoad =1;

/* set truck load greenHouse percent */

var greenHouseTruckLoadPercentPerUnit =100;

/* set greenHouse truck load percent */

var greenHouseTruckLoadPercent =0;

/* greenHouse price per unit */

var greenHousePricePerUnit =2500;

/* set greenHouse inventory */

var greenHouseInv =0;

/* set greenHouse total cost */

var greenHouseCost =0;

/* greenHouse installation hours */

var greenHouseInstallLaborHours =1;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set gravel initial values */

/* set number of gravelCover units per pack/bundle */

var gravelUnitsPerPack =1;

/* set number of gravel units per truck load */

var gravelUnitsPerTruckLoad =1;

/* set truck load gravel percent */

var gravelTruckLoadPercentPerUnit =100;

/* set gravel truck load percent */

var gravelTruckLoadPercent =0;

/* gravel price per unit */

var gravelPricePerUnit =65;

/* set gravel inventory */

var gravelInv =0;

/* set gravel total cost */

var gravelCost =0;

/* gravel installation hours */

var gravelInstallLaborHours =2;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set groundCover initial values */

/* set number of groundCover units per pack/bundle */

var groundCoverUnitsPerPack =100;

/* set number of groundCover units per truck load */

var groundCoverUnitsPerTruckLoad =1;

/* set truck load groundCover percent */

var groundCoverTruckLoadPercentPerUnit =100;

/* set groundCover truck load percent */

var groundCoverTruckLoadPercent =0;

/* groundCover price per unit */

var groundCoverPricePerUnit =1200;

/* set groundCover inventory */

var groundCoverInv =0;

/* set groundCover total cost */

var groundCoverCost =0;

/* groundCover installation hours */

var groundCoverInstallLaborHours =10;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set herbs initial values */

/* set number of herbs units per pack/bundle */

var herbsUnitsPerPack =100;

/* set number of herbs units per truck load */

var herbsUnitsPerTruckLoad =1;

/* set truck load herbs percent */

var herbsTruckLoadPercentPerUnit =100;

/* set herbs truck load percent */

var herbsTruckLoadPercent =0;

/* herbs price per unit */

var herbsPricePerUnit =1200;

/* set herbs inventory */

var herbsInv =0;

/* set herbs total cost */

var herbsCost =0;

/* herbs installation hours */

var herbsInstallLaborHours =10;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set livingBarbedWire initial values */

/* set number of livingBarbedWire units per pack/bundle */

var livingBarbedWireUnitsPerPack =4;

/* set number of livingBarbedWire units per truck load */

var livingBarbedWireUnitsPerTruckLoad =2;

/* set truck load livingBarbedWire percent */

var livingBarbedWireTruckLoadPercentPerUnit =50;

/* set livingBarbedWire truck load percent */

var livingBarbedWireTruckLoadPercent =0;

/* livingBarbedWire price per unit */

var livingBarbedWirePricePerUnit =300;

/* set livingBarbedWire inventory */

var livingBarbedWireInv =0;

/* set livingBarbedWire total cost */

var livingBarbedWireCost =0;

/* livingBarbedWire installation hours */

var livingBarbedWireInstallLaborHours =5;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set medTent initial values */

/* set number of medTent units per pack/bundle */

var medTentUnitsPerPack =1;

/* set number of medTent units per truck load */

var medTentUnitsPerTruckLoad =1;

/* set truck load medTent percent */

var medTentTruckLoadPercentPerUnit =100;

/* set medTent truck load percent */

var medTentTruckLoadPercent =0;

/* medTent price per unit */

var medTentPricePerUnit =5000;

/* set medTent inventory */

var medTentInv =0;

/* set medTent total cost */

var medTentCost =0;

/* medTent installation hours */

var medTentInstallLaborHours =20;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set mulch initial values */

/* set number of mulch units per pack/bundle */

var mulchUnitsPerPack =1;

/* set number of mulch units per truck load */

var mulchUnitsPerTruckLoad =2;

/* set truck load mulch percent */

var mulchTruckLoadPercentPerUnit =50;

/* set mulch truck load percent */

var mulchTruckLoadPercent =0;

/* mulch price per unit */

var mulchPricePerUnit =40;

/* set mulch inventory */

var mulchInv =0;

/* set mulch total cost */

var mulchCost =0;

/* mulch installation hours */

var mulchInstallLaborHours =2;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set pipeH initial values */

/* set number of pipeH units per pack/bundle */

var pipeHUnitsPerPack =1;

/* set number of pipeH units per truck load */

var pipeHUnitsPerTruckLoad =10;

/* set truck load pipeH percent */

var pipeHTruckLoadPercentPerUnit =10;

/* set pipeH truck load percent */

var pipeHTruckLoadPercent =0;

/* pipeH price per unit */

var pipeHPricePerUnit =10;

/* set pipeH inventory */

var pipeHInv =0;

/* set pipeH total cost */

var pipeHCost =0;

/* pipeH installation hours */

var pipeHInstallLaborHours =2;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set pipeV initial values */

/* set number of pipeV units per pack/bundle */

var pipeVUnitsPerPack =1;

/* set number of pipeV units per truck load */

var pipeVUnitsPerTruckLoad =10;

/* set truck load pipeV percent */

var pipeVTruckLoadPercentPerUnit =10;

/* set pipeV truck load percent */

var pipeVTruckLoadPercent =0;

/* pipeV price per unit */

var pipeVPricePerUnit =10;

/* set pipeV inventory */

var pipeVInv =0;

/* set pipeV total cost */

var pipeVCost =0;

/* pipeV installation hours */

var pipeVInstallLaborHours =2;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set pondSealant initial values */

/* set number of pondSealant units per pack/bundle */

var pondSealantUnitsPerPack =1;

/* set number of pondSealant units per truck load */

var pondSealantUnitsPerTruckLoad =2;

/* set truck load pondSealant percent */

var pondSealantTruckLoadPercentPerUnit =50;

/* set pondSealant truck load percent */

var pondSealantTruckLoadPercent =0;

/* pondSealant price per unit */

var pondSealantPricePerUnit =800;

/* set pondSealant inventory */

var pondSealantInv =0;

/* set pondSealant total cost */

var pondSealantCost =0;

/* pondSealant installation hours */

var pondSealantInstallLaborHours =40;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set poultry initial values */

/* set number of poultry units per pack/bundle */

var poultryUnitsPerPack =5;

/* set number of poultry units per truck load */

var poultryUnitsPerTruckLoad =4;

/* set truck load poultry percent */

var poultryTruckLoadPercentPerUnit =25;

/* set poultry truck load percent */

var poultryTruckLoadPercent =0;

/* poultry price per unit */

var poultryPricePerUnit =125;

/* set poultry inventory */

var poultryInv =0;

/* set poultry total cost */

var poultryCost =0;

/* poultry installation hours */

var poultryInstallLaborHours =1;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set rootCrops initial values */

/* set number of rootCrops units per pack/bundle */

var rootCropsUnitsPerPack =100;

/* set number of rootCrops units per truck load */

var rootCropsUnitsPerTruckLoad =1;

/* set truck load rootCrops percent */

var rootCropsTruckLoadPercentPerUnit =100;

/* set rootCrops truck load percent */

var rootCropsTruckLoadPercent =0;

/* rootCrops price per unit */

var rootCropsPricePerUnit =5;

/* set rootCrops inventory */

var rootCropsInv =0;

/* set rootCrops total cost */

var rootCropsCost =0;

/* rootCrops installation hours */

var rootCropsInstallLaborHours =10;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set sheetMetal initial values */

/* set number of sheetMetal units per pack/bundle */

var sheetMetalUnitsPerPack =8;

/* set number of sheetMetal units per truck load */

var sheetMetalUnitsPerTruckLoad =10;

/* set truck load sheetMetal percent */

var sheetMetalTruckLoadPercentPerUnit =5;

/* set sheetMetal truck load percent */

var sheetMetalTruckLoadPercent =0;

/* sheetMetal price per unit */

var sheetMetalPricePerUnit =160;

/* set sheetMetal inventory */

var sheetMetalInv =0;

/* set sheetMetal total cost */

var sheetMetalCost =0;

/* sheetMetal installation hours */

var sheetMetalInstallLaborHours =5;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set shortTree initial values */

/* set number of shortTree units per pack/bundle */

var shortTreeUnitsPerPack =4;

/* set number of shortTree units per truck load */

var shortTreeUnitsPerTruckLoad =2;

/* set truck load shortTree percent */

var shortTreeTruckLoadPercentPerUnit =50;

/* set shortTree truck load percent */

var shortTreeTruckLoadPercent =0;

/* shortTree price per unit */

var shortTreePricePerUnit =600;

/* set shortTree inventory */

var shortTreeInv =0;

/* set shortTree total cost */

var shortTreeCost =0;

/* shortTree installation hours */

var shortTreeInstallLaborHours =5;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set shrubs initial values */

/* set number of shrubs units per pack/bundle */

var shrubsUnitsPerPack =8;

/* set number of shrubs units per truck load */

var shrubsUnitsPerTruckLoad =4;

/* set truck load shrubs percent */

var shrubsTruckLoadPercentPerUnit =25;

/* set shrubs truck load percent */

var shrubsTruckLoadPercent =0;

/* shrubs price per unit */

var shrubsPricePerUnit =300;

/* set shrubs inventory */

var shrubsInv =0;

/* set shrubs total cost */

var shrubsCost =0;

/* shrubs installation hours */

var shrubsInstallLaborHours =4;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set solarPanels initial values */

/* set number of solarPanels units per pack/bundle */

var solarPanelsUnitsPerPack =6;

/* set number of solarPanels units per truck load */

var solarPanelsUnitsPerTruckLoad =2;

/* set truck load solarPanels percent */

var solarPanelsTruckLoadPercentPerUnit =50;

/* set solarPanels truck load percent */

var solarPanelsTruckLoadPercent =0;

/* solarPanels price per unit */

var solarPanelsPricePerUnit =1500;

/* set solarPanels inventory */

var solarPanelsInv =0;

/* set solarPanels total cost */

var solarPanelsCost =0;

/* solarPanels installation hours */

var solarPanelsInstallLaborHours =10;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set stone initial values */

/* set number of stone units per pack/bundle */

var stoneUnitsPerPack =1;

/* set number of stone units per truck load */

var stoneUnitsPerTruckLoad =1;

/* set truck load stone percent */

var stoneTruckLoadPercentPerUnit =100;

/* set stone truck load percent */

var stoneTruckLoadPercent =0;

/* stone price per unit */

var stonePricePerUnit =100;

/* set stone inventory */

var stoneInv =0;

/* set stone total cost */

var stoneCost =0;

/* stone installation hours */

var stoneInstallLaborHours =4;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set strawBale initial values */

/* set number of strawBale units per pack/bundle */

var strawBaleUnitsPerPack =18;

/* set number of strawBale units per truck load */

var strawBaleUnitsPerTruckLoad =2;

/* set truck load strawBale percent */

var strawBaleTruckLoadPercentPerUnit =50;

/* set strawBale truck load percent */

var strawBaleTruckLoadPercent =0;

/* strawBale price per unit */

var strawBalePricePerUnit =900;

/* set strawBale inventory */

var strawBaleInv =0;

/* set strawBale total cost */

var strawBaleCost =0;

/* strawBale installation hours */

var strawBaleInstallLaborHours =4;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set swaleEW initial values */

/* swaleEW installation hours */

var swaleEWInstallLaborHours =10;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set swaleNS initial values */

/* swaleNS installation hours */

var swaleNSInstallLaborHours =10;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set tallTree initial values */

/* set number of tallTree units per pack/bundle */

var tallTreeUnitsPerPack =1;

/* set number of tallTree units per truck load */

var tallTreeUnitsPerTruckLoad =4;

/* set truck load tallTree percent */

var tallTreeTruckLoadPercentPerUnit =25;

/* set tallTree truck load percent */

var tallTreeTruckLoadPercent =0;

/* tallTree price per unit */

var tallTreePricePerUnit =350;

/* set tallTree inventory */

var tallTreeInv =0;

/* set tallTree total cost */

var tallTreeCost =0;

/* tallTree installation hours */

var tallTreeInstallLaborHours =8;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set tanks initial values */

/* set number of tanks units per pack/bundle */

var tanksUnitsPerPack =2;

/* set number of tanks units per truck load */

var tanksUnitsPerTruckLoad =1;

/* set truck load tanks percent */

var tanksTruckLoadPercentPerUnit =100;

/* set tanks truck load percent */

var tanksTruckLoadPercent =0;

/* tanks price per unit */

var tanksPricePerUnit =300;

/* set tanks inventory */

var tanksInv =0;

/* set tanks total cost */

var tanksCost =0;

/* tanks installation hours */

var tanksInstallLaborHours =1;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set vines initial values */

/* set number of vines units per pack/bundle */

var vinesUnitsPerPack =8;

/* set number of vines units per truck load */

var vinesUnitsPerTruckLoad =4;

/* set truck load vines percent */

var vinesTruckLoadPercentPerUnit =25;

/* set vines truck load percent */

var vinesTruckLoadPercent =0;

/* vines price per unit */

var vinesPricePerUnit =300;

/* set vines inventory */

var vinesInv =0;

/* set vines total cost */

var vinesCost =0;

/* vines installation hours */

var vinesInstallLaborHours =4;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set wireFencing initial values */

/* set number of wireFencing units per pack/bundle */

var wireFencingUnitsPerPack =2;

/* set number of wireFencing units per truck load */

var wireFencingUnitsPerTruckLoad =10;

/* set truck load wireFencing percent */

var wireFencingTruckLoadPercentPerUnit =10;

/* set wireFencing truck load percent */

var wireFencingTruckLoadPercent =0;

/* wireFencing price per unit */

var wireFencingPricePerUnit =300;

/* set wireFencing inventory */

var wireFencingInv =0;

/* set wireFencing total cost */

var wireFencingCost =0;

/* wireFencing installation hours */

var wireFencingInstallLaborHours =5;


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* set woodCoreBerm initial values */

/* set number of woodCoreBerm (1/2 cord) units per pack/bundle */

var woodCoreBermUnitsPerPack =1;

/* set number of woodCoreBerm units per truck load */

var woodCoreBermUnitsPerTruckLoad =1;

/* set truck load woodCoreBerm percent */

var woodCoreBermTruckLoadPercentPerUnit =100;

/* set woodCoreBerm truck load percent */

var woodCoreBermTruckLoadPercent =0;

/* woodCoreBerm price per unit */

var woodCoreBermPricePerUnit =150;

/* set woodCoreBerm inventory */

var woodCoreBermInv =0;

/* set woodCoreBerm total cost */

var woodCoreBermCost =0;

/* woodCoreBerm installation hours */

var woodCoreBermInstallLaborHours =10;


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* list functions per design element, so that when it's div is mousedover, 
the current design element will swap out*/


function bambooHSelect(){
	systemElement = "bambooH";

}

 function bambooVSelect(){
	systemElement = "bambooV";

}

function honeyBeeHiveSelect(){
	systemElement = "honeyBeeHive";

}

function cardboardSelect(){
	systemElement = "cardboard";

}

 function compostSelect(){
	systemElement = "compost";
	
}

function compostingToiletSelect(){
	systemElement = "compostingToilet";

}

 function earthBagWallSelect(){
	systemElement = "earthBagWall";

}

function firePitSelect(){
	systemElement = "firePit";

}

function foodStorageContainersSelect(){
	systemElement = "foodStorageContainers";

}

function greenHouseSelect(){
	systemElement = "greenHouse";

}
 
 function gravelSelect(){
	systemElement = "gravel";

}

 function groundCoverSelect(){
	systemElement = "groundCover";

}

 function herbsSelect(){
	systemElement = "herbs";

}

 function medTentSelect(){
	systemElement = "medTent";

}

 function mulchSelect(){
	systemElement = "mulch";

}

function livingBarbedWireSelect(){

	systemElement = "livingBarbedWire";

}

 function pipeHSelect(){
	systemElement = "pipeH";

}

 function pipeVSelect(){
	systemElement = "pipeV";

}

 function pondSealantSelect(){
	systemElement = "pondSealant";

}

function poultrySelect(){
	systemElement = "poultry";

}

 function rootCropsSelect(){
	systemElement = "rootCrops";

}

function sheetMetalSelect(){
	systemElement = "sheetMetal";

}

function shortTreeSelect(){
	systemElement = "shortTree";

}

function shrubsSelect(){
	systemElement = "shrubs";

}

 function solarPanelsSelect(){
	systemElement = "solarPanels";

}

 function stoneSelect(){
	systemElement = "stone";

}

 function strawBaleSelect(){
	systemElement = "strawBale";

}

 function swaleEWSelect(){
	systemElement = "swaleEW";
 }

 function swaleNSSelect(){
	systemElement = "swaleNS";
 }

 function tallTreeSelect(){
	systemElement = "tallTree";
 }
 
 function tanksSelect(){
	systemElement = "tanks";
 }

 function vinesSelect(){
	systemElement = "vines";
 }

 function wireFencingSelect(){
	systemElement = "wireFencing";
 }

 function woodCoreBermSelect(){
	systemElement = "woodCoreBerm";

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* build vector functions */

// drone attack start

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var permitPrepaid = false

var dAtkClickCount = 2

function permitPrepaidAudit(){

	if (permitInv <1)

	{permitPrepaid = false}

	if (permitInv >= 1)

	{permitPrepaid = true}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function dAtk(){

// build decrement permit supply function 

	if (permitInv >0){

		permitInv-=1

		document.getElementById('permitInv').innerHTML = ' | ' + permitInv + ' | ' + '$' +permitTotalCost

	}

// build alternation function 

	dAtkClickCount++

	if ((dAtkClickCount % 10==0)){

// set drone start and end points

	droneXStop = x
	droneYStop = y

	droneXStart = droneXStop + 800;
	droneYStart = droneYStop + 800;

// display drone

	document.getElementById("droneFly").style.display = "block";
	document.getElementById("droneFly").style.position = "fixed";
	document.getElementById("droneFly").style.left = droneXStart +"px";
	document.getElementById("droneFly").style.top = droneYStart +"px";


// build drone retreat function

 function droneRetreat(){

	droneYStart++
	droneXStart++

	document.getElementById("droneFly").style.left = droneXStart +"px";
	document.getElementById("droneFly").style.top = droneYStart +"px";
	document.getElementById("drone").style.width = 300 +"px";
	document.getElementById("drone").style.height = 300 +"px"; 

	setTimeout((function droneDisappears(){
			
		document.getElementById("droneFly").style.display = "none";}),5000)

	const droneRetreatInterval = setInterval(droneRetreat,5)

	clearInterval(droneRetreatInterval)
	clearInterval(droneInterval)};		

// define clear interval handles for drone interval and dron retreat

const droneInterval = setInterval(droneMove,5)

//build drone move function

function droneMove(){
	
	permitPrepaidAudit()

	if (droneYStart > droneYStop && droneXStart > droneXStop){ // until drone is on target, decrement position towards target

			droneYStart--
			droneXStart--

			document.getElementById("droneFly").style.left = droneXStart +"px";
			document.getElementById("droneFly").style.top = droneYStart +"px";
			document.getElementById("drone").style.width = 75 +"px";
			document.getElementById("drone").style.height = 68 +"px";} // end drone move conditional function 

		if (droneYStart < (droneYStop +10)){

			permitTotalCost+=(permitPricePerUnit * .05);
                 
   			updateTotalCost();
    
   			updateRemainingBudget()
           
   			document.getElementById('permitInv').innerHTML = ' | ' + permitInv + ' | ' + '$' +permitTotalCost
	
			document.getElementById(gUID).parentNode.className='box column droneOnTarget'

			document.getElementById("droneFly").style.display = "none";		
		
		}

		
	if (permitPrepaid){
		
		setInterval(droneRetreat,5); 

		document.getElementById(gUID).parentNode.classList.remove('droneOnTarget');
		
		document.getElementById("droneFly").style.display = "block";	
		
	}
	

	} // alternate check

} // end drone move function


}// end dAtk function 

// drone attack end

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// build wildlife attack 

var	wildlifeXStop = 0
var	wildlifeYStop = 0

var wildlifeXStart = 0 
var wildlifeYStart = 0 

var wAtkClickCount = 0

function wAtk() {

	wAtkClickCount++

	if ((wAtkClickCount % 5==0)){

	wildlifeXStop = x
	wildlifeYStop = y

	
	wildlifeYStart = wildlifeYStop + 1000;
	wildlifeXStart = wildlifeXStop - 1000;

	document.getElementById("wildlifeWalk").style.display = "block";
	document.getElementById("wildlifeWalk").style.position = "fixed";
	document.getElementById("wildlifeWalk").style.left = wildlifeXStart +"px";
	document.getElementById("wildlifeWalk").style.top = wildlifeYStart +"px";

	const wildlifeInterval = setInterval(wildlifeMove,5)

	function wildlifeMove(){


		// start conditional wildlife retreat function

		function wildlifeRetreat(){

			setInterval(function wildlifeRetreats(){
					
			wildlifeYStart--
			wildlifeXStart++

			document.getElementById("wildlifeWalk").style.left = wildlifeXStart +"px";
			document.getElementById("wildlifeWalk").style.top = wildlifeYStart +"px";

			}),5
	
			setTimeout((function wildlifeDisappears(){

				document.getElementById("wildlifeWalk").style.display = "none";

				}//end of wildlife disappears time out function 

				),5000);

			clearInterval(wildlifeInterval)

		} // end of wildlife retreat function
		
		if (x == wildlifeXStart){

			wildlifeRetreat()
		
		}
				
		// start conditional wildlife on target function 

		if (wildlifeYStart < (wildlifeYStop +10)){

			if (document.getElementById(gUID).parentNode.className!='box column livingBarbedWireTile'){
	
			document.getElementById(gUID).parentNode.className='box column noTl'}

			setTimeout((function wildlifeDisappears(){

				document.getElementById("wildlifeWalk").style.display = "none";

				clearInterval(wildlifeInterval)

				}//end of wildlife disappears time out function 

				),5000);

			}
		
		// end conditional wildlife on target function 	

		// start wildlife move function 
		//if (wildlifeYStart > wildlifeYStop && wildlifeXStart > wildlifeXStop){

			wildlifeYStart--
			wildlifeXStart++
			
			document.getElementById("wildlifeWalk").style.left = wildlifeXStart +"px";
			document.getElementById("wildlifeWalk").style.top = wildlifeYStart +"px";//}// end of conditional wildlife walk function

		} // end of wildlife move function 
	
  } //end wildlife alternation 

}  // end of wildlife attack

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// build zombie attack 

gUID = "0"

var	zombieXStop = 0
var	zombieYStop = 0

var zombieXStart = 0 
var zombieYStart = 0 

var zAtkClickCount = 2

function zAtk() {

	zAtkClickCount++

	if ((zAtkClickCount % 10==0)){

	zombieXStop = x
	zombieYStop = y

	zombieXStart = zombieXStop + 1000;
	zombieYStart = zombieYStop + 1000;

	document.getElementById("zombieWalk").style.display = "block";
	document.getElementById("zombieWalk").style.position = "fixed";
	document.getElementById("zombieWalk").style.left = zombieXStart +"px";
	document.getElementById("zombieWalk").style.top = zombieYStart +"px";

	const zombieInterval = setInterval(zombieMove,5)

	function zombieMove(){

		// start conditional zombie retreat function

		function zombieRetreat(){

			setInterval(function zombieRetreats(){
					
			zombieYStart++
			zombieXStart++

			document.getElementById("zombieWalk").style.left = zombieXStart +"px";
			document.getElementById("zombieWalk").style.top = zombieYStart +"px";

			}),5
	
			setTimeout((function zombieDisappears(){

				document.getElementById("zombieWalk").style.display = "none";

				}//end of zombie disappears time out function 

				),5000);

			clearInterval(zombieInterval)

		} // end of zombie retreat function
		
		if (x == zombieXStart){

			zombieRetreat()
		
		}
				
		// start conditional zombie on target function 

		if (zombieYStart < (zombieYStop +10)){

			if (document.getElementById(gUID).parentNode.className!='box column livingBarbedWireTile'){
	
			document.getElementById(gUID).parentNode.className='box column zombieOnTarget'
	
			document.getElementById("zombieWalk").style.display = "none"}// end conditional no living barbed wire function
		
			if (document.getElementById(gUID).parentNode.className=='box column livingBarbedWireTile'){
		
				document.getElementById("zombieWalk").style.display = "none";}	// end conditional living barbed wire installed function
			
			clearInterval(zombieInterval)

			}
		
		// end conditional zombie on target function 	

		if (zombieYStart > zombieYStop && zombieXStart > zombieXStop){

			zombieYStart--
			zombieXStart--
			
			document.getElementById("zombieWalk").style.left = zombieXStart +"px";
			document.getElementById("zombieWalk").style.top = zombieYStart +"px";}// end of conditional zombie walk function

		} // end of zombie move function 
	
 } //end zombie alternation 

} // end of zombie attack


/* end vector functions */

// start banners

function gameOverBannerOn(){

document.getElementById('gameOver').innerHTML= `<img src='images/design-elements/gameOver.png'></img>`


}

// start sketch


function sketchesOnOff(){

	const newLocal = '.sketchPen';
	const nodeList= document.querySelectorAll(newLocal);
	for (let i = 0; i < nodeList.length; i++) {
	  nodeList[i].classList.toggle('sketchOff');
	}

}

function sketchesClearAll(){

	const newLocal = '.sketchPen';
	const nodeList= document.querySelectorAll(newLocal);
	for (let i = 0; i < nodeList.length; i++) {
	  nodeList[i].classList.remove('sketchPen');
	}

}

// end sketch

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// start freeze

// SET freezeING PARAMETERS

var freezeState = 1

var freezable = ""

var freezeClickCount = 2

function freeze(){

	setTimeout((function freezeLimiter(){

	freezeClickCount++

	if ((freezeClickCount % 5==0)){

	var freezable = document.getElementById(gUID).parentNode
    
    // SET freezing INTERVALS

	const freezingInterval = setInterval(function freezing(){
		
    if (sunYStart>=600 && sunYStart>500){

		freezeState-=.1} // START freezing 

		freezable.style.opacity = freezeState;

    if (freezeState<=.3){
      
      clearInterval(freezingInterval)

	  freezable.className="box column noTl"

     } // end freezing 

	},200)

} // end freeze alternation

}//end freeze limiter

),5000);

} // END freeze 


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// start wither

// SET WITHERING PARAMETERS


var witherState = 1

var witherable = ""

var witherClickCount = 2

function wither(){

	setTimeout((function witherLimiter(){

	witherClickCount++

	if ((witherClickCount % 5==0)){

	var witherable = document.getElementById(gUID).parentNode
    
    // SET WITHERING INTERVALS

	const witheringInterval = setInterval(function withering(){
		
    if (sunYStart>=200 && sunYStart<400){

		witherState-= .1} // START WITHERING 

		witherable.style.opacity = witherState;
	
    if (witherState<=.3){
      
      clearInterval(witheringInterval)

	  witherable.className="box column noTl"

     }

	},200)
      

} // end wither alternation

}//end wither limiter

),10000);

} // END WITHER 


/*
// start groundCover propagation 

var growthClickCount = 2

function groundCoverPropagation(){

	growthClickCount++

	if ((growthClickCount % 5==0)){
	
    gUIDGrow = gUID 

	var rightGrow = document.getElementById(gUIDGrow).parentNode
    
    parseInt(gUIDGrow,10)

    gUIDGrow++

    gUIDGrow = String(gUIDGrow,10)

	if (rightGrow.className=='box column greenFlagTile noTruck')

	rightGrow.style.opacity = 0
	rightGrow.className='box column groundCoverTile noTruck'

	var growthState = .1

	const growingInterval = setInterval(function growing(){
		
		growthState+= .1 // START growing 

		rightGrow.style.opacity = growthState;
	
	if (growthState==1){
	  
	  clearInterval(growingInterval)

	 }

	},2000)
	
	  // end of conditional groundCover propogation functions

	  } // end growth alternation

} // end groundCover propagation 

*/
