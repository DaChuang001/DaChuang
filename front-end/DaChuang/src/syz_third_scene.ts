import { syz_game } from "./syz_game";

class syz_third_scene extends eui.Component{
    constructor(){
        super();
        this.skinName = "resource/eui_skins/syz_skins/syz_third_scene.exml"
    }

    public switch_dia_btn: eui.Button;
    public NPC_pic: eui.Image;
    public dialog: eui.Label;
    public point: number = 0; 

    private gameBtnClick(): void{
        this.parent.addChild(new syz_game());
        this.parent.removeChild(this);
    }

    private onButtonClick(): void{
        this.point++;
        switch(this.point){
            case 0:
                this.NPC_pic.source = "me_png"
                this.dialog.text = "这里只有一张三条腿的玻璃小桌子。桌上没有别的东西，只有一把小小的金钥匙";
                break;
            case 1:
                this.NPC_pic.source = "angel_png"
                this.dialog.text = "这把钥匙或许能打开某扇门，可是到底是8扇门中的哪一扇呢？";
                break;
            case 2:
                this.NPC_pic.source = "me_png"
                this.dialog.text = "先随便试一扇好了";
                break;    
            case 3:
                var game_btn = new eui.Button();
                game_btn.label = "开始尝试"
                game_btn.skinName = "resource/eui_skins/syz_skins/game_btn.exml"                
                game_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gameBtnClick,this);
                this.addChild(game_btn);
                this.NPC_pic.source = "angel_png"
                this.dialog.text = "或许从第一扇开始，按顺序比较，会更加清晰。";
                break;                      
            default:
                this.dialog.text = "或许从第一扇开始，按顺序比较，会更加清晰。";
                break;
        }
    }

    protected childrenCreated(): void{
        super.childrenCreated();
        this.switch_dia_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }
}
export{syz_third_scene}
