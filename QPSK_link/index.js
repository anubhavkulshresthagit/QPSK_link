console.log("working");



////////////////////////////sliders value fixing  //////////////////////////////////////

var amp = document.getElementById("myRange1");
// var fre = document.getElementById("myRange2");

var output1 = document.getElementById("sliderAmp");
// var output2 = document.getElementById("sliderFre");

output1.innerHTML = 5;
amp.oninput = function(){
  output1.innerHTML = this.value;
  var arr = [0,-82,-64,-46,-27,-8,8,27,46,64,80];
  
  var rot1 = document.getElementById("pin1");
  var z1 = arr[this.value];

  rot1.style.transform = "rotate("+ z1 + "deg)";
  console.log("running");
}

// output2.innerHTML = 2;
// fre.oninput = function(){
//   output2.innerHTML = fre.value;
//   var arr1 = [0,-82,-65,-47,-36,-28,-15,-5,5,18,32,40,52,60,70,80];
  
//   var rot2 = document.getElementById("pin2");
//   var z2 = arr1[this.value];

//   rot2.style.transform = "rotate("+ z2 + "deg)";
// }


















var flag=0;
var on=0;
var runDone=0;
function onOff(){
   if(flag==0)
   {
      document.getElementById("leds").src = "images/greenLed.png";
      flag=1;
      on=1;
   }
   else{
      document.getElementById("leds").src = "images/redLed.png";
      initial();
      flag=0;
      on=0;
   }
}


//////////Toggling the switch

var pos1 = 0;
var arr=[0,0,0,0,0,0,0,0];
var even = [0,0,0,0];
var odd = [0,0,0,0];

