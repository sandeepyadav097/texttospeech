
var bool=0;

function openNav(){
    
    if(bool==0)
        {
            
        
    document.getElementById("sidenav").style.width=50+"%";
         
            
            bool=1;        
                
        }
    
    else if(bool==1) {
        document.getElementById("sidenav").style.width=0+"%";
         
        
        bool=0;   
    }
    
    
}

  