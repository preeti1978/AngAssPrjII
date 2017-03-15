# AngAssPrjII
Project II Event App done in angular
This project has tow components:
1.Dashboard - this is the home page which lists events read from the data.json file on initial load.
2.Event - this is the form to add new event
On adding a new event, the form validation is done for each field. (Name: between 2 and 50 chars, Date: in mm-dd-yyyy format , pin : 6 chars etc.)
On successful form submit, the new event is added to localStorage and then displayed in the dashboard.
The routing and read from remote file are implemented.
