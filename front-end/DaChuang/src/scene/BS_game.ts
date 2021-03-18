import { RedPoint } from "../component/RedPoint";
import { BS_gameDetail } from "./BS_gameDetail";
import {MyButton} from "../component/MyButton"

class BS_game extends eui.Component implements  eui.UIComponent {
	private num:number;
	private leftRoad:eui.Rect;
	private rightRoad:eui.Rect;
	private role_pic:eui.Image;
	private gameDetail:BS_gameDetail;
	private plank2Label:eui.Label;
	private leftLabel:eui.Label;
	private rightLabel:eui.Label;

	public constructor() {
		super();
		this.skinName="resource/eui_skins/scene/BS_game.exml"
		var detailScene=new BS_gameDetail();
		detailScene.x=0;
		detailScene.y=600;
		this.addChild(detailScene);
		this.gameDetail=detailScene;
		this.num=16;
		this.leftRoad.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
            this.chooseLeft();
        }, this );
		this.rightRoad.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
            this.chooseRight();
        }, this );
	}
	private chooseRight() {
		console.log("Right!");
		var tw = egret.Tween.get( this.role_pic );
        tw.to( {x:900,y:180}, 1000 ).call(this.updateScene,this);
		// window.location.reload(true);
		this.num=24;
	}
	private chooseLeft() {
		console.log("Left!");
		var tw = egret.Tween.get( this.role_pic );
        tw.to( {x:250,y:180}, 1000 );
	}

	private updateScene(){
		console.log("gengxin")
		this.gameDetail.updateRedPoint();
		this.leftLabel.text="门牌号小于"+this.num;
		this.rightLabel.text="门牌号大于"+this.num;
		this.plank2Label.text=""+this.num;
		this.role_pic.x=625;
		this.role_pic.y=600;
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

export{BS_game}