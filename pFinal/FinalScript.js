 function Date(day, month, year){
     this.months =["January","February","March","April","May","June","July","August","September","October","November","December"];
     this.day=day || 7;
     this.month=month;
     this.year=year || 2000;
     this.showDate=showDate;
 }

 function showDate(format){
     if(format==1){
         var f = parseInt(this.day)<10 ? f="0"+parseInt(this.day):f=parseInt(this.day);
         
         var f2 = parseInt(this.month)+1<10 ? f2=parseInt(this.month)+parseInt(1):f=parseInt(this.month)+parseInt(1);

         f2="0"+f2;

        return (f+"/"+f2+"/"+this.year);
     }else{
         return(this.day+" of "+ this.months[this.month]+" of "+ this.year);
     }
 }

function Employee(name,Date,salaryDay){
    this.name=name;
    this.date=Date;
    this.salaryDay=salaryDay;
    this.fortnight=fortnight;
    this.getInfo=getInfo;
}

function fortnight()
{
    return this.salaryDay*15;
}

function getInfo()
{
    return("Name: "+this.name +"<br/>"+
                "Birth: "+this.date.showDate(document.getElementById("format").value)+"<br/>"+
                "Salary per day: "+this.salaryDay +"<br/>"+
                "Salary per fortnight: "+ this.fortnight() +"<br/>"); 
}



function Engineer(name, date, salaryDay, departament){
    this.super=Employee;
    this.super(name,date,salaryDay);
    this.departament=departament;
    this.ShowEngineer=ShowEngineer;

}

function ShowEngineer()
{
    console.log(this.getInfo()+"Department: "+ this.departament);
    document.write(this.getInfo()+"Department: "+ this.departament); 
}




function exe(){


    var f = new Date(document.getElementById("day").value,document.getElementById("month").value,document.getElementById("year").value);

    
    var myEngineer=new Engineer(document.getElementById("name").value,f,document.getElementById("salaryDay").value,document.getElementById("dep").value)

    
    myEngineer.ShowEngineer();  

}