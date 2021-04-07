import {SceneBsDialog} from "./SceneBsDialog"
import {Dormitory} from "./Dormitory"
import { syz_first_scene } from "../syz_first_scene";
class chaptersScene extends eui.Component implements  eui.UIComponent {
    private searchStar:eui.Image;

	public constructor() {
		super();
        this.skinName="resource/eui_skins/scene/chaptersScene.exml";
        this.searchStar.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
            this.sceneCliked();
        }, this );
	}
    public sceneCliked() {
                  //发送请求
        //   var obj = { iduser:1 };
        //   var request = new egret.HttpRequest();
        //   request.responseType = egret.HttpResponseType.TEXT;
        //   request.open("http://localhost:9092/user/getProgress",egret.HttpMethod.POST);
        //   request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        //   var papa=JSON.stringify(obj)
        //   request.send(papa);
        //   request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
        //   request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
        //   request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);

        this.parent.addChild(new syz_first_scene());
        this.parent.removeChild(this);
    }

    private onPostComplete(event:egret.Event):void {
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("post data : ",request.response);

        var progress=request.response;
        alert(progress);
        switch(progress){
            case "1":
                this.parent.addChild(new syz_first_scene());
                this.parent.removeChild(this);
                break;
            case "2":
                this.parent.addChild(new SceneBsDialog(0));
                this.parent.removeChild(this);
                break;
            case "3":
                this.parent.addChild(new Dormitory());
                this.parent.removeChild(this);
                break;
            default:

        }
        
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
export{chaptersScene}