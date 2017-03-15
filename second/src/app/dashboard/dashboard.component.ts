import { Component,OnInit,AfterContentChecked} from '@angular/core';
import {Router} from '@angular/router';

import {RemoteService} from 'app/remote.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit,AfterContentChecked{
//array of event objects
 listOfEvents=[];
	


  constructor(public router:Router,public remoteService:RemoteService) {
//dependency injection of router and remote service

   }

   goToOtherRoute=function(){
	this.router.navigate(['/addEvent']);//go to Event component through routing
   }



ngOnInit(){
	//if JSON file is read then do the following
	this.remoteService.getData().then((response)=>{
    //assign whatever is read from JSON file into array of objects
			this.listOfEvents = response; 
			if (typeof(Storage)!=="undefined"){
        //retrieve all items from localStorage and assign to local variables
				let name:String="";
  				name=localStorage.getItem("name");
  				console.log("xxxx"+name);
  				let date:String="";
  				date=localStorage.getItem("date");
  				let time:String="";
  				time=localStorage.getItem("time");
  				let address:String ="";
  				address= localStorage.getItem("address");
  				let pin:String="";
  				pin=localStorage.getItem("pin");
  		if ((name!="")&&(date!="")&&(time!="")&&(address!="")&&(pin!="")){
        //create a local obj with all local Storage variable values
		  		let obj={
		  			"name":name,
					"date":date,
					"time":time,
					"address":address,
					"pin":pin,
					"votes":"0"
		  		};
          //add object to the array
  		 this.listOfEvents.push(obj);
  		 }
  	}//end if typeOf Storage
	   }
	);
	
	
}

//initialize listOfEvents to localStorage values
  ngAfterContentChecked(){
  	
  
  }

//function invoked for an event if the vote up button is clicked
  voteUp(singleEvent){
    var i=0;
  	for(i=0;i< this.listOfEvents.length;i++){
  			if ((this.listOfEvents[i].name==singleEvent.name)&&(this.listOfEvents[i].date==singleEvent.date)){
  					this.listOfEvents[i].votes =Number(this.listOfEvents[i].votes)+1; 
  					break;
  			}
  	}
  

  }

//function invoked for an event if the vote down button is clicked
  voteDown(singleEvent){
  	var j=0;
  	for(j=0;j< this.listOfEvents.length;j++){
  			if ((this.listOfEvents[j].name==singleEvent.name)&&(this.listOfEvents[j].date==singleEvent.date)&&(Number(this.listOfEvents[j].votes)>0)){
  					this.listOfEvents[j].votes =Number(this.listOfEvents[j].votes)-1; 
  					break;
  			}
  	}

  }
}
