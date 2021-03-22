import { RedPoint } from "../component/RedPoint";
import { BS_gameDetail } from "./BS_gameDetail";
import {MyButton} from "../component/MyButton";
import{ BS_gameResult } from "./BS_gameResult";
import { MyBroad } from "../component/MyBroad";

class BS_game extends eui.Component implements  eui.UIComponent {
	private num:number;
	private leftRoad:eui.Rect;
	private rightRoad:eui.Rect;
	private role_pic:eui.Image;
	private gameDetail:BS_gameDetail;
	private plank2Label:eui.Label;
	private leftLabel:eui.Label;
	private rightLabel:eui.Label;
	private noArr:number[];
	private result:number;
	public _idxPrevFocus:number;
	private pilesNum:number;
	private low:number;
	private high:number;
	private sceneResult:BS_gameResult;

	public constructor() {
		super();
		this.skinName="resource/eui_skins/scene/BS_game.exml"
		var detailScene=new BS_gameDetail();
		detailScene.x=0;
		detailScene.y=600;
		this.addChild(detailScene);
		this.gameDetail=detailScene;
		this.result=13;
		this._idxPrevFocus=1;
		this.pilesNum=5;

		this.low=0;
		this.high=31;
		this.num=Math.ceil((this.low+this.high)/2);
		console.log("middle:"+this.num);
		this.leftRoad.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
            this.chooseLeft();
        }, this );
		this.rightRoad.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
            this.chooseRight();
        }, this );
		this.addChild(new MyBroad());
	}
	private chooseRight() {
		console.log("Right!");
		this.low=this.num;
		this.num=Math.ceil((this.low+this.high)/2);
		this._idxPrevFocus=this._idxPrevFocus+1;
		var tw = egret.Tween.get( this.role_pic );
        tw.to( {x:900,y:180}, 1000 ).call(this.updateScene,this);
	}

	private chooseLeft() {
		console.log("Left!");
		this.high=this.num;
		this.num=Math.ceil((this.low+this.high)/2);
		this._idxPrevFocus=this._idxPrevFocus+1;
		var tw = egret.Tween.get( this.role_pic );
		tw.to( {x:250,y:180}, 1000 ).call(this.updateScene,this);
	}

	private updateScene(){
		console.log("gengxin")
		if(this.num==this.result){//找到目标节点，动画后转跳到成功界面
			console.log("Succeed!");
			this.gameDetail.updateRedPoint(this.num);
			var sceneResult=new BS_gameResult(this.num,1);
			this.addChild(sceneResult);
			this.setChildIndex(this.gameDetail,20);
					//搞个大的rect好回来
					var r=new eui.Rect();
					r.x=0;
					r.y=0;
					r.width=1440;
					r.height=900;
					r.fillAlpha=0;
					r.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
						//转跳Dialog
						this.parent.touchEnabled=true;
						this.parent.removeChild(this);
					}, this );
					this.addChild(r);
		}else{
			if(this._idxPrevFocus==this.pilesNum){//转跳到失败界面
				console.log("Failed!");
				this.gameDetail.updateRedPoint(this.num);
				var sceneResult=new BS_gameResult(this.num,0);
				this.sceneResult=sceneResult;
				this.addChild(sceneResult);
				this.setChildIndex(this.gameDetail,20);
				//搞个大的rect好回来
				var r=new eui.Rect();
				r.x=0;
				r.y=0;
				r.width=1440;
				r.height=900;
				r.fillAlpha=0;
				r.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
					//重新开始
					this.result=13;
					this._idxPrevFocus=1;
					this.pilesNum=5;

					this.low=0;
					this.high=31;
					this.num=Math.ceil((this.low+this.high)/2);
					this.plank2Label.text="16";
					this.leftLabel.text="门牌号小于16";
					this.rightLabel.text="门牌号大于16";
					this.gameDetail.reset();
					this.removeChild(this.sceneResult)
					this.removeChild(r);
				}, this );
				this.addChild(r);
			}else{//继续往下找更新界面
				this.gameDetail.updateRedPoint(this.num);
				this.leftLabel.text="门牌号小于"+this.num;
				this.rightLabel.text="门牌号大于"+this.num;
				this.plank2Label.text=""+this.num;
				// this.role_pic.x=625;
				// this.role_pic.y=600;
			}
		}
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