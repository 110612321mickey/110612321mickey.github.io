const c2 = `/**
* Print n Stars.
* @param {number} n
*/
function star(n) {
   while (n--) {
       console.log('*');
   }
}

/**
* Print integer between min to max.
* @param {number} min
* @param {number} max
*/
function between(min, max) {
   for (let i = min; i <= max; i++) {
       console.log(i);
   }
}

/**
* Check if n is an prime.
* @param {number} n
* @return {boolean}
*/
function isPrime(n) {
   if (n < 2) {
       return false;
   }
   for (let i = 2; i <= n / 2; i++) {
       if (n % i === 0) {
           return false;
       }
   }
   return true;
}

/**
* Print prime between a to b.
* @param {number} a must < b
* @param {number} b
*/
function primeBetween(a, b) {
   for (let i = a; i <= b; i++) {
       if (isPrime(i)) {
           console.log(i);
       }
   }
}`;
const c3 = `class Vector {
    constructor(...nums) {
        this.arr = nums;
    }

    add(...nums) {
        const vec = nums[0] instanceof Vector ? nums[0].arr : nums;
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i] += vec[i];
        }
        return this;
    }

    sub(...nums) {
        const vec = nums[0] instanceof Vector ? nums[0].arr : nums;
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i] -= vec[i];
        }
        return this;
    }

    neg() {
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i] *= -1;
        }
        return this;
    }

    dot(...nums) {
        const vec = nums[0] instanceof Vector ? nums[0].arr : nums;
        return this.arr.reduce((acc, cur, i) => {
            return acc += (cur * vec[i]);
        }, 0)
    }
}

let x = new Vector(1, 2, 3); // { arr:[1,2,3]}
let y = new Vector(1, 1, 1); // { arr:[1,1,1]}
x.add(y)        // x: { arr:[2,3,4]}
 .sub(y)        // x: { arr:[1,2,3]}
 .neg()         // x: { arr:[-1,-2,-3]}
 .add(6,6,6)    // x: { arr:[5,4,3]}
 .sub(-1,-1,-1);// x: { arr:[6,5,4]}
x.dot(y);       // 15`;

(function () {
    let code2 = document.getElementById('code2');
    if (code2) {
        code2.innerHTML = c2;
        code2.style.backgroundColor = '#f6f8fa';
    }
    let code3 = document.getElementById('code3');
    if (code3) {
        code3.innerHTML = c3;
        code3.style.backgroundColor = '#f6f8fa';
    }
})();

