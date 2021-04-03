
class syz_forth_scene extends eui.Component{
    constructor(){
        super();
        this.skinName = "resource/eui_skins/syz_skins/syz_forth_scene.exml"
    }

    public switch_dia_btn: eui.Button;
    public NPC_pic: eui.Image;
    public dialog: eui.Label;
    public point: number = 0; 

    private onButtonClick(): void{
        this.point++;
        switch(this.point){
            case 0:
                this.NPC_pic.source = "angel_png"
                this.dialog.text = "这就是顺序查找的过程了";
                break;
            case 1:
                this.NPC_pic.source = "me_png"
                this.dialog.text = "这很简单嘛";
                break;  
            case 2:
                this.NPC_pic.source = "angel_png"
                this.dialog.text = "是的，但是当数据量很大时，比较的次数会增加，这会花费很多的时间";
                break;   
            case 3:
                this.NPC_pic.source = "me_png"
                this.dialog.text = "我们走吧";
                break;   
            case 4:
                this.parent.addChild(new SceneBsDialog(0));
                this.parent.removeChild(this);       
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
