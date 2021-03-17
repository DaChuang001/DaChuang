import {MyButton} from "../component/MyButton"

class SceneBsDialog extends eui.Component implements  eui.UIComponent {
	/// 当前随机短语的索引
    private _idxPrevFocus:number;
	private nameLabel: eui.Label;
	private content:eui.Label;
	private character_pic: eui.Image;
	private btn: MyButton;

	public constructor() {
		super();
		this.skinName="resource/eui_skins/scene/BS_dialog.exml";
		this._idxPrevFocus=0;
		this.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
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
				
				this.btn=new MyButton();
				this.btn.x=720;
				this.btn.y=500;
				this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switchToBsGame, this);
				this.addChild(this.btn);

				break;
			default:
				break;
		}
		
	}
	switchToBsGame(TOUCH_TAP: string, switchToBsGame: any, arg2: this) {
		console.log("Wa");
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