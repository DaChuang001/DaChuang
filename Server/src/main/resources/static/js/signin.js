//检查用户名
function checkUse(){
    let check;
    let username = document.getElementById("username").value;
    if (username.length > 18 || username.length < 3) {
        document.getElementById("signNameYes").innerHTML = "";
        document.getElementById("signNameNo").innerHTML="!用户名由3-18位字符组成";
        document.getElementById("username").focus();
        check = false;
    } else {
        document.getElementById("signNameNo").innerHTML = "";
        document.getElementById("signNameYes").innerHTML = "√";
        check = true;
    }
    return check;
}
//检查密码
function checkPwd() {
    let check;
    let reg = /[^A-Za-z0-9_]+/;
    let regs = /^[a-zA-Z0-9_\u4e00-\u9fa5] + $ /;
    let password = document.getElementById("password").value;
    if (password.length < 6 || password.length > 18 || regs.test(password)) {
        document.getElementById("signPwYes").innerHTML = "";
        document.getElementById("signPwNo").innerHTML = "* 密码由6-18位字符组成，且必须包含字母、数字和标点符号"
        document.getElementById("password").focus();
        check = false;
    }
    else {
        document.getElementById("signPwNo").innerHTML = "";
        document.getElementById("signPwYes").innerHTML = "√";
        check = true;
    }
    return check;
}
//验证密码是否一致
function checkPwdv() {
    let check;
    let password = document.getElementById("password").value;
    let pwdv = document.getElementById("passwordv").value;
    if (password != pwdv) {
        document.getElementById("veryYes").innerHTML = "";
        document.getElementById("veryNo").innerHTML = "* 两次密码输入不一致";
        document.getElementById("passwordv").focus();
        check = false;
    } else if(!checkPwd()){
        document.getElementById("veryYes").innerHTML = "";
        document.getElementById("veryNo").innerHTML = "* 密码由6-18位字符组成，且必须包含字母、数字和标点符号";
    }else {
        document.getElementById("veryNo").innerHTML = "";
        document.getElementById("veryYes").innerHTML = "√";
        check = true;
    }
    return check;
}
function checkAll() {
    let check = checkUse() && checkPwd() && checkPwdv();
    if(!check) {
       alert("请再次检查注册项是否填写正确！");
    }
    return check;
}
window.onload = function(){
    let item = document.getElementsByClassName("item");
    let it = item[0].getElementsByTagName("div");

    let content = document.getElementsByClassName("content");
    let con = content[0].getElementsByTagName("div");

    for(let i=0;i<it.length;i++){
        it[i].onclick = function(){
            for(let j=0;j<it.length;j++){
                it[j].className = '';
                con[j].style.display = "none";
            }
            this.className = "active";
            it[i].index=i;
            con[i].style.display = "block";
        }
    }
}

function signin(){
    var data = {};
    sql=document.getElementById("uname").value;
    sql2=document.getElementById("pwd").value;
   	data["name"] = sql;
   	data["password"]=sql2;
        	$.ajax({//向服务器发出请求的方法
        			type:"POST",
        			url:"loginIn",//向服务器请求的url
        			contentType: "application/json",
        			data:JSON.stringify(data),//注意，就算不需要发送数据给后端也要有data
        			success:function(data1){//请求服务器成功后返回页面时页面可以进行处理，data就是后端返回的数据
        				if(data1=="query"){
        				    alert("登录成功！");
        				    window.location='/query';
        				}
        				else{
        				    //window.location="/error";
        				    alert("登录失败！");
        				}
        			},
        			error:function(e){
        				alert("发生未知错误");
        			}
        		}
        	)
}
function register(){
    var data = {};
    sql=document.getElementById("username").value;
    sql2=document.getElementById("password").value;
   	data["name"] = sql;
   	data["password"]=sql2;
        	$.ajax({//向服务器发出请求的方法
        			type:"POST",
        			url:"register",//向服务器请求的url
        			contentType: "application/json",
        			data:JSON.stringify(data),//注意，就算不需要发送数据给后端也要有data
        			success:function(data1){//请求服务器成功后返回页面时页面可以进行处理，data就是后端返回的数据
        				if(data1=="success"){
        				    //window.location='/query';
        				    alert("注册成功！");
        				}
        				else{
        				    //window.location="/error";
        				    alert("注册失败！");
        				}
        			},
        			error:function(e){
        				alert("发生未知错误");
        			}
        		}
        	)
}