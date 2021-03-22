//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

import {SceneBegin} from "./scene/SceneBegin"
import {SceneBsDialog} from "./scene/SceneBsDialog"

class Main extends eui.UILayer {

    //用来显示请求发送状态的label
    private statusPostLabel: egret.TextField;
     /// 当前随机短语的索引
    private _idxPrevFocus:number;
     

    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        this._idxPrevFocus=0;
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }
    private _bitmapText:egret.BitmapText;
    private textfield: egret.TextField;
    private colorLabel: egret.TextField
    private indexNum: BigInteger
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        let sky = this.createBitmapByName("bg_jpg");
        this.addChild(sky);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        let topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, 172);
        topMask.graphics.endFill();
        topMask.y = 33;
        this.addChild(topMask);

        let icon: egret.Bitmap = this.createBitmapByName("egret_icon_png");
        this.addChild(icon);
        icon.x = 26;
        icon.y = 33;

        let line = new egret.Shape();
        line.graphics.lineStyle(2, 0xffffff);
        line.graphics.moveTo(0, 0);
        line.graphics.lineTo(0, 117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        this.addChild(line);
        
    
        this.colorLabel = new egret.TextField();
        this.colorLabel.textColor = 0xffffff;
        this.colorLabel.width = stageW - 172;
        this.colorLabel.textAlign = "center";
        this.colorLabel.text = "Hello Egret";
        this.colorLabel.size = 24;
        this.colorLabel.x = 172;
        this.colorLabel.y = 80;
        this.addChild(this.colorLabel);
        
        /// 轻触舞台以改变位图文本所用文字
        this.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
            this.updateBitmapTextContent();
        }, this );
        
        //this.updateBitmapTextContent();

        let textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.alpha = 0;
        textfield.width = stageW - 172;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.size = 24;
        textfield.textColor = 0xffffff;
        textfield.x = 172;
        textfield.y = 135;
        this.textfield = textfield;

        let button = new eui.Button();
        button.label = "Click!";
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }
    
    
     /// 用户交互触发位图文本内容变更
     private updateBitmapTextContent(){
         //console.log("no...");
         if( this._idxPrevFocus==4 ){     /// 避免与之前选择短语雷同
             this._idxPrevFocus=0;
         }
         this.colorLabel.text =  [
             "哦！天呐，天呐！我要迟到了！"
             ,"这里是、是爱丽丝梦游仙境？"
             ,"嗯......或许你可以理解为另一个平行世界，赶紧跟上去吧，看看兔子先生会不会给我们线索。"
             ,"（追赶上兔子先生）“请问....."
         ][ this._idxPrevFocus ];
         this._idxPrevFocus=this._idxPrevFocus+1;
         //console.log( "hit:", vcPhraseIdx, this._idxPrevFocus );
     }
    
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: Array<any>): void {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }

    /**
     * 点击按钮
     * Click the button
     */
    private onButtonClick(e: egret.TouchEvent) {
//发送请求
        // var statusPostLabel = new egret.TextField();
        // this.addChild(statusPostLabel);
        // statusPostLabel.size = 18;
        // statusPostLabel.x = 300;
        // statusPostLabel.y = 40;
        // statusPostLabel.text = "Sending POST request to httpbin.org";
        

        // var obj = { password:"123123", iduser:1};
        // var request = new egret.HttpRequest();
        // request.responseType = egret.HttpResponseType.TEXT;
        // request.open("http://localhost:9092/user/login",egret.HttpMethod.POST);
        // request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        // var papa=JSON.stringify(obj)
        // request.send(papa);
        // request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
        // request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
        // request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);;
      
        // let panel = new eui.Panel();
        // panel.title = "Title";
        // panel.horizontalCenter = 0;
        // panel.verticalCenter = 0;
        // this.addChild(panel);


        this.parent.addChild(new SceneBsDialog(0));
        this.parent.removeChild(this);
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
}
