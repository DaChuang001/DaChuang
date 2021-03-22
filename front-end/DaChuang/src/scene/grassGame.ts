class grassGame extends eui.Component implements  eui.UIComponent {
	public house65:eui.Image;
	public house66:eui.Image;
	public house67:eui.Image;
	public house68:eui.Image;
	public house69:eui.Image;
	public house70:eui.Image;
	public house71:eui.Image;
	public house72:eui.Image;
	public house73:eui.Image;
	public house74:eui.Image;
	public house75:eui.Image;
	private _bShapeTest:boolean;

	public queenWord:eui.Label;
	public pro:number;

	public constructor() {
		super();
		this._bShapeTest = false;

		// 获取进度
		this.pro=0;
		
		this.queenWord=new eui.Label();
		this.queenWord.x=375;
		this.queenWord.y=314.302;
		this.queenWord.background=true;
		this.queenWord.textColor=0xFFFFFF;
		this.queenWord.height=55;
		this.queenWord.width=350;
		this.queenWord.textAlign="center";
		this.queenWord.backgroundColor=0x3D7ECC;
		this.queenWord.verticalAlign="middle";
		this.addChild(this.queenWord);
		if(this.pro==0){
			this.queenWord.text="红桃A";
		}
		else if(this.pro==1){
			this.queenWord.text="方片3";
		}
		else if(this.pro==2){
			this.queenWord.text="黑桃A";
		}
		this.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this );

	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
	private checkCollision( stageX:number, stageY:number ):void {
        var f65:boolean = this.house65.hitTestPoint( stageX, stageY, this._bShapeTest );
		var f66:boolean = this.house66.hitTestPoint( stageX, stageY, this._bShapeTest );
		var f67:boolean = this.house67.hitTestPoint( stageX, stageY, this._bShapeTest );
		var f68:boolean = this.house68.hitTestPoint( stageX, stageY, this._bShapeTest );
		var f69:boolean = this.house69.hitTestPoint( stageX, stageY, this._bShapeTest );
		var f70:boolean = this.house70.hitTestPoint( stageX, stageY, this._bShapeTest );
		var f71:boolean = this.house71.hitTestPoint( stageX, stageY, this._bShapeTest );
		var f72:boolean = this.house72.hitTestPoint( stageX, stageY, this._bShapeTest );
		var f73:boolean = this.house73.hitTestPoint( stageX, stageY, this._bShapeTest );
		var f74:boolean = this.house74.hitTestPoint( stageX, stageY, this._bShapeTest );
		var f75:boolean = this.house75.hitTestPoint( stageX, stageY, this._bShapeTest );

        
        /// 文字信息更新
        this.click65( f65 ? 1 :2 );
		this.click66( f66 ? 1 :2 );
		this.click67( f67 ? 1 :2 );
		this.click68( f68 ? 1 :2 );
		this.click69( f69 ? 1 :2 );
		this.click70( f70 ? 1 :2 );
		this.click71( f71 ? 1 :2 );
		this.click72( f72 ? 1 :2 );
		this.click73( f73 ? 1 :2 );
		this.click74( f74 ? 1 :2 );
		this.click75( f75 ? 1 :2 );
    }

	private touchHandler( evt:egret.TouchEvent ){
		this.checkCollision( evt.stageX, evt.stageY );
        switch ( evt.type ){
            case egret.TouchEvent.TOUCH_MOVE:
				alert("touch case");
                this.checkCollision( evt.stageX, evt.stageY );
                break;
        }
    }

	private click65( iStatus:number ){
		if(this.pro==0&&iStatus==1){
			this.queenWord.text="还算机灵！方片3呢？";
			this.pro++;
		}
		else if(this.pro==2&&iStatus==1){
			this.parent.addChild(new RoomateScene());
			this.parent.removeChild(this);
		}
		else{
			this.queenWord.text="我要把你变成蚂蚁！";
		}
    }
	private click66( iStatus:number ){
        if(iStatus==1){
			this.queenWord.text="我要把你变成蚂蚁！";
		}
    }
	private click67( iStatus:number ){
        if(this.pro==1&&iStatus==1){
			this.queenWord.text="竟然答对了！那黑桃A住哪？";
			this.pro++;
		}
		else if(this.pro==0&&iStatus==1){this.queenWord.text="我要把你变成蚂蚁！";}
		else if(this.pro==2&&iStatus==1){this.queenWord.text="我要把你变成蚂蚁！";}
    }
	private click68( iStatus:number ){
        if(iStatus==1){
			this.queenWord.text="我要把你变成蚂蚁！";
		}
    }
	private click69( iStatus:number ){
        if(iStatus==1){
			this.queenWord.text="我要把你变成蚂蚁！";
		}
    }
	private click70( iStatus:number ){
        if(iStatus==1){
			this.queenWord.text="我要把你变成蚂蚁！";
		}
    }
	private click71( iStatus:number ){
		if(iStatus==1){
			this.queenWord.text="我要把你变成蚂蚁！";
		}
    }
	private click72( iStatus:number ){
        if(iStatus==1){
			this.queenWord.text="我要把你变成蚂蚁！";
		}
    }
	private click73( iStatus:number ){
        if(iStatus==1){
			this.queenWord.text="我要把你变成蚂蚁！";
		}
    }
	private click74( iStatus:number ){
        if(iStatus==1){
			this.queenWord.text="我要把你变成蚂蚁！";
		}
    }
	private click75( iStatus:number ){
        if(iStatus==1){
			this.queenWord.text="我要把你变成蚂蚁！";
		}
    }
}