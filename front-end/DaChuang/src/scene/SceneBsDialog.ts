import {MyButton} from "../component/MyButton"
import{BS_game} from "./BS_game"
import{Dormitory}from "./Dormitory"
import { BS_gameDetail } from "./BS_gameDetail";

class SceneBsDialog extends eui.Component implements  eui.UIComponent {
	/// 当前随机短语的索引
    private _idxPrevFocus:number;
	private nameLabel: eui.Label;
	private content:eui.Label;
	private character_pic: eui.Image;
	private btn: MyButton;
	private gs:BS_game;
	private bg:eui.Image;
	private hui:eui.Rect;
	

	public constructor(index:number) {
		super();
		this.skinName="resource/eui_skins/scene/BS_dialog.exml";
		this._idxPrevFocus=index;
		this.bg.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
            this.updateBitmapTextContent();
        }, this );
		this.hui.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
            this.updateBitmapTextContent();
        }, this );
		this.character_pic.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
            this.updateBitmapTextContent();
        }, this );
		this.content.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
            this.updateBitmapTextContent();
        }, this );
		this.nameLabel.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
            this.updateBitmapTextContent();
        }, this );
	}
	private updateBitmapTextContent() {
		this._idxPrevFocus=this._idxPrevFocus+1;
		switch(this._idxPrevFocus){
			case 1:
				this.nameLabel.text="#：";
				this.content.text="（气喘吁吁）“可算是追上你了，兔子先生，请问你有在这里见过时空碎片吗？噢，我是说，一块会发光的石头。”";
				this.character_pic.source="leadrole_png";
				break;
			case 2:
				this.nameLabel.text="兔子先生：";
				this.content.text="“石头？！什么石头，我可没空听你说什么石头。见鬼，这里该往左还是往右呢？我要找不到去公爵夫人那的路了！”";
				this.character_pic.source="rabbit_png";
				break;
			case 3:
				this.nameLabel.text="#：";
				this.content.text="“或许我可以帮你”";
				this.character_pic.source="leadrole_png";
				break;
			case 4:
				this.nameLabel.text="兔子先生：";
				this.content.text="“可是你要怎么帮我呢，这里一共有64条路，每一条路都通向一个地方，公爵夫人住在28号，要是每一条路都走一遍，我就要迟到啦！”";
				this.character_pic.source="rabbit_png";
				break;	
			case 5:
				this.nameLabel.text="Eric：";
				this.content.text="“当数据量很大时，顺序查找会花费很多的时间。”";
				this.character_pic.source="elfin_png";
				break;
			case 6:
				this.nameLabel.text="Eric：";
				this.content.text="“但门牌号似乎是按照一定顺序排列的，#，或许你可以试试二分查找。”";
				this.character_pic.source="elfin_png";
				this.touchEnabled=false;

				this.btn=new MyButton("开始尝试");
				this.btn.x=720;
				this.btn.y=500;
				this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switchToBsGame, this);
				this.addChild(this.btn);
				break;
			case 8:
				this.nameLabel.text="#：";
				this.content.text="“好的，谢谢你，兔子先生，我必须要去试一试”";
				this.character_pic.source="leadrole_png";
				break;
			case 9:
				//发送请求
				var obj = { iduser:1,progress:3 };
				var request = new egret.HttpRequest();
				request.responseType = egret.HttpResponseType.TEXT;
				request.open("http://localhost:9092/user/sendProgress",egret.HttpMethod.POST);
				request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				var papa=JSON.stringify(obj)
				request.send(papa);
				request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
				request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
				request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
				
				this.parent.addChild(new Dormitory());
			default:
				break;
		}
		
	}
	private switchToBsGame(TOUCH_TAP: string, switchToBsGame: any, arg2: this) {
		this.nameLabel.text="兔子先生：";
		this.content.text="“呼...真是太谢谢你了，关于发光石头，或许你可以去红皇后那碰碰运气。皇后正在举行茶话会，顺着这条路往下走就是了，不过别怪我没提醒你，皇后的脾气可不算好。”";
		this.character_pic.source="rabbit_png";
		this.gs=new BS_game();
		this.removeChild(this.btn);
		this.addChild(this.gs);
	}

	private onPostComplete(event:egret.Event):void {
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("post data : ",request.response);

        var datas=JSON.parse(request.response);
        alert(datas[0].username);
        
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "POST response:\n" + request.response.substring(0, 50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 300;
        responseLabel.y = 70;
    }
    private onPostIOError(event:egret.IOErrorEvent):void {
        console.log("post error : " + event);
    }
    private onPostProgress(event:egret.ProgressEvent):void {
        console.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
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

export{SceneBsDialog}