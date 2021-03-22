class finalRoom extends eui.Component implements  eui.UIComponent {
	public textLabel:eui.Label; 
	public character:eui.Image;
	public characterName:eui.Label;
	public head:Number;
	public B:eui.Image;

	public pro:number;
	public constructor() {
		super();

		this.characterName=new eui.Label();
		this.characterName.textColor = 0xffffff;
        this.characterName.textAlign = "center";
		this.characterName.x=270;
		this.characterName.y=690;
		this.addChild(this.characterName);


		this.textLabel=new eui.Label();
        this.textLabel.textColor = 0xffffff;
        this.textLabel.textAlign = "left";
        this.textLabel.width=1000;
        this.textLabel.size=24;
        this.textLabel.x = 331;
        this.textLabel.y = 750;
        this.addChild(this.textLabel);

		// 获取进度
		this.pro=0;

		if(this.pro==0){
			this.characterName.text="红桃A和黑桃A";
			this.textLabel.text="哈哈不打不相识，原来我们是室友啊";
		}
		else if(this.pro==1){
			this.characterName.text="红皇后";
			this.character.source="queen_png";
			this.textLabel.text="勉强还行，这石头就给你吧。";
		}
		else if(this.pro==2){
			this.characterName.text="玩家";
			this.character.source="girl_png";
			this.textLabel.text="感谢您的慷慨。";
		}
		else if(this.pro==3){
			this.characterName.text="出色蒂诺";
			this.character.source="helper_png";
			this.textLabel.text="好了，我们赶紧回到主空间，把这块碎片补上吧。";
		}

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
	
	private updateTextContent(){
		this.pro=this.pro+1;
		if(this.pro==0){
			this.characterName.text="红桃A和黑桃A";
			this.textLabel.text="哈哈不打不相识，原来我们是室友啊";
		}
		else if(this.pro==1){
			this.characterName.text="红皇后";
			this.character.source="queen_png";
			this.textLabel.text="勉强还行，这石头就给你吧。";
		}
		else if(this.pro==2){
			this.characterName.text="玩家";
			this.character.source="girl_png";
			this.textLabel.text="感谢您的慷慨。";
		}
		else if(this.pro==3){
			this.characterName.text="出色蒂诺";
			this.character.source="helper_png";
			this.textLabel.text="好了，我们赶紧回到主空间，把这块碎片补上吧。";
		}
	}
}