var data ={
    Designer:{
        adobe:{
            name:'AdobeXD',
            per:95,
            color:'green'
        },
        sktech:{
            name:'Sktech',
            per:80,
            color:'mixgreen'
        },
        figma:{
            name:'Figma',
            per:75,
            color:'yellow'
        },
        invision:{
            name:'Invision',
            per:100,
            color:'green'
        },
        photoShop:{
            name:'PhotoShop',
            per:70,
            color:'yellow'
        },
        Illustrator:{
            name:'Illustrator',
            per:80,
            color:'mixgreen'
        },
        Axure:{
            name:'Axure RP8',
            per:60,
            color:'red'
        },
        
    },
    
    Development:{
        html:{
            name:'Html',
            per:95,
            color:'green'
        },
        javaScript:{
            name:'javaScript',
            per:80,
            color:'mixgreen'
        },
        CSS:{
            name:'CSS',
            per:95,
            color:'green'
        },
        es:{
            name:'ES6/typeScript',
            per:65,
            color:'red'
        }

    },
    framwork:{
        react:{
            name:'React',
            per:80,
            color:'mixgreen'
        },
        angular:{
            name:'Angular',
            per:70,
            color:'yellow'
        },
        node:{
            name:'NodeJS',
            per:85,
            color:'mixgreen'
        },
        salesforce:{
            name:'Salesforce',
            per:60,
            color:'red'
        }
    }
        
}

function skill(data){
   
    $( ".skillsbutton" ).click(function(evt) {
       var id = $(this).attr("id");
       var s1 = document.getElementById('designerPercent');
       s1.innerHTML = "";
        if(id=== 'Designerbutton')
        {
            var ss =0;
           for (const property in data.Designer) { 
             var name =`${data.Designer[property].name}`;
                var per = `${data.Designer[property].per}`;
                var color = `${data.Designer[property].color}`;
                
                ss = ss+1;
                repeat(color,name,per,ss);
                
               }  
        }else if(id=== 'DevelopmentButton'){
            for (const property in data.Development) {
                var name =`${data.Development[property].name}`;
               var per = `${data.Development[property].per}`;
               var color = `${data.Development[property].color}`;
               repeat(color,name,per);;
            }
        } else {
            for (const property in data.framwork) {
                var name =`${data.framwork[property].name}`;
               var per = `${data.framwork[property].per}`;
               var color = `${data.framwork[property].color}`;
               repeat(color,name,per);   
              }
        }
       
      });
      
      function repeat(color,name,per,ss){
         // var Designer =data.Designer.count;
         // console.log(Designer);
        var html,newhtml;
        var div = document.createElement('div');
        div.setAttribute('class', 'single-chart');
          html ='<svg viewBox="0 0 36 36" class="circular-chart %color%"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" /><path class="circle" stroke-dasharray="%id%,100"d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" /><text x="18" y="20.35" class="percentage"> %per%% %name% </text>'
          newhtml =html.replace('%id%',per);
          newhtml =newhtml.replace('%color%',color);
          newhtml =newhtml.replace('%per%',per);
          newhtml =newhtml.replace('%name%',name);
          //console.log(ss++)
        // div.appendChild(p)
        //ss =ss+1;
        

        //console.log(ss);
        div.insertAdjacentHTML('afterbegin',newhtml)
        //div.appendChild(br)
        document.getElementById("designerPercent").appendChild(div);
       /* if(ss>2){
            var br = document.createElement("br");
            var foo = document.getElementById("designerPercent");
            foo.appendChild(br);
        }*/
      }
  }

skill(data);