import { chaptersScene } from "./chaptersScene";

class welcomeScene extends eui.Component implements  eui.UIComponent {
    private myButton:eui.Image;
    private buttonLabel:eui.Label;

	public constructor() {
		super();
		this.skinName="resource/eui_skins/scene/Welcome.exml";
        this.myButton.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
            this.sceneCliked();
        }, this );
        this.buttonLabel.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
            this.sceneCliked();
        }, this );

	}
    private sceneCliked() {
        this.parent.addChild(new chaptersScene());
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
export{welcomeScene}