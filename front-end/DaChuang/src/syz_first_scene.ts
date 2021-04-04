import { syz_second_scene } from "./syz_second_scene";

class syz_first_scene extends eui.Component{
    constructor(){
        super();
        this.skinName = "resource/eui_skins/syz_skins/syz_first_scene.exml"
    }

    public switch_dia_btn: eui.Button;
    public NPC_pic: eui.Image;
    public dialog: eui.Label;
    public point: number = 0;  

    private gameBtnClick(): void{
        this.parent.addChild(new syz_second_scene());
        this.parent.removeChild(this);
    }

    private onButtonClick(): void{
        this.point++;
        switch(this.point){
            case 0:
                this.NPC_pic.source = "Mr_Rabbit_png"
                this.dialog.text = "哦！天呐，天呐！我要迟到了！";
                break;
            case 1:
                this.NPC_pic.source = "me_png"
                this.dialog.text = "这里是、是爱丽丝梦游仙境？";
                break;
            case 2:
                this.NPC_pic.source = "angel_png"
                this.dialog.text = "嗯......或许你可以理解为另一个平行世界，赶紧跟上去吧，看看兔子先生会不会给我们线索。";
                break;
            case 3:
                this.NPC_pic.source = "me_png"
                this.dialog.text = "（追赶上兔子先生）“请问......”";
                break;
            case 4:
                this.NPC_pic.source = "Mr_Rabbit_png"
                this.dialog.text = "（嘭的一声跳进篱笆底下的一个兔子洞里）";
                break;
            case 5:
                var game_btn = new eui.Button();
                game_btn.label = "下去看看"
                game_btn.skinName = "resource/eui_skins/syz_skins/game_btn.exml"                
                game_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gameBtnClick,this);
                this.addChild(game_btn);
                this.NPC_pic.source = "me_png"
                this.dialog.text = "好吧......果然是爱丽丝梦游仙境的剧情";
                break;
            default:
                this.dialog.text = "default";
                break;
        }
        
    }

    protected childrenCreated(): void{
        super.childrenCreated();
        this.switch_dia_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }
}
export{syz_first_scene}