import { manMove } from "./manMove";

class RoomateScene extends eui.Component implements  eui.UIComponent {
	public textLabel:eui.Label; 
	public character:eui.Image;
	public characterName:eui.Label;
	public head:Number;

	public pro:number;

	public constructor() {
		super();
		this.skinName="resource/eui_skins/scene/RoomateScene.exml"
		
		this.characterName=new eui.Label();
		this.characterName.textColor = 0xffffff;
        this.characterName.textAlign = "center";
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
        this.textLabel.verticalAlign="middle";
        this.addChild(this.textLabel);

		// 获取进度
		this.pro=0;

		if(this.pro==0){
			this.head=0;
		}
		else if(this.pro==1){
			this.head=1;
		}
		else if(this.pro==2||this.pro==4||this.pro==7||this.pro==9||this.pro==11){
			this.head=2;
		}
		else if(this.pro==3||this.pro==5||this.pro==6||this.pro==8||this.pro==10){
			this.head=3;
		}
		

		if(this.head==0){
			this.character.source="menA_png";
			this.characterName.text="黑桃A：";
		}
		else if(this.head==1){
			this.character.source="menB_png";
			this.characterName.text="红桃A：";
		}
		else if(this.head==2){
			this.character.source="girl_png";
			this.characterName.text="玩家：";
		}
		else if(this.head==3){
			this.character.source="helper_png";
			this.characterName.text="出色蒂诺：";
		}
		this.textLabel.text =  [
			"“你干什么，65号房子是我的住处！”"
			,"“我的编号也是A，先来后到，明明是我的住处才对！！”"
			,"“诶，冲突产生了！要是两个人根据哈希函数得出相同的地址怎么办呢？”"
			,"“解决冲突的办法由两种，一种是开放地址，另一种是链地址.”"
			,"“这是什么意思呢？”"
			,"“开放地址就是这个房子只能住一个人，那么冲突中的一方就要另寻住处了。”"
			,"“我们可以按照一定的规则来安置他，比如顺延到下一个地址（线性探测），这样仆人就需要去下一栋房子敲门询问，直到找到为止。”"
			,"“那这个线性探测过程不就是顺序查找了吗？”"
			,"“对的，规则还有平方探测以及双哈希两种方法，你可以自己去了解一下。”"
			,"“那链地址呢？”"
			,"“链地址就是房子能住多个人，既然这样，那大家住一起就是了。“"
			,"”皇后给出的房子远远不够44间，而且也不允许仆人去敲门询问多个房子，那么只能采用链地址的方式解决冲突，让侍卫们挤挤了。”"
		][ this.pro ];

		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.updateTextContent,this);
		
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
	public updateTextContent(){
		// 获取台词，人物头像，人物名字
		this.pro=this.pro+1;
		if(this.pro==0){
			this.head=0;
		}
		else if(this.pro==1){
			this.head=1;
		}
		else if(this.pro==2||this.pro==4||this.pro==7||this.pro==9||this.pro==11){
			this.head=2;
		}
		else if(this.pro==3||this.pro==5||this.pro==6||this.pro==8||this.pro==10){
			this.head=3;
		}
		else{
			this.parent.addChild(new manMove());
			this.parent.removeChild(this);
		}

		if(this.head==0){
			this.character.source="menA_png";
			this.characterName.text="黑桃A：";
		}
		else if(this.head==1){
			this.character.source="menB_png";
			this.characterName.text="红桃A：";
		}
		else if(this.head==2){
			this.character.source="girl_png";
			this.characterName.text="玩家：";
		}
		else if(this.head==3){
			this.character.source="helper_png";
			this.characterName.text="出色蒂诺：";
		}
		this.textLabel.text =  [
			"“你干什么，65号房子是我的住处！”"
			,"“我的编号也是A，先来后到，明明是我的住处才对！！”"
			,"“诶，冲突产生了！要是两个人根据哈希函数得出相同的地址怎么办呢？”"
			,"“解决冲突的办法由两种，一种是开放地址，另一种是链地址.”"
			,"“这是什么意思呢？”"
			,"“开放地址就是这个房子只能住一个人，那么冲突中的一方就要另寻住处了。”"
			,"“我们可以按照一定的规则来安置他，比如顺延到下一个地址（线性探测），这样仆人就需要去下一栋房子敲门询问，直到找到为止。”"
			,"“那这个线性探测过程不就是顺序查找了吗？”"
			,"“对的，规则还有平方探测以及双哈希两种方法，你可以自己去了解一下。”"
			,"“那链地址呢？”"
			,"“链地址就是房子能住多个人，既然这样，那大家住一起就是了。“"
			,"”皇后给出的房子远远不够44间，而且也不允许仆人去敲门询问多个房子，那么只能采用链地址的方式解决冲突，让侍卫们挤挤了。”"
		][ this.pro ];
	}
}
export{RoomateScene}