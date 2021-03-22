import { MyButton } from "./MyButton";

class MyBroad extends eui.Component implements  eui.UIComponent {
	private btn:eui.Group;

	public constructor() {
		super();
		this.skinName="resource/eui_skins/component/MyBroad.exml"
		this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideBroad, this);
	}
	hideBroad(TOUCH_TAP: string, hideBroad: any, arg2: this) {
		this.parent.removeChild(this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}

export{MyBroad}