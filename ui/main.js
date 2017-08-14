var  button =document.getElementById('bt1');

button.onclick=function(){
    //create a req obj
    var req= new XMLHttpRequest();
    //capture the response and store it in variable
    req.onreadystatechange=function()
    {
        if(req.readyState===XMLHttpRequest.DONE)
        {
            //take some action
            if(req.status===200)
            {
                var bt1 = req.responseText;
                var span =document.getElementById('sp1');
                span.innerHTML=bt1.toString();
            }
        }
    };   
            //make the request
    req.open('GET','http://gkedartushar.imad.hasura-app.io/counter',true);
    req.send(null);
};