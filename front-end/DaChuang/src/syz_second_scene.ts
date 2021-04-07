import { syz_third_scene } from "./syz_third_scene";

class syz_second_scene extends eui.Component{
    constructor(){
        super();
        this.skinName = "resource/eui_skins/syz_skins/syz_second_scene.exml"
    }

    public switch_dia_btn: eui.Button;
    public NPC_pic: eui.Image;
    public dialog: eui.Label;
    public point: number = 0; 

    private gameBtnClick(): void{
        this.parent.addChild(new syz_third_scene());
        this.parent.removeChild(this);
    }

    private onButtonClick(): void{
        this.point++;
        switch(this.point){
            case 0:
                this.NPC_pic.source = "angel_png"
                this.dialog.text = "你来到了一间长长的低矮大厅，天花板上挂着一长排的灯。大厅的一边有8扇门，但都是锁着的，一个也打不开";
                break;
            case 1:
                var game_btn = new eui.Button();
                game_btn.label = "四处看看"
                game_btn.skinName = "resource/eui_skins/syz_skins/game_btn.exml"                
                game_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gameBtnClick,this);
                this.addChild(game_btn);
                this.NPC_pic.source = "me_png"
                this.dialog.text = "奇怪，兔子先生怎么不见了呢？";
                break;                
            default:
                this.dialog.text = "奇怪，兔子先生怎么不见了呢？";
                break;
        }
        
    }

    protected childrenCreated(): void{
        super.childrenCreated();
        this.switch_dia_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }
}
export{syz_second_scene}