function toogle1(){
   if(on==1)
  { var element;
    if(pos1==0)
    {
        document.getElementById("s7").style.transform = "rotate(180deg)";
        document.getElementById("s7").style.transformOrigin = "top center";
        document.getElementById("s7").style.marginTop = "11px";
        element = document.getElementById("data7");
        element.innerHTML = "1";
        arr[0]=1;
        even[0]=1;
        pos1=1;
    }
    else{
        document.getElementById("s7").style.transform = "rotate(0deg)";
        document.getElementById("s7").style.transformOrigin = "bottom center";
        document.getElementById("s7").style.marginTop = "8px";
        element = document.getElementById("data7");
        element.innerHTML = "0";
        arr[0]=0;
        even[0]=0;
        pos1=0;
    }
    }
    else{
       alert("first turn on the Sequence generator");
    }
}
var pos2=0;
function toogle2()
{
   if(on==1)
  { if(pos2==0)
   {
    document.getElementById("s6").style.transform = "rotate(180deg)";
    document.getElementById("s6").style.transformOrigin = "top center";
    document.getElementById("s6").style.marginTop = "11px";
    element = document.getElementById("data6");
        element.innerHTML = "1";
        arr[1]=1;
        odd[0]=1;
    pos2=1;
   }
   else{
    document.getElementById("s6").style.transform = "rotate(0deg)";
    document.getElementById("s6").style.transformOrigin = "bottom center";
    document.getElementById("s6").style.marginTop = "8px";
    element = document.getElementById("data6");
        element.innerHTML = "0";
        arr[1]=0;
        odd[0]=0;
    pos2=0;
   }}
   else{
      alert("first turn on the Sequence generator");

   }
}
var pos3=0;
function toogle3()
{
   if(on==1)
   {if(pos3==0)
   {
    document.getElementById("s5").style.transform = "rotate(180deg)";
    document.getElementById("s5").style.transformOrigin = "top center";
    document.getElementById("s5").style.marginTop = "11px";
    element = document.getElementById("data5");
        element.innerHTML = "1";
        arr[2]=1;
        even[1]=1;
    pos3=1;
   }
   else{
    document.getElementById("s5").style.transform = "rotate(0deg)";
    document.getElementById("s5").style.transformOrigin = "bottom center";
    document.getElementById("s5").style.marginTop = "8px";
    element = document.getElementById("data5");
        element.innerHTML = "0";
        arr[2]=0;
        even[1]=0;
    pos3=0;
   }}
   else
   {
      alert("first turn on the Sequence generator");
   }
}
var pos4=0;
function toogle4()
{
   if(on==1)
   {if(pos4==0)
   {
    document.getElementById("s4").style.transform = "rotate(180deg)";
    document.getElementById("s4").style.transformOrigin = "top center";
    document.getElementById("s4").style.marginTop = "11px";
    element = document.getElementById("data4");
    element.innerHTML = "1";
    arr[3]=1;
    odd[1]=1;
    pos4=1;
   }
   else{
    document.getElementById("s4").style.transform = "rotate(0deg)";
    document.getElementById("s4").style.transformOrigin = "bottom center";
    document.getElementById("s4").style.marginTop = "8px";
    element = document.getElementById("data4");
    element.innerHTML = "0";
    pos4=0;
    arr[3]=0;
    odd[1]=0;
   }}
   else{
      alert("first turn on the Sequence generator");
   }
}
var pos5=0;
function toogle5()
{if(on==1)
  { if(pos5==0)
   {
    document.getElementById("s3").style.transform = "rotate(180deg)";
    document.getElementById("s3").style.transformOrigin = "top center";
    document.getElementById("s3").style.marginTop = "11px";
    document.getElementById("s3").style.marginLeft = "1px";
    element = document.getElementById("data3");
    element.innerHTML = "1";
    arr[4]=1;
    even[2]=1;
    pos5=1;
   }
   else{
    document.getElementById("s3").style.transform = "rotate(0deg)";
    document.getElementById("s3").style.transformOrigin = "bottom center";
    document.getElementById("s3").style.marginTop = "8px";
    element = document.getElementById("data3");
    element.innerHTML = "0";
    arr[4]=0;
    even[2]=0;
    pos5=0;
   }}
   else{
      alert("first turn on the Sequence generator");
   }
}
var pos6=0;
function toogle6()
{
   if(on==1)
   {if(pos6==0)
   {
    document.getElementById("s2").style.transform = "rotate(180deg)";
    document.getElementById("s2").style.transformOrigin = "top center";
    document.getElementById("s2").style.marginTop = "11px";
    element = document.getElementById("data2");
    element.innerHTML = "1";
    arr[5]=1;
    odd[2]=1;
    pos6=1;
   }
   else{
    document.getElementById("s2").style.transform = "rotate(0deg)";
    document.getElementById("s2").style.transformOrigin = "bottom center";
    document.getElementById("s2").style.marginTop = "8px";
    element = document.getElementById("data2");
    element.innerHTML = "0";
    arr[5]=0;
    odd[2]=0;
    pos6=0;
   }}
   else{
      alert("first turn on the Sequence generator"); 
   }
}
var pos7=0;
function toogle7()
{
   if(on==1)
  {  
   if(pos7==0)
   {
   
    document.getElementById("s1").style.transform = "rotate(180deg)";
    document.getElementById("s1").style.transformOrigin = "top center";
    document.getElementById("s1").style.marginTop = "11px";
    element = document.getElementById("data1");
    element.innerHTML = "1";
    arr[6]=1;
    even[3]=1;
    pos7=1;
   }
   else{
    document.getElementById("s1").style.transform = "rotate(0deg)";
    document.getElementById("s1").style.transformOrigin = "bottom center";
    document.getElementById("s1").style.marginTop = "8px";
    element = document.getElementById("data1");
    element.innerHTML = "0";
    arr[6]=0;
    even[3]=0;
    pos7=0;
   }}
   else{
      alert("first turn on the Sequence generator");
   }
}
var pos8=0;
function toogle8()
{if(on==1)
   {if(pos8==0)
   {
    document.getElementById("s0").style.transform = "rotate(180deg)";
    document.getElementById("s0").style.transformOrigin = "top center";
    document.getElementById("s0").style.marginTop = "11px";
    element = document.getElementById("data0");
    element.innerHTML = "1";
    arr[7]=1;
    odd[3]=1;
    pos8=1;
   }
   else{
    document.getElementById("s0").style.transform = "rotate(0deg)";
    document.getElementById("s0").style.transformOrigin = "bottom center";
    document.getElementById("s0").style.marginTop = "7px";
    element = document.getElementById("data0");
    element.innerHTML = "0";
    arr[7]=0;
    odd[3]=0;
    pos8=0;
   }}
   else{
      alert("first turn on the Sequence generator");
   }
}

// var even=[0,0,0,0];
// for(var i=0;i<8;i+=2)
// {
//    even[i] = arr[i];
// }


// var odd=[0,0,0,0];
// for(var i=1;i<8;i+=2)
// {
//    odd[i] = arr[i];
// }


function playAudio(url) {
    new Audio(url).play();
  }


  function run()
  {

  //  checking the even odd signal bits

  for(var i=0;i<4;i++)
   console.log(even[i] + " ");



if(on==1)
{
  runDone=1;
   //////////////////////////////////////     message SIGNAL   ///////////////////////////////////
  
   var dps = [];
   var chart = new CanvasJS.Chart("chartContainer", {
   zoomEnabled: true,
   exportEnabled: true,
   title :{
       text: "Carrier Signal"
   },
   data: [{
       type: "spline",
       markerSize: 0,
       dataPoints: dps 
   }]
  
});


var xVal = 0;
var yVal = 0;
var counter = 0;
var amp1 = amp.value;
var fre1 = 1;
var freorg = 0.1;

//var fre =2.5; // real frequency is 2000  if i want fre/100 and put

// time period = 1000/2 =500


var dataLength = 1000; // number of dataPoints visible at any point
var increase = (Math.PI * 2 / 100)*fre1;
var updateChart = function (count) {
   count = count || 1;
   // count is number of times loop runs to generate random dataPoints.
   for (var j = 0; j < count; j++) {	
       yVal = (Math.sin(counter))*amp1;
       dps.push({
           x: xVal,
           y: yVal
       });
       counter = counter + increase;
       xVal+=freorg/10;
   }
   if (dps.length > dataLength) {
       dps.shift();
   }
   chart.render();
};

updateChart(dataLength); 


 ////////////////////////////////    DATA  SIGNAL        //////////////////////////////////////////


 var dps = [];
    var chart = new CanvasJS.Chart("chartContainer1", {
      zoomEnabled: true,
        exportEnabled: true,
        title :{
            text: "Data Signal"
        },
        
     
        
       /*   axisX:{
                title: "Time",
                lineColor: "#369EAD",
                
               },
         axisY:{
                title: "Time",
                lineColor: "#369EAD",
                
               }, */
         legend: {
        horizontalAlign: "right",
        verticalAlign: "center"
      },
      axisY:{
        includeZero: false
      },
        
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    var runner = arr.length;
    var flag=0;
    var flag1=0;
    var dataLength = 100; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        dps.push({
          x:(0),
          y:(0),
        })
        
        
        for (var j = 0; j < runner; j++) {	
        
        if(j==0)
        {
          if(arr[j]==0)
          {
            xVal = xVal+1;
            yVal = 0;
            
            dps.push({
              x:(xVal),
              y:(yVal),
            })
          }
          else
          {
            xVal = xVal;
            yVal = 1;
            dps.push({
              x:(xVal),
              y:(yVal),
            })
             
             xVal +=1;
             yVal = 1;
             dps.push({
              x:(xVal),
              y:(yVal),
            })
          }
        }
        else
        {
          if(arr[j]==0)
          {
           if(arr[j-1]==0)
           {
             xVal +=1;
             yVal=0;
             dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            
           }
           else
           {
            xVal = xVal;
            yVal = 0;
            dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            xVal+=1;
            dps.push({
              x:(xVal),
              y:(yVal),
            })
           }
          }
          else
          {
            if(arr[j-1]==1)
            {
              xVal +=1;
              yVal=1;
              dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            
            }
            else
            {
               xVal = xVal;
               yVal = 1;
               dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            xVal +=1;
              yVal=1;
              dps.push({
              x:(xVal),
              y:(yVal),
            })
            }
          }
        }
         
        
        if(j==runner-1)
        {
         yVal =  0;
          dps.push({
            x:(xVal),
            y:(yVal),
          })
        }
            
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 

    //////////////////////////////////////  Even Data coding    ///////////////////////////////

    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer7", {
        exportEnabled: true,
        title :{
            text: "Even Data Signal"
        },
        
        zoomEnabled: true,
      zoomType: "xy",
        
       /*   axisX:{
                title: "Time",
                lineColor: "#369EAD",
                
               },
         axisY:{
                title: "Time",
                lineColor: "#369EAD",
                
               }, */
         legend: {
        horizontalAlign: "right",
        verticalAlign: "center"
      },
      axisY:{
        includeZero: false
      },
        
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    // var even = [1,1,0,1];
    var runner = even.length;
    var flag=0;
    var flag1=0;
    var dataLength = 20; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        dps.push({
          x:(0),
          y:(0),
        })
        
        
        for (var j = 0; j < runner; j++) {	
        
        if(j==0)
        {
          if(even[j]==0)
          {
            xVal = xVal+2;
            yVal = 0;
            
            dps.push({
              x:(xVal),
              y:(yVal),
            })
          }
          else
          {
            xVal = xVal;
            yVal = 1;
            dps.push({
              x:(xVal),
              y:(yVal),
            })
             
             xVal +=2;
             yVal = 1;
             dps.push({
              x:(xVal),
              y:(yVal),
            })
          }
        }
        else
        {
          if(even[j]==0)
          {
           if(even[j-1]==0)
           {
             xVal +=2;
             yVal=0;
             dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            
           }
           else
           {
            xVal = xVal;
            yVal = 0;
            dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            xVal+=2;
            dps.push({
              x:(xVal),
              y:(yVal),
            })
           }
          }
          else
          {
            if(even[j-1]==1)
            {
              xVal +=2;
              yVal=1;
              dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            
            }
            else
            {
               xVal = xVal;
               yVal = 1;
               dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            xVal +=2;
              yVal=1;
              dps.push({
              x:(xVal),
              y:(yVal),
            })
            }
          }
        }
         
        
           
            
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 


    //////////////////////////////////////  Odd Data coding    ///////////////////////////////

    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer8", {
        exportEnabled: true,
        title :{
            text: "Odd Data Signal"
        },
        
        zoomEnabled: true,
      zoomType: "xy",
        
       /*   axisX:{
                title: "Time",
                lineColor: "#369EAD",
                
               },
         axisY:{
                title: "Time",
                lineColor: "#369EAD",
                
               }, */
         legend: {
        horizontalAlign: "right",
        verticalAlign: "center"
      },
      axisY:{
        includeZero: false
      },
        
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    // var arr = [1,1,0,1];
    var runner = odd.length;
    var flag=0;
    var flag1=0;
    var dataLength = 20; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        dps.push({
          x:(0),
          y:(0),
        })
        
        
        for (var j = 0; j < runner; j++) {	
        
        if(j==0)
        {
          if(odd[j]==0)
          {
            xVal = xVal+2;
            yVal = 0;
            
            dps.push({
              x:(xVal),
              y:(yVal),
            })
          }
          else
          {
            xVal = xVal;
            yVal = 1;
            dps.push({
              x:(xVal),
              y:(yVal),
            })
             
             xVal +=2;
             yVal = 1;
             dps.push({
              x:(xVal),
              y:(yVal),
            })
          }
        }
        else
        {
          if(odd[j]==0)
          {
           if(odd[j-1]==0)
           {
             xVal +=2;
             yVal=0;
             dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            
           }
           else
           {
            xVal = xVal;
            yVal = 0;
            dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            xVal+=2;
            dps.push({
              x:(xVal),
              y:(yVal),
            })
           }
          }
          else
          {
            if(odd[j-1]==1)
            {
              xVal +=2;
              yVal=1;
              dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            
            }
            else
            {
               xVal = xVal;
               yVal = 1;
               dps.push({
              x:(xVal),
              y:(yVal),
            })
            
            xVal +=2;
              yVal=1;
              dps.push({
              x:(xVal),
              y:(yVal),
            })
            }
          }
        }
         
        
           
            
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 

      // ////////////////////////////  even QPSK /////////////////

      var dps = [];
      var chart = new CanvasJS.Chart("chartContainer9", {
      zoomEnabled: true,
      exportEnabled: true,
      title :{
          text: "even QPSK Signal",
      },
      data: [{
          type: "spline",
          markerSize: 0,
          connectNullData: true,
          nullDataLineDashType:"dot",
          dataPoints: dps 
      }]
     
  });
  
  
  var xVal = 0;
  var yVal = 0;
  var counter = 0;
  var amp1 = amp.value;
  var fre = 1;
  var freorg = 0.1;
  // var arr =  [1,1,0,1];
  var runner = even.length;
  var len =0;
  var flag =0;
  //var fre =2.5; // real frequency is 2000  if i want fre/100 and put
  
  // time period = 1000/2 =500
  
  
  var dataLength = 801; // number of dataPoints visible at any point
  var increase = (Math.PI * 2 / 100)*fre;
  var updateChart = function () {
     
      // count is number of times loop runs to generate random dataPoints.
    
      {
          for (var j = 0; j < 801; j++) {	
    
    
    if(j%200==0 ||j==0)
    {
     if(even[len]==0)
     {
      flag=0;
     }
     else
     {
      flag=1;
     }
     len++;
    }
    
    if(flag==0)
    {
     yVal = -Math.cos(counter)*amp1;
    }
    
    if(flag==1)
    {
       yVal = Math.cos(counter)*amp1;
    }

    
// first and second 
if(even[0]!=even[1])
{
  if(j==200 || j==201)
  {
    yVal = null;
  }
}

// // second and third
if(even[2]!=even[3])
{
  if(j==400 || j==401)
  {
    yVal = null;
  }
}

// // third and fourth
if(even[3]!=even[4])
{
  if(j==600 || j==601)
  {
    yVal = null;
  }
}
    
      
   
     dps.push({
     x:xVal,
     y:yVal,
     })
     
     
     counter = counter+increase;
     xVal+=freorg/10;
     
    
     
      }
      }
     
      
      if (dps.length > dataLength) {
          dps.shift();
      }
      chart.render();
  };
  
  updateChart(dataLength); 
  


    // ////////////////////////////  odd QPSK /////////////////

    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer10", {
    zoomEnabled: true,
    exportEnabled: true,
    title :{
        text: "Odd QPSK Signal",
    },
    data: [{
        type: "spline",
        markerSize: 0,
        dataPoints: dps 
    }]
   
});


var xVal = 0;
var yVal = 0;
var counter = 0;
var amp1 = amp.value;
var fre = 1;
var freorg = 0.1;
// var arr =  [1,1,0,1];
var runner = odd.length;
var len =0;
var flag =0;
//var fre =2.5; // real frequency is 2000  if i want fre/100 and put

// time period = 1000/2 =500


var dataLength = 801; // number of dataPoints visible at any point
var increase = (Math.PI * 2 / 100)*fre;
var updateChart = function () {
   
    // count is number of times loop runs to generate random dataPoints.
  
    {
        for (var j = 0; j < 801; j++) {	
  
  
  if(j%200==0 ||j==0)
  {
   if(odd[len]==0)
   {
    flag=0;
   }
   else
   {
    flag=1;
   }
   len++;
  }
  
  if(flag==0)
  {
   yVal = -Math.sin(counter);
  }
  
  if(flag==1)
  {
     yVal = Math.sin(counter);
  }
  
    
 
   dps.push({
   x:xVal,
   y:yVal*amp1,
   })
   
   
   counter = counter+increase;
   xVal+=freorg/10;
   
  
   
    }
    }
   
    
    if (dps.length > dataLength) {
        dps.shift();
    }
    chart.render();
};

updateChart(dataLength); 



 ////////////////////////////////////////   QPSK  coding     /////////////////////////
 var dps = [];
 var chart = new CanvasJS.Chart("chartContainer2", {
 zoomEnabled: true,
 exportEnabled: true,
 title :{
     text: "QPSK Signal",
 },
 data: [{
     type: "spline",
     connectNullData: true,
     nullDataLineDashType:"dot",
     markerSize: 0,
     dataPoints: dps 
 }]

});


var xVal = 0;
var yVal = 0;
var counter = 0;
var counter2 =0;
var amp1 = amp.value;
var fre1 = 1;
var fre2 = 2;
var freorg = 0.1;
// var arr = [0,0,1,0,0,1,1,1];
var runner = arr.length;
var len =0;
var flag =0;

//var fre =2.5; // real frequency is 2000  if i want fre/100 and put

// time period = 1000/2 =500


var dataLength = 801; // number of dataPoints visible at any point
var increase = (Math.PI * 2 / 100)*fre1;
// var increase2 = (Math.PI * 2 / 100)*fre2;
var updateChart = function () {

 // count is number of times loop runs to generate random dataPoints.

 {
     for (var j = 0; j < 801; j++) {	


if(j%200==0 ||j==0)
{
if(arr[len]==0 && arr[len+1]==0)
{
 flag=0;
}
else
{
if(arr[len]==1 && arr[len+1]==0)
{
flag=2;
}
else
{
if(arr[len]==0 && arr[len+1]==1)
{
flag=1;
}
else
{
flag=3;
}
}

}
len+=2;
}

if(flag==0)
{
yVal = -Math.cos(counter)*amp1;
}

if(flag==1)
{
  yVal = Math.cos(counter-3)*amp1;
}

if(flag==2)
{
yVal = -Math.cos(counter-3)*amp1;
}

if(flag==3)
{
  yVal = Math.cos(counter)*amp1;
}


// first and second 
if(arr[0]!=arr[2] || arr[1]!=arr[3])
{
  if(j==200 || j==201)
  {
    yVal = null;
  }
}

// second and third
if(arr[2]!=arr[4] || arr[3]!=arr[5])
{
  if(j==400 || j==401)
  {
    yVal = null;
  }
}

// third and fourth
if(arr[4]!=arr[6] || arr[5]!=arr[7])
{
  if(j==600 || j==601)
  {
    yVal = null;
  }
}


// if(j==200 || j==201 || j==400  || j==600 || j == 601){
// yVal = null;
// }


/*  if(j%200 == 0){
xVal = null;
yVal = null;

 } */

//  if(yVal != null)
//   yVal = yVal*amp1;

dps.push({
x:xVal,
y:yVal,
})


counter = counter+increase;
xVal+=freorg/10;



 }
 }

 
 if (dps.length > dataLength) {
     dps.shift();
 }
 chart.render();
};

updateChart(dataLength); 


    
}
else{
   alert("first turn on the function generator");
}
  }

/////////////////////////////////////////////////////   blank Graph     /////////////////////////////////

  function initial(){
     
   ///////////////////////////////////      Carrier        ///////////////////////////////

   
   var dps = [];
   var chart = new CanvasJS.Chart("chartContainer", {
       exportEnabled: true,
       title :{
           text: "Carrier Signal"
       },
     
       
       data: [{
           type: "line",
           markerSize: 0,
           dataPoints: dps 
       }]
      
   });
   var xVal = 0;
   var yVal = 0;

   var dataLength = 100; // number of dataPoints visible at any point
  
   var updateChart = function (count) {
       count = count || 1;
      for (var j = 0; j < count; j++) {	
       dps.push({
               x: (xVal),
               //x: (xVal)*(fre/10);
               y: (yVal),
           });
           }
       if (dps.length > dataLength) {
           dps.shift();
       }
       chart.render();
   };
   
   updateChart(dataLength); 

   ////////////////////////////////////////////   Data  signal   //////////////////////////////
   
   
   
   var dps = [];
   var chart = new CanvasJS.Chart("chartContainer1", {
       exportEnabled: true,
       title :{
           text: "Data Signal"
       },
     
       
       data: [{
           type: "line",
           markerSize: 0,
           dataPoints: dps 
       }]
      
   });
   var xVal = 0;
   var yVal = 0;

   var dataLength = 100; // number of dataPoints visible at any point
  
   var updateChart = function (count) {
       count = count || 1;
      for (var j = 0; j < count; j++) {	
       dps.push({
               x: (xVal),
               //x: (xVal)*(fre/10);
               y: (yVal),
           });
           }
       if (dps.length > dataLength) {
           dps.shift();
       }
       chart.render();
   };
   
   updateChart(dataLength); 

   //////////////////////////////////////////// Even  Data  signal   //////////////////////////////
   
   
   
   var dps = [];
   var chart = new CanvasJS.Chart("chartContainer7", {
       exportEnabled: true,
       title :{
           text: "Even Data Signal"
       },
     
       
       data: [{
           type: "line",
           markerSize: 0,
           dataPoints: dps 
       }]
      
   });
   var xVal = 0;
   var yVal = 0;

   var dataLength = 100; // number of dataPoints visible at any point
  
   var updateChart = function (count) {
       count = count || 1;
      for (var j = 0; j < count; j++) {	
       dps.push({
               x: (xVal),
               //x: (xVal)*(fre/10);
               y: (yVal),
           });
           }
       if (dps.length > dataLength) {
           dps.shift();
       }
       chart.render();
   };
   
   updateChart(dataLength); 

   //////////////////////////////////////////// Odd  Data  signal   //////////////////////////////
   
   
   
   var dps = [];
   var chart = new CanvasJS.Chart("chartContainer8", {
       exportEnabled: true,
       title :{
           text: "Odd Data Signal"
       },
     
       
       data: [{
           type: "line",
           markerSize: 0,
           dataPoints: dps 
       }]
      
   });
   var xVal = 0;
   var yVal = 0;

   var dataLength = 100; // number of dataPoints visible at any point
  
   var updateChart = function (count) {
       count = count || 1;
      for (var j = 0; j < count; j++) {	
       dps.push({
               x: (xVal),
               //x: (xVal)*(fre/10);
               y: (yVal),
           });
           }
       if (dps.length > dataLength) {
           dps.shift();
       }
       chart.render();
   };
   
   updateChart(dataLength); 

   //////////////////////////////////////////// Even  QPSK  signal   //////////////////////////////
   
   
   
   var dps = [];
   var chart = new CanvasJS.Chart("chartContainer9", {
       exportEnabled: true,
       title :{
           text: "Even QPSK Signal"
       },
     
       
       data: [{
           type: "line",
           markerSize: 0,
           dataPoints: dps 
       }]
      
   });
   var xVal = 0;
   var yVal = 0;

   var dataLength = 100; // number of dataPoints visible at any point
  
   var updateChart = function (count) {
       count = count || 1;
      for (var j = 0; j < count; j++) {	
       dps.push({
               x: (xVal),
               //x: (xVal)*(fre/10);
               y: (yVal),
           });
           }
       if (dps.length > dataLength) {
           dps.shift();
       }
       chart.render();
   };
   
   updateChart(dataLength); 

   //////////////////////////////////////////// Odd  QPSK  signal   //////////////////////////////
   
   
   
   var dps = [];
   var chart = new CanvasJS.Chart("chartContainer10", {
       exportEnabled: true,
       title :{
           text: "Odd QPSK Signal"
       },
     
       
       data: [{
           type: "line",
           markerSize: 0,
           dataPoints: dps 
       }]
      
   });
   var xVal = 0;
   var yVal = 0;

   var dataLength = 100; // number of dataPoints visible at any point
  
   var updateChart = function (count) {
       count = count || 1;
      for (var j = 0; j < count; j++) {	
       dps.push({
               x: (xVal),
               //x: (xVal)*(fre/10);
               y: (yVal),
           });
           }
       if (dps.length > dataLength) {
           dps.shift();
       }
       chart.render();
   };
   
   updateChart(dataLength); 

   ///////////////////////////////////////////// QPSK  //////////////////////////////

   
   
   var dps = [];
   var chart = new CanvasJS.Chart("chartContainer2", {
       exportEnabled: true,
       title :{
           text: "QPSK Signal"
       },
     
       
       data: [{
           type: "line",
           markerSize: 0,
           dataPoints: dps 
       }]
      
   });
   var xVal = 0;
   var yVal = 0;

   var dataLength = 100; // number of dataPoints visible at any point
  
   var updateChart = function (count) {
       count = count || 1;
      for (var j = 0; j < count; j++) {	
       dps.push({
               x: (xVal),
               //x: (xVal)*(fre/10);
               y: (yVal),
           });
           }
       if (dps.length > dataLength) {
           dps.shift();
       }
       chart.render();
   };
   
   updateChart(dataLength); 


   /////////////////////////////////////////////  QPSK  //////////////////////////////

   
   ////////////////////////////////////////////   Data  signal   //////////////////////////////
   
   
   
   var dps = [];
   var chart = new CanvasJS.Chart("chartContainer4", {
       exportEnabled: true,
       title :{
           text: "Decoding of QPSK Signal"
       },
     
       
       data: [{
           type: "line",
           markerSize: 0,
           dataPoints: dps 
       }]
      
   });
   var xVal = 0;
   var yVal = 0;

   var dataLength = 100; // number of dataPoints visible at any point
  
   var updateChart = function (count) {
       count = count || 1;
      for (var j = 0; j < count; j++) {	
       dps.push({
               x: (xVal),
               //x: (xVal)*(fre/10);
               y: (yVal),
           });
           }
       if (dps.length > dataLength) {
           dps.shift();
       }
       chart.render();
   };
   
   updateChart(dataLength); 
  }

  function demod()
  {
    if(runDone==1)
    {
         

 var dps = [];
 var chart = new CanvasJS.Chart("chartContainer4", {
   zoomEnabled: true,
     exportEnabled: true,
     title :{
         text: "Decoding of QPSK Signal"
     },
     
  
     
    /*   axisX:{
             title: "Time",
             lineColor: "#369EAD",
             
            },
      axisY:{
             title: "Time",
             lineColor: "#369EAD",
             
            }, */
      legend: {
     horizontalAlign: "right",
     verticalAlign: "center"
   },
   axisY:{
     includeZero: false
   },
     
     data: [{
         type: "line",
         markerSize: 0,
         dataPoints: dps 
     }]
    
 });



 var xVal = 0;
 var yVal = 0;
 var runner = arr.length;
 var flag=0;
 var flag1=0;
 var dataLength = 100; // number of dataPoints visible at any point

 var updateChart = function (count) {
     count = count || 1;
     // count is number of times loop runs to generate random dataPoints.
     dps.push({
       x:(0),
       y:(0),
     })
     
     
     for (var j = 0; j < runner; j++) {	
     
     if(j==0)
     {
       if(arr[j]==0)
       {
         xVal = xVal+1;
         yVal = 0;
         
         dps.push({
           x:(xVal),
           y:(yVal),
         })
       }
       else
       {
         xVal = xVal;
         yVal = 1;
         dps.push({
           x:(xVal),
           y:(yVal),
         })
          
          xVal +=1;
          yVal = 1;
          dps.push({
           x:(xVal),
           y:(yVal),
         })
       }
     }
     else
     {
       if(arr[j]==0)
       {
        if(arr[j-1]==0)
        {
          xVal +=1;
          yVal=0;
          dps.push({
           x:(xVal),
           y:(yVal),
         })
         
         
        }
        else
        {
         xVal = xVal;
         yVal = 0;
         dps.push({
           x:(xVal),
           y:(yVal),
         })
         
         xVal+=1;
         dps.push({
           x:(xVal),
           y:(yVal),
         })
        }
       }
       else
       {
         if(arr[j-1]==1)
         {
           xVal +=1;
           yVal=1;
           dps.push({
           x:(xVal),
           y:(yVal),
         })
         
         
         }
         else
         {
            xVal = xVal;
            yVal = 1;
            dps.push({
           x:(xVal),
           y:(yVal),
         })
         
         xVal +=1;
           yVal=1;
           dps.push({
           x:(xVal),
           y:(yVal),
         })
         }
       }
     }
      
     
     if(j==runner-1)
     {
      yVal =  0;
       dps.push({
         x:(xVal),
         y:(yVal),
       })
     }
         
        
     }
     if (dps.length > dataLength) {
         dps.shift();
     }
     chart.render();
 };
 
 updateChart(dataLength); 
    }
    else{
      alert("FISRT GENERATE A QPSK SIGNAL")
    }
  }

