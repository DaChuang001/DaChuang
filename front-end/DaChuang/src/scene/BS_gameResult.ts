import { SceneBsDialog } from "./SceneBsDialog";

class BS_gameResult extends eui.Component implements  eui.UIComponent {
    private status:number;
    private resultNum:number;
    private plank2Label:eui.Label;
    private resultLabel:eui.Label;

	public constructor(resultNum:number, status:number) {
		super();
		this.skinName="resource/eui_skins/scene/BS_gameResult.exml";
        this.status=status;
        this.resultNum=resultNum;
        this.plank2Label.text=""+this.resultNum;
        if(this.status){
            this.resultLabel.text="恭喜你，找到了！";
        }else{
            this.resultLabel.text="诶呀，找错了...";
        }
        // this.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
        //     this.goBack();
        // }, this );
	}
    // goBack() {
    //     if(status){//转跳到对话
    //         this.addChild(new SceneBsDialog(6));
    //     }else{//重新再来

    //     }
    // }

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}

export{BS_gameResult}