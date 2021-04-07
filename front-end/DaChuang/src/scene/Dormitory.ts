import { MyButton } from "../component/MyButton";
import { grassGame } from "./grassGame";

class Dormitory extends eui.Component implements  eui.UIComponent {
	public textLabel:eui.Label; 
	public characterName:eui.Label;
	public bgpic:eui.Image;   
	public _idxPrevFocus:number;
	public character:eui.Image;
	public head:Number;
	public bgNum:Number;

	public constructor() {
		super();
		this.skinName="resource/eui_skins/scene/Dormitory.exml"
		this._idxPrevFocus=0;
		// 获取进度
		
		this.character.source="queen_png";
		this.bgpic.source="dormitory_jpg";		

		this.characterName=new eui.Label();
		this.characterName.textColor = 0xffffff;
        this.characterName.textAlign = "center";
		this.characterName.text="红皇后";
		this.characterName.x=351.405;
        this.characterName.y=620;
        this.characterName.width=250;
        this.characterName.height=70;
        this.characterName.size=40;
        this.characterName.verticalAlign="middle";
		this.addChild(this.characterName);


		this.textLabel=new eui.Label();
        this.textLabel.textColor = 0xffffff;
        this.textLabel.textAlign = "left";
        this.textLabel.width=1000;
        this.textLabel.height=200;
        this.textLabel.size=40;
        this.textLabel.x = 348.552;
        this.textLabel.y = 696.814;
        this.textLabel.verticalAlign="middle";;
        this.addChild(this.textLabel);
		this.textLabel.text="！！你是谁，怎么会闯入这里？来人...";
	    

		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.updateTextContent,this);
		// this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);

	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
		
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
	} 

	/// 用户交互触文本内容变更
	public updateTextContent(){
		// 获取台词，人物头像，人物名字
		line:String;

		this._idxPrevFocus=this._idxPrevFocus+1;
		if(this._idxPrevFocus==1){
			this.bgNum=0;
			this.head=1;
		}
		else if(this._idxPrevFocus==2||this._idxPrevFocus==4){
			this.head=0;
		}
		else if(this._idxPrevFocus==3||this._idxPrevFocus==9){
			this.head=2;
		}
		else if(this._idxPrevFocus==6){
			this.bgNum=1;
		}
		else if(this._idxPrevFocus==7){
			this.bgNum=0;
		}
		else if(this._idxPrevFocus==12){
			this.bgNum=0;
			this.head=1;
			let btn=new MyButton("开始游戏");
		    btn.x=this.parent.width/2;
			btn.y=this.parent.height/2;
			this.parent.addChild(btn);
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
		}

		if(this.head==0){
			this.characterName.text="红皇后"
			this.character.source = "queen_png";
		}
		else if(this.head==1){
			this.characterName.text="玩家"
			this.character.source = "girl_png";
		}
		else if(this.head==2){
			this.characterName.text="出色蒂诺"
			this.character.source = "helper_png";
		}

		if(this.bgNum==0){
			this.bgpic.source="dormitory_jpg";
		}
		else if(this.bgNum==1){
			this.bgpic.source="bg2_jpg";
		}

		this.textLabel.text =  [
			"！！你是谁，怎么会闯入这里？来人..."
			,"...等等！尊敬的皇后，我来自另一个平行时空，我在寻找一块发光的石头，我需要这块石头来维护时空的稳定。"
			,"发光的石头...你是说埋在森林边缘、令周围寸草不生的蛇岖石？这东西倒也是对我无甚用处，不过...呵，可不是什么人都能随便从我这里拿走东西."
			,"...Search石?"
			,"这样吧，最近我新征召了一批侍卫，你来给他们安排住处。"
			,"当我需要传唤他们其中任何一个时，仆人能根据他的名字立即去到他所在的住址通知他（如传唤黑桃A就知道要去21号）。我可不想仆人浪费时间去敲门询问，耽误了我的事情。"
			,"新来侍卫的名字由4种花色（黑桃、红桃、方块、梅花），11个编号（A、2、3、4...J）组合而成，一共44名。而房子一列排开，住址由65到75，一共11间。"
			,"你要是能安排好，这石头你自个拿去。要是不行，呵..."
			,"无论侍卫们怎么住，顺序查找和二分查找都要进行比较，比较就免不了敲门询问，这可怎么办呢？"
			,"唔...或许我们可以试试用散列技术。这样我们只需要查找关键字、不需要比较就可以获得想要查找的侍卫住址了."
			,"要想通过名字就找到住址，那么我们要在名字和住址之间建立一个确定的关系，我们把这个关系称为哈希函数，哈希函数可以是一条运算式。"
			,"假如我们将A看作数字1，J看作数字11，令编号为A的侍卫住在65号房，2住在66号房...以此类推，编号为J住在75号房，那么这个哈希函数就是 住址=编号+64。"
			,"好方法，就这么安排吧！假如是黑桃5，那么住址就是...5+64=69！仆人直接去69号房通知就可以了。"
		][ this._idxPrevFocus ];
	}

	public startGame(){
		this.parent.addChild(new grassGame());
		this.parent.removeChild(this);
	}

}

export{Dormitory}