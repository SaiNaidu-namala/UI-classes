var studentdata={
    gettotalavg(){
        this.total=0;
        for(i=0;i<this.marks.length;i++){
            this.total+=this.marks[i]
        }
        this.avg=this.total/this.marks.length;
    },
    getstudentgrade(){
        if(this.avg>40){
            this.grade="student passed";
        }else{
            this.grade="failed";
        }
    },
    displaystudentdetails(){
        this.gettotalavg();
        this.getstudentgrade();
        console.log("student name :"+this.sname);
        console.log("student class :"+this.sclass)
        console.log("student gender :"+this.sgender);
        console.log("total :"+this.total);
        console.log("average :"+this.avg);
        console.log("grade :"+this.grade);

        document.querySelector("#dsname").innerText=this.sname;
        document.querySelector("#dsclass").innerText=this.sclass;
        document.querySelector("#dsgender").innerText=this.sgender;
        document.querySelector("#dtotal").innerText=this.total;
        document.querySelector("#davg").innerText=this.avg;
        document.querySelector("#dgrade").innerText=this.grade;

    }
 }
 var readuserdata=()=>{
    studentdata.sname=document.querySelector("#sname").value;
    studentdata.sgender=document.querySelector("input[name=gender]:checked").value;
    studentdata.sclass=document.querySelector("#sclass").value;
    studentdata.marks=[];
    for(i=1;i<=5;i++){
        var id="#m"+i;
        var marksvalue=document.querySelector(id).value;
        marksvalue=parseInt(marksvalue);
        studentdata.marks.push(marksvalue);
    }
    console.log(studentdata);
    studentdata.displaystudentdetails();
    document.querySelector(".progresscardblock").style.display="block";
 }