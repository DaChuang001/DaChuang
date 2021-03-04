function queryByAge(){
    let data = {};
    let sql = document.getElementById("sage").value;
   	data["sage"] = sql;
        	$.ajax({//向服务器发出请求的方法
        			type:"POST",
        			url:"queryByAge",//向服务器请求的url
        			contentType: "application/json;charset=UTF-8",
        			data:JSON.stringify(data),//注意，就算不需要发送数据给后端也要有data
        			success:function(data1){//请求服务器成功后返回页面时页面可以进行处理，data就是后端返回的数据
        				let obj=JSON.parse(data1);
        				let i=0;

                        let row;
                        for (let item in obj) {
                            row = document.getElementById("tab").insertRow();
                            if (row != null) {
                                let cell = row.insertCell();
                                cell.innerHTML = obj[i].sname;
                                cell = row.insertCell();
                                cell.innerHTML = obj[i].classNo;
                                cell = row.insertCell();
                                cell.innerHTML = obj[i].sage;
                                cell = row.insertCell();
                                cell.innerHTML = obj[i].weight;
                                cell = row.insertCell();
                                cell.innerHTML = obj[i].height;
                            }
                            i++;
                        }
        			},
        			error:function(e){
        				alert("发生未知错误");
        			}
        		}
        	)
}
