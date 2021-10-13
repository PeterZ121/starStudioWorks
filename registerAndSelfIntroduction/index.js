
window.location.hash = "#/register";
// 实现css动画切换效果
const container = document.getElementsByClassName('container')[0];
const cloudContainer = document.getElementsByClassName('cloudContainer')[0];
const introductionContainer = document.getElementsByClassName("introductionContainer")[0];
//返回的是一个集合 要加索引//
const willSignUpBtn = document.getElementById('willSignUp');
const willSignInBtn = document.getElementById('willSignIn');
const backBtn = document.getElementById('backLogIn');

willSignUpBtn.onclick = function(){
    container.classList.add('active');
}

willSignInBtn.onclick = function() {
    container.classList.remove('active');
}



// 用户注册
const signUpForm = document.getElementById('signUpForm');

signUpForm.onsubmit = signUpFunction;

function signUpFunction(e){
    // 停止以传统方式提交表单
    e.preventDefault();

    // 接收表单输入信息
    let name = document.getElementById('name').value;
    console.log('姓名：'+name);
    let studentNum = document.getElementById('studentNum').value;
    console.log('学号：' +studentNum);
    let phoneNum = document.getElementById('phoneNum').value;
    console.log('手机号码：' + phoneNum);
    let code = document.getElementById('code').value;
    console.log('密码：' +code);
    let recode = document.getElementById('recode').value;
    console.log('重复密码' +recode);

    let dataLength = localStorage.length;
    console.log('已加入用户数量：'+dataLength);
    
    
    // 检验注册内容是否重复
    for(let i = 0; i < localStorage.length; i++){
        let testdata = localStorage.getItem(localStorage.key(i));
        let testInfo = JSON.parse(testdata);
        // 将字符串数据转换为对象
        if(testInfo.name === name){
           
            alert('该用户名已注册');
            return;
        }
        if(testInfo.studentNum === studentNum){
            
            alert('该学号已注册');
            return;
        } 
        if(testInfo.phoneNum === phoneNum){
           
            alert('该手机号已注册');
            return;
        }      
    }
       
    if(code!==recode){
        alert("第二次输入的密码不相同");
        return;
    }
    let user = {};
    user.name = name;
    user.studentNum = studentNum;
    user.phoneNum = phoneNum;
    user.code = code;
       
    let userInfo = JSON.stringify(user);
    //将对象转换为字符串以存进本地
    console.log('用户信息：'+userInfo);

    localStorage.setItem(user.studentNum, userInfo);
    // 在本地存储中，一个用户信息为一个数据项，学号作为关键字（即id）方便登录时索引，其余信息作为数据项值
    console.log(localStorage.valueOf());
    // 显示本地数据

    alert('注册成功，请前往登录');
}       


// 用户登录
const signInForm = document.getElementById('signInForm');

signInForm.onsubmit = signInFunction;

function signInFunction(e){
    // 停止以传统方式提交表单
    e.preventDefault();

    let studentNum = document.getElementById('studentId').value;
    console.log('学号：' +studentNum);
    let password = document.getElementById('password').value;
    console.log('密码：' +password);
 
    for(let i = 0; i < localStorage.length; i++){
        if(studentNum === localStorage.key(i)){
            let testInfo = JSON.parse(localStorage.getItem(studentNum))
            if(password === testInfo.code){
               
                setTimeout(function(){ window.location.hash = "#/self-introduction"},300);
                
                return;
            }
            else{
                alert('密码错误');
                return;
            }
        }
    }

    alert('您未注册，请前往注册');
}

window.addEventListener('hashchange', display);
backBtn.onclick = function(){

    window.location.hash = "#/register";
    window.addEventListener('hashchange',display);
}

function display(){
    if(window.location.hash === '#/self-introduction'){
        container.classList.add("active2");//登录注册框左移至窗外
        cloudContainer.classList.add("active-animation");//云彩动画左漂浮至窗外
        introductionContainer.classList.add("active3");//自我介绍框左移至窗内
    }
    else if(window.location.hash === "#/register"){
        container.classList.remove("active2");
        cloudContainer.classList.remove("active-animation");
        introductionContainer.classList.remove("active3");
    }

}

