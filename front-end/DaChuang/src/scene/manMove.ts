class manMove extends eui.Component implements  eui.UIComponent {
	public queenWord:eui.Label;
	public pro:number;
	public A:eui.Image;
	public B:eui.Image;
	public move: egret.tween.TweenGroup;

	public constructor() {
		super();
		this.skinName="resource/eui_skins/scene/manMove.exml"
		// 获取进度
		this.pro=1;
		this.move.play();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.update,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	private update(){
		this.parent.addChild(new finalRoom());
		this.parent.removeChild(this);
	}
}