# angular-meteor-watching-array-bug
Found defect when subscribing to an array using $meteor and watching it later

<h1>Install</h1>  
Clone repository  
<h1>Run</h1>     
meteor run  

<h1>Test</h1>
Go to locahost:3000  
Add a few lines of text  
Remove one of the lines  
Notice that the last element of the array is changed to undefined and the length remains the same
