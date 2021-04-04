import { syz_forth_scene } from "./syz_forth_scene";

class syz_game extends eui.Component{
    constructor(){
        super();
        this.skinName = "resource/eui_skins/syz_skins/syz_game_scene.exml"
    }

    public tips: eui.Label;
    public flag: number = 0;
/**
        * EXML中对应id为tweenGroup的动画组对象
        */
    public key0: egret.tween.TweenGroup;
    public key1: egret.tween.TweenGroup;
    public key2: egret.tween.TweenGroup;
    public key3: egret.tween.TweenGroup;
    public key4: egret.tween.TweenGroup;
    public key5: egret.tween.TweenGroup;

    /**
        * EXML中对应id为button的按钮对象
        */
    public door1Btn: eui.Button;
    public door2Btn: eui.Button;
    public door3Btn: eui.Button;
    public door4Btn: eui.Button;
    public door5Btn: eui.Button;
    public door6Btn: eui.Button;

    /**
        * 当点击按钮时播放动画
        */
    private onDoor1Clicked(): void {
        this.flag = 1;
        this.key0.play();
    }
    private onDoor2Clicked(): void {
        if(this.flag==1){
            this.key1.play();
            this.flag++;
        }
        else
            this.tips.text = "最好按顺序查找哦~"
    }
    private onDoor3Clicked(): void {
        if(this.flag==2){
            this.key2.play();
            this.flag++;
        }
    else
        this.tips.text = "最好按顺序查找哦~"
    }
    private onDoor4Clicked(): void {
        if(this.flag==3){
            this.key3.play();
            this.flag++;
        }
    else
        this.tips.text = "最好按顺序查找哦~"
    }
    private onDoor5Clicked(): void {
        if(this.flag==4){
            this.key4.play();
            this.tips.text = "恭喜你打开了正确的门！"
            this.flag++;

            var r=new eui.Rect();
				r.x=0;
				r.y=0;
				r.width=1440;
				r.height=900;
				r.fillAlpha=0;
				r.addEventListener( egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
					this.parent.addChild(new syz_forth_scene());
                    this.parent.removeChild(this);
				}, this );
				this.addChild(r);
        }
        else
            this.tips.text = "最好按顺序查找哦~"
    }
    private onDoor6Clicked(): void {
        if(this.flag==5)
            this.key5.play();
        else
            this.tips.text = "最好按顺序查找哦~"
    }

    protected childrenCreated(): void{
        super.childrenCreated();
        this.door1Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDoor1Clicked, this);
        this.door2Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDoor2Clicked, this);
        this.door3Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDoor3Clicked, this);
        this.door4Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDoor4Clicked, this);
        this.door5Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDoor5Clicked, this);
        this.door6Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDoor6Clicked, this);
    }
}
export{syz_game}