import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
//This is the class for the Add Events screen
export class EventComponent implements OnInit {
// properties for validation of each form element
nameInvalid:boolean=false;
dateInvalid:boolean=false;
timeInvalid:boolean=false;
pinInvalid:boolean=false;
//dependency injection of router in constructor
  constructor(public router:Router) { }

  ngOnInit() {
    
  }

// property for event object
  event:Object={
  	name:"",
  	date:"",
  	time:"",
  	address:"",
  	city:"",
  	pin:"",
    votes:""
  }
//function to gotodashboard. Uses routing
goToDashBoard=function(){
  this.router.navigate(['/home'])
}
//save each of the form elements obtained from front end into localStorage 
saveToLocalStorage=function(form){
  if (typeof(Storage)!=="undefined"){
    localStorage.setItem("name",form.name);
    localStorage.setItem("date",form.date);
    localStorage.setItem("time",form.time);
    localStorage.setItem("address",form.address);
    localStorage.setItem("pin",form.pin);

  }
  this.router.navigate(['/home']);//After saving to localstorage go to home page or dashboard through routing
}
//function for validating the form
  validateMe=function(form){
this.nameInvalid=false;
this.dateInvalid=false;
this.timeInvalid=false;
this.pinInvalid=false;

  	//validate name
   this.event = form;
   if ((this.event.name.length<2)||(this.event.name.length>50)) this.nameInvalid=true;


	//validate date
			var d = new Date(this.event.date);
			if ( Object.prototype.toString.call(d) === "[object Date]" ) {
  			// it is a date
  			if ( isNaN( d.getTime() ) ) {  // d.valueOf() could also work
  			  // date is not valid
  			  this.dateInvalid=true;
  			 
  			}
  			else {
    				// date is valid
    				this.dateInvalid=false;
  					}
			}
			else {
			  this.dateInvalid=true;
			}

	//validate time
			var strTime=this.event.time;
			//var regex = new RegExp("([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])");
			var regex = new RegExp("/^(?:0?\d|1[012]):[0-5]\d$/");
			if (regex.test(strTime)) {
				this.timeInvalid=false;
			} else {
						this.timeInvalid=true;
			}
  
	//validate pin
	if (this.event.pin.trim().length!=6) this.pinInvalid=true;

//all validations complete and nothing is invalid
if ((!this.nameInvalid)&&(!this.dateInvalid)&&(!this.timeInvalid)&&(!this.pinInvalid))
    this.saveToLocalStorage(form); //then invoke the function to save in localStorage
 
  }

}