(function () {
    if (!document.getElementById('note1')) { return; }
    let data = {
        note1: `<html>
        <body>
            <h1>我的上課筆記</h1>
            <p>介紹需要使用Github、gitlab 以及上課使用的FB</p>
            <p>網頁:前端、後端</p>
            <p>前端:1.HTML(2week)、CSS(1 week)、JavaScript(*)(1上)<p/>
            <p>後端:deno+框架oar(PHP、ASP、Ruby Rail、GO)</p>
            <p>架站:網頁github page、網站linode(5 美金)(自建)</p>
            <p>老師希望我們前後端都要會</p>
            <p>HTML+CSS+JavaScript = HTML+CSS+JavaScript+DOM+BOM+Camvas+Storage</p>
            <p>C:系統程式、計算機結構:nandZtetric</p>
            <p>python:軟體工程與演算法、AI</p>
            <p>後端->資料庫</p>
                <p>1.Sqlite</p>
                <p>2.POstgreSoL<</p>
                <p>3.ElasticSearch</p>
            <p>MongoDB(這學期不用)</p>
            <p>HTML introduction</p>
            <p>Introduction:<h1></h1>(header1-6)、<p></p>(paragraph)</p>
            <p>Basic:</br></p>
            <p>Link:href的功用</p>
            <p>*對著專案右鍵選Open in Integated Terminal*即可看到在網頁顯示</p>
            <p>*wiki*</p>
            <p>#->第一層標題</p>
            <p>、、、html 、、、->顯示html原始碼</p>
            <p><a href="https://www.facebook.com/ccckmit/videos/10158790237401893">week1</a></p>
        </body>
    </html>`,
        note2: `<!-- These paragraphs is a simple questionnaire -->
    <!DOCTYPE html>
    <html>
    <body>
    <h2>Questionnaire</h2><br>
    <body style="background-color:#A6FFFF;">
    <body style="font-family:Georgia;">
    <form action="/action_page.php">
      <label for="fname">First name:</label><br>
      <input type="text" id="fname" name="fname" value=""><br>
      <label for="lname">Last name:</label><br>
      <input type="text" id="lname" name="lname" value=""><br><br><br>
      
      <label for="fname">Gender:</label><br>
      <input type="radio" id="male" name="gender" value="male">
      <label for="male">Male</label><br>
      <input type="radio" id="female" name="gender" value="female">
      <label for="female">Female</label><br>
      <input type="radio" id="other" name="gender" value="other">
      <label for="other">Other</label><br><br>
      
      <label for="fname">Interest:</label><br>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Fish">
      <label for="vehicle1"> Fishing</label><br>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Book">
      <label for="vehicle2"> Reading</label><br>
      <input type="checkbox" id="vehicle3" name="vehicle3" value="Cook">
      <label for="vehicle3"> Cooking</label><br>
      <input type="checkbox" id="vehicle4" name="vehicle4" value="Mountain">
      <label for="vehicle1"> Mountain climbing</label><br>
      <input type="checkbox" id="vehicle5" name="vehicle5" value="Other">
      <label for="vehicle1"> Other</label><br><br><br>
      <input type="submit" value="Submit">
      </form>
    </body>
    </html>`,
        note3: `important
    #>>id(只套一次)
    <style>
    #para1 {
      text-align: center;
      color: red;
    }
    </style>
    ...
    <p id="para1">Hello World!</p>
    <p>This paragraph is not affected by the style.</p>
    view
    
    .>>class
    <style>
    .center {
      text-align: center;
      color: red;
    }
    </style>
    ...
    <h1 class="center">Red and center-aligned heading</h1>
    <p class="center">Red and center-aligned paragraph.</p> 
    view
    
    可一次套用多個class
    <p class="center large">This paragraph refers to two classes.</p>
    view
    
    全格式套用
    使用*則可全格式套用
    
    * {
      text-align: center;
      color: blue;
    }
    view
    
    一次多套用在多種字
    h1, h2, p {
      text-align: center;
      color: red;
    }
    顏色
    color 字體顏色
    backgroundcolor 背景顏色
    邊框顏色
    <h1 style="border:2px solid Tomato;">Hello World</h1>
    border:大小 solid(實線) tomato(番茄色)
    
    opacity: 不透明度
    view`,
        note4: `一個 CSS 選擇器可以包含多個簡單的選擇器。在簡單的選擇器之間，我們可以包含一個組合器。

    CSS 中有四種不同的組合器：
    
    後代選擇器（空格）
    
    子選擇器 (>)
    
    相鄰兄弟選擇器 (+)
    
    一般同級選擇器 (~)
    --------------------------------------------------------
    Selector	   |  Example	| Example   description|
    --------------------------------------------------------
    element element	   |  div p	| Selects   all <p> elements inside <div> elements
    element>element	   |  div > p	| Selects   all <p> elements where the parent is a <div> element
    element+element	   |  div + p	| Selects the first <p> element that are placed immediately after <div> elements
    element1~element2. |  p ~ ul	| Selects every <ul> element that are preceded by a <p> element
    -------------------------------------------------------
    CSS Counters
    CSS 計數器是由 CSS 維護的“變量”，其值可以通過 CSS 規則遞增(以跟?它們被使用的次數)
    計數器讓您可以根據內容在文檔中的位置調整內容的外觀
    
    CSS 計數器就像“變量”。變量值可以通過 CSS 規則遞增（這將跟?它們被使用的次數）。
    
    要使用 CSS 計數器，我們將使用以下屬性：
    
    counter-reset - 創建或重置計數器
    counter-increment - 增加計數器值
    content - 插入生成的內容
    counter()或counters()函數 - 將計數器的值添加到元素
    
    要使用 CSS 計數器，必須首先使用counter-reset
    
    CSS 計數器屬性
    ---------------------------------
    Property	   | Description|
    ---------------------------------
    content	           | Used with the ::before and ::after pseudo-elements, to insert generated content
    counter-increment. | Increments one or more counter values
    counter-reset.     | Creates or resets one or more counters
    ---------------------------------
    *CSS Website Layout
    網站通常分為頁眉，菜單，內容和頁腳`,
        note5: `<html>
    <h1>Javascipt</h1>
    <p>button 按鈕 onclick 點擊</p>
    <p>document.getElementById('ID').字體類型(button功用)innerHTML - 類似執行的東西</p>
    <pre title="script">
        src -- 可插入任何文字、網址
        windows alert -- 網頁視窗顯示
    </pre>
    <p>命令列:打些命令去執行 視窗:有按鈕可以點</p>
    <pre>
        console.log -- 顯示文字
        var -- 變數
    </pre>
    <p><a href="https://www.facebook.com/ccckmit/videos/10158856793616893"target ="_blank">week5</a></p>
</html>`,
        note6: `節點關係
考慮以下 HTML：<body> 底下有 id="box" 的 <div>，底下又有 4 顆 button。 button 在 div 底下，所以 button 是 div 的子節點， div 是 button 的父節點，稱為父子關係。而 4顆 button 之間彼此是兄弟關係。

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>
<div id="box">
<button id="btn1">btn1</button>
<button id="btn2">btn2</button>
<button id="btn3">btn3</button>
<button id="btn4">btn4</button>
</div>
</body>
</html>

透過父子關係或兄弟關係選擇元素
繼續用上面的 HTML：

let box = document.getElementById('box');
box.children; // array: HTMLCollection(4) [button#btn1, button#btn2, button#btn3, button#btn4]
box.firstChild // #btn1
box.lastChild // #btn4
let btn2 = document.getElementById('btn2');
btn2.parentNode;     // div#box
btn2.previousSibling // button#btn1
btn2.nextSibling     // button#btn3

插入和移除元素
只要記得一個觀念：「一個新元素必須從父節點插入，從父節點移除」也就是說父節點有底下子代的控制權。

appendChild(newnode)：從父節點插入子節點於最後
// create a new element <button>btn5</button>
let btn5 = document.createElement('button');
btn5.textContent = 'btn5';
// insert
document.getElementById('box').appendChild(btn5);
insertBefore(newnode, refnode)：在 refnode 之前插入 newnode
let newnode = document.createElement('button');
newnode.textContent = 'btn6';
// insert
let refnode = document.getElementById('btn2');
refnode.parentNode.insertBefore(newnode, refnode)
以上程式碼會在 #btn2 之前插入一個 btn6。

insertAfter(newnode, refnode)：在 refnode 之後插入 newnode
由於瀏覽器沒有內建這個方法，於是自己實作吧。

function insertAfter(newnode, refnode) {
    refnode.parentNode.insertBefore(newnode, refnode.nextSibling);
}
let btn7 = document.createElement('button');
btn7.textContent = 'btn7';
insertAfter(btn7, document.getElementById('btn4'));

這樣就成功在 #btn4 之後插入一個 btn7 囉。

removeChild(node)：刪除子節點
如果想要刪除 #btn3，那麼得先找到 #btn3 的父節點，在父節點上調用 removeChild(node)。

let btn3 = document.getElementById('btn3');
btn3.parentNode.removeChild(btn3);`,
        note7: `<!DOCTYPE html>
<html>
<head>
<script>
function clickCounter() {
  if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
      localStorage.clickcount = 1;
  }
  document.getElementById("result").innerHTML = "你按了 " + localStorage.clickcount + " 次";
}
</script>
</head>
<body>

<p><button onclick="clickCounter()" type="button">Click me!</button></p>
<div id="result"></div>
<p>按鈕計次程式，重整後會繼續數！</p>

</body>
</html>`,
        note8: `<html>
<h1>JavaScript+ deno</h1>
<p>deno run mmm.js -- 跑動deno方式</p>
<p>for while在JS應用</p>
<pre>
    1995 netscap vs. IE
    netscap 出 JavaScript
    IE曾經依序出VBScript、JScript
    Moeilla
    firefox
    私有語言:Go、Java、dart、C#
    公共語言:JavaScript
    i in a 的in 是讓I為索引值(先編號)
    o of a 的of 是直接取值(沒編號)
    x[0] -- 第一個字(依序下去)
    push把()字串推到陣列
    join連接
    length字串長度
    toUpperCase() 全輸出大寫
    toLowerCase() 全輸出小寫
    s =""設定 s 字串
    trim() 會把前後的空白去掉
    s.concat(y) -- 將 s 和 y 進行連接
    s.charCodeAt(0) -- 取出第 0 個字元的 unicode 代碼
    s.slice(3) -- 切出第 3 個之後的內容
    a.join(':') -- 把陣列用 : 符號連接成一個字串
    a.reverse() -- 將陣列反轉
    a.shift()   -- 從陣列頭部取出一個元素
    b.slice(2,4) -- 用 slice 取出其中第 2 個到第 4 個之間的子陣列。 (注意：這只會傳回 b[2], b[3], 不包含 b[4])
    a.sort()     -- 將 a 排序 (預設為由小到大排列)
    盡量用===
    <p><a href="https://www.facebook.com/ccckmit/videos/10158903802551893"target ="_blank">week8</a></p>
</pre>
</html>`,
        note9: `<html>
<h1>JavaScript2 字典與物件</h1>
<pre>
    var a=
[
    [....], 
    [....]
];
二維數列
利用return+-*/
第一種寫法，直接宣告函數:function sub(a,b)
第二種寫法，將匿名函數指定給變數:var cc = function(a,b)
第三種寫法，可設多種變數:var plus = add
資料庫會把值先備份一個
資料庫會把陣列先把位置換一個值(+-*/時在位置上計算)
f5(sub,8) = sub(8, 5)
</pre>
<p><a href="https://www.facebook.com/ccckmit/videos/10158918972941893"target ="_blank">week9</a></p>
</html>`
    };
    for (let note in data) {
        document.getElementById(note).textContent = data[note];
    }
})();

hljs.highlightAll();